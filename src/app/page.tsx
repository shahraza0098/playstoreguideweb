import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Check,
  FileCheck,
  Clock,
  Layers,
  FileText,
  Smartphone,
  ChevronDown,
  UserCheck,
  Building2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateFAQSchema } from "@/lib/seo";
import { getPublishedArticles } from "@/data/articles";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Publishing & Closed Testing Assistance for Android Developers",
  description:
    "Expert technical guidance for Android developers: 14-day 20-tester closed testing coordination, Play Console account verification, production access reviews, and policy rejection troubleshooting.",
  path: "/",
});

const homeFaqs = [
  {
    question: "Can you guarantee that Google will approve my app for production access?",
    answer:
      "No legitimate consultancy or testing service can guarantee approval. Google's review operations team retains exclusive, independent authority over all production access approvals. What PlayStoreGuide delivers is complete technical and policy readiness: 20 real testers maintaining continuous 14-day opt-in, documented qualitative feedback, crash and ANR rates within acceptable Android Vitals thresholds, and comprehensive questionnaire responses that present your app's testing history accurately and persuasively.",
  },
  {
    question: "How does the 14-day closed testing coordination service work?",
    answer:
      "We coordinate a cohort of 20+ real, active opt-in Android testers using physical hardware. You configure your Google Play Console closed testing track using either an email list or a Google Group. Our testers accept the invitation, install your app build, and maintain active opt-in status across 14 consecutive days while providing qualitative feedback, UX notes, and bug reports that you can cite in your production access application.",
  },
  {
    question: "Do you need direct login credentials to my Google Play Console account?",
    answer:
      "Never. We will never ask for your Google account password or two-factor authentication codes. For closed testing, we provide email addresses or a Google Group link that you invite directly through your own Play Console track. For policy audits or questionnaire preparation, we work via screenshots, video recordings, or scoped, read-only console permissions that you control and can revoke at any time.",
  },
  {
    question: "Who is subject to the mandatory 20-tester closed testing rule?",
    answer:
      "Under Google Play policy enacted in November 2023, developers with personal Play Console accounts created on or after November 13, 2023 must run a closed testing track with at least 20 testers who have remained opted in for at least 14 continuous days before becoming eligible to apply for production access. Organization accounts verified with a D-U-N-S number are exempt from this requirement, though running closed tests is still strongly recommended.",
  },
  {
    question: "What happens if Google rejects my production access application?",
    answer:
      "If Google denies production access, your console dashboard remains restricted to testing tracks, and Google will send an email indicating that your app requires more testing before production rollout. We assist developers in reviewing the specific rejection feedback, identifying testing or stability gaps, pushing an incremental build, capturing fresh tester telemetry, and submitting a reinforced application.",
  },
  {
    question: "Is working with PlayStoreGuide compliant with Google Play Developer Policies?",
    answer:
      "Yes, 100%. Our advisory and testing coordination operates strictly within the Google Play Developer Distribution Agreement. We do not use automated bot farms, virtualized emulator instances, or fake public 5-star reviews. All testers are real individuals testing your software on physical Android devices, providing genuine feedback and authentic Play Services telemetry.",
  },
];

