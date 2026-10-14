import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Layers,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";

export const servicesData = [
  {
    icon: Users,
    title: "14-Day Closed Testing Coordination",
    badge: "Primary Service",
    href: "/services/closed-testing",
    description:
      "Fulfill Google's mandatory 20-tester requirement with verified, active opt-in users on physical Android hardware. Maintain continuous 14-day tracking with a safety buffer against drop-offs.",
    deliverables: [
      "20+ verified physical Android device testers (no emulators)",
      "14 continuous days of opt-in cohort retention tracking",
      "Qualitative feedback log & bug reports for review evidence",
    ],
    policyNote: "Authentic Play Services telemetry on diverse Android versions.",
    ctaText: "Explore closed testing track",
  },
  {
    icon: ShieldCheck,
    title: "Play Console Account Verification",
    badge: "Identity & D-U-N-S",
    href: "/services/play-console-account-setup",
    description:
      "Avoid irreversible developer account termination during mandatory identity audits. We guide individual developers and corporate entities through D-U-N-S record alignment and payments profile verification.",
    deliverables: [
      "Dun & Bradstreet (D-U-N-S) matching & legal record audit",
      "Identity and proof-of-address documentation pre-flight check",
      "Payments profile, merchant setup & tax withholding review",
    ],
    policyNote: "Prevents account bans caused by name and address mismatches.",
    ctaText: "Learn about console verification",
  },
  {
    icon: CheckCircle2,
    title: "Production Access Review Advisory",
    badge: "Crucial Review Step",
    href: "/services/production-access-guidance",
    description:
      "Prepare thorough, evidence-backed answers for Google's 5-prompt production questionnaire. Showcase genuine testing iteration, bug triage history, and Android Vitals stability to Google reviewers.",
    deliverables: [
      "Question-by-question response review and structuring",
      "Synthesis of closed testing feedback into actionable logs",
      "Android Vitals crash rate & ANR threshold verification",
    ],
    policyNote: "Presents real iteration history; final approval is evaluated by Google.",
    ctaText: "Prepare for production review",
  },
  {
    icon: Layers,
    title: "App Publishing & Compliance Audit",
    badge: "Pre-Launch Audit",
    href: "/services/app-publishing-assistance",
    description:
      "Comprehensive technical and policy audit before your first release submission. We verify Target SDK compliance, sensitive permissions declarations, reviewer login credentials, and Data Safety disclosures.",
    deliverables: [
      "Target API level compliance (Android 14/15 standards)",
      "Data Safety declaration vs embedded SDK discrepancy audit",
      "Reviewer credentials & test account access configuration",
    ],
    policyNote: "Identifies automated policy blockers before bundle upload.",
    ctaText: "View publishing audit details",
  },
  {
    icon: AlertTriangle,
    title: "App Rejection Troubleshooting",
    badge: "Recovery & Appeals",
    href: "/services/app-rejection-help",
    description:
      "Deconstruct vague Google Play rejection notices. We identify the root policy violation, formulate actionable code and metadata updates, and draft formal, evidence-backed developer appeals.",
    deliverables: [
      "Policy violation root-cause technical diagnosis",
      "Actionable code, manifest, or metadata remediation checklist",
      "Formally structured developer appeal letter with proof evidence",
    ],
    policyNote: "Focuses on legitimate policy compliance and dispute resolution.",
    ctaText: "Get rejection recovery guidance",
  },
  {
    icon: Sparkles,
    title: "Store Listing Optimization (ASO)",
    badge: "Organic Discoverability",
    href: "/services/play-store-aso",
    description:
      "Improve conversion rates and organic store discoverability while adhering strictly to Google's metadata spam policy, graphic asset guidelines, and misleading claims regulations.",
    deliverables: [
      "Policy-safe titles, short descriptions, and full descriptions",
      "Screenshot storyboarding & feature graphic spec checks",
      "Keyword discovery & regional localization review",
    ],
    policyNote: "Strictly compliant with Google Play metadata spam and claim rules.",
    ctaText: "Optimize your store listing",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28 bg-surface-panel dark:bg-background border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Full Advisory Portfolio"
          title="Comprehensive Guidance Across Every Stage of Publishing"
          description="While 14-day closed testing is our primary commercial focus, we also guide Android developers through account verification, production reviews, pre-flight audits, and rejection appeals."
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 sm:p-7 shadow-subtle hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-cream text-primary border border-border/60 group-hover:bg-primary/10 transition-colors shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full"
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      <Link href={service.href} className="focus:outline-hidden">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-3 border-t border-border/60">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-2.5">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="mt-6 pt-4 border-t border-border/60 space-y-3">
                  <div className="rounded-xl bg-surface-cream/80 dark:bg-muted/40 p-2.5 text-[11px] text-muted-foreground border border-border/50">
                    <span className="font-semibold text-foreground">Compliance Note: </span>
                    {service.policyNote}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "rounded-full border-border bg-surface-panel dark:bg-card px-8 py-5 text-sm font-semibold shadow-2xs hover:bg-muted transition-all",
            })}
          >
            <span>View Full Breakdown of All 6 Publishing Services</span>
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
