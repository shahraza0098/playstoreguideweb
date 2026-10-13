import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/seo";
import { ConsoleDashboardMock } from "@/components/testing/ConsoleDashboardMock";
import { ClosedTestingTimeline } from "@/components/testing/ClosedTestingTimeline";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = constructMetadata({
  title: "Google Play 20 Testers & 14-Day Closed Testing Coordination",
  description:
    "Fulfill Google's mandatory 14-day closed testing requirement with 20+ verified human testers on real Android devices. Complete opt-in tracking, authentic engagement telemetry, and feedback documentation.",
  path: "/services/closed-testing",
  keywords: [
    "Google Play 20 testers",
    "14 days closed testing Google Play",
    "personal developer account closed test",
    "Google Play closed testing service",
    "Android closed testing testers",
    "closed testing recruitment",
  ],
});

const pageData: ServicePageData = {
  slug: "closed-testing",
  eyebrow: "Personal Account Compliance",
  h1: "Google Play 20 Testers & 14-Day Closed Testing Coordination",
  subtitle:
    "Coordinate real, active Android testers on physical hardware to fulfill Google's mandatory 14-day closed testing requirement. Transparent tracking, active telemetry, qualitative feedback, and zero bot emulators.",
  snapshot: {
    targetAudience: "Personal Developer Accounts (Post-Nov 13, 2023)",
    engagementModel: "14-Day Cohort Coordination",
    primaryFocus: "20+ Opt-In Testers & Feedback Logs",
    googlePolicyRule: "Mandatory for personal accounts post-Nov 13, 2023 (Org accounts exempt)",
  },
  problem: {
    title: "Why Satisfying Google's 20-Tester Rule Is Difficult for Solo Developers",
    description:
      "Under Google Play Console policy enacted on November 13, 2023, developers with personal accounts created on or after that date must maintain at least 20 testers opted into closed testing for 14 continuous days before becoming eligible to request production access. Organization accounts verified with a D-U-N-S number are exempt from this rule. For indie and solo developers, satisfying this mandatory quota safely without an established tester network presents serious operational hazards.",
    cards: [
      {
        title: "The 14-Day Counter Reset Risk",
        description:
          "If even one tester uninstalls or opts out and your active count dips below Google's 20-tester minimum, the Play Console timer resets to Day 1. Google requires a minimum of 20 testers; we facilitate 22 to 25 testers to maintain an active safety buffer.",
      },
      {
        title: "The Inactive Tester / Bot Detection Trap",
        description:
          "Google monitors Play Services telemetry. When developers pay for automated bot clicks or friend installs that sit completely dormant, Google's human review team rejects the production access application.",
      },
      {
        title: "Missing Qualitative Feedback Logs",
        description:
          "Meeting the 14-day threshold is an eligibility prerequisite, not an automatic guarantee of approval. Google requires substantive answers regarding user feedback, bug resolutions, and iteration history in the production access review questionnaire.",
      },
    ],
  },
  whoIsItFor: [
    {
      persona: "Solo Android Developers",
      description:
        "Developers with personal Play Console accounts created on or after November 13, 2023 who are subject to the mandatory 20-tester closed track requirement.",
    },
    {
      persona: "Indie Studios & Bootstrappers",
      description:
        "Teams without a large internal QA team or private tester network seeking genuine device variety across Android 11 to Android 15.",
    },
    {
      persona: "Developers Needing Real User Feedback",
      description:
        "Engineers looking for actionable UI/UX insights, edge-case bug catches, and device compatibility telemetry before public rollout.",
    },
    {
      persona: "Teams Recovering from Denied Production Access",
      description:
        "Developers whose previous production request was turned down by Google due to insufficient testing activity or feedback depth.",
    },
  ],
  deliverables: [
    {
      title: "20+ Verified Real Android Testers (22–25 Safety Buffer)",
      description:
        "Recruitment of real individuals with physical Android devices running Android 11 through Android 15. Google mandates 20 testers minimum; we provide 22 to 25 to protect against drop-offs. Zero automated bot farms or virtual emulators.",
    },
    {
      title: "14 Continuous Days of Opt-In Retention Monitoring",
      description:
        "Daily tracking of active tester opt-in status in Play Console to ensure your counter never dips below Google's 20-tester minimum threshold.",
    },
    {
      title: "Periodic App Launches & Interaction Telemetry",
      description:
        "Testers launch and interact with your app builds across the 14-day testing window, generating genuine Play Services sessions and Android Vitals data.",
    },
    {
      title: "Structured Qualitative Feedback & Bug Report Dossier",
      description:
        "Compilation of user feedback, usability notes, device specifics, and bug catches ready to cite directly in your production access application form.",
    },
    {
      title: "Production Access Questionnaire Preparation Guidance",
      description:
        "Review of your responses to Google's 5 human-review questions, aligning your answers with real testing logs and changelogs.",
    },
  ],
  exclusions: [
    {
      title: "No Guaranteed Production Approval from Google",
      description:
        "Google's human operations team retains sole, independent discretion over production access decisions. No legitimate service can sell or guarantee approval.",
    },
    {
      title: "No Public Store Reviews or Ratings",
      description:
        "Closed testing feedback is submitted privately to the developer via Google Play Console. We do not generate public 5-star reviews or store ratings.",
    },
    {
      title: "No Core Application Code Rewrites",
      description:
        "We identify bugs, crashes, and UX confusion from a testing perspective, but fixing internal code logic remains the developer's responsibility.",
    },
    {
      title: "No Policy Circumvention Schemes",
      description:
        "We operate strictly within the Google Play Developer Distribution Agreement. We do not offer workarounds to bypass Google's mandatory testing rules.",
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Track Setup & AAB Audit",
      description:
        "We inspect your Closed Testing track, verify that your release status is 'Completed', and confirm your Google Group or email list invitation link.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Cohort Invitation & Opt-In Onboarding",
      description:
        "22-25 real Android testers accept your Play Store invitation link, download the build, and confirm active installation.",
      duration: "Days 1-2",
    },
    {
      step: "03",
      title: "14-Day Testing & Feedback Cycles",
      description:
        "Testers maintain active opt-ins, test user flows, generate telemetry, and report qualitative feedback and bug observations.",
      duration: "Days 3-15",
    },
    {
      step: "04",
      title: "Feedback Dossier & Production Access Prep",
      description:
        "We compile all feedback logs into a structured document and guide your answers to Google's Production Access Review Questionnaire.",
      duration: "Day 15+",
    },
  ],
  prerequisites: [
    {
      title: "Active Google Play Console Account",
      description:
        "A registered personal developer account in good standing with identity verification completed.",
    },
    {
      title: "Signed Android App Bundle (AAB)",
      description:
        "A completed release uploaded to a Closed Testing track with Target SDK 34+ and passing automated pre-launch checks.",
    },
    {
      title: "Test Login Credentials (If Applicable)",
      description:
        "If your app requires user authentication, valid test account credentials must be provided so testers can access core features.",
    },
    {
      title: "Google Group or Email Track Access",
      description:
        "The ability to add our testing cohort Google Group or email list to your closed testing track inside Play Console.",
    },
  ],
  timeline: {
    headline: "14 to 16 Days Total Engagement",
    description:
      "Google's 14-day requirement is strictly enforced by Play Console timers. We build in a brief onboarding and wrap-up window.",
    milestones: [
      {
        name: "Cohort Invitation & Opt-In",
        estimate: "Days 1 to 2",
        detail: "Testers join your closed track, accept the web or Android invitation, and install the build.",
      },
      {
        name: "14-Day Closed Testing Window",
        estimate: "Days 2 to 16",
        detail: "Continuous 14-day opt-in retention tracked in Play Console, with periodic testing sessions.",
      },
      {
        name: "Dossier Delivery & Review Application",
        estimate: "Day 16+",
        detail: "Feedback compilation delivered, answers drafted, and 'Apply for production' button unlocked.",
      },
    ],
  },
  pricing: {
    model: "Fixed Project Fee",
    headline: "Transparent Cohort Pricing",
    description:
      "Our closed testing coordination is charged as a transparent flat fee per testing cohort. Pricing covers recruitment, daily retention tracking, and qualitative feedback synthesis across the full 14-day window.",
    highlights: [
      "22-25 real human testers (surplus buffer to prevent counter resets)",
      "Daily opt-in retention monitoring in Play Console",
      "Documented qualitative user feedback and bug report summary",
      "Production Access questionnaire drafting guidance",
      "No recurring subscriptions or hidden retention fees",
    ],
    note:
      "We never promise 'guaranteed approval'. Testing coordination provides legitimate, verifiable policy compliance; Google independently reviews production access applications.",
  },
  faqs: [
    {
      question: "Do testers need to open the app every single day for 14 days?",
      answer:
        "Google's explicit policy states that testers must remain opted in to your closed testing track for 14 continuous days. While opening the app every single day is not legally mandated, completely dormant apps with zero launches or session telemetry often raise red flags during the production access review. Our testers periodically launch and interact with the app throughout the 14 days to generate natural Play Services telemetry.",
    },
    {
      question: "What happens if a tester uninstalls the app during the 14-day window?",
      answer:
        "If your active opted-in tester count drops below 20 at any point, Google's dashboard counter resets to Day 1. To prevent this, we onboard 22 to 25 testers to provide a 10-25% safety margin, guaranteeing your active opted-in count never falls below the mandatory threshold.",
    },
    {
      question: "Are virtual devices, emulators, or click farms used?",
      answer:
        "No, absolutely not. Google Play monitors physical device hardware identifiers and Google account authenticity. Using virtual device farms or automated emulator scripts triggers Google fraud detection and can lead to immediate developer account suspension. All PlayStoreGuide testers use real physical Android hardware.",
    },
    {
      question: "Does completing closed testing guarantee production access approval?",
      answer:
        "No legitimate service can guarantee production access approval. Google's review operations team evaluates your app quality, Android Vitals, and the answers you provide in your production questionnaire. Our service ensures your 14-day test is compliant and provides genuine feedback logs so you can submit a substantive application.",
    },
    {
      question: "How do I add the testers into my Google Play Console?",
      answer:
        "You retain complete ownership of your console. We provide either a dedicated Google Group link or a list of tester email addresses. You simply navigate to Release > Testing > Closed testing in Play Console, paste the group or emails into your testers list, and provide the opt-in URL to us. We never ask for your account password.",
    },
  ],
  officialDocs: [
    {
      title: "Set Up an Open, Closed, or Internal Test",
      url: "https://support.google.com/googleplay/android-developer/answer/9845334",
      description: "Official Google Play Console guide on creating closed testing tracks and managing tester lists.",
    },
    {
      title: "Testing Requirements for Personal Developer Accounts",
      url: "https://support.google.com/googleplay/android-developer/answer/14151465",
      description: "Google's formal policy documentation detailing the 20-tester, 14-day closed testing rule for personal accounts.",
    },
  ],
  relatedGuides: [
    {
      title: "Google Play 20 Testers Requirement: The Complete 14-Day Closed Testing Playbook",
      slug: "google-play-closed-testing-requirements-guide",
      category: "Closed Testing",
      readTime: "9 min read",
      summary:
        "A step-by-step technical guide to structuring your closed testing track, recruiting compliant testers, tracking engagement, and compiling required feedback.",
    },
    {
      title: "How to Pass Google Play Production Access Review: Questions & Best Practices",
      slug: "how-to-prepare-for-google-play-production-access",
      category: "Production Access",
      readTime: "11 min read",
      summary:
        "An in-depth breakdown of Google's production access questionnaire. Learn what human reviewers look for in your testing feedback and iteration history.",
    },
    {
      title: "Google Play Developer Account Verification: D-U-N-S, Identity & Common Pitfalls",
      slug: "google-play-developer-account-verification-guide",
      category: "Account Verification",
      readTime: "8 min read",
      summary:
        "Avoid fatal verification mistakes. Practical steps for personal vs organization accounts, document formatting, and D-U-N-S synchronization.",
    },
  ],
  ctaHeadline: "Need a Compliant 20-Tester Cohort for Your Android App?",
  ctaDescription:
    "Contact our technical advisory team with your app details and target release timeline. We will review your track configuration and coordinate an active tester cohort.",
};

