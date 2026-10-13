import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldAlert, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import { ClosedTestingPlanner } from "@/components/tools/ClosedTestingPlanner";
import { ToolEnquiryCTA } from "@/components/tools/ToolEnquiryCTA";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Closed Testing Timeline Planner & Calculator",
  description:
    "Free interactive planning tool for Android developers. Calculate your 20-tester, 14-day closed testing schedule, opt-in buffers, questionnaire timeline, and production application dates.",
  path: "/tools/closed-testing-planner",
  keywords: [
    "Google Play closed testing calculator",
    "20 testers 14 days timeline planner",
    "Android closed testing schedule",
    "Google Play production access timeline",
    "Play Console testing date estimator",
  ],
});

const faqs = [
  {
    q: "Does Google's 14-day clock start when I upload the closed test build?",
    a: "No. The 14-day clock does not start upon upload or track approval. It begins strictly when at least 20 unique testers have accepted your opt-in invitation and installed the application. You can verify whether the task is actively counting days under the 'Dashboard' tab in Google Play Console.",
  },
  {
    q: "What happens if an opted-in tester uninstalls or leaves the test group?",
    a: "If your active opted-in count dips below 20 at any point during the 14 days (for example, dropping to 19 on Day 12), Google's automated monitoring system will halt the consecutive counter and reset the 14-day requirement back to Day 1. This is why we strongly recommend recruiting 25–30 testers to maintain a safety buffer.",
  },
  {
    q: "Is completing 14 days enough to guarantee production access approval?",
    a: "No. The 14-day requirement is a prerequisite to unlock the 'Apply for Production' button, not an automatic pass. Google's review team manually evaluates your answers to the three mandatory questionnaire sections, your tester feedback telemetry, crash reports, and app iterations.",
  },
  {
    q: "Do organization developer accounts need 20 testers for 14 days?",
    a: "As of current Google Play policy, the mandatory 20-tester, 14-day requirement applies to personal developer accounts created after November 13, 2023. Organization accounts with verified D-U-N-S numbers are exempt from the mandatory 20-tester rule, although conducting a closed test is still recommended.",
  },
  {
    q: "Can I update my app bundle while the 14-day test is in progress?",
    a: "Yes. In fact, Google explicitly looks for active iteration and bug-fixing during testing. Releasing updates to your closed track while testing demonstrates genuine developer engagement and significantly strengthens your production access application.",
  },
];

