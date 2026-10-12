"use client";

import React, { useState, useEffect } from "react";
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
  FileText,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  {
    title: "Closed Testing (20 Testers / 14 Days)",
    href: "/services/closed-testing",
    desc: "Coordinated tester cohort & structured feedback compliance.",
    icon: Users,
  },
  {
    title: "Account Setup & Verification",
    href: "/services/account-setup",
    desc: "Personal & organization D-U-N-S verification advisory.",
    icon: ShieldCheck,
  },
  {
    title: "Production Access Advisory",
    href: "/services/production-access",
    desc: "Questionnaire guidance & reviewer readiness prep.",
    icon: CheckCircle2,
  },
  {
    title: "App Publishing & Compliance",
    href: "/services/app-publishing",
    desc: "Target SDK, Data Safety form & policy audits.",
    icon: Layers,
  },
  {
    title: "Rejection Troubleshooting",
    href: "/services/rejection-troubleshooting",
    desc: "Root-cause diagnostics, policy fixes & appeal guidance.",
    icon: AlertTriangle,
  },
  {
    title: "Store Listing Optimization (ASO)",
    href: "/services/listing-optimization",
    desc: "Metadata, visual asset guidelines & conversion tuning.",
    icon: Sparkles,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
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
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-95"
          aria-label="PlayStoreGuide Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-600 text-white shadow-sm shadow-emerald-500/20 ring-1 ring-white/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
              PlayStore<span className="text-emerald-600 dark:text-emerald-400">Guide</span>
            </span>
            <span className="text-[10px] font-medium tracking-wide text-zinc-500 dark:text-zinc-400 uppercase mt-0.5">
              Android Publishing Hub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium" aria-label="Main Navigation">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                pathname.startsWith("/services")
                  ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                  : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Card */}
            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full pt-1 w-96 origin-top-left transition-all">
                <div className="rounded-xl border border-zinc-200 bg-white p-2 shadow-xl ring-1 ring-black/5 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="p-2 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Publishing Advisory
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5"
                    >
                      All Services <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="grid gap-1 pt-1">
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 group"
                        >
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/60 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
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
            href="/guides"
            className={`px-3 py-2 rounded-md transition-colors ${
              pathname.startsWith("/guides")
                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            }`}
          >
            Guides
          </Link>

          <Link
            href="/tools/policy-readiness-checklist"
            className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1.5 ${
              pathname.startsWith("/tools")
                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            }`}
          >
            <span>Readiness Checklist</span>
            <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
              Free Tool
            </span>
          </Link>

          <Link
            href="/faq"
            className={`px-3 py-2 rounded-md transition-colors ${
              pathname === "/faq"
                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            }`}
          >
            FAQ
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-md transition-colors ${
              pathname === "/about"
                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            }`}
          >
            About
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <Button
              variant="default"
              size="sm"
              className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 shadow-sm"
            >
              Request Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-2 pb-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col space-y-3">
            <div className="py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Publishing Services
            </div>
            <div className="grid grid-cols-1 gap-2 pl-2">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 py-1"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/services"
                className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
              >
                View all services &rarr;
              </Link>
            </div>

            <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3 flex flex-col space-y-2">
              <Link
                href="/guides"
                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 py-1"
              >
                Educational Guides
              </Link>
              <Link
                href="/tools/policy-readiness-checklist"
                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 py-1 flex items-center justify-between"
              >
                <span>Readiness Checklist</span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Tool
                </span>
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 py-1"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 py-1"
              >
                About Us
              </Link>
            </div>

            <div className="pt-4">
              <Link href="/contact" className="w-full block">
                <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-emerald-600 dark:hover:bg-emerald-500">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
