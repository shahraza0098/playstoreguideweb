export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  subsections?: {
    id?: string;
    title: string;
    content: string;
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
  }[];
  callout?: {
    type: "note" | "warning" | "tip" | "official";
    text: string;
  };
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleSource {
  title: string;
  url: string;
  publisher: string;
  verifiedDate?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  status: "published" | "draft";
  authorId: string;
  reviewerId?: string;
  category: "closed-testing" | "account-setup" | "production-access" | "policy-compliance" | "aso-growth";
  tags: string[];
  readTime: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl?: string;
  };
  serviceLink?: {
    title: string;
    href: string;
    badge: string;
  };
  sources: ArticleSource[];
  faqs?: ArticleFaq[];
  featured?: boolean;
  sections: ArticleSection[];
}

export const articlesData: Article[] = [
  // 1. Google Play closed testing requirements
  {
    slug: "google-play-closed-testing-requirements-guide",
    title: "Google Play 14-Day Closed Testing Requirement: Complete Technical Guide",
    excerpt:
      "A complete technical guide to Google Play's mandatory closed testing rule for personal accounts. Learn who is affected, how opt-in tracking works, and how to avoid 14-day counter resets.",
    publishedAt: "2026-01-12",
    updatedAt: "2026-04-02",
    status: "published",
    authorId: "farhan-shah",
    reviewerId: "technical-review-board",
    category: "closed-testing",
    tags: ["20-testers", "closed-testing", "14-day-rule", "production-access"],
    readTime: "10 min read",
    featured: true,
    featuredImage: {
      url: "/blog/closed-testing-requirements.png",
      alt: "Google Play 20 Testers Closed Testing Dashboard Demonstration",
    },
    seo: {
      title: "Google Play 14-Day Closed Testing Requirements (20 Testers Guide)",
      description:
        "Understand Google Play's mandatory 20-tester, 14-day closed testing requirement for personal developer accounts. Avoid counter resets and pass production review.",
      keywords: [
        "Google Play closed testing requirements",
        "14 day closed testing Google Play",
        "20 testers Google Play",
        "14 days closed test personal account",
        "Google Play testing rule",
        "Play Console closed testing",
      ],
    },
    serviceLink: {
      title: "Need a compliant 14-day cohort on real Android devices?",
      href: "/services/closed-testing",
      badge: "Primary Service",
    },
    sources: [
      {
        title: "Testing requirements for personal developer accounts created after November 13, 2023",
        url: "https://support.google.com/googleplay/android-developer/answer/14151465",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-04-01",
      },
      {
        title: "Set up an open, closed, or internal test",
        url: "https://support.google.com/googleplay/android-developer/answer/9845334",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-04-01",
      },
    ],
    faqs: [
      {
        question: "Does the 20-tester requirement apply to organization developer accounts?",
        answer:
          "No. Official Google policy applies the mandatory 14-day 20-tester closed testing requirement exclusively to personal developer accounts created on or after November 13, 2023. Organization accounts verified with a D-U-N-S number are exempt, though closed testing is still recommended.",
      },
      {
        question: "What causes the 14-day timer to reset back to Day 1?",
        answer:
          "The timer resets if the number of actively opted-in testers falls below 20 at any point during the 14-day window. Pausing the closed testing track or uploading a breaking build that prevents installation also halts the countdown.",
      },
      {
        question: "Do testers need to open the app every day?",
        answer:
          "Google does not mandate daily launches in writing, but human reviewers evaluate telemetry and session engagement. If an app receives zero launches across 14 days, the subsequent production access application is frequently rejected for insufficient testing evidence.",
      },
    ],
    sections: [
      {
        id: "policy-background",
        title: "1. Policy Background: Why Google Enforces Closed Testing",
        content:
          "In November 2023, Google introduced a fundamental policy shift across the Android ecosystem. Developers with personal Play Console accounts created on or after November 13, 2023 must run a closed testing track with at least 20 testers who have remained continuously opted in for at least 14 days before becoming eligible to apply for production access.\n\nThis policy was enacted to combat low-quality spam applications, ensure minimum stability across varied hardware, and verify that developers gather real qualitative user feedback before publishing to the public Google Play Store.",
        callout: {
          type: "official",
          text: "Official Google Policy: This mandate applies strictly to personal accounts. Organization accounts verified with a D-U-N-S number can publish directly to production, though running closed tests is strongly encouraged by Google.",
        },
      },
      {
        id: "how-counter-works",
        title: "2. How Google's 14-Day Opt-In Counter Operates",
        content:
          "Once you roll out a release to your Closed Testing track and invite testers via email or Google Groups, testers must accept the invitation on the web or directly on their Android device.\n\nThe 14-day countdown only begins when at least 20 unique Google accounts have successfully opted in. You can monitor progress on your Google Play Console dashboard under the 'Test your app with 20 testers for at least 14 days' task card.",
        callout: {
          type: "warning",
          text: "If even one tester opts out and your count drops from 20 to 19 for even a brief period, Google's dashboard counter resets to Day 1. Always recruit 22 to 25 testers to provide an active safety margin.",
        },
      },
      {
        id: "telemetry-and-engagement",
        title: "3. Generating Authentic Play Services Telemetry",
        content:
          "A widespread trap for solo developers is recruiting friends or using automated services where accounts click 'Accept Invite' but never download or launch the build. Google's Play Services client on physical Android devices reports active engagement telemetry.\n\nDuring manual production access reviews, Google evaluators inspect session counts, crash logs, and Android Vitals. Apps with zero active launches raise immediate red flags.",
      },
      {
        id: "collecting-evidence",
        title: "4. Capturing Feedback for the Production Questionnaire",
        content:
          "Meeting the 14-day threshold is merely a prerequisite to unlock the 'Apply for production' button. It does not grant automatic approval. You will be required to answer 5 detailed questions regarding your testing experience, user feedback, and bug fixes.\n\nDocument user confusion, device-specific performance issues, and UI quirks encountered during the 14 days. You will need this evidence to pass Google's human evaluation.",
      },
      {
        id: "fourteen-day-checklist",
        title: "5. Practical 14-Day Closed Testing Execution Checklist",
        content:
          "Follow this structured checklist to ensure your testing track proceeds without resets or review delays:\n\n- Before Day 1: Confirm Target SDK 34/35 build, configure Google Group tester list, prepare 22–25 real device testers (+3 safety buffer), and verify test account credentials in App Access.\n- Days 1 to 14: Monitor Play Console opt-in counts daily, maintain continuous tester participation, and verify track status remains 'Completed'.\n- During Testing: Collect qualitative feedback logs, inspect Android Vitals (crash rate < 1.09%, ANR < 0.47%), and deploy at least one maintenance build (e.g. v1.0.1) addressing bugs.\n- After 14 Days: Unlock 'Apply for production', compile feedback summaries, and draft thorough answers citing concrete iteration history for Google human reviewers.",
        callout: {
          type: "tip",
          text: "Need professional assistance coordinating your 14-day closed testing track? Explore our guided 14-day testing coordination service with real physical Android testers.",
        },
      },
    ],
  },

  // 2. How to create a Google Play Console account
  {
    slug: "how-to-create-google-play-developer-account",
    title: "How to Create a Google Play Developer Account: Step-by-Step Setup Guide",
    excerpt:
      "A complete walkthrough of registering a Google Play developer account in 2026. Personal vs organization accounts, $25 fee, document verification, and security setup.",
    publishedAt: "2026-01-20",
    updatedAt: "2026-03-24",
    status: "published",
    authorId: "farhan-shah",
    reviewerId: "technical-review-board",
    category: "account-setup",
    tags: ["account-setup", "duns-verification"],
    readTime: "8 min read",
    featured: false,
    featuredImage: {
      url: "/blog/play-console-account-setup.png",
      alt: "Google Play Console Registration and Verification Screen",
    },
    seo: {
      title: "How to Create a Google Play Developer Account (2026 Guide)",
      description:
        "Step-by-step guide to setting up a personal or organization Google Play Console developer account. Registration fee, identity verification, and D-U-N-S matching.",
      keywords: [
        "create Google Play developer account",
        "how to register Play Console",
        "Google Play developer account fee",
        "personal vs organization developer account",
        "Play Console setup walkthrough",
      ],
    },
    serviceLink: {
      title: "Need help auditing identity documents or D-U-N-S records?",
      href: "/services/play-console-account-setup",
      badge: "Account Advisory",
    },
    sources: [
      {
        title: "How to use Google Play Console",
        url: "https://support.google.com/googleplay/android-developer/answer/6112435",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "choosing-account-type",
        title: "1. Personal vs. Organization Accounts",
        content:
          "The first critical decision when creating a Google Play developer account is choosing between a Personal and an Organization account:\n\n- Personal Account: Registered to an individual. Requires personal government photo ID and proof of address. Subject to the mandatory 14-day 20-tester closed testing rule.\n- Organization Account: Registered to an incorporated legal entity. Requires an active Dun & Bradstreet D-U-N-S number, corporate incorporation documents, an official domain website, and a corporate email domain. Exempt from the 20-tester rule.",
      },
      {
        id: "registration-steps",
        title: "2. The 5-Step Registration Walkthrough",
        content:
          "1. Sign in with a dedicated Google Account (use a clean email not tied to suspended profiles).\n2. Choose your account type (Personal or Organization).\n3. Enter your public developer profile information (Developer Name, contact email, website, and phone number with international country code).\n4. Pay the one-time $25 USD registration fee via credit or debit card.\n5. Complete developer identity verification within your assigned deadline.",
      },
      {
        id: "account-security",
        title: "3. Hardening Account Security and 2-Step Verification",
        content:
          "Google strictly enforces 2-Step Verification (2FA) for all Play Console account holders. We recommend registering physical FIDO2 security keys (such as YubiKeys) or Google Authenticator rather than SMS-based verification to protect against SIM-swapping attacks.\n\nNever share root account credentials with contractors. Instead, use Play Console's 'Users and permissions' to invite collaborators with least-privilege access roles.",
      },
    ],
  },

  // 3. How to configure a closed testing track
  {
    slug: "how-to-configure-google-play-closed-testing-track",
    title: "How to Configure a Closed Testing Track in Google Play Console",
    excerpt:
      "Step-by-step instructions for creating, configuring, and publishing releases to a Closed Testing track. Manage Google Groups, email lists, and opt-in URLs.",
    publishedAt: "2026-01-28",
    updatedAt: "2026-03-29",
    status: "published",
    authorId: "farhan-shah",
    reviewerId: "technical-review-board",
    category: "closed-testing",
    tags: ["closed-testing", "20-testers"],
    readTime: "7 min read",
    featured: false,
    featuredImage: {
      url: "/blog/configure-closed-track.png",
      alt: "Google Play Console Closed Testing Track Configuration Menu",
    },
    seo: {
      title: "How to Configure a Google Play Closed Testing Track (Step-by-Step)",
      description:
        "Learn how to create a closed testing track in Google Play Console, manage tester lists via Google Groups, upload AAB bundles, and generate join links.",
      keywords: [
        "configure closed testing track Google Play",
        "closed testing track setup",
        "Google Play Console test track",
        "upload AAB closed testing",
        "closed testing join link",
      ],
    },
    serviceLink: {
      title: "Looking for real testers to join your closed testing track?",
      href: "/services/closed-testing",
      badge: "Testing Service",
    },
    sources: [
      {
        title: "Set up an open, closed, or internal test",
        url: "https://support.google.com/googleplay/android-developer/answer/9845334",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "track-creation",
        title: "1. Creating Your Closed Testing Track",
        content:
          "In Google Play Console, navigate to Release > Testing > Closed testing. Click 'Create track' and provide a descriptive track name (e.g., 'Alpha Closed Testing' or 'Mandatory 20 Testers').\n\nYou can create multiple closed tracks, but Google evaluates your primary closed track to fulfill the 20-tester requirement.",
      },
      {
        id: "tester-list-setup",
        title: "2. Setting Up Tester Distribution: Email Lists vs. Google Groups",
        content:
          "You have two options for managing tester access:\n\n1. Email Lists: Upload a CSV containing up to 2,000 email addresses of testers' Google accounts.\n2. Google Groups (Recommended): Create a private or public Google Group and link the group email address (e.g., testers@googlegroups.com). When members join the group, they automatically gain access to test your app without manual CSV re-uploads.",
      },
      {
        id: "uploading-aab",
        title: "3. Creating and Rolling Out the Release",
        content:
          "Click 'Create new release' inside your closed track. Upload your signed Android App Bundle (AAB). Enter a clear release name and localized release notes ('What's new in this release').\n\nClick 'Review release' and then 'Start rollout to Closed testing'. Ensure the release status changes from 'In review' to 'Completed'. Opt-in links only function when an active release is live.",
      },
    ],
  },

  // 4. How to invite testers and manage opt-ins
  {
    slug: "how-to-invite-testers-manage-opt-ins-google-play",
    title: "How to Invite Testers and Manage Opt-Ins on Google Play Console",
    excerpt:
      "A practical guide to distributing web and Android opt-in links, troubleshooting 'App not available' errors, and maintaining active tester retention across 14 days.",
    publishedAt: "2026-02-05",
    updatedAt: "2026-03-30",
    status: "published",
    authorId: "farhan-shah",
    reviewerId: "technical-review-board",
    category: "closed-testing",
    tags: ["closed-testing", "20-testers", "14-day-rule"],
    readTime: "8 min read",
    featured: false,
    featuredImage: {
      url: "/blog/invite-testers-opt-in.png",
      alt: "Google Play Web and Android Opt-In Invitation Screen",
    },
    seo: {
      title: "How to Invite Testers & Manage Opt-Ins on Google Play Console",
      description:
        "Learn how to generate web and Android opt-in URLs, fix 'App not available for this account' errors, and keep 20 testers opted in for 14 continuous days.",
      keywords: [
        "invite testers Google Play",
        "manage opt ins Play Console",
        "Google Play closed testing opt in link",
        "app not available closed testing error",
        "keep testers opted in Google Play",
      ],
    },
    serviceLink: {
      title: "Eliminate drop-off risks with a fully managed tester cohort",
      href: "/services/closed-testing",
      badge: "Testing Service",
    },
    sources: [
      {
        title: "Set up an open, closed, or internal test",
        url: "https://support.google.com/googleplay/android-developer/answer/9845334",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "generating-links",
        title: "1. Locating and Sharing Your Opt-In URLs",
        content:
          "Under Closed testing > Testers tab, scroll to the bottom to find 'How testers join your test'. Google provides two links:\n\n1. Join on Android: Opens the Google Play Store app directly on a mobile device.\n2. Join on the Web: Opens an opt-in web page in browser where testers click 'Become a tester'.\n\nTesters must click the link using the exact Google Account that was invited to your tester list.",
      },
      {
        id: "troubleshooting-errors",
        title: "2. Fixing the 'App not available' Error",
        content:
          "The most common issue reported by testers is an 'App not available' or 'Item not found' message upon clicking the join link. This occurs when:\n\n- The release is still 'In review' and has not reached 'Completed' status.\n- The tester is logged into multiple Google accounts in their mobile browser, and the active account is not on the tester list.\n- The app is not available in the tester's Play Store country/region (check Closed testing > Countries/regions settings).",
      },
      {
        id: "monitoring-retention",
        title: "3. Monitoring 14-Day Opt-In Retention",
        content:
          "Google Play Console updates tester metrics daily. Keep a daily log of active opted-in testers. If your active count drops below 20 at any point, recruit replacement testers immediately to resume countdown without a full reset.",
      },
    ],
  },

  // 5. How to prepare for production access
  {
    slug: "how-to-prepare-for-google-play-production-access",
    title: "How to Prepare for Google Play Production Access: Questionnaire & Vitals Checklist",
    excerpt:
      "A technical guide to answering Google's 5-prompt production access application form. Learn what human reviewers evaluate, how to present feedback, and Android Vitals benchmarks.",
    publishedAt: "2026-02-14",
    updatedAt: "2026-03-30",
    status: "published",
    authorId: "farhan-shah",
    reviewerId: "technical-review-board",
    category: "production-access",
    tags: ["production-review", "android-vitals", "closed-testing"],
    readTime: "10 min read",
    featured: true,
    featuredImage: {
      url: "/blog/production-access-prep.png",
      alt: "Google Play Console Apply for Production Access Questionnaire",
    },
    seo: {
      title: "How to Prepare for Google Play Production Access Review",
      description:
        "Comprehensive guide to passing Google Play's production access review. Question-by-question breakdown, tester feedback compilation, and Android Vitals thresholds.",
      keywords: [
        "prepare for production access Google Play",
        "production access questionnaire answers",
        "apply for production Play Console guide",
        "Google Play production review checklist",
        "Android Vitals crash rate threshold",
      ],
    },
    serviceLink: {
      title: "Need expert advisory to structure your production access answers?",
      href: "/services/production-access-guidance",
      badge: "Launch Advisory",
    },
    sources: [
      {
        title: "Apply for production access in Google Play Console",
        url: "https://support.google.com/googleplay/android-developer/answer/14151465",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
      {
        title: "Android Vitals thresholds and core metrics",
        url: "https://support.google.com/googleplay/android-developer/answer/7072485",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "review-process",
        title: "1. The Human Review Process Behind Production Access",
        content:
          "Once the 14-day closed testing period finishes, clicking 'Apply for production' initiates a manual review by Google's policy operations team. Reviewers assess whether your software underwent genuine user testing or if you simply attempted to satisfy a formal quota without engagement.",
        callout: {
          type: "warning",
          text: "Never submit one-line answers like 'My friends liked it and found no bugs'. Human reviewers reject generic responses and mandate an additional 14 days of closed testing.",
        },
      },
      {
        id: "questionnaire-prompts",
        title: "2. Breakdown of the 5 Core Questionnaire Prompts",
        content:
          "Google asks 5 specific questions:\n1. Target Audience: Who is your app built for and what is its primary use case?\n2. Tester Recruitment: How did you find your 20+ testers? Describe your recruitment methodology.\n3. User Feedback: What specific qualitative feedback and feature observations did testers report?\n4. Iteration & Bug Fixes: What concrete changes or bug fixes did you release based on testing feedback?\n5. Production Readiness: How did you conclude that the app is stable and ready for a broad public release?",
      },
      {
        id: "supporting-data",
        title: "3. Supporting Data: Changelogs & Android Vitals",
        content:
          "Reviewers inspect your console telemetry. Ensure that:\n- You released at least one patch update during testing, and release notes correspond to the bug fixes mentioned in your answers.\n- Android Vitals crash rate is below 1.09% and ANR rate is below 0.47%.\n- Zero severe policy flags exist in your App Content section.",
        callout: {
          type: "tip",
          text: "Still need to complete your 14-day closed testing track before applying? Learn about our guided 14-day closed testing coordination service with 20+ verified real Android testers.",
        },
      },
    ],
  },

  // 6. Common app rejection reasons
  {
    slug: "common-google-play-app-rejection-reasons",
    title: "Top 10 Google Play App Rejection Reasons and How to Fix Them",
    excerpt:
      "A comprehensive analysis of the most frequent Google Play rejections: broken functionality, App Access test credentials, Data Safety discrepancies, and sensitive permissions.",
    publishedAt: "2026-02-20",
    updatedAt: "2026-03-29",
    status: "published",
    authorId: "elena-vance",
    reviewerId: "technical-review-board",
    category: "policy-compliance",
    tags: ["app-rejections", "data-safety", "target-sdk"],
    readTime: "9 min read",
    featured: false,
    featuredImage: {
      url: "/blog/app-rejections-guide.png",
      alt: "Google Play Console Policy Violation and Rejection Notice Email",
    },
    seo: {
      title: "Top 10 Google Play App Rejection Reasons & Solutions (2026)",
      description:
        "Understand why Google Play rejects Android apps. Broken functionality, App Access test logins, Data Safety mismatches, and how to resolve them safely.",
      keywords: [
        "Google Play app rejection reasons",
        "why Google Play rejected my app",
        "App Access reviewer login rejection",
        "Data Safety policy violation fix",
        "Google Play rejection appeal",
      ],
    },
    serviceLink: {
      title: "Dealing with a rejection email or policy strike from Google?",
      href: "/services/app-rejection-help",
      badge: "Policy Recovery",
    },
    sources: [
      {
        title: "Google Play Developer Program Policy Center",
        url: "https://support.google.com/googleplay/android-developer/topic/9858052",
        publisher: "Google Play Policy Center",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "top-rejections-list",
        title: "1. The Most Frequent Google Play Policy Violations",
        content:
          "Google's automated binary scanners and human review QA teams frequently reject builds for:\n\n1. Broken Functionality: The app crashes on startup, displays a blank screen, or fails on network calls.\n2. Incomplete App Access: Reviewers are blocked by a login screen without working demo credentials.\n3. Data Safety Discrepancies: Undeclared advertising identifiers or crash SDK telemetry.\n4. Excessive Permissions: Declaring sensitive background permissions (FOREGROUND_SERVICE, background location) without declared core functionality.\n5. Misleading Metadata: Promotional slogans, emojis, or competitor trademark keywords in store listings.",
      },
      {
        id: "app-access-deep-dive",
        title: "2. The 'App Access' Rejection: How to Configure Reviewer Logins",
        content:
          "If your app requires an account, you must navigate to Policy > App Content > App access and provide full, unrestricted test credentials. Ensure:\n- The test account is pre-configured and pre-verified (no OTP or SMS verification prompts).\n- Test data is pre-populated so reviewers can experience core app features immediately.\n- Any geographic IP restrictions are lifted for Google review testing regions (US, India, Ireland).",
      },
      {
        id: "remediation-protocol",
        title: "3. Proper Remediation vs. Blind Resubmission",
        content:
          "Never submit the exact same binary without making changes in hopes of getting a different reviewer. Repeated unaddressed rejections accumulate strikes against your developer account. Always modify code, manifest, or metadata to address the root violation before resubmission.",
      },
    ],
  },

  // 7. Google Play account verification
  {
    slug: "google-play-developer-account-verification-guide",
    title: "Google Play Developer Account Verification: Personal Identity & D-U-N-S Guide",
    excerpt:
      "A complete guide to passing mandatory Google Play Console verification for personal and organization accounts. Avoid address mismatches and account termination.",
    publishedAt: "2026-02-26",
    updatedAt: "2026-03-28",
    status: "published",
    authorId: "elena-vance",
    reviewerId: "technical-review-board",
    category: "account-setup",
    tags: ["account-setup", "duns-verification"],
    readTime: "8 min read",
    featured: false,
    featuredImage: {
      url: "/blog/account-verification-guide.png",
      alt: "Google Play Console Developer Account Verification Requirements",
    },
    seo: {
      title: "Google Play Account Verification: D-U-N-S & Identity Guide",
      description:
        "Pass Google Play Console developer account verification. Learn how to verify personal IDs, synchronize D-U-N-S records, and avoid account closure.",
      keywords: [
        "Google Play account verification guide",
        "DUNS number Play Console matching",
        "Google Play organization verification",
        "Play Console identity verification deadline",
        "proof of address Google Play",
      ],
    },
    serviceLink: {
      title: "Need pre-flight validation of your D-U-N-S or ID documents?",
      href: "/services/play-console-account-setup",
      badge: "Account Advisory",
    },
    sources: [
      {
        title: "Verify your developer account identity",
        url: "https://support.google.com/googleplay/android-developer/answer/10841920",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "verification-mandate",
        title: "1. The 2026 Verification Mandate",
        content:
          "All Google Play developers must complete formal account verification by their assigned console deadline. Failure to verify results in developer profile removal and app unpublishing across all regions.\n\nGoogle partners with Dun & Bradstreet for organization verification and specialized third-party identity partners for personal accounts.",
      },
      {
        id: "duns-matching",
        title: "2. D-U-N-S Registration & Letter-for-Letter Matching",
        content:
          "For organization accounts, your business name and physical street address in Google Payments must match your Dun & Bradstreet record letter-for-letter. If registered as 'Apex Technologies LLC' in D&B, entering 'Apex Tech' in Play Console causes automatic rejection.\n\nAlways request a free D-U-N-S profile lookup before initiating verification in Play Console.",
      },
      {
        id: "accepted-documents",
        title: "3. Accepted Identification & Proof of Address Documents",
        content:
          "Google enforces strict criteria for documentation:\n- ID: Passport, Driver's License, or National ID (unexpired, with clear photos of all four corners).\n- Proof of Address: Bank statement or utility bill dated within the last 60 days. Electronic PDFs downloaded directly from your bank or provider are strongly preferred over phone camera snapshots.",
      },
    ],
  },

  // 8. An Android app publishing checklist
  {
    slug: "android-app-publishing-checklist-2026",
    title: "The Complete Android App Publishing Checklist for Google Play (2026 Edition)",
    excerpt:
      "A comprehensive 25-point checklist before submitting your Android App Bundle to Google Play. Target API levels, Data Safety, permissions, reviewer credentials, and graphics.",
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-31",
    status: "published",
    authorId: "farhan-shah",
    reviewerId: "technical-review-board",
    category: "policy-compliance",
    tags: ["target-sdk", "data-safety", "store-listing"],
    readTime: "9 min read",
    featured: false,
    featuredImage: {
      url: "/blog/publishing-checklist-2026.png",
      alt: "Android App Publishing Pre-Flight Technical Checklist",
    },
    seo: {
      title: "The Complete Android App Publishing Checklist (2026 Edition)",
      description:
        "The ultimate pre-launch publishing checklist for Google Play. Technical checks, Target SDK 34/35, Data Safety synchronization, and store listing compliance.",
      keywords: [
        "Android app publishing checklist",
        "Google Play pre launch checklist",
        "Target SDK 34 requirements",
        "Google Play release checklist",
        "Play Console pre flight audit",
      ],
    },
    serviceLink: {
      title: "Evaluate your app with our free interactive readiness checklist",
      href: "/tools/policy-readiness-checklist",
      badge: "Free Utility",
    },
    sources: [
      {
        title: "Prepare your app for review",
        url: "https://support.google.com/googleplay/android-developer/answer/9859348",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "technical-checklist",
        title: "1. Core Technical & Binary Requirements",
        content:
          "- Target API Level: Targets Android 14 (API 34) or Android 15 (API 35).\n- App Bundle Format: Signed AAB compiled in Release mode with ProGuard/R8 obfuscation enabled.\n- App Size: Base module under 150MB compressed download size.\n- 64-bit Architecture: Native libraries compiled for 64-bit architectures (arm64-v8a, x86_64).\n- Target SDK Versioning: minSdkVersion, targetSdkVersion, versionCode, and versionName properly set in build.gradle.",
      },
      {
        id: "policy-checklist",
        title: "2. Privacy & Policy Declarations",
        content:
          "- Privacy Policy: Public HTTPS URL disclosing developer contact details and data collection.\n- Data Safety Section: All third-party SDK telemetries declared accurately.\n- App Access: Working demo login credentials provided for review teams.\n- Sensitive Permissions: Removed unnecessary background location, camera, or storage permissions.",
      },
      {
        id: "store-assets-checklist",
        title: "3. Store Listing & Graphic Assets",
        content:
          "- App Title: 30 characters or fewer, free of emojis and promotional slogans ('Free', 'Best').\n- Short Description: 80 characters or fewer communicating core value proposition.\n- High-Res Icon: 512x512 PNG with transparent background.\n- Feature Graphic: 1024x500 PNG/JPEG without border padding.\n- Screenshots: At least 2 phone screenshots (minimum 320px, maximum 3840px, 16:9 or 9:16 aspect ratio).",
      },
    ],
  },

  // 9. Common Play Console publishing errors
  {
    slug: "common-google-play-console-publishing-errors",
    title: "Common Google Play Console Publishing Errors: Causes, Fixes & Workarounds",
    excerpt:
      "A developer troubleshooting guide for frustrating Play Console errors: duplicate version codes, missing debug keys, Target SDK warnings, and upload bundle rejections.",
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-31",
    status: "published",
    authorId: "farhan-shah",
    reviewerId: "technical-review-board",
    category: "policy-compliance",
    tags: ["target-sdk", "app-rejections"],
    readTime: "8 min read",
    featured: false,
    featuredImage: {
      url: "/blog/console-publishing-errors.png",
      alt: "Google Play Console Upload Error Dialog and Resolution",
    },
    seo: {
      title: "Common Google Play Console Publishing Errors & Fixes",
      description:
        "Fix common Google Play Console errors: version code conflicts, upload key mismatches, target API deprecation, and bundle upload failures.",
      keywords: [
        "Play Console publishing errors",
        "version code already exists Google Play",
        "upload key mismatch Play Console",
        "target API level error Play Console",
        "AAB upload failed Google Play",
      ],
    },
    serviceLink: {
      title: "Need expert technical auditing for complex release errors?",
      href: "/services/app-publishing-assistance",
      badge: "Publishing Audit",
    },
    sources: [
      {
        title: "Fix upload and release errors in Google Play Console",
        url: "https://support.google.com/googleplay/android-developer/answer/9859348",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "version-code-errors",
        title: "1. Version Code Already Used Error",
        content:
          "Error Message: 'Version code [X] has already been used for this package name.'\n\nCause: Every AAB uploaded to Play Console must have a strictly higher integer versionCode than any previously uploaded release across all tracks (internal, closed, open, production).\n\nFix: Increment the versionCode integer in your app/build.gradle.kts file before compiling a new release bundle.",
        codeSnippet: {
          language: "kotlin",
          code: "android {\n    defaultConfig {\n        versionCode = 102 // Increment by at least 1\n        versionName = \"1.0.2\"\n    }\n}",
          caption: "app/build.gradle.kts versionCode increment",
        },
      },
      {
        id: "upload-key-mismatch",
        title: "2. Upload Key Certificate Mismatch",
        content:
          "Error Message: 'Your Android App Bundle is signed with the wrong key.'\n\nCause: Google Play App Signing is configured with an upload certificate registered on your first release. If you changed your keystore, switched development machines, or lost your .jks file, the upload fails.\n\nFix: If you lost your upload keystore, generate a new keystore and submit a key reset request through the Google Play Developer Help Center. Google's support team verifies developer identity and updates your upload certificate within 48 business hours.",
      },
      {
        id: "target-api-deprecation",
        title: "3. Target API Level Below Minimum",
        content:
          "Error Message: 'Your app currently targets API level [X] and must target at least API level 34.'\n\nCause: Google mandates that all new releases target current Android API levels.\n\nFix: Update compileSdk and targetSdk to 34 or 35 in your build.gradle configuration and test for runtime permission changes.",
      },
    ],
  },

  // 10. Play Store listing optimization fundamentals
  {
    slug: "play-store-listing-optimization-fundamentals",
    title: "Google Play Store Listing Optimization (ASO): Policy-Compliant Fundamentals",
    excerpt:
      "A complete guide to maximizing organic discoverability and store conversion rates without violating Google's strict metadata spam and graphical asset policies.",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-31",
    status: "published",
    authorId: "elena-vance",
    reviewerId: "technical-review-board",
    category: "aso-growth",
    tags: ["store-listing", "aso"],
    readTime: "9 min read",
    featured: true,
    featuredImage: {
      url: "/blog/aso-fundamentals.png",
      alt: "Google Play Store Listing Optimization and Graphic Asset Specifications",
    },
    seo: {
      title: "Play Store Listing Optimization (ASO): Policy-Compliant Fundamentals",
      description:
        "Learn policy-safe Google Play App Store Optimization (ASO). Titles, short descriptions, screenshot storyboards, and localization without keyword spam.",
      keywords: [
        "Play Store listing optimization",
        "Google Play ASO fundamentals",
        "policy safe ASO Google Play",
        "Google Play metadata rules",
        "app store optimization Android",
      ],
    },
    serviceLink: {
      title: "Need conversion-focused store listing copywriting and screenshot specs?",
      href: "/services/play-store-aso",
      badge: "ASO Advisory",
    },
    sources: [
      {
        title: "Google Play Metadata and Graphic Asset Policy",
        url: "https://support.google.com/googleplay/android-developer/answer/9857753",
        publisher: "Google Play Policy Center",
        verifiedDate: "2026-03-01",
      },
      {
        title: "Graphic assets, screenshots, and video specifications",
        url: "https://support.google.com/googleplay/android-developer/answer/9866130",
        publisher: "Google Play Console Help",
        verifiedDate: "2026-03-01",
      },
    ],
    sections: [
      {
        id: "metadata-policies",
        title: "1. Google Play's Strict Metadata Rules",
        content:
          "Google strictly prohibits deceptive or promotional elements in store metadata:\n\n- Title Length: Max 30 characters.\n- Banned Title Terms: Words expressing store performance ('#1', 'Best', 'Top'), price ('Free', 'Sale'), or calls to action ('Download Now').\n- Emojis & Punctuation: Emojis, all-caps text, and repetitive punctuation (!?) are prohibited in titles and developer names.",
        callout: {
          type: "warning",
          text: "Violating title or icon rules triggers immediate release rejection. Keep titles descriptive, brand-oriented, and policy-clean.",
        },
      },
      {
        id: "short-and-long-description",
        title: "2. Crafting High-Converting Descriptions",
        content:
          "- Short Description (80 characters max): Appears above the fold on mobile store pages. Incorporate your primary high-relevance search query naturally while clearly communicating your core value proposition.\n- Full Description (4,000 characters max): Structure with clean bullet points and natural keyword usage. Do not paste keyword tag clouds at the end of the description; Google's indexing algorithm suppresses repetitive keyword blocks.",
      },
      {
        id: "visual-asset-strategy",
        title: "3. Screenshot Storyboarding & Visual Asset Specifications",
        content:
          "Screenshots account for over 70% of a visitor's install decision. Follow these guidelines:\n- First 3 Screenshots: Highlight your primary value proposition and most compelling UI flows.\n- Concise Callouts: Use bold, high-contrast headline banners above screen captures (4-6 words maximum per caption).\n- Device Frame Legitimacy: Use authentic Android device mockups or flat borderless designs rather than distorted iPhone frames.",
      },
      {
        id: "experiments-and-localization",
        title: "4. Store Listing Experiments & Regional Localization",
        content:
          "Never guess what converts best. Utilize Google Play Console's native Store Listing Experiments to A/B test screenshot variations, app icons, and descriptions against control traffic.\n\nAdditionally, localize your title, short description, and screenshot captions into key international Android markets (Spanish, Portuguese, German, Hindi) to drive substantial organic conversion gains.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find((a) => a.slug === slug);
}

export function getPublishedArticles(): Article[] {
  return articlesData.filter((a) => a.status === "published");
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articlesData.filter(
    (a) => a.status === "published" && a.category === categorySlug
  );
}

export function getArticlesByTag(tagSlug: string): Article[] {
  return articlesData.filter(
    (a) => a.status === "published" && a.tags.includes(tagSlug)
  );
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return articlesData.filter(
    (a) => a.status === "published" && a.authorId === authorSlug
  );
}

export function getArticlesReviewedByAuthor(authorSlug: string): Article[] {
  return articlesData.filter(
    (a) => a.status === "published" && a.reviewerId === authorSlug
  );
}