const services = [
  {
    icon: Users,
    title: "14-Day Closed Testing Coordination",
    badge: "Personal Accounts",
    href: "/services/closed-testing",
    description:
      "Fulfill Google's mandatory 20-tester requirement with real, active opt-in users across physical Android devices. Maintain continuous 14-day engagement with a safety buffer against drop-offs.",
    deliverables: [
      "20+ verified real Android testers (no bots or emulators)",
      "14 continuous days of opt-in cohort tracking",
      "Qualitative feedback log & bug report documentation",
    ],
    policyNote: "Real physical devices generating authentic Play Services telemetry.",
    ctaText: "Explore closed testing service",
  },
  {
    icon: ShieldCheck,
    title: "Play Console Account Verification",
    badge: "Identity & D-U-N-S",
    href: "/services/play-console-account-setup",
    description:
      "Avoid developer account termination during mandatory identity verification. We guide personal developers and organizations through document audits, payments profiles, and D-U-N-S record alignment.",
    deliverables: [
      "Dun & Bradstreet (D-U-N-S) matching & validation",
      "Identity and proof-of-address document pre-flight review",
      "Payments profile and tax documentation assistance",
    ],
    policyNote: "Prevents irreversible account closures due to name/address mismatches.",
    ctaText: "Learn about console verification",
  },
  {
    icon: CheckCircle2,
    title: "Production Access Advisory",
    badge: "Crucial Review Step",
    href: "/services/production-access-guidance",
    description:
      "Prepare thorough, evidence-based answers for Google's 5-prompt production access questionnaire. Demonstrate genuine testing iteration, bug triage, and Android Vitals stability to human reviewers.",
    deliverables: [
      "Question-by-question response review and structuring",
      "Synthesis of closed testing feedback into actionable logs",
      "Android Vitals crash rate & ANR threshold checks",
    ],
    policyNote: "Showcases real iteration; final approval is evaluated by Google.",
    ctaText: "Prepare for production review",
  },
  {
    icon: Layers,
    title: "App Publishing & Compliance Audit",
    badge: "Pre-Launch Audit",
    href: "/services/app-publishing-assistance",
    description:
      "Comprehensive technical and policy audit before your first store submission. We verify Target SDK compliance, sensitive permissions, reviewer access credentials, and Data Safety forms.",
    deliverables: [
      "Target API level compliance (Android 14/15 standards)",
      "Data Safety declaration vs embedded SDK discrepancy audit",
      "Reviewer login credentials & demo account configuration",
    ],
    policyNote: "Identifies automated policy traps before submitting your release bundle.",
    ctaText: "View publishing audit details",
  },
  {
    icon: AlertTriangle,
    title: "App Rejection Troubleshooting",
    badge: "Recovery & Appeals",
    href: "/services/app-rejection-help",
    description:
      "Deconstruct vague Google Play rejection notices. We identify the root policy violation, formulate actionable code and metadata updates, and draft formal, evidence-backed developer appeals.",
    deliverables: [
      "Policy violation root-cause technical diagnosis",
      "Actionable code, manifest, or metadata fix checklist",
      "Formally structured developer appeal letter with proof evidence",
    ],
    policyNote: "Focuses on legitimate policy compliance and dispute resolution.",
    ctaText: "Get rejection recovery guidance",
  },
  {
    icon: Sparkles,
    title: "Store Listing Optimization (ASO)",
    badge: "Organic Discoverability",
    href: "/services/play-store-aso",
    description:
      "Improve conversion rates and organic store visibility while adhering strictly to Google's metadata policy, graphic asset guidelines, and keyword spam regulations.",
    deliverables: [
      "Policy-safe titles, short descriptions, and full descriptions",
      "Screenshot storyboarding & feature graphic spec checks",
      "Keyword discovery & regional localization review",
    ],
    policyNote: "Strictly compliant with Google Play metadata spam and claim rules.",
    ctaText: "Optimize your store listing",
  },
];

const whoWeHelp = [
  {
    icon: UserCheck,
    title: "Solo Android Developers",
    badge: "Personal Accounts",
    challenge:
      "Facing the mandatory 14-day 20-tester closed testing hurdle without an existing network of Android testers.",
    solution:
      "We coordinate active cohorts of real, opted-in testers with varied Android devices to satisfy Google's criteria safely.",
  },
  {
    icon: Smartphone,
    title: "Early-Stage App Startups",
    badge: "First Production Release",
    challenge:
      "Preparing for the production access questionnaire without documented tester feedback, changelogs, or vitals evidence.",
    solution:
      "We help you gather qualitative user feedback, log bug fixes across versions, and draft compelling review answers.",
  },
  {
    icon: Building2,
    title: "Companies & Studios",
    badge: "Organization Accounts",
    challenge:
      "Navigating complex D-U-N-S matching, corporate verification deadlines, or Target SDK compliance transitions.",
    solution:
      "We audit organizational records against Dun & Bradstreet registries to avoid verification rejections.",
  },
  {
    icon: AlertTriangle,
    title: "Teams Facing Policy Flags",
    badge: "Rejections & Removals",
    challenge:
      "Stuck with ambiguous rejection emails regarding Data Safety, background permissions, or rejected production access.",
    solution:
      "We perform root-cause technical audits to isolate the exact policy conflict and prepare structured appeals.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Pre-Engagement App & Policy Audit",
    description:
      "We inspect your Android App Bundle (AAB), target SDK level, manifest permissions, and current Play Console status to identify potential policy blockers before you submit.",
  },
  {
    step: "02",
    title: "Structured Track Setup & Execution",
    description:
      "We configure compliant closed testing distribution (Google Group or email list) with 20+ verified real testers or guide you through required documentation changes.",
  },
  {
    step: "03",
    title: "Telemetry, Testing & Feedback Logging",
    description:
      "Over the 14-day testing period, testers use your app on real devices, reporting qualitative UI/UX feedback, crashes, and performance logs for review evidence.",
  },
  {
    step: "04",
    title: "Production Questionnaire Prep & Review",
    description:
      "We assist you in drafting clear, evidence-based answers for Google's production access questionnaire, documenting iteration history and Android Vitals stability.",
  },
];

