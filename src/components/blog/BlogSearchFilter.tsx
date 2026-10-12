"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight, User, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

  return (
    <div className="space-y-8">
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <button
            type="button"
            onClick={() => handleCategoryChange("all")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            All Articles ({articles.length})
          </button>
          {blogCategories.map((cat) => {
            const count = articles.filter((a) => a.category === cat.slug).length;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  selectedCategory === cat.slug
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat.shortName} ({count})
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search guides & policies..."
            className="w-full rounded-lg border border-border bg-card pl-9 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
              aria-label="Clear search"
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
            Showing <strong>{filteredArticles.length}</strong> of {articles.length} articles
            {selectedCategory !== "all" && ` in ${blogCategories.find((c) => c.slug === selectedCategory)?.name}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <button
            type="button"
            onClick={clearFilters}
            className="text-primary hover:underline font-semibold"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Articles Grid */}
      {paginatedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => {
            const author = getAuthorBySlug(article.authorId);
            const categoryObj = blogCategories.find((c) => c.slug === article.category);

            return (
              <Card
                key={article.slug}
                className="flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all group bg-card"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Link href={`/blog/category/${article.category}`}>
                      <Badge variant="default" className="hover:opacity-90">
                        {categoryObj?.shortName || article.category}
                      </Badge>
                    </Link>
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

                <CardFooter className="pt-0 flex flex-col gap-3 border-t border-border/50 mt-auto">
                  <div className="flex items-center justify-between w-full text-[11px] text-muted-foreground pt-3">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      <span>{author?.name || "PlayStoreGuide Team"}</span>
                    </span>
                    <span>Updated {article.updatedAt}</span>
                  </div>

                  <div className="w-full flex justify-end">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Read playbook</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="No articles found"
          description="We couldn't find any guides matching your search criteria. Try a different search term or reset filters."
          action={
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear all filters
            </Button>
          }
        />
      )}

      {/* Crawlable Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Blog Pagination"
          className="flex items-center justify-center gap-2 pt-8 border-t border-border/60"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-xs"
          >
            <ChevronLeft className="h-3.5 w-3.5 mr-1" />
            <span>Previous</span>
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`h-8 w-8 rounded-md text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  currentPage === page
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-xs"
          >
            <span>Next</span>
            <ChevronRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </nav>
      )}
    </div>
  );
}
