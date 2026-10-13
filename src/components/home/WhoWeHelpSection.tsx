import React from "react";
import Link from "next/link";
import {
  UserCheck,
  Smartphone,
  Building2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

const whoWeHelpData = [
  {
    icon: UserCheck,
    title: "Solo Android Developers",
    badge: "Personal Accounts",
    challenge:
      "Facing Google's mandatory 14-day 20-tester closed testing barrier without an existing private network of Android hardware users.",
    solution:
      "We coordinate active cohorts of real, opted-in testers with varied Android devices to satisfy Google's criteria safely.",
    link: "/services/closed-testing",
  },
  {
    icon: Smartphone,
    title: "Early-Stage App Startups",
    badge: "First Production Release",
    challenge:
      "Preparing for Google's human production review questionnaire without documented tester feedback, changelogs, or vitals evidence.",
    solution:
      "We help you gather qualitative user feedback, log bug fixes across release versions, and draft compelling review answers.",
    link: "/services/production-access-guidance",
  },
  {
    icon: Building2,
    title: "Companies & Studios",
    badge: "Organization Accounts",
    challenge:
      "Navigating complex D-U-N-S matching, corporate verification deadlines, or Target SDK compliance transitions without delays.",
    solution:
      "We audit organizational records against Dun & Bradstreet registries to avoid verification rejections and account terminations.",
    link: "/services/play-console-account-setup",
  },
  {
    icon: AlertTriangle,
    title: "Teams Facing Policy Flags",
    badge: "Rejections & Removals",
    challenge:
      "Stuck with ambiguous rejection emails regarding Data Safety forms, background permissions, or denied production access reviews.",
    solution:
      "We perform root-cause technical audits to isolate the exact policy conflict and prepare formally structured developer appeals.",
    link: "/services/app-rejection-help",
  },
];

export function WhoWeHelpSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-cream/50 dark:bg-background border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Target Audiences"
          title="Solving the Real Roadblocks in Modern Google Play Publishing"
          description="Since Google elevated developer requirements for personal accounts and organization verification, publishing an Android app requires structured testing and strict policy compliance. Here is who we support."
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeHelpData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 shadow-subtle hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-cream text-primary border border-border/60 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full"
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {item.title}
                    </h3>

                    <div className="mt-3 pt-3 border-t border-border/60">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        The Challenge
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border/60 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                      How We Guide
                    </span>
                    <p className="text-xs text-foreground leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline pt-1"
                  >
                    <span>View track details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