export default function ClosedTestingPlannerPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "Closed Testing Timeline Planner", url: "/tools/closed-testing-planner" },
  ]);

  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Google Play Closed Testing Timeline Planner",
    description: "Interactive scheduling calculator for Android developers planning their 14-day, 20-tester closed testing tracks.",
    url: `${SITE_URL}/tools/closed-testing-planner`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={webAppSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/tools" className="hover:text-primary transition-colors">
                Tools
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">Closed Testing Planner</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-6 items-center rounded-md bg-primary/10 px-2.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              Interactive Utility
            </span>
            <Badge variant="outline" className="text-[11px]">
              Policy Version: 2026 Compatible
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Google Play Closed Testing Timeline Planner
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Calculate your milestone dates for the 20-tester, 14-day closed testing cohort. Incorporate Google review lead times, opt-in buffers, and production access evaluation windows into your Android release schedule.
          </p>
        </div>

        {/* Interactive Calculator Component */}
        <ClosedTestingPlanner />

        {/* Server-Rendered Editorial Instructions & Guidance */}
        <div className="mt-20 pt-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            {/* Section 1: Methodology */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                How the Closed Testing Schedule is Calculated
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Many developers assume a closed testing track requires exactly 14 calendar days from start to finish. In practice, release schedules require accounting for three distinct phases before and after the testing window:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                    Track Review Buffer (1–3 Business Days)
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    When you first upload your App Bundle to a closed testing track, Google runs automated scanners (malware, policy, Target API compliance) and often manual human checks before the release is approved for distribution.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                    Opt-In &amp; Download Ramp-Up (2–5 Days)
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Sharing opt-in links does not immediately start the 14-day counter. Google Play only begins tracking once <strong>20 unique Google accounts</strong> have accepted your web or Android invite link and downloaded the app onto compatible physical Android devices.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                    Dropout Prevention &amp; Safety Padding (+2 to +4 Days)
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    If any tester leaves the cohort and your active participant count drops to 19, Google’s automated tracker halts. Adding a 2–4 day safety padding ensures your 14-day task reliably registers as complete in Play Console.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Account Differences */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Personal vs. Organization Account Requirements
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Google’s testing policy enforces fundamentally different hurdles depending on your account registration category:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl border border-border bg-card space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground text-sm">Personal Developer Account</h3>
                    <Badge variant="default" className="text-[10px]">Strict Enforcement</Badge>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                    <li>Mandatory minimum: 20 opted-in testers</li>
                    <li>Mandatory continuous duration: 14 consecutive days</li>
                    <li>Mandatory 3-part production access questionnaire</li>
                    <li>Subject to review refusal if engagement is zero</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground text-sm">Organization Developer Account</h3>
                    <Badge variant="outline" className="text-[10px]">Exempt from 20-Tester Rule</Badge>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                    <li>Requires official D-U-N-S number verification</li>
                    <li>Direct access to production track without 20 testers</li>
                    <li>Closed testing remains optional but recommended</li>
                    <li>Subject to standard app content review</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Official Documentation & Policy Sources */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Official Google Play Documentation &amp; References
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                This planning tool implements guidelines based on official Google Play developer support resources:
              </p>
              <div className="space-y-2.5">
                <a
                  href="https://support.google.com/googleplay/android-developer/answer/14151465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors text-xs"
                >
                  <span className="font-medium text-foreground">
                    Google Play Console Help: Testing requirements for newly created personal developer accounts
                  </span>
                  <ExternalLink className="h-4 w-4 text-primary shrink-0 ml-2" />
                </a>

                <a
                  href="https://support.google.com/googleplay/android-developer/answer/9845334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors text-xs"
                >
                  <span className="font-medium text-foreground">
                    Google Play Console Help: Set up an open, closed, or internal test
                  </span>
                  <ExternalLink className="h-4 w-4 text-primary shrink-0 ml-2" />
                </a>
              </div>
            </section>

            {/* Section 4: FAQs */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-border bg-card space-y-2">
                    <h3 className="font-bold text-foreground text-sm sm:text-base">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Related Resources & Limitations */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tool Limitations Notice */}
            <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/60 dark:border-amber-900/50 dark:bg-amber-950/20 text-xs space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200">
                <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Tool Limitations &amp; Disclaimers</span>
              </div>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                This timeline planner is an independent planning model. It does not interface with your Play Console API and cannot guarantee that Google will approve your production application.
              </p>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Always monitor your live Google Play Console Dashboard to confirm that your 14-day counter has started and remains uninterrupted.
              </p>
            </div>

            {/* Related Tools & Playbooks */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-4 text-xs">
              <span className="font-bold uppercase tracking-wider text-primary text-[11px]">
                Related Resources
              </span>

              <div className="space-y-3">
                <Link
                  href="/blog/google-play-closed-testing-requirements-guide"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    The 20-Tester, 14-Day Rule Guide &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Detailed analysis of Google’s opt-in mechanics and review criteria.
                  </span>
                </Link>

                <Link
                  href="/blog/how-to-prepare-for-google-play-production-access"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    Production Access Questionnaire Guide &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Learn how to answer the 3 mandatory questions with real metrics.
                  </span>
                </Link>

                <Link
                  href="/tools/play-store-publishing-checklist"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    App Publishing Checklist Tool &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Pre-launch audit covering store assets, bundles, and policy compliance.
                  </span>
                </Link>
              </div>
            </div>

            {/* Service CTA Card */}
            <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 space-y-4 text-xs">
              <span className="font-bold uppercase tracking-wider text-primary text-[11px]">
                Hands-On Assistance
              </span>
              <h3 className="font-bold text-base text-foreground leading-snug">
                Need Guaranteed Active Testers for Your Cohort?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Don’t risk your 14-day clock resetting due to tester dropout. Our closed testing coordination service connects you with 20+ verified real Android testers who maintain continuous opt-in and provide genuine feedback.
              </p>
              <Link href="/services/closed-testing" className="block pt-1">
                <Badge variant="default" className="w-full justify-center py-2 text-xs font-semibold">
                  Explore Closed Testing Service &rarr;
                </Badge>
              </Link>
            </div>
          </div>
        </div>

        {/* Lead Generation Section */}
        <ToolEnquiryCTA toolName="Closed Testing Timeline Planner" defaultService="closed-testing" />
      </div>
    </div>
  );
}
