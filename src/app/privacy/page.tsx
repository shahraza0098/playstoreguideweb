import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | PlayStoreGuide",
  description:
    "PlayStoreGuide's Privacy Policy. Learn how we handle developer consultation inquiries, protect proprietary app information, and maintain strict data confidentiality.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" },
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
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">Privacy Policy</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-zinc-500">Last Updated: March 2026</p>

        <div className="mt-8 space-y-8 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              1. Information We Collect
            </h2>
            <p>
              When you submit a consultation request on PlayStoreGuide, we collect information you voluntarily provide, including your name, email address, application package identifiers, and project descriptions. We do not require or collect Google Play Console master account passwords.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              2. Use of Developer Information
            </h2>
            <p>
              We use the submitted information solely to evaluate your application release stage, conduct requested compliance audits, coordinate closed testing cohorts, and communicate technical advisory findings directly with you. We do not sell, rent, or monetize your contact or application details to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              3. Protection of Unreleased Software &amp; IP
            </h2>
            <p>
              We treat all unreleased Android App Bundles (AABs), design assets, source code snippets, and proprietary concept descriptions as strictly confidential. Our testing facilitators and advisory staff are bound by confidentiality protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              4. Cookies &amp; Analytics
            </h2>
            <p>
              Our website uses minimal, privacy-focused technical cookies necessary for website operation, secure form delivery, and basic traffic analytics. We do not deploy invasive cross-site tracking pixels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              5. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions regarding your personal data or wish to request data deletion, contact us at:{" "}
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
