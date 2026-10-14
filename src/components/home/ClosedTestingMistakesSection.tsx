import React from "react";
import Link from "next/link";
import {
  RotateCcw,
  Bot,
  GitBranch,
  Activity,
  FileQuestion,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const commonMistakes = [
  {
    icon: RotateCcw,
    title: "The 14-Day Counter Reset Risk",
    severity: "High Hazard",
    hazardDescription:
      "Recruiting exactly 20 testers without a safety margin. If even a single tester uninstalls the build or opts out, your active count dips to 19 and Google's Play Console timer can reset back to Day 1.",
    prevention:
      "Maintain an active safety buffer of 22 to 25 verified testers on diverse physical Android hardware with daily retention tracking.",
  },
  {
    icon: Bot,
    title: "Dormant Accounts & Bot Farms",
    severity: "Account Penalty",
    hazardDescription:
      "Using cheap automated click farms or accounts that click 'Accept' on the web but never install the build or launch sessions. Google Play Services inspects physical device identifiers and session telemetry.",
    prevention:
      "Ensure all testers use real physical Android hardware with periodic launches and genuine session engagement throughout the 14 days.",
  },
  {
    icon: GitBranch,
    title: "Zero Patch Releases During Testing",
    severity: "Credibility Gap",
    hazardDescription:
      "Claiming in your production access questionnaire that testers found and helped resolve bugs, while having uploaded zero new release bundles to your Closed Testing track during the entire 14-day window.",
    prevention:
      "Deploy at least one patch update (e.g., v1.0.1) during testing. Reviewers verify that release changelogs correspond to the bug fixes described in your answers.",
  },
  {
    icon: Activity,
    title: "Exceeding Android Vitals Limits",
    severity: "Instant Blocker",
    hazardDescription:
      "Allowing user-perceived crash rates to exceed 1.09% or ANR (Application Not Responding) rates to exceed 0.47%. Unstable software is rejected regardless of how many days of testing were logged.",
    prevention:
      "Inspect Android Vitals daily in Play Console. Fix memory leaks, background thread locks, and device-specific startup crashes during the testing period.",
  },
  {
    icon: FileQuestion,
    title: "Generic Questionnaire Responses",
    severity: "Denial Factor",
    hazardDescription:
      "Submitting superficial answers like 'My friends loved the app and found no bugs' to Google's 5 production questionnaire prompts. Evaluators reject generic submissions and mandate 14 more days of testing.",
    prevention:
      "Draft substantive, multi-paragraph answers citing specific device models, qualitative user feedback points, and concrete iteration history.",
  },
];

export function ClosedTestingMistakesSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-cream/50 dark:bg-card/40 border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Compliance Pitfalls"
          title="Common Mistakes That Delay Google Play Production Access"
          description="Meeting Google's closed testing requirement is a technical hurdle with strict failure points. Avoid these five frequent traps that trigger timer resets or review denials."
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {commonMistakes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 sm:p-7 shadow-subtle hover:shadow-card hover:border-primary/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-destructive/10 text-destructive border border-destructive/20 shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge
                      variant="destructive"
                      className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full"
                    >
                      {item.severity}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.hazardDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                    <span>How to Prevent It:</span>
                  </div>
                  <p className="text-xs text-foreground leading-relaxed bg-surface-cream/80 dark:bg-muted/40 p-3 rounded-xl border border-border/50">
                    {item.prevention}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Call to Action Card */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-surface-panel to-surface-cream/50 dark:from-primary/20 dark:to-card p-6 sm:p-7 shadow-card">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xs">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Guided Protection
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
                  Protect Your App Against Testing Hazards
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Our guided 14-day closed testing service coordinates 22–25 real physical device testers, tracks daily retention, monitors Android Vitals, and guides questionnaire preparation.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <Link
                href="/services/closed-testing"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary text-primary-foreground py-3 px-5 text-xs font-bold shadow-xs hover:bg-primary/90 transition-all"
              >
                <span>Get 14-Day Testing Assistance</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
