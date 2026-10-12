import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Check,
  FileCheck,
  Smartphone,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "14-Day Closed Testing (20 Testers)",
    badge: "Personal Accounts",
    description:
      "Fulfill Google's mandatory requirement with real, active testers. We coordinate opt-ins, genuine feedback logs, and device variety across Android versions.",
    href: "/services/closed-testing",
    benefits: [
      "20+ real opt-in Android devices",
      "Continuous 14-day engagement tracking",
      "Documented qualitative user feedback",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Play Console Account Verification",
    badge: "Identity & Organization",
    description:
      "Avoid account suspension during verification. We guide you through personal identity checks, D-U-N-S registration, and organizational documentation.",
    href: "/services/account-setup",
    benefits: [
      "D-U-N-S matching validation",
      "Official entity documentation audit",
      "Payment profile & tax form assistance",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Production Access Advisory",
    badge: "Crucial Step",
    description:
      "Prepare thorough, compelling responses for Google's production access questionnaire. We help you demonstrate real testing and product iteration.",
    href: "/services/production-access",
    benefits: [
      "Question-by-question review & guidance",
      "Synthesized testing feedback logs",
      "Demonstration of bug fixes & updates",
    ],
  },
  {
    icon: Layers,
    title: "App Publishing & Compliance Audit",
    badge: "End-to-End",
    description:
      "Comprehensive review before your initial release. We audit Target SDK compliance, Data Safety declarations, privacy policies, and app credentials.",
    href: "/services/app-publishing",
    benefits: [
      "Target API level compliance checks",
      "Accurate Data Safety declaration",
      "App access credential configuration",
    ],
  },
  {
    icon: AlertTriangle,
    title: "App Rejection Troubleshooting",
    badge: "Recovery & Appeals",
    description:
      "Deconstruct vague Google Play rejection emails. We identify root policy causes, prepare corrective code/metadata updates, and draft formal appeals.",
    href: "/services/rejection-troubleshooting",
    benefits: [
      "Policy violation root-cause analysis",
      "Actionable code/metadata fix checklist",
      "Structured appeal correspondence",
    ],
  },
  {
    icon: Sparkles,
    title: "Store Listing Optimization (ASO)",
    badge: "Growth & Conversion",
    description:
      "Maximize conversion rates while adhering to Google's strict metadata and graphic asset policies. Avoid spam penalties and optimize discoverability.",
    href: "/services/listing-optimization",
    benefits: [
      "Policy-safe titles & descriptions",
      "Screenshot & feature graphic specs",
      "Localization & keyword relevance",
    ],
  },
];

const challenges = [
  {
    step: "01",
    title: "The 20-Tester / 14-Day Closed Testing Rule",
    detail:
      "Since late 2023, personal developer accounts must recruit at least 20 testers who remain opted in for 14 continuous days. Inactive testers or bot rings trigger rejections.",
  },
  {
    step: "02",
    title: "Production Access Application Rejections",
    detail:
      "Meeting the 14-day threshold is not enough. Google human reviewers assess your answers to 5+ critical questions regarding user feedback, testing methodology, and improvements.",
  },
  {
    step: "03",
    title: "Strict Account Verification & D-U-N-S Numbers",
    detail:
      "Mismatched business names, unrecognized utility bills, or incorrect D-U-N-S registry records lead to prompt Play Console termination without refund.",
  },
  {
    step: "04",
    title: "Data Safety & Background Permission Scrutiny",
    detail:
      "Google Play policies evolve constantly. Declaring incorrect tracking data or requesting unnecessary permissions triggers instant automated rejections.",
  },
];

