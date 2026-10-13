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
  ChevronDown,
  Info,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
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

const serviceFaqs = [
  {
    question: "Is the 20-tester closed testing requirement universal for all Google Play developers?",
    answer:
      "No, it is not universal. Under Google Play policy enacted on November 13, 2023, the mandatory 14-day 20-tester requirement applies specifically to developers with personal Play Console accounts created on or after November 13, 2023. Organization developer accounts verified with a D-U-N-S number (as well as personal accounts created before November 13, 2023) are exempt from this mandatory quota, although running closed testing is still recommended to generate pre-launch reports and stability telemetry.",
  },
  {
    question: "Does completing 14 days of closed testing guarantee production approval?",
    answer:
      "No legitimate consultancy or testing service can guarantee approval. Google's review operations team retains exclusive, independent authority over all production access approvals. What our service delivers is complete technical and policy readiness: 20+ real opt-in testers on physical hardware, 14 continuous days of cohort tracking with an active safety buffer, verified Android Vitals metrics, and structured questionnaire responses that present your app's iteration history persuasively.",
  },
  {
    question: "Do you ever require my Google Play Console password or login credentials?",
    answer:
      "Never. We will never ask for your Google account password or two-factor authentication codes. For closed testing, we provide email addresses or a Google Group link that you invite directly through your own Play Console track. For policy audits or questionnaire preparation, we work via screenshots, video recordings, or scoped, read-only console permissions that you control and can revoke at any time.",
  },
  {
    question: "How is advisory pricing structured?",
    answer:
      "We operate on a transparent, custom project quotation model based on your app's release track requirements, APK/AAB size, hardware dependencies (e.g., Bluetooth, GPS, camera), and verification complexity. We provide written quotes within 12 to 24 business hours following a preliminary app review, with zero long-term retainer lock-ins.",
  },
];

