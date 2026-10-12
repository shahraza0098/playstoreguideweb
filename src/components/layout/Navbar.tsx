"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Users,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Closed Testing (20 Testers / 14 Days)",
    href: "/services/closed-testing",
    desc: "Coordinated opt-in cohort & qualitative feedback logs.",
    icon: Users,
  },
  {
    title: "Account Setup & D-U-N-S",
    href: "/services/play-console-account-setup",
    desc: "Personal & organization Console identity verification.",
    icon: ShieldCheck,
  },
  {
    title: "Production Access Advisory",
    href: "/services/production-access-guidance",
    desc: "Questionnaire response review & reviewer readiness prep.",
    icon: CheckCircle2,
  },
  {
    title: "App Publishing & Compliance",
    href: "/services/app-publishing-assistance",
    desc: "Target SDK 34/35, Data Safety form & credentials audit.",
    icon: Layers,
  },
  {
    title: "Rejection Troubleshooting",
    href: "/services/app-rejection-help",
    desc: "Root-cause diagnostics, policy remediation & appeals.",
    icon: AlertTriangle,
  },
  {
    title: "Store Listing Optimization (ASO)",
    href: "/services/play-store-aso",
    desc: "Policy-safe metadata structuring & conversion assets.",
    icon: Sparkles,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Close dropdown on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1 -ml-1"
          aria-label="PlayStoreGuide Homepage"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm ring-1 ring-border">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-foreground leading-none">
              PlayStore<span className="text-primary">Guide</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mt-0.5">
              Developer Resource
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                pathname.startsWith("/services")
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                id="services-menu"
                className="absolute left-0 top-full pt-1.5 w-[380px] origin-top-left transition-all z-50"
              >
                <div className="rounded-xl border border-border bg-card p-2 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-border/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Publishing Advisory
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                    >
                      All Services <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="grid gap-1 pt-1.5">
                    {services.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/70 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className={`px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              pathname.startsWith("/blog") || pathname.startsWith("/guides")
                ? "text-primary font-semibold"
                : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/resources"
            className={`px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              pathname.startsWith("/resources") || pathname.startsWith("/tools")
                ? "text-primary font-semibold"
                : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
            }`}
          >
            Resources
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              pathname === "/about"
                ? "text-primary font-semibold"
                : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Primary Contact CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 shadow-sm"
            >
              Enquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-foreground/80 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-border bg-background px-4 pt-3 pb-6 animate-in fade-in-20 duration-150"
        >
          <div className="flex flex-col space-y-4">
            <div>
              <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Services
              </div>
              <div className="grid grid-cols-1 gap-1.5 pl-2 pt-1">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-border/60 pt-3 flex flex-col space-y-1.5">
              <Link
                href="/blog"
                className="text-sm font-medium text-foreground hover:text-primary py-1.5 px-2 rounded hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Blog
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium text-foreground hover:text-primary py-1.5 px-2 rounded hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Resources &amp; Tools
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-primary py-1.5 px-2 rounded hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                About Us
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-foreground hover:text-primary py-1.5 px-2 rounded hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                FAQ
              </Link>
            </div>

            <div className="pt-2">
              <Link href="/contact" className="w-full block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-5">
                  Enquire Now &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
