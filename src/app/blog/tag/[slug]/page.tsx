import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Clock, ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { getArticlesByTag } from "@/data/articles";
import { blogTags, getTagBySlug } from "@/data/tags";
import { getAuthorBySlug } from "@/data/authors";
import { blogCategories } from "@/data/categories";

interface TagPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  return blogTags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    return {
      title: "Tag Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return constructMetadata({
    title: `${tag.name} Articles & Guides`,
    description: `Browse all articles, tutorials, and developer playbooks related to ${tag.name} on PlayStoreGuide.`,
    path: `/blog/tag/${tag.slug}`,
  });
}

export default async function TagArchivePage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  const articles = getArticlesByTag(tag.slug);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: `Tag: ${tag.name}`, url: `/blog/tag/${tag.slug}` },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

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
            <li className="font-semibold text-foreground">Tag: #{tag.name}</li>
          </ol>
        </nav>

        {/* Tag Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Topic Tag ({articles.length} Articles)
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Articles Tagged &ldquo;{tag.name}&rdquo;
          </h1>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            {tag.description}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => {
            const author = getAuthorBySlug(article.authorId);
            const categoryObj = blogCategories.find((c) => c.slug === article.category);

            return (
              <article
                key={article.slug}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 sm:p-7 shadow-subtle hover:shadow-card-hover hover:border-primary/40 transition-all duration-300"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-primary text-[11px] uppercase tracking-wider">
                      {categoryObj?.shortName || article.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-[11px] font-mono">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="line-clamp-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                      {author?.name.charAt(0) || "P"}
                    </div>
                    <span className="text-[11px] font-medium text-muted-foreground truncate max-w-[120px]">
                      {author?.name || "PlayStoreGuide"}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

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
