"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const initialChecklist = [
  {
    id: "target-sdk",
    title: "Target SDK Level (Android 14/15)",
    detail: "API 34+ required for new app submissions.",
    checked: true,
  },
  {
    id: "closed-testing",
    title: "14-Day 20-Tester Track Retention",
    detail: "Mandatory for personal Play Console accounts.",
    checked: true,
  },
  {
    id: "data-safety",
    title: "Data Safety Form & SDK Synchronization",
    detail: "Matches advertising, analytics, and tracking telemetry.",
    checked: true,
  },
  {
    id: "questionnaire-prep",
    title: "Production Questionnaire Evidence Logs",
    detail: "Tester bug triage and iteration history documented.",
    checked: false,
  },
  {
    id: "reviewer-credentials",
    title: "App Reviewer Demo Test Credentials",
    detail: "Functional login provided without geo-blocks or OTP traps.",
    checked: false,
  },
];

export function InteractiveChecklistPreview() {
  const [items, setItems] = useState(initialChecklist);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const checkedCount = items.filter((item) => item.checked).length;
  const totalCount = items.length;
  const scorePercent = Math.round((checkedCount / totalCount) * 100);

  return (
    <section className="py-20 sm:py-28 bg-surface-pale-lavender/40 dark:bg-muted/15 border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Context & Link to Full Tools */}
          <div className="lg:col-span-6 space-y-5">
            <Badge
              variant="outline"
              className="py-1 px-3 text-xs font-semibold rounded-full border-primary/30 bg-surface-panel/80 dark:bg-card/80 text-foreground"
            >
              <Sparkles className="h-3 w-3 text-primary mr-1" />
              Free Developer Utilities
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Interactive Pre-Launch Checklist &amp; Policy Checker
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Before submitting your release bundle or requesting Google Play production rollout, audit your application against core 2026 review criteria. Interactive tools help isolate policy blockers in advance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/tools/play-store-publishing-checklist"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "rounded-full bg-primary px-7 py-6 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 flex items-center justify-center gap-2",
                })}
              >
                <FileCheck className="h-4 w-4" />
                <span>Launch Complete 32-Point Checklist</span>
              </Link>

              <Link
                href="/tools"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "rounded-full border-border bg-surface-panel dark:bg-card px-6 py-6 text-sm font-medium text-foreground hover:bg-muted flex items-center justify-center gap-2",
                })}
              >
                <span>Explore All 4 Tools</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Interactive Checklist Preview Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-6 sm:p-7 shadow-floating space-y-5">
              {/* Score Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    Interactive Readiness Score
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-2xl font-extrabold font-mono text-foreground">
                      {scorePercent}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({checkedCount} of {totalCount} verified)
                    </span>
                  </div>
                </div>

                <Badge
                  variant={scorePercent >= 80 ? "default" : "secondary"}
                  className="rounded-full px-3 py-1 text-xs font-bold"
                >
                  {scorePercent === 100
                    ? "REVIEW READY"
                    : scorePercent >= 60
                    ? "IN PROGRESS"
                    : "NEEDS ATTENTION"}
                </Badge>
              </div>

              {/* Progress Line */}
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-teal-500 rounded-full transition-all duration-300"
                  style={{ width: `${scorePercent}%` }}
                />
              </div>

              {/* Interactive Checkbox Items */}
              <div className="space-y-2.5">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`w-full text-left flex items-start gap-3 rounded-2xl p-3 sm:p-3.5 border transition-all cursor-pointer ${
                      item.checked
                        ? "bg-surface-cream/80 dark:bg-muted/40 border-primary/30"
                        : "bg-surface-panel dark:bg-card border-border/70 hover:border-border"
                    }`}
                  >
                    <span className="mt-0.5 shrink-0">
                      {item.checked ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground/60" />
                      )}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-xs sm:text-sm font-bold block ${
                          item.checked
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">
                        {item.detail}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/60">
                <span>Click any item above to simulate audit progress.</span>
                <button
                  type="button"
                  onClick={() => setItems(initialChecklist)}
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
