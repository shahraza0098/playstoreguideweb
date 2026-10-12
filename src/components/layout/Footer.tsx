import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border bg-card text-muted-foreground transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg w-fit"
              aria-label="PlayStoreGuide Homepage"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                PlayStore<span className="text-primary">Guide</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Independent technical consultancy providing legitimate, policy-compliant guidance for Android developers navigating Google Play Console requirements, 14-day closed testing cohorts, and production access reviews.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Enquiries: </span>
                <a
                  href="mailto:support@playstoreguide.com"
                  className="font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  support@playstoreguide.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Response window: Within 12–24 business hours</span>
              </div>
            </div>
          </div>

          {/* Publishing Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/closed-testing"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  20 Testers / 14 Days
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
                  Rejection Troubleshooting
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

          {/* Blog & Resources */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Blog Categories
            </p>
            <ul className="space-y-2 text-sm">
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
                  App Rejection Appeals
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/policy-readiness-checklist"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Policy Checklist Tool <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              About &amp; Trust
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  About PlayStoreGuide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  Contact Advisory
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  Independent Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Trademark Disclaimer Notice */}
        <div className="mt-12 rounded-xl border border-border bg-muted/40 p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Independent Service Disclaimer: </strong>
            PlayStoreGuide is an independent developer advisory service and technical educational resource. PlayStoreGuide is not affiliated with, endorsed by, sponsored by, or associated with Google LLC, Alphabet Inc., or the Android Open Source Project. &ldquo;Google Play&rdquo;, &ldquo;Android&rdquo;, &ldquo;Google Play Console&rdquo;, and their respective logos are trademarks of Google LLC. We provide technical advisory and testing facilitation adhering strictly to official developer policies; we do not sell or guarantee Google Play approvals.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} PlayStoreGuide. All rights reserved. Built for Android developers worldwide.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/disclaimer" className="hover:underline">
              Legal Disclaimer
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
