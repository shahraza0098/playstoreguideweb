import React from "react";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-pulse space-y-8">
      {/* Breadcrumb skeleton */}
      <div className="h-4 w-48 rounded bg-muted" />

      {/* Hero / Header skeleton */}
      <div className="space-y-4 max-w-3xl">
        <div className="h-6 w-32 rounded-full bg-muted" />
        <div className="h-10 w-3/4 rounded-lg bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm"
          >
            <div className="h-8 w-8 rounded-lg bg-muted" />
            <div className="h-5 w-2/3 rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
            <div className="h-8 w-24 rounded bg-muted pt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
