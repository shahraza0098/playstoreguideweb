import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Layers,
  AlertTriangle,
  BadgeDollarSign,
  Scale,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions (FAQ) - Google Play Publishing Advisory",
  description:
    "Comprehensive developer answers regarding closed testing (20 testers / 14 days), Play Console verification, production access reviews, policy rejections, pricing, and service boundaries.",
  path: "/faq",
  keywords: [
    "Google Play publishing FAQ",
    "20 testers 14 days FAQ",
    "production access questionnaire FAQ",
    "Play Console D-U-N-S questions",
    "Google Play closed testing reset",
    "Android app rejection troubleshooting",
  ],
});

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "closed-testing",
    name: "Closed Testing (20 Testers / 14 Days)",
    description: "Rules, tester dropouts, cohort requirements, and consecutive day tracking.",
    icon: Users,
    faqs: [
      {
        question: "Why does Google Play require 20 testers opted in for 14 continuous days?",
        answer:
          "In November 2023, Google introduced this requirement for all personal developer accounts created on or after November 13, 2023. The goal is to ensure personal developers test their applications on real hardware with actual users to uncover crashes, UI bugs, and usability flaws prior to public store distribution.",
      },
      {
        question: "What causes the 14-day closed testing counter to reset back to Day 1?",
        answer:
          "Google's automated tracking evaluates your active opted-in tester count continuously. If testers leave the test track or uninstall the build, and your active opted-in count dips below 20 at any point during the 14-day period, Google resets the consecutive day counter. Our cohort coordination supplies 22–25 active testers to provide a defensive buffer.",
      },
      {
        question: "Are organization developer accounts exempt from the 20-tester rule?",
        answer:
          "Yes. Organization accounts that complete identity verification via a verified Dun & Bradstreet (D-U-N-S) number and official corporate registration documents are currently exempt from the mandatory 14-day 20-tester closed testing gate, although internal and closed testing remains strongly advised.",
      },
      {
        question: "Do testers need to open the app every single day?",
        answer:
          "Google evaluates genuine engagement, not just passive installs. Having testers open new builds, interact with core user flows, report crashes, and submit qualitative feedback through the Play Store testing feedback channel demonstrates authentic testing activity, which is scrutinized during production access review.",
      },
      {
        question: "Can I use emulators or automated bots to satisfy the 20-tester requirement?",
        answer:
          "No. Google utilizes sophisticated device telemetry and Google Play Services integrity checks to detect emulator farms and bot scripts. Using artificial or scripted testers can lead to immediate rejection of production access or permanent termination of your developer account for fraudulent behavior.",
      },
    ],
  },
  {
    id: "account-setup",
    name: "Play Console Account Setup & D-U-N-S",
    description: "Individual vs organization accounts, corporate registry matching, and identity documents.",
    icon: ShieldCheck,
    faqs: [
      {
        question: "What is a D-U-N-S number and why does Google require it?",
        answer:
          "A Data Universal Numbering System (D-U-N-S) number is a unique nine-digit business identifier issued by Dun & Bradstreet. Google requires all organization developer accounts to verify their registered entity name, physical address, and corporate status through D-U-N-S to prevent fraudulent or shell publisher accounts.",
      },
      {
        question: "Why do identity verification attempts fail on Google Play Console?",
        answer:
          "The most common cause of verification failure is a minor character mismatch between your Google payments profile and government-issued identity documents (or D-U-N-S registry records). Differences in corporate suffixes ('LLC' vs 'L.L.C.'), abbreviations in street addresses, or mismatched tax IDs trigger automated verification rejections.",
      },
      {
        question: "Can I switch my account from an Individual to an Organization account later?",
        answer:
          "While Google allows account type transitions, the process requires submitting full D-U-N-S verification documents and undergoing re-verification. If done incorrectly, it can freeze ongoing app submissions. We recommend determining your legal publishing structure before submitting your initial releases.",
      },
      {
        question: "Does PlayStoreGuide pay Google's $25 one-time registration fee?",
        answer:
          "No. Google's one-time $25 registration fee must be paid directly by the developer to Google LLC via their official Google Payments merchant gateway. We never collect or handle your developer account registration fees.",
      },
    ],
  },
  {
    id: "production-access",
    name: "Production Access Reviews & Questionnaire",
    description: "Human evaluation rubrics, answering questions, feedback logs, and rejection cooldowns.",
    icon: CheckCircle2,
    faqs: [
      {
        question: "What happens when I click 'Apply for Production' after 14 days?",
        answer:
          "Completing 14 days does not automatically unlock production access. Instead, it unlocks a mandatory 3-part evaluation questionnaire. Google human reviewers assess your answers regarding: (1) how you recruited testers, (2) what feedback was collected, and (3) what specific updates or bug fixes you published during the test period.",
      },
      {
        question: "Why was my production access rejected even though I completed 14 days?",
        answer:
          "The most common causes are submitting superficial questionnaire responses (such as writing 'No bugs were found' or generic one-sentence answers), having zero app updates during testing, or having Android Vitals with high crash rates (>1.09%). Google reviewers look for evidence of iterative improvement.",
      },
      {
        question: "If Google denies production access, what is the cooldown period?",
        answer:
          "Google typically requires you to conduct an additional 14 days of closed testing with at least 20 opted-in testers before you can re-apply. In their rejection email, Google often highlights specific areas (such as feedback collection or testing engagement) that need demonstrable improvement.",
      },
      {
        question: "What Android Vitals metrics do reviewers look at?",
        answer:
          "Google monitors two core vitals thresholds: User-perceived crash rate (must remain below the bad behavior threshold of 1.09%) and User-perceived ANR (Application Not Responding) rate (must remain below 0.47%). Exceeding these thresholds during closed testing severely hurts your production approval chances.",
      },
    ],
  },
  {
    id: "app-submission",
    name: "App Submission & Technical Readiness",
    description: "Android App Bundles (AAB), 64-bit binaries, Target SDK levels, and App Access credentials.",
    icon: Layers,
    faqs: [
      {
        question: "Why does Google require Android App Bundles (AAB) instead of APKs?",
        answer:
          "Since August 2021, Google Play requires all new apps to be published using the Android App Bundle format (.aab). Google Play uses AABs to generate and serve optimized APKs tailored to each user's specific device configuration (screen density, CPU architecture, language), reducing download size by an average of 15%.",
      },
      {
        question: "What is the Target SDK Level requirement for 2026 releases?",
        answer:
          "Google enforces annual Target API level deadlines. For 2025–2026, new apps and updates must target Android 14 (API level 34) or Android 15 (API level 35). Apps targeting older SDK levels cannot be submitted unless an official extension is granted in Play Console.",
      },
      {
        question: "What is the 'App Access' requirement and why does it cause rejections?",
        answer:
          "If parts of your app require login credentials, phone OTPs, or subscription memberships, you must provide functional, permanent reviewer credentials under 'App content > App access'. If reviewers cannot log in or if test accounts hit rate limits, your submission is rejected immediately for broken functionality.",
      },
      {
        question: "What is a Google Pre-Launch Report (PLR)?",
        answer:
          "When you upload an AAB to an internal or closed track, Google automatically installs and executes your app across a physical Firebase Test Lab device matrix for several minutes. The PLR generates automated crash reports, UI performance anomalies, and security vulnerability warnings that should be resolved before submitting for review.",
      },
    ],
  },
  {
    id: "policy-compliance",
    name: "Policy Compliance & Rejection Appeals",
    description: "Data Safety declarations, third-party SDKs, sensitive permissions, and formal appeals.",
    icon: AlertTriangle,
    faqs: [
      {
        question: "How does Google verify my Data Safety declarations?",
        answer:
          "Google runs static binary analysis on compiled code and dependencies. If third-party SDKs (such as AdMob, Facebook SDK, or Firebase Analytics) collect device identifiers, IP addresses, or crash logs, but your Data Safety form claims 'No data collected', Google automatically rejects the build for policy violation.",
      },
      {
        question: "What permissions trigger elevated Google Play policy reviews?",
        answer:
          "Permissions categorized as high-risk or sensitive require explicit justification and video demonstrations. Common examples include FOREGROUND_SERVICE permissions, ACCESS_BACKGROUND_LOCATION, READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE, and SMS / Call Log permissions. Undeclared or unneeded permissions lead to immediate rejection.",
      },
      {
        question: "How do I appeal a Google Play app rejection or policy strike?",
        answer:
          "Appeals must be submitted through the official Google Play Console appeal form. Successful appeals present factual, policy-grounded evidence demonstrating how your app complies with the specific policy section cited, accompanied by video links, documentation, or code diffs. Emotional arguments or claiming 'other apps do this' are routinely rejected.",
      },
      {
        question: "Can PlayStoreGuide guarantee that an appeal will overturn Google's decision?",
        answer:
          "No. We provide expert analysis to identify the exact violation root-cause and prepare structured appeal briefs, but Google's Policy Appeals team maintains exclusive decision authority. No legitimate service can guarantee an appeal outcome.",
      },
    ],
  },
  {
    id: "pricing-payments",
    name: "Pricing, Payments & Invoices",
    description: "Enquiry-based model, accepted payment methods, milestone invoicing, and currencies.",
    icon: BadgeDollarSign,
    faqs: [
      {
        question: "Why does PlayStoreGuide use an enquiry-based pricing model?",
        answer:
          "Every Android application differs significantly in architecture, testing hardware dependencies, country targeting, and policy history. A basic offline tool requires far fewer operational resources than a Bluetooth-enabled IoT companion app or an app recovering from a policy strike. Custom quotations ensure you pay only for confirmed deliverables.",
      },
      {
        question: "What payment methods and processors do you accept?",
        answer:
          "Advisory invoices are processed securely through established payment gateways including major credit cards, debit cards, Wise Business, and international bank transfers. We never store credit card numbers on our servers.",
      },
      {
        question: "How long is a project quotation valid?",
        answer:
          "All written project quotations are valid for fourteen (14) calendar days from the date of issue, allowing your team ample time to review deliverables, timelines, and payment terms.",
      },
      {
        question: "Are there any hidden platform fees or recurring subscriptions?",
        answer:
          "No. Our quotations are one-time project fees tied directly to defined deliverables and milestones. We do not charge recurring subscriptions or unannounced maintenance fees.",
      },
    ],
  },
  {
    id: "service-scope",
    name: "Service Scope & Operating Boundaries",
    description: "Inclusions, exclusions, password policies, and developer responsibilities.",
    icon: Scale,
    faqs: [
      {
        question: "Do you ever ask for my Google Account password or 2FA credentials?",
        answer:
          "Never. We maintain a strict zero-credential policy. We will never ask for your Google account password, recovery codes, or two-factor authentication tokens. Closed testing cohorts are managed entirely through standard Play Console email list invitations or opt-in links.",
      },
      {
        question: "Do you write or fix my application source code from scratch?",
        answer:
          "Our advisory covers technical and policy audits, manifest reviews, build configuration recommendations, and tester coordination. While we provide detailed remediation code snippets and manifest diffs, our specialists do not build custom proprietary application features from scratch.",
      },
      {
        question: "Do you transfer ownership of developer accounts?",
        answer:
          "No. You retain 100% ownership and administrative control over your Google Play Console developer account, application intellectual property, and app listings at all times.",
      },
      {
        question: "Is PlayStoreGuide affiliated with Google LLC?",
        answer:
          "No. PlayStoreGuide is an independent advisory service and technical educational resource. We are not affiliated with, endorsed by, or operated by Google LLC. 'Google Play' and 'Android' are registered trademarks of Google LLC.",
      },
    ],
  },
  {
    id: "support-timelines",
    name: "Support, Communication & Timelines",
    description: "Response windows, communication channels, kickoff speed, and post-launch follow-up.",
    icon: Clock,
    faqs: [
      {
        question: "What is your typical response window for consultation inquiries?",
        answer:
          "All incoming developer consultation requests and quotation inquiries submitted through our contact form are evaluated and answered within 12–24 business hours.",
      },
      {
        question: "How quickly can a 14-day closed testing cohort be mobilized?",
        answer:
          "Once scope is confirmed and your closed testing track is configured in Google Play Console with the opt-in invite link, our verified testing cohort is typically mobilized within 24–48 hours to begin the 14-day period.",
      },
      {
        question: "What ongoing support is provided after closed testing concludes?",
        answer:
          "Following completion of the 14-day testing window, our team compiles a comprehensive feedback dossier and provides guidance on answering the Production Access evaluation questionnaire. If Google requests additional testing iterations, our team advises on necessary improvements.",
      },
      {
        question: "What communication channels do you use for advisory projects?",
        answer:
          "We coordinate primarily via email for clear documentation and record-keeping. For multi-week advisory retainers or agency engagements, dedicated Slack or asynchronous project channels can be arranged upon request.",
      },
    ],
  },
];

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  // Flatten all FAQs across categories for structured data
  const allFaqs = faqCategories.flatMap((cat) => cat.faqs);
  const faqSchema = generateFAQSchema(allFaqs);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

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
            <li className="font-semibold text-foreground">FAQ</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="flex h-6 items-center rounded-md bg-primary/10 px-2.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              Knowledge Base
            </span>
            <Badge variant="outline" className="text-[11px]">
              Factual &amp; Policy-Aligned
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Detailed, factual answers regarding closed testing requirements, D-U-N-S verification, production access reviews, policy compliance, and advisory boundaries.
          </p>
        </div>

        {/* Quick Category Jump Links */}
        <div className="rounded-2xl border border-border bg-card p-5 mb-12 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
            Jump to Topic Category:
          </p>
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <span>{cat.name.split(" ")[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Categories & Questions */}
        <div className="space-y-16">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.id} id={category.id} className="scroll-mt-24 space-y-6">
                <div className="border-b border-border pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {category.name}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 pl-10.5">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-4">
                  {category.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-2.5"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-foreground flex items-start gap-2.5 leading-snug">
                        <span className="text-primary font-mono text-xs sm:text-sm shrink-0 mt-0.5">
                          Q:
                        </span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6 sm:pl-7">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Ask Question / Inquire CTA */}
        <div className="mt-16 rounded-2xl bg-zinc-900 p-8 sm:p-10 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              Have a specific question not covered here?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Reach out to our technical advisory team with your app details, policy rejection emails, or target release dates. We evaluate custom cases within 12–24 business hours.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 shrink-0">
            <Link href="/contact">
              <Button className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold px-6 py-2.5 text-sm shadow-md">
                Contact Technical Advisory &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

