"use client";

import React, { useState, useRef, useId } from "react";
import Link from "next/link";
import {
  FileSearch,
  Users2,
  Activity,
  CheckCheck,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Terminal,
  Check,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export interface TimelineStepItem {
  id: string;
  stepNumber: string;
  phaseBadge: string;
  duration: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  playConsoleAction: string;
  policyNote: string;
  checklist: string[];
  link?: {
    href: string;
    label: string;
  };
}

export const defaultTimelineSteps: TimelineStepItem[] = [
  {
    id: "step-01",
    stepNumber: "01",
    phaseBadge: "Phase 1: Pre-Flight Audit",
    duration: "Day 0",
    title: "Pre-Flight App & Policy Audit",
    description:
      "We inspect your Android App Bundle (AAB), target SDK level (API 34/35), manifest permissions, and current Play Console status to isolate policy traps before beginning the testing track.",
    icon: FileSearch,
    playConsoleAction: "Release > Testing > Closed testing > Create new release",
    policyNote:
      "Target SDK 34+ is mandatory for updates; Target SDK 35 is required for 2026 Android releases.",
    checklist: [
      "Target SDK 34/35 compliance verified in build.gradle",
      "Sensitive permissions (e.g. Foreground Service) justified",
      "Reviewer test login credentials configured for gated features",
    ],
    link: {
      href: "/tools/play-store-publishing-checklist",
      label: "Open Pre-Launch Checklist Tool",
    },
  },
  {
    id: "step-02",
    stepNumber: "02",
    phaseBadge: "Phase 2: Track Setup",
    duration: "Days 1–2",
    title: "Structured Track Setup & Cohort Distribution",
    description:
      "We configure compliant closed testing distribution (Google Group or email list) with 22–25 verified real testers on diverse physical Android devices, establishing an active safety buffer.",
    icon: Users2,
    playConsoleAction: "Testing > Closed testing > Manage track > Testers tab",
    policyNote:
      "Mandatory 20-tester minimum for personal accounts (post-Nov 13, 2023). Organization accounts with D-U-N-S are exempt.",
    checklist: [
      "Google Group or opt-in email list added to closed track",
      "Web opt-in & Android Play Store invitation URLs generated",
      "22–25 physical Android devices opt-in confirmed (+3 buffer)",
    ],
    link: {
      href: "/blog/google-play-closed-testing-requirements-guide",
      label: "Read 14-Day Closed Testing Playbook",
    },
  },
  {
    id: "step-03",
    stepNumber: "03",
    phaseBadge: "Phase 3: Active Testing",
    duration: "Days 3–15",
    title: "14-Day Active Testing & Telemetry Logging",
    description:
      "Over 14 consecutive calendar days, testers run your app on real hardware, logging usability feedback and generating authentic Play Services session telemetry.",
    icon: Activity,
    playConsoleAction: "Dashboard > Closed testing status & Android Vitals",
    policyNote:
      "Continuous 14-day opt-in retention tracked. If active count falls below 20, Google resets the 14-day counter to Day 1.",
    checklist: [
      "Daily opt-in retention monitoring to prevent counter resets",
      "Android Vitals monitoring (crashes < 1.09%, ANRs < 0.47%)",
      "Device-specific qualitative bug logs & UX observations collected",
    ],
    link: {
      href: "/services/closed-testing",
      label: "View Closed Testing Service Details",
    },
  },
  {
    id: "step-04",
    stepNumber: "04",
    phaseBadge: "Phase 4: Review Readiness",
    duration: "Day 15+",
    title: "Feedback Dossier & Production Access Preparation",
    description:
      "We synthesize raw tester bug logs into an organized evidence dossier and structure compelling answers for Google's 5 human-reviewed questionnaire prompts.",
    icon: CheckCheck,
    playConsoleAction: "Dashboard > Apply for production button",
    policyNote:
      "Meeting 14 days unlocks the questionnaire; Google review operations retains independent approval authority.",
    checklist: [
      "Raw feedback triage & release changelog documentation",
      "5-prompt production review questionnaire answers drafted",
      "Final submission checklist verification prior to request",
    ],
    link: {
      href: "/blog/how-to-prepare-for-google-play-production-access",
      label: "Read Production Questionnaire Guide",
    },
  },
];

interface ClosedTestingTimelineProps {
  steps?: TimelineStepItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
  showSelector?: boolean;
  className?: string;
}

export function ClosedTestingTimeline({
  steps = defaultTimelineSteps,
  title = "How Google Play Closed Testing Works",
  eyebrow = "4-Step Compliance Roadmap",
  description = "A transparent, milestone-driven technical workflow to fulfill Google's 14-day opt-in requirement, collect authentic telemetry, and assemble evidence for production review.",
  showSelector = true,
  className = "",
}: ClosedTestingTimelineProps) {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const tabListRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const componentId = useId();

  const activeStep = steps[selectedStepIndex] || steps[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % steps.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + steps.length) % steps.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = steps.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setSelectedStepIndex(nextIndex);
    const tabButtons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabButtons?.[nextIndex]?.focus();
  };

  const toggleChecklistItem = (itemKey: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  return (
    <div className={`w-full relative ${className}`}>
      {/* Header (Server-Rendered Semantic Headings) */}
      {(eyebrow || title || description) && (
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {eyebrow && (
            <Badge
              variant="outline"
              className="py-1 px-3 text-xs font-semibold rounded-full border-primary/30 bg-surface-cream text-foreground mb-3"
            >
              <Sparkles className="h-3 w-3 text-primary mr-1" />
              {eyebrow}
            </Badge>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-xs sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Interactive Step Selector / Checklist Preview (Keyboard Accessible) */}
      {showSelector && (
        <div className="mb-12 sm:mb-16 rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-5 sm:p-7 shadow-floating max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/70">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                Interactive Step Inspector &amp; Checklist Preview
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                Select any phase to inspect Play Console requirements, official policies, and actionable checklist items.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-muted-foreground bg-surface-cream dark:bg-muted/40 px-2.5 py-1 rounded-full border border-border/60">
                Step {selectedStepIndex + 1} of {steps.length} Active
              </span>
            </div>
          </div>

          {/* Accessible Tablist */}
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Closed testing workflow phase selector"
            className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-cream/70 dark:bg-muted/40 p-1.5 rounded-2xl border border-border/60"
          >
            {steps.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  id={`tab-${componentId}-${step.id}`}
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-${componentId}-${step.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedStepIndex(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
                    isSelected
                      ? "bg-surface-panel dark:bg-card text-foreground shadow-xs border border-border/80"
                      : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 hidden sm:inline opacity-80" />
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-mono font-bold ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span className="truncate">{step.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Inspector Panel */}
          <div
            id={`tabpanel-${componentId}-${activeStep.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${componentId}-${activeStep.id}`}
            className="mt-5 p-5 rounded-2xl bg-surface-cream/50 dark:bg-muted/20 border border-border/80 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <activeStep.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-foreground">
                    {activeStep.title}
                  </h3>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {activeStep.duration} • {activeStep.phaseBadge}
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-mono font-semibold text-primary border border-primary/20 shrink-0">
                <Terminal className="h-3 w-3" />
                {activeStep.playConsoleAction}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {activeStep.description}
            </p>

            {/* Interactive Checklist Preview */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2.5">
                Developer Action Items (Click to Verify Your App)
              </span>
              <div className="grid grid-cols-1 gap-2">
                {activeStep.checklist.map((item, itemIdx) => {
                  const itemKey = `${activeStep.id}-check-${itemIdx}`;
                  const isChecked = !!completedItems[itemKey];

                  return (
                    <button
                      key={itemKey}
                      type="button"
                      onClick={() => toggleChecklistItem(itemKey)}
                      aria-pressed={isChecked}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isChecked
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200"
                          : "bg-surface-panel/90 dark:bg-card/90 border-border/60 text-foreground hover:border-primary/40"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border text-[10px] transition-colors ${
                          isChecked
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "border-muted-foreground/40 bg-surface-cream"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                      </span>
                      <span className="text-xs font-medium leading-tight">
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Official Policy Note Callout */}
            <div className="p-3 rounded-xl bg-surface-panel dark:bg-card border border-border/70 flex items-start gap-2 text-xs">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div className="text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">Google Policy Note: </span>
                {activeStep.policyNote}
              </div>
            </div>

            {/* Link to Playbook */}
            {activeStep.link && (
              <div className="pt-2 flex justify-end">
                <Link
                  href={activeStep.link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>{activeStep.link.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Alternating Connected Timeline Structure (Full Server-Rendered Content) */}
      <div className="relative max-w-5xl mx-auto">
        {/* Continuous Connecting Line: Left on mobile, Center on desktop */}
        <div
          aria-hidden="true"
          className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-teal-500 to-indigo-500 opacity-30 dark:opacity-20"
        />

        <div className="space-y-8 sm:space-y-12">
          {steps.map((item, index) => {
            const isEven = index % 2 === 1;
            const isSelected = selectedStepIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                id={`timeline-card-${item.id}`}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Card Container */}
                <div className="w-full md:w-[46%] pl-14 md:pl-0">
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.08, margin: "0px 0px -20px 0px" }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.32,
                      delay: shouldReduceMotion ? 0 : Math.min(index * 0.06, 0.2),
                    }}
                    className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 p-6 sm:p-7 shadow-card hover:shadow-card-hover ${
                      isSelected
                        ? "border-primary bg-surface-cream/80 dark:bg-card ring-2 ring-primary/20 shadow-floating"
                        : "border-border/80 bg-surface-panel dark:bg-card hover:border-primary/40"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                      <Badge
                        variant={isSelected ? "default" : "secondary"}
                        className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full"
                      >
                        {item.phaseBadge}
                      </Badge>
                      <span className="text-xs font-mono font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                        {item.duration}
                      </span>
                    </div>

                    {/* Step Title (Semantic H3 for SEO) */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Play Console Action Hint */}
                    <div className="mt-4 p-2.5 rounded-xl bg-surface-cream/70 dark:bg-muted/30 border border-border/60 text-[11px] font-mono text-muted-foreground flex items-center gap-2">
                      <Terminal className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="truncate">{item.playConsoleAction}</span>
                    </div>

                    {/* Checklist Highlights */}
                    <div className="mt-4 pt-3 border-t border-border/60">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-2">
                        Verification Milestones
                      </p>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {item.checklist.map((checkText, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            <span>{checkText}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Policy Note & Link */}
                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                      {item.link ? (
                        <Link
                          href={item.link.href}
                          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                        >
                          <span>{item.link.label}</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <span className="text-[11px] text-muted-foreground">
                          {item.policyNote}
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedStepIndex(index)}
                        className="text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        {isSelected ? "Inspecting" : "Inspect Step"}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Numbered Milestone Node on Line */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center top-6 md:top-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedStepIndex(index)}
                    aria-label={`Inspect Step ${item.stepNumber}: ${item.title}`}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 shadow-floating z-10 transition-transform hover:scale-110 cursor-pointer ${
                      isSelected
                        ? "bg-primary border-primary text-primary-foreground ring-4 ring-primary/20 scale-105"
                        : "bg-surface-panel dark:bg-card border-primary text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                </div>

                {/* Desktop Symmetry Spacer */}
                <div className="hidden md:block md:w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Policy Transparency & Assurance Callout */}
      <div className="mt-14 sm:mt-16 rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-5 sm:p-7 text-center max-w-3xl mx-auto shadow-subtle">
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-foreground">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
          <span>Factual Policy Compliance &bull; Zero False Promises</span>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The 20-tester, 14-day rule is an eligibility requirement enacted on November 13, 2023 for personal developer accounts. Organization accounts verified with a D-U-N-S number are exempt. Completing closed testing unlocks the production application questionnaire; Google Play review operations retains exclusive, independent approval authority.
        </p>
      </div>
    </div>
  );
}
