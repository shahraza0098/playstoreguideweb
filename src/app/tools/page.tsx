import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Calendar,
  CheckSquare,
  Lock,
  FileCheck,
  ArrowRight,
  ShieldAlert,
  Clock,
  Sparkles,
  HelpCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import { ToolEnquiryCTA } from "@/components/tools/ToolEnquiryCTA";

export const metadata: Metadata = constructMetadata({
  title: "Free Google Play Developer Tools & Release Checklists | PlayStoreGuide",
  description:
    "Free lightweight developer tools for Android creators. Closed testing timeline planner, interactive app publishing checklist, privacy policy audit tool, and policy readiness diagnostics.",
  path: "/tools",
  keywords: [
    "Google Play developer tools",
    "closed testing calculator Android",
    "Play Store publishing checklist",
    "Android privacy policy checklist",
    "Google Play policy diagnostics",
    "Android release planning calculator",
  ],
});

interface ToolCard {
  title: string;
  slug: string;
  badge: string;
  badgeVariant?: "default" | "secondary" | "outline";
  category: "Planning" | "Checklist" | "Compliance";
  estimatedTime: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  featured?: boolean;
}

const TOOLS_LIST: ToolCard[] = [
  {
    title: "Closed Testing Timeline Planner",
    slug: "/tools/closed-testing-planner",
    badge: "Flagship Calculator",
    badgeVariant: "default",
    category: "Planning",
    estimatedTime: "~3 min calculation",
    icon: Calendar,
    featured: true,
    description:
      "Accurately project your 20-tester, 14-day continuous closed testing schedule. Accounts for Google Play track review buffers, recruitment lead times, tester dropout safety padding, and production evaluation windows.",
    features: [
      "Calculates milestones from user input with explicit planning vs. approval disclosures",
      "Personal (post-Nov 2023) and Organization policy rules supported",
      "Dynamic safety buffer modeling to prevent consecutive clock resets",
      "Printable schedule and one-click clipboard export",
    ],
  },
  {
    title: "Play Store App Publishing Checklist",
    slug: "/tools/play-store-publishing-checklist",
    badge: "24-Point Audit",
    badgeVariant: "secondary",
    category: "Checklist",
    estimatedTime: "~10 min self-audit",
    icon: CheckSquare,
    description:
      "Step through 24 pre-launch requirements across 8 core operational categories: store listing graphics, App Bundle technical rules, testing tracks, content ratings, and staged rollout strategies.",
    features: [
      "Genuinely interactive with mobile touch-accessible checkboxes",
      "Progress tracking, status filters, and one-click category completion",
      "Print / Save PDF compliance report via window.print()",
      "State automatically preserved in browser local storage",
    ],
  },
  {
    title: "App Privacy Policy & Data Safety Checklist",
    slug: "/tools/app-privacy-policy-checklist",
    badge: "Data Safety Spec Sheet",
    badgeVariant: "outline",
    category: "Compliance",
    estimatedTime: "~6 min review",
    icon: Lock,
    description:
      "Audit your application data collection practices, embedded third-party SDK dependencies (AdMob, Firebase, Analytics), retention protocols, and mandatory web-based account deletion link.",
    features: [
      "Direct 1-to-1 mapping to Google Play Console Data Safety fields",
      "AdMob, Firebase, and Analytics tracking disclosures",
      "Exportable privacy specification sheet for legal counsel & store listing",
      "Printable audit summary with explicit legal limitations notice",
    ],
  },
  {
    title: "Pre-Launch Policy Readiness Checklist",
    slug: "/tools/policy-readiness-checklist",
    badge: "Rapid Diagnostic",
    badgeVariant: "outline",
    category: "Compliance",
    estimatedTime: "~4 min screening",
    icon: FileCheck,
    description:
      "A fast 10-point policy health check covering Target SDK 34 enforcement, reviewer test login credentials, Android Vitals thresholds, and Data Safety synchronization.",
    features: [
      "Instant risk assessment scoring and critical item counters",
      "Direct remediation advice and build.gradle snippet references",
      "Zero signup or external dependencies required",
    ],
  },
];

const faqs = [
  {
    q: "Are these developer tools completely free to use?",
    a: "Yes. All PlayStoreGuide.com tools—including the Closed Testing Timeline Planner, Publishing Checklist, and Privacy Policy Checklist—are 100% free with zero signups or paywalls required.",
  },
  {
    q: "Do any of these tools connect to my Google Play Console account?",
    a: "No. All tools run completely client-side in your browser. We never ask for your Google account credentials, API keys, or private Console access. Your data and progress remain private on your device.",
  },
  {
    q: "Is a calculated closed testing target date guaranteed by Google?",
    a: "No. The Closed Testing Timeline Planner provides realistic developer planning estimates based on official policy requirements and historical review lead times. Actual approval dates depend solely on Google's review operations team.",
  },
  {
    q: "How does the Publishing Checklist save my progress?",
    a: "Checklist selections are automatically stored in your browser's localStorage. You can refresh the page, close your browser, and return later without losing your audit progress. You can also export or print a PDF report.",
  },
];

