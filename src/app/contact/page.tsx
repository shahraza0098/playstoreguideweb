import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Mail, ShieldCheck, Clock, Lock, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";
import { LEGAL_CONFIG } from "@/data/legal-config";

export const metadata: Metadata = constructMetadata({
  title: "Contact Our Publishing Advisory Team",
  description:
    "Schedule a consultation with our Android developer publishing team. Inquire about closed testing coordination, Play Console verification, production access questionnaire reviews, and app rejection diagnosis.",
  path: "/contact",
});

const faqs = [
  {
    q: "How quickly does your team respond to initial inquiries?",
    a: "Our engineering and advisory team evaluates and answers all developer inquiries within 12 to 24 business hours. If your submission requires urgent review ahead of a policy deadline, please note that in your message.",
  },
  {
    q: "Do I ever need to share my Google account password?",
    a: "Never. We strictly operate using standard Play Console developer permissions or public opt-in testing links. We will never request account credentials, master passwords, or ownership transfers.",
  },
  {
    q: "What information should I prepare before our consultation?",
    a: "Having your app's package name, current Play Console track status (e.g., active closed track with tester count), and any rejection notice emails received from Google will allow us to give you actionable advice immediately.",
  },
  {
    q: "Is our discussion protected under confidentiality?",
    a: "Yes. All code snippets, unreleased APK/AAB builds, and proprietary business concepts shared with PlayStoreGuide.com are kept strictly confidential under our strict privacy policy.",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
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
            <li className="font-semibold text-foreground">Contact</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Trust Signals & Consultation Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-cream border border-primary/20 text-xs font-bold text-primary mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Developer Consultation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                Let&rsquo;s Discuss Your Google Play Release.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you need 20 verified testers for your 14-day closed testing cohort, help answering the production access review questionnaire, or recovery from an app rejection strike, our technical specialists are ready to assist.
              </p>
            </div>

            {/* Direct Trust Cards */}
            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-2xl border border-border/80 bg-surface-panel dark:bg-card flex items-start gap-3.5 shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Direct Email
                  </h3>
                  <a
                    href={`mailto:${LEGAL_CONFIG.supportEmail}`}
                    className="text-sm font-semibold text-primary hover:underline block mt-0.5"
                  >
                    {LEGAL_CONFIG.supportEmail}
                  </a>
                  <span className="text-[11px] text-muted-foreground block mt-0.5">
                    Fastest channel for attachments &amp; policy notice PDFs
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border/80 bg-surface-panel dark:bg-card flex items-start gap-3.5 shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Response Window
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    All technical inquiries are evaluated and answered within <strong>12–24 business hours</strong> by experienced Android developers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border/80 bg-surface-panel dark:bg-card flex items-start gap-3.5 shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Confidentiality Guarantee
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Your code repositories, unreleased APKs, and proprietary app ideas are held in strict confidence under our Privacy Policy.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border/80 bg-surface-panel dark:bg-card flex items-start gap-3.5 shadow-2xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Zero Passwords Requested
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    We never ask for Google passwords or account ownership transfers. Testing is coordinated purely via standard Play Console opt-in invite links.
                  </p>
                </div>
              </div>
            </div>

            {/* What to expect card */}
            <div className="p-5 rounded-2xl border border-primary/20 bg-surface-cream/70 dark:bg-card space-y-2 text-xs">
              <span className="font-bold text-foreground flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> What Happens Next
              </span>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>We review your app category, package details, and timeline.</li>
                <li>We prepare a structured action plan or tester recruitment timeline.</li>
                <li>You receive a clear, no-obligation recommendation within 24 hours.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Intake Form Card */}
          <div className="lg:col-span-7 rounded-3xl border border-border/80 bg-surface-panel dark:bg-card p-6 sm:p-9 shadow-floating">
            <div className="mb-6 border-b border-border/70 pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Publishing Project Intake
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Share your current release status and target dates. We respond promptly with actionable steps.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Server-Rendered FAQ Section for SEO */}
        <div className="mt-16 pt-12 border-t border-border/60 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Consultation FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Frequently Asked Questions About Working With Us
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
      </div>
    </div>
  );
}
