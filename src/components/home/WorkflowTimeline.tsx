import React from "react";
import { FourteenDayProcessTimeline } from "@/components/testing/FourteenDayProcessTimeline";

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
        <FourteenDayProcessTimeline
          eyebrow="14-Day Testing Workflow"
          title="How the 14-Day Closed Testing Process Works"
          description="A transparent phase-by-phase roadmap detailing pre-testing setup, continuous 14-day cohort tracking, feedback logging, and reviewer-ready production application preparation."
          showInspector={true}
        />
      </div>
    </section>
  );
}
