import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, ArrowRight, User, Sparkles, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { getPublishedArticles } from "@/data/articles";
import { getAuthorBySlug } from "@/data/authors";
import { blogCategories } from "@/data/categories";
import { BlogSearchFilter } from "@/components/blog/BlogSearchFilter";

export const metadata: Metadata = constructMetadata({
  title: "Android Developer Blog & Google Play Engineering Guides",
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
    <div className="py-10 sm:py-16 bg-surface-panel dark:bg-background">
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
          title="Google Play Developer Blog &amp; Engineering Guides"
          description="In-depth technical articles, policy compliance breakdowns, and release frameworks written to help Android developers navigate the Google Play ecosystem safely."
        />

        {/* Related Advisory Service Quick Links Bar */}
        <div className="mt-8 p-3 sm:p-4 rounded-2xl bg-surface-cream/80 dark:bg-muted/30 border border-border/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground font-semibold">
            <Layers className="h-4 w-4 text-primary shrink-0" />
            <span className="text-foreground">Related Advisory Services:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="/services/closed-testing"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline bg-surface-panel dark:bg-card px-2.5 py-1 rounded-lg border border-border/60 shadow-2xs"
            >
              <span>14-Day Closed Testing</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/services/production-access-guidance"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline bg-surface-panel dark:bg-card px-2.5 py-1 rounded-lg border border-border/60 shadow-2xs"
            >
              <span>Production Access Prep</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/services/play-console-account-setup"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline bg-surface-panel dark:bg-card px-2.5 py-1 rounded-lg border border-border/60 shadow-2xs"
            >
              <span>D-U-N-S Verification</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/services/app-rejection-help"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline bg-surface-panel dark:bg-card px-2.5 py-1 rounded-lg border border-border/60 shadow-2xs"
            >
              <span>Rejection Appeals</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Featured Article Spotlight Panel */}
        {featuredArticle && (
          <div className="mt-10 rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-6 sm:p-10 shadow-floating hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-primary/40 bg-surface-cream text-foreground font-semibold px-2.5 py-0.5 text-xs rounded-full"
                  >
                    <Sparkles className="h-3 w-3 text-primary mr-1" />
                    Featured Editorial Playbook
                  </Badge>
                  <span className="text-xs font-bold text-primary font-mono uppercase tracking-wider">
                    {featuredCategory?.name || featuredArticle.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-extrabold tracking-tight text-foreground leading-snug">
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
                    <span className="flex items-center gap-1.5 font-bold text-foreground">
                      <User className="h-3.5 w-3.5 text-primary" />
                      <span>{featuredAuthor.name}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                  <span className="font-mono text-[11px]">
                    Updated {featuredArticle.updatedAt}
                  </span>
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-bold hover:bg-primary/90 transition-all shadow-card w-full lg:w-auto"
                >
                  <span>Read Featured Playbook</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Search, Category Navigation & Staggered Article Grid */}
        <div className="mt-14 sm:mt-16">
          <BlogSearchFilter articles={publishedArticles} />
        </div>

        {/* Advisory Callout Card at bottom */}
        <div className="mt-16 sm:mt-20 rounded-3xl border border-border/90 bg-surface-cream/80 dark:bg-card p-7 sm:p-10 shadow-floating text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-extrabold text-foreground">
              Have a Specific Play Console or Policy Bottleneck?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Our technical advisory team audits closed testing tracks, reviews questionnaire answers, verifies D-U-N-S data, and helps resolve policy rejection strikes.
            </p>
          </div>
          <div className="mt-5 sm:mt-0 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/play-store-publishing-checklist"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 text-xs font-bold shadow-card text-center"
            >
              Publishing Checklist &rarr;
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border/80 bg-surface-panel dark:bg-card hover:bg-muted text-foreground px-5 py-3 text-xs font-bold transition-colors text-center shadow-2xs"
            >
              Contact Advisory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
