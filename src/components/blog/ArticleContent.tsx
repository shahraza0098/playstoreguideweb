"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  Calendar,
  User,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Info,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/data/articles";
import { getAuthorBySlug } from "@/data/authors";
import { blogCategories } from "@/data/categories";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { TableOfContents, type TocItem } from "./TableOfContents";
import { CodeBlock } from "./CodeBlock";

interface ArticleContentProps {
  article: Article;
  relatedArticles: Article[];
}

export function ArticleContent({ article, relatedArticles }: ArticleContentProps) {
  const author = getAuthorBySlug(article.authorId);
  const reviewer = article.reviewerId ? getAuthorBySlug(article.reviewerId) : null;
  const categoryObj = blogCategories.find((c) => c.slug === article.category);

  // Generate Table of Contents items from sections
  const tocItems: TocItem[] = article.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <div className="py-8 sm:py-14 bg-surface-panel dark:bg-background">
      {/* 1. Performant Reading Progress Indicator */}
      <ReadingProgressBar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/blog/category/${article.category}`}
                className="hover:text-primary transition-colors font-medium"
              >
                {categoryObj?.shortName || article.category}
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground truncate max-w-xs sm:max-w-md">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Main Grid: Content Column & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Article Reading Column */}
          <article className="lg:col-span-8 min-w-0">
            {/* Header */}
            <header className="space-y-5 border-b border-border/80 pb-8">
              {/* Category & Tags Row */}
              <div className="flex flex-wrap items-center gap-2">
                <Link href={`/blog/category/${article.category}`}>
                  <Badge
                    variant="outline"
                    className="border-primary/30 bg-surface-cream text-foreground font-semibold px-2.5 py-0.5 text-xs rounded-full hover:border-primary transition-colors"
                  >
                    <Sparkles className="h-3 w-3 text-primary mr-1" />
                    {categoryObj?.name || article.category}
                  </Badge>
                </Link>
                {article.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-mono hover:bg-muted text-muted-foreground px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </Badge>
                  </Link>
                ))}
              </div>

              {/* H1 Article Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.18]">
                {article.title}
              </h1>

              {/* Byline with Genuine Author, Reviewer & Date Metadata */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground pt-1">
                {author && (
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-primary" />
                    <span>By </span>
                    <Link
                      href={`/authors/${author.slug}`}
                      className="font-bold text-foreground hover:text-primary underline-offset-2 hover:underline"
                    >
                      {author.name}
                    </Link>
                  </span>
                )}

                {reviewer && (
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    <span>Reviewed by </span>
                    <Link
                      href={`/authors/${reviewer.slug}`}
                      className="font-medium text-foreground hover:text-primary underline-offset-2 hover:underline"
                    >
                      {reviewer.name}
                    </Link>
                  </span>
                )}

                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Updated {article.updatedAt}</span>
                </span>

                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              {/* Executive Summary Box */}
              <div className="rounded-2xl border border-primary/20 bg-surface-cream/80 dark:bg-card p-5 sm:p-6 text-sm text-foreground leading-relaxed shadow-subtle">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                  <Info className="h-4 w-4" />
                  <span>Executive Takeaway</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </header>

            {/* Mobile Collapsible TOC */}
            <TableOfContents items={tocItems} className="lg:hidden mt-6" />

            {/* Article Sections (Comfortable reading column with generous spacing) */}
            <div className="mt-10 space-y-14">
              {article.sections.map((section, sIndex) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 space-y-5"
                >
                  <div className="flex items-center gap-3 border-b border-border/70 pb-2.5">
                    <span className="font-mono text-sm font-bold text-primary/60">
                      0{sIndex + 1}.
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  <div className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 whitespace-pre-line">
                    {section.content}
                  </div>

                  {/* Code Snippet if present */}
                  {section.codeSnippet && (
                    <CodeBlock
                      code={section.codeSnippet.code}
                      language={section.codeSnippet.language}
                      caption={section.codeSnippet.caption}
                      className="my-5"
                    />
                  )}

                  {/* Callout Box */}
                  {section.callout && (
                    <div
                      className={`rounded-2xl border p-4 sm:p-5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                        section.callout.type === "warning"
                          ? "border-rose-400/40 bg-rose-500/10 text-rose-950 dark:text-rose-200"
                          : section.callout.type === "official"
                          ? "border-teal-400/40 bg-teal-500/10 text-teal-950 dark:text-teal-200"
                          : section.callout.type === "tip"
                          ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200"
                          : "border-primary/30 bg-primary/10 text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs mb-1.5">
                        {section.callout.type === "warning" ? (
                          <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                        ) : section.callout.type === "official" ? (
                          <ShieldCheck className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                        ) : section.callout.type === "tip" ? (
                          <Lightbulb className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Info className="h-4 w-4 shrink-0 text-primary" />
                        )}
                        <span>
                          {section.callout.type === "warning"
                            ? "Policy Alert"
                            : section.callout.type === "official"
                            ? "Official Google Play Rule"
                            : section.callout.type === "tip"
                            ? "Technical Tip"
                            : "Advisory Note"}
                        </span>
                      </div>
                      <p className="leading-relaxed">{section.callout.text}</p>
                    </div>
                  )}

                  {/* Subsections */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-6 pt-3 pl-3 sm:pl-5 border-l-2 border-border/80">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} id={sub.id} className="space-y-2.5 scroll-mt-24">
                          <h3 className="text-base sm:text-lg font-bold text-foreground">
                            {sub.title}
                          </h3>
                          <div className="text-xs sm:text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                            {sub.content}
                          </div>
                          {sub.codeSnippet && (
                            <CodeBlock
                              code={sub.codeSnippet.code}
                              language={sub.codeSnippet.language}
                              caption={sub.codeSnippet.caption}
                              className="my-3"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* In-Article Service Callout Box */}
            {article.serviceLink && (
              <div className="mt-14 rounded-3xl border border-primary/30 bg-surface-cream/80 dark:bg-card p-6 sm:p-7 shadow-floating flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <Badge variant="default" className="text-[10px] font-bold uppercase tracking-wider">
                    {article.serviceLink.badge}
                  </Badge>
                  <h3 className="text-base sm:text-lg font-extrabold text-foreground">
                    {article.serviceLink.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Get legitimate technical advisory, cohort coordination, and policy compliance verification from PlayStoreGuide.
                  </p>
                </div>
                <Link
                  href={article.serviceLink.href}
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-xs font-bold hover:bg-primary/90 transition-all shadow-card"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="mt-16 border-t border-border/80 pt-10">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3.5">
                  {article.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-2xl border border-border/80 bg-surface-panel dark:bg-card p-5 sm:p-6 transition-all hover:border-primary/40 shadow-2xs"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-md">
                        <span className="text-sm sm:text-base pr-4 leading-snug">
                          {faq.question}
                        </span>
                        <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180 shrink-0" />
                      </summary>
                      <div className="mt-4 pt-4 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Sources & Official Policy References */}
            {article.sources && article.sources.length > 0 && (
              <section className="mt-14 border-t border-border/80 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Authoritative Sources &amp; Official References
                  </h3>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-muted/20 p-5 space-y-3 text-xs">
                  {article.sources.map((source, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-border/50 last:border-0 last:pb-0"
                    >
                      <div>
                        <span className="font-bold text-foreground">{source.title}</span>
                        <span className="text-muted-foreground"> &bull; {source.publisher}</span>
                      </div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 font-semibold text-xs shrink-0"
                      >
                        <span>Official Google Document</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Profile Bio Card (Genuine verifiable information) */}
            {author && (
              <div className="mt-14 rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-6 sm:p-8 shadow-card flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl border border-primary/20 shadow-xs">
                  {author.name.charAt(0)}
                </div>
                <div className="space-y-2.5 flex-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Written By
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-foreground">
                      <Link
                        href={`/authors/${author.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {author.name}
                      </Link>
                    </h4>
                    <p className="text-xs font-medium text-muted-foreground">{author.role}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {author.bio}
                  </p>

                  {/* Credentials highlights */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block mb-1.5">
                      Verifiable Credentials:
                    </span>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {author.credentials.map((cred, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/authors/${author.slug}`}
                      className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>View full author profile &amp; published articles</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 border-t border-border/80 pt-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Related Engineering Playbooks
                  </h3>
                  <Link
                    href="/blog"
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>View all guides</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 hover:border-primary/50 hover:shadow-card-hover transition-all shadow-subtle flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          {blogCategories.find((c) => c.slug === rel.category)?.shortName || rel.category}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {rel.excerpt}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/50">
                        <span className="font-mono">{rel.readTime}</span>
                        <span className="text-primary font-bold group-hover:underline inline-flex items-center gap-1">
                          <span>Read</span>
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sticky Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Desktop Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* Service Consultation Card */}
            <div className="rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-6 shadow-floating space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                Technical Advisory
              </span>
              <h3 className="text-sm font-bold text-foreground">
                Need Support Navigating Console Policies?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We coordinate compliant 20+ tester cohorts, review production questionnaires, and audit AAB builds before submission.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 text-xs font-bold transition-all shadow-card"
                >
                  <span>Request Advisory Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Categories Quick Links */}
            <div className="rounded-3xl border border-border/80 bg-surface-cream/50 dark:bg-card p-6 shadow-subtle space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Browse Playbook Categories
              </h3>
              <div className="space-y-1.5 pt-1 text-xs">
                {blogCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    className="flex items-center justify-between py-1.5 px-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface-panel dark:hover:bg-muted/40 transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