function ClosedTestingShowcase() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <div>
        <SectionHeading
          align="center"
          eyebrow="Console Telemetry Simulation"
          title="Developer Console Simulation & 14-Day Progress"
          description="A demonstration of how a compliant 22–25 tester cohort maintains daily retention, tracks Android Vitals limits, and compiles physical hardware evidence."
        />
        <div className="mt-10 max-w-4xl mx-auto">
          <ConsoleDashboardMock
            appName="FocusRoutine Android"
            packageName="com.focusroutine.app"
            targetSdk="Target SDK 35 (Android 15)"
            versionName="v1.4.2 (AAB)"
            activeTesters={23}
            requiredTesters={20}
            currentDay={12}
            totalDays={14}
            showTabs={true}
          />
        </div>
      </div>

      <div>
        <ClosedTestingTimeline
          eyebrow="Step-by-Step Engagement Protocol"
          title="The 14-Day Closed Testing Execution Roadmap"
          description="From pre-flight AAB checks to production access questionnaire prep: each milestone is tracked with verifiable evidence."
          showSelector={true}
        />
      </div>
    </div>
  );
}

export default function ClosedTestingPage() {
  return (
    <ServicePageTemplate
      data={pageData}
      interactiveShowcase={<ClosedTestingShowcase />}
    />
  );
}
