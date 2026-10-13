import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPublishedArticles } from "@/data/articles";

export function FeaturedGuidesSection() {
  const featuredGuides = getPublishedArticles().slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-surface-panel dark:bg-background border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
          <SectionHeading
            eyebrow="Educational Knowledge Base"
            title="Featured Google Play Developer Guides"
            description="In-depth, technical guides covering closed testing recruitment, production access review questionnaires, and Play Console account verification."
          />
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0 pb-1"
          >
            <span>Browse all developer guides</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredGuides.map((guide) => (
            <div
              key={guide.slug}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 shadow-subtle hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="secondary" className="text-[10px] uppercase font-semibold">
                    {guide.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-muted-foreground text-[11px] font-mono">
                    <Clock className="h-3 w-3" /> {guide.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  <Link href={`/blog/${guide.slug}`} className="focus:outline-hidden">
                    {guide.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  href={`/blog/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read technical playbook</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Link Footer Banner */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-surface-cream/70 dark:bg-muted/30 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground">
              Facing immediate app rejections or Data Safety errors?
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Read our dedicated breakdowns on policy recovery and third-party SDK manifest declarations.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs font-semibold">
            <Link
              href="/blog/common-google-play-app-rejection-reasons"
              className="text-primary hover:underline"
            >
              Rejection Recovery Guide &rarr;
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/blog/android-app-publishing-checklist-2026"
              className="text-primary hover:underline"
            >
              Publishing Checklist &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
