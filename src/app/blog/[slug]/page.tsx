import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
} from "@/lib/seo";
import {
  getArticleBySlug,
  getPublishedArticles,
  getArticlesByCategory,
} from "@/data/articles";
import { getAuthorBySlug } from "@/data/authors";
import { blogCategories } from "@/data/categories";
import { ArticleContent } from "@/components/blog/ArticleContent";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateStaticParams() {
  const publishedArticles = getPublishedArticles();
  return publishedArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.status !== "published") {
    notFound();
  }

  return constructMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: `/blog/${article.slug}`,
    keywords: article.seo.keywords,
    ogType: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  // Return real 404 if article does not exist or is still a draft
  if (!article || article.status !== "published") {
    notFound();
  }

  const author = getAuthorBySlug(article.authorId);
  const categoryObj = blogCategories.find((c) => c.slug === article.category);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: categoryObj?.name || article.category,
      url: `/blog/category/${article.category}`,
    },
    { name: article.title, url: `/blog/${article.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.seo.description,
    url: `/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    authorName: author?.name || "PlayStoreGuide Technical Team",
  });

  const faqSchema =
    article.faqs && article.faqs.length > 0 ? generateFAQSchema(article.faqs) : null;

  // Find related articles in the same category or overall
  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  // If less than 2, fill from other published articles
  if (relatedArticles.length < 2) {
    const additional = getPublishedArticles()
      .filter((a) => a.slug !== article.slug && !relatedArticles.includes(a))
      .slice(0, 2 - relatedArticles.length);
    relatedArticles.push(...additional);
  }

  return (
    <div>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <ArticleContent article={article} relatedArticles={relatedArticles} />
    </div>
  );
}
