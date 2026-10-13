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
  Sparkles,
  Info,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

export interface ServicePageTemplateProps {
  data: ServicePageData;
  interactiveShowcase?: React.ReactNode;
}

export function ServicePageTemplate({ data, interactiveShowcase }: ServicePageTemplateProps) {
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

      {/* 1. Breadcrumbs & 2. Hero Section */}
      <section className="relative overflow-hidden bg-surface-cream/80 dark:bg-card/40 border-b border-border/80 pt-8 pb-16 sm:pt-12 sm:pb-20">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-5">
              <Badge
                variant="outline"
                className="py-1 px-3 text-xs font-semibold rounded-full border-primary/30 bg-surface-panel/80 dark:bg-card/80 text-foreground"
              >
                <Sparkles className="h-3 w-3 text-primary mr-1" />
                {data.eyebrow}
              </Badge>

              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
                {data.h1}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {data.subtitle}
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/contact"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className:
                      "rounded-full bg-primary px-8 py-6 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 flex items-center justify-center gap-2",
                  })}
                >
                  <span>Request Service Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#pricing"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "rounded-full border-border bg-surface-panel dark:bg-card px-6 py-6 text-sm font-medium text-foreground hover:bg-muted flex items-center justify-center gap-2",
                  })}
                >
                  <span>View Engagement Scope</span>
                </Link>
              </div>
            </div>

            {/* Quick Service Snapshot Box */}
            <div className="lg:col-span-4 rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-6 sm:p-7 shadow-floating space-y-4">
              <div className="flex items-center justify-between border-b border-border/70 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Service Snapshot
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Active Track
                </span>
              </div>

              <div className="space-y-3 text-xs divide-y divide-border/60">
                <div className="pt-1 flex justify-between gap-2">
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

              <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Zero account credential sharing required.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Technical Problem Solved */}
      <section className="py-16 sm:py-24 bg-surface-panel dark:bg-background border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Technical Bottleneck"
            title={data.problem.title}
            description={data.problem.description}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {data.problem.cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-cream/50 dark:bg-card p-6 sm:p-7 shadow-subtle hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 font-mono text-xs font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Target Audience Personas */}
      <section className="py-16 sm:py-20 bg-surface-pale-blue/50 dark:bg-muted/15 border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Target Audience"
            title="Who This Service Is Designed For"
            description="Our structured advisory is targeted at developers facing specific technical criteria, account hurdles, or policy deadlines."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whoIsItFor.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 shadow-subtle hover:shadow-card hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" />
                  <h3 className="text-sm font-bold text-foreground">{item.persona}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Detailed Scope: Deliverables & Transparent Exclusions */}
      <section className="py-16 sm:py-24 bg-surface-panel dark:bg-background border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Scope of Work"
            title="Included Deliverables &amp; Transparent Exclusions"
            description="We establish exact deliverables and clear boundaries so developers know precisely what to expect from our advisory engagement."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Deliverables Panel */}
            <div className="rounded-3xl border border-emerald-500/30 bg-surface-panel dark:bg-card p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex items-center justify-between border-b border-border/70 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Included Deliverables</h3>
                </div>
                <Badge variant="success" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                  INCLUDED
                </Badge>
              </div>

              <div className="space-y-4">
                {data.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">{del.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {del.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions Panel */}
            <div className="rounded-3xl border border-border/80 bg-surface-cream/50 dark:bg-card p-6 sm:p-8 shadow-subtle space-y-5">
              <div className="flex items-center justify-between border-b border-border/70 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Explicit Exclusions</h3>
                </div>
                <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                  NOT INCLUDED
                </Badge>
              </div>

              <div className="space-y-4">
                {data.exclusions.map((exc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">{exc.title}</h4>
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

      {/* Interactive Showcase Section (Dashboard Illustration & Closed Testing Timeline) */}
      {interactiveShowcase && (
        <section className="py-16 sm:py-24 bg-surface-pale-blue/40 dark:bg-muted/10 border-b border-border/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {interactiveShowcase}
          </div>
        </section>
      )}

      {/* 6. Step-by-Step Engagement Workflow (Rendered if interactiveShowcase is not provided) */}
      {!interactiveShowcase && (
        <section className="py-16 sm:py-24 bg-surface-cream/60 dark:bg-muted/15 border-b border-border/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Step-by-Step Process"
              title="How the Advisory Engagement Unfolds"
              description="Our structured milestone-driven process ensures clear communication and measurable progress from day one."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.workflow.map((wf) => (
                <div
                  key={wf.step}
                  className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-extrabold text-primary/40 font-mono">
                        {wf.step}
                      </span>
                      {wf.duration && (
                        <span className="text-[11px] text-muted-foreground font-medium flex items-center gap-1 font-mono">
                          <Clock className="h-3 w-3" /> {wf.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{wf.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {wf.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Prerequisites & Developer Responsibilities */}
      <section className="py-16 sm:py-20 bg-surface-panel dark:bg-background border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Prerequisites"
            title="What You Need to Provide"
            description="To maintain complete security and ownership of your developer account, you provide specific inputs while retaining administrative control."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.prerequisites.map((prereq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-surface-cream/40 dark:bg-card p-5 space-y-2 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  <h3 className="text-xs sm:text-sm font-bold text-foreground">{prereq.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{prereq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Estimated Timeline & Milestones */}
      <section className="py-16 sm:py-20 bg-surface-pale-blue/40 dark:bg-muted/15 border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Timeline Estimates"
            title={data.timeline.headline}
            description={data.timeline.description}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.timeline.milestones.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 shadow-subtle"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block">
                  {m.estimate}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground">{m.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing & Scope Engagement Card */}
      <section id="pricing" className="py-16 sm:py-24 bg-surface-pale-lavender/40 dark:bg-card/40 border-b border-border/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-8 sm:p-12 shadow-floating text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/70 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Pricing &amp; Scope
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-foreground">
                  {data.pricing.headline}
                </h2>
              </div>
              <Badge variant="secondary" className="text-xs py-1 px-3.5 rounded-full shrink-0">
                {data.pricing.model}
              </Badge>
            </div>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              {data.pricing.description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
              {data.pricing.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground font-medium">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-surface-cream/80 dark:bg-muted/40 border border-border/60 text-xs text-muted-foreground text-left">
              <span className="font-semibold text-foreground">Policy Standard: </span>
              {data.pricing.note}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-semibold shadow-card w-full sm:w-auto",
                })}
              >
                Inquire About Availability &amp; Scope
              </Link>
              <span className="text-xs text-muted-foreground">
                Typically quoted within 12–24 business hours.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Relevant Service FAQs */}
      <section className="py-16 sm:py-24 bg-surface-panel dark:bg-background border-b border-border/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Service FAQ"
            title="Frequently Asked Questions"
            description="Transparent, direct answers regarding deliverables, limitations, and Google review evaluation."
          />

          <div className="mt-12 space-y-4">
            {data.faqs.map((faq, idx) => (
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

      {/* 11. Official Google Documentation References */}
      <section className="py-16 sm:py-20 bg-surface-cream/50 dark:bg-card/40 border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Official Documentation"
            title="Google Play Developer Resources"
            description="We encourage all developers to review official Google Play policies and developer distribution rules directly."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.officialDocs.map((doc, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      Official Reference
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{doc.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-border/50">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Related Guides */}
      <section className="py-16 sm:py-24 bg-surface-panel dark:bg-background border-b border-border/80">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {data.relatedGuides.map((guide) => (
              <div
                key={guide.slug}
                className="rounded-2xl sm:rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 shadow-subtle flex flex-col justify-between hover:shadow-card hover:border-primary/40 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="secondary" className="text-[10px] uppercase font-semibold">
                      {guide.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-muted-foreground text-[11px] font-mono">
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

                <div className="mt-5 pt-3 border-t border-border/50">
                  <Link
                    href={`/blog/${guide.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Read complete guide</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Final Service Enquiry CTA */}
      <section className="py-16 sm:py-24 bg-surface-pale-blue/70 dark:bg-card/40 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/90 bg-surface-panel dark:bg-card p-8 sm:p-14 shadow-floating space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              {data.ctaHeadline || "Ready to Prepare for Submission?"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {data.ctaDescription ||
                "Contact our technical advisory team to verify readiness before your next submission to Google Play Console."}
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
                Inquire About This Service
              </Link>
              <Link
                href="/services"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "rounded-full border-border bg-surface-panel dark:bg-card px-7 py-6 text-sm font-medium w-full sm:w-auto hover:bg-muted",
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
