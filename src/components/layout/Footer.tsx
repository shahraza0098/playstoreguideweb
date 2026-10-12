import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400">
      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-50"
              aria-label="PlayStoreGuide Home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-600 text-white shadow-sm">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                PlayStore<span className="text-emerald-600 dark:text-emerald-400">Guide</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-sm">
              Independent technical consultancy providing legitimate, policy-compliant guidance for Android developers navigating Google Play Console requirements, 14-day closed testing, and production access reviews.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <Mail className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Direct inquiries: </span>
              <a
                href="mailto:support@playstoreguide.com"
                className="font-medium text-zinc-900 dark:text-zinc-200 hover:underline"
              >
                support@playstoreguide.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Publishing Services
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/closed-testing"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  20 Testers / 14 Days
                </Link>
              </li>
              <li>
                <Link
                  href="/services/account-setup"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Account Setup & D-U-N-S
                </Link>
              </li>
              <li>
                <Link
                  href="/services/production-access"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Production Access Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-publishing"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Publishing & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rejection-troubleshooting"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Rejection Troubleshooting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/listing-optimization"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Store Listing (ASO)
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Resources Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Developer Guides
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/google-play-20-testers-requirement-playbook"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  20 Testers Playbook
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/how-to-pass-production-access-review"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Production Access Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/google-play-account-verification-guide"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Account Verification & D-U-N-S
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/google-play-app-rejection-recovery-guide"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  App Rejection Appeals
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/policy-readiness-checklist"
                  className="inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Readiness Checklist <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Trust & Legal
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  About PlayStoreGuide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Contact Consultation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Independent Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Trademark Disclaimer Box (Required for Legal & Policy Safety) */}
        <div className="mt-12 rounded-xl border border-zinc-200/90 bg-white/60 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/50">
          <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            <strong className="font-semibold text-zinc-700 dark:text-zinc-300">Independent Service Disclaimer: </strong>
            PlayStoreGuide is an independent developer advisory service and educational resource. PlayStoreGuide is not affiliated with, endorsed by, sponsored by, or associated with Google LLC, Alphabet Inc., or the Android Open Source Project. &ldquo;Google Play&rdquo;, &ldquo;Android&rdquo;, &ldquo;Google Play Console&rdquo;, and their respective logos are trademarks of Google LLC. We provide technical advisory and testing facilitation adhering strictly to official developer policies; we do not sell or guarantee Google Play approvals.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {currentYear} PlayStoreGuide. All rights reserved. Built for Android developers worldwide.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
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
