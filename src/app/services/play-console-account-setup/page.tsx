import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Console Account Setup & Verification Advisory",
  description:
    "Avoid developer account suspension during mandatory Google Play Console verification. Pre-flight document audits, D-U-N-S number alignment, account security, and 100% client credential ownership.",
  path: "/services/play-console-account-setup",
  keywords: [
    "Google Play Console account setup",
    "Play Console verification guide",
    "DUNS number Google Play",
    "Google Play organization verification",
    "developer account registration Google Play",
    "Play Console identity verification",
  ],
});

const pageData: ServicePageData = {
  slug: "play-console-account-setup",
  eyebrow: "Identity & Organization Verification",
  h1: "Google Play Console Account Setup & Verification Advisory",
  subtitle:
    "Navigate Google Play Console's strict personal and organizational verification protocols without risking account suspension. We guide developers through document audits, D-U-N-S matching, and security configurations while you retain 100% account ownership.",
  snapshot: {
    targetAudience: "Personal & Organization Developers",
    engagementModel: "Pre-Flight Document Audit & Guidance",
    primaryFocus: "Identity Verification & D-U-N-S Alignment",
    googlePolicyRule: "Mandatory verification for all Play Console accounts",
  },
  problem: {
    title: "Why Account Verification Errors Lead to Immediate Console Termination",
    description:
      "Google enforces strict anti-abuse verification standards partnered with Dun & Bradstreet and government identity databases. Submitting mismatched names, unverified corporate addresses, or incompatible document formats results in rejected verification, account termination, and forfeiture of registration fees.",
    cards: [
      {
        title: "D-U-N-S Record Letter-by-Letter Mismatches",
        description:
          "For organization accounts, your company name, physical street address, and legal entity structure in Google Payments must match your Dun & Bradstreet record letter-for-letter. Even minor abbreviations cause automatic rejection.",
      },
      {
        title: "Rejected Personal ID & Address Documents",
        description:
          "Virtual office addresses, PO boxes, utility bills older than 60 days, or cropped phone camera photos are rejected by Google's automated scanners, leading to verification deadlines lapsing.",
      },
      {
        title: "Accidental Association with Suspended Accounts",
        description:
          "Using credit cards, phone numbers, or recovery emails previously tied to terminated developer profiles triggers automated risk flags that can close new accounts immediately upon registration.",
      },
    ],
  },
  whoIsItFor: [
    {
      persona: "New Solo Android Developers",
      description:
        "Engineers creating their first personal Play Console account who need to ensure their personal ID and address documents pass without delays.",
    },
    {
      persona: "Startups & Companies",
      description:
        "Businesses setting up an organization account requiring a D-U-N-S number, corporate documentation, and official domain email verification.",
    },
    {
      persona: "Developers Facing Verification Deadlines",
      description:
        "Existing accounts that received mandatory Play Console re-verification notices and must complete the process before account removal.",
    },
    {
      persona: "Engineering Leads & CTOs",
      description:
        "Teams needing to implement least-privilege role-based access, 2-Step Verification, and secure developer credential architecture.",
    },
  ],
  deliverables: [
    {
      title: "Pre-Flight Audit of Identity & Legal Documents",
      description:
        "Comprehensive review of government-issued photo IDs, corporate incorporation certificates, and proof of address documents against Google's accepted criteria.",
    },
    {
      title: "Dun & Bradstreet (D-U-N-S) Registry Alignment",
      description:
        "Cross-referencing your company's D&B profile with your proposed Google Payments profile to ensure exact letter-by-letter synchronization.",
    },
    {
      title: "Payments Profile & Tax Information Advisory",
      description:
        "Guidance on configuring merchant account settings, W-8BEN/W-9 tax forms, and currency settings to ensure smooth payout eligibility.",
    },
    {
      title: "Public Developer Profile Compliance Review",
      description:
        "Verifying that your developer name, physical address, customer support email, and phone number comply with Google's public disclosure mandates.",
    },
    {
      title: "Account Security & Role Delegation Setup",
      description:
        "Recommendations for hardware security keys, Google Authenticator 2FA, and scoped Play Console collaborator permissions without sharing root credentials.",
    },
  ],
  exclusions: [
    {
      title: "No Payment of Google's $25 Registration Fee",
      description:
        "The $25 one-time registration fee must be paid directly to Google LLC by the account owner using their own payment method.",
    },
    {
      title: "No Credential Custody or Account Ownership",
      description:
        "We never ask for or store your Google account password, recovery codes, or financial cards. You retain 100% administrative control.",
    },
    {
      title: "No Circumvention of Sanctions or Fraudulent Data",
      description:
        "We strictly refuse to work with fictitious entities, forged documents, or attempts to bypass international trade embargoes.",
    },
    {
      title: "No Expedited D-U-N-S Registration from Third Parties",
      description:
        "D-U-N-S numbers are issued exclusively by Dun & Bradstreet. We can guide your application, but D&B sets their own processing timeframes.",
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Account Type & Requirement Assessment",
      description:
        "We determine whether a Personal or Organization account fits your business model and audit existing D-U-N-S registry records.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Document Pre-Flight Inspection",
      description:
        "We inspect your identification, proof of address, and corporate documentation to identify address discrepancies or format issues.",
      duration: "Days 1-2",
    },
    {
      step: "03",
      title: "Console Registration & Payments Setup",
      description:
        "We guide you step-by-step through Play Console registration, payment of Google's $25 fee, and profile field alignment.",
      duration: "Day 3",
    },
    {
      step: "04",
      title: "Verification Submission & Security Hardening",
      description:
        "You submit documents through Play Console. We guide the setup of 2FA, recovery emails, and collaborator role permissions.",
      duration: "Day 4+",
    },
  ],
  prerequisites: [
    {
      title: "Dedicated, Clean Google Account",
      description:
        "A fresh or securely managed Google account not previously associated with terminated developer accounts or policy strikes.",
    },
    {
      title: "Valid Payment Card for Google's $25 Fee",
      description:
        "An internationally enabled credit or debit card registered in the account owner's legal name and country of residence.",
    },
    {
      title: "Official Government Photo ID",
      description:
        "An unexpired passport, national ID card, or driver's license with clear visibility of all four corners.",
    },
    {
      title: "Proof of Address (Dated Within 60 Days)",
      description:
        "A bank statement or utility bill in PDF format displaying the exact legal name and residential/business street address.",
    },
    {
      title: "D-U-N-S Number (For Organizations)",
      description:
        "An active 9-digit Dun & Bradstreet number with matching legal business name and physical registered office.",
    },
  ],
  timeline: {
    headline: "2 to 5 Business Days for Audit & Setup",
    description:
      "Document auditing and profile setup can be completed rapidly. Google's review team typically approves verification within 2 to 7 business days following submission.",
    milestones: [
      {
        name: "Document & D&B Pre-Flight Audit",
        estimate: "Days 1 to 2",
        detail: "Audit legal names, utility bills, and verify D&B database records prior to console entry.",
      },
      {
        name: "Console Registration & Payment",
        estimate: "Day 2 to 3",
        detail: "Client registers in Play Console, pays the $25 fee, and configures developer details.",
      },
      {
        name: "Google Review & Verification Confirmation",
        estimate: "Days 3 to 7",
        detail: "Google reviews submitted documentation and unlocks full developer console functionality.",
      },
    ],
  },
  pricing: {
    model: "Fixed Advisory Fee",
    headline: "Transparent Verification Consultation",
    description:
      "Our account setup advisory is offered as a flat-fee engagement covering complete document pre-flight audits, D-U-N-S alignment checks, and registration guidance.",
    highlights: [
      "Thorough pre-submission document audit to prevent rejection strikes",
      "D-U-N-S registry synchronization verification for organization accounts",
      "Google Payments profile and merchant tax configuration review",
      "Account security hardening and role-based access setup",
      "100% client account and credential ownership",
    ],
    note:
      "Google's $25 developer registration fee is paid directly to Google LLC via your own payment method. We never charge for account creation credentials or middleman fees.",
  },
  faqs: [
    {
      question: "What is the difference between a Personal and an Organization developer account?",
      answer:
        "Personal accounts are registered under an individual's legal name, require personal photo ID verification, and are subject to the mandatory 14-day 20-tester closed testing requirement. Organization accounts are registered under a corporate entity, require a D-U-N-S number and corporate documentation, and are exempt from the mandatory 14-day 20-tester closed testing rule (though closed testing is still recommended).",
    },
    {
      question: "How do I obtain a D-U-N-S number for an organization account?",
      answer:
        "A D-U-N-S number is issued free of charge by Dun & Bradstreet (D&B). You can request one directly on the D&B website for your incorporated business. The free registration process typically takes 14 to 30 days, although expedited paid options are available through D&B directly.",
    },
    {
      question: "Will PlayStoreGuide ever ask for my Google account login or password?",
      answer:
        "Never. You retain 100% administrative control over your account. We guide you via screen shares, video calls, or detailed step-by-step checklists. If we need to inspect your console settings, you can invite us as a scoped collaborator with read-only permissions that you can revoke at any time.",
    },
    {
      question: "Can I convert an existing personal account into an organization account?",
      answer:
        "Yes. Google Play Console allows account type migration under Developer account > About > Account type. However, you must possess an active D-U-N-S number and official corporate registration papers matching the new entity name exactly before initiating the migration.",
    },
    {
      question: "What documents does Google accept for proof of address?",
      answer:
        "Google accepts bank statements, credit card statements, and utility bills (electricity, water, internet) issued within the last 60 days. The document must display your full legal name and address matching your payments profile. Electronic PDFs directly downloaded from your bank are strongly preferred over mobile phone photos of paper bills.",
    },
  ],
  officialDocs: [
    {
      title: "Verify Your Developer Account Identity",
      url: "https://support.google.com/googleplay/android-developer/answer/10841920",
      description: "Official Google documentation on mandatory identity verification requirements for personal and organization accounts.",
    },
    {
      title: "Developer Account Types: Personal vs Organization",
      url: "https://support.google.com/googleplay/android-developer/answer/13813959",
      description: "Google's breakdown of requirements, D-U-N-S numbers, and capabilities between account types.",
    },
  ],
  relatedGuides: [
    {
      title: "Google Play Developer Account Verification: D-U-N-S, Identity & Common Pitfalls",
      slug: "google-play-account-verification-guide",
      category: "Account Verification",
      readTime: "8 min read",
      summary:
        "Avoid fatal verification mistakes. Practical steps for personal vs organization accounts, document formatting, and D-U-N-S synchronization.",
    },
    {
      title: "Google Play 20 Testers Requirement: The Complete 14-Day Closed Testing Playbook",
      slug: "google-play-20-testers-requirement-playbook",
      category: "Closed Testing",
      readTime: "9 min read",
      summary:
        "A step-by-step technical guide to structuring your closed testing track, recruiting compliant testers, tracking engagement, and compiling required feedback.",
    },
    {
      title: "How to Pass Google Play Production Access Review: Questions & Best Practices",
      slug: "how-to-pass-production-access-review",
      category: "Production Access",
      readTime: "11 min read",
      summary:
        "An in-depth breakdown of Google's production access questionnaire. Learn what human reviewers look for in your testing feedback and iteration history.",
    },
  ],
  ctaHeadline: "Need Guidance on Setting Up or Verifying Your Play Console?",
  ctaDescription:
    "Contact our technical advisory team to review your documents and verify D-U-N-S readiness before submitting to Google.",
};

export default function PlayConsoleAccountSetupPage() {
  return <ServicePageTemplate data={pageData} />;
}
