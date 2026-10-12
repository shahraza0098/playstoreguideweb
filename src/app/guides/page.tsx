import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { getPublishedArticles } from "@/data/articles";
import { blogCategories } from "@/data/categories";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Developer Guides & Release Playbooks",
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
  const publishedArticles = getPublishedArticles();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">Guides</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Developer Knowledge Base
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Google Play Developer Guides
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            In-depth technical playbooks, policy compliance teardowns, and release frameworks written to help Android developers navigate the Google Play ecosystem safely.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedArticles.map((article) => {
            const categoryObj = blogCategories.find((c) => c.slug === article.category);

            return (
              <article
                key={article.slug}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <Badge variant="default" className="text-[10px]">
                      {categoryObj?.shortName || article.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Updated {article.updatedAt}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Read guide</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Advisory CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-sm">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-foreground">
              Need personalized guidance for your app&rsquo;s specific release?
            </h2>
            <p className="text-sm text-muted-foreground">
              Our technical team reviews Play Console tracks, tester engagement records, and policy questions.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 shrink-0">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Get Advisory Support &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
