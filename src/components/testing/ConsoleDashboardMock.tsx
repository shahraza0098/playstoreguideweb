"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Users,
  Activity,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Check,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface ConsoleDashboardMockProps {
  appName?: string;
  packageName?: string;
  targetSdk?: string;
  versionName?: string;
  activeTesters?: number;
  requiredTesters?: number;
  currentDay?: number;
  totalDays?: number;
  showTabs?: boolean;
  className?: string;
}

export function ConsoleDashboardMock({
  appName = "FocusRoutine Android",
  packageName = "com.focusroutine.app",
  targetSdk = "Target SDK 35 (Android 15)",
  versionName = "v1.4.2 (AAB)",
  activeTesters = 23,
  requiredTesters = 20,
  currentDay = 12,
  totalDays = 14,
  showTabs = true,
  className = "",
}: ConsoleDashboardMockProps) {
  const [activeTab, setActiveTab] = useState<"cohort" | "vitals" | "questionnaire">("cohort");
  const shouldReduceMotion = useReducedMotion();

  const progressPercent = Math.min(100, Math.round((currentDay / totalDays) * 100));

  const tabListRef = React.useRef<HTMLDivElement>(null);
  const tabKeys: Array<"cohort" | "vitals" | "questionnaire"> = ["cohort", "vitals", "questionnaire"];

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabKeys.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabKeys.length) % tabKeys.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabKeys.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const nextTab = tabKeys[nextIndex];
    setActiveTab(nextTab);
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
  };

  return (
    <div className={`relative w-full rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-5 sm:p-7 shadow-floating ${className}`}>
      {/* Demonstration / Sample Preview Watermark Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-border/70 text-xs">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold border-primary/30 bg-surface-cream text-foreground"
          >
            <Sparkles className="h-3 w-3 text-primary mr-1" />
            Demonstration Sample Preview
          </Badge>
          <span className="text-[11px] text-muted-foreground hidden sm:inline">
            • Not Live Console Tracking
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>100% Client Console Ownership Retained</span>
        </div>
      </div>

      {/* App Header & Release Track Identification */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs">
            <Smartphone className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-extrabold text-foreground">
                {appName}
              </h3>
              <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground">
                {versionName}
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground font-mono">
              {packageName} • {targetSdk}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Closed Track: Active
          </span>
        </div>
      </div>

      {/* Interactive Feature Tabs */}
      {showTabs && (
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Dashboard Simulation Views"
          className="mt-4 grid grid-cols-3 gap-1.5 rounded-2xl bg-surface-cream/80 dark:bg-muted/40 p-1 border border-border/60"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "cohort"}
            aria-controls="panel-cohort"
            id="tab-cohort"
            tabIndex={activeTab === "cohort" ? 0 : -1}
            onClick={() => setActiveTab("cohort")}
            onKeyDown={(e) => handleTabKeyDown(e, 0)}
            className={`rounded-xl py-2 px-2 text-xs font-bold transition-all text-center cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
              activeTab === "cohort"
                ? "bg-surface-panel dark:bg-card text-foreground shadow-2xs border border-border/70"
                : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03]"
            }`}
          >
            Cohort Telemetry
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "vitals"}
            aria-controls="panel-vitals"
            id="tab-vitals"
            tabIndex={activeTab === "vitals" ? 0 : -1}
            onClick={() => setActiveTab("vitals")}
            onKeyDown={(e) => handleTabKeyDown(e, 1)}
            className={`rounded-xl py-2 px-2 text-xs font-bold transition-all text-center cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
              activeTab === "vitals"
                ? "bg-surface-panel dark:bg-card text-foreground shadow-2xs border border-border/70"
                : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03]"
            }`}
          >
            Android Vitals
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "questionnaire"}
            aria-controls="panel-questionnaire"
            id="tab-questionnaire"
            tabIndex={activeTab === "questionnaire" ? 0 : -1}
            onClick={() => setActiveTab("questionnaire")}
            onKeyDown={(e) => handleTabKeyDown(e, 2)}
            className={`rounded-xl py-2 px-2 text-xs font-bold transition-all text-center cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
              activeTab === "questionnaire"
                ? "bg-surface-panel dark:bg-card text-foreground shadow-2xs border border-border/70"
                : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03]"
            }`}
          >
            Questionnaire Prep
          </button>
        </div>
      )}

      {/* Tab Panels */}
      <div className="mt-4">
        <AnimatePresence mode="wait">
          {activeTab === "cohort" && (
            <motion.div
              key="cohort"
              id="panel-cohort"
              role="tabpanel"
              aria-labelledby="tab-cohort"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 6 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* 3 Metrics Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <div className="rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-muted/30 p-3 sm:p-3.5">
                  <div className="flex items-center justify-between text-muted-foreground mb-1">
                    <span className="text-[10px] sm:text-[11px] font-semibold">Active Testers</span>
                    <Users className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="text-base sm:text-xl font-extrabold text-foreground font-mono">
                    {activeTesters} <span className="text-xs text-muted-foreground font-normal">/ {requiredTesters}</span>
                  </div>
                  <div className="mt-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-2.5 w-2.5 shrink-0" />
                    <span>+3 safety buffer</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-muted/30 p-3 sm:p-3.5">
                  <div className="flex items-center justify-between text-muted-foreground mb-1">
                    <span className="text-[10px] sm:text-[11px] font-semibold">Track Elapsed</span>
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="text-base sm:text-xl font-extrabold text-foreground font-mono">
                    Day {currentDay} <span className="text-xs text-muted-foreground font-normal">/ {totalDays}</span>
                  </div>
                  <div className="mt-1 text-[10px] text-primary font-medium">
                    <span>{progressPercent}% completed</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-muted/30 p-3 sm:p-3.5">
                  <div className="flex items-center justify-between text-muted-foreground mb-1">
                    <span className="text-[10px] sm:text-[11px] font-semibold">Opt-In Retention</span>
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="text-base sm:text-xl font-extrabold text-foreground font-mono">
                    100%
                  </div>
                  <div className="mt-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Zero drop-off resets</span>
                  </div>
                </div>
              </div>

              {/* 14-Day Progress Bar Visualization */}
              <div className="rounded-2xl border border-border/80 bg-surface-pale-blue/40 dark:bg-muted/20 p-3.5 sm:p-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-foreground flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-primary" />
                    14-Day Closed Testing Retention Timeline
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    Day {currentDay} of {totalDays}
                  </span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-border/80 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-teal-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>D1: Release Rollout</span>
                  <span>D7: Iteration Telemetry</span>
                  <span className="font-semibold text-primary">D14: Questionnaire Ready</span>
                </div>
              </div>

              {/* Qualitative Log Stream Preview */}
              <div className="rounded-2xl border border-border/80 bg-surface-cream/40 dark:bg-muted/20 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground mb-1">
                  <span>Qualitative Physical Hardware Logs</span>
                  <span className="text-[10px] text-primary">23 verified reports logged</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start gap-2.5 rounded-xl bg-surface-panel/90 dark:bg-card/90 p-2.5 border border-border/50">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-3 w-3" />
                    </span>
                    <div className="flex-1 min-w-0 text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground">Pixel 8 (Android 15)</span>
                        <span className="text-muted-foreground font-mono text-[10px]">Today, 11:42</span>
                      </div>
                      <p className="text-muted-foreground truncate">
                        Full onboarding timer completed. Notification permission prompt verified without crash.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-surface-panel/90 dark:bg-card/90 p-2.5 border border-border/50">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-3 w-3" />
                    </span>
                    <div className="flex-1 min-w-0 text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground">Galaxy S24 (Android 14)</span>
                        <span className="text-muted-foreground font-mono text-[10px]">Yesterday</span>
                      </div>
                      <p className="text-muted-foreground truncate">
                        Zero ANR on cold startup. Verified active opt-in in Play Store testing library.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "vitals" && (
            <motion.div
              key="vitals"
              id="panel-vitals"
              role="tabpanel"
              aria-labelledby="tab-vitals"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 6 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-muted/30 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="font-semibold">User-Perceived ANR Rate</span>
                    <Cpu className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-2xl font-extrabold text-foreground font-mono">0.14%</div>
                  <div className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>Google limit: &lt; 0.47% (Compliant)</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-muted/30 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="font-semibold">User-Perceived Crash Rate</span>
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-2xl font-extrabold text-foreground font-mono">0.38%</div>
                  <div className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>Google limit: &lt; 1.09% (Compliant)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-surface-panel dark:bg-card p-4 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Android Vitals Benchmark Health</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  During production review, Google human evaluators inspect your app&rsquo;s core vital thresholds. Keeping crashes below 1.09% and ANRs below 0.47% provides quantitative evidence that your build is technically stable for general rollout.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "questionnaire" && (
            <motion.div
              key="questionnaire"
              id="panel-questionnaire"
              role="tabpanel"
              aria-labelledby="tab-questionnaire"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 6 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 text-xs"
            >
              <div className="rounded-2xl border border-border/80 bg-surface-pale-blue/40 dark:bg-muted/30 p-3.5">
                <span className="font-bold text-foreground block mb-1">
                  Google Play Production Review Questionnaire Status
                </span>
                <p className="text-muted-foreground text-[11px]">
                  Meeting 14 days unlocks 5 prompts evaluated by Google review operations. Evidence must be substantiated with real testing changelogs.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-panel dark:bg-card border border-border/60">
                  <span className="font-medium text-foreground">1. Tester Recruitment Cohort Strategy</span>
                  <Badge variant="success" className="text-[10px]">DOCUMENTED</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-panel dark:bg-card border border-border/60">
                  <span className="font-medium text-foreground">2. Qualitative Feedback &amp; Bug Triage</span>
                  <Badge variant="success" className="text-[10px]">23 LOGS COMPILED</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-panel dark:bg-card border border-border/60">
                  <span className="font-medium text-foreground">3. Version Iteration &amp; Changelogs (v1.1 &rarr; v1.4)</span>
                  <Badge variant="success" className="text-[10px]">VERIFIED</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-panel dark:bg-card border border-border/60">
                  <span className="font-medium text-foreground">4. Stability Evidence &amp; Android Vitals</span>
                  <Badge variant="success" className="text-[10px]">WITHIN LIMITS</Badge>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Note */}
      <div className="mt-4 pt-3.5 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Google Play review operations retains exclusive approval authority.</span>
        <Badge variant="outline" className="text-[10px] font-bold text-primary border-primary/30">
          Review Readiness: 98%
        </Badge>
      </div>
    </div>
  );
}
