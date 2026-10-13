import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  Target,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About PlayStoreGuide - Independent Android Developer Advisory",
  description:
    "Learn about PlayStoreGuide's mission: assisting Android developers with Google Play closed testing cohorts, Console verification, production access reviews, and policy compliance.",
  path: "/about",
});

const assistanceTypes = [
  {
    title: "1. Closed Testing Cohort Coordination",
    description:
      "Helping personal developer accounts fulfill Google's mandatory 20-tester, 14-day requirement. We coordinate genuine Android users on real physical devices across multiple OS versions who maintain continuous opt-in, deliver bug logs, and generate authentic testing activity.",
    href: "/services/closed-testing",
    icon: Users,
  },
  {
    title: "2. Play Console Setup & Identity Verification",
    description:
      "Guiding individual and organization accounts through identity verification, Dun & Bradstreet (D-U-N-S) record matching, payment profiles, and tax declarations to prevent verification lockouts before release.",
    href: "/services/play-console-account-setup",
    icon: ShieldCheck,
  },
  {
    title: "3. Production Access Questionnaire Preparation",
    description:
      "Assisting developers in articulating their testing methodology, feedback cycles, and stability improvements in the 3-part Play Console questionnaire that Google human evaluators review prior to granting production rollout rights.",
    href: "/services/production-access-guidance",
    icon: CheckCircle2,
  },
  {
    title: "4. End-to-End Publishing & Policy Audits",
    description:
      "Conducting pre-submission audits of Target SDK levels (34/35), manifest permissions minimization, Data Safety form synchronization against compiled third-party SDKs, and functional reviewer test credentials.",
    href: "/services/app-publishing-assistance",
    icon: Layers,
  },
  {
    title: "5. App Rejection & Policy Troubleshooting",
    description:
      "Deconstructing opaque Google Play policy violation notices, isolating binary vs store listing causes, structuring remediation roadmaps, and drafting factual, policy-grounded appeal documentation.",
    href: "/services/app-rejection-help",
    icon: AlertTriangle,
  },
  {
    title: "6. Store Listing Optimization (ASO)",
    description:
      "Optimizing titles, short descriptions, and localized metadata to maximize organic discoverability on Google Play while strictly adhering to Google's metadata spam policies and graphical asset guidelines.",
    href: "/services/play-store-aso",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">About</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="flex h-6 items-center rounded-md bg-primary/10 px-2.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              Mission &amp; Purpose
            </span>
            <Badge variant="outline" className="text-[11px]">
              Independent Technical Advisory
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Empowering Android Developers to Publish with Confidence &amp; Integrity.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            PlayStoreGuide is an independent technical resource and consultancy created specifically to help Android developers navigate the intricate, high-stakes requirements of Google Play Console publishing.
          </p>
        </div>

        {/* Mandatory Independent Legal Disclaimer Banner */}
        <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5 space-y-2">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-foreground space-y-1">
              <p className="font-bold">Independent Service Notice &amp; Google Authority Statement</p>
              <p className="text-muted-foreground leading-relaxed">
                PlayStoreGuide is an independent service. We are <strong>not affiliated with, endorsed by, sponsored by, or operated by Google LLC</strong>. Google LLC retains sole, exclusive authority over developer account verifications, application reviews, production access grants, and store ranking algorithms. We provide technical advisory, compliance auditing, and testing facilitation to help developers satisfy Google&rsquo;s published requirements; we do not sell, guarantee, or influence Google&rsquo;s internal decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Purpose & Developer Focus */}
        <div className="mt-12 space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Why PlayStoreGuide Exists
            </h2>
            <p>
              The Android app distribution ecosystem has evolved rapidly over recent years. While Google Play remains one of the world&rsquo;s largest digital distribution platforms, publishing requirements have become substantially more stringent. From the mandatory 14-day 20-tester closed testing gate for personal developer accounts, to Dun &amp; Bradstreet (D-U-N-S) corporate identity verifications, target SDK obsolescence deadlines, and automated Data Safety cross-checks, independent developers face unprecedented operational friction.
            </p>
            <p>
              A single overlooked manifest permission, a minor SDK discrepancy, or a poorly documented closed testing phase can trigger automated rejections, lengthy review delays, or account strikes. Many developers find official documentation dense and abstract, leaving critical questions unanswered when facing real launch deadlines.
            </p>
            <p>
              <strong>PlayStoreGuide bridges this gap.</strong> We provide clear, developer-friendly documentation, interactive readiness checklists, timeline planning calculators, and hands-on advisory services to help developers prepare compliant applications from first commit to public rollout.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Who We Focus On
            </h2>
            <p>
              Our educational content and advisory services are tailored specifically to the unique needs of Android creators:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
                <h3 className="font-bold text-foreground text-sm">Solo &amp; Indie Developers</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Building passion projects or side products who lack immediate access to a personal network of 20 active Android testers across diverse hardware.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
                <h3 className="font-bold text-foreground text-sm">Startup Product Teams</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fast-moving teams that need predictable release timelines, compliant privacy declarations, and thorough pre-submission audits before critical funding or marketing dates.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
                <h3 className="font-bold text-foreground text-sm">Agencies &amp; Client Studios</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Managing client Play Console accounts who need reliable compliance frameworks, D-U-N-S verification guidance, and rejection troubleshooting support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Assistance Offered */}
        <div className="mt-14 border-t border-border pt-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              Types of Assistance We Provide
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Our advisory offerings span every stage of the Google Play publishing lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assistanceTypes.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border/60">
                    <Link
                      href={service.href}
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Learn more about this service <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ethical Operating Commitments */}
        <div className="mt-14 border-t border-border pt-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Strict Integrity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
              Our Ethical Operating Commitments
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              We operate by strict technical and ethical standards designed to safeguard developer accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Lock className="h-4 w-4 text-primary" /> Never Asking for Passwords
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We never ask for your Google account master password, recovery codes, or 2FA credentials, and we never ask you to transfer ownership of your developer account. Testing is coordinated purely via standard Console opt-in invite links.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Users className="h-4 w-4 text-primary" /> Real People on Real Hardware
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We never use emulators, bots, scripted farms, or fake engagement. All closed testing is conducted by real human testers with active Google Play accounts across varied Android device models.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <ShieldCheck className="h-4 w-4 text-primary" /> Zero False Guarantees
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We will never promise &ldquo;100% guaranteed approval&rdquo; or fabricate reviews. Google reviews software autonomously; our role is delivering the strongest possible compliance, authentic evidence, and technical preparation.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Target className="h-4 w-4 text-primary" /> Strict Data Minimization
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We collect only minimal information necessary to deliver advisory services. Client app concepts, unreleased binaries, and communication logs are treated with strict professional confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Action Callout */}
        <div className="mt-14 rounded-2xl bg-zinc-900 p-8 sm:p-10 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to discuss your Android launch?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Explore our transparent service catalog, use our interactive planning tools, or reach out to our advisory team for a custom scope evaluation.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 shrink-0 flex flex-col sm:flex-row gap-3">
            <Link href="/pricing">
              <Button variant="outline" className="bg-transparent border-zinc-700 text-white hover:bg-zinc-800 font-semibold text-xs py-2 px-4">
                View Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold text-xs py-2 px-5 shadow-sm">
                Contact Advisory Team &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

