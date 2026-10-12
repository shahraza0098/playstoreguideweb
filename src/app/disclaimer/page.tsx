import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldAlert, AlertTriangle } from "lucide-react";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Independent Disclaimer & Trademark Notice | PlayStoreGuide",
  description:
    "Important independent service and trademark disclosure. PlayStoreGuide is not affiliated with, endorsed by, or sponsored by Google LLC or Alphabet Inc.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Independent Disclaimer", url: "/disclaimer" },
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
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">Disclaimer</li>
          </ol>
        </nav>

        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Legal Disclosures
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          Independent Service &amp; Trademark Disclaimer
        </h1>
        <p className="mt-2 text-xs text-zinc-500">Last Updated: March 2026</p>

        <div className="mt-8 space-y-8 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-6 dark:border-amber-900/60 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 space-y-2">
            <h2 className="text-base font-bold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span>Independent Entity Statement</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              PlayStoreGuide (accessible at https://playstoreguide.com) is an independent technical consultancy and educational publication. PlayStoreGuide is NOT affiliated with, authorized, maintained, sponsored, or endorsed by Google LLC, Alphabet Inc., or any of their affiliates or subsidiaries.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Trademark Acknowledgements
            </h2>
            <p>
              &ldquo;Google&rdquo;, &ldquo;Google Play&rdquo;, &ldquo;Google Play Console&rdquo;, &ldquo;Android&rdquo;, the Google Play logo, the Android robot logo, and related trademarks, service marks, and trade dress are registered trademarks and property of Google LLC or Alphabet Inc.
            </p>
            <p>
              Any references to Google LLC, Android, or Google Play on this website are made solely for nominative, descriptive, and identification purposes to explain the technical context of mobile application development and publishing. No commercial endorsement, partnership, or sponsorship by Google LLC is implied.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              No Guarantees or Administrative Powers
            </h2>
            <p>
              PlayStoreGuide does not represent Google Play review staff, does not possess inside authority over Google Play Console enforcement actions, and cannot override or guarantee decisions made by Google review teams. All advice provided is based on published policy documentation, technical standards, and empirical developer best practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Questions Regarding This Notice
            </h2>
            <p>
              If you have inquiries regarding this disclosure, please contact:{" "}
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
