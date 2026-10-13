"use client";

import React from "react";
import { ClosedTestingTimeline } from "@/components/testing/ClosedTestingTimeline";

export function WorkflowTimeline() {
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
        <ClosedTestingTimeline
          eyebrow="Engagement Workflow"
          title="How Our Technical Publishing Advisory Works"
          description="A transparent, step-by-step workflow designed to verify technical readiness, maintain tester retention, and compile documentation before requesting Google Play production rollout."
          showSelector={true}
        />
      </div>
    </section>
  );
}
