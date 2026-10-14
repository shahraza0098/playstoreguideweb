import React from "react";
import Link from "next/link";
import {
  UserCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const eligibilityCards = [
  {
    type: "Personal Developer Account",
    subheading: "Created on or after Nov 13, 2023",
    statusBadge: "Closed Testing Required",
    badgeVariant: "destructive" as const,
    icon: UserCheck,
    isMandatory: true,
    summary:
      "Subject to Google Play's mandatory closed testing policy. Must run an active closed testing track before becoming eligible to request production access.",
    criteria: [
      {
        label: "Tester Requirement",
        value: "At least 12–20 real testers opted in continuously",
        status: "required",
      },
      {
        label: "Track Duration",
        value: "14 continuous calendar days without count dipping below quota",
        status: "required",
      },
      {
        label: "Production Access Application",
        value: "Unlocks 5-prompt review questionnaire evaluated by Google human review",
        status: "required",
      },
      {
        label: "D-U-N-S Number Needed",
        value: "Not applicable (individual government photo ID and address proof only)",
        status: "exempt",
      },
    ],
    recommendedAction: {
      text: "Get 14-Day Testing Assistance",
      href: "/services/closed-testing",
    },
  },
  {
    type: "Organization Developer Account",
    subheading: "Verified with D-U-N-S Number",
    statusBadge: "Quota Exempt",
    badgeVariant: "success" as const,
    icon: Building2,
    isMandatory: false,
    summary:
      "Exempt from Google Play's mandatory 20-tester closed testing requirement. May publish directly to production once organization identity verification is completed.",
    criteria: [
      {
        label: "Tester Requirement",
        value: "Exempt from mandatory 20-tester quota",
        status: "exempt",
      },
      {
        label: "14-Day Waiting Period",
        value: "Exempt (can publish directly to production track)",
        status: "exempt",
      },
      {
        label: "Testing Recommendation",
        value: "Internal and closed tests recommended for crash/ANR telemetry",
        status: "recommended",
      },
      {
        label: "D-U-N-S Number Needed",
        value: "Mandatory corporate D-U-N-S registration matching legal records",
        status: "required",
      },
    ],
    recommendedAction: {
      text: "Explore Organization Setup Advisory",
      href: "/services/play-console-account-setup",
    },
  },
  {
    type: "Personal Developer Account",
    subheading: "Created before Nov 13, 2023",
    statusBadge: "Grandfathered",
    badgeVariant: "secondary" as const,
    icon: CalendarCheck,
    isMandatory: false,
    summary:
      "Legacy personal accounts created prior to November 13, 2023 are grandfathered from the mandatory 14-day closed testing rule for their publishing workflow.",
    criteria: [
      {
        label: "Tester Requirement",
        value: "No mandatory 20-tester minimum quota",
        status: "exempt",
      },
      {
        label: "14-Day Waiting Period",
        value: "Not required to unlock production rollout",
        status: "exempt",
      },
      {
        label: "Policy Compliance",
        value: "Must still satisfy Target SDK 34/35 and 2026 developer verification",
        status: "required",
      },
      {
        label: "Quality Checks",
        value: "Subject to standard Google Play pre-launch review and Android Vitals",
        status: "required",
      },
    ],
    recommendedAction: {
      text: "View Publishing Compliance Audit",
      href: "/services/app-publishing-assistance",
    },
  },
];

export function TestingEligibilitySection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-panel dark:bg-background border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Account Eligibility Matrix"
          title="Who Needs Google Play 14-Day Closed Testing?"
          description="Google Play testing requirements vary significantly depending on account type and creation date. Understand your exact obligations before planning your app launch."
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {eligibilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.subheading}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 shadow-subtle transition-all duration-300 hover:shadow-card-hover ${
                  card.isMandatory
                    ? "border-primary/50 bg-gradient-to-b from-surface-panel via-surface-cream/50 to-surface-panel dark:from-card dark:to-muted/20 ring-2 ring-primary/20"
                    : "border-border/80 bg-surface-panel dark:bg-card hover:border-primary/40"
                }`}
              >
                {card.isMandatory && (
                  <div className="absolute -top-3 left-6">
                    <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-xs">
                      Primary Service Focus
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                        card.isMandatory
                          ? "bg-primary text-primary-foreground border-primary shadow-xs"
                          : "bg-surface-cream dark:bg-muted text-primary border-border/60"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <Badge
                      variant={card.badgeVariant}
                      className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full"
                    >
                      {card.statusBadge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-foreground">
                      {card.type}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">
                      {card.subheading}
                    </p>
                    <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                      {card.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground block">
                      Policy Criteria Breakdown
                    </span>
                    <ul className="space-y-2 text-xs">
                      {card.criteria.map((crit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {crit.status === "required" ? (
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          ) : crit.status === "exempt" ? (
                            <Info className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          )}
                          <div className="leading-snug">
                            <span className="font-semibold text-foreground">
                              {crit.label}:{" "}
                            </span>
                            <span className="text-muted-foreground">
                              {crit.value}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    href={card.recommendedAction.href}
                    className={`inline-flex items-center justify-center gap-1.5 w-full rounded-full py-2.5 px-4 text-xs font-bold transition-all ${
                      card.isMandatory
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs"
                        : "bg-surface-cream dark:bg-muted text-foreground hover:bg-primary/10 hover:text-primary border border-border/80"
                    }`}
                  >
                    <span>{card.recommendedAction.text}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Disclaimer Callout */}
        <div className="mt-10 rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-card/40 p-4 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          <p className="leading-relaxed">
            <strong className="text-foreground">Official Documentation Reference:</strong> Google Play Console policies state that personal developer accounts created after November 13, 2023 must have at least 12–20 testers opted in for 14 continuous days before requesting production access. Consult the official{" "}
            <a
              href="https://support.google.com/googleplay/android-developer/answer/14151465"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Google Play Console Help Center (answer/14151465)
            </a>{" "}
            for full account requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
