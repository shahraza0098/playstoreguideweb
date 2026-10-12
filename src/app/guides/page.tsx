import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  Clock,
  ArrowRight,
  ShieldCheck,
  Search,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { guidesData } from "@/data/guides";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Developer Guides & Educational Playbooks",
  description:
    "Authoritative technical guides and release playbooks for Android developers. 14-day closed testing strategies, production access questionnaire breakdowns, account verification, and rejection appeals.",
  path: "/guides",
  keywords: [
    "Google Play developer guides",
    "Android publishing playbook",
    "20 testers closed testing guide",
    "Google Play production questionnaire",
    "Play Console tutorials",
  ],
});

export default function GuidesIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
  ]);

  const categories = [
    "All",
    "Closed Testing",
    "Production Access",
    "Account Verification",
    "App Rejections",
    "Data Safety & Policy",
  ];

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">Guides</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Developer Knowledge Base
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            Google Play Developer Guides
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            In-depth technical playbooks, policy compliance teardowns, and release frameworks written to help Android developers navigate the Google Play ecosystem safely.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidesData.map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                  <span className="rounded bg-emerald-50 px-2.5 py-0.5 font-semibold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {guide.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors leading-snug">
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h2>

                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Updated {guide.updatedAt}</span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Read guide &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Advisory CTA */}
        <div className="mt-16 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 dark:border-emerald-900/60 dark:bg-emerald-950/20 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Need personalized guidance for your app's specific release?
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Our technical team reviews Play Console tracks, tester engagement records, and policy questions.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 shrink-0">
            <Link href="/contact">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold">
                Get Advisory Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
