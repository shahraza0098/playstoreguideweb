import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LEGAL_CONFIG } from "@/data/legal-config";
import { LegalReviewNotice } from "@/components/legal/LegalReviewNotice";

export const metadata: Metadata = constructMetadata({
  title: "Refund Policy - Advisory Services & Testing Engagements",
  description:
    "Review PlayStoreGuide's clear, transparent refund policy for closed testing coordination, Play Console setup advisory, and pre-launch compliance audits.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Refund Policy", url: "/refund-policy" },
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
            <li className="font-semibold text-foreground">Refund Policy</li>
          </ol>
        </nav>

        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Customer Protections
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Refund Policy
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          Last Substantively Updated: {LEGAL_CONFIG.lastUpdatedDate} • Version 1.0 (Draft)
        </p>

        {/* Legal Review Callout */}
        <div className="mt-6">
          <LegalReviewNotice documentType="Refund Policy" />
        </div>

        {/* Essential Principle Box */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5 my-8 space-y-3">
          <div className="flex items-start gap-3">
            <RotateCcw className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-foreground space-y-1">
              <p className="font-bold">Transparent Service-Based Refund Principles</p>
              <p className="text-muted-foreground leading-relaxed">
                PlayStoreGuide provides custom technical consultancy, manual policy audits, and verified human tester coordination. Because human resources and physical testing cohorts are committed upon kickoff, refunds are governed by milestones and documented service performance rather than unilateral store review decisions made independently by Google LLC.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="mt-8 space-y-10 text-sm text-muted-foreground leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. Pre-Commencement Cancellations
            </h2>
            <p>
              If you request cancellation of a scheduled advisory service <strong>prior to the commencement of work</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Full Refund:</strong> If cancellation is requested before we mobilize human testers or initiate technical audit analysis, you are entitled to a 100% refund of fees paid, less third-party payment processing fees (typically 3–5% charged by {LEGAL_CONFIG.paymentProcessors.join(", ")} which are unrecoverable).
              </li>
              <li>
                <strong className="text-foreground">Notice Requirement:</strong> Cancellation requests must be submitted in writing to{" "}
                <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-primary underline">
                  {LEGAL_CONFIG.supportEmail}
                </a>{" "}
                from the email address associated with your service invoice.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. Closed Testing Cohort Engagements (14-Day Tracks)
            </h2>
            <p>
              Closed testing coordination involves onboarding, vetting, and managing at least 20 active Android testers on real hardware over 14 continuous days:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Cancellation During Active Testing:</strong> If you choose to terminate testing after testers have accepted your Google Play Console opt-in invite and begun testing, costs for tester compensation and daily monitoring have already been committed. In such cases, refunds are evaluated strictly on a pro-rata basis for unperformed days or converted into a service credit toward future releases.
              </li>
              <li>
                <strong className="text-foreground">Cohort Performance Remedy:</strong> If your active opted-in tester count dips below the required 20-tester minimum solely due to PlayStoreGuide&rsquo;s operational fault, and Google resets your consecutive day counter, <strong>we will replenish the cohort and restart the 14-day test window at zero additional cost to you</strong>. If we are unable to supply the required cohort, you are entitled to a full refund for that testing track.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" /> 3. Why Google Review Decisions Are NOT Grounds for Refund
            </h2>
            <p className="font-semibold text-foreground">
              A rejection, delay, or denial of production access by Google LLC does not entitle the client to a refund.
            </p>
            <p>
              Google operates as an independent third party with complete autonomy over its store policies, security verifications, and human review rubrics. Our advisory deliverable consists of:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Supplying genuine human testers meeting the 20-tester, 14-day prerequisite.</li>
              <li>Compiling authentic, qualitative feedback logs and crash telemetry analysis.</li>
              <li>Auditing questionnaire answers and technical compliance against official guidelines.</li>
            </ul>
            <p className="pt-1">
              Because our deliverable is the professional execution of the testing cohort and compliance audit, we cannot guarantee Google&rsquo;s internal outcome. If your application is rejected due to underlying app code issues or pre-existing policy strikes, our team will provide a remediation analysis, but fees for completed testing and audit work remain non-refundable.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              4. Deliverable-Based Audit &amp; Advisory Services
            </h2>
            <p>
              For one-time advisory deliverables (such as Google Play Console Setup Audits, App Rejection Diagnosis, or Store Listing Copywriting):
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Once the custom audit dossier, appeal brief, or metadata spec sheet has been delivered to your email, the advisory service is deemed fully executed and is non-refundable.
              </li>
              <li>
                If you believe an analysis does not address the scope agreed upon in your invoice, you may request revisions within seven (7) business days of delivery.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              5. Refund Request Workflow &amp; Timelines
            </h2>
            <p>To request a refund under the eligible terms outlined above:</p>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Send an email to <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-primary underline">{LEGAL_CONFIG.supportEmail}</a> with the subject &ldquo;Refund Request - [Invoice Number]&rdquo;.</li>
              <li>Detail your application name, package ID, date of invoice, and the specific contractual ground for your request.</li>
              <li>Our billing and technical team will review the timeline and track logs within three (3) business days.</li>
              <li>If approved, refunds will be credited back to the original payment method ({LEGAL_CONFIG.paymentProcessors.join(", ")}) within five to ten (5–10) business days, subject to your financial institution&rsquo;s processing speed.</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              6. Governing Law &amp; Inquiries
            </h2>
            <p>
              This Refund Policy is governed by the laws of{" "}
              <strong className="text-foreground">{LEGAL_CONFIG.legalJurisdiction}</strong>. For any questions regarding invoice terms, milestone payments, or refund status:
            </p>
            <div className="rounded-lg border border-border bg-card p-4 space-y-1.5 text-xs text-muted-foreground">
              <p><strong className="text-foreground">Business Entity:</strong> {LEGAL_CONFIG.legalEntityName}</p>
              <p><strong className="text-foreground">Registration No.:</strong> {LEGAL_CONFIG.businessRegistrationNumber}</p>
              <p><strong className="text-foreground">Official Address:</strong> {LEGAL_CONFIG.physicalAddress}</p>
              <p><strong className="text-foreground">Billing Support:</strong> <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-primary hover:underline">{LEGAL_CONFIG.supportEmail}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
