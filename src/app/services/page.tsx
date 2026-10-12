import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Users,
  ShieldCheck,
  CheckCircle2,
  Layers,
  AlertTriangle,
  Sparkles,
  FileCheck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Publishing Services & Developer Advisory",
  description:
    "Comprehensive, policy-compliant assistance for Android developers: 14-day 20-tester closed testing, Google Play Console verification, production access questionnaire guidance, and rejection troubleshooting.",
  path: "/services",
  keywords: [
    "Google Play publishing services",
    "closed testing 20 testers",
    "Play Console account verification",
    "production access guidance",
    "Google Play rejection help",
    "Play Store ASO",
  ],
});

const serviceList = [
  {
    slug: "closed-testing",
    icon: Users,
    title: "14-Day Closed Testing Coordination (20 Testers)",
    category: "Personal Account Compliance",
    description:
      "Fulfill Google's mandatory 14-day closed testing requirement with verified human testers on physical Android hardware. Complete opt-in tracking, authentic engagement telemetry, qualitative feedback logs, and a safety margin buffer to prevent timer resets.",
    deliverables: [
      "20+ verified real Android opt-in testers (22-25 safety buffer)",
      "Full 14-day continuous opt-in retention monitoring in Play Console",
      "Authentic bug reports, UX feedback, and session telemetry",
      "Compiled testing documentation ready for the production questionnaire",
    ],
    policyNote: "100% real physical devices. Zero bot emulators or click farms.",
  },
  {
    slug: "play-console-account-setup",
    icon: ShieldCheck,
    title: "Play Console Account Setup & Developer Verification",
    category: "Identity & Business Verification",
    description:
      "Navigate Google Play Console's strict personal and organizational verification protocols. We audit legal entity names, D-U-N-S registration records, and official tax documents to prevent account suspensions while you retain 100% credential ownership.",
    deliverables: [
      "Dun & Bradstreet (D-U-N-S) registry alignment audit",
      "Government-issued ID and utility document verification review",
      "Payment profile, merchant account, and tax form setup advisory",
      "Account security hardening (2FA, security keys, least-privilege roles)",
    ],
    policyNote: "Client retains 100% account ownership. We never hold passwords.",
  },
  {
    slug: "production-access-guidance",
    icon: CheckCircle2,
    title: "Production Access Review & Questionnaire Advisory",
    category: "Launch Approval Prep",
    description:
      "When applying for production access, Google requires substantive answers regarding testing feedback, bug fixes, and user engagement. We help you synthesize your actual testing records into convincing, compliant responses for human reviewers.",
    deliverables: [
      "Question-by-question review of all 5 production access prompts",
      "Evidence-backed summaries of testing feedback and bug resolutions",
      "Assessment of app stability metrics, ANR rates, and crash logs",
      "Release notes and changelog alignment check",
    ],
    policyNote: "Showcases real iteration; Google independently reviews all requests.",
  },
  {
    slug: "app-publishing-assistance",
    icon: Layers,
    title: "End-to-End App Publishing & Compliance Audit",
    category: "Pre-Release Verification",
    description:
      "A comprehensive technical review of your App Bundle (AAB), target API level, Data Safety declarations, privacy policy, and Play Console release configurations prior to official submission.",
    deliverables: [
      "Target SDK 34/35 requirement validation (Android 14/15 standards)",
      "Manifest permissions audit against declared Google Play features",
      "Complete Data Safety section synchronization with SDK tracking",
      "App Access test account credentials & demo reviewer setup",
    ],
    policyNote: "Identifies automated policy traps before submitting your release bundle.",
  },
  {
    slug: "app-rejection-help",
    icon: AlertTriangle,
    title: "App Rejection Troubleshooting & Formal Appeals",
    category: "Policy Recovery & Remediation",
    description:
      "Has your app been rejected, removed, or suspended? We analyze the rejection notice, locate the offending code or metadata, outline exact remediations, and draft structured appeals for Google review teams without policy circumvention.",
    deliverables: [
      "Root-cause diagnostic of policy violation notice and logs",
      "Code, metadata, or permission remediation roadmap",
      "Policy-compliant revision verification before re-submission",
      "Formulation of evidence-based appeal letters with policy citations",
    ],
    policyNote: "Focuses on legitimate policy compliance and formal dispute resolution.",
  },
  {
    slug: "play-store-aso",
    icon: Sparkles,
    title: "Store Listing Optimization (ASO) & Metadata Compliance",
    category: "Discoverability & Conversion",
    description:
      "Optimize your app's title, short description, long description, screenshots, and promo graphics to maximize organic downloads while strictly abiding by Google's spam, metadata, and graphic asset policies.",
    deliverables: [
      "Policy-compliant Title (30 chars) and Short Description (80 chars)",
      "Conversion-focused 4,000-character description copywriting",
      "Screenshot storyboard and visual asset specification audit",
      "Store Listing Experiment (A/B testing) configuration guide",
    ],
    policyNote: "Strictly compliant with Google Play metadata spam and claim rules.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-foreground">Services</li>
            </ol>
          </nav>

          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Developer Advisory Directory
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Google Play Publishing Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Professional, policy-compliant guidance for Android developers at every phase of the release cycle. We eliminate policy ambiguity so you can launch on Google Play with confidence.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 space-y-8">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all hover:border-primary/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="rounded-lg bg-muted/60 p-2.5 text-xs text-muted-foreground border border-border/60">
                      <span className="font-semibold text-foreground">Policy Standards: </span>
                      {service.policyNote}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className={buttonVariants({
                          variant: "default",
                          size: "sm",
                          className:
                            "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 py-2",
                        })}
                      >
                        <span>View Service Details &amp; Workflow</span>
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 rounded-xl border border-border bg-muted/30 p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Included Deliverables
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Assessment Banner */}
        <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-sm">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-foreground">
              Unsure which service matches your current stage?
            </h2>
            <p className="text-sm text-muted-foreground">
              Run our free pre-launch readiness checklist or message our technical advisory team.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-wrap gap-3 shrink-0">
            <Link
              href="/tools/policy-readiness-checklist"
              className={buttonVariants({
                variant: "default",
                size: "default",
                className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold",
              })}
            >
              <FileCheck className="h-4 w-4 mr-1.5" />
              <span>Self-Assessment Checklist</span>
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "outline",
                size: "default",
                className: "border-border",
              })}
            >
              <span>Contact Advisory</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
