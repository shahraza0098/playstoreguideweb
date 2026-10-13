import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  ArrowRight,
  Check,
  X,
  HelpCircle,
  BadgeDollarSign,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Advisory Pricing & Custom Project Quotations",
  description:
    "Transparent, enquiry-based pricing for Android closed testing coordination, Play Console setup, and policy compliance audits. Detailed inclusions, exclusions, and quotation factors.",
  path: "/pricing",
});

const servicePackages = [
  {
    id: "closed-testing",
    title: "Closed Testing Cohort Coordination",
    subtitle: "14-Day Mandatory Track for Personal Accounts",
    icon: Users,
    badge: "Most Requested",
    description:
      "Structured facilitation of 20–25 verified human testers on real Android devices maintaining continuous opt-in for 14 consecutive days to unlock production access.",
    inclusions: [
      "20–25 unique, verified human testers on diverse physical Android hardware",
      "Full 14 consecutive calendar days of active opted-in track participation",
      "Qualitative bug logs and usability feedback collection",
      "Android Vitals crash rate and ANR monitoring alerts",
      "Testing history compilation structured for Google's review questionnaire",
      "Free cohort replenishment if any tester leaves during the 14-day window",
    ],
    exclusions: [
      "App code modification or bug-fixing within your repository",
      "Automated bot or click-farm testing (strictly forbidden)",
      "Guaranteed production approval (exclusively decided by Google)",
    ],
    quotationFactors: [
      "Target country restrictions or regional geo-filtering requirements",
      "App installation size (>150MB APK/AAB or dynamic delivery assets)",
      "Hardware dependencies (Bluetooth, camera, GPS, wearable pairing)",
      "Safety buffer duration (standard 14 days vs extended 21 days)",
    ],
    contactServiceId: "closed-testing",
  },
  {
    id: "account-setup",
    title: "Play Console Setup & D-U-N-S Advisory",
    subtitle: "Identity Verification & Corporate Registration",
    icon: ShieldCheck,
    badge: "Foundation",
    description:
      "Step-by-step guidance navigating Google's strict developer verification protocols, D-U-N-S corporate alignment, and merchant payment profiles.",
    inclusions: [
      "Personal vs Organization developer account architecture audit",
      "Dun & Bradstreet (D-U-N-S) registry data matching & document checklist",
      "Official entity address, utility bill, and legal identity preparation",
      "Merchant payments profile and tax withholding configuration check",
      "Console 2-step verification and team access security setup",
    ],
    exclusions: [
      "Payment of Google's one-time $25 developer registration fee",
      "Government filing fees for corporate entity registration",
      "Direct legal representation before trademark registries",
    ],
    quotationFactors: [
      "Entity status (individual sole proprietor vs registered LLC/Corporation)",
      "Country of incorporation and local document availability",
      "Prior failed identity verification attempts on the developer account",
    ],
    contactServiceId: "play-console-account-setup",
  },
  {
    id: "production-access",
    title: "Production Access Review Preparation",
    subtitle: "Questionnaire Strategy & Telemetry Synthesis",
    icon: CheckCircle2,
    badge: "Critical Step",
    description:
      "Comprehensive review and structuring of your answers to Google's mandatory Production Access evaluation questionnaire to showcase legitimate testing history.",
    inclusions: [
      "Detailed review of your answers to all 3 questionnaire sections",
      "Synthesis of raw tester feedback into professional evidence summaries",
      "Android Vitals benchmark check (crash rate < 1.09%, ANR < 0.47%)",
      "Release track changelog verification to demonstrate developer iteration",
      "Actionable submission readiness checklist before clicking 'Apply'",
    ],
    exclusions: [
      "Fabrication of feedback logs or false iteration claims",
      "Retroactive reversal of valid prior account terminations",
      "Guaranteed approval from Google human review operations",
    ],
    quotationFactors: [
      "Prior production access rejection history on this app",
      "Completeness of raw tester feedback collected during closed testing",
      "Current Android Vitals crash and stability telemetry metrics",
    ],
    contactServiceId: "production-access-guidance",
  },
  {
    id: "app-publishing",
    title: "App Publishing & Policy Compliance Audit",
    subtitle: "Pre-Submission Manifest & SDK Deep-Dive",
    icon: Layers,
    badge: "Pre-Launch",
    description:
      "Thorough technical and policy audit before initial submission, ensuring SDK data safety alignment, Target SDK compliance, and reviewer credential readiness.",
    inclusions: [
      "Target SDK 34/35 manifest audit and permissions minimization check",
      "Data Safety declaration audit against compiled third-party SDKs",
      "App access test credential setup check for login-gated features",
      "Store listing graphic spec review (icon, feature graphic, screenshots)",
      "Staged rollout roadmap guidance (10% to 100% risk mitigation)",
    ],
    exclusions: [
      "Rewriting application source code or compiling custom binaries",
      "Providing ongoing post-launch production customer support",
      "Third-party SDK license fees (e.g. ad networks or analytics)",
    ],
    quotationFactors: [
      "Total number of third-party SDKs compiled in the build",
      "Sensitive permissions requested (Background Location, SMS, Storage)",
      "Target audience declarations (Families Policy & COPPA compliance)",
    ],
    contactServiceId: "app-publishing-assistance",
  },
  {
    id: "rejection-help",
    title: "Rejection Troubleshooting & Appeals",
    subtitle: "Root-Cause Diagnosis & Formal Appeal Recovery",
    icon: AlertTriangle,
    badge: "Recovery",
    description:
      "Urgent diagnosis of Google Play rejection notices, isolating binary vs metadata root causes, and drafting structured, policy-grounded appeal documentation.",
    inclusions: [
      "Line-by-line deconstruction of Google's policy violation notice",
      "Reproduction and verification of the flagged issue in test builds",
      "Remediation action plan (metadata fix, permission removal, or SDK update)",
      "Formal appeal brief drafted referencing official Developer Program Policies",
      "Follow-up submission guidance to prevent secondary policy strikes",
    ],
    exclusions: [
      "Circumvention of legitimate copyright or trademark infringement claims",
      "Guaranteed reversal of justified Google enforcement actions",
      "Direct telephone escalation to Google review executives",
    ],
    quotationFactors: [
      "Violation severity (Metadata warning vs Binary rejection vs Suspension)",
      "Remaining appeal attempts allowed by Google for the specific issue ID",
      "Complexity of technical remediation required in the app",
    ],
    contactServiceId: "app-rejection-help",
  },
  {
    id: "play-store-aso",
    title: "Store Listing Optimization (ASO)",
    subtitle: "Policy-Compliant Conversion & Metadata Architecture",
    icon: Sparkles,
    badge: "Growth",
    description:
      "Strategic optimization of your store listing copy, screenshots, and keywords to drive organic search discoverability without triggering metadata spam penalties.",
    inclusions: [
      "Title (<=30 chars) and short description (<=80 chars) policy audit",
      "Conversion-focused, keyword-aligned full description copywriting",
      "Visual spec storyboard audit for app icon and feature graphics",
      "Store Listing Experiments (A/B testing) hypothesis framework",
      "Localization strategy for high-priority secondary markets",
    ],
    exclusions: [
      "Creation of raw illustrations, 3D renders, or graphic design from scratch",
      "Paid advertising or user acquisition campaign management",
      "Keyword stuffing tactics that violate Google spam policies",
    ],
    quotationFactors: [
      "Number of target localization languages/territories",
      "Competitive landscape and category keyword saturation",
      "Availability of existing high-resolution screenshot captures",
    ],
    contactServiceId: "play-store-aso",
  },
];

