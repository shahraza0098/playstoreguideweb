import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Mail, ShieldCheck, Clock } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = constructMetadata({
  title: "Contact PlayStoreGuide | Publishing Advisory Consultation",
  description:
    "Schedule a consultation with our Android developer publishing team. Inquire about closed testing coordination, Play Console verification, and app rejection diagnosis.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-zinc-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-zinc-900 dark:text-zinc-200">Contact</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Developer Consultation
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
              Let&rsquo;s Discuss Your Google Play Release.
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Whether you need 20 verified testers for your 14-day closed testing cohort, help answering the production access review questionnaire, or recovery from an app rejection strike, our technical specialists are ready to assist.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:support@playstoreguide.com"
                    className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    support@playstoreguide.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Response Window
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    All technical inquiries are evaluated and answered within 12–24 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Confidentiality Guarantee
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Your code repositories, unreleased APKs, and proprietary app ideas are held in strict confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Element */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Publishing Project Intake
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
