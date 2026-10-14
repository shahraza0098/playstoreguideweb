"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Mail,
  RefreshCw,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  initialService?: string;
  sourceContext?: string;
}

interface FormFieldErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  { value: "closed-testing", label: "Closed Testing Coordination (20 Testers / 14 Days)" },
  { value: "play-console-account-setup", label: "Play Console Account Setup & D-U-N-S Advisory" },
  { value: "production-access-guidance", label: "Production Access Review Questionnaire Advisory" },
  { value: "app-publishing-assistance", label: "End-to-End Publishing & Policy Compliance Audit" },
  { value: "app-rejection-help", label: "App Rejection Troubleshooting & Appeals Assistance" },
  { value: "play-store-aso", label: "Store Listing Optimization (ASO) & Conversion" },
  { value: "other", label: "General Android Publishing Consultation" },
];

const STAGE_OPTIONS = [
  { value: "in-development", label: "In Active Development (Pre-Release Build)" },
  { value: "account-verification", label: "Developer Account Verification & D-U-N-S Pending" },
  { value: "closed-testing", label: "Closed Testing Track Active (Recruiting Testers)" },
  { value: "production-questionnaire", label: "Ready to Submit Production Access Application" },
  { value: "app-rejected", label: "App Rejected / Received Policy Warning" },
  { value: "published-aso", label: "Published on Google Play / Seeking Optimization" },
];

const URGENCY_OPTIONS = [
  { value: "immediate", label: "Immediate Priority (Within 24–48 Hours)" },
  { value: "this-week", label: "Standard Timeline (Within 1 Week)" },
  { value: "planning-ahead", label: "Planning Ahead (2+ Weeks Out)" },
];

