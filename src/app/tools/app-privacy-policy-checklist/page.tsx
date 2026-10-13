import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import { PrivacyPolicyChecklist } from "@/components/tools/PrivacyPolicyChecklist";
import { ToolEnquiryCTA } from "@/components/tools/ToolEnquiryCTA";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = constructMetadata({
  title: "Android App Privacy Policy Checklist & Data Safety Preparation Tool",
  description:
    "Free interactive audit tool for Android developers. Verify user data types, third-party SDK disclosures (AdMob, Firebase), account deletion URLs, and Google Play Data Safety compliance.",
  path: "/tools/app-privacy-policy-checklist",
  keywords: [
    "Android app privacy policy checklist",
    "Google Play Data Safety audit",
    "Google Play account deletion URL requirement",
    "AdMob privacy policy disclosure Android",
    "Android SDK data sharing audit",
  ],
});

const faqs = [
  {
    q: "Why do privacy policy rejections occur on Google Play?",
    a: "Rejections primarily happen when: 1) The Privacy Policy URL returns a 404, requires a login to view, or is not HTTPS; 2) The policy fails to name the specific app or developer entity; 3) The Data Safety form omits data types that Google's automated scanners discover inside embedded SDKs (such as AdMob collecting Advertising IDs); or 4) The app lacks a dedicated web link for account deletion.",
  },
  {
    q: "What is Google Play's mandatory Account Deletion requirement?",
    a: "If your app allows users to create an account, you must provide an accessible option within the app and a dedicated, publicly accessible web link (URL) where users can request the deletion of their account and associated data without reinstalling the application. You must submit this URL under App Content > Data safety in Play Console.",
  },
  {
    q: "Does embedding Firebase or AdMob mean my app 'shares' data?",
    a: "Yes. From Google Play's regulatory perspective, any third-party library integrated into your APK/AAB that transmits device identifiers, approximate location, or crash telemetry off-device constitutes data collection and sharing that must be disclosed in your Data Safety section.",
  },
  {
    q: "Can I use a generic free privacy policy generator?",
    a: "Generic templates are acceptable as a starting baseline, but they almost always omit the exact data points collected by your specific third-party SDK dependencies. Google Play reviewers compare your declared Data Safety answers against your APK's manifest permissions and binary libraries; mismatches trigger automated policy warnings.",
  },
  {
    q: "Does this checklist replace legal counsel?",
    a: "No. This tool is an educational self-audit designed to help developers identify their technical data practices. Privacy laws (such as the EU's GDPR, California's CCPA/CPRA, and Brazil's LGPD) have distinct statutory obligations that require qualified legal advice.",
  },
];

export default function AppPrivacyPolicyChecklistPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "Privacy Policy Checklist", url: "/tools/app-privacy-policy-checklist" },
  ]);

  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Android App Privacy Policy Preparation Checklist",
    description: "Interactive data audit tool helping developers organize privacy disclosures and Data Safety declarations for Google Play submission.",
    url: `${SITE_URL}/tools/app-privacy-policy-checklist`,
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
            <li className="font-semibold text-foreground">Privacy Policy Checklist</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-6 items-center rounded-md bg-primary/10 px-2.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              Compliance Diagnostic
            </span>
            <Badge variant="outline" className="text-[11px]">
              Data Safety Aligned
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Android App Privacy Policy Checklist
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Audit the information you need to disclose before submitting your privacy policy and Google Play Data Safety form. Verify collected user data types, third-party SDK sharing (AdMob, Firebase), data retention, account deletion links, and sensitive Android permissions.
          </p>
        </div>

        {/* Interactive Checklist Component */}
        <PrivacyPolicyChecklist />

        {/* Server-Rendered Guide & Detailed Documentation */}
        <div className="mt-20 pt-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            {/* Section 1: The Data Safety Synchronization Rule */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                How Google Play Reviews App Privacy Policies
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Google Play policy enforcement utilizes both static analysis scanners and human policy reviewers. When you upload an App Bundle, Google scans your manifest permissions and all compiled bytecode for embedded software development kits (SDKs).
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If the automated scanner detects an advertising SDK (like Google Mobile Ads or Unity Ads) or an analytics tracker, but your Play Console <strong>Data Safety form</strong> claims your app collects &ldquo;No user data,&rdquo; your submission is flagged immediately for an Inaccurate Data Safety Declaration violation.
              </p>
            </section>

            {/* Section 2: Account Deletion URL Breakdown */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Google Play&rsquo;s Mandatory Account Deletion Requirement
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Since December 7, 2023, Google Play requires all apps that enable user account creation to provide:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                    An In-App Deletion Pathway
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Users must be able to easily locate an account deletion option within the app&rsquo;s settings or profile screen.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                    A Public Web-Based Deletion Link (URL)
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    A publicly accessible web page where users who have uninstalled your app can submit an account deletion request without being forced to reinstall your mobile application.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Official References */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Official Google Play Policy References
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Review official developer documentation to verify current enforcement policies:
              </p>
              <div className="space-y-2.5">
                <a
                  href="https://support.google.com/googleplay/android-developer/answer/10787469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors text-xs"
                >
                  <span className="font-medium text-foreground">
                    Google Play Console Help: Provide information for Google Play&rsquo;s Data safety section
                  </span>
                  <ExternalLink className="h-4 w-4 text-primary shrink-0 ml-2" />
                </a>

                <a
                  href="https://support.google.com/googleplay/android-developer/answer/13327920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors text-xs"
                >
                  <span className="font-medium text-foreground">
                    Google Play Console Help: Understanding app account deletion requirements
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

          {/* Right Sidebar: Limitations & Advice */}
          <div className="lg:col-span-4 space-y-6">
            {/* Legal Notice Box */}
            <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/60 dark:border-amber-900/50 dark:bg-amber-950/20 text-xs space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Legal Advice Disclaimer</span>
              </div>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                This checklist is strictly an educational tool to help Android developers organize disclosures for Google Play. It does not constitute formal legal counsel.
              </p>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Consult a qualified technology attorney to ensure your privacy policy complies with regional privacy regulations in every country where you distribute your app.
              </p>
            </div>

            {/* Related Tools */}
            <div className="p-5 rounded-2xl border border-border bg-card space-y-4 text-xs">
              <span className="font-bold uppercase tracking-wider text-primary text-[11px]">
                Related Tools &amp; Guides
              </span>

              <div className="space-y-3">
                <Link
                  href="/tools/play-store-publishing-checklist"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    App Publishing Checklist &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    End-to-end audit for store listing, app bundle, and staged rollouts.
                  </span>
                </Link>

                <Link
                  href="/tools/closed-testing-planner"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    Closed Testing Timeline Planner &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Schedule your 20-tester, 14-day continuous opt-in milestones.
                  </span>
                </Link>

                <Link
                  href="/blog/common-google-play-app-rejection-reasons"
                  className="block p-3 rounded-lg border border-border/80 hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground block">
                    Common Rejection Reasons Guide &rarr;
                  </span>
                  <span className="text-muted-foreground text-[11px] block mt-0.5">
                    Analyze user data violations and account suspension triggers.
                  </span>
                </Link>
              </div>
            </div>

            {/* Service CTA */}
            <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 space-y-4 text-xs">
              <span className="font-bold uppercase tracking-wider text-primary text-[11px]">
                Policy Troubleshooting
              </span>
              <h3 className="font-bold text-base text-foreground leading-snug">
                Facing a Data Safety or Privacy Policy Rejection?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If Google Play flagged your app for Inaccurate Data Safety Declarations or a broken Privacy Policy URL, our policy specialists can audit your SDK dependencies and formulate an appeal or compliance plan.
              </p>
              <Link href="/services/app-rejection-help" className="block pt-1">
                <Badge variant="default" className="w-full justify-center py-2 text-xs font-semibold">
                  Rejection Recovery Assistance &rarr;
                </Badge>
              </Link>
            </div>
          </div>
        </div>

        {/* Lead Generation Section */}
        <ToolEnquiryCTA toolName="Privacy Policy Preparation Checklist" defaultService="app-rejection-help" />
      </div>
    </div>
  );
}
