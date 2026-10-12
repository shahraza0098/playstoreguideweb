import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Users,
  CheckCircle2,
  Clock,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Check,
  HelpCircle,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play 20 Testers / 14 Days Closed Testing Coordination",
  description:
    "Fulfill Google's mandatory 14-day closed testing requirement with 20+ verified human testers on real Android devices. Complete opt-in tracking, engagement telemetry, and feedback documentation.",
  path: "/services/closed-testing",
  keywords: [
    "Google Play 20 testers",
    "14 days closed testing Google Play",
    "personal developer account closed test",
    "Google Play closed testing service",
    "Android closed testing testers",
  ],
});

export default function ClosedTestingServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Closed Testing (20 Testers)", url: "/services/closed-testing" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Google Play Closed Testing Coordination (20 Testers / 14 Days)",
    description:
      "Facilitation of Google Play's mandatory 14-day closed testing requirement using real Android devices and active opt-in testers, providing authentic engagement logs and user feedback documentation.",
    url: "/services/closed-testing",
  });

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
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
              Closed Testing (20 Testers)
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Personal Account Requirement
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Google Play 20 Testers &amp; 14-Day Closed Testing Coordination
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Google mandates that all personal developer accounts created after November 2023 must have a minimum of 20 testers opted in for 14 continuous days before applying for production access. We coordinate real, active Android testers so you meet this requirement legitimately.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-6">
                  Inquire About Closed Testing Cohort
                </Button>
              </Link>
              <Link href="/guides/google-play-20-testers-requirement-playbook">
                <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700">
                  Read Testing Guide
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Cohort Snapshot
            </h2>
            <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Required Testers:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">20+ verified devices</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Required Duration:</span>
                <span className="font-semibold">14 continuous days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Devices:</span>
                <span>Real Android 11 to 15 hardware</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Deliverable:</span>
                <span>Structured feedback report</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Technical Challenge */}
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Why Recruiting Random or Bot Testers Fails Google Review
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Many developers attempt to meet the requirement by inviting friends who install the app once and immediately delete it, or by paying for automated bot clicks. Google monitors Play Console analytics: if 20 testers opt in but zero sessions, installs, or crash logs are recorded, the production access application is rejected.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                The 14-Day Reset Risk
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                If even one tester opts out and your total count drops below 20 for even a few hours, the 14-day timer can reset back to Day 1. We recruit surplus testers (22-25) to provide a safety margin.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Lack of User Telemetry
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Google checks active device interaction. Our testers genuinely launch the app periodically, allowing Play Console to register genuine active engagement and ANR tracking.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Questionnaire Evidence
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Google asks: <em>&ldquo;Summarize the feedback you received during testing and how you decided your app was ready for production.&rdquo;</em> We provide real feedback logs and bug tickets to substantiate your answers.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Workflow */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Our Closed Testing Process
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                PHASE 01
              </span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Track Setup &amp; AAB</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                We review your closed testing release track, Google Group setup, and opt-in join links to ensure everything is configured properly.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                PHASE 02
              </span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Cohort Onboarding</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                22-25 real Android users join via your web/Android opt-in link, install the build from Google Play, and confirm active installation.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                PHASE 03
              </span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">14-Day Monitoring</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                We monitor tester opt-in retention daily, conduct periodic testing cycles, and collect structured feedback regarding UI, stability, and edge cases.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                PHASE 04
              </span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Production Dossier</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                At day 14+, we compile all qualitative feedback and bug resolution notes so you can confidently submit the Production Access questionnaire.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Need a Compliant 20-Tester Cohort for Your App?
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Contact us with your app details and release timeline. We will help ensure your closed testing track meets every Google Play standard.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-8">
                Inquire About Testing Coordination
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
