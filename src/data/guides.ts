export interface GuideSection {
  id: string;
  title: string;
  content: string; // HTML-safe or formatted paragraphs
  subsections?: {
    title: string;
    content: string;
    codeSnippet?: string;
  }[];
  callout?: {
    type: "note" | "warning" | "tip";
    text: string;
  };
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  category: "Closed Testing" | "Production Access" | "Account Verification" | "App Rejections" | "Data Safety & Policy";
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  author: {
    name: string;
    role: string;
  };
  tableOfContents: { id: string; title: string }[];
  sections: GuideSection[];
  faqs: GuideFaq[];
}

export const guidesData: Guide[] = [
  {
    slug: "google-play-20-testers-requirement-playbook",
    title: "Google Play 20 Testers Requirement: The Complete 14-Day Closed Testing Playbook",
    category: "Closed Testing",
    readTime: "9 min read",
    publishedAt: "2026-01-10",
    updatedAt: "2026-03-12",
    metaDescription:
      "A complete technical guide to passing Google Play's mandatory 14-day closed testing requirement with 20 real Android testers. Recruitment, telemetry, tracking, and questionnaire preparation.",
    keywords: [
      "Google Play 20 testers",
      "14 days closed testing Google Play",
      "closed testing personal account",
      "Google Play testing requirement guide",
      "Android closed testing playbook",
    ],
    summary:
      "Everything personal developer accounts need to know about recruiting 20+ real testers, maintaining 14 continuous days of opt-in, generating legitimate user telemetry, and capturing required feedback logs.",
    author: {
      name: "PlayStoreGuide Technical Team",
      role: "Android Advisory & Compliance",
    },
    tableOfContents: [
      { id: "overview", title: "1. Understanding Google's 20-Tester Policy" },
      { id: "setup-track", title: "2. Setting Up Your Closed Testing Track Correctly" },
      { id: "recruiting-testers", title: "3. Recruiting Compliant Android Testers" },
      { id: "telemetry-retention", title: "4. Monitoring Telemetry and the 14-Day Retention Clock" },
      { id: "collecting-feedback", title: "5. Gathering Feedback for the Production Review" },
      { id: "common-pitfalls", title: "6. Fatal Mistakes That Reset the 14-Day Timer" },
    ],
    sections: [
      {
        id: "overview",
        title: "1. Understanding Google's 20-Tester Policy",
        content:
          "In November 2023, Google introduced a significant policy shift: developers with personal Play Console accounts created on or after November 13, 2023 must run a closed testing track with at least 20 testers who have opted in for at least 14 days before becoming eligible to apply for production release access.\n\nThis rule was enacted to elevate app quality on Google Play, filter low-effort spam apps, and guarantee that new software undergoes genuine usability and stability testing before reaching the public store.",
        callout: {
          type: "note",
          text: "This requirement applies exclusively to personal developer accounts. Organization accounts (verified with a D-U-N-S number) are exempt from the mandatory 14-day 20-tester rule, although closed testing is still recommended.",
        },
      },
      {
        id: "setup-track",
        title: "2. Setting Up Your Closed Testing Track Correctly",
        content:
          "In your Google Play Console, navigate to Release > Testing > Closed testing. You can create multiple closed tracks, but Google evaluates your primary closed track for the 20-tester requirement.\n\nYou have two recruitment distribution options:\n1. Google Groups: Create a private or public Google Group and link it to the track.\n2. Email Lists: Upload a CSV of tester Google accounts (Gmail or Google Workspace).\n\nEnsure that you have rolled out a signed Android App Bundle (AAB) to this track and that the release status is marked 'Completed' (not in draft or review).",
      },
      {
        id: "recruiting-testers",
        title: "3. Recruiting Compliant Android Testers",
        content:
          "One of the biggest mistakes developers make is paying for automated click farms or bot services. Google's Play Services client on Android devices monitors genuine device activity. If 20 accounts opt in but zero app launches or system heartbeats are recorded, your production access application will be rejected.\n\nRecruit real Android users across varied device manufacturers (Samsung, Xiaomi, Google Pixel, Motorola) and varied Android OS versions (Android 11 through Android 15). Always maintain a buffer of 22 to 25 testers so that if an individual uninstalls or opts out, your count never dips below 20.",
        callout: {
          type: "tip",
          text: "Never let your active opted-in tester count fall below 20 at any point during the 14-day window. If the count drops to 19, Google's automated counter resets to Day 1.",
        },
      },
      {
        id: "telemetry-retention",
        title: "4. Monitoring Telemetry and the 14-Day Retention Clock",
        content:
          "Once 20 testers have accepted the invitation link (either on the web or via Android), the 14-day countdown starts. You can track this in Google Play Console under the Dashboard task checklist.\n\nTo ensure healthy telemetry:\n- Encourage testers to launch the app at least 3-4 times across the 14 days.\n- Push at least one incremental update (e.g., version 1.0.1) addressing minor feedback or performance improvements. This shows active software maintenance.\n- Monitor Android Vitals to ensure your crash rate remains below 1.09% and your ANR rate remains below 0.47%.",
      },
      {
        id: "collecting-feedback",
        title: "5. Gathering Feedback for the Production Review",
        content:
          "Testers can provide private feedback directly via the Google Play Store app page or through a dedicated in-app feedback channel (such as a Google Form, Discord channel, or email address).\n\nKeep detailed records of:\n- Specific UI/UX confusion reported by users.\n- Performance issues on budget hardware.\n- Bug fixes implemented during the testing period.\n\nYou will need concrete details to answer Google's Production Access Review Questionnaire.",
      },
      {
        id: "common-pitfalls",
        title: "6. Fatal Mistakes That Reset the 14-Day Timer",
        content:
          "Avoid these common fatal mistakes:\n1. Pausing or deleting the closed testing track during the 14 days.\n2. Uploading a major breaking build that crashes on launch for all testers.\n3. Using identical Google accounts logged into emulators.\n4. Applying for production on Day 14 at minute zero before the dashboard officially confirms completion.",
      },
    ],
    faqs: [
      {
        question: "Do testers need to open the app every single day for 14 days?",
        answer:
          "Google does not explicitly require testers to open the app every single day, but they must remain opted in for 14 continuous days. However, completely dormant apps with zero launches or session telemetry often raise red flags during the production access review.",
      },
      {
        question: "Can I use emulators or virtual devices for the 20 testers?",
        answer:
          "No. Google Play tracks device hardware IDs and Google account authenticity. Using emulator instances with spoofed device IDs triggers automated fraud detection and risks developer account termination.",
      },
      {
        question: "What happens if a tester uninstalls the app during the 14 days?",
        answer:
          "If the total number of opted-in testers drops below 20, the 14-day requirement timer resets. We recommend recruiting 22 to 25 testers to maintain an active safety buffer.",
      },
    ],
  },
  {
    slug: "how-to-pass-production-access-review",
    title: "How to Pass Google Play Production Access Review: Questions & Best Practices",
    category: "Production Access",
    readTime: "11 min read",
    publishedAt: "2026-01-18",
    updatedAt: "2026-03-24",
    metaDescription:
      "A question-by-question breakdown of Google Play's production access application form. Learn how to write compelling, evidence-based answers about tester feedback and iteration.",
    keywords: [
      "Google Play production access questionnaire",
      "apply for production Play Console",
      "production access feedback questions",
      "production access rejected Google Play",
    ],
    summary:
      "Step-by-step guidance on answering Google's production access questionnaire. Discover what human review teams look for, what triggers instant rejections, and how to present your testing evidence.",
    author: {
      name: "PlayStoreGuide Technical Team",
      role: "Android Advisory & Compliance",
    },
    tableOfContents: [
      { id: "review-overview", title: "1. The Human Review Process Behind Production Access" },
      { id: "question-breakdown", title: "2. Breakdown of the 5 Core Questionnaire Prompts" },
      { id: "crafting-answers", title: "3. How to Structure Substantive, Evidence-Based Responses" },
      { id: "supporting-data", title: "4. Supporting Data: Changelogs, Releases & Vitals" },
      { id: "rejection-recovery", title: "5. What to Do If Your Production Application Is Rejected" },
    ],
    sections: [
      {
        id: "review-overview",
        title: "1. The Human Review Process Behind Production Access",
        content:
          "Once you complete the 14-day closed testing period, the 'Apply for production' button becomes enabled on your Play Console dashboard. Many developers mistakenly assume this is an automated formality. In reality, it triggers a manual review conducted by Google's policy and developer operations team.\n\nThe review team checks whether your app underwent genuine user testing or if you simply attempted to satisfy a formal quota without actual engagement.",
        callout: {
          type: "warning",
          text: "If Google rejects your production access request, you will typically be required to recruit additional testers and run closed testing for another 14 days before reapplying.",
        },
      },
      {
        id: "question-breakdown",
        title: "2. Breakdown of the 5 Core Questionnaire Prompts",
        content:
          "The application consists of specific questions regarding your app, audience, and testing experience:\n\n1. Target Audience: Describe who your app is designed for and its primary value proposition.\n2. Tester Recruitment: How did you find your closed testing participants? Was it easy or difficult?\n3. Engagement & Feedback: What specific feedback did you receive from your testers during the closed test?\n4. Iteration & Bug Fixes: What changes or improvements did you make based on user feedback?\n5. Production Readiness: How did you determine that your app is stable and ready for a broad public release?",
      },
      {
        id: "crafting-answers",
        title: "3. How to Structure Substantive, Evidence-Based Responses",
        content:
          "Never submit generic one-line answers like 'My friends tested it and liked it' or 'No bugs were found.'\n\nInstead, structure your answers with concrete examples:\n- Categorize feedback into UX, performance, and feature clarity.\n- Reference specific device models (e.g., 'Testers on Android 12 Samsung devices reported sluggish scrolling in the catalog list').\n- Describe the exact remediation you deployed in an updated AAB release.\n- Cite stability metrics (e.g., 'Zero crashes recorded over 45 aggregate test sessions').",
      },
      {
        id: "supporting-data",
        title: "4. Supporting Data: Changelogs, Releases & Vitals",
        content:
          "Human reviewers cross-reference your answers with your Play Console telemetry. They inspect:\n- Release track history: Did you upload at least one patch release during the test?\n- Release notes: Do your 'What's new' changelogs match the improvements mentioned in your questionnaire?\n- Android Vitals: Are your crash rate and ANR rate within acceptable thresholds?",
      },
      {
        id: "rejection-recovery",
        title: "5. What to Do If Your Production Application Is Rejected",
        content:
          "If your application is rejected, Google will send an email indicating that your app needs more testing before production rollout. Do not panic. Review the specific guidance provided, address any remaining device or stability issues, invite fresh testers, and maintain active closed testing for the requested duration before submitting a revised application.",
      },
    ],
    faqs: [
      {
        question: "How long does Google take to review the production access application?",
        answer:
          "Review times typically range from 2 to 7 business days, though some complex applications or accounts may take up to 14 days.",
      },
      {
        question: "Can I publish updates to closed testing while waiting for production review?",
        answer:
          "Yes, you can continue releasing bug fix updates to your closed track. In fact, maintaining active updates can demonstrate ongoing developer commitment.",
      },
    ],
  },
  {
    slug: "google-play-account-verification-guide",
    title: "Google Play Developer Account Verification: D-U-N-S, Identity & Common Pitfalls",
    category: "Account Verification",
    readTime: "8 min read",
    publishedAt: "2026-02-02",
    updatedAt: "2026-03-28",
    metaDescription:
      "A complete guide to passing Google Play Console verification for personal and organization accounts. Learn how to align D-U-N-S data, avoid address mismatches, and prevent account closure.",
    keywords: [
      "Google Play account verification",
      "DUNS number Play Console",
      "Google Play organization verification",
      "Play Console identity verification guide",
    ],
    summary:
      "Practical steps to navigate Google Play Console's strict identity and organization verification processes. Learn how to verify legal entity records, D-U-N-S numbers, and avoid account suspensions.",
    author: {
      name: "PlayStoreGuide Technical Team",
      role: "Android Advisory & Compliance",
    },
    tableOfContents: [
      { id: "verification-landscape", title: "1. The 2026 Verification Mandate" },
      { id: "personal-vs-org", title: "2. Personal vs Organization Accounts" },
      { id: "duns-mastery", title: "3. D-U-N-S Registration & Matching" },
      { id: "document-checklist", title: "4. Accepted Identity & Address Documents" },
      { id: "common-mistakes", title: "5. Fatal Mistakes That Close Developer Accounts" },
    ],
    sections: [
      {
        id: "verification-landscape",
        title: "1. The 2026 Verification Mandate",
        content:
          "All Google Play developers must complete formal account verification by their assigned console deadline. Failure to verify results in developer profile removal and app unpublishing across all regions.\n\nGoogle partners with Dun & Bradstreet for organization verification and specialized third-party identity partners for personal accounts.",
      },
      {
        id: "personal-vs-org",
        title: "2. Personal vs Organization Accounts",
        content:
          "Choosing between a personal and organization account is an important decision:\n- Personal accounts: Requires personal government-issued photo ID and proof of address. Subject to the 14-day 20-tester closed testing requirement.\n- Organization accounts: Requires a D-U-N-S number, corporate incorporation documents, an official corporate website, and a business email domain. Exempt from the 14-day 20-tester rule.",
      },
      {
        id: "duns-mastery",
        title: "3. D-U-N-S Registration & Matching",
        content:
          "For organization accounts, your business name and address in your Google Payments profile must match your Dun & Bradstreet record letter-for-letter. If your company is registered as 'Alpha Tech LLC' in D&B, entering 'Alpha Tech' in Play Console will cause verification failure.\n\nAlways request a free D-U-N-S profile lookup before initiating verification in Play Console.",
      },
      {
        id: "document-checklist",
        title: "4. Accepted Identity & Address Documents",
        content:
          "Google enforces strict criteria for documentation:\n- ID: Passport, Driver's License, or National ID (unexpired, with clear photos of all four corners).\n- Proof of Address: Bank statement or utility bill dated within the last 60 days. Electronic PDFs downloaded directly from your bank or provider are preferred over phone camera snapshots.",
      },
      {
        id: "common-mistakes",
        title: "5. Fatal Mistakes That Close Developer Accounts",
        content:
          "Never use a virtual office address or PO Box for organization verification. Google cross-references physical street addresses. Additionally, avoid submitting credit cards or recovery phone numbers associated with terminated developer accounts.",
      },
    ],
    faqs: [
      {
        question: "How long does D-U-N-S number registration take?",
        answer:
          "Acquiring a new free D-U-N-S number through Dun & Bradstreet typically takes 14 to 30 days. Expedited options are available through D&B directly.",
      },
      {
        question: "Can I convert a personal account into an organization account?",
        answer:
          "Yes, Google Play Console allows account type migration, provided you possess a valid D-U-N-S number and corporate documentation matching the new entity.",
      },
    ],
  },
  {
    slug: "google-play-app-rejection-recovery-guide",
    title: "Google Play App Rejection: Step-by-Step Recovery & Appeal Guide",
    category: "App Rejections",
    readTime: "9 min read",
    publishedAt: "2026-02-12",
    updatedAt: "2026-03-30",
    metaDescription:
      "How to deconstruct Google Play rejection notices, identify root causes in your code or metadata, and draft successful appeals without risking account strikes.",
    keywords: [
      "Google Play app rejection",
      "how to appeal Google Play rejection",
      "Google Play policy violation fix",
      "app rejected Play Console appeal",
    ],
    summary:
      "A systematic recovery playbook for rejected or removed Android apps. Learn how to interpret policy violation notices, fix code/metadata issues, and submit evidence-based appeals.",
    author: {
      name: "PlayStoreGuide Technical Team",
      role: "Android Advisory & Compliance",
    },
    tableOfContents: [
      { id: "anatomy-rejection", title: "1. The Anatomy of a Rejection Notice" },
      { id: "top-violations", title: "2. The Top 5 Most Common Violations" },
      { id: "audit-checklist", title: "3. Remediation Checklist for Code & Assets" },
      { id: "appeal-strategy", title: "4. Drafting a Professional, Policy-Based Appeal" },
      { id: "what-not-to-do", title: "5. What NOT to Do When Rejected" },
    ],
    sections: [
      {
        id: "anatomy-rejection",
        title: "1. The Anatomy of a Rejection Notice",
        content:
          "Google rejection emails follow a templated structure: Policy Section violated, Affected version code, and sometimes a reviewer screenshot showing where the app failed. Understanding whether the rejection was automated (static analysis) or manual (human QA tester) is key to formulating a proper fix.",
      },
      {
        id: "top-violations",
        title: "2. The Top 5 Most Common Violations",
        content:
          "1. Broken Functionality: The app crashes on startup, displays a blank white screen, or fails to connect to servers during reviewer testing.\n2. Incomplete App Access: Reviewers are blocked by a login screen without working credentials.\n3. Undeclared Permissions: Requesting sensitive permissions (like background location or full storage) without declared core functionality.\n4. Metadata Violations: Promotional slogans, misleading icons, or keyword spam in store descriptions.\n5. Inaccurate Data Safety: Discrepancies between third-party SDK telemetry and declared user data collection.",
      },
      {
        id: "audit-checklist",
        title: "3. Remediation Checklist for Code & Assets",
        content:
          "Before resubmitting:\n- Test on clean Android emulator configurations without pre-cached tokens.\n- Confirm that test reviewer credentials bypass SMS/OTP verification.\n- Remove unused SDKs and obsolete manifest permissions.\n- Verify that your Privacy Policy is active, HTTPS-secured, and directly mentions in-app data usage.",
      },
      {
        id: "appeal-strategy",
        title: "4. Drafting a Professional, Policy-Based Appeal",
        content:
          "If your rejection is a false positive, submit an appeal through the Google Play Developer Help Center. Structure your appeal concisely:\n- Reference your Package Name and Issue ID.\n- Quote the specific Google Play Policy clause.\n- Provide an unlisted YouTube video showing the feature working correctly.\n- Maintain a professional, technical tone.",
      },
      {
        id: "what-not-to-do",
        title: "5. What NOT to Do When Rejected",
        content:
          "Never submit the exact same binary without making changes in hopes of getting a different reviewer. Repeated unaddressed rejections accumulate strikes against your developer account and can trigger automatic account termination.",
      },
    ],
    faqs: [
      {
        question: "How many rejections can an app get before the account is suspended?",
        answer:
          "Google does not publish an exact number. Minor metadata rejections do not count as strikes, but severe policy violations (malware, deceptive behavior, intellectual property) can cause immediate account termination.",
      },
      {
        question: "Can I appeal after Google rejects my resubmission?",
        answer:
          "Yes. You can submit an appeal through the Google Play appeals form, providing clear proof and documentation.",
      },
    ],
  },
  {
    slug: "google-play-data-safety-form-guide",
    title: "Google Play Data Safety Form: A Developer's Practical Walkthrough",
    category: "Data Safety & Policy",
    readTime: "8 min read",
    publishedAt: "2026-02-25",
    updatedAt: "2026-03-30",
    metaDescription:
      "Step-by-step developer guide to completing the Google Play Data Safety section. Audit third-party SDKs, declare tracking vs app functionality, and avoid common policy rejections.",
    keywords: [
      "Google Play Data Safety form",
      "Data Safety section Play Console",
      "SDK data collection Android",
      "Google Play privacy audit",
    ],
    summary:
      "A complete guide to synchronizing your Android app's embedded SDKs with Google Play's Data Safety declarations. Avoid audit rejections for advertising IDs, analytics, and crash logs.",
    author: {
      name: "PlayStoreGuide Technical Team",
      role: "Android Advisory & Compliance",
    },
    tableOfContents: [
      { id: "data-safety-rules", title: "1. Why the Data Safety Section Triggers Automated Flags" },
      { id: "sdk-audit", title: "2. Auditing Third-Party SDKs (AdMob, Firebase, Analytics)" },
      { id: "data-categories", title: "3. Core Data Categories Explained" },
      { id: "collection-vs-sharing", title: "4. 'Data Collected' vs 'Data Shared'" },
      { id: "deletion-url", title: "5. Mandatory Account & Data Deletion URLs" },
    ],
    sections: [
      {
        id: "data-safety-rules",
        title: "1. Why the Data Safety Section Triggers Automated Flags",
        content:
          "Google utilizes automated static binary scanners that inspect all compiled libraries in your AAB. If your binary includes the Google Mobile Ads SDK (AdMob), Google expects you to declare that 'Device or other IDs' are collected for advertising purposes. If you declare that your app collects zero data, the release is automatically rejected.",
      },
      {
        id: "sdk-audit",
        title: "2. Auditing Third-Party SDKs (AdMob, Firebase, Analytics)",
        content:
          "Every SDK bundled in your app collects telemetry:\n- Firebase Crashlytics: Collects crash logs and diagnostics.\n- Google Analytics for Firebase: Collects user engagement and device identifiers.\n- Ad networks (Unity Ads, AppLovin, AdMob): Collect advertising IDs and approximate location.\n\nConsult each SDK provider's official Google Play Data Safety disclosure guide.",
      },
      {
        id: "data-categories",
        title: "3. Core Data Categories Explained",
        content:
          "Be precise when selecting data categories:\n- Location: Precise vs Approximate.\n- Personal info: Name, email address, user IDs, phone numbers.\n- Financial info: In-app purchase history.\n- Messages & Photos: Only declare if accessed and transmitted off-device.",
      },
      {
        id: "collection-vs-sharing",
        title: "4. 'Data Collected' vs 'Data Shared'",
        content:
          "Data is considered 'collected' if it is transmitted off the device to your server or a third-party server. Data is considered 'shared' if it is transferred to a third party for purposes other than direct service provision (e.g., third-party ad networks).",
      },
      {
        id: "deletion-url",
        title: "5. Mandatory Account & Data Deletion URLs",
        content:
          "If your app allows users to create an account, Google requires you to provide a web-accessible URL where users can request deletion of their account and associated data without reinstalling the app.",
      },
    ],
    faqs: [
      {
        question: "Do I have to declare data processed only ephemerally on the device?",
        answer:
          "Data processed strictly on the user's device and never transmitted off-device does not need to be declared as collected.",
      },
      {
        question: "Does Google verify my Data Safety declarations?",
        answer:
          "Yes. Google uses static binary analysis to detect known SDKs and cross-references them against your form declarations.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guidesData.find((g) => g.slug === slug);
}
