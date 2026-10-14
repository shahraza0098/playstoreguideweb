import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";

const serviceInclusions = [
  {
    title: "20+ Verified Physical Android Testers (22–25 Safety Buffer)",
    description:
      "Real individuals with physical Android devices running Android 11 through Android 15. We coordinate 22–25 testers to provide an active 10–25% safety buffer against accidental drop-offs.",
  },
  {
    title: "14 Continuous Days of Opt-In Retention Monitoring",
    description:
      "Daily cohort tracking to ensure your opted-in tester count in Google Play Console never falls below the mandatory threshold that triggers a 14-day counter reset.",
  },
  {
    title: "Play Services Telemetry & Session Interactions",
    description:
      "Testers download, install, and periodically interact with your app builds, generating authentic Play Services engagement telemetry and session records.",
  },
  {
    title: "Android Vitals Stability Surveillance",
    description:
      "Monitoring crash rates (target < 1.09%) and ANR rates (target < 0.47%) in Google Play Console to ensure technical stability before production review.",
  },
  {
    title: "Documented Bug Reports & Qualitative Feedback Dossier",
    description:
      "Structured compilation of usability notes, device-specific bugs, and UI observations ready to cite directly in your production access application questionnaire.",
  },
  {
    title: "5-Prompt Production Review Questionnaire Advisory",
    description:
      "Guidance on drafting thorough, evidence-based responses to Google's human evaluation prompts regarding target audience, recruitment, feedback, iteration, and readiness.",
  },
];

const serviceExclusions = [
  {
    title: "No Guaranteed Production Approval",
    description:
      "Google's review operations team retains sole, independent authority over all production access approvals. No legitimate service can sell or guarantee approval.",
  },
  {
    title: "No Bot Emulators or Automated Farms",
    description:
      "We strictly prohibit virtualized device farms, automated bot scripts, or fake opt-in accounts that risk developer account suspension.",
  },
  {
    title: "No Public Store Reviews or Ratings",
    description:
      "Closed testing feedback is submitted privately through Play Console. We do not generate public 5-star reviews or store ratings.",
  },
  {
    title: "No Account Credential Sharing Needed",
    description:
      "You retain 100% control of your Play Console. Testers are invited via your closed track Google Group or email list; we never request your account password.",
  },
];

export function ClosedTestingSpotlightSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-pale-blue/40 dark:bg-muted/10 border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our Primary Service"
          title="Google Play 14-Day Closed Testing Assistance"
          description="Prepare for Google Play Production Access with guided 14-day closed testing assistance. Transparent cohort coordination, active retention tracking, authentic telemetry, and reviewer-ready evidence compilation."
        />

        {/* Main Spotlight Showcase Box */}
        <div className="mt-14 sm:mt-16 rounded-3xl border-2 border-primary/30 bg-surface-panel dark:bg-card p-6 sm:p-10 lg:p-12 shadow-floating">
          {/* Top Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-border/70">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                <Users className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge
                    variant="outline"
                    className="border-primary/40 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider"
                  >
                    Primary Service Focus
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    14-Day Mandatory Cohort Track
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Guided 14-Day Closed Testing Coordination
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  For eligible personal developer accounts created on or after November 13, 2023, meeting Google Play&rsquo;s closed testing requirements is mandatory before requesting production access. We facilitate compliant testing with verified testers on physical Android devices.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch lg:items-center gap-3 shrink-0">
              <Link
                href="/contact?service=closed-testing"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-6 text-xs sm:text-sm font-bold shadow-card flex items-center justify-center gap-2",
                })}
              >
                <span>Get 14-Day Testing Assistance</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services/closed-testing"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "rounded-full border-border bg-surface-panel dark:bg-card px-6 py-6 text-xs sm:text-sm font-semibold hover:bg-muted flex items-center justify-center gap-2",
                })}
              >
                <span>View Full Service Details</span>
              </Link>
            </div>
          </div>

          {/* Inclusions vs Exclusions Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: What is Included (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 pb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                  <Check className="h-4 w-4" />
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-foreground">
                  What Is Included in the Service
                </h4>
              </div>

              <div className="space-y-3.5">
                {serviceInclusions.map((inc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-surface-cream/50 dark:bg-muted/30 border border-border/60"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-foreground">
                        {inc.title}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {inc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Transparent Exclusions & Policy Limits (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 pb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <X className="h-4 w-4" />
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-foreground">
                  Transparent Exclusions &amp; Boundaries
                </h4>
              </div>

              <div className="space-y-3.5">
                {serviceExclusions.map((exc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-surface-panel dark:bg-card border border-border/80"
                  >
                    <X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-foreground">
                        {exc.title}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {exc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Factual Disclaimer Card */}
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  <span>Google Play Compliance Standard</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  PlayStoreGuide operates strictly within Google Play Developer Distribution Policies. We facilitate real testing participation so developers can submit authentic evidence to Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
