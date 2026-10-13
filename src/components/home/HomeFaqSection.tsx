import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export const homeFaqs = [
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

export function HomeFaqSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-panel dark:bg-background border-b border-border/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="Clear, Honest Answers About Google Play Publishing &amp; Advisory"
          description="We believe in complete transparency. Here is how our services operate, our policy compliance standards, and the realities of Google Play's review process."
        />

        <div className="mt-14 space-y-4">
          {homeFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border/80 bg-surface-panel dark:bg-card p-5 sm:p-6 transition-all hover:border-primary/40 shadow-2xs"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                <span className="text-sm sm:text-base pr-4 leading-snug">
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

        <div className="mt-12 text-center text-xs text-muted-foreground">
          Have a question not listed here? Visit our{" "}
          <Link href="/faq" className="text-primary font-semibold hover:underline">
            comprehensive FAQ page
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            send an advisory enquiry directly
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
