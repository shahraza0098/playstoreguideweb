import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Clock,
  ArrowUpRight,
  Info,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border/80 bg-surface-cream/60 dark:bg-card text-muted-foreground transition-colors mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full w-fit group"
              aria-label="PlayStoreGuide Homepage"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm transition-transform group-hover:scale-105">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                PlayStore<span className="text-primary">Guide</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Independent technical consultancy providing legitimate, policy-compliant guidance for Android developers navigating Google Play Console requirements, 14-day closed testing cohorts, and production access reviews.
            </p>

            <div className="pt-2 space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="font-medium text-foreground">Enquiries:</span>
                <a
                  href="mailto:support@playstoreguide.com"
                  className="font-semibold text-primary hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  support@playstoreguide.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Response SLA: Within 12–24 business hours</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Strict Google Play 2026 Policy Alignment</span>
              </div>
            </div>
          </div>

          {/* Publishing Services Column */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Advisory Services
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/services/closed-testing"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  20 Testers / 14 Days Track
                </Link>
              </li>
              <li>
                <Link
                  href="/services/play-console-account-setup"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Account Setup &amp; D-U-N-S
                </Link>
              </li>
              <li>
                <Link
                  href="/services/production-access-guidance"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Production Access Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-publishing-assistance"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  App Publishing &amp; Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-rejection-help"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Rejection Recovery &amp; Appeals
                </Link>
              </li>
              <li>
                <Link
                  href="/services/play-store-aso"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Store Listing (ASO)
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Developer Guides Column */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Developer Guides &amp; Tools
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/blog/google-play-closed-testing-requirements-guide"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Closed Testing Playbook
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-prepare-for-google-play-production-access"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Production Access Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/google-play-developer-account-verification-guide"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Account Verification &amp; D-U-N-S
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/common-google-play-app-rejection-reasons"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Rejection Root Causes
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/closed-testing-planner"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Closed Testing Planner <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/play-store-publishing-checklist"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Publishing Checklist <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Company &amp; Legal
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  About PlayStoreGuide
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Advisory Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Contact &amp; Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Structured Independent Trademark Disclaimer Notice */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-surface-panel/80 dark:bg-card/80 p-4 sm:p-5 shadow-subtle">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Info className="h-3.5 w-3.5" />
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Independent Service Disclaimer: </strong>
              PlayStoreGuide is an independent developer advisory service and technical educational resource. PlayStoreGuide is not affiliated with, endorsed by, sponsored by, or associated with Google LLC, Alphabet Inc., or the Android Open Source Project. &ldquo;Google Play&rdquo;, &ldquo;Android&rdquo;, &ldquo;Google Play Console&rdquo;, and their respective logos are trademarks of Google LLC. We provide technical advisory and testing facilitation adhering strictly to official developer policies; we do not sell or guarantee Google Play approvals.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} PlayStoreGuide. All rights reserved. Built for Android developers worldwide.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/refund-policy" className="hover:text-primary transition-colors">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
