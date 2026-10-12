import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { PolicyChecklist } from "@/components/tools/PolicyChecklist";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Pre-Launch Policy Readiness Checklist & Self-Audit Tool",
  description:
    "Free interactive diagnostic tool for Android developers. Evaluate your Target SDK, 14-day closed testing status, Data Safety declarations, and app credentials prior to Google Play submission.",
  path: "/tools/policy-readiness-checklist",
  keywords: [
    "Google Play pre-launch checklist",
    "Android app policy checklist",
    "Google Play closed testing readiness",
    "Data Safety form audit tool",
    "Play Console self audit",
  ],
});

export default function PolicyChecklistPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "Policy Readiness Checklist", url: "/tools/policy-readiness-checklist" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/tools" className="hover:text-emerald-600 transition-colors">
                Tools
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">
              Readiness Checklist
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Interactive Diagnostic
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Google Play Pre-Launch Policy Readiness Checklist
          </h1>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Evaluate your app against Google Play&rsquo;s 2026 developer requirements. Check off verified items to calculate your readiness score and uncover potential rejection triggers before submitting your release.
          </p>
        </div>

        {/* Client Component */}
        <PolicyChecklist />
      </div>
    </div>
  );
}
