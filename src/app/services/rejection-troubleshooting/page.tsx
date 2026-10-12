import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  AlertTriangle,
  FileSearch,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Check,
  HelpCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play App Rejection Troubleshooting & Formal Appeals",
  description:
    "Expert technical diagnosis and recovery for rejected Google Play apps. Root-cause policy analysis, code and metadata fixes, and structured appeal correspondence.",
  path: "/services/rejection-troubleshooting",
  keywords: [
    "Google Play app rejected",
    "Google Play appeal help",
    "app rejection troubleshooting Android",
    "Google Play policy violation fix",
    "developer account strike appeal",
  ],
});

export default function RejectionTroubleshootingServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Rejection Troubleshooting", url: "/services/rejection-troubleshooting" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Google Play App Rejection Troubleshooting & Formal Appeals",
    description:
      "Diagnostic and technical appeal advisory for apps facing rejection, removal, or policy suspension on the Google Play Store.",
    url: "/services/rejection-troubleshooting",
  });

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-emerald-600 transition-colors">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">
              Rejection Troubleshooting
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block rounded-md bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-950 dark:text-rose-300">
              Policy Recovery &amp; Appeals
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Google Play App Rejection Troubleshooting &amp; Appeals
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Receiving an automated rejection or policy violation notice from Google can be alarming and frustrating. Vague rejection templates often fail to explain the true root cause. We dissect the violation, audit your build and metadata, and guide you through an evidence-based resolution.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-6">
                  Diagnose My App Rejection
                </Button>
              </Link>
              <Link href="/guides/google-play-app-rejection-recovery-guide">
                <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700">
                  Read Rejection Recovery Guide
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Common Rejection Triggers
            </h2>
            <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Broken functionality / App crashes on launch</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Undeclared background location or service permissions</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Metadata keyword stuffing or misleading screenshots</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Repetitive content / Minimum functionality violation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Step Recovery Roadmap */}
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Our 3-Step Rejection Recovery Process
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <FileSearch className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
              <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                1. Deep Policy Deconstruction
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We analyze the rejection email, reviewer screenshots, and APK/AAB bundle to pinpoint whether the rejection was triggered by automated bots or human testing.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <RotateCcw className="h-7 w-7 text-teal-600 dark:text-teal-400" />
              <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                2. Technical Remediation
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We provide concrete code changes, manifest edits, privacy disclosures, or store asset replacements required to fully eliminate the policy violation.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <FileText className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                3. Structured Appeal or Resubmission
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                If the rejection was a false positive, we draft a professional appeal referencing specific policy clauses. If changes were required, we prepare the resubmission package.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Facing an Active App Rejection?
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Do not submit repeated identical builds without fixes. Forward your rejection details for a technical policy audit.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-8">
                Request Rejection Diagnosis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
