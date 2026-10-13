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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema, SITE_URL } from "@/lib/seo";
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
  ],
});

interface ToolCard {
  title: string;
  slug: string;
  badge: string;
  category: "Planning" | "Checklist" | "Compliance";
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
}

const TOOLS_LIST: ToolCard[] = [
  {
    title: "Closed Testing Timeline Planner",
    slug: "/tools/closed-testing-planner",
    badge: "Scheduling Calculator",
    category: "Planning",
    icon: Calendar,
    description:
      "Calculate your 20-tester, 14-day continuous testing milestones. Factors in initial track review lead times, opt-in buffers, tester dropout safety padding, and production evaluation windows.",
    features: [
      "Configurable personal vs. organization account policies",
      "Dynamic safety buffer calculation to avoid clock resets",
      "One-click formatted release schedule export",
    ],
  },
  {
    title: "Play Store App Publishing Checklist",
    slug: "/tools/play-store-publishing-checklist",
    badge: "Interactive Audit",
    category: "Checklist",
    icon: CheckSquare,
    description:
      "Step through 24 critical requirements across 8 categories: store listing graphics, App Bundle technical compliance, testing tracks, content ratings, and staged rollout strategies.",
    features: [
      "8 distinct pre-launch operational categories",
      "Live progress bar & category completion filters",
      "Auto-saves checklist progress in browser storage",
    ],
  },
  {
    title: "App Privacy Policy Checklist",
    slug: "/tools/app-privacy-policy-checklist",
    badge: "Data Safety Diagnostic",
    category: "Compliance",
    icon: Lock,
    description:
      "Audit your user data collection, third-party SDK sharing (AdMob, Firebase, Analytics), data retention policies, and Google Play’s mandatory account deletion web link.",
    features: [
      "Maps directly to Google Play Console Data Safety fields",
      "SDK dependency disclosures for AdMob & Firebase",
      "Exportable privacy policy specification sheet",
    ],
  },
  {
    title: "Pre-Launch Policy Readiness Checklist",
    slug: "/tools/policy-readiness-checklist",
    badge: "Rapid Diagnostic",
    category: "Compliance",
    icon: FileCheck,
    description:
      "A quick 10-point policy check covering Target SDK 34 enforcement, reviewer test credentials, and Data Safety synchronization with immediate pass/warning scoring.",
    features: [
      "Live risk assessment scoring",
      "Direct remediation advice for warning items",
      "Zero signup or external dependencies required",
    ],
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

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

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
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Developer Resource Directory
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Google Play Developer Utilities &amp; Self-Audit Tools
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Lightweight, client-side tools designed to help Android creators plan testing cohorts, verify submission assets, and audit privacy disclosures before publishing to Google Play.
          </p>
        </div>

        {/* Independence Disclaimer */}
        <div className="mt-8 rounded-xl border border-border bg-card p-4 sm:p-5 flex items-start gap-3.5 text-xs">
          <ShieldAlert className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
          <div className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Independent Developer Utilities:</strong> These tools are maintained by PlayStoreGuide.com to assist developers in preparing releases. They are not official products of Google LLC and do not interface directly with private Play Console accounts.
          </div>
        </div>

        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOOLS_LIST.map((tool) => {
            const Icon = tool.icon;

            return (
              <Card
                key={tool.slug}
                className="flex flex-col justify-between border-border hover:border-primary/50 transition-all hover:shadow-md bg-card"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className="text-[11px] font-semibold">
                      {tool.badge}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl">
                    <Link href={tool.slug} className="hover:text-primary transition-colors">
                      {tool.title}
                    </Link>
                  </CardTitle>

                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-4">
                  <div className="space-y-1.5 pt-3 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      Key Highlights:
                    </span>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tool.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-primary font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-border/50">
                  <Link href={tool.slug} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs py-2">
                      <span>Launch Interactive Tool</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Lead Generation CTA */}
        <ToolEnquiryCTA toolName="Developer Resource Directory" defaultService="app-publishing-assistance" />
      </div>
    </div>
  );
}
