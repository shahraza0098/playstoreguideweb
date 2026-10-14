import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play App Publishing & Pre-Launch Compliance Audit",
  description:
    "Comprehensive pre-launch compliance audit for Android apps. Verify Target SDK 34/35 requirements, sensitive manifest permissions, reviewer access credentials, and Data Safety synchronization.",
  path: "/services/app-publishing-assistance",
  keywords: [
    "Google Play app publishing assistance",
    "pre launch compliance audit Google Play",
    "Target SDK 34 Google Play",
    "Google Play Data Safety audit",
    "App Access reviewer credentials",
    "Android app release checklist",
  ],
});

const pageData: ServicePageData = {
  slug: "app-publishing-assistance",
  eyebrow: "Pre-Release Verification",
  h1: "Google Play App Publishing & Pre-Launch Compliance Audit",
  subtitle:
    "A comprehensive technical and policy audit before your initial Google Play release. We audit Target SDK compliance, sensitive manifest permissions, reviewer access credentials, and Data Safety declarations to eliminate release rejections.",
  snapshot: {
    targetAudience: "Developers Preparing Initial Release",
    engagementModel: "Pre-Submission Technical & Policy Audit",
    primaryFocus: "Target SDK 34/35, Data Safety & Permissions",
    googlePolicyRule: "Google Play Developer Policy Center Standards",
  },
  problem: {
    title: "Why Automated Submission Scanners Halt Over 50% of New Android Releases",
    description:
      "When you upload an Android App Bundle (AAB), Google executes automated static binary analysis. Mismatches between your compiled libraries, manifest permissions, and Play Console declarations trigger instant submission halts and policy strikes.",
    cards: [
      {
        title: "Target API Level Deprecation Deadlines",
        description:
          "Google mandates that all new apps and updates must target Android 14 (API level 34) or Android 15 (API level 35). Outdated build configurations are blocked from rollout immediately.",
      },
      {
        title: "Undeclared Sensitive & Foreground Permissions",
        description:
          "Requesting high-risk permissions (like background location, FOREGROUND_SERVICE, or media access) without declared core functionality or video demonstrations results in automated rejection.",
      },
      {
        title: "Data Safety vs. Third-Party SDK Discrepancies",
        description:
          "Bundling ad networks, analytics, or crash reporters without declaring their specific telemetry in the Data Safety form triggers automated binary scanner flags.",
      },
    ],
  },
  whoIsItFor: [
    {
      persona: "Developers Preparing Initial Release",
      description:
        "Engineers publishing their first app on Google Play who want to avoid rookie mistakes, rejected releases, or account strikes.",
    },
    {
      persona: "Teams Migrating to Target SDK 34+",
      description:
        "Engineering teams updating existing codebases to meet Google's annual API level deadlines and foreground service restrictions.",
    },
    {
      persona: "Apps with Complex Authentication",
      description:
        "Creators whose apps require login credentials and need guidance configuring App Access demo accounts that bypass OTP/SMS blocks.",
    },
    {
      persona: "Apps with Monetization & Analytics SDKs",
      description:
        "Developers integrating AdMob, Firebase, AppsFlyer, or AppLovin who need to ensure data collection declarations match embedded binaries.",
    },
  ],
  deliverables: [
    {
      title: "Target SDK & Build Configuration Audit",
      description:
        "Verification that your compiled AAB meets current Target API requirements (API 34/35) and complies with modern Android packaging rules.",
    },
    {
      title: "AndroidManifest.xml Permissions Audit",
      description:
        "Review of declared permissions to remove unused, obsolete, or high-risk access declarations that trigger mandatory policy reviews.",
    },
    {
      title: "Complete Data Safety Section Synchronization",
      description:
        "Cross-referencing embedded third-party SDKs against your Play Console Data Safety form to ensure advertising IDs, analytics, and crash data are declared accurately.",
    },
    {
      title: "App Access Credentials & Demo Reviewer Setup",
      description:
        "Configuring unrestricted test credentials in Play Console that allow human reviewers to test your full app flow without two-factor authentication barriers.",
    },
    {
      title: "Privacy Policy & Store Listing Compliance Review",
      description:
        "Verifying that your privacy policy URL is HTTPS-secured, active, and clearly references in-app data collection practices.",
    },
  ],
  exclusions: [
    {
      title: "No Custom Application Code Writing",
      description:
        "We audit build configurations and identify policy bugs, but writing application features or refactoring Gradle scripts remains the developer's responsibility.",
    },
    {
      title: "No Circumvention of Google Security Scanners",
      description:
        "We do not provide methods to bypass Google's static analysis or obfuscate prohibited third-party libraries.",
    },
    {
      title: "No Acceptance of Prohibited Content",
      description:
        "We strictly refuse to audit apps violating Google Play content policies, such as malware, piracy, deceptive financial schemes, or impersonation.",
    },
    {
      title: "No Privacy Policy Web Hosting",
      description:
        "We evaluate privacy policy text for compliance, but the policy must be hosted on your own domain or web infrastructure.",
    },
  ],
  workflow: [
    {
      step: "01",
      title: "AAB & Manifest Static Inspection",
      description:
        "We inspect your compiled binary, decompiled manifest, target SDK, and third-party dependencies for known policy triggers.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Data Safety & Privacy Mapping",
      description:
        "We catalog every tracking SDK and construct a field-by-field Data Safety declaration mapping for your Play Console form.",
      duration: "Days 1-2",
    },
    {
      step: "03",
      title: "App Access & Reviewer Configuration",
      description:
        "We verify test login credentials, bypass mechanisms, and ensure reviewers can evaluate full app functionality without blockers.",
      duration: "Day 2",
    },
    {
      step: "04",
      title: "Actionable Report & Staged Rollout Strategy",
      description:
        "We deliver a clear remediation checklist and guide you through setting up a cautious staged rollout (e.g., 10% to 100%).",
      duration: "Day 3",
    },
  ],
  prerequisites: [
    {
      title: "Signed Production Android App Bundle (AAB)",
      description:
        "The finalized application binary intended for submission, signed with your upload key.",
    },
    {
      title: "Active, HTTPS-Secured Privacy Policy URL",
      description:
        "A public web page disclosing developer contact info and specific data collection practices.",
    },
    {
      title: "Demo Reviewer Account Credentials",
      description:
        "A working test username/password pre-populated with data, free of SMS verification or geo-restrictions.",
    },
    {
      title: "List of Embedded Third-Party SDKs",
      description:
        "Knowledge of external libraries used (ad networks, analytics, crash reporting, authentication providers).",
    },
  ],
  timeline: {
    headline: "2 to 3 Business Days for Audit & Remediation",
    description:
      "Complete technical and policy audit completed within 48 hours; developer remediation and resubmission guidance delivered immediately.",
    milestones: [
      {
        name: "Binary & Manifest Audit",
        estimate: "Day 1",
        detail: "Inspect target SDK, foreground services, and external dependencies.",
      },
      {
        name: "Data Safety & App Access Check",
        estimate: "Day 2",
        detail: "Map SDK data collection and configure reviewer credentials.",
      },
      {
        name: "Final Remediation Report & Staged Rollout",
        estimate: "Day 3",
        detail: "Deliver comprehensive compliance checklist and submission roadmap.",
      },
    ],
  },
  pricing: {
    model: "Fixed Audit Fee",
    headline: "Transparent Pre-Launch Publishing Audit",
    description:
      "A complete pre-release compliance package covering binary analysis, permission auditing, Data Safety synchronization, and reviewer credentials.",
    highlights: [
      "Target SDK 34/35 requirement validation",
      "Full manifest permissions and foreground service audit",
      "Field-by-field Data Safety form synchronization",
      "App Access test account configuration check",
      "Actionable remediation checklist delivered within 48 hours",
    ],
    note:
      "We do not charge per 'guaranteed approval'. Our audit eliminates automated technical pitfalls; Google conducts independent review.",
  },
  faqs: [
    {
      question: "What is the current Target SDK requirement for Google Play?",
      answer:
        "Google requires that new apps and app updates target Android 14 (API level 34) or higher. Apps that target older API levels are rejected during binary upload or blocked from being discovered by users on newer Android versions.",
    },
    {
      question: "Why does Google reject apps for 'App Access' or 'Reviewer Credentials'?",
      answer:
        "If parts of your app are restricted by login, two-factor authentication, or geographic barriers, Google human reviewers must be given functional test credentials. If the reviewer cannot log in because of SMS verification or an empty test account, the submission is rejected under the App Access policy.",
    },
    {
      question: "Does Google scan the third-party libraries in my AAB?",
      answer:
        "Yes. Google uses static binary scanners that detect known compiled SDKs (such as AdMob, Facebook SDK, or Firebase). If Google detects that an embedded SDK collects advertising identifiers, but you declared in Data Safety that your app collects zero data, your release is automatically rejected.",
    },
    {
      question: "What happens if my app uses Foreground Service permissions?",
      answer:
        "Starting with Android 14, Google Play strictly enforces Foreground Service (FGS) permission types. You must declare an explicit FGS type in your manifest (such as mediaPlayback, location, or dataSync) and submit a video demonstration proving that the feature cannot operate using WorkManager or background jobs.",
    },
    {
      question: "How does a staged rollout help mitigate publishing risk?",
      answer:
        "A staged rollout allows you to release an update to a fraction of your user base (e.g., 10%, 20%, 50%) rather than 100% immediately. This allows you to monitor Android Vitals crash rates and user feedback before the update reaches your entire audience, preventing widespread negative reviews.",
    },
  ],
  officialDocs: [
    {
      title: "Google Play Developer Policy Center",
      url: "https://support.google.com/googleplay/android-developer/topic/9858052",
      description: "Google's official repository of all developer program policies, spam rules, and privacy standards.",
    },
    {
      title: "Target API Level Requirements",
      url: "https://support.google.com/googleplay/android-developer/answer/9859152",
      description: "Google Play requirements for target API levels across new apps and existing updates.",
    },
    {
      title: "Provide App Access Instructions for Review",
      url: "https://support.google.com/googleplay/android-developer/answer/9859455",
      description: "Guidelines on providing demo account credentials and test data for Google reviewers.",
    },
  ],
  relatedGuides: [
    {
      title: "Android App Publishing Checklist: 2026 Policy Edition",
      slug: "android-app-publishing-checklist-2026",
      category: "Data Safety & Policy",
      readTime: "8 min read",
      summary:
        "A complete guide to synchronizing your Android app's embedded SDKs with Google Play's Data Safety declarations. Avoid audit rejections for advertising IDs, analytics, and crash logs.",
    },
    {
      title: "Google Play App Rejection: Step-by-Step Recovery & Appeal Guide",
      slug: "common-google-play-app-rejection-reasons",
      category: "App Rejections",
      readTime: "9 min read",
      summary:
        "How to deconstruct Google Play rejection notices, identify root causes in your code or metadata, and draft successful appeals without risking account strikes.",
    },
    {
      title: "How to Pass Google Play Production Access Review: Questions & Best Practices",
      slug: "how-to-prepare-for-google-play-production-access",
      category: "Production Access",
      readTime: "11 min read",
      summary:
        "An in-depth breakdown of Google's production access questionnaire. Learn what human reviewers look for in your testing feedback and iteration history.",
    },
  ],
  closedTestingCallout: {
    eyebrow: "Publishing Workflow Prerequisite",
    headline: "Deploying Your Bundle to Closed Testing First?",
    description:
      "Before a personal developer account can push an AAB bundle to production, Google Play requires at least 14 days of closed testing with 20+ testers. Our publishing audit ensures your Target SDK, permissions, and Data Safety disclosures pass automated scanners so your 14-day test proceeds without release halts.",
    points: [
      "Ensure Target SDK 34/35 compliance to prevent release rejection upon bundle upload.",
      "Synchronize Data Safety declarations with embedded analytics and crash SDKs.",
      "Configure unrestricted demo account credentials in App Access for testing cohorts.",
      "Transition your validated release bundle directly into a 14-day closed testing track.",
    ],
    ctaLabel: "Coordinate 14-Day Closed Testing",
    ctaHref: "/services/closed-testing",
  },
  ctaHeadline: "Preparing Your Android App for Store Submission?",
  ctaDescription:
    "Contact our advisory team to schedule a pre-launch compliance audit and ensure your build satisfies every technical and policy requirement.",
};

export default function AppPublishingAssistancePage() {
  return <ServicePageTemplate data={pageData} />;
}
