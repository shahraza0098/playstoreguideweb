import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { AlertTriangle, Scale, Lock } from "lucide-react";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LEGAL_CONFIG } from "@/data/legal-config";
import { LegalReviewNotice } from "@/components/legal/LegalReviewNotice";

export const metadata: Metadata = constructMetadata({
  title: "Terms and Conditions - Advisory Engagement & Service Boundaries",
  description:
    "Review the Terms and Conditions governing PlayStoreGuide's independent Android publishing advisory, closed testing coordination, and educational resources.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms and Conditions", url: "/terms-and-conditions" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">Terms and Conditions</li>
          </ol>
        </nav>

        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Legal Agreement
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          Last Substantively Updated: {LEGAL_CONFIG.lastUpdatedDate} • Version 1.0
        </p>

        {/* Legal Review Callout */}
        <div className="mt-6">
          <LegalReviewNotice documentType="Terms and Conditions" />
        </div>

        {/* Primary Trust & Boundaries Callout */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5 my-8 space-y-3">
          <div className="flex items-start gap-3">
            <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-foreground space-y-1">
              <p className="font-bold">Essential Service Scope &amp; Independence Principles</p>
              <p className="text-muted-foreground leading-relaxed">
                PlayStoreGuide is an <strong>independent technical consultancy</strong>. We are not Google LLC, nor are we affiliated with, endorsed by, or operated by Google. Google&rsquo;s internal review team retains sole, unreviewable discretion to approve, reject, or suspend developer accounts and applications. We provide technical readiness, testing cohorts, and compliance guidance; we do not sell or guarantee Google Play approvals.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="mt-8 space-y-10 text-sm text-muted-foreground leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website at{" "}
              <Link href="/" className="text-primary underline hover:text-primary/80">
                {LEGAL_CONFIG.siteUrl}
              </Link>
              , submitting an enquiry form, purchasing advisory services, or utilizing our published checklists and calculators, you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;) entered into with{" "}
              <strong className="text-foreground">{LEGAL_CONFIG.legalEntityName}</strong> (&ldquo;PlayStoreGuide&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              If you do not agree with any part of these Terms, you must immediately discontinue use of our website and services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. Nature of Advisory Services
            </h2>
            <p>
              PlayStoreGuide provides professional technical advisory, workflow coordination, and educational guidance for Android developers submitting applications to the Google Play Console. Our services may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Facilitating verified human tester cohorts for 14-day closed testing tracks (20-tester rule).</li>
              <li>Synthesizing qualitative tester feedback logs and Android Vitals telemetry into structured evidence dossiers.</li>
              <li>Reviewing responses to the Google Play Production Access questionnaire.</li>
              <li>Pre-submission technical audits (Target SDK compliance, manifest permissions, Data Safety synchronization).</li>
              <li>Analyzing rejection notices and preparing formal policy appeal letters.</li>
              <li>Store listing metadata optimization (ASO) adhering to Google metadata guidelines.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" /> 3. No Guarantees of Google Approval or Production Access
            </h2>
            <p className="font-semibold text-foreground">
              Under no circumstances does PlayStoreGuide promise, warranty, or guarantee that Google LLC will approve your application for production access, verify your developer account, or accept any formal appeal.
            </p>
            <p>
              Google operates an autonomous, confidential review process combining automated security heuristics and human policy evaluators. Our role is strictly to help you maximize compliance, provide verified testing cohorts, and compile persuasive documentation. Any third party offering &ldquo;guaranteed Google Play approvals&rdquo; violates policy norms and consumer protection standards.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" /> 4. Customer Responsibilities &amp; Account Protection
            </h2>
            <p>To preserve developer security and ensure ethical operations:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Never Share Passwords:</strong> You agree <strong>never</strong> to provide PlayStoreGuide with your Google Account master password, developer account sign-in credentials, or two-factor authentication codes.
              </li>
              <li>
                <strong className="text-foreground">Track Invite Setup:</strong> Closed testing coordination is conducted strictly by sharing tester email lists or opt-in URLs within your Google Play Console closed testing track. You retain full administrative control of your account at all times.
              </li>
              <li>
                <strong className="text-foreground">Content Legality:</strong> You warrant that your application does not contain malicious code, malware, spyware, unauthorized copyrighted material, fraudulent schemes, or content that violates applicable laws or Google Play Developer Program Policies.
              </li>
              <li>
                <strong className="text-foreground">Testing Responsiveness:</strong> For closed testing cohorts, you agree to keep your test track active and promptly update your build if testers encounter blocking crashes or regressions.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              5. Intellectual Property Rights
            </h2>
            <p>
              <strong className="text-foreground">Client Intellectual Property:</strong> You retain 100% ownership and all intellectual property rights in your application source code, binaries, logos, trademarks, and proprietary data submitted for review. Nothing in these Terms transfers any ownership rights in your application to PlayStoreGuide.
            </p>
            <p>
              <strong className="text-foreground">PlayStoreGuide Content:</strong> All content, checklists, calculators, guides, articles, and code templates published on PlayStoreGuide.com are the intellectual property of PlayStoreGuide and protected by applicable copyright and trademark laws. You may not republish, scrape, or resell our materials without express written authorization.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              6. Quotations, Pricing &amp; Payment Terms
            </h2>
            <p>
              Because app architectures, tester cohort sizes, hardware prerequisites, and policy histories differ widely, advisory engagements are quoted on an <strong>enquiry-based model</strong> following project intake:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All quotations are provided in writing and remain valid for fourteen (14) calendar days unless otherwise stated.</li>
              <li>Invoices are issued via verified payment processors ({LEGAL_CONFIG.paymentProcessors.join(", ")}) and must be settled in full or according to agreed milestone schedules prior to service commencement.</li>
              <li>Quotations detail all deliverables, testing cohorts, and agreed milestones. Any out-of-scope work requires a separate written agreement.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              7. Cancellation &amp; Refund Policy
            </h2>
            <p>
              Our cancellation and refund standards are detailed comprehensively in our standalone{" "}
              <Link href="/refund-policy" className="text-primary underline hover:text-primary/80 font-medium">
                Refund Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
            <p>
              In summary, cancellations requested prior to tester recruitment or audit initiation are eligible for a full refund minus unrecoverable payment processing fees. Once active testing cohorts have been mobilized or diagnostic reports delivered, refunds are evaluated pro-rata or strictly upon documented failure of PlayStoreGuide to perform agreed deliverables. A negative review outcome from Google does not constitute grounds for a refund.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law in{" "}
              <span className="font-semibold text-foreground">{LEGAL_CONFIG.legalJurisdiction}</span>:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                PlayStoreGuide, its directors, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, app store revenues, goodwill, or business interruption arising from or related to your use of our services or website.
              </li>
              <li>
                PlayStoreGuide shall not be liable for actions taken by Google LLC, including but not limited to app rejections, developer account terminations, policy warnings, or algorithm demotions.
              </li>
              <li>
                In no event shall PlayStoreGuide&rsquo;s aggregate liability arising out of or related to an advisory engagement exceed the total fees actually paid by you to PlayStoreGuide for the specific service giving rise to liability.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              9. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless PlayStoreGuide and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable attorneys&rsquo; fees) arising out of your violation of these Terms, your application&rsquo;s violation of third-party intellectual property rights, or your application&rsquo;s breach of applicable laws or Google developer policies.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              10. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of{" "}
              <strong className="text-foreground">{LEGAL_CONFIG.legalJurisdiction}</strong>, without giving effect to any choice of law or conflict of law principles.
            </p>
            <p>
              The parties agree to attempt in good faith to resolve any dispute through informal negotiation for at least thirty (30) business days before initiating formal legal proceedings.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              11. Contact Details
            </h2>
            <p>
              For legal notices, contract questions, or formal communications regarding these Terms:
            </p>
            <div className="rounded-lg border border-border bg-card p-4 space-y-1.5 text-xs text-muted-foreground">
              <p><strong className="text-foreground">Legal Entity:</strong> {LEGAL_CONFIG.legalEntityName}</p>
              <p><strong className="text-foreground">Company Registration:</strong> {LEGAL_CONFIG.businessRegistrationNumber}</p>
              <p><strong className="text-foreground">Official Address:</strong> {LEGAL_CONFIG.physicalAddress}</p>
              <p><strong className="text-foreground">Legal Contact:</strong> <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-primary hover:underline">{LEGAL_CONFIG.supportEmail}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
