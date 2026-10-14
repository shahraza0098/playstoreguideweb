import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

// Maximum request body size: 32 KB
const MAX_PAYLOAD_BYTES = 32 * 1024;

// Validation limits
const MAX_NAME_LENGTH = 100;
const MIN_NAME_LENGTH = 2;
const MAX_EMAIL_LENGTH = 254;
const MIN_EMAIL_LENGTH = 5;
const MAX_PACKAGE_NAME_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 5000;
const MIN_MESSAGE_LENGTH = 10;
const MIN_SUBMISSION_ELAPSED_MS = 1500; // Minimum time between form render and submission
const MAX_SESSION_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days max form session age

export const VALID_SERVICES = [
  "closed-testing",
  "play-console-account-setup",
  "production-access-guidance",
  "app-publishing-assistance",
  "app-rejection-help",
  "play-store-aso",
  "other",
] as const;

export type ValidService = (typeof VALID_SERVICES)[number];

const SERVICE_LABELS: Record<ValidService, string> = {
  "closed-testing": "Closed Testing Coordination (20 Testers / 14 Days)",
  "play-console-account-setup": "Play Console Account Setup & D-U-N-S Advisory",
  "production-access-guidance": "Production Access Review Questionnaire Advisory",
  "app-publishing-assistance": "End-to-End Publishing & Policy Compliance Audit",
  "app-rejection-help": "App Rejection Troubleshooting & Appeals Assistance",
  "play-store-aso": "Store Listing Optimization (ASO) & Conversion",
  "other": "General Android Publishing Consultation",
};

const STAGE_LABELS: Record<string, string> = {
  "in-development": "In Active Development (Pre-Release Build)",
  "account-verification": "Developer Account Verification & D-U-N-S Pending",
  "closed-testing": "Closed Testing Track Active (Recruiting Testers)",
  "production-questionnaire": "Ready to Submit Production Access Application",
  "app-rejected": "App Rejected / Received Policy Warning",
  "published-aso": "Published on Google Play / Seeking Optimization",
};

const URGENCY_LABELS: Record<string, string> = {
  immediate: "Immediate Priority (Within 24–48 Hours)",
  "this-week": "Standard Timeline (Within 1 Week)",
  "planning-ahead": "Planning Ahead (2+ Weeks Out)",
  standard: "Standard Timeline",
};

/**
 * Standard RFC 5322 compliant email regex.
 * Disallows control characters, unquoted spaces, and unclosed brackets.
 */
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Package name validation: Java/Android reverse domain convention
 * (e.g., com.example.app) or simple dot-separated identifiers.
 */
const PACKAGE_NAME_REGEX = /^[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*$/;

/**
 * Strict HTML escaping to prevent cross-site scripting or HTML injection
 * inside recipient email clients.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Strip newline and control characters to prevent email header injection attacks
 */
function sanitizeSingleLine(str: string): string {
  return str.replace(/[\r\n\x00-\x1f\x7f]/g, " ").trim();
}

/**
 * Optional Cloudflare Turnstile token verification
 */
async function verifyTurnstile(token: string, clientIp: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secretKey) return true; // Turnstile not configured, allow pass-through

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    formData.append("remoteip", clientIp);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      cache: "no-store",
    });

    if (!res.ok) return false;
    const data = (await res.json()) as { success: boolean };
    return Boolean(data.success);
  } catch (error) {
    console.error("[Contact API] Turnstile verification exception:", error instanceof Error ? error.message : error);
    return false;
  }
}

