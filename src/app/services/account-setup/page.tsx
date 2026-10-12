import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building2,
  AlertTriangle,
  ArrowRight,
  Check,
  Globe,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Console Account Verification & D-U-N-S Advisory",
  description:
    "Expert advisory for Google Play Console account setup, personal identity verification, Dun & Bradstreet (D-U-N-S) matching, and organization documentation to avoid account suspensions.",
  path: "/services/account-setup",
  keywords: [
    "Google Play Console verification",
    "DUNS number Play Console",
    "Google Play organization account",
    "Play Console identity verification",
    "developer account setup help",
  ],
});

export default function AccountSetupServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Account Setup & D-U-N-S", url: "/services/account-setup" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Google Play Console Account Verification & D-U-N-S Advisory",
    description:
      "Advisory and compliance auditing for personal and organization Google Play developer accounts, ensuring D-U-N-S record matching, official government documentation, and payment profile accuracy.",
    url: "/services/account-setup",
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
              Account Setup &amp; D-U-N-S
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Console Setup &amp; Verification
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Google Play Console Account Verification &amp; D-U-N-S Setup
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Google now enforces rigorous identity and organizational verification for all Play Console accounts. Discrepancies between your D-U-N-S registry, legal business name, address, or payment profile can lead to immediate verification failure and account closure without refund.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-6">
                  Request Verification Advisory
                </Button>
              </Link>
              <Link href="/guides/google-play-account-verification-guide">
                <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700">
                  Read Verification Guide
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Verification Areas
            </h2>
            <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Personal Accounts:</span>
                <span>Govt ID + Proof of Address</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Org Accounts:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">D-U-N-S number mandatory</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Payment Profile:</span>
                <span>Matching Tax ID &amp; Bank Info</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Public Contact:</span>
                <span>Verified email, phone &amp; domain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Critical Verification Pitfalls We Help You Avoid
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <Building2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                D-U-N-S Record Mismatch
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                If your company name in Dun &amp; Bradstreet is &ldquo;Acme Corp LLC&rdquo; and your Google Payments profile says &ldquo;Acme Corp&rdquo;, verification will fail. We audit exact character-for-character synchronization.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <FileText className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Unrecognized Proof Documents
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Google rejects screenshots, expired IDs, PO Box utility bills, and bank statements dated older than 60 days. We review your documentation for validity before submission.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Prior Account Association
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Google automatically flags accounts that share credit cards, developer machines, or recovery phones with previously terminated accounts. We guide safe account isolation protocols.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Set Up Your Account Correctly the First Time
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Avoid costly delays and account terminations. Let our team audit your corporate records and developer documentation before submitting.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-8">
                Inquire About Account Verification
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
