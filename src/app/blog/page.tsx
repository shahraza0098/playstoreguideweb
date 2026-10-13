import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { getPublishedArticles } from "@/data/articles";
import { getAuthorBySlug } from "@/data/authors";
import { blogCategories } from "@/data/categories";
import { BlogSearchFilter } from "@/components/blog/BlogSearchFilter";

export const metadata: Metadata = constructMetadata({
  title: "Android Developer Blog & Google Play Guides",
  description:
    "Authoritative articles and technical playbooks on Google Play closed testing, production access reviews, D-U-N-S verification, and app rejection recovery.",
  path: "/blog",
  keywords: [
    "Google Play developer blog",
    "Android publishing articles",
    "Play Console tutorials",
    "closed testing insights",
    "production access guides",
  ],
});

export default function BlogIndexPage() {
  const publishedArticles = getPublishedArticles();
  const featuredArticle = publishedArticles.find((a) => a.featured) || publishedArticles[0];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const featuredAuthor = featuredArticle ? getAuthorBySlug(featuredArticle.authorId) : null;
  const featuredCategory = featuredArticle
    ? blogCategories.find((c) => c.slug === featuredArticle.category)
    : null;

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">Blog</li>
          </ol>
        </nav>

        {/* Section Heading */}
        <SectionHeading
          as="h1"
          eyebrow="Editorial Knowledge Base"
          title="Google Play Developer Blog &amp; Guides"
          description="In-depth technical articles, policy compliance breakdowns, and release frameworks written to help Android developers navigate the Google Play ecosystem safely."
        />

        {/* Featured Article Spotlight (If available) */}
        {featuredArticle && (
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm transition-all hover:border-primary/40">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="text-xs">
                    Featured Playbook
                  </Badge>
                  <span className="text-xs font-semibold text-primary">
                    {featuredCategory?.name || featuredArticle.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-snug">
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                  {featuredAuthor && (
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <User className="h-3.5 w-3.5 text-primary" />
                      <span>{featuredAuthor.name}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                  <span>Updated {featuredArticle.updatedAt}</span>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <span>Read Featured Guide</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Search, Category Navigation, & Article Grid */}
        <div className="mt-14">
          <BlogSearchFilter articles={publishedArticles} />
        </div>

        {/* Advisory Callout */}
        <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-sm">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Have a specific Google Play Console question?
            </h3>
            <p className="text-sm text-muted-foreground">
              Our technical advisory team audits closed testing tracks, reviews questionnaire answers, and assists with policy appeals.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-3 shrink-0">
            <Link
              href="/tools/policy-readiness-checklist"
              className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2.5 text-xs font-semibold shadow-xs"
            >
              Readiness Checklist &rarr;
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-border bg-card hover:bg-muted text-foreground px-4 py-2.5 text-xs font-semibold transition-colors"
            >
              Contact Advisory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
