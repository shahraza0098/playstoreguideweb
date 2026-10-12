import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions (FAQ) | Google Play Publishing Advisory",
  description:
    "Comprehensive answers to common questions about Google Play closed testing requirements, 20 testers rules, production access reviews, D-U-N-S verification, and policy compliance.",
  path: "/faq",
  keywords: [
    "Google Play publishing FAQ",
    "20 testers 14 days FAQ",
    "production access questionnaire FAQ",
    "Play Console D-U-N-S questions",
  ],
});

const faqs = [
  {
    question: "Why does Google Play mandate 20 testers for 14 days?",
    answer:
      "In November 2023, Google introduced this requirement for all personal developer accounts created on or after November 13, 2023. The objective is to ensure that new Android apps undergo legitimate user testing, functional QA, and stability validation on real hardware before being distributed to billions of Google Play users.",
  },
  {
    question: "Are organization developer accounts exempt from the 20-tester requirement?",
    answer:
      "Yes. Organization developer accounts (which require verification via a valid Dun & Bradstreet D-U-N-S number and corporate documentation) are currently exempt from the mandatory 14-day 20-tester rule. However, closed testing is still recommended prior to public rollout.",
  },
  {
    question: "What is a D-U-N-S number, and how do I get one?",
    answer:
      "A D-U-N-S (Data Universal Numbering System) number is a unique nine-digit identifier issued by Dun & Bradstreet for business entities. Google uses it to verify legal company existence and address accuracy. You can look up an existing D-U-N-S number or apply for a free one on the Dun & Bradstreet website (which typically takes 14–30 business days).",
  },
  {
    question: "What happens if a tester uninstalls the app during the 14 days?",
    answer:
      "Google requires at least 20 testers to remain opted into your closed test continuously. If testers drop out and your active opted-in count falls below 20 at any point, the 14-day counter can reset to Day 1. This is why our advisory coordinates 22–25 testers to provide a safe buffer.",
  },
  {
    question: "Why was my production access rejected after completing 14 days?",
    answer:
      "Completing 14 days only qualifies you to apply; it does not guarantee approval. Google human reviewers assess your responses to the Production Access questionnaire (e.g., how you recruited testers, what feedback was collected, and what updates were deployed). Submitting vague, one-sentence answers or claiming 'no bugs were found' triggers immediate rejection.",
  },
  {
    question: "Do you guarantee 100% Google Play approval?",
    answer:
      "No, and no legitimate service can. Google reserves exclusive discretion to approve or reject apps. Anyone promising '100% guaranteed Google Play approval' is violating advertising standards. Our service provides rigorous technical auditing, genuine human tester coordination, and structured evidence preparation to satisfy Google's official policies.",
  },
  {
    question: "What are the most frequent causes of Google Play app rejections?",
    answer:
      "The most common rejection triggers include: (1) broken functionality or crashes on launch during reviewer testing; (2) inoperative reviewer login credentials under App access; (3) undeclared sensitive permissions (like background location or full storage); (4) discrepancies between third-party SDK telemetry and Data Safety declarations; and (5) metadata spam or misleading graphics in store listings.",
  },
  {
    question: "How does the Data Safety form affect the review process?",
    answer:
      "Google uses static binary analysis to detect SDKs compiled into your APK/AAB (such as AdMob, Firebase, or analytics trackers). If an SDK collects device identifiers or diagnostics but your Data Safety form declares 'No data collected', the release will be automatically flagged and rejected for policy violation.",
  },
  {
    question: "Is PlayStoreGuide affiliated with or endorsed by Google?",
    answer:
      "No. PlayStoreGuide is an independent technical consultancy and developer resource. It is not affiliated with, sponsored by, or endorsed by Google LLC or Alphabet Inc. 'Google Play', 'Android', and 'Google Play Console' are registered trademarks of Google LLC.",
  },
];

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">FAQ</li>
          </ol>
        </nav>

        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Frequently Asked Questions
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          Google Play Publishing FAQ
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Clear, factual answers regarding closed testing requirements, questionnaire evaluations, policy audits, and account verifications.
        </p>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-start gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm shrink-0 mt-0.5">
                  Q{index + 1}.
                </span>
                <span>{faq.question}</span>
              </h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Ask Question CTA */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Have a question not addressed here?
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            Contact our technical team directly. We evaluate complex release questions, policy disputes, and compliance requirements.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-500 font-semibold px-6">
                Ask a Technical Question &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
