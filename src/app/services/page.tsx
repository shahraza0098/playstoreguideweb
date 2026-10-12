import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  ArrowRight,
  Check,
  HelpCircle,
  Clock,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Publishing Services & Developer Advisory",
  description:
    "Comprehensive, policy-compliant assistance for Android developers: 14-day 20-tester closed testing, Google Play Console verification, production access questionnaire guidance, and rejection troubleshooting.",
  path: "/services",
});

const serviceList = [
  {
    slug: "closed-testing",
    title: "Closed Testing Coordination (20 Testers / 14 Days)",
    category: "Personal Account Compliance",
    description:
      "Fulfill Google's mandatory 14-day closed testing requirement with verified human testers. Real Android devices across varying OS versions with genuine telemetry, feedback logs, and active opt-ins.",
    deliverables: [
      "20+ verified Android opt-in testers",
      "Full 14-day continuous opt-in retention monitoring",
      "Authentic bug reports and user experience feedback",
      "Compiled testing documentation ready for the production questionnaire",
    ],
  },
  {
    slug: "account-setup",
    title: "Play Console Account Setup & D-U-N-S Verification",
    category: "Identity & Business Verification",
    description:
      "Navigate Google Play Console's strict personal and organizational verification protocols. We audit legal entity names, D-U-N-S registration records, and official tax documents to prevent account suspensions.",
    deliverables: [
      "Dun & Bradstreet registry alignment audit",
      "Government-issued ID and utility document verification review",
      "Payment profile, merchant account, and tax form setup advisory",
      "Public developer profile contact compliance check",
    ],
  },
  {
    slug: "production-access",
    title: "Production Access Review & Questionnaire Advisory",
    category: "Launch Approval Prep",
    description:
      "When applying for production access, Google requires detailed answers regarding testing feedback, bug fixes, and user engagement. We help you synthesize your actual testing records into convincing, compliant responses.",
    deliverables: [
      "Question-by-question review of Google's production access form",
      "Evidence-backed summaries of testing feedback and bug resolutions",
      "Assessment of app stability metrics, ANR rates, and crash logs",
      "Guidance on responding to reviewer requests for additional info",
    ],
  },
  {
    slug: "app-publishing",
    title: "End-to-End App Publishing & Compliance Audit",
    category: "Pre-Release Verification",
    description:
      "A comprehensive technical review of your App Bundle (AAB), target API level, Data Safety declarations, privacy policy, and Play Console release configurations prior to official submission.",
    deliverables: [
      "Target SDK 34/35 requirement validation",
      "Manifest permissions audit against declared Google Play features",
      "Complete Data Safety section synchronization with SDK tracking",
      "Test account credentials and reviewer demo video preparation",
    ],
  },
  {
    slug: "rejection-troubleshooting",
    title: "App Rejection Troubleshooting & Formal Appeals",
    category: "Policy Recovery",
    description:
      "Has your app been rejected, removed, or suspended? We analyze the rejection notice, locate the offending code or metadata, outline exact remediations, and draft structured appeals for Google review teams.",
    deliverables: [
      "Root-cause diagnostic of policy violation emails",
      "Code, metadata, or permission remediation roadmap",
      "Policy-compliant revision verification before re-submission",
      "Formulation of evidence-based appeal submissions",
    ],
  },
  {
    slug: "listing-optimization",
    title: "Store Listing Optimization & Policy-Safe ASO",
    category: "Discoverability & Conversion",
    description:
      "Optimize your app's title, short description, long description, screenshots, and promo graphics to maximize organic downloads while strictly abiding by Google's spam and metadata policies.",
    deliverables: [
      "Keyword research and metadata structuring without policy violations",
      "Conversion-focused screenshot and feature graphic design advisory",
      "Store listing localization strategy for key global markets",
      "Google Play icon and branding compliance review",
    ],
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-zinc-500">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-zinc-900 dark:text-zinc-200">Services</li>
            </ol>
          </nav>

          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Developer Advisory
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            Google Play Publishing Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Professional, policy-compliant guidance for Android developers at every phase of the release cycle. We eliminate ambiguity so you can launch with confidence.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 space-y-8">
          {serviceList.map((service, index) => (
            <div
              key={service.slug}
              className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7">
                  <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {service.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-sm">
                        <span>View Service Details & Pricing Model</span>
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-xl border border-zinc-100 bg-zinc-50/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Deliverables & Inclusions
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Assessment Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between dark:from-zinc-900 dark:to-zinc-950 dark:border dark:border-zinc-800">
          <div>
            <h2 className="text-xl font-bold">Unsure which service matches your current stage?</h2>
            <p className="mt-1 text-sm text-zinc-300">
              Run our free pre-launch readiness checklist or message our technical advisory team.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-3 shrink-0">
            <Link href="/tools/policy-readiness-checklist">
              <Button className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-semibold">
                Self-Assessment Tool
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-zinc-600 hover:bg-zinc-800">
                Contact Advisory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
