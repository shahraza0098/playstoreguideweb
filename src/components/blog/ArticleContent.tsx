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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Article } from "@/data/articles";
import { getAuthorBySlug } from "@/data/authors";
import { blogCategories } from "@/data/categories";

interface ArticleContentProps {
  article: Article;
  relatedArticles: Article[];
}

export function ArticleContent({ article, relatedArticles }: ArticleContentProps) {
  const author = getAuthorBySlug(article.authorId);
  const reviewer = article.reviewerId ? getAuthorBySlug(article.reviewerId) : null;
  const categoryObj = blogCategories.find((c) => c.slug === article.category);

  // Generate Table of Contents items from sections
  const tocItems = article.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <div className="py-10 sm:py-16">
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
                className="hover:text-primary transition-colors"
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

        {/* Main Grid: Content Column & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            {/* Header */}
            <header className="space-y-4 border-b border-border pb-8">
              <div className="flex flex-wrap items-center gap-2">
                <Link href={`/blog/category/${article.category}`}>
                  <Badge variant="default">{categoryObj?.name || article.category}</Badge>
                </Link>
                {article.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <Badge variant="outline" className="text-[10px] hover:border-primary">
                      #{tag}
                    </Badge>
                  </Link>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                {article.title}
              </h1>

              {/* Byline with Author & Reviewer */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2">
                {author && (
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-primary" />
                    <span>By </span>
                    <Link
                      href={`/authors/${author.slug}`}
                      className="font-semibold text-foreground hover:text-primary underline-offset-2 hover:underline"
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
                      className="font-semibold text-foreground hover:text-primary underline-offset-2 hover:underline"
                    >
                      {reviewer.name}
                    </Link>
                  </span>
                )}

                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Updated {article.updatedAt}</span>
                </span>

                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              {/* Executive Summary Box */}
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5 text-sm text-foreground leading-relaxed shadow-xs">
                <strong className="font-bold text-primary block mb-1">
                  Executive Summary
                </strong>
                {article.excerpt}
              </div>
            </header>

            {/* Article Sections */}
            <div className="mt-8 space-y-12">
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 space-y-4"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/40 pb-2">
                    {section.title}
                  </h2>

                  <div className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 whitespace-pre-line">
                    {section.content}
                  </div>

                  {/* Code Snippet if present */}
                  {section.codeSnippet && (
                    <div className="rounded-xl border border-border bg-zinc-950 p-4 text-xs font-mono text-zinc-100 overflow-x-auto shadow-sm">
                      {section.codeSnippet.caption && (
                        <div className="text-[11px] font-sans text-zinc-400 mb-2 border-b border-zinc-800 pb-1">
                          {section.codeSnippet.caption}
                        </div>
                      )}
                      <pre>
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Callout Box */}
                  {section.callout && (
                    <div
                      className={`rounded-xl border p-4 text-xs sm:text-sm leading-relaxed ${
                        section.callout.type === "warning"
                          ? "border-rose-300 bg-rose-50/70 text-rose-950 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-200"
                          : section.callout.type === "official"
                          ? "border-teal-300 bg-teal-50/70 text-teal-950 dark:border-teal-900/60 dark:bg-teal-950/40 dark:text-teal-200"
                          : section.callout.type === "tip"
                          ? "border-emerald-300 bg-emerald-50/70 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200"
                          : "border-blue-300 bg-blue-50/70 text-blue-950 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs mb-1">
                        {section.callout.type === "warning" ? (
                          <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
                        ) : section.callout.type === "official" ? (
                          <ShieldCheck className="h-4 w-4 shrink-0 text-teal-600" />
                        ) : (
                          <Lightbulb className="h-4 w-4 shrink-0 text-emerald-600" />
                        )}
                        <span>
                          {section.callout.type === "warning"
                            ? "Policy Alert"
                            : section.callout.type === "official"
                            ? "Official Google Policy"
                            : "Technical Tip"}
                        </span>
                      </div>
                      <p>{section.callout.text}</p>
                    </div>
                  )}

                  {/* Subsections if present */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-6 pt-2 pl-2 sm:pl-4 border-l-2 border-border/60">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} id={sub.id} className="space-y-2 scroll-mt-24">
                          <h3 className="text-lg font-bold text-foreground">
                            {sub.title}
                          </h3>
                          <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                            {sub.content}
                          </div>
                          {sub.codeSnippet && (
                            <div className="rounded-xl border border-border bg-zinc-950 p-4 text-xs font-mono text-zinc-100 overflow-x-auto shadow-sm">
                              {sub.codeSnippet.caption && (
                                <div className="text-[11px] font-sans text-zinc-400 mb-2 border-b border-zinc-800 pb-1">
                                  {sub.codeSnippet.caption}
                                </div>
                              )}
                              <pre>
                                <code>{sub.codeSnippet.code}</code>
                              </pre>
                            </div>
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
              <div className="mt-12 rounded-2xl border border-primary/30 bg-card p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <Badge variant="default" className="text-[10px]">
                    {article.serviceLink.badge}
                  </Badge>
                  <h3 className="text-base font-bold text-foreground">
                    {article.serviceLink.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Get legitimate technical advisory and testing facilitation from PlayStoreGuide.
                  </p>
                </div>
                <Link
                  href={article.serviceLink.href}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold hover:bg-primary/90 transition-colors shadow-xs"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="mt-14 border-t border-border pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-border/80"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md">
                        <span className="text-sm sm:text-base pr-4">
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

            {/* Sources & Official References */}
            {article.sources && article.sources.length > 0 && (
              <section className="mt-14 border-t border-border pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Sources &amp; Official References
                  </h3>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-2 text-xs">
                  {article.sources.map((source, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-semibold text-foreground">{source.title}</span>
                        <span className="text-muted-foreground"> ({source.publisher})</span>
                      </div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1 shrink-0 font-medium"
                      >
                        <span>View Source</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Profile Bio Card */}
            {author && (
              <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300 font-bold text-xl border border-border">
                  {author.name.charAt(0)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Written By
                      </span>
                      <h4 className="text-base font-bold text-foreground">
                        <Link
                          href={`/authors/${author.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {author.name}
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground">{author.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {author.bio}
                  </p>
                  <div className="pt-1">
                    <Link
                      href={`/authors/${author.slug}`}
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>View full author profile &amp; articles</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-14 border-t border-border pt-10">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Related Guides &amp; Playbooks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-all shadow-xs block"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {blogCategories.find((c) => c.slug === rel.category)?.shortName || rel.category}
                      </span>
                      <h4 className="mt-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                        {rel.excerpt}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t border-border/50">
                        <span>{rel.readTime}</span>
                        <span className="text-primary font-semibold group-hover:underline">
                          Read article &rarr;
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sticky Sidebar: Table of Contents & Quick Consultation */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Table of Contents */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Table of Contents
              </h3>
              <nav aria-label="Table of Contents" className="mt-4">
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-primary transition-colors line-clamp-1"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Service Consultation Card */}
            <div className="rounded-2xl border border-teal-500/30 bg-muted/40 p-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                Technical Advisory
              </span>
              <h3 className="text-sm font-bold text-foreground">
                Need Help Applying This to Your App?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our team audits closed testing tracks, reviews questionnaire answers, verifies D-U-N-S data, and helps resolve rejection strikes.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="w-full block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs py-5">
                    Request Consultation &rarr;
                  </Button>
                </Link>
              </div>
            </div>

            {/* Categories Quick Links */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Browse Categories
              </h3>
              <div className="space-y-2 pt-1 text-xs">
                {blogCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    className="flex items-center justify-between py-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ArrowRight className="h-3 w-3" />
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
