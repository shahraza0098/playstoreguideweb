import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/seo";

export interface ServicePageData {
  slug: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  snapshot: {
    targetAudience: string;
    engagementModel: string;
    primaryFocus: string;
    googlePolicyRule: string;
  };
  problem: {
    title: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  whoIsItFor: Array<{
    persona: string;
    description: string;
  }>;
  deliverables: Array<{
    title: string;
    description: string;
  }>;
  exclusions: Array<{
    title: string;
    description: string;
  }>;
  workflow: Array<{
    step: string;
    title: string;
    description: string;
    duration?: string;
  }>;
  prerequisites: Array<{
    title: string;
    description: string;
  }>;
  timeline: {
    headline: string;
    description: string;
    milestones: Array<{
      name: string;
      estimate: string;
      detail: string;
    }>;
  };
  pricing: {
    model: string;
    headline: string;
    description: string;
    highlights: string[];
    note: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  officialDocs: Array<{
    title: string;
    url: string;
    description: string;
  }>;
  relatedGuides: Array<{
    title: string;
    slug: string;
    category: string;
    readTime: string;
    summary: string;
  }>;
  ctaHeadline?: string;
  ctaDescription?: string;
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const serviceUrl = `/services/${data.slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: data.h1, url: serviceUrl },
  ]);

  const serviceSchema = generateServiceSchema({
    name: data.h1,
    description: data.subtitle,
    url: serviceUrl,
  });

  const faqSchema = generateFAQSchema(data.faqs);

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Breadcrumbs & 2. Hero with Unique H1 */}
      <section className="border-b border-border bg-card/50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-foreground truncate max-w-xs sm:max-w-md">
                {data.h1}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="default" className="py-1 px-3 text-xs font-semibold">
                {data.eyebrow}
              </Badge>

              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
                {data.h1}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {data.subtitle}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className:
                      "bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold shadow-sm w-full sm:w-auto",
                  })}
                >
                  <span>Request Service Consultation</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>

                <Link
                  href="#pricing"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "border-border px-6 py-6 text-base font-medium w-full sm:w-auto",
                  })}
                >
                  <span>View Engagement Model</span>
                </Link>
              </div>
            </div>

            {/* Quick Service Snapshot Box */}
            <div className="lg:col-span-4 rounded-xl border border-border bg-card p-6 shadow-sm space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                Service Overview
              </span>
              <div className="space-y-3 text-xs divide-y divide-border/60">
                <div className="pt-1.5 flex justify-between gap-2">
                  <span className="font-medium text-muted-foreground">Target Audience:</span>
                  <span className="font-semibold text-foreground text-right">
                    {data.snapshot.targetAudience}
                  </span>
                </div>
                <div className="pt-2.5 flex justify-between gap-2">
                  <span className="font-medium text-muted-foreground">Engagement Model:</span>
                  <span className="font-semibold text-foreground text-right">
                    {data.snapshot.engagementModel}
                  </span>
                </div>
                <div className="pt-2.5 flex justify-between gap-2">
                  <span className="font-medium text-muted-foreground">Primary Focus:</span>
                  <span className="font-semibold text-foreground text-right">
                    {data.snapshot.primaryFocus}
                  </span>
                </div>
                <div className="pt-2.5 flex justify-between gap-2">
                  <span className="font-medium text-muted-foreground">Console Policy:</span>
                  <span className="font-semibold text-primary text-right">
                    {data.snapshot.googlePolicyRule}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Concise Explanation of the Problem Solved */}
      <section className="py-14 sm:py-18 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Technical Bottleneck"
            title={data.problem.title}
            description={data.problem.description}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.problem.cards.map((card, idx) => (
              <Card key={idx} className="p-6 bg-card border-border flex flex-col justify-between">
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300 font-mono text-xs font-bold mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who the Service Is For */}
      <section className="py-14 sm:py-18 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Target Audience"
            title="Who This Service Is Designed For"
            description="Our structured advisory is targeted at developers facing specific technical criteria, account hurdles, or policy deadlines."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whoIsItFor.map((item, idx) => (
              <Card key={idx} className="p-5 border-border bg-card hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <h3 className="text-sm font-bold text-foreground">{item.persona}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Detailed List of Deliverables and Exclusions */}
      <section className="py-14 sm:py-20 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Scope of Work"
            title="Deliverables &amp; Transparent Exclusions"
            description="We outline exact inclusions and transparent boundaries so developers understand exactly what to expect from our engagement."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Deliverables */}
            <div className="rounded-xl border border-emerald-500/30 bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Included Deliverables</h3>
                </div>
                <Badge variant="success">Included</Badge>
              </div>

              <div className="space-y-4">
                {data.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{del.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {del.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Explicit Exclusions</h3>
                </div>
                <Badge variant="outline">Not Included</Badge>
              </div>

              <div className="space-y-4">
                {data.exclusions.map((exc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{exc.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {exc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Step-by-Step Workflow */}
      <section className="py-14 sm:py-20 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Step-by-Step Process"
            title="How the Engagement Unfolds"
            description="Our structured milestone-driven process ensures clear communication and measurable progress from day one."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.workflow.map((wf) => (
              <Card key={wf.step} className="p-6 bg-card border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-primary/40 font-mono">
                      {wf.step}
                    </span>
                    {wf.duration && (
                      <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {wf.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{wf.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {wf.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Responsibilities and Prerequisites */}
      <section className="py-14 sm:py-18 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Responsibilities"
            title="Prerequisites &amp; What You Need to Provide"
            description="To maintain complete security and ownership of your developer account, you will provide specific inputs while retaining administrative control."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.prerequisites.map((prereq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  <h3 className="text-xs font-bold text-foreground">{prereq.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{prereq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Estimated Timeline & Milestones */}
      <section className="py-14 sm:py-18 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Timeline Estimates"
            title={data.timeline.headline}
            description={data.timeline.description}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.timeline.milestones.map((m, idx) => (
              <Card key={idx} className="p-6 border-border bg-card">
                <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                  {m.estimate}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground">{m.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{m.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Transparent Pricing or Enquiry-Based Pricing Explanation */}
      <section id="pricing" className="py-14 sm:py-20 bg-muted/40 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 border-border bg-card shadow-sm text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Pricing &amp; Engagement
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-foreground">
                  {data.pricing.headline}
                </h2>
              </div>
              <Badge variant="secondary" className="text-xs py-1 px-3 shrink-0">
                {data.pricing.model}
              </Badge>
            </div>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              {data.pricing.description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {data.pricing.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-muted/60 border border-border/60 text-xs text-muted-foreground text-left">
              <span className="font-semibold text-foreground">Policy Note: </span>
              {data.pricing.note}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-semibold shadow-sm w-full sm:w-auto",
                })}
              >
                Inquire About Availability &amp; Scope
              </Link>
              <span className="text-xs text-muted-foreground">
                Typically quoted within 24 hours of app bundle review.
              </span>
            </div>
          </Card>
        </div>
      </section>

      {/* 10. Relevant Service FAQs */}
      <section className="py-14 sm:py-20 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Service FAQ"
            title="Frequently Asked Questions"
            description="Transparent, direct answers regarding deliverables, limitations, and Google review evaluation."
          />

          <div className="mt-10 space-y-4">
            {data.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:border-border/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md">
                  <span className="text-sm sm:text-base pr-4">
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

      {/* 11. Links to Official Google Documentation */}
      <section className="py-14 sm:py-18 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Official Documentation"
            title="Google Play Developer Resources"
            description="We encourage all developers to review official Google Play policies and developer distribution rules directly."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.officialDocs.map((doc, idx) => (
              <Card key={idx} className="p-5 border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      Official Reference
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{doc.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Read on Google Support</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Related Guides and Contextual Internal Links */}
      <section className="py-14 sm:py-20 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Educational Guides"
              title="Related Developer Playbooks"
              description="Learn more about Google Play compliance through our in-depth developer articles."
            />
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline shrink-0"
            >
              Browse all guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.relatedGuides.map((guide) => (
              <Card key={guide.slug} className="p-6 border-border bg-card flex flex-col justify-between hover:border-primary/40 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="default">{guide.category}</Badge>
                    <span className="flex items-center gap-1 text-muted-foreground text-[11px]">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    <Link href={`/blog/${guide.slug}`} className="hover:text-primary transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {guide.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50">
                  <Link
                    href={`/blog/${guide.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Read complete guide</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Clear Enquiry CTA */}
      <section className="py-14 sm:py-20 bg-muted/40 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              {data.ctaHeadline || "Ready to Get Started?"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {data.ctaDescription ||
                "Contact our technical advisory team to discuss your app's timeline and verify readiness before your next submission."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold shadow-sm w-full sm:w-auto",
                })}
              >
                Inquire About This Service
              </Link>
              <Link
                href="/services"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "border-border px-6 py-6 text-base font-medium w-full sm:w-auto",
                })}
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
