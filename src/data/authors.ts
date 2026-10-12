export interface Author {
  slug: string;
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
  credentials: string[];
  expertise: string[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const authorsData: Author[] = [
  {
    slug: "farhan-shah",
    name: "Farhan Shah",
    role: "Senior Android Technical Consultant & Advisory Lead",
    avatarUrl: "/authors/farhan-shah.png",
    bio: "Farhan is an Android software engineer and technical consultant specializing in Google Play Console architectures, release track configurations, and closed testing compliance. He has guided dozens of mobile development teams through Google's 14-day 20-tester closed testing mandate, D-U-N-S verification synchronizations, and production access review questionnaires.",
    credentials: [
      "8+ years Android application engineering and Gradle architecture",
      "Specialist in Google Play Developer Program Policies & DDA compliance",
      "Technical lead for closed testing cohort telemetry and Android Vitals analysis",
    ],
    expertise: [
      "Google Play Closed Testing (20-Tester Rule)",
      "Play Console Production Access Review Preparation",
      "Android Vitals & Crash Diagnostic Analysis",
      "Gradle Target SDK 34/35 Migration",
    ],
    socialLinks: {
      github: "https://github.com/playstoreguide",
      linkedin: "https://linkedin.com/company/playstoreguide",
    },
  },
  {
    slug: "elena-vance",
    name: "Elena Vance",
    role: "Android Compliance & Developer Policy Specialist",
    avatarUrl: "/authors/elena-vance.png",
    bio: "Elena specializes in Google Play regulatory compliance, Data Safety declarations, and app rejection recovery. With an extensive background in mobile application privacy audits, third-party SDK telemetries, and developer appeals, she ensures developer submissions strictly satisfy Google's evolving privacy and metadata requirements.",
    credentials: [
      "Specialist in Google Play Data Safety section & SDK telemetry mapping",
      "App rejection root-cause analysis and policy appeal drafting",
      "Dun & Bradstreet (D-U-N-S) organizational verification auditor",
    ],
    expertise: [
      "Google Play Policy Rejections & Formal Appeals",
      "Data Safety Form Discrepancy Audits",
      "Play Console Identity & D-U-N-S Verification",
      "Store Listing Policy & Metadata Spam Compliance",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/playstoreguide",
    },
  },
  {
    slug: "technical-review-board",
    name: "PlayStoreGuide Technical Review Board",
    role: "Editorial & Compliance Verification Panel",
    avatarUrl: "/authors/editorial-board.png",
    bio: "The PlayStoreGuide Technical Review Board is our internal panel of Android engineers, policy auditors, and release specialists. Every article, checklist, and playbook is peer-reviewed against active Google Play Console policies, Android documentation, and official Developer Distribution Agreement requirements prior to publication.",
    credentials: [
      "Multi-disciplinary technical review of code snippets and policy citations",
      "Quarterly verification against evolving Google Play Developer Program Policies",
      "Validation of Target API level deprecation timelines and console UI updates",
    ],
    expertise: [
      "Google Play Developer Distribution Agreement (DDA)",
      "Policy Fact-Checking & Technical Verification",
      "Production Review Human Evaluation Rubrics",
    ],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authorsData.find((a) => a.slug === slug);
}
