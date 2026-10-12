import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FileCheck,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Android Developer Resources & Publishing Tools | PlayStoreGuide",
  description:
    "Curated developer resources: Google Play pre-launch checklist, policy guides, technical documentation, and publishing FAQs.",
  path: "/resources",
  keywords: [
    "Google Play developer resources",
    "Android publishing checklist",
    "Play Console tools",
    "Google Play developer documentation",
  ],
});

export default function ResourcesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ]);

  const resources = [
    {
      icon: FileCheck,
      badge: "Interactive Tool",
      badgeVariant: "success" as const,
      title: "Pre-Launch Policy Readiness Checklist",
      description:
        "Evaluate your Target SDK, Data Safety form, tester cohort duration, and app credentials against Google Play's 2026 checklist. Instant scoring and fix guidance.",
      href: "/tools/policy-readiness-checklist",
      actionText: "Launch Tool",
    },
    {
      icon: BookOpen,
      badge: "Knowledge Base",
      badgeVariant: "default" as const,
      title: "Technical Playbooks & Guides",
      description:
        "Comprehensive guides covering 14-day closed testing coordination, production access questionnaire responses, and D-U-N-S verification.",
      href: "/guides",
      actionText: "Browse Guides",
    },
    {
      icon: HelpCircle,
      badge: "Developer FAQ",
      badgeVariant: "secondary" as const,
      title: "Google Play Publishing FAQ",
      description:
        "Answers to common technical questions regarding closed test resets, organization exemptions, and reviewer appeal processes.",
      href: "/faq",
      actionText: "Read FAQs",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} className="mb-6" />

        <SectionHeading
          eyebrow="Developer Toolkit"
          title="Google Play Publishing Resources"
          description="Free utilities, comprehensive documentation, and self-assessment tools built specifically for Android developers preparing for Google Play release."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="flex flex-col justify-between hover:border-teal-500/40 hover:shadow-md transition-all"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>

                <CardFooter className="pt-0">
                  <Link href={item.href} className="w-full">
                    <Button variant="outline" className="w-full text-xs font-semibold">
                      {item.actionText} &rarr;
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Advisory Box */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">
              Need a 1-on-1 Consultation for Your App Release?
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl">
              Our technical team audits your AAB package, reviews closed testing engagement logs, and verifies reviewer credentials before submission.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-5">
              Enquire About Advisory
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
