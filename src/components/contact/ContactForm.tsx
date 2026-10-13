"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Mail, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  initialService?: string;
  sourceContext?: string;
}

export function ContactForm({ initialService = "closed-testing", sourceContext }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    packageName: "",
    stage: "closed-testing",
    service: initialService,
    message: sourceContext ? `Inquiry regarding ${sourceContext}: ` : "",
    website: "", // Honeypot field
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionState({ status: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          renderedAt: renderedAtRef.current,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionState({
          status: "success",
          message: data.message || "Your inquiry has been successfully sent.",
          backendConnected: true,
        });
      } else {
        setSubmissionState({
          status: "error",
          message: data.error || data.message || "Unable to send your inquiry.",
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

  // Pre-filled mailto fallback URL
  const mailtoSubject = encodeURIComponent(`Consultation Inquiry: [${formData.service}] from ${formData.name || "Developer"}`);
  const mailtoBody = encodeURIComponent(
    `Hello PlayStoreGuide Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nApp Stage: ${formData.stage}\nPackage ID: ${formData.packageName || "N/A"}\n\nProject Details:\n${formData.message}\n`
  );
  const mailtoUrl = `mailto:support@playstoreguide.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  if (submissionState.status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center space-y-4 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          Enquiry Successfully Received
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {submissionState.message} A copy will be processed and sent to <strong className="text-foreground">{formData.email}</strong> within 12–24 business hours.
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmissionState({ status: "idle" });
              setFormData({
                name: "",
                email: "",
                packageName: "",
                stage: "closed-testing",
                service: initialService,
                message: "",
                website: "",
              });
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field (hidden from legitimate users) */}
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

      {/* Backend Status or Error Notice */}
      {submissionState.status === "error" && (
        <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-5 dark:border-amber-900/60 dark:bg-amber-950/40 space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <h4 className="font-semibold text-amber-900 dark:text-amber-200">
                {submissionState.backendConnected === false
                  ? "Direct Email Contact Option"
                  : "Submission Issue"}
              </h4>
              <p className="mt-1 text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                {submissionState.message}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={mailtoUrl} className="inline-block">
              <Button
                type="button"
                size="sm"
                className="bg-amber-700 text-white hover:bg-amber-800 font-semibold text-xs"
              >
                <Mail className="h-3.5 w-3.5 mr-1.5" /> Open in Email Client (Pre-Filled)
              </Button>
            </a>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setSubmissionState({ status: "idle" })}
              className="text-xs"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Try Form Again
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <Input
            id="name"
            required
            minLength={2}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Morgan"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="developer@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="packageName" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
            App Name / Package ID (Optional)
          </label>
          <Input
            id="packageName"
            value={formData.packageName}
            onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
            placeholder="com.example.myapp"
          />
        </div>

        <div>
          <label htmlFor="stage" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
            Current App Stage
          </label>
          <select
            id="stage"
            value={formData.stage}
            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="in-development">In Development (Pre-Release)</option>
            <option value="account-verification">Account Verification &amp; D-U-N-S Pending</option>
            <option value="closed-testing">14-Day Closed Testing (Need Testers)</option>
            <option value="production-questionnaire">Preparing Production Access Questionnaire</option>
            <option value="app-rejected">App Rejected / Needs Policy Diagnosis</option>
            <option value="published-aso">Published / Needs ASO Optimization</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
          Primary Service Requested <span className="text-rose-500">*</span>
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="closed-testing">Closed Testing Coordination (20 Testers / 14 Days)</option>
          <option value="play-console-account-setup">Play Console Account Setup &amp; D-U-N-S Advisory</option>
          <option value="production-access-guidance">Production Access Questionnaire Review</option>
          <option value="app-publishing-assistance">End-to-End Publishing &amp; Pre-Launch Policy Audit</option>
          <option value="app-rejection-help">App Rejection Troubleshooting &amp; Appeals</option>
          <option value="play-store-aso">Store Listing Optimization (ASO)</option>
          <option value="other">General Android Publishing Advisory</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
          Project Details &amp; Questions <span className="text-rose-500">*</span>
        </label>
        <Textarea
          id="message"
          rows={4}
          required
          minLength={10}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please share your target release timeline, any specific policy rejection notices, or closed testing requirements..."
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-5 shadow-sm"
        >
          {isSubmitting ? (
            <span>Transmitting Request...</span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" /> Send Consultation Enquiry
            </span>
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
        <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
        <span>We respect developer confidentiality. Your app data, code snippets, and release plans are kept strictly private under our Privacy Policy.</span>
      </p>
    </form>
  );
}
