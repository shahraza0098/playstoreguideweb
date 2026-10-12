import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  FileQuestion,
  HelpCircle,
  MessageSquare,
  AlertTriangle,
  ArrowRight,
  Check,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Production Access Review & Questionnaire Advisory",
  description:
    "Expert guidance for answering Google Play's production access questionnaire. Learn how to structure evidence-based answers detailing tester feedback, bug fixes, and iteration history to satisfy human reviewers.",
  path: "/services/production-access",
  keywords: [
    "Google Play production access questionnaire",
    "apply for production Google Play",
    "Google Play closed test feedback questions",
    "production access rejected Google Play",
  ],
});

export default function ProductionAccessServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Production Access Advisory", url: "/services/production-access" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Google Play Production Access Review & Questionnaire Advisory",
    description:
      "Advisory service guiding Android developers through Google Play's production access evaluation, questionnaire drafting, feedback log synthesis, and release readiness verification.",
    url: "/services/production-access",
  });

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-emerald-600 transition-colors">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">
              Production Access Advisory
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Launch Gateway Review
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Google Play Production Access Review &amp; Questionnaire Guidance
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Completing 14 days of closed testing does not automatically unlock production access. Google requires developers to complete a detailed questionnaire evaluated by human reviewers. Vague, generic responses lead directly to rejection and mandate an additional 14 days of testing.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-6">
                  Review My Questionnaire Responses
                </Button>
              </Link>
              <Link href="/guides/how-to-pass-production-access-review">
                <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700">
                  Read Questionnaire Guide
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Google's Core Review Questions
            </h2>
            <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>How did you recruit your closed test testers?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>What feedback did you collect during the test?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>What bug fixes or improvements did you implement?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>How did you decide the app is ready for production?</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Applications Fail */}
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Why Low-Effort Answers Trigger Rejections
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <AlertTriangle className="h-6 w-6 text-rose-600 dark:text-rose-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                &ldquo;No Bugs Found&rdquo;
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Stating that testers reported zero issues is an immediate red flag. Real software on 20+ different Android devices always uncovers minor UI glitches, performance nuances, or usability suggestions.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Missing Evidence of Iteration
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Google checks your release track history. If you uploaded Version 1.0.0 on Day 1 and never released a minor patch or revision in response to tester feedback, your claims of iteration lack credibility.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <FileCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-zinc-100">
                Generic Recruitment Claims
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Saying &ldquo;I shared the link online&rdquo; is insufficient. Google wants to see targeted user recruitment aligned with your app's intended audience and category.
              </p>
            </div>
          </div>
        </div>

        {/* How We Help */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Our Production Review Advisory Deliverables
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Feedback Synthesis</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                We organize real tester comments into distinct thematic areas (Performance, UI responsiveness, Onboarding flow, Device compatibility) that demonstrate legitimate software refinement.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Changelog Alignment</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                We ensure your release notes and Git commits reflect the specific bug fixes and performance enhancements cited in your questionnaire responses.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Production Readiness Metrics</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                We review Android Vitals thresholds (crash rate &lt; 1.09%, ANR rate &lt; 0.47%) so you can objectively validate stability before applying.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Formal Response Review</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                We perform a rigorous editorial pass over your responses before you click &ldquo;Apply for production&rdquo; to eliminate ambiguities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Applying for Production Access Soon?
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Do not risk a 14-day testing reset. Let us audit your testing history and questionnaire drafts before final submission.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-8">
                Request Questionnaire Advisory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
