import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, EyeOff } from "lucide-react";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LEGAL_CONFIG } from "@/data/legal-config";
import { LegalReviewNotice } from "@/components/legal/LegalReviewNotice";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy - Developer Data Protection & Confidentiality",
  description:
    "Learn how PlayStoreGuide protects Android developer project information, handles consultation inquiries, and adheres to strict data minimization principles.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
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
            <li className="font-semibold text-foreground">Privacy Policy</li>
          </ol>
        </nav>

        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Legal &amp; Data Protection
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          Last Substantively Updated: {LEGAL_CONFIG.lastUpdatedDate} • Version 1.0 (Draft)
        </p>

        {/* Legal Review Callout */}
        <div className="mt-6">
          <LegalReviewNotice documentType="Privacy Policy" />
        </div>

        {/* Core Trust Notice */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5 my-8 flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-foreground space-y-1">
            <p className="font-bold">Our Developer Data Minimization Commitment</p>
            <p className="text-muted-foreground leading-relaxed">
              PlayStoreGuide provides technical advisory services for Android releases. We collect only the minimal data required to evaluate your application&rsquo;s release stage and coordinate testing cohorts. <strong>We will NEVER ask for your Google account password, developer account master credentials, or recovery codes.</strong>
            </p>
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="mt-8 space-y-10 text-sm text-muted-foreground leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. Data Controller Identification
            </h2>
            <p>
              This Privacy Policy describes how{" "}
              <strong className="text-foreground">{LEGAL_CONFIG.legalEntityName}</strong> (operating as &ldquo;PlayStoreGuide&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, and protects personal and technical information when you access our website at{" "}
              <Link href="/" className="text-primary underline hover:text-primary/80">
                {LEGAL_CONFIG.siteUrl}
              </Link>{" "}
              or engage our independent advisory services.
            </p>
            <p>
              If you have any questions regarding this policy or our data handling practices, contact our Data Privacy Lead at{" "}
              <a
                href={`mailto:${LEGAL_CONFIG.privacyEmail}`}
                className="font-medium text-foreground underline hover:text-primary"
              >
                {LEGAL_CONFIG.privacyEmail}
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            <p>We collect information strictly when you voluntarily submit it through our contact forms or service communications:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Contact Details:</strong> Your name, email address, company or studio name, and communication preferences.
              </li>
              <li>
                <strong className="text-foreground">App Release Data:</strong> Application package name (e.g. <code>com.example.app</code>), development framework (Flutter, React Native, Native Kotlin/Java, Unity), Target SDK version, current publishing stage, and rejection notice summaries provided by you.
              </li>
              <li>
                <strong className="text-foreground">Feedback &amp; Telemetry Data:</strong> Tester opt-in email identifiers provided for closed test track distribution, qualitative feedback logs, crash diagnostics, and questionnaire draft notes.
              </li>
              <li>
                <strong className="text-foreground">Technical Log Data:</strong> Standard server logs collected automatically by our hosting platform, including IP address, browser type, referral URL, and timestamps.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <EyeOff className="h-5 w-5 text-primary" /> 3. Information We Explicitly DO NOT Collect
            </h2>
            <p>
              To safeguard developer security and comply with Google Developer Distribution Agreement rules:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No Passwords or Master Credentials:</strong> We never request, process, or store your Google Account password, Google Cloud Console credentials, or two-factor authentication (2FA) recovery keys.
              </li>
              <li>
                <strong>No Account Ownership Transfers:</strong> We do not accept or take over ownership of customer Play Console accounts.
              </li>
              <li>
                <strong>No Financial Credentials:</strong> Payment processing for advisory invoices is handled via secure, PCI-compliant third-party processors ({LEGAL_CONFIG.paymentProcessors.join(", ")}). We never store full credit card numbers or banking secrets on our servers.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              4. How We Use Collected Information
            </h2>
            <p>We process your information exclusively for legitimate business and advisory purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To evaluate your application&rsquo;s release readiness, policy risks, and timeline requirements.</li>
              <li>To coordinate verified human testers for 14-day closed testing tracks via Google Play Console opt-in invite links.</li>
              <li>To provide structured feedback dossiers, questionnaire responses, and appeal recommendations.</li>
              <li>To communicate project milestones, service invoices, and technical follow-ups.</li>
              <li>To protect our website from spam, fraud, and automated scraping abuse.</li>
            </ul>
            <p className="pt-1 font-semibold text-foreground">
              We never sell, rent, lease, or monetize your contact information or application data to advertising brokers or third-party marketing companies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              5. Third-Party Service Providers (Subprocessors)
            </h2>
            <p>
              We engage select third-party service providers who assist in operating our technical infrastructure. These providers process data strictly on our behalf under confidentiality obligations:
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-border">
              <table className="min-w-full divide-y divide-border text-xs">
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="px-4 py-2.5 text-left font-bold text-foreground">
                      Provider Category
                    </th>
                    <th scope="col" className="px-4 py-2.5 text-left font-bold text-foreground">
                      Operational Purpose
                    </th>
                    <th scope="col" className="px-4 py-2.5 text-left font-bold text-foreground">
                      Privacy Documentation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {LEGAL_CONFIG.dataProcessors.map((p) => (
                    <tr key={p.name}>
                      <td className="px-4 py-3 font-semibold text-foreground">{p.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{p.purpose}</td>
                      <td className="px-4 py-3">
                        <a
                          href={p.privacyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Policy Link &rarr;
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              6. Data Confidentiality &amp; Intellectual Property
            </h2>
            <p>
              We treat all unreleased APKs, AABs, test accounts, proprietary feature descriptions, and business logic submitted for audit as strictly confidential information. Our advisory specialists adhere to non-disclosure obligations, and testing cohorts are instructed not to distribute builds outside the designated testing track.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              7. Data Retention
            </h2>
            <p>
              We retain consultation inquiries and project records only as long as necessary to fulfill the requested advisory services and satisfy standard accounting, legal, and tax obligations under the laws of{" "}
              <span className="font-semibold text-foreground">{LEGAL_CONFIG.legalJurisdiction}</span>. Following completion of an advisory engagement, client diagnostic logs and tester feedback records are archived or securely deleted upon request.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              8. Your Privacy Rights
            </h2>
            <p>
              Depending on your jurisdiction (such as GDPR in the European Union / UK or CCPA/CPRA in California), you maintain specific rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Right of Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> Correct inaccurate or incomplete contact records.</li>
              <li><strong className="text-foreground">Right to Erasure (&ldquo;Right to Be Forgotten&rdquo;):</strong> Request the permanent deletion of your project records.</li>
              <li><strong className="text-foreground">Right to Restriction:</strong> Limit the processing of your data while an audit or dispute is pending.</li>
            </ul>
            <p className="pt-1">
              To exercise any of these rights, contact our Privacy Lead at{" "}
              <a
                href={`mailto:${LEGAL_CONFIG.privacyEmail}`}
                className="font-medium text-foreground underline hover:text-primary"
              >
                {LEGAL_CONFIG.privacyEmail}
              </a>
              . We respond to all verified requests within thirty (30) calendar days.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              9. Policy Revisions &amp; Updates
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our technical services, data processing systems, or applicable regulatory standards. Any revisions will be posted directly to this page with an updated &ldquo;Last Substantively Updated&rdquo; date.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              10. Contact Us
            </h2>
            <p>
              For legal inquiries, data protection questions, or to request a signed Non-Disclosure Agreement (NDA) prior to code review:
            </p>
            <div className="rounded-lg border border-border bg-card p-4 space-y-1.5 text-xs text-muted-foreground">
              <p><strong className="text-foreground">Legal Entity:</strong> {LEGAL_CONFIG.legalEntityName}</p>
              <p><strong className="text-foreground">Registration No.:</strong> {LEGAL_CONFIG.businessRegistrationNumber}</p>
              <p><strong className="text-foreground">Physical Address:</strong> {LEGAL_CONFIG.physicalAddress}</p>
              <p><strong className="text-foreground">Privacy Email:</strong> <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="text-primary hover:underline">{LEGAL_CONFIG.privacyEmail}</a></p>
              <p><strong className="text-foreground">General Support:</strong> <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-primary hover:underline">{LEGAL_CONFIG.supportEmail}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
