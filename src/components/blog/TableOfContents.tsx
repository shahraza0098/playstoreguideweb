"use client";

import React, { useEffect, useState } from "react";
import { ListCollapse, ChevronDown, BookmarkCheck } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className={className}>
      {/* Mobile Collapsible TOC Toggle */}
      <div className="lg:hidden mb-6 rounded-2xl border border-border/80 bg-surface-cream/70 dark:bg-card p-4 shadow-2xs">
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-toc-list"
          className="flex w-full items-center justify-between font-bold text-xs text-foreground cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <ListCollapse className="h-4 w-4 text-primary" />
            <span>Table of Contents ({items.length} Sections)</span>
          </span>
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
              isMobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isMobileOpen && (
          <nav
            id="mobile-toc-list"
            aria-label="Table of Contents Mobile"
            className="mt-3 pt-3 border-t border-border/60 space-y-2 text-xs"
          >
            {items.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className={`block py-1 px-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="font-mono text-[11px] mr-2 text-muted-foreground">
                    0{idx + 1}.
                  </span>
                  {item.title}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <div className="hidden lg:block rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-6 shadow-card space-y-4">
        <div className="flex items-center justify-between border-b border-border/70 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <BookmarkCheck className="h-4 w-4 text-primary" />
            Table of Contents
          </span>
          <span className="text-[10px] font-mono text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
            {items.length} Chapters
          </span>
        </div>

        <nav aria-label="Table of Contents Desktop">
          <ul className="space-y-1.5 text-xs">
            {items.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-start gap-2 py-1.5 px-2.5 rounded-xl transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary font-bold border border-primary/20 shadow-2xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-cream/80 dark:hover:bg-muted/40"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] shrink-0 pt-0.5 ${
                        isActive ? "text-primary font-bold" : "text-muted-foreground/70"
                      }`}
                    >
                      0{idx + 1}.
                    </span>
                    <span className="line-clamp-2 leading-snug">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