const pricingFaqs = [
  {
    question: "Why doesn't PlayStoreGuide list fixed, one-click price packages?",
    answer:
      "Every Android app is technically distinct. A lightweight utility app requiring 20 standard testers has vastly different technical demands than a healthcare application requiring specialized hardware or an app recovering from an active policy strike. Offering arbitrary flat-rate packages either leads to under-delivering or overcharging developers. Our enquiry-based model ensures you receive a precise, transparent quotation tailored to your exact release architecture and timeline.",
  },
  {
    question: "Does paying for advisory or testing guarantee Google will approve my app?",
    answer:
      "No legitimate consultancy can guarantee Google Play approval. Google's review operations team retains 100% independent discretion over all account verifications, closed testing reviews, and production access approvals. Our service delivers complete technical and policy readiness: genuine human testers maintaining continuous opt-in, documented qualitative feedback, healthy vitals, and structured questionnaire responses that give your app the strongest possible foundation.",
  },
  {
    question: "How are quotations structured, and when is payment due?",
    answer:
      "Following your initial project intake, our technical team evaluates your app's current stage and sends a formal itemized quotation valid for 14 calendar days. For closed testing cohorts and advisory projects, payment is processed via secure invoice prior to tester mobilization. Milestones may be arranged for multi-phase or multi-app engagements.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept international payments processed securely through verified payment gateways (including major credit/debit cards, international wire transfers, and Wise Business). All invoices clearly state itemized deliverables, currency, and tax details.",
  },
  {
    question: "What happens if a tester uninstalls our app during the 14-day closed test?",
    answer:
      "Our testing cohorts are actively monitored daily. We recruit 22–25 testers (above Google's 20-tester minimum) specifically to provide a safety buffer. In the rare event that an opted-in tester drops out and threatens the 20-tester threshold, we immediately replenish the cohort at zero extra cost to protect your consecutive 14-day count.",
  },
  {
    question: "Are there any hidden platform fees or recurring subscriptions?",
    answer:
      "No. All quotations are completely transparent and one-time per engagement or release track. We do not charge recurring subscriptions or unexpected platform fees.",
  },
];

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);

  const faqSchema = generateFAQSchema(pricingFaqs);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">Pricing</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="flex h-6 items-center rounded-md bg-primary/10 px-2.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              Transparent &amp; Bespoke
            </span>
            <Badge variant="outline" className="text-[11px]">
              Enquiry-Based Architecture
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Transparent Advisory Quotations Based on Actual Project Scope.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            We do not sell pre-packaged shortcuts or arbitrary flat-rate bundles. Because Android applications vary significantly by architecture, hardware prerequisites, and policy histories, every engagement is quoted transparently based on confirmed deliverables, testing cohorts, and technical scope.
          </p>
        </div>

        {/* Why Enquiry-Based Model Callout */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-16 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <BadgeDollarSign className="h-5 w-5" />
              </div>
              <h2 className="text-base font-bold text-foreground">No Arbitrary Packages</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                You never pay for services your app does not require. Whether you need only verified testers or an end-to-end rejection appeal, you receive an itemized quote for that exact scope.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="text-base font-bold text-foreground">Complete Scope Clarity</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every quotation explicitly defines deliverables, testing durations, and boundaries before work begins. No unexpected billings or hidden platform surcharges.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-base font-bold text-foreground">Honest Ethical Guarantees</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We guarantee the technical performance of our testing cohorts and compliance audits. We never sell fake &ldquo;100% Google approval guarantees&rdquo; that violate advertising standards.
              </p>
            </div>
          </div>
        </div>

        {/* Services & Inclusions Matrix */}
        <div className="space-y-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Service Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              Detailed Scope, Inclusions &amp; Quotation Factors
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Select the service below that aligns with your release milestone to review deliverables, exclusions, and key pricing variables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {servicePackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <Card key={pkg.id} className="flex flex-col justify-between border-border bg-card shadow-sm hover:border-primary/40 transition-colors">
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {pkg.badge}
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {pkg.title}
                      </CardTitle>
                      <CardDescription className="text-xs font-medium text-primary mt-0.5">
                        {pkg.subtitle}
                      </CardDescription>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                      {pkg.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-5 text-xs">
                    {/* Inclusions */}
                    <div>
                      <p className="font-bold uppercase tracking-wider text-foreground text-[11px] mb-2 flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-primary" /> What&rsquo;s Included:
                      </p>
                      <ul className="space-y-1.5 pl-1">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    <div className="pt-2 border-t border-border/60">
                      <p className="font-bold uppercase tracking-wider text-muted-foreground text-[11px] mb-2 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5 text-muted-foreground" /> Explicit Exclusions:
                      </p>
                      <ul className="space-y-1 pl-1">
                        {pkg.exclusions.map((exc, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground/80 leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 shrink-0 mt-1.5" />
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quotation Factors */}
                    <div className="pt-2 border-t border-border/60 rounded-lg bg-muted/30 p-3">
                      <p className="font-bold uppercase tracking-wider text-foreground text-[11px] mb-1.5 flex items-center gap-1.5">
                        <HelpCircle className="h-3.5 w-3.5 text-primary" /> Factors Influencing Quote:
                      </p>
                      <ul className="space-y-1 pl-1 text-[11px] text-muted-foreground">
                        {pkg.quotationFactors.map((factor, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-primary font-bold">•</span>
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-border">
                    <Link
                      href={`/contact?service=${pkg.contactServiceId}`}
                      className="w-full"
                    >
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs py-2 shadow-sm flex items-center justify-center gap-1.5">
                        Request Custom Quote for {pkg.title.split(" ")[0]} <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Engagement Tiers Overview */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 mb-16 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Engagement Formats
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              Flexible Collaboration Models
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Choose the level of involvement that matches your team&rsquo;s internal capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-3">
              <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                Tier 1
              </span>
              <h3 className="text-base font-bold text-foreground">Targeted Diagnostic Audit</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A focused, fast-turnaround technical audit evaluating your APK/AAB, Data Safety form, manifest permissions, or specific Google rejection email with an actionable remediation brief.
              </p>
              <div className="pt-2 text-xs font-medium text-foreground">
                Best for: Experienced developers needing a second pair of expert eyes before submitting.
              </div>
            </div>

            <div className="rounded-xl border border-primary/40 bg-primary/5 p-5 space-y-3 relative">
              <span className="inline-block rounded-md bg-primary text-primary-foreground px-2 py-0.5 text-[11px] font-bold">
                Tier 2 • Most Popular
              </span>
              <h3 className="text-base font-bold text-foreground">End-to-End Guided Release</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Complete cohort management across the full 14-day closed testing period, daily monitoring, qualitative feedback synthesis, and production access questionnaire response preparation.
              </p>
              <div className="pt-2 text-xs font-medium text-foreground">
                Best for: Solo developers and startups navigating Google&rsquo;s 20-tester requirement for the first time.
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-3">
              <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                Tier 3
              </span>
              <h3 className="text-base font-bold text-foreground">Studio &amp; Multi-App Retainer</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Priority scheduling, recurring closed testing cohorts, and ongoing policy consultation across multiple quarterly releases for mobile software agencies and active app publishers.
              </p>
              <div className="pt-2 text-xs font-medium text-foreground">
                Best for: Agencies, software studios, and publishers managing multiple Android titles.
              </div>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              Pricing &amp; Quotation FAQ
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Everything you need to know about our billing, quotation methodology, and deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingFaqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
                <h3 className="text-sm font-bold text-foreground flex items-start gap-2">
                  <span className="text-primary font-bold">Q:</span> {faq.question}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-2xl bg-zinc-900 p-8 sm:p-10 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to receive a transparent project quotation?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Share your application stage, package ID, and target launch window. Our technical specialists will review your requirements and provide an itemized quote within 12–24 business hours.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 shrink-0">
            <Link href="/contact">
              <Button className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold px-6 py-2.5 text-sm shadow-md">
                Request Project Quotation &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
