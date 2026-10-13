"use client";

import React from "react";
import {
  Users,
  Smartphone,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export function HeroDashboardIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-xl mx-auto lg:max-w-none"
    >
      {/* Decorative ambient background glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/15 via-teal-500/10 to-indigo-500/15 blur-2xl opacity-60 dark:opacity-40 pointer-events-none" />

      {/* Main Developer Dashboard Shell */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-4 sm:p-6 shadow-floating">
        {/* Top Console Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-border/70">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-xs">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  FocusRoutine Android
                </span>
                <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground">
                  v1.4.2 (AAB)
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground font-mono">
                Target SDK 35 • API 34+
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Track Active
            </span>
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground hidden sm:inline-block font-semibold bg-muted/60 px-2 py-0.5 rounded">
              Sample Console
            </span>
          </div>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3">
          {/* Card 1: Testers */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="rounded-xl border border-border/80 bg-surface-cream/70 dark:bg-muted/30 p-2.5 sm:p-3"
          >
            <div className="flex items-center justify-between text-muted-foreground mb-1">
              <span className="text-[10px] sm:text-[11px] font-semibold">
                Testers Opted-In
              </span>
              <Users className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="text-base sm:text-lg font-extrabold text-foreground font-mono">
              23 <span className="text-xs text-muted-foreground font-normal">/ 20</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-2.5 w-2.5 shrink-0" />
              <span>Safety buffer active</span>
            </div>
          </motion.div>

          {/* Card 2: Duration */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="rounded-xl border border-border/80 bg-surface-cream/70 dark:bg-muted/30 p-2.5 sm:p-3"
          >
            <div className="flex items-center justify-between text-muted-foreground mb-1">
              <span className="text-[10px] sm:text-[11px] font-semibold">
                Track Duration
              </span>
              <Activity className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="text-base sm:text-lg font-extrabold text-foreground font-mono">
              Day 12 <span className="text-xs text-muted-foreground font-normal">/ 14</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-primary font-medium">
              <span>85% completed</span>
            </div>
          </motion.div>

          {/* Card 3: Android Vitals */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="rounded-xl border border-border/80 bg-surface-cream/70 dark:bg-muted/30 p-2.5 sm:p-3"
          >
            <div className="flex items-center justify-between text-muted-foreground mb-1">
              <span className="text-[10px] sm:text-[11px] font-semibold">
                Android Vitals
              </span>
              <Cpu className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="text-base sm:text-lg font-extrabold text-foreground font-mono">
              0.14% <span className="text-[10px] text-muted-foreground font-normal">ANR</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-2.5 w-2.5 shrink-0" />
              <span>Below 0.47% limit</span>
            </div>
          </motion.div>
        </div>

        {/* 14-Day Timeline Progress Visualizer */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mt-4 rounded-xl border border-border/80 bg-surface-pale-blue/50 dark:bg-muted/20 p-3 sm:p-3.5"
        >
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-primary" />
              14-Day Closed Testing Cohort Telemetry
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              Day 12 of 14
            </span>
          </div>

          {/* Segmented Progress Bar */}
          <div className="h-2.5 w-full rounded-full bg-border/80 overflow-hidden flex">
            <div className="h-full w-[85%] bg-gradient-to-r from-primary to-teal-500 rounded-full transition-all duration-500" />
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              D1: Cohort Opt-in
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              D7: Iteration Release
            </span>
            <span className="flex items-center gap-1 font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              D14: Review Ready
            </span>
          </div>
        </motion.div>

        {/* Qualitative Feedback & Telemetry Log snippet */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mt-3.5 rounded-xl border border-border/80 bg-surface-cream/50 dark:bg-muted/20 p-3"
        >
          <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground mb-2">
            <span>Verified Tester Telemetry &amp; Feedback Log</span>
            <span className="text-[10px] text-primary">23 Reports Logged</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-start gap-2 rounded-lg bg-surface-panel/90 dark:bg-card/90 p-2 border border-border/50">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-3 w-3" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">
                    Pixel 8 Pro (Android 15)
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Today, 14:20
                  </span>
                </div>
                <p className="text-muted-foreground truncate">
                  Full timer session completed. Push notification permission flow verified cleanly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-surface-panel/90 dark:bg-card/90 p-2 border border-border/50">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-3 w-3" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">
                    Galaxy S24 (Android 14)
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Yesterday
                  </span>
                </div>
                <p className="text-muted-foreground truncate">
                  Zero ANR on cold startup. Verified active opt-in status in Play Store library.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer of illustration */}
        <div className="mt-3.5 pt-3 border-t border-border/60 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>Questionnaire Evidence: Compiled</span>
          </div>
          <Badge variant="outline" className="text-[10px] font-semibold text-primary border-primary/30">
            Review Readiness: 98%
          </Badge>
        </div>
      </div>

      {/* Floating Status Badges */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9, x: -10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-2 rounded-full border border-border bg-surface-panel/95 dark:bg-card/95 px-3.5 py-1.5 shadow-card text-xs font-semibold text-foreground"
      >
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span>100% Real Android Hardware</span>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9, x: 10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="hidden sm:flex absolute -top-3 -right-3 items-center gap-2 rounded-full border border-border bg-surface-panel/95 dark:bg-card/95 px-3.5 py-1.5 shadow-card text-xs font-semibold text-foreground"
      >
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>Continuous 14-Day Cohort Tracking</span>
      </motion.div>
    </motion.div>
  );
}
