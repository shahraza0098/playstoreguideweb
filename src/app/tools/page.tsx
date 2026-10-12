import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FileCheck,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Free Google Play Developer Tools & Self-Assessment Checklists",
  description:
    "Free interactive developer utilities for Android creators. Pre-launch policy readiness checklist, closed testing audit tools, and compliance diagnostics.",
  path: "/tools",
  keywords: [
    "Google Play developer tools",
    "pre launch checklist Android",
    "Google Play policy checklist",
    "closed testing calculator",
  ],
});

export default function ToolsIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">Tools</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Free Utilities
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            Developer Readiness Tools
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Interactive, client-side diagnostics designed to evaluate your Android application against Google Play's latest technical and policy standards prior to release.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mb-4">
                <FileCheck className="h-6 w-6" />
              </div>
              <span className="rounded bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Interactive Audit
              </span>
              <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Pre-Launch Policy Readiness Checklist
              </h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Step through 10 critical Google Play compliance questions covering Target SDKs, Data Safety synchronization, tester cohort duration, and app access credentials. Receive a live readiness score and actionable next steps.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <Link href="/tools/policy-readiness-checklist">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold">
                  Launch Interactive Checklist &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
