import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  CheckCircle2,
  AlertTriangle,
  HeartHandshake,
  Target,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About PlayStoreGuide | Legitimate Android Developer Publishing Advisory",
  description:
    "Learn about PlayStoreGuide's mission: helping Android developers publish successfully through policy compliance, genuine tester cohorts, and technical audits without shortcuts or false claims.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">About</li>
          </ol>
        </nav>

        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Independent Developer Advisory
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          Built to Solve the Android Publishing Challenge Honestly.
        </h1>

        <div className="mt-8 space-y-6 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Publishing software on the Google Play Store was once a straightforward process of compiling an APK and writing a short store description. Today, the Android developer landscape is governed by automated policy scanners, stringent identity verifications, D-U-N-S corporate registry alignments, and the mandatory 14-day 20-tester closed testing gate for personal developer accounts.
          </p>
          <p>
            For independent developers, startup teams, and agencies, navigating these shifting requirements can feel like an opaque maze where a single vague rejection notice can delay a critical launch by weeks or lead to developer account termination.
          </p>
          <p>
            <strong>PlayStoreGuide was founded to provide transparent, legitimate, and technically sound guidance</strong> to Android developers worldwide. We bridge the gap between complex Google Play policies and developer execution.
          </p>
        </div>

        {/* Ethical Principles Grid */}
        <div className="mt-12 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Our Core Ethical Principles
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Real People on Real Hardware
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We never use emulator farms, bot clickers, or scripted accounts. Every tester in our closed testing facilitation is a genuine Android user testing your build on active hardware across diverse OS versions.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400 mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Zero &ldquo;Guaranteed Approval&rdquo; Claims
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Google explicitly reserves the right to accept or deny any application. Anyone promising &ldquo;100% guaranteed Google Play approval&rdquo; is engaging in deceptive marketing. We focus on rigorous compliance and authentic evidence to put your app in the strongest possible position.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 mb-3">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Technical Rigor Over Shortcuts
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We dive into your manifest permissions, third-party SDK dependencies, Android Vitals, and Data Safety disclosures. Sustainable publishing comes from writing compliant software, not finding loopholes.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 mb-3">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Independent Developer Advocacy
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We operate as an independent advisory team. We are not Google, but we know their Developer Program Policies inside and out, advocating for developers who need clear, actionable guidance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-zinc-900 p-8 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold">Have questions regarding your Android release?</h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-300">
              Talk directly with our advisory specialists about your timeline and requirements.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 shrink-0">
            <Link href="/contact">
              <Button className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold">
                Contact Advisory Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
