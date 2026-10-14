"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  BadgeDollarSign,
  Compass,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const services = [
  {
    title: "Closed Testing (20 Testers / 14 Days)",
    href: "/services/closed-testing",
    desc: "Verified human Android testers with continuous 14-day cohort tracking.",
    icon: Users,
    badge: "Mandatory",
  },
  {
    title: "Account Setup & D-U-N-S",
    href: "/services/play-console-account-setup",
    desc: "Organization & personal Play Console developer identity verification.",
    icon: ShieldCheck,
    badge: "Identity",
  },
  {
    title: "Production Access Advisory",
    href: "/services/production-access-guidance",
    desc: "Review questionnaire strategy, testing telemetry synthesis & Vitals check.",
    icon: CheckCircle2,
    badge: "Crucial Step",
  },
  {
    title: "App Publishing & Compliance",
    href: "/services/app-publishing-assistance",
    desc: "Target SDK 34/35, Data Safety declaration & reviewer credential audit.",
    icon: Layers,
    badge: "Pre-Launch",
  },
  {
    title: "Rejection Troubleshooting",
    href: "/services/app-rejection-help",
    desc: "Root-cause diagnostics, policy violation remediation & appeal letters.",
    icon: AlertTriangle,
    badge: "Recovery",
  },
  {
    title: "Store Listing Optimization (ASO)",
    href: "/services/play-store-aso",
    desc: "Policy-safe metadata structuring, keyword targeting & conversion assets.",
    icon: Sparkles,
    badge: "Growth",
  },
];

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Track scroll state for subtle elevation change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard and outside-click handling
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

  // Body scroll locking when mobile drawer is open
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

  const isServicesActive = pathname.startsWith("/services");
  const isPricingActive = pathname === "/pricing";
  const isToolsActive = pathname.startsWith("/tools");
  const isBlogActive = pathname.startsWith("/blog") || pathname.startsWith("/guides");
  const isAboutActive = pathname === "/about";

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none transition-all duration-300">
      {/* Floating Pill Bar */}
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between h-14 sm:h-15 px-3 sm:px-4 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-surface-panel/92 dark:bg-card/92 backdrop-blur-md border-border shadow-floating"
            : "bg-surface-panel/80 dark:bg-card/80 backdrop-blur-md border-border/80 shadow-card hover:border-border"
        }`}
      >
        {/* Brand Logo & Pill Indicator */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-full p-1 -ml-1 pr-3 transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="PlayStoreGuide Homepage"
        >
          <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-teal-500/10 border border-primary/20 p-1 shadow-xs transition-transform duration-200 group-hover:scale-105 overflow-hidden">
            <Image
              src="/assets/icon.png"
              alt="PlayStoreGuide Icon"
              width={36}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-foreground leading-none">
                PlayStore<span className="text-primary">Guide</span>
              </span>
              <span className="hidden xl:inline-flex items-center rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                Verified
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase mt-0.5 hidden xs:block">
              Android Publishing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
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
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isServicesActive
                  ? "text-primary font-semibold bg-primary/10 dark:bg-primary/20"
                  : "text-foreground/80 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-controls="desktop-services-flyout"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 opacity-70 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Services Dropdown Flyout Panel */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  id="desktop-services-flyout"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[440px] z-50 pointer-events-auto"
                >
                  <div className="rounded-2xl border border-border bg-surface-panel dark:bg-card p-3 shadow-floating ring-1 ring-black/5 dark:ring-white/10">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-border/60">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Compass className="h-3.5 w-3.5 text-primary" />
                        Publishing Advisory Tracks
                      </span>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                      >
                        All Services <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="grid gap-1 pt-2">
                      {services.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <div className="mt-0.5 flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg bg-surface-cream text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-border/60">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-semibold text-muted-foreground uppercase bg-muted/60 px-1.5 py-0.5 rounded">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-2 pt-2 border-t border-border/60 flex items-center justify-between px-3 text-[11px] text-muted-foreground">
                      <span>Have custom launch requirements?</span>
                      <Link
                        href="/pricing"
                        className="font-semibold text-foreground hover:text-primary flex items-center gap-1"
                      >
                        <BadgeDollarSign className="h-3.5 w-3.5 text-primary" />
                        View Pricing
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/pricing"
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isPricingActive
                ? "text-primary font-semibold bg-primary/10 dark:bg-primary/20"
                : "text-foreground/80 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            }`}
          >
            Pricing
          </Link>

          <Link
            href="/tools"
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isToolsActive
                ? "text-primary font-semibold bg-primary/10 dark:bg-primary/20"
                : "text-foreground/80 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            }`}
          >
            Tools
          </Link>

          <Link
            href="/blog"
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isBlogActive
                ? "text-primary font-semibold bg-primary/10 dark:bg-primary/20"
                : "text-foreground/80 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/about"
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isAboutActive
                ? "text-primary font-semibold bg-primary/10 dark:bg-primary/20"
                : "text-foreground/80 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full text-foreground/80 hover:text-foreground hover:bg-black/[0.05] dark:hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="pointer-events-auto md:hidden mt-2 rounded-3xl border border-border bg-surface-panel/95 dark:bg-card/95 backdrop-blur-xl p-5 shadow-floating"
          >
            <div className="flex flex-col space-y-4">
              {/* Mobile Drawer Brand Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-border/60">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-teal-500/10 border border-primary/20 p-1 shadow-xs overflow-hidden">
                  <Image
                    src="/assets/icon.png"
                    alt="PlayStoreGuide"
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-foreground leading-tight">
                    PlayStore<span className="text-primary">Guide</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground font-medium">
                    Google Play Advisory &amp; Testing
                  </div>
                </div>
              </div>

              {/* Services section */}
              <div>
                <div className="flex items-center justify-between px-2 py-1 border-b border-border/50 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <span>Advisory Services</span>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    View All &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1 pt-2">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-foreground hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] transition-colors"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted text-muted-foreground">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="truncate">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Direct Links */}
              <div className="border-t border-border/60 pt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
                <Link
                  href="/pricing"
                  className="rounded-xl px-3 py-2 text-foreground hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/tools"
                  className="rounded-xl px-3 py-2 text-foreground hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] transition-colors"
                >
                  Tools &amp; Checklists
                </Link>
                <Link
                  href="/blog"
                  className="rounded-xl px-3 py-2 text-foreground hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] transition-colors"
                >
                  Developer Blog
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl px-3 py-2 text-foreground hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/resources"
                  className="rounded-xl px-3 py-2 text-foreground hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] transition-colors"
                >
                  Resources
                </Link>
                <Link
                  href="/faq"
                  className="rounded-xl px-3 py-2 text-foreground hover:bg-surface-cream/80 dark:hover:bg-white/[0.06] transition-colors"
                >
                  FAQ
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all text-center"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