export default function ToolsIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Google Play Developer Tools & Checklists",
    description: "Free developer tools, timeline calculators, and pre-launch audit checklists for Android creators.",
    url: `${SITE_URL}/tools`,
  };

  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      <JsonLd data={faqSchema} />

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
            <li className="font-semibold text-foreground">Tools</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-cream border border-primary/20 text-xs font-bold text-primary mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Developer Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Google Play Developer Utilities &amp; Self-Audit Tools
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Lightweight, client-side tools designed to help Android creators model testing cohorts, verify submission assets, and audit privacy disclosures before publishing to Google Play.
          </p>
        </div>

        {/* Independence Disclaimer Banner */}
        <div className="mt-8 rounded-2xl border border-primary/20 bg-surface-cream/80 dark:bg-card p-4 sm:p-5 flex items-start gap-3.5 text-xs">
          <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Independent Developer Utilities:</strong> These tools are maintained by PlayStoreGuide.com to assist developers in preparing releases. They are not official products of Google LLC and do not interface directly with private Play Console accounts. All calculations and checklists are educational self-audits.
          </div>
        </div>

        {/* Tools Directory Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOOLS_LIST.map((tool) => {
            const Icon = tool.icon;

            return (
              <Card
                key={tool.slug}
                className={`flex flex-col justify-between border transition-all rounded-3xl ${
                  tool.featured
                    ? "border-primary/40 bg-surface-panel dark:bg-card shadow-floating ring-1 ring-primary/10"
                    : "border-border/80 bg-surface-panel dark:bg-card hover:border-primary/50 shadow-subtle hover:shadow-floating"
                }`}
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-muted-foreground font-mono flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {tool.estimatedTime}
                      </span>
                      <Badge variant={tool.badgeVariant || "outline"} className="text-[11px] font-bold">
                        {tool.badge}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl font-bold">
                    <Link href={tool.slug} className="hover:text-primary transition-colors">
                      {tool.title}
                    </Link>
                  </CardTitle>

                  <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-5">
                  <div className="space-y-2 pt-3 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      Feature Highlights:
                    </span>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      {tool.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span className="leading-normal">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-3 border-t border-border/50">
                  <Link href={tool.slug} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xs py-2.5 rounded-xl shadow-2xs">
                      <span>Launch Interactive Tool</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Cross-Link Services Strip */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-surface-cream/50 dark:bg-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Users className="h-4 w-4" />
            <span>Need Hands-On Support Beyond Self-Audit Tools?</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
            Explore Dedicated Google Play Services
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Our specialized advisory team provides verified tester cohorts, production questionnaire reviews, account setup assistance, and app rejection diagnosis.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link
              href="/services/closed-testing"
              className="p-4 rounded-2xl border border-border/70 bg-surface-panel dark:bg-muted/20 hover:border-primary/50 transition-all text-xs space-y-1 group"
            >
              <span className="font-bold text-foreground block group-hover:text-primary transition-colors">
                Closed Testing Service &rarr;
              </span>
              <span className="text-muted-foreground text-[11px] block">
                20 active opted-in testers for 14 continuous days.
              </span>
            </Link>

            <Link
              href="/services/production-access"
              className="p-4 rounded-2xl border border-border/70 bg-surface-panel dark:bg-muted/20 hover:border-primary/50 transition-all text-xs space-y-1 group"
            >
              <span className="font-bold text-foreground block group-hover:text-primary transition-colors">
                Production Access Guidance &rarr;
              </span>
              <span className="text-muted-foreground text-[11px] block">
                Expert review of your 3 questionnaire sections.
              </span>
            </Link>

            <Link
              href="/services/app-publishing"
              className="p-4 rounded-2xl border border-border/70 bg-surface-panel dark:bg-muted/20 hover:border-primary/50 transition-all text-xs space-y-1 group"
            >
              <span className="font-bold text-foreground block group-hover:text-primary transition-colors">
                Publishing Assistance &rarr;
              </span>
              <span className="text-muted-foreground text-[11px] block">
                End-to-end store listing, AAB, and rollout setup.
              </span>
            </Link>

            <Link
              href="/services/app-rejection-help"
              className="p-4 rounded-2xl border border-border/70 bg-surface-panel dark:bg-muted/20 hover:border-primary/50 transition-all text-xs space-y-1 group"
            >
              <span className="font-bold text-foreground block group-hover:text-primary transition-colors">
                Rejection Recovery &rarr;
              </span>
              <span className="text-muted-foreground text-[11px] block">
                Policy violation remediation and appeal drafting.
              </span>
            </Link>
          </div>
        </div>

        {/* Server-Rendered FAQ Section for SEO */}
        <div className="mt-16 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              About PlayStoreGuide Developer Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border/80 bg-surface-panel dark:bg-card space-y-2 shadow-2xs"
              >
                <h3 className="font-bold text-sm text-foreground flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Generation CTA */}
        <ToolEnquiryCTA toolName="Developer Resource Directory" defaultService="app-publishing-assistance" />
      </div>
    </div>
  );
}
