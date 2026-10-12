import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  BarChart3,
  Search,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Check,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Store Listing Optimization (ASO) & Metadata Audit",
  description:
    "Maximize organic Android downloads while ensuring 100% compliance with Google Play's strict metadata and graphic asset policies. Keyword research, screenshot architecture, and localization.",
  path: "/services/listing-optimization",
  keywords: [
    "Google Play Store listing optimization",
    "App Store Optimization Android",
    "Google Play metadata policy",
    "ASO screenshots Android",
    "Google Play description keywords",
  ],
});

export default function ListingOptimizationServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Listing Optimization (ASO)", url: "/services/listing-optimization" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Google Play Store Listing Optimization (ASO) & Metadata Audit",
    description:
      "Strategic optimization of Google Play store listing elements including titles, descriptions, graphic assets, and localization while adhering strictly to Google's metadata spam policies.",
    url: "/services/listing-optimization",
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
              Listing Optimization (ASO)
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Discoverability &amp; Conversion
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Google Play Store Listing Optimization (ASO)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Achieving high visibility on Google Play requires a delicate balance: maximizing search keyword relevance and conversion rates while avoiding Google's aggressive metadata policy strikes. We craft high-converting, compliant store listings tailored for the modern Play Store algorithm.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-6">
                  Audit My Store Listing
                </Button>
              </Link>
              <Link href="/tools/policy-readiness-checklist">
                <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700">
                  Run Policy Checklist
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Optimization Specs
            </h2>
            <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">App Title:</span>
                <span>Max 30 characters</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Short Description:</span>
                <span>Max 80 characters</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Full Description:</span>
                <span>Max 4,000 characters</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Feature Graphic:</span>
                <span>1024 x 500 px (PNG/JPEG)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy-Safe Principles */}
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Metadata Violations That Get Apps Rejected
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Google automated reviewers scan text and graphics for promotional claims. Including prohibited phrasing triggers automated listing rejection or demotion in search rankings.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <AlertTriangle className="h-6 w-6 text-rose-600 dark:text-rose-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Promotional Claims
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Words like &ldquo;Free&rdquo;, &ldquo;Top #1&rdquo;, &ldquo;Best App 2026&rdquo;, or &ldquo;1M Downloads&rdquo; in the title or icon violate Google's metadata policy.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <Search className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Keyword Repetition &amp; Spam
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Unnatural keyword stuffing or lists of uncontextualized keywords in the description can trigger algorithmic penalties and reduce search indexing.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <Smartphone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Non-Compliant Screenshots
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Screenshots displaying actual devices (hands, laptops), illegible text, or misleading UI that doesn't exist in the actual APK will fail review.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Optimize Your Google Play Store Presence
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Get an in-depth ASO audit that boosts conversion while protecting your app from metadata strikes.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-8">
                Request Store Listing Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
