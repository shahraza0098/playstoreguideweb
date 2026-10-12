import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Clock,
  Calendar,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { guidesData, getGuideBySlug } from "@/data/guides";

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return constructMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
    ogType: "article",
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt,
  });
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
    { name: guide.title, url: `/guides/${guide.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: guide.title,
    description: guide.metaDescription,
    url: `/guides/${guide.slug}`,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    authorName: guide.author.name,
  });

  const faqSchema =
    guide.faqs && guide.faqs.length > 0 ? generateFAQSchema(guide.faqs) : null;

  const relatedGuides = guidesData
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 2);

  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/guides" className="hover:text-emerald-600 transition-colors">
                Guides
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200 line-clamp-1">
              {guide.title}
            </li>
          </ol>
        </nav>

        {/* Main Article Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Column */}
          <article className="lg:col-span-8">
            <header className="space-y-4 border-b border-zinc-200 pb-8 dark:border-zinc-800">
              <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {guide.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                {guide.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pt-2">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  <span>{guide.author.name}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Updated {guide.updatedAt}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{guide.readTime}</span>
                </span>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                <strong>Executive Summary: </strong>
                {guide.summary}
              </div>
            </header>

            {/* Article Sections */}
            <div className="mt-8 space-y-12">
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {section.title}
                  </h2>

                  <div className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 space-y-4 whitespace-pre-line">
                    {section.content}
                  </div>

                  {section.callout && (
                    <div
                      className={`rounded-xl border p-4 text-xs sm:text-sm leading-relaxed ${
                        section.callout.type === "warning"
                          ? "border-rose-300 bg-rose-50/70 text-rose-900 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-200"
                          : section.callout.type === "tip"
                          ? "border-emerald-300 bg-emerald-50/70 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200"
                          : "border-blue-300 bg-blue-50/70 text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200"
                      }`}
                    >
                      <strong className="font-bold uppercase tracking-wider block mb-1">
                        {section.callout.type === "warning"
                          ? "Important Policy Warning"
                          : section.callout.type === "tip"
                          ? "Pro-Tip"
                          : "Note"}
                      </strong>
                      {section.callout.text}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* In-Article FAQ Section */}
            {guide.faqs && guide.faqs.length > 0 && (
              <section className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {guide.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40"
                    >
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Guides */}
            <div className="mt-14 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Continue Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedGuides.map((rg) => (
                  <Link
                    key={rg.slug}
                    href={`/guides/${rg.slug}`}
                    className="rounded-xl border border-zinc-200 p-4 hover:border-emerald-500/50 transition-colors dark:border-zinc-800 dark:hover:border-emerald-500/50 block"
                  >
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                      {rg.category}
                    </span>
                    <h4 className="mt-1 text-sm font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2">
                      {rg.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sticky Sidebar: Table of Contents & CTA */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Table of Contents
              </h3>
              <nav aria-label="Table of Contents" className="mt-4">
                <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  {guide.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a
                        href={`#${toc.id}`}
                        className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-1"
                      >
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 dark:border-emerald-900/60 dark:bg-emerald-950/30 space-y-3">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Need Help Applying This to Your App?
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our technical advisory team audits closed testing cohorts, answers questionnaires, and fixes rejection strikes.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="w-full block">
                  <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-500 font-semibold text-xs">
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
