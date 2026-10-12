"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50/70 p-8 text-center dark:border-emerald-900/60 dark:bg-emerald-950/40 space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/80 dark:text-emerald-300">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Inquiry Successfully Received
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
          Thank you for contacting PlayStoreGuide. Our technical advisory team will review your app stage and respond to <strong className="text-zinc-800 dark:text-zinc-200">{formData.email}</strong> within 12–24 business hours.
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
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Morgan"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="developer@example.com"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="packageName" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
            App Name / Package ID (Optional)
          </label>
          <input
            type="text"
            id="packageName"
            value={formData.packageName}
            onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
            placeholder="com.example.myapp"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        <div>
          <label htmlFor="stage" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
            Current App Stage
          </label>
          <select
            id="stage"
            value={formData.stage}
            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
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
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
          Primary Service Requested
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
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
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
          Project Details &amp; Questions <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please share your target release timeline, any specific policy rejection notices, or closed testing requirements..."
          className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-8 py-5"
        >
          {isSubmitting ? (
            <span>Transmitting Request...</span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" /> Send Consultation Inquiry
            </span>
          )}
        </Button>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        We respect developer confidentiality. Your app data, code snippets, and release plans are kept strictly private under our Privacy Policy.
      </p>
    </form>
  );
}
