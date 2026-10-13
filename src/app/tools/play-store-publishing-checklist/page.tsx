import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldAlert, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import { PublishingChecklist } from "@/components/tools/PublishingChecklist";
import { ToolEnquiryCTA } from "@/components/tools/ToolEnquiryCTA";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = constructMetadata({
  title: "Interactive Google Play App Publishing Checklist & Pre-Launch Audit",
  description:
    "Free interactive checklist for Android developers. Audit store listing assets, App Bundles, Target API 34 compliance, 20-tester closed testing, Data Safety declarations, and staged rollout readiness.",
  path: "/tools/play-store-publishing-checklist",
  keywords: [
    "Google Play publishing checklist",
    "Android app release checklist",
    "Play Console pre-launch audit",
    "Google Play Store submission requirements",
    "Android App Bundle publishing checklist",
  ],
});

const faqs = [
  {
    q: "How long does Google Play usually take to review an initial app submission?",
    a: "Initial submissions for new applications or newly created developer accounts typically take between 3 to 7 business days for full policy and automated security evaluation. In some cases involving sensitive permissions or high-risk categories (finance, health), reviews may extend up to 14 days.",
  },
  {
    q: "What is the single most common cause of initial submission rejections?",
    a: "The most frequent rejection triggers are: 1) Inaccurate Data Safety form declarations (omitting third-party SDK analytics or device IDs); 2) Missing or broken app access test credentials (preventing Google reviewers from testing login-gated features); and 3) Broken functionality or immediate crashes on physical review test devices.",
  },
  {
    q: "Can I publish directly to Production without testing tracks?",
    a: "Organization developer accounts can technically release directly to production, although internal and closed testing is strongly advised. Personal developer accounts registered after November 13, 2023 cannot publish directly to production until they complete a mandatory 14-day closed test with at least 20 opted-in testers.",
  },
  {
    q: "What is a Staged Rollout and should I use it?",
    a: "A Staged Rollout releases your update to a percentage of users (e.g. 10%, then 20%, then 50%, then 100%) rather than all users at once. This prevents a critical undetected bug or crash regression from impacting your entire install base simultaneously, protecting your store rating.",
  },
  {
    q: "Do I need tablet screenshots if my app only targets phones?",
    a: "If your app's manifest permits tablet screen sizes or if you check tablet distribution in Play Console, Google requires high-quality 7-inch and 10-inch screenshots to feature your app on tablet search results. If you only target phones, 4 phone screenshots satisfy the minimum store listing requirement.",
  },
];

export default function PlayStorePublishingChecklistPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "Publishing Checklist", url: "/tools/play-store-publishing-checklist" },
  ]);

  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Interactive Google Play App Publishing Checklist",
    description: "Interactive pre-launch audit tool covering 8 categories of Google Play Store submission requirements.",
    url: `${SITE_URL}/tools/play-store-publishing-checklist`,
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
            <li className="font-semibold text-foreground">Publishing Checklist</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-6 items-center rounded-md bg-primary/10 px-2.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              Interactive Checklist
            </span>
            <Badge variant="outline" className="text-[11px]">
              8 Core Categories
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Google Play App Publishing Checklist
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A comprehensive, interactive pre-submission audit for Android developers. Verify store listing assets, App Bundle technical criteria, closed testing cohorts, Data Safety declarations, and rollout readiness before clicking submit.
          </p>
        </div>

        {/* Interactive Checklist Component */}
        <PublishingChecklist />

        {/* Server-Rendered Guide & Detailed Documentation */}
        <div className="mt-20 pt-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            {/* Section 1: Pre-Launch Philosophy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Why a Structured Pre-Launch Checklist Matters
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Publishing an Android app to Google Play is no longer a simple file upload. Today, Play Console enforces intricate technical compliance rules, automated malware scanning, strict metadata character limits, and legal user privacy declarations.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A single oversight—such as omitting a test username in the App Access tab, or failing to declare an advertising identifier collected by AdMob—can result in rejection strikes, review delays of several weeks, or even account suspension. Working through this checklist systematically safeguards your release timeline.
              </p>
            </section>

            {/* Section 2: Critical Failure Points */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Top 4 Rejection Traps to Double-Check
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl border border-border bg-card space-y-2">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <span className="text-rose-600 font-bold">1.</span> Target SDK Obsoletion
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Google automatically blocks any submission targeting older Android API versions. Ensure your build compiles with <code>targetSdkVersion = 34</code> (Android 14) or newer.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card space-y-2">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <span className="text-rose-600 font-bold">2.</span> App Access Gatekeeping
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    If your app has login, subscription, or paywalled screens and you fail to provide working credentials under <em>App Content &gt; App access</em>, reviewers will immediately reject for broken functionality.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card space-y-2">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <span className="text-rose-600 font-bold">3.</span> Privacy URL 404s
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your Privacy Policy URL must be a live HTTPS page that loads without geo-blocking or login requirements. Broken links trigger automated policy takedowns.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card space-y-2">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                    <span className="text-rose-600 font-bold">4.</span> Unexplained Permissions
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Sensitive permissions like <code>ACCESS_BACKGROUND_LOCATION</code>, <code>CAMERA</code>, or <code>READ_MEDIA_IMAGES</code> must have prominent in-app disclosure dialogs before being requested.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Official References */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Official Google Play Developer References
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Consult Google&rsquo;s official developer documentation for the latest policy updates:
              </p>
              <div className="space-y-2.5">
                <a
                  href="https://play.google.com/about/developer-content-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors text-xs"
                >
                  <span className="font-medium text-foreground">
                    Google Play Developer Program Policy Center
                  </span>
                  <ExternalLink className="h-4 w-4 text-primary shrink-0 ml-2" />
                </a>

                <a
                  href="https://support.google.com/googleplay/android-developer/answer/9859152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors text-xs"
                >
                  <span className="font-medium text-foreground">
                    Google Play Console Help: Prepare your app for review
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

          {/* Right Sidebar: Limitations & Services */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tool Disclaimer */}
            <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/60 dark:border-amber-900/50 dark:bg-amber-950/20 text-xs space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200">
                <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Tool Limitations</span>
              </div>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                This checklist is an independent developer self-audit utility. It cannot independently connect to your Play Console or guarantee that your build will be accepted by Google Play reviewers.
              </p>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Always review your live submission warnings inside the Play Console Release Dashboard before initiating a production rollout.
              </p>
            </div>

            {/* Related Tools */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-4 text-xs">
              <span className="font-bold uppercase tracking-wider text-primary text-[11px]">
                Related Developer Tools
              </span>

              <div className="space-y-3">
                <Link
                  href="/tools/closed-testing-planner"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    Closed Testing Timeline Planner &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Plan milestone dates for 20 testers across the 14-day window.
                  </span>
                </Link>

                <Link
                  href="/tools/app-privacy-policy-checklist"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    Privacy Policy Checklist &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Audit collected data, retention policies, and SDK disclosures.
                  </span>
                </Link>

                <Link
                  href="/blog/android-app-publishing-checklist-2026"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    In-Depth Publishing Playbook &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Full technical walkthrough of every Play Console release step.
                  </span>
                </Link>
              </div>
            </div>

            {/* Service CTA */}
            <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 space-y-4 text-xs">
              <span className="font-bold uppercase tracking-wider text-primary text-[11px]">
                Expert Publishing Assistance
              </span>
              <h3 className="font-bold text-base text-foreground leading-snug">
                Need an End-to-End Pre-Launch Audit?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Android publishing specialists perform comprehensive pre-submission audits, verify Target SDK compliance, test App Access credentials, and guide your App Bundle through Google review without delays.
              </p>
              <Link href="/services/app-publishing-assistance" className="block pt-1">
                <Badge variant="default" className="w-full justify-center py-2 text-xs font-semibold">
                  Publishing Assistance Service &rarr;
                </Badge>
              </Link>
            </div>
          </div>
        </div>

        {/* Lead Generation Form */}
        <ToolEnquiryCTA toolName="Play Store Publishing Checklist" defaultService="app-publishing-assistance" />
      </div>
    </div>
  );
}
