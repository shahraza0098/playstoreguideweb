"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Clock,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EmptyState } from "@/components/ui/empty-state";
import type { Article } from "@/data/articles";
import { blogCategories } from "@/data/categories";
import { getAuthorBySlug } from "@/data/authors";

interface BlogSearchFilterProps {
  articles: Article[];
}

const ARTICLES_PER_PAGE = 6;

export function BlogSearchFilter({ articles }: BlogSearchFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const shouldReduceMotion = useReducedMotion();

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Reset to page 1 when filter changes
  const handleCategoryChange = (catSlug: string) => {
    setSelectedCategory(catSlug);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Category Pills & Search Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Visually Distinct Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter articles by category"
          className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar p-1 rounded-2xl bg-surface-cream/80 dark:bg-muted/30 border border-border/70"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "all"}
            onClick={() => handleCategoryChange("all")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
              selectedCategory === "all"
                ? "bg-surface-panel dark:bg-card text-foreground shadow-2xs border border-border/80"
                : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03]"
            }`}
          >
            All Guides ({articles.length})
          </button>
          {blogCategories.map((cat) => {
            const count = articles.filter((a) => a.category === cat.slug).length;
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "bg-surface-panel dark:bg-card text-foreground shadow-2xs border border-border/80"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/[0.03]"
                }`}
              >
                <span>{cat.shortName}</span>
                <span className="ml-1.5 text-[10px] font-mono text-muted-foreground opacity-80">
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input Bar */}
        <div className="relative w-full lg:w-80 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search guides, AAB, 20 testers..."
            aria-label="Search articles by title or keyword"
            className="w-full rounded-2xl border border-border/90 bg-surface-panel dark:bg-card pl-10 pr-9 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Status Summary */}
      {(selectedCategory !== "all" || searchQuery !== "") && (
        <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/60 pb-3">
          <span>
            Showing <strong className="text-foreground">{filteredArticles.length}</strong> of {articles.length} articles
            {selectedCategory !== "all" && (
              <> in <strong className="text-foreground">{blogCategories.find((c) => c.slug === selectedCategory)?.name}</strong></>
            )}
            {searchQuery && (
              <> matching &ldquo;{searchQuery}&rdquo;</>
            )}
          </span>
          <button
            type="button"
            onClick={clearFilters}
            className="text-primary hover:underline font-bold cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Articles Grid (Staggered card entrances with motion) */}
      {paginatedArticles.length > 0 ? (
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {paginatedArticles.map((article) => {
            const author = getAuthorBySlug(article.authorId);
            const categoryObj = blogCategories.find((c) => c.slug === article.category);

            return (
              <motion.article
                key={article.slug}
                variants={shouldReduceMotion ? undefined : cardVariants}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 sm:p-7 shadow-subtle hover:shadow-card-hover hover:border-primary/40 transition-all duration-300"
              >
                <div className="space-y-3.5">
                  {/* Category & Read Time Row */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-primary text-[11px] uppercase tracking-wider">
                      {categoryObj?.shortName || article.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-[11px] font-mono">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                  </div>

                  {/* Title (Semantic H3 for Crawlers) */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="line-clamp-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Byline & Action */}
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
                    <span>Read Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      ) : (
        <EmptyState
          title="No articles found"
          description={`No articles match your search "${searchQuery}". Try searching for another topic or resetting your category filter.`}
          action={
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-bold hover:bg-primary/90 transition-colors shadow-xs cursor-pointer"
            >
              Clear All Filters
            </button>
          }
        />
      )}

      {/* Accessible Pagination Controls */}
      {totalPages > 1 && (
        <nav
          aria-label="Articles Pagination"
          className="mt-12 pt-6 border-t border-border/70 flex items-center justify-between"
        >
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-panel dark:bg-card px-4 py-2 text-xs font-bold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <span className="text-xs font-mono font-medium text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-panel dark:bg-card px-4 py-2 text-xs font-bold text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors cursor-pointer shadow-2xs"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
