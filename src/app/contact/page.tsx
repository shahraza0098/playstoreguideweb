import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Mail, ShieldCheck, Clock, Lock } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";
import { LEGAL_CONFIG } from "@/data/legal-config";

export const metadata: Metadata = constructMetadata({
  title: "Contact Our Publishing Advisory Team",
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
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Developer Consultation
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Let&rsquo;s Discuss Your Google Play Release.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you need 20 verified testers for your 14-day closed testing cohort, help answering the production access review questionnaire, or recovery from an app rejection strike, our technical specialists are ready to assist.
            </p>

            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Direct Email
                  </h3>
                  <a
                    href={`mailto:${LEGAL_CONFIG.supportEmail}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {LEGAL_CONFIG.supportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Response Window
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    All technical inquiries are evaluated and answered within 12–24 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Confidentiality Guarantee
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Your code repositories, unreleased APKs, and proprietary app ideas are held in strict confidence under our Privacy Policy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Zero Passwords Requested
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    We never ask for Google passwords or account ownership transfers. Testing is coordinated purely via standard Play Console opt-in invite links.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Element */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Publishing Project Intake
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
