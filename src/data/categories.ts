export interface BlogCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "closed-testing",
    name: "Closed Testing & Testers",
    shortName: "Closed Testing",
    description:
      "Technical playbooks and guidance for personal developer accounts navigating Google's mandatory 14-day 20-tester closed testing requirement, track configuration, opt-ins, and tester engagement telemetry.",
    metaTitle: "Closed Testing & 20 Testers Guides | PlayStoreGuide Blog",
    metaDescription:
      "Everything you need to know about Google Play's 14-day 20-tester requirement. Track setup, tester recruitment, telemetry monitoring, and feedback collection.",
  },
  {
    slug: "account-setup",
    name: "Account Setup & Verification",
    shortName: "Account Setup",
    description:
      "Step-by-step guides for Google Play Console registration, identity document audits, D-U-N-S organizational matching, merchant payments profiles, and developer security.",
    metaTitle: "Play Console Account Setup & D-U-N-S Verification | PlayStoreGuide",
    metaDescription:
      "Avoid account suspension during Google Play Console verification. Identity checks, D-U-N-S matching, and personal vs organization account walkthroughs.",
  },
  {
    slug: "production-access",
    name: "Production Access & Review",
    shortName: "Production Access",
    description:
      "Detailed strategies and question-by-question breakdowns for Google Play's human-evaluated production access application, tester feedback synthesis, and Android Vitals stability.",
    metaTitle: "Google Play Production Access Guides | PlayStoreGuide",
    metaDescription:
      "How to pass Google Play's production access review. Questionnaire answers, testing feedback compilation, and Android Vitals benchmarks.",
  },
  {
    slug: "policy-compliance",
    name: "Policy, Rejections & Compliance",
    shortName: "Policy & Rejections",
    description:
      "In-depth analysis of common Google Play policy violations, rejection emails, Data Safety form synchronization, sensitive permissions, and formal developer appeals.",
    metaTitle: "Google Play Policy, Rejections & Appeals Guides | PlayStoreGuide",
    metaDescription:
      "Diagnose and resolve Google Play app rejections, Target SDK compliance issues, Data Safety discrepancies, and policy enforcement actions.",
  },
  {
    slug: "aso-growth",
    name: "Store Listing & ASO",
    shortName: "Store Listing (ASO)",
    description:
      "Policy-compliant App Store Optimization (ASO) strategies for Google Play. Maximize organic search discoverability, conversion rates, screenshot storyboards, and localization.",
    metaTitle: "Play Store Listing Optimization & ASO Guides | PlayStoreGuide",
    metaDescription:
      "Optimize your Android app title, short description, screenshots, and localization while adhering strictly to Google Play metadata spam policies.",
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}
