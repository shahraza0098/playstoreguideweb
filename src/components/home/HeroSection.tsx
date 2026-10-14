import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Users,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroDashboardIllustration } from "./HeroDashboardIllustration";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-cream/80 border-b border-border/80 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle radial dot pattern and warm ambient background glow */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Value Prop & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tasteful Eyebrow Label */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="outline"
                className="py-1 px-3 text-xs font-semibold rounded-full border-primary/30 bg-surface-panel/80 dark:bg-card/80 text-foreground shadow-2xs backdrop-blur-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1" />
                Google Play Closed Testing Assistance
              </Badge>
            </div>

            {/* Compelling Single H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Your 14-Day Journey to{" "}
              <span className="text-primary underline decoration-primary/30 underline-offset-6">
                Google Play Production Access
              </span>
            </h1>

            {/* Concise Supporting Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Prepare for Google Play Production Access with guided 14-day closed testing assistance. Coordinate 20+ verified human testers on physical Android devices, maintain continuous opt-in retention, log authentic Play Services telemetry, and assemble reviewer-ready questionnaire responses.
            </p>

            {/* Two Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/services/closed-testing"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "rounded-full bg-primary px-7 py-6 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 transition-all active:scale-98 flex items-center justify-center gap-2",
                })}
              >
                <span>Get 14-Day Testing Assistance</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/blog/google-play-closed-testing-requirements-guide"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "rounded-full border-border/80 bg-surface-panel dark:bg-card px-6 py-6 text-sm font-medium text-foreground hover:bg-muted transition-all active:scale-98 flex items-center justify-center gap-2",
                })}
              >
                <FileText className="h-4 w-4 text-primary" />
                <span>Understand the 14-Day Requirement</span>
              </Link>
            </div>

            {/* Informative Eligibility Note */}
            <div className="rounded-xl border border-border/70 bg-surface-panel/60 dark:bg-card/60 p-3 text-xs text-muted-foreground leading-relaxed max-w-xl">
              <p>
                <strong className="text-foreground">Policy Note:</strong> Personal developer accounts created on or after November 13, 2023 generally need at least 12–20 testers continuously opted in for 14 days before applying for production access. Eligibility and requirements differ by account type and applicable Google Play policies. Third-party testing assistance does not guarantee Google Play approval.
              </p>
            </div>

            {/* Factual Trust Statements Bar */}
            <div className="pt-4 border-t border-border/70 grid grid-cols-2 gap-3 max-w-lg">
              <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-3.5 w-3.5" />
                </div>
                <span>20+ Real Physical Devices</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span>14 Continuous Days Opt-In</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lock className="h-3.5 w-3.5" />
                </div>
                <span>Zero Account Credentials Needed</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span>Questionnaire Evidence Prep</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Developer Testing Dashboard Illustration */}
          <div className="lg:col-span-6 w-full">
            <HeroDashboardIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
