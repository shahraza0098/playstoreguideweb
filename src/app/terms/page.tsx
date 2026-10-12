import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service | PlayStoreGuide",
  description:
    "Terms of Service governing the use of PlayStoreGuide advisory, educational content, tools, and developer support services.",
  path: "/terms",
});

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
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
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">Terms of Service</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs text-zinc-500">Last Updated: March 2026</p>

        <div className="mt-8 space-y-8 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              1. Nature of Advisory Services
            </h2>
            <p>
              PlayStoreGuide provides technical advisory, educational articles, and testing facilitation services to assist Android developers with Google Play publishing processes. All services and tools provided are consultative in nature.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              2. No Guarantee of Google Play Approval
            </h2>
            <p>
              Google LLC retains sole and absolute authority regarding the approval, rejection, suspension, or removal of apps submitted to the Google Play Store. While PlayStoreGuide assists developers in aligning their software with Google's Developer Program Policies, PlayStoreGuide does NOT guarantee approval, nor can it override Google's editorial or automated decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              3. Developer Responsibilities
            </h2>
            <p>
              Developers utilizing our guidance remain solely responsible for the content, security, intellectual property rights, and legal compliance of their applications. Developers agree not to submit malicious software, spyware, copyrighted material without authorization, or deceptive applications for advisory or testing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              4. Independent Entity Disclaimer
            </h2>
            <p>
              PlayStoreGuide is an independent technical consultancy. PlayStoreGuide is not an agent, representative, subsidiary, or affiliate of Google LLC or Alphabet Inc.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              5. Governing Law &amp; Inquiries
            </h2>
            <p>
              For legal inquiries regarding these terms, contact us at:{" "}
              <a href="mailto:support@playstoreguide.com" className="text-emerald-600 dark:text-emerald-400 underline">
                support@playstoreguide.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
