"use client";

import React from "react";
import {
  FileSearch,
  Users2,
  Activity,
  CheckCheck,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

const workflowSteps = [
  {
    step: "01",
    phase: "Phase 1: Pre-Flight Audit",
    title: "Pre-Engagement App & Policy Audit",
    duration: "Day 0",
    icon: FileSearch,
    description:
      "We inspect your Android App Bundle (AAB), target SDK level (API 34/35), manifest permissions, and current Play Console status to isolate policy traps before beginning the testing track.",
    highlights: [
      "Target SDK 34/35 compliance check",
      "Sensitive permissions declaration audit",
      "Reviewer test account credentials verification",
    ],
  },
  {
    step: "02",
    phase: "Phase 2: Track Setup",
    title: "Structured Track Setup & Cohort Distribution",
    duration: "Days 1–2",
    icon: Users2,
    description:
      "We configure compliant closed testing distribution (Google Group or email list) with 20+ verified real testers on diverse physical Android devices, establishing an opt-in safety buffer.",
    highlights: [
      "Google Group / email closed track invitation",
      "20+ unique physical Android device cohort",
      "Zero bot farms or emulator instances",
    ],
  },
  {
    step: "03",
    phase: "Phase 3: Active Testing",
    title: "Telemetry, Testing & Qualitative Feedback Logging",
    duration: "Days 1–14",
    icon: Activity,
    description:
      "Over 14 consecutive calendar days, testers use your app on real hardware, reporting UI/UX usability notes, device-specific bugs, and generating authentic Play Services telemetry.",
    highlights: [
      "14 continuous days of opt-in cohort retention",
      "Android Vitals crash (<1.09%) & ANR (<0.47%) tracking",
      "Qualitative bug logs for review evidence",
    ],
  },
  {
    step: "04",
    phase: "Phase 4: Review Readiness",
    title: "Production Questionnaire Prep & Review Submission",
    duration: "Day 14+",
    icon: CheckCheck,
    description:
      "We assist you in structuring compelling, evidence-backed answers for Google's mandatory production access questionnaire, documenting tester feedback triage and release iterations.",
    highlights: [
      "Question-by-question response structuring",
      "Synthesis of raw feedback into actionable logs",
      "Release changelog & iteration history assembly",
    ],
  },
];

export function WorkflowTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 bg-surface-pale-blue/60 dark:bg-muted/15 border-b border-border/80 relative overflow-hidden">
      {/* Subtle background ambient dot effect */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          align="center"
          eyebrow="Engagement Workflow"
          title="How Our Technical Publishing Advisory Works"
          description="A transparent, step-by-step workflow designed to verify technical readiness, maintain tester retention, and compile documentation before requesting Google Play production rollout."
        />

        {/* Alternating Connected Timeline */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Central Vertical Line for Desktop / Left Line for Mobile */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/30 via-teal-500/30 to-indigo-500/30 dark:from-primary/20 dark:via-teal-500/20 dark:to-indigo-500/20" />

          <div className="space-y-10 sm:space-y-12">
            {workflowSteps.map((item, index) => {
              const isEven = index % 2 === 1;
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full md:w-[46%] pl-14 md:pl-0">
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, y: 16 }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 1, y: 0 }
                      }
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="secondary"
                          className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full"
                        >
                          {item.phase}
                        </Badge>
                        <span className="text-xs font-mono font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                          {item.duration}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-border/60">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-2">
                          Key Deliverables
                        </p>
                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Milestone Node on Central Line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center top-6 md:top-auto">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-panel dark:bg-card border-2 border-primary text-primary shadow-floating z-10 transition-transform hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side for desktop layout symmetry */}
                  <div className="hidden md:block md:w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Policy Transparency Callout */}
        <div className="mt-16 rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-5 sm:p-7 text-center max-w-3xl mx-auto shadow-subtle">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-foreground">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
            <span>Developer Account Independence Guaranteed</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We never request your Google account login credentials or charge for fabricated approvals. You maintain complete, uninterrupted ownership of your Google Play Console account throughout every stage.
          </p>
        </div>
      </div>
    </section>
  );
}
