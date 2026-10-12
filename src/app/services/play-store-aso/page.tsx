import React from "react";
import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageData } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Store Listing Optimization (ASO) & Metadata Compliance",
  description:
    "Improve Android app discoverability and conversion rates without policy violations. Policy-safe titles, short descriptions, screenshot storyboarding, localization, and Store Listing Experiments.",
  path: "/services/play-store-aso",
  keywords: [
    "Google Play ASO",
    "Play Store listing optimization",
    "Android app store optimization",
    "Google Play metadata policy",
    "Store Listing Experiments Play Console",
    "app screenshot optimization Android",
  ],
});

const pageData: ServicePageData = {
  slug: "play-store-aso",
  eyebrow: "Discoverability & Conversion",
  h1: "Google Play Store Listing Optimization (ASO) & Metadata Compliance",
  subtitle:
    "Maximize organic discoverability and store conversion rates while adhering strictly to Google's metadata policy, graphic asset guidelines, and keyword spam regulations. Policy-safe titles, conversion-focused screenshots, regional localization, and store listing experiments.",
  snapshot: {
    targetAudience: "Apps Seeking Organic Growth & Conversion",
    engagementModel: "Metadata Strategy & Conversion Asset Specs",
    primaryFocus: "Policy-Safe ASO, Screenshots & Localization",
    googlePolicyRule: "Google Play Metadata and Graphic Asset Policy",
  },
  problem: {
    title: "Why Aggressive ASO Tactics Trigger Metadata Penalties on Google Play",
    description:
      "Outdated ASO tactics—such as keyword stuffing, promotional slogans ('#1 App', 'Free Download'), emojis, and all-caps titles—are strictly prohibited by Google Play. Using them results in rejected store updates, algorithmic de-ranking, or formal policy violations.",
    cards: [
      {
        title: "Title & Short Description Policy Violations",
        description:
          "Google strictly limits app titles to 30 characters and bans promotional claims, emojis, and misleading text. Violating these rules triggers instant automated rejection during store updates.",
      },
      {
        title: "Misleading or Non-Compliant Screenshots",
        description:
          "Screenshots showing unrendered device frames, deceptive app features, or fake award badges are flagged under Google's Deceptive Metadata policy, blocking release rollouts.",
      },
      {
        title: "Repetitive Keyword Stuffing Penalties",
        description:
          "Pasting comma-separated keyword blocks into the full description degrades reader trust and triggers automated search suppression algorithms that hurt your organic store impressions.",
      },
    ],
  },
  whoIsItFor: [
    {
      persona: "New App Launches",
      description:
        "Developers publishing a new Android app who want a professional, policy-compliant store listing that converts impressions into installs from Day 1.",
    },
    {
      persona: "Apps with Low Conversion Rates",
      description:
        "Apps that receive store impressions but suffer from poor install conversion rates due to weak screenshot messaging or unclear value propositions.",
    },
    {
      persona: "International Growth & Expansion",
      description:
        "Teams wanting to expand into key Android regions (Latin America, Europe, Southeast Asia) through native store listing localization.",
    },
    {
      persona: "Data-Driven Product Teams",
      description:
        "Creators looking to run structured Store Listing Experiments (A/B testing) in Play Console to scientifically validate visual and copy changes.",
    },
  ],
  deliverables: [
    {
      title: "Policy-Compliant Title & Short Description Strategy",
      description:
        "Crafting a high-impact Title (max 30 characters) and Short Description (max 80 characters) incorporating primary search keywords while complying with Google's spam rules.",
    },
    {
      title: "Conversion-Focused Full Description Copywriting",
      description:
        "Up to 4,000 characters of structured, compelling copy featuring clear value propositions, feature breakdowns, and natural keyword density without repetitive spam.",
    },
    {
      title: "Screenshot Storyboard & Visual Spec Sheet",
      description:
        "Detailed art direction and layout specifications for your screenshot carousel: focal points, typographic hierarchy, aspect ratios, and feature callouts.",
    },
    {
      title: "App Icon & Feature Graphic Specification Audit",
      description:
        "Evaluation of your 512x512 app icon and 1024x500 feature graphic against Google Play design guidelines to avoid visual clutter and misleading badges.",
    },
    {
      title: "Store Listing Experiments (A/B Testing) Setup Guide",
      description:
        "Step-by-step guidance on setting up native A/B tests in Google Play Console to test screenshot variations and copy variants against measurable install metrics.",
    },
  ],
  exclusions: [
    {
      title: "No Fake Downloads or Bot Installs",
      description:
        "We do not generate artificial install counts, click farm traffic, or incentivized user downloads (which violate Google Play policies and risk account termination).",
    },
    {
      title: "No Fabricated Public Reviews or Ratings",
      description:
        "We never sell or solicit fake 5-star reviews or manufactured testimonials. All app reviews must come genuinely from real users.",
    },
    {
      title: "No Guaranteed #1 Keyword Rankings",
      description:
        "Organic rankings depend on Google Play's search algorithm, user retention, Android Vitals, and keyword relevance. We deliver best-practice optimization, not impossible guarantees.",
    },
    {
      title: "No Final Graphic Design Production",
      description:
        "We provide comprehensive visual specifications, copy, storyboards, and layout directions; final graphic production is completed by your internal design team or assets.",
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Category & Competitor Benchmark",
      description:
        "We analyze top competitor listings in your Google Play category, identifying keyword gaps, visual trends, and conversion opportunities.",
      duration: "Days 1-2",
    },
    {
      step: "02",
      title: "Policy-Safe Metadata Formulation",
      description:
        "We draft your Title, Short Description, and Full Description, verifying character counts and policy adherence before presentation.",
      duration: "Days 2-3",
    },
    {
      step: "03",
      title: "Visual Storyboard & Spec Sheet",
      description:
        "We create a screenshot storyboard outlining the exact sequence of value propositions, captions, and visual emphasis for your store assets.",
      duration: "Days 3-4",
    },
    {
      step: "04",
      title: "A/B Testing & Console Deployment",
      description:
        "We guide deployment into Google Play Console and establish native Store Listing Experiments to benchmark conversion rate improvements.",
      duration: "Day 5+",
    },
  ],
  prerequisites: [
    {
      title: "Active App Build or Product Mockups",
      description:
        "Current app functionality, core screens, or design prototypes showing key user flows and unique selling points.",
    },
    {
      title: "Google Play Console Acquisition Reports (If Live)",
      description:
        "Access to current store listing conversion metrics, search terms, and country breakdown if the app is currently published.",
    },
    {
      title: "Target Audience Definition",
      description:
        "Understanding of your core user demographic, pain points, and target geographic regions.",
    },
    {
      title: "Graphic Asset Production Capability",
      description:
        "Access to an internal designer or tool (Figma, Canva) to render the screenshot designs following our structured storyboard specifications.",
    },
  ],
  timeline: {
    headline: "3 to 5 Business Days for Complete ASO Package",
    description:
      "Keyword research, metadata copywriting, and screenshot storyboarding are completed in 3-5 days. Console A/B tests typically run for 7-14 days to gather statistically significant install data.",
    milestones: [
      {
        name: "Competitor & Keyword Analysis",
        estimate: "Days 1 to 2",
        detail: "Audit store category, analyze high-relevance search terms, and map user intent.",
      },
      {
        name: "Metadata & Description Copywriting",
        estimate: "Days 2 to 3",
        detail: "Draft policy-safe title, short description, and full 4,000-character description.",
      },
      {
        name: "Visual Storyboard & A/B Experiment Strategy",
        estimate: "Days 4 to 5",
        detail: "Deliver screenshot spec sheet and set up Store Listing Experiment in Play Console.",
      },
    ],
  },
  pricing: {
    model: "Fixed Project Fee",
    headline: "Transparent Store Listing Optimization Package",
    description:
      "A complete metadata and conversion strategy package covering keyword research, policy-safe copywriting, screenshot storyboards, and A/B test setup.",
    highlights: [
      "Policy-safe Title (30 chars) and Short Description (80 chars)",
      "Full 4,000-character description optimized for readability and natural indexing",
      "Comprehensive screenshot storyboard and graphic asset spec sheet",
      "Native Google Play Store Listing Experiment configuration guide",
      "Regional localization recommendations for key global markets",
    ],
    note:
      "We never sell fake reviews or guarantee fixed search rankings. Our ASO maximizes organic search discoverability and conversion through policy-safe excellence.",
  },
  faqs: [
    {
      question: "What are Google Play's strict rules for app titles?",
      answer:
        "Google Play enforces a strict 30-character limit on app titles. Titles cannot contain promotional keywords (such as 'Free', 'Fast', or 'Best'), emojis, all-caps text (unless part of a trademarked brand), or misleading claims. Titles that violate these guidelines are rejected during store review.",
    },
    {
      question: "Can I include keywords in my app's short description?",
      answer:
        "Yes. The short description (up to 80 characters) is visible to users above the fold on mobile devices and is indexed heavily by Google Play's search algorithm. It should communicate your app's core value proposition concisely while incorporating 1-2 primary keywords naturally.",
    },
    {
      question: "How do Store Listing Experiments work in Google Play Console?",
      answer:
        "Store Listing Experiments allow you to run native A/B tests comparing your current store graphics or copy against up to 3 variations. Google splits a portion of your incoming store traffic to each variant and measures the resulting install rate, allowing you to prove which visual layout converts best with statistical confidence.",
    },
    {
      question: "Does localizing my store listing increase downloads?",
      answer:
        "Yes, significantly. Even if your app's internal UI is primarily in English, localizing your store listing title, short description, and screenshot captions into languages like Spanish, Portuguese, German, or Japanese substantially improves store listing conversion rates in international markets.",
    },
    {
      question: "Why did Google reject my store listing update?",
      answer:
        "Common reasons include: 1) Using promotional or superlative phrases like '#1' or 'Top Rated'; 2) Unverified device frames in screenshots; 3) Emojis or repetitive capitalization in the title; 4) Mismatches between your store graphics and actual app functionality; or 5) Keyword spam in the description.",
    },
  ],
  officialDocs: [
    {
      title: "Google Play Store Listing Asset Specifications",
      url: "https://support.google.com/googleplay/android-developer/answer/9866130",
      description: "Official requirements for app icons, screenshots, feature graphics, and promo videos.",
    },
    {
      title: "Google Play Metadata and Graphic Asset Policy",
      url: "https://support.google.com/googleplay/android-developer/answer/9857753",
      description: "Policy guidelines prohibiting promotional language, emojis, and misleading claims in store listings.",
    },
    {
      title: "Run Store Listing Experiments in Play Console",
      url: "https://support.google.com/googleplay/android-developer/answer/6226169",
      description: "Google's guide to creating and analyzing A/B tests for store listing assets and copy.",
    },
  ],
  relatedGuides: [
    {
      title: "Google Play 20 Testers Requirement: The Complete 14-Day Closed Testing Playbook",
      slug: "google-play-20-testers-requirement-playbook",
      category: "Closed Testing",
      readTime: "9 min read",
      summary:
        "A step-by-step technical guide to structuring your closed testing track, recruiting compliant testers, tracking engagement, and compiling required feedback.",
    },
    {
      title: "Google Play Data Safety Form: A Developer's Practical Walkthrough",
      slug: "google-play-data-safety-form-guide",
      category: "Data Safety & Policy",
      readTime: "8 min read",
      summary:
        "A complete guide to synchronizing your Android app's embedded SDKs with Google Play's Data Safety declarations. Avoid audit rejections for advertising IDs, analytics, and crash logs.",
    },
    {
      title: "Google Play App Rejection: Step-by-Step Recovery & Appeal Guide",
      slug: "google-play-app-rejection-recovery-guide",
      category: "App Rejections",
      readTime: "9 min read",
      summary:
        "How to deconstruct Google Play rejection notices, identify root causes in your code or metadata, and draft successful appeals without risking account strikes.",
    },
  ],
  ctaHeadline: "Ready to Optimize Your Google Play Store Listing?",
  ctaDescription:
    "Contact our advisory team to discuss a policy-compliant ASO strategy that boosts organic impressions and maximizes store conversion rates.",
};

export default function PlayStoreAsoPage() {
  return <ServicePageTemplate data={pageData} />;
}