const secondaryServices = [
  {
    slug: "play-console-account-setup",
    icon: ShieldCheck,
    title: "Play Console Setup & Identity Verification",
    category: "Identity & Business Verification",
    description:
      "Navigate Google Play Console's strict personal and organizational verification protocols. We audit legal entity names, D-U-N-S registration records, and official tax documents to prevent account suspensions while you retain 100% credential ownership.",
    deliverables: [
      "Dun & Bradstreet (D-U-N-S) registry alignment audit",
      "Government-issued ID and utility document verification review",
      "Payment profile, merchant account, and tax form setup advisory",
    ],
    policyNote: "Client retains 100% account ownership. We never hold passwords.",
    ctaText: "Learn about console verification",
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
    ],
    policyNote: "Showcases real iteration; Google independently reviews all requests.",
    ctaText: "Prepare for production review",
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
    ],
    policyNote: "Identifies automated policy traps before submitting your release bundle.",
    ctaText: "View publishing audit details",
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
      "Formulation of evidence-based appeal letters with policy citations",
    ],
    policyNote: "Focuses on legitimate policy compliance and formal dispute resolution.",
    ctaText: "Get rejection recovery guidance",
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
    ],
    policyNote: "Strictly compliant with Google Play metadata spam and claim rules.",
    ctaText: "Optimize your store listing",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Pre-Flight Audit",
    desc: "Inspect AAB target SDK, manifest permissions & console status.",
  },
  {
    step: "02",
    title: "Cohort Invitation",
    desc: "Configure closed track with 20+ verified real testers or audit documents.",
  },
  {
    step: "03",
    title: "Telemetry & Logs",
    desc: "14-day cohort tracking on physical hardware with qualitative bug logs.",
  },
  {
    step: "04",
    title: "Production Prep",
    desc: "Structure questionnaire answers with evidence for Google reviewers.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Header & Introduction */}
      <section className="relative overflow-hidden bg-surface-cream/80 dark:bg-card/40 border-b border-border/80 pt-8 pb-14 sm:pt-12 sm:pb-20">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
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

          <div className="max-w-3xl space-y-4">
            <Badge
              variant="outline"
              className="py-1 px-3 text-xs font-semibold rounded-full border-primary/30 bg-surface-panel/80 dark:bg-card/80 text-foreground"
            >
              <Sparkles className="h-3 w-3 text-primary mr-1" />
              Developer Advisory Directory
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Google Play Publishing Advisory Services
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Professional, policy-compliant guidance for Android developers at every phase of the release cycle. We eliminate regulatory ambiguity, coordinate legitimate testing cohorts, and prepare your app for production review.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Featured Spotlight Card: Closed Testing Track */}
      <section className="py-14 sm:py-20 bg-surface-panel dark:bg-background border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block">
              Flagship Advisory Track
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              Google Play Closed Testing Coordination
            </h2>
          </div>

          <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-surface-panel via-surface-cream/40 to-surface-pale-blue/30 dark:from-card dark:to-muted/20 p-7 sm:p-10 shadow-floating">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Personal Accounts (Post-Nov 13, 2023)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      14-Day Closed Testing Coordination (20 Testers)
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Fulfill Google&rsquo;s mandatory closed testing requirement with verified human testers on real Android hardware. We maintain active cohort opt-in across 14 consecutive calendar days, gathering authentic engagement telemetry and qualitative feedback logs.
                </p>

                {/* Important Policy Clarification Box */}
                <div className="rounded-2xl border border-primary/20 bg-surface-panel/90 dark:bg-card/90 p-4 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Info className="h-4 w-4 text-primary shrink-0" />
                    <span>Official Google Policy Scope vs. Our Service Buffer</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Google requires at least <strong className="text-foreground">20 testers continuously opted in for 14 full days</strong> for personal accounts created on or after November 13, 2023 (organization accounts with D-U-N-S verification are exempt). To safeguard against accidental uninstalls resetting your 14-day timer, we coordinate a safety margin buffer of <strong className="text-foreground">22 to 25 testers</strong> on physical Android devices.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/services/closed-testing"
                    className={buttonVariants({
                      variant: "default",
                      size: "lg",
                      className:
                        "rounded-full bg-primary px-7 py-6 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 flex items-center justify-center gap-2",
                    })}
                  >
                    <span>View Closed Testing Service &amp; Workflow</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/pricing"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className:
                        "rounded-full border-border bg-surface-panel dark:bg-card px-6 py-6 text-sm font-medium text-foreground hover:bg-muted flex items-center justify-center gap-2",
                    })}
                  >
                    <span>View Pricing Scope</span>
                  </Link>
                </div>
              </div>

              {/* Deliverables Panel */}
              <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-surface-panel/95 dark:bg-card/95 p-6 shadow-subtle space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                  Included Cohort Deliverables
                </span>
                <ul className="space-y-3 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>20+ unique physical Android device testers (22–25 safety margin buffer)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Full 14 consecutive calendar days of continuous opt-in cohort tracking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Authentic bug reports, UI/UX usability notes &amp; device telemetry</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Testing documentation compiled for the production questionnaire</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Compliance Guarantee: </span>
                  100% physical devices. Zero bot emulators, automated farms, or fake public reviews.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Additional Core Services Grid */}
      <section className="py-16 sm:py-24 bg-surface-cream/50 dark:bg-muted/15 border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Specialized Publishing Services"
            title="Complete Lifecycle Guidance for Play Console"
            description="From identity verification to policy rejection resolution, explore our structured technical assistance tracks."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {secondaryServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-7 shadow-subtle hover:shadow-card hover:border-primary/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-cream text-primary border border-border/60 group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-[10px] uppercase font-semibold">
                        {service.category}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        <Link href={`/services/${service.slug}`} className="focus:outline-hidden">
                          {service.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-2">
                        Key Inclusions
                      </p>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 space-y-3">
                    <div className="rounded-xl bg-surface-cream/80 dark:bg-muted/40 p-2.5 text-[11px] text-muted-foreground border border-border/50">
                      <span className="font-semibold text-foreground">Policy Standards: </span>
                      {service.policyNote}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Short Process Timeline */}
      <section className="py-16 sm:py-20 bg-surface-panel dark:bg-background border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Advisory Process"
            title="How Our Service Engagements Work"
            description="A transparent four-stage roadmap designed to verify policy compliance and compile review documentation."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-border/80 bg-surface-cream/50 dark:bg-card p-6 shadow-2xs relative"
              >
                <span className="text-2xl font-extrabold text-primary/40 font-mono block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Compact FAQ Section */}
      <section className="py-16 sm:py-24 bg-surface-pale-blue/40 dark:bg-muted/15 border-b border-border/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Common Questions"
            title="Frequently Asked Questions About Our Services"
            description="Clear answers regarding our eligibility scope, compliance standards, and pricing models."
          />

          <div className="mt-12 space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-border/80 bg-surface-panel dark:bg-card p-5 sm:p-6 transition-all hover:border-primary/40 shadow-2xs"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                  <span className="text-sm sm:text-base pr-4 leading-snug">
                    {idx + 1}. {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="mt-4 pt-4 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Contact CTA */}
      <section className="py-16 sm:py-24 bg-surface-pale-lavender/40 dark:bg-card/40 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-8 sm:p-14 shadow-floating space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Unsure which advisory track matches your app?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Contact our advisory team with your app bundle or current Play Console status for a free technical preliminary review within 12–24 business hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-semibold shadow-card w-full sm:w-auto",
                })}
              >
                Schedule Technical Consultation
              </Link>
              <Link
                href="/tools/play-store-publishing-checklist"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "rounded-full border-border bg-surface-panel dark:bg-card px-7 py-6 text-sm font-medium w-full sm:w-auto hover:bg-muted",
                })}
              >
                Launch Self-Assessment Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