export async function POST(request: Request) {
  // 1. Enforce payload size limit before processing
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      { success: false, error: "Payload too large. Maximum allowed size is 32KB." },
      { status: 413 }
    );
  }

  // 2. Parse and validate JSON structure
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json(
        { success: false, error: "Invalid request format. Expected a JSON object." },
        { status: 400 }
      );
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { success: false, error: "Malformed JSON payload in request." },
      { status: 400 }
    );
  }

  // 3. Rate limiting check (distributed Upstash Redis with in-memory fallback)
  const clientIp = getClientIp(request);
  const rateLimit = await checkRateLimit(clientIp, 5, 600); // 5 requests per 10 minutes per IP

  if (!rateLimit.success) {
    const retryAfter = Math.max(1, rateLimit.reset - Math.floor(Date.now() / 1000));
    return NextResponse.json(
      {
        success: false,
        error: "Too many contact submissions from your address. Please wait a few minutes before trying again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(rateLimit.reset),
        },
      }
    );
  }

  // 4. Honeypot verification
  // If the hidden 'website' field was filled out, reject immediately
  const website = typeof body.website === "string" ? body.website.trim() : "";
  if (website.length > 0) {
    return NextResponse.json(
      { success: false, error: "Invalid submission detected." },
      { status: 400 }
    );
  }

  // 5. Bot velocity check (timing inspection)
  const renderedAt = body.renderedAt;
  if (typeof renderedAt !== "number" || !Number.isFinite(renderedAt)) {
    return NextResponse.json(
      { success: false, error: "Form session is invalid. Please refresh the page and try again." },
      { status: 400 }
    );
  }

  const now = Date.now();
  const elapsed = now - renderedAt;

  // Stale session or future timestamp skew
  if (renderedAt > now + 30000 || elapsed > MAX_SESSION_AGE_MS) {
    return NextResponse.json(
      { success: false, error: "Form session has expired. Please refresh the page." },
      { status: 400 }
    );
  }

  // Implausibly fast submission (likely scripted bot)
  if (elapsed < MIN_SUBMISSION_ELAPSED_MS) {
    return NextResponse.json(
      { success: false, error: "Submission occurred too quickly. Please take a moment and submit again." },
      { status: 400 }
    );
  }

  // 6. Optional CAPTCHA / Turnstile token validation if configured
  if (typeof body.turnstileToken === "string" && body.turnstileToken.length > 0) {
    const isValidToken = await verifyTurnstile(body.turnstileToken, clientIp);
    if (!isValidToken) {
      return NextResponse.json(
        { success: false, error: "Bot verification failed. Please try again." },
        { status: 400 }
      );
    }
  }

  // 7. Input validation and sanitization
  const rawName = typeof body.name === "string" ? body.name.trim() : "";
  const rawEmail = typeof body.email === "string" ? body.email.trim() : "";
  const rawService = typeof body.service === "string" ? body.service.trim() : "";
  const rawMessage = typeof body.message === "string" ? body.message.trim() : "";
  const rawPackageName = typeof body.packageName === "string" ? body.packageName.trim() : "";
  const rawStage = typeof body.stage === "string" ? body.stage.trim() : "";
  const rawUrgency = typeof body.urgency === "string" ? body.urgency.trim() : "";

  // Name validation
  if (!rawName || rawName.length < MIN_NAME_LENGTH || rawName.length > MAX_NAME_LENGTH) {
    return NextResponse.json(
      { success: false, error: `Please enter your name (${MIN_NAME_LENGTH}–${MAX_NAME_LENGTH} characters).` },
      { status: 400 }
    );
  }
  if (/[\r\n]/.test(rawName)) {
    return NextResponse.json(
      { success: false, error: "Name contains invalid newline characters." },
      { status: 400 }
    );
  }

  // Email validation
  if (!rawEmail || rawEmail.length < MIN_EMAIL_LENGTH || rawEmail.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(rawEmail)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address (up to 254 characters)." },
      { status: 400 }
    );
  }
  if (/[\r\n]/.test(rawEmail)) {
    return NextResponse.json(
      { success: false, error: "Email contains invalid newline characters." },
      { status: 400 }
    );
  }

  // Service validation against strict allowlist
  if (!rawService || !VALID_SERVICES.includes(rawService as ValidService)) {
    return NextResponse.json(
      { success: false, error: "Please select a valid service category from the list." },
      { status: 400 }
    );
  }
  const validService = rawService as ValidService;

  // Package name validation (optional)
  if (rawPackageName) {
    if (rawPackageName.length > MAX_PACKAGE_NAME_LENGTH || !PACKAGE_NAME_REGEX.test(rawPackageName)) {
      return NextResponse.json(
        {
          success: false,
          error: "Package name should only contain letters, numbers, dots, and underscores (e.g., com.example.app).",
        },
        { status: 400 }
      );
    }
  }

  // Message validation
  if (!rawMessage || rawMessage.length < MIN_MESSAGE_LENGTH || rawMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      {
        success: false,
        error: `Please describe your app and question (${MIN_MESSAGE_LENGTH}–${MAX_MESSAGE_LENGTH.toLocaleString()} characters).`,
      },
      { status: 400 }
    );
  }

  // Single-line sanitized values for headers/subjects
  const safeHeaderName = sanitizeSingleLine(rawName);
  const safeHeaderEmail = sanitizeSingleLine(rawEmail);
  const safeHeaderServiceLabel = sanitizeSingleLine(SERVICE_LABELS[validService] || validService);

  // Escaped values for safe HTML rendering
  const escapedName = escapeHtml(rawName);
  const escapedEmail = escapeHtml(rawEmail);
  const escapedService = escapeHtml(validService);
  const escapedServiceLabel = escapeHtml(SERVICE_LABELS[validService] || validService);
  const escapedPackageName = rawPackageName ? escapeHtml(rawPackageName) : null;
  const escapedStage = rawStage && STAGE_LABELS[rawStage] ? escapeHtml(STAGE_LABELS[rawStage]) : null;
  const escapedUrgency = rawUrgency && URGENCY_LABELS[rawUrgency] ? escapeHtml(URGENCY_LABELS[rawUrgency]) : null;

  // Preserve message line breaks safely without trusting client HTML
  const escapedMessageHtml = escapeHtml(rawMessage).replace(/\r?\n/g, "<br />");

  // Plain-text representation for multi-part email delivery
  const plainTextEmail = [
    `NEW PLAYSTOREGUIDE INQUIRY`,
    `========================================`,
    `Sender Name:   ${safeHeaderName}`,
    `Email:         ${safeHeaderEmail}`,
    `Service:       ${safeHeaderServiceLabel} (${validService})`,
    escapedPackageName ? `Package Name:  ${rawPackageName}` : null,
    escapedStage ? `Current Stage: ${STAGE_LABELS[rawStage]}` : null,
    escapedUrgency ? `Timeline:      ${URGENCY_LABELS[rawUrgency]}` : null,
    `Submission IP: ${clientIp}`,
    `Timestamp:     ${new Date().toISOString()}`,
    `========================================`,
    `MESSAGE:`,
    rawMessage,
    `========================================`,
    `Note: Reply directly to this email to respond to ${safeHeaderName} (${safeHeaderEmail}).`,
  ]
    .filter(Boolean)
    .join("\n");

  // HTML email template with strict sanitization
  const htmlEmail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Inquiry: ${escapedServiceLabel}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 24px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <div style="background-color: #0f172a; color: #ffffff; padding: 20px 24px;">
      <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: #ffffff;">PlayStoreGuide • New Client Inquiry</h2>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">${escapedServiceLabel}</p>
    </div>
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
        <tbody>
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 130px; font-weight: 600;">Client Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${escapedName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Client Email:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${escapedEmail}" style="color: #2563eb; text-decoration: underline;">${escapedEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Service Category:</td>
            <td style="padding: 8px 0; color: #0f172a;">${escapedServiceLabel} <span style="font-size: 12px; color: #64748b;">(${escapedService})</span></td>
          </tr>
          ${
            escapedPackageName
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Package Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-family: monospace;">${escapedPackageName}</td>
          </tr>`
              : ""
          }
          ${
            escapedStage
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Project Stage:</td>
            <td style="padding: 8px 0; color: #0f172a;">${escapedStage}</td>
          </tr>`
              : ""
          }
          ${
            escapedUrgency
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Urgency:</td>
            <td style="padding: 8px 0; color: #0f172a;">${escapedUrgency}</td>
          </tr>`
              : ""
          }
        </tbody>
      </table>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 16px;">
        <h3 style="font-size: 13px; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px 0;">Inquiry Details:</h3>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #334155; line-height: 1.6;">
          ${escapedMessageHtml}
        </div>
      </div>
    </div>
    <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
      Reply directly to this email to respond to <strong>${escapedName}</strong> (<a href="mailto:${escapedEmail}" style="color: #64748b;">${escapedEmail}</a>).
    </div>
  </div>
</body>
</html>`;

  // 8. Delivery execution
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim() || "support@playstoreguide.com";
  const isProduction = process.env.NODE_ENV === "production";

  // Method A: Resend API Integration
  if (resendApiKey) {
    // Sender configuration enforcement:
    // In production, require a sender on the verified playstoreguide.com domain.
    // Disallow silent fallback to onboarding@resend.dev in production.
    let resolvedFromEmail = contactFromEmail;

    if (isProduction) {
      if (
        !resolvedFromEmail ||
        resolvedFromEmail.includes("@resend.dev") ||
        !resolvedFromEmail.toLowerCase().includes("@playstoreguide.com")
      ) {
        console.error(
          "[Contact API] Misconfigured production sender. CONTACT_FROM_EMAIL must be a verified address on @playstoreguide.com. Refusing to send via unverified sender."
        );
        return NextResponse.json(
          {
            success: false,
            backendConnected: false,
            error: "Email delivery service configuration error. Please contact support@playstoreguide.com directly.",
          },
          { status: 503 }
        );
      }
    } else {
      // Non-production fallback (development/staging)
      if (!resolvedFromEmail) {
        resolvedFromEmail = "PlayStoreGuide Support <support@playstoreguide.com>";
      }
    }

    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resolvedFromEmail,
          to: [contactToEmail],
          reply_to: safeHeaderEmail,
          subject: `[Inquiry] ${safeHeaderServiceLabel} - ${safeHeaderName}`,
          html: htmlEmail,
          text: plainTextEmail,
        }),
        cache: "no-store",
      });

      if (!emailRes.ok) {
        let errorSummary = `HTTP ${emailRes.status}`;
        try {
          const errData = (await emailRes.json()) as { name?: string; message?: string };
          errorSummary += ` - ${errData.name || "Error"}: ${errData.message || ""}`;
        } catch {
          // Keep generic summary if error body is not JSON
        }

        // Log diagnostic error without exposing private message body or API key
        console.error(`[Contact API] Resend email delivery failed: ${errorSummary}`);

        return NextResponse.json(
          {
            success: false,
            backendConnected: true,
            error: "Unable to deliver inquiry via email service. Please email support@playstoreguide.com directly.",
          },
          { status: 502 }
        );
      }

      // Parse Resend confirmation ID
      let resendId = "confirmed";
      try {
        const resendPayload = (await emailRes.json()) as { id?: string };
        if (resendPayload.id) {
          resendId = resendPayload.id;
        }
      } catch {
        // Confirmation already established by 2xx status
      }

      console.info(`[Contact API] Email delivery confirmed via Resend. Message ID: ${resendId}`);

      return NextResponse.json({
        success: true,
        backendConnected: true,
        message:
          "Your inquiry has been received. Our team will review your application status and respond within 12–24 business hours.",
      });
    } catch (networkError) {
      console.error(
        "[Contact API] Network error connecting to Resend:",
        networkError instanceof Error ? networkError.message : "Connection failed"
      );
      return NextResponse.json(
        {
          success: false,
          backendConnected: true,
          error: "Network error reaching email dispatch service. Please email support@playstoreguide.com directly.",
        },
        { status: 502 }
      );
    }
  }

  // Method B: Webhook Dispatch Fallback (Only used if RESEND_API_KEY is not set)
  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "playstoreguide.com",
          name: safeHeaderName,
          email: safeHeaderEmail,
          service: validService,
          packageName: rawPackageName || null,
          stage: rawStage || null,
          urgency: rawUrgency || null,
          message: rawMessage,
          ip: clientIp,
          timestamp: new Date().toISOString(),
        }),
        cache: "no-store",
      });

      if (!webhookRes.ok) {
        console.error(`[Contact API] Webhook dispatch returned HTTP ${webhookRes.status}`);
        return NextResponse.json(
          {
            success: false,
            backendConnected: true,
            error: "Webhook dispatch service error. Please email support@playstoreguide.com directly.",
          },
          { status: 502 }
        );
      }

      console.info("[Contact API] Inquiry dispatch confirmed via Webhook.");

      return NextResponse.json({
        success: true,
        backendConnected: true,
        message:
          "Your inquiry has been dispatched to our engineering team. We will respond within 12–24 business hours.",
      });
    } catch (webhookError) {
      console.error(
        "[Contact API] Network error connecting to Webhook:",
        webhookError instanceof Error ? webhookError.message : "Connection failed"
      );
      return NextResponse.json(
        {
          success: false,
          backendConnected: true,
          error: "Network error reaching webhook dispatch service. Please email support@playstoreguide.com directly.",
        },
        { status: 502 }
      );
    }
  }

  // Method C: No external delivery backend configured
  console.warn(
    `[Contact API] No delivery provider configured (RESEND_API_KEY and CONTACT_WEBHOOK_URL unset). Service category: ${validService}`
  );

  return NextResponse.json(
    {
      success: false,
      backendConnected: false,
      error:
        "Our automated dispatch service is currently not configured in this environment. Please send your message directly to support@playstoreguide.com or use the direct email button below.",
    },
    { status: 503 }
  );
}
