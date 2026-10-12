import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Layers,
  CheckCircle2,
  FileCheck,
  ShieldAlert,
  Smartphone,
  ArrowRight,
  Check,
  Lock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "End-to-End Google Play App Publishing & Policy Audit",
  description:
    "Comprehensive pre-launch compliance review for Android apps: Target SDK validation, Data Safety declaration audit, App Access credentials, and privacy policy verification.",
  path: "/services/app-publishing",
  keywords: [
    "Google Play app publishing help",
    "Data Safety form audit Play Store",
    "Target SDK requirements Google Play",
    "App access login credentials reviewer",
    "Android app submission service",
  ],
});

export default function AppPublishingServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "App Publishing & Compliance", url: "/services/app-publishing" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "End-to-End Google Play App Publishing & Policy Audit",
    description:
      "Full technical pre-submission audit reviewing Android App Bundles (AAB), Data Safety declarations, third-party SDK telemetry, and Play Console release configurations.",
    url: "/services/app-publishing",
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
              App Publishing &amp; Compliance
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Pre-Release Verification
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Google Play App Publishing &amp; Pre-Launch Policy Audit
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Submitting an app to Google Play without a structured compliance audit frequently results in unexpected rejections, strikes against your developer account, or delayed release schedules. We conduct an end-to-end technical inspection of your build and console configurations.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-6">
                  Schedule Pre-Submission Audit
                </Button>
              </Link>
              <Link href="/tools/policy-readiness-checklist">
                <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700">
                  Run Free Checklist
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Audit Scope
            </h2>
            <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Target API:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Target SDK 34 / 35</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Data Safety:</span>
                <span>Full SDK Telemetry Sync</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">App Access:</span>
                <span>Reviewer Credential Setup</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Target Audience:</span>
                <span>Families Policy &amp; Age Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Pillars */}
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            What Our Pre-Submission Audit Examines
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <ShieldAlert className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Data Safety Form &amp; SDK Inspection
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Many rejections occur because embedded analytics, ad networks, or crash reporters collect device identifiers without being declared in the Data Safety section. We inspect dependencies and synchronize your disclosures.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <Lock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                App Access Credentials &amp; 2FA Bypass
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                If your app requires a login, Google reviewers must be provided functional test credentials that bypass SMS/OTP or regional geo-restrictions. Incomplete credentials trigger immediate rejection.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Privacy Policy &amp; Account Deletion
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Google mandates a prominent, working Privacy Policy URL and an in-app and web-based account deletion pathway for apps allowing user account creation. We verify complete compliance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Ensure Your App is 100% Policy-Ready
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Get our technical team to inspect your AAB and Play Console forms before you submit your release for review.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-8">
                Inquire About App Publishing Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
