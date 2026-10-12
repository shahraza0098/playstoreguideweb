import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema, SITE_URL } from "@/lib/seo";
import {
  getArticlesByAuthor,
  getArticlesReviewedByAuthor,
} from "@/data/articles";
import { authorsData, getAuthorBySlug } from "@/data/authors";
import { blogCategories } from "@/data/categories";

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  return authorsData.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  return constructMetadata({
    title: `${author.name} - Author Profile & Articles | PlayStoreGuide`,
    description: author.bio.slice(0, 155),
    path: `/authors/${author.slug}`,
  });
}

export default async function AuthorProfilePage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authoredArticles = getArticlesByAuthor(author.slug);
  const reviewedArticles = getArticlesReviewedByAuthor(author.slug);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Authors", url: "/authors" },
    { name: author.name, url: `/authors/${author.slug}` },
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `${SITE_URL}/authors/${author.slug}`,
    worksFor: {
      "@type": "Organization",
      name: "PlayStoreGuide",
      url: SITE_URL,
    },
    knowsAbout: author.expertise,
  };

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
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
            <li className="font-semibold text-foreground">{author.name}</li>
          </ol>
        </nav>

        {/* Author Bio Header Card */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar Initial Box */}
            <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300 font-extrabold text-3xl border border-border">
              {author.name.charAt(0)}
            </div>

            <div className="space-y-4 max-w-3xl">
              <div>
                <Badge variant="default" className="text-xs mb-2">
                  Technical Contributor
                </Badge>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  {author.name}
                </h1>
                <p className="text-sm font-semibold text-primary mt-0.5">
                  {author.role}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {author.bio}
              </p>

              {/* Credentials */}
              <div className="space-y-2 pt-2 border-t border-border/60">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                  Background &amp; Credentials
                </span>
                <ul className="space-y-1.5">
                  {author.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas of Expertise */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                  Areas of Expertise
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {author.expertise.map((exp, idx) => (
                    <Badge key={idx} variant="secondary" className="text-[11px]">
                      {exp}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authored Articles Grid */}
        <div className="mt-14">
          <div className="border-b border-border pb-3 mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Articles Authored by {author.name} ({authoredArticles.length})
            </h2>
          </div>

          {authoredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authoredArticles.map((article) => {
                const categoryObj = blogCategories.find((c) => c.slug === article.category);

                return (
                  <Card
                    key={article.slug}
                    className="flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all group bg-card"
                  >
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <Badge variant="default">
                          {categoryObj?.shortName || article.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-muted-foreground text-[11px]">
                          <Clock className="h-3 w-3" /> {article.readTime}
                        </span>
                      </div>

                      <CardTitle className="text-lg leading-snug">
                        <Link
                          href={`/blog/${article.slug}`}
                          className="group-hover:text-primary transition-colors line-clamp-2"
                        >
                          {article.title}
                        </Link>
                      </CardTitle>

                      <CardDescription className="line-clamp-3 text-xs sm:text-sm">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 mt-auto pt-3">
                      <span>Updated {article.updatedAt}</span>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                      >
                        <span>Read guide</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No authored articles found for this profile.
            </p>
          )}
        </div>

        {/* Reviewed Articles Grid (If applicable) */}
        {reviewedArticles.length > 0 && (
          <div className="mt-16">
            <div className="border-b border-border pb-3 mb-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Articles Reviewed by {author.name} ({reviewedArticles.length})
                </h2>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Articles verified against active Google Play Developer Program Policies and DDA compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviewedArticles.map((article) => (
                <Card
                  key={article.slug}
                  className="flex flex-col justify-between hover:border-primary/50 transition-all bg-card"
                >
                  <CardHeader className="space-y-2">
                    <Badge variant="outline" className="w-fit text-[10px]">
                      Policy &amp; Technical Review
                    </Badge>
                    <CardTitle className="text-base leading-snug">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:text-primary transition-colors line-clamp-2"
                      >
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-xs">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 mt-auto pt-3">
                    <span>{article.readTime}</span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Read article &rarr;</span>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
