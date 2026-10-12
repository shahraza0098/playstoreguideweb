"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    packageName: "",
    stage: "closed-testing",
    service: "closed-testing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean local submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-8 text-center dark:border-teal-900/60 dark:bg-teal-950/40 space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/80 dark:text-teal-300">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          Enquiry Successfully Received
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you for contacting PlayStoreGuide. Our technical advisory team will review your app stage and respond to <strong className="text-foreground">{formData.email}</strong> within 12–24 business hours.
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                packageName: "",
                stage: "closed-testing",
                service: "closed-testing",
                message: "",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <Input
            id="name"
            required
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
          Primary Service Requested
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="closed-testing">Closed Testing Coordination (20 Testers / 14 Days)</option>
          <option value="account-setup">Play Console Account Setup &amp; D-U-N-S Advisory</option>
          <option value="production-access">Production Access Questionnaire Review</option>
          <option value="app-publishing">End-to-End Publishing &amp; Pre-Launch Policy Audit</option>
          <option value="rejection-troubleshooting">App Rejection Troubleshooting &amp; Appeals</option>
          <option value="listing-optimization">Store Listing Optimization (ASO)</option>
          <option value="general-consultation">General Android Publishing Advisory</option>
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
