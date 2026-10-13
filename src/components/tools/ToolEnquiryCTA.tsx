"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/ContactForm";

interface ToolEnquiryCTAProps {
  toolName: string;
  defaultService?: string;
}

export function ToolEnquiryCTA({ toolName, defaultService = "closed-testing" }: ToolEnquiryCTAProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-16 rounded-3xl border border-primary/20 bg-surface-cream/70 dark:bg-card p-6 sm:p-8 shadow-subtle">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="h-4 w-4" />
            <span>Need Specialized Publishing Assistance?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
            Get Technical Guidance for Your Android Release
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Navigating closed testing cohorts, production questionnaires, or policy appeals? Our team provides structured assistance with verified tester networks and Play Console readiness audits.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl text-xs px-4 py-2.5 shadow-2xs cursor-pointer"
          >
            {isOpen ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1.5" /> Close Enquiry Form
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1.5" /> Request Advisory Consultation
              </>
            )}
          </Button>

          <a href="mailto:support@playstoreguide.com">
            <Button type="button" variant="outline" className="border-border/80 rounded-xl text-xs font-semibold">
              <Mail className="h-4 w-4 mr-1.5" /> Direct Email
            </Button>
          </a>
        </div>
      </div>

      {/* Expandable Lead Generation Form */}
      {isOpen && (
        <div className="mt-8 pt-8 border-t border-border/80">
          <div className="mb-6 max-w-xl">
            <h4 className="text-base font-bold text-foreground">
              Send an Advisory Request regarding {toolName}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              Provide your app status and questions below. Our team reviews inquiries within 12–24 business hours.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-panel dark:bg-card border border-border/80 shadow-2xs">
            <ContactForm initialService={defaultService} sourceContext={toolName} />
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Independent developer services. Not affiliated with Google LLC.
        </span>
        <span>Questions? Email support@playstoreguide.com</span>
      </div>
    </div>
  );
}