export default function Home() {
  const faqSchema = generateFAQSchema(homeFaqs);

  // Take the first 3 guides from getPublishedArticles() for featured educational guides
  const featuredGuides = getPublishedArticles().slice(0, 3);

  return (
    <div className="flex flex-col">
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section: Compelling, Truthful H1, Value Prop, Two CTAs */}
      <section className="border-b border-border bg-card/50 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="default" className="py-1 px-3 text-xs font-semibold">
              Independent Technical Advisory • Google Play 2026 Compliant
            </Badge>
          </div>

          {/* Main H1 Headline */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight sm:leading-tight">
            Google Play Publishing &amp; Closed Testing Assistance for{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-8">
              Android Developers
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Navigate Google&rsquo;s mandatory 14-day 20-tester closed testing requirement, Play Console account verification, and production access reviews with genuine, policy-compliant technical guidance.
          </p>

          {/* Two CTAs: Explore Services & Read Developer Guides */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm px-6 py-6 text-base font-semibold",
              })}
            >
              <span>Explore Publishing Services</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>

            <Link
              href="/guides"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "w-full sm:w-auto border-border px-6 py-6 text-base font-medium",
              })}
            >
              <FileText className="h-4 w-4 mr-1.5 text-primary" />
              <span>Read Developer Guides</span>
            </Link>
          </div>

          {/* Value & Trust Signals Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 border-t border-border/80 text-left">
            <div className="flex items-start gap-3 p-2 rounded-lg bg-card/60 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">
                  20 Real Android Testers
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight block">
                  Physical devices, genuine opt-ins, no bot emulators
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2 rounded-lg bg-card/60 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">
                  Console Verification
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight block">
                  D-U-N-S matching &amp; identity document audits
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2 rounded-lg bg-card/60 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">
                  Production Review Prep
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight block">
                  Questionnaire answers backed by real feedback logs
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2 rounded-lg bg-card/60 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">
                  Rejection Diagnosis
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight block">
                  Root-cause analysis &amp; structured policy appeals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who PlayStoreGuide Helps & The Problems It Solves */}
      <section className="py-16 sm:py-20 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Help"
            title="Solving the Real Roadblocks in Modern Google Play Publishing"
            description="Since Google elevated developer requirements for personal accounts and organization verification, publishing an Android app requires rigorous testing and strict policy compliance. Here is who we support and the specific challenges we solve."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeHelp.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="p-6 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <Badge variant="secondary" className="text-[10px]">
                        {item.badge}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {item.title}
                      </h3>
                      <div className="mt-3 pt-3 border-t border-border/60">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                          The Challenge
                        </span>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                      How We Help
                    </span>
                    <p className="text-xs text-foreground leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Service Cards for All 6 Services */}
      <section className="py-16 sm:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Technical Advisory Services"
            title="Structured Guidance Across Every Stage of Publishing"
            description="We work alongside Android developers to ensure apps meet all functional, stability, and policy requirements before requesting Google Play production rollout."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary">{service.badge}</Badge>
                    </div>

                    <CardTitle className="text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>

                    <div className="pt-2 border-t border-border/60">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                        Key Deliverables
                      </p>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="rounded-lg bg-muted/50 p-2.5 text-[11px] text-muted-foreground border border-border/40">
                      <span className="font-semibold text-foreground">Policy Note: </span>
                      {service.policyNote}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-border px-8 py-5 text-sm font-semibold",
              })}
            >
              <span>View Detailed Breakdown of All 6 Publishing Services</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Explanation of How the Service Engagement Works */}
      <section className="py-16 sm:py-20 bg-muted/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Engagement Workflow"
            title="How Our Technical Publishing Advisory Works"
            description="A transparent, step-by-step workflow designed to verify technical readiness, maintain tester retention, and compile documentation before requesting Google Play production rollout."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((stepItem) => (
              <Card
                key={stepItem.step}
                className="p-6 relative flex flex-col justify-between bg-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-extrabold text-primary/40 font-mono">
                      {stepItem.step}
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      Phase {stepItem.step}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {stepItem.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-card p-4 sm:p-6 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>Full Policy Transparency</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground max-w-2xl mx-auto">
              We never ask for your Google account credentials or charge for fabricated approvals. You maintain complete ownership of your Google Play Console account throughout every stage.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Featured Educational Guides Backed by Actual Published Content */}
      <section className="py-16 sm:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="Educational Knowledge Base"
              title="Featured Google Play Developer Guides"
              description="In-depth, technical guides covering closed testing recruitment, production access review questionnaires, and Play Console account verification."
            />
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline shrink-0"
            >
              Browse all developer guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <Card
                key={guide.slug}
                className="flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="default">{guide.category}</Badge>
                    <span className="flex items-center gap-1 text-muted-foreground text-[11px]">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg">
                    <Link
                      href={`/blog/${guide.slug}`}
                      className="hover:text-primary transition-colors line-clamp-2"
                    >
                      {guide.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {guide.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="pt-0">
                  <Link
                    href={`/blog/${guide.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Read technical playbook</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-border bg-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-foreground">
                Need guidance on app rejections or the Data Safety form?
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                We also publish comprehensive walkthroughs on solving Play Store policy rejections and synchronizing third-party SDK telemetry.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/blog/common-google-play-app-rejection-reasons"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Rejection Recovery Guide &rarr;
              </Link>
              <span className="text-muted-foreground text-xs">•</span>
              <Link
                href="/blog/android-app-publishing-checklist-2026"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Publishing Checklist &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Helpful Developer Resources & Publishing Checklists */}
      <section className="py-16 sm:py-20 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="default" className="py-0.5 px-2.5 text-xs font-semibold">
                Free Developer Tools
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                Pre-Launch Developer Checklists &amp; Utilities
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
                Before submitting your closed testing release or applying for production access, evaluate your app against Google Play&rsquo;s 2026 checklist. Verify Target SDK 34/35 compliance, Data Safety declarations, and test account credentials.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tools/policy-readiness-checklist"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className:
                      "bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-6 shadow-sm w-full sm:w-auto",
                  })}
                >
                  <FileCheck className="h-4 w-4 mr-2" />
                  <span>Launch Interactive Checklist</span>
                </Link>

                <Link
                  href="/resources"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "border-border px-6 py-6 text-sm font-medium w-full sm:w-auto",
                  })}
                >
                  <span>Explore Developer Resources</span>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="p-6 space-y-4 shadow-sm bg-card border-border">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <span className="text-sm font-bold text-foreground block">
                      Google Play Audit Checklist
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Core criteria verified prior to production
                    </span>
                  </div>
                  <Badge variant="success">READY</Badge>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/40">
                    <span className="text-foreground font-medium">Target SDK Level (Android 14/15)</span>
                    <span className="text-primary font-semibold flex items-center gap-1 shrink-0">
                      <Check className="h-3 w-3" /> API 34+
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/40">
                    <span className="text-foreground font-medium">Closed Track Active (14 Days)</span>
                    <span className="text-primary font-semibold flex items-center gap-1 shrink-0">
                      <Check className="h-3 w-3" /> 20/20 Testers
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/40">
                    <span className="text-foreground font-medium">Data Safety vs. SDK Manifest</span>
                    <span className="text-primary font-semibold flex items-center gap-1 shrink-0">
                      <Check className="h-3 w-3" /> Synchronized
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/40">
                    <span className="text-foreground font-medium">Production Questionnaire Prep</span>
                    <span className="text-primary font-semibold flex items-center gap-1 shrink-0">
                      <Check className="h-3 w-3" /> Documented
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/40">
                    <span className="text-foreground font-medium">App Reviewer Test Credentials</span>
                    <span className="text-primary font-semibold flex items-center gap-1 shrink-0">
                      <Check className="h-3 w-3" /> Configured
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Transparent FAQ Section Addressing Common Concerns */}
      <section className="py-16 sm:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Frequently Asked Questions"
            title="Clear, Honest Answers About Google Play Publishing &amp; Advisory"
            description="We believe in complete transparency. Here is how our services operate, our policy compliance standards, and the realities of Google Play's review process."
          />

          <div className="mt-12 space-y-4">
            {homeFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:border-border/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md">
                  <span className="text-sm sm:text-base pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="mt-4 pt-4 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-muted-foreground">
              Have a question not listed here? Visit our{" "}
              <Link href="/faq" className="text-primary font-semibold hover:underline">
                comprehensive FAQ page
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                send us an enquiry directly
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 8. Final Enquiry CTA Section */}
      <section className="py-16 sm:py-24 bg-muted/40 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-14 shadow-sm">
            <Badge variant="default" className="py-1 px-3 text-xs font-semibold mb-4">
              Get Started with PlayStoreGuide
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Ready to Prepare Your Android App for Google Play Release?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you need 14-day closed testing coordination, production review questionnaire guidance, or rejection recovery assistance, our technical team is ready to support your launch.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold shadow-sm",
                })}
              >
                Schedule Publishing Consultation
              </Link>

              <Link
                href="/services"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto px-6 py-6 text-base font-medium border-border",
                })}
              >
                Explore Publishing Services
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                <span>No long-term contracts</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                <span>Direct developer support</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                <span>Response within 24 business hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
