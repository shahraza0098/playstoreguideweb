"use client";

import React, { useState, useRef, useId } from "react";
import Link from "next/link";
import {
  FileCheck2,
  Users2,
  Activity,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Terminal,
  Check,
  Info,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export interface ProcessPhase {
  id: string;
  stepNumber: string;
  phaseTitle: string;
  durationLabel: string;
  headline: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
  officialRequirement: string;
  recommendedBestPractice: string;
  consoleAction: string;
  actionItems: string[];
  link?: {
    href: string;
    label: string;
  };
}

export const fourteenDayProcessPhases: ProcessPhase[] = [
  {
    id: "phase-prep",
    stepNumber: "01",
    phaseTitle: "Before Day 1",
    durationLabel: "Pre-Testing Setup",
    headline: "Eligibility Check, App Audit & Tester Onboarding",
    summary:
      "Verify whether your developer account is subject to closed testing, compile a stable release bundle, configure your closed track, and onboard a verified cohort of testers with an active safety buffer.",
    icon: FileCheck2,
    officialRequirement:
      "Personal developer accounts created on or after November 13, 2023 must run a closed test with at least 20 testers opted in for at least 14 continuous days before applying for production access. (Organization accounts verified with a D-U-N-S number are exempt).",
    recommendedBestPractice:
      "Recruit 22–25 real testers on physical Android devices. Never rely on exactly 20 testers, as a single opt-out or uninstall can reset Google's 14-day counter back to Day 1.",
    consoleAction: "Release > Testing > Closed testing > Create new release",
    actionItems: [
      "Confirm developer account type (personal vs organization with D-U-N-S).",
      "Upload signed Android App Bundle (AAB) compiled with Target SDK 34/35.",
      "Configure Google Group or email distribution list in Closed Testing track.",
      "Provide working test credentials in Play Console if the app requires login.",
      "Verify opt-in URLs (Web & Android) and confirm 22+ initial tester opt-ins.",
    ],
    link: {
      href: "/tools/play-store-publishing-checklist",
      label: "Run Pre-Launch Readiness Checklist",
    },
  },
  {
    id: "phase-tracking",
    stepNumber: "02",
    phaseTitle: "Days 1–14",
    durationLabel: "Continuous Track",
    headline: "Continuous Opt-In Retention & Cohort Continuity",
    summary:
      "Maintain active tester participation across 14 consecutive calendar days. Track opt-in stability in Google Play Console and ensure your cohort count never dips below the mandatory threshold.",
    icon: Users2,
    officialRequirement:
      "At least 20 testers must remain continuously opted in for 14 full days. If the count drops below 20 at any point, the 14-day timer halts or resets according to Google Play algorithms.",
    recommendedBestPractice:
      "Monitor your Play Console dashboard daily. Maintain a 10–25% buffer of backup testers ready to replace anyone whose account changes or leaves the test.",
    consoleAction: "Dashboard > 'Test your app with 20 testers for at least 14 days'",
    actionItems: [
      "Monitor daily opt-in metrics under Play Console closed testing dashboard.",
      "Track cohort stability against accidental drops to prevent counter resets.",
      "Ensure the release track status remains 'Completed' throughout the 14 days.",
      "Maintain communication channel for testers to report download issues.",
    ],
    link: {
      href: "/blog/google-play-closed-testing-requirements-guide",
      label: "Read 14-Day Closed Testing Playbook",
    },
  },
  {
    id: "phase-testing",
    stepNumber: "03",
    phaseTitle: "During Testing",
    durationLabel: "Active Feedback & Vitals",
    headline: "Genuine Feedback, Bug Triage & Telemetry",
    summary:
      "Testers explore user flows across diverse hardware and Android versions, reporting bugs and UX confusion while Play Services records natural usage telemetry and Android Vitals.",
    officialRequirement:
      "Human reviewers inspect whether real testing occurred. Google evaluates your Android Vitals against bad behavior thresholds (user-perceived crash rate < 1.09%, ANR rate < 0.47%).",
    recommendedBestPractice:
      "Encourage periodic app launches and natural exploration. Release at least one incremental update (e.g. v1.0.1) addressing bugs found during testing to prove genuine developer iteration.",
    icon: Activity,
    consoleAction: "Quality > Android Vitals > Crashes and ANRs",
    actionItems: [
      "Collect structured bug logs, UI confusion notes, and device-specific quirks.",
      "Keep crash rate strictly below 1.09% and ANR rate below 0.47% in Android Vitals.",
      "Deploy at least one patch release to Closed track resolving reported issues.",
      "Catalog release changelogs to cite directly in your production questionnaire.",
    ],
    link: {
      href: "/services/closed-testing",
      label: "Learn About Our 14-Day Assistance Scope",
    },
  },
  {
    id: "phase-apply",
    stepNumber: "04",
    phaseTitle: "After 14 Days",
    durationLabel: "Production Application",
    headline: "Production Access Review & Evidence Dossier",
    summary:
      "Once 14 continuous days are satisfied, unlock the 'Apply for production' button and submit comprehensive, evidence-backed answers to Google's 5 human-reviewed questionnaire prompts.",
    officialRequirement:
      "Completing 14 days is an eligibility prerequisite, not an approval guarantee. Google review operations evaluates your questionnaire answers, telemetry, and app quality before granting production access.",
    recommendedBestPractice:
      "Never submit generic one-line answers. Provide detailed paragraphs citing specific tester feedback, exact bug fixes delivered, and metrics proving software stability.",
    icon: CheckCircle2,
    consoleAction: "Dashboard > 'Apply for production' > Questionnaire submission",
    actionItems: [
      "Verify completion of the 14-day criteria on Google Play Console dashboard.",
      "Compile tester feedback summaries, device logs, and changelog history.",
      "Draft substantive, evidence-backed answers for all 5 Google review prompts.",
      "Review privacy policy, Data Safety declaration, and App Access credentials.",
    ],
    link: {
      href: "/blog/how-to-prepare-for-google-play-production-access",
      label: "Production Access Questionnaire Guide",
    },
  },
];

interface FourteenDayProcessTimelineProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  showInspector?: boolean;
  className?: string;
}