function ContactFormContent({ initialService = "closed-testing", sourceContext }: ContactFormProps) {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service");

  const [customService, setCustomService] = useState<string | null>(null);
  const activeService = customService ?? (queryService || initialService);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    packageName: "",
    stage: "closed-testing",
    urgency: "standard",
    message: sourceContext ? `Inquiry regarding ${sourceContext}: ` : "",
    website: "", // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<FormFieldErrors>({});
  const [copiedMailto, setCopiedMailto] = useState(false);
  const renderedAtRef = useRef<number>(0);

  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "success" | "error";
    message?: string;
    backendConnected?: boolean;
  }>({ status: "idle" });

  const validateForm = (): boolean => {
    const errors: FormFieldErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      errors.name = "Please enter your full or professional name (at least 2 characters).";
    } else if (trimmedName.length > 100) {
      errors.name = "Name must be 100 characters or less.";
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!trimmedEmail || trimmedEmail.length > 254 || !emailRegex.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address so we can reply.";
    }

    if (!activeService) {
      errors.service = "Please select the service most relevant to your request.";
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      errors.message = "Please include a brief description of your app or questions (at least 10 characters).";
    } else if (trimmedMessage.length > 5000) {
      errors.message = "Message must be 5,000 characters or less.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionState({ status: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: activeService,
          renderedAt: renderedAtRef.current,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionState({
          status: "success",
          message: data.message || "Your inquiry has been successfully transmitted.",
          backendConnected: true,
        });
      } else {
        setSubmissionState({
          status: "error",
          message: data.error || data.message || "Unable to send your inquiry through automated dispatch.",
          backendConnected: data.backendConnected ?? false,
        });
      }
    } catch {
      setSubmissionState({
        status: "error",
        message: "Network or connection error. Please email us directly at support@playstoreguide.com.",
        backendConnected: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-formatted plain-text inquiry for mailto or clipboard
  const formattedInquiryText = `
Google Play Advisory Inquiry
--------------------------------------------------
Name: ${formData.name || "Developer"}
Email: ${formData.email || "developer@example.com"}
Requested Service: ${activeService}
App Stage: ${formData.stage}
Target Urgency: ${formData.urgency}
Package ID / App Name: ${formData.packageName || "Not provided"}

Project Details & Questions:
${formData.message}
--------------------------------------------------
Sent via PlayStoreGuide.com
`.trim();

  const mailtoSubject = encodeURIComponent(`Consultation Inquiry: [${activeService}] from ${formData.name || "Developer"}`);
  const mailtoBody = encodeURIComponent(formattedInquiryText);
  const mailtoUrl = `mailto:support@playstoreguide.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(formattedInquiryText);
    setCopiedMailto(true);
    setTimeout(() => setCopiedMailto(false), 2500);
  };

  if (submissionState.status === "success") {
    return (
      <div className="rounded-3xl border border-primary/30 bg-surface-cream/80 dark:bg-card p-8 sm:p-10 text-center space-y-5 shadow-floating">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-foreground">
            Enquiry Received Successfully
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {submissionState.message}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-surface-panel dark:bg-muted/30 border border-border/70 text-xs text-muted-foreground max-w-md mx-auto space-y-1">
          <span className="font-bold text-foreground block">Response SLA: 12–24 Business Hours</span>
          <span>We will reply directly to <strong className="text-foreground">{formData.email}</strong> with preliminary technical recommendations.</span>
        </div>

        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmissionState({ status: "idle" });
              setCustomService(null);
              setFormData({
                name: "",
                email: "",
                packageName: "",
                stage: "closed-testing",
                urgency: "standard",
                message: "",
                website: "",
              });
              setFieldErrors({});
            }}
            className="text-xs font-semibold"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field (hidden from screenreaders and legitimate users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      {/* Honest Backend Status or Direct Email Fallback Notice */}
      {submissionState.status === "error" && (
        <div className="rounded-2xl border border-amber-300 bg-amber-50/90 dark:border-amber-900/60 dark:bg-amber-950/40 p-5 sm:p-6 space-y-4">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm">
              <h4 className="font-bold text-amber-900 dark:text-amber-200">
                {submissionState.backendConnected === false
                  ? "Direct Dispatch Mode: No Delivery Backend Configured"
                  : "Submission Issue"}
              </h4>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed text-xs">
                {submissionState.message}
              </p>
              <p className="text-amber-800 dark:text-amber-300 text-xs">
                Your consultation inquiry is prepared below. You can send it directly via email or copy the formatted text.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a href={mailtoUrl} className="inline-block">
              <Button
                type="button"
                size="sm"
                className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs shadow-2xs"
              >
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                <span>Open in Email Client (Pre-Filled)</span>
              </Button>
            </a>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopyInquiry}
              className="text-xs font-semibold border-amber-300 dark:border-amber-800 hover:bg-amber-100/50"
            >
              {copiedMailto ? (
                <>
                  <Check className="h-3.5 w-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Copied Inquiry</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 mr-1.5 text-amber-900 dark:text-amber-300" />
                  <span>Copy Formatted Text</span>
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setSubmissionState({ status: "idle" })}
              className="text-xs text-amber-900 dark:text-amber-300"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1" />
              <span>Dismiss</span>
            </Button>
          </div>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <Input
            id="name"
            required
            minLength={2}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
            }}
            placeholder="e.g. Alex Morgan"
            className={fieldErrors.name ? "border-rose-500 ring-rose-500/20" : ""}
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-[11px] text-rose-500 font-medium mt-1">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            required
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
            }}
            placeholder="developer@example.com"
            className={fieldErrors.email ? "border-rose-500 ring-rose-500/20" : ""}
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-[11px] text-rose-500 font-medium mt-1">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Service Selection */}
      <div>
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
          Primary Service Requested <span className="text-rose-500">*</span>
        </label>
        <select
          id="service"
          required
          value={activeService}
          onChange={(e) => {
            setCustomService(e.target.value);
            if (fieldErrors.service) setFieldErrors({ ...fieldErrors, service: undefined });
          }}
          className="flex h-11 w-full rounded-xl border border-input bg-surface-panel dark:bg-card px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {fieldErrors.service && (
          <p className="text-[11px] text-rose-500 font-medium mt-1">
            {fieldErrors.service}
          </p>
        )}
      </div>

      {/* Row 3: App Name / Package ID & Development Stage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="packageName" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
            App Name / Package ID (Optional)
          </label>
          <Input
            id="packageName"
            value={formData.packageName}
            onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
            placeholder="e.g. com.mycompany.app or App Title"
          />
          <span className="text-[11px] text-muted-foreground block mt-1">
            Helps our engineers assess SDK dependencies.
          </span>
        </div>

        <div>
          <label htmlFor="stage" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
            Current App Stage
          </label>
          <select
            id="stage"
            value={formData.stage}
            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
            className="flex h-11 w-full rounded-xl border border-input bg-surface-panel dark:bg-card px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
          >
            {STAGE_OPTIONS.map((st) => (
              <option key={st.value} value={st.value}>
                {st.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Urgency Timeline */}
      <div>
        <label htmlFor="urgency" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
          Target Release Urgency
        </label>
        <select
          id="urgency"
          value={formData.urgency}
          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
          className="flex h-11 w-full rounded-xl border border-input bg-surface-panel dark:bg-card px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
        >
          {URGENCY_OPTIONS.map((urg) => (
            <option key={urg.value} value={urg.value}>
              {urg.label}
            </option>
          ))}
        </select>
      </div>

      {/* Row 5: Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
          Project Details &amp; Questions <span className="text-rose-500">*</span>
        </label>
        <Textarea
          id="message"
          rows={4}
          required
          minLength={10}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
          }}
          placeholder="Please share your target timeline, tester count required, any specific policy rejection notices, or Play Console questionnaire questions..."
          className={fieldErrors.message ? "border-rose-500 ring-rose-500/20" : ""}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="text-[11px] text-rose-500 font-medium mt-1">
            {fieldErrors.message}
          </p>
        ) : (
          <span className="text-[11px] text-muted-foreground block mt-1">
            Be as specific as possible. Do not share confidential passwords or security keys.
          </span>
        )}
      </div>

      {/* Submit Button & Confidentiality Note */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-5 rounded-xl shadow-subtle cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin" /> Transmitting Request...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" /> Send Consultation Enquiry
            </span>
          )}
        </Button>
      </div>

      <div className="pt-2 border-t border-border/60 flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
        <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
        <span>
          <strong>Confidentiality Assured:</strong> All app packages, questionnaire drafts, and release plans shared with PlayStoreGuide.com are held in strict confidence. We never share developer details or sell marketing lists.
        </span>
      </div>
    </form>
  );
}

export function ContactForm(props: ContactFormProps) {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-xs text-muted-foreground animate-pulse">
          Loading publishing project intake form...
        </div>
      }
    >
      <ContactFormContent {...props} />
    </Suspense>
  );
}
