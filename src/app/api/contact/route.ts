import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  packageName?: string;
  website?: string; // Honeypot field
  renderedAt?: number; // Spam timing check
}

const VALID_SERVICES = [
  "closed-testing",
  "play-console-account-setup",
  "production-access-guidance",
  "app-publishing-assistance",
  "app-rejection-help",
  "play-store-aso",
  "other",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Spam protection: Honeypot check
    // If hidden 'website' field was filled, silently drop or reject bot
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // 2. Spam protection: Form fill velocity check (at least 1 second)
    if (body.renderedAt && Date.now() - body.renderedAt < 1000) {
      return NextResponse.json(
        { success: false, error: "Submission occurred too quickly. Please try again." },
        { status: 400 }
      );
    }

    // 3. Validation
    const name = body.name?.trim();
    const email = body.email?.trim();
    const service = body.service?.trim();
    const message = body.message?.trim();
    const packageName = body.packageName?.trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!service || !VALID_SERVICES.includes(service)) {
      return NextResponse.json(
        { success: false, error: "Please select a valid service." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a message describing your app status (at least 10 characters)." },
        { status: 400 }
      );
    }

    // 4. Check available backend delivery configurations
    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    // Delivery method A: Resend API
    if (resendApiKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "PlayStoreGuide Inquiries <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO_EMAIL || "support@playstoreguide.com"],
          reply_to: email,
          subject: `New Lead: [${service}] from ${name}`,
          html: `
            <h2>New Inquiry on PlayStoreGuide.com</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            ${packageName ? `<p><strong>Package Name:</strong> ${packageName}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          `,
        }),
      });

      if (!emailRes.ok) {
        const errorData = await emailRes.text();
        console.error("Resend delivery failed:", errorData);
        return NextResponse.json(
          {
            success: false,
            backendConnected: true,
            error: "Unable to deliver inquiry via email service. Please email support@playstoreguide.com directly.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        backendConnected: true,
        message: "Your inquiry has been received. Our team will review your application status and respond within 12–24 business hours.",
      });
    }

    // Delivery method B: Webhook Dispatch
    if (webhookUrl) {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "playstoreguide.com",
          name,
          email,
          service,
          packageName,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!webhookRes.ok) {
        console.error("Webhook dispatch failed:", await webhookRes.text());
        return NextResponse.json(
          {
            success: false,
            backendConnected: true,
            error: "Webhook dispatch service error. Please email support@playstoreguide.com directly.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        backendConnected: true,
        message: "Your inquiry has been dispatched to our engineering team. We will respond within 12–24 business hours.",
      });
    }

    // Delivery method C: No external delivery backend connected in current environment
    // Log securely to server console for development tracing
    console.warn(
      `[LEAD DISPATCH PENDING - NO BACKEND CONNECTED] Name: ${name}, Email: ${email}, Service: ${service}, Package: ${packageName || "N/A"}`
    );

    // Honestly communicate that the automated backend is unconfigured, avoiding false success
    return NextResponse.json(
      {
        success: false,
        backendConnected: false,
        error: "Our automated dispatch service is currently not connected to an email service in this environment. Please send your message directly to support@playstoreguide.com or use the direct email button below.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or email support@playstoreguide.com.",
      },
      { status: 500 }
    );
  }
}
