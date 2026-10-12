export interface BlogTag {
  slug: string;
  name: string;
  description: string;
}

export const blogTags: BlogTag[] = [
  {
    slug: "20-testers",
    name: "20 Testers",
    description: "Guidance and technical requirements for recruiting and maintaining 20 active Android testers.",
  },
  {
    slug: "closed-testing",
    name: "Closed Testing",
    description: "Configuring, distributing, and monitoring closed testing tracks in Google Play Console.",
  },
  {
    slug: "duns-verification",
    name: "D-U-N-S Verification",
    description: "Navigating Dun & Bradstreet registration and Google Play organization verification.",
  },
  {
    slug: "production-review",
    name: "Production Review",
    description: "Preparing for Google's human-evaluated production access questionnaire and feedback dossier.",
  },
  {
    slug: "app-rejections",
    name: "App Rejections",
    description: "Deconstructing policy violation notices, root-cause diagnosis, and formal developer appeals.",
  },
  {
    slug: "data-safety",
    name: "Data Safety",
    description: "Synchronizing third-party SDK telemetries with Google Play Data Safety form declarations.",
  },
  {
    slug: "target-sdk",
    name: "Target SDK",
    description: "Maintaining compliance with Google's annual Android API level requirements (Android 14/15).",
  },
  {
    slug: "android-vitals",
    name: "Android Vitals",
    description: "Monitoring crash rates, ANR rates, and stability thresholds in Google Play Console.",
  },
  {
    slug: "store-listing",
    name: "Store Listing",
    description: "Optimizing app titles, short descriptions, screenshots, and metadata without policy penalties.",
  },
];

export function getTagBySlug(slug: string): BlogTag | undefined {
  return blogTags.find((t) => t.slug === slug);
}