const featuredGuides = [
  {
    title: "Google Play 20 Testers Requirement: The Complete 14-Day Closed Testing Playbook",
    category: "Closed Testing",
    readTime: "8 min read",
    slug: "google-play-20-testers-requirement-playbook",
    summary:
      "A step-by-step technical guide to structuring your closed testing track, recruiting compliant testers, tracking engagement, and compiling required feedback.",
  },
  {
    title: "How to Pass Google Play Production Access Review: Questions & Best Practices",
    category: "Production Access",
    readTime: "10 min read",
    slug: "how-to-pass-production-access-review",
    summary:
      "An in-depth breakdown of Google's production access questionnaire. Learn what human reviewers look for in your testing feedback and iteration history.",
  },
  {
    title: "Google Play Developer Account Verification: D-U-N-S, Identity & Common Pitfalls",
    category: "Account Setup",
    readTime: "7 min read",
    slug: "google-play-account-verification-guide",
    summary:
      "Avoid fatal verification mistakes. Practical steps for personal vs organization accounts, document formatting, and D-U-N-S synchronization.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-white py-16 sm:py-24 lg:py-28 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(0,0,0,0))] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Google Play 2026 Developer Guidance • Policy Compliant</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50 max-w-4xl mx-auto leading-tight sm:leading-tight">
            Publish on Google Play with{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400">
              Confidence, Not Guesswork.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            From the mandatory 14-day 20-tester closed testing requirement to Play Console verification and production access reviews — get legitimate, structured technical guidance to launch your Android app.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/20 px-6 py-6 text-base font-semibold"
              >
                <span>Explore Publishing Services</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>

            <Link href="/tools/policy-readiness-checklist">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 px-6 py-6 text-base font-medium"
              >
                <FileCheck className="h-4 w-4 mr-1 text-emerald-600 dark:text-emerald-400" />
                <span>Pre-Launch Readiness Checklist</span>
              </Button>
            </Link>
          </div>

          {/* Value Props Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 text-left">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                20 Real Android Testers (No Bots)
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-950/70 dark:text-teal-300">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                D-U-N-S & Console Verification
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                Production Questionnaire Prep
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                Rejection Diagnosis & Appeals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The 2026 Policy Reality Section */}
      <section className="py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900/40 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              The Google Play Reality
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              Why 60%+ of New Android Developers Face Rejections or Delays
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Google has significantly elevated requirements for Google Play Console developers. Automated submission without structured testing or policy alignment results in closed testing failure or rejected production access.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c) => (
              <div
                key={c.step}
                className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-emerald-600/40 dark:text-emerald-400/30">
                    {c.step}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Technical Advisory Services
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              Structured Solutions Across Every Stage of Publishing
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              We work alongside developers to ensure their apps meet all technical, functional, and policy standards before requesting Google Play production rollout.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all hover:border-emerald-500/40 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-500/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                      <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-2.5">
                        Key Deliverables
                      </p>
                      <ul className="space-y-2">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                          >
                            <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Interactive Readiness Tool Highlight */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-teal-950 to-zinc-950 text-white border-y border-emerald-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                <Sparkles className="h-3.5 w-3.5" /> Free Self-Assessment Tool
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Evaluate Your App Against Google Play's 2026 Checklist
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed max-w-xl">
                Before submitting for closed testing or applying for production access, verify that your Target SDK, Data Safety form, tester cohort duration, and privacy policies align with Google Play developer guidelines.
              </p>
              <div className="pt-2">
                <Link href="/tools/policy-readiness-checklist">
                  <Button
                    size="lg"
                    className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold px-6 py-6"
                  >
                    Launch Interactive Readiness Checklist &rarr;
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-sm font-semibold text-white">Pre-Launch Audit Sample</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                    VERIFIED
                  </span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-zinc-300">Target API Level (Android 14/15)</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="h-3 w-3" /> Pass
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-zinc-300">Closed Testing Track Active (14 Days)</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="h-3 w-3" /> 20/20 Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-zinc-300">Data Safety vs Manifest Permissions</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="h-3 w-3" /> Synchronized
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-zinc-300">Production Questionnaire Feedback Log</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="h-3 w-3" /> Structured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Educational Guides */}
      <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Educational Knowledge Base
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                Latest Google Play Publishing Guides
              </h2>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Browse all developer guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <article
                key={guide.slug}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <span className="rounded bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors leading-snug">
                    <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {guide.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Read complete playbook &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust, Integrity & Policy Standard */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Our Developer Commitment
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
                  No Shortcuts. No Fake Metrics. Legitimate Compliance.
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We believe in upholding developer integrity. We never fabricate reviews, deploy automated emulator farms, or promise &ldquo;guaranteed 100% approval&rdquo; (which Google strictly prohibits). Our value lies in rigorous technical auditing, genuine tester feedback collection, and ensuring your app satisfies every legitimate policy requirement.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/40">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Real Devices & Real People</span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-800/80 dark:text-emerald-400/80">
                    Active opt-in testers providing genuine user telemetry and bug reports.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-zinc-200">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Zero Policy Infringements</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Full alignment with Google Play Developer Distribution Agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Intake CTA */}
      <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Ready to Prepare Your App for Google Play Release?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Whether you need closed testing coordination, production questionnaire guidance, or rejection recovery, we are here to support your Android launch.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-500 px-8 py-6 text-base font-semibold shadow-md"
              >
                Schedule Publishing Consultation
              </Button>
            </Link>
            <Link href="/faq">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 py-6 text-base font-medium"
              >
                Read Publishing FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