export function FourteenDayProcessTimeline({
  title = "How the 14-Day Closed Testing Process Works",
  eyebrow = "14-Day Roadmap",
  description = "A transparent, structured workflow designed to help eligible Android developers satisfy Google Play's closed testing requirement, collect authentic telemetry, and prepare for production review.",
  showInspector = true,
  className = "",
}: FourteenDayProcessTimelineProps) {
  const [selectedPhaseIdx, setSelectedPhaseIdx] = useState<number>(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const componentId = useId();

  const activePhase = fourteenDayProcessPhases[selectedPhaseIdx] || fourteenDayProcessPhases[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % fourteenDayProcessPhases.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + fourteenDayProcessPhases.length) % fourteenDayProcessPhases.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = fourteenDayProcessPhases.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setSelectedPhaseIdx(nextIndex);
    const tabButtons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabButtons?.[nextIndex]?.focus();
  };

  return (
    <div className={`w-full relative ${className}`}>
      {/* Section Header */}
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

      {/* Interactive Phase Inspector (Keyboard Accessible) */}
      {showInspector && (
        <div className="mb-12 sm:mb-16 rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-5 sm:p-7 shadow-floating max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/70">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                14-Day Phase Inspector &amp; Policy Clarification
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                Inspect official requirements vs. recommended developer best practices across each phase.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-muted-foreground bg-surface-cream dark:bg-muted/40 px-2.5 py-1 rounded-full border border-border/60">
                Phase {selectedPhaseIdx + 1} of {fourteenDayProcessPhases.length}
              </span>
            </div>
          </div>

          {/* Accessible Tablist */}
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="14-day closed testing process phases"
            className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-cream/70 dark:bg-muted/40 p-1.5 rounded-2xl border border-border/60"
          >
            {fourteenDayProcessPhases.map((phase, idx) => {
              const isSelected = selectedPhaseIdx === idx;
              const Icon = phase.icon;
              return (
                <button
                  key={phase.id}
                  type="button"
                  role="tab"
                  id={`tab-${componentId}-${phase.id}`}
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-${componentId}-${phase.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedPhaseIdx(idx)}
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
                    {phase.stepNumber}
                  </span>
                  <span className="truncate">{phase.phaseTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Panel */}
          <div
            id={`tabpanel-${componentId}-${activePhase.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${componentId}-${activePhase.id}`}
            className="mt-5 p-5 rounded-2xl bg-surface-cream/50 dark:bg-muted/20 border border-border/80 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <activePhase.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-foreground">
                    {activePhase.headline}
                  </h3>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {activePhase.phaseTitle} • {activePhase.durationLabel}
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-mono font-semibold text-primary border border-primary/20 shrink-0">
                <Terminal className="h-3 w-3" />
                {activePhase.consoleAction}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {activePhase.summary}
            </p>

            {/* Official vs Best Practice Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl border border-primary/25 bg-surface-panel dark:bg-card p-3 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  <span>Official Google Requirement</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  {activePhase.officialRequirement}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/25 bg-surface-panel dark:bg-card p-3 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-foreground">
                  <Info className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Recommended Best Practice</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  {activePhase.recommendedBestPractice}
                </p>
              </div>
            </div>

            {/* Action Items List */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                Phase Action Items
              </span>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {activePhase.actionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contextual Link */}
            {activePhase.link && (
              <div className="pt-2 flex justify-end">
                <Link
                  href={activePhase.link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>{activePhase.link.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Alternating Connected Timeline (Server-Rendered Semantic HTML) */}
      <div className="relative max-w-5xl mx-auto">
        {/* Continuous Connecting Line */}
        <div
          aria-hidden="true"
          className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-teal-500 to-indigo-500 opacity-30 dark:opacity-20"
        />

        <div className="space-y-8 sm:space-y-12">
          {fourteenDayProcessPhases.map((phase, index) => {
            const isEven = index % 2 === 1;
            const isSelected = selectedPhaseIdx === index;
            const Icon = phase.icon;

            return (
              <div
                key={phase.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Card */}
                <div className="w-full md:w-[46%] pl-14 md:pl-0">
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.3,
                      delay: shouldReduceMotion ? 0 : Math.min(index * 0.05, 0.2),
                    }}
                    className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 p-6 sm:p-7 shadow-card hover:shadow-card-hover ${
                      isSelected
                        ? "border-primary/60 bg-surface-panel dark:bg-card ring-2 ring-primary/15"
                        : "border-border/80 bg-surface-panel dark:bg-card hover:border-primary/40"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <Badge
                          variant="secondary"
                          className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full"
                        >
                          {phase.phaseTitle}
                        </Badge>
                        <span className="text-[11px] font-mono text-muted-foreground font-semibold">
                          {phase.durationLabel}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {phase.headline}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {phase.summary}
                      </p>

                      <div className="pt-2 border-t border-border/60 space-y-2 text-xs">
                        <div className="rounded-xl bg-surface-cream/80 dark:bg-muted/40 p-2.5 text-[11px] text-muted-foreground border border-border/50">
                          <span className="font-semibold text-foreground">Official Rule: </span>
                          {phase.officialRequirement}
                        </div>

                        <ul className="space-y-1.5 text-xs text-muted-foreground pt-1">
                          {phase.actionItems.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {phase.link && (
                        <div className="pt-2">
                          <Link
                            href={phase.link.href}
                            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                          >
                            <span>{phase.link.label}</span>
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Center Node / Marker */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 transition-all duration-300 shadow-sm ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground scale-110 shadow-primary/20"
                        : "border-border bg-surface-panel dark:bg-card text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Compliance Disclaimer Footer */}
      <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-muted/20 p-4 text-center text-xs text-muted-foreground">
        <p className="leading-relaxed">
          <strong className="text-foreground">Official Compliance Note:</strong> Third-party testing assistance coordinates real testers and feedback logs to satisfy applicable Google Play testing rules. PlayStoreGuide is not affiliated with Google LLC, and Google maintains independent discretion over all production access approvals.
        </p>
      </div>
    </div>
  );
}
