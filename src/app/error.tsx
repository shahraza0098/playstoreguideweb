"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected runtime errors for diagnostics
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-20 px-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400 mb-6">
        <AlertCircle className="h-7 w-7" />
      </div>

      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
        Application Error
      </span>
      <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">
        Something Went Wrong
      </h1>
      <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
        An unexpected error occurred while rendering this view. You can attempt to reload the component or navigate back to the homepage.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button
          onClick={() => reset()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
        >
          <RefreshCw className="h-4 w-4 mr-1.5" /> Try Again
        </Button>

        <Link href="/">
          <Button variant="outline" className="border-border">
            <Home className="h-4 w-4 mr-1.5" /> Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
