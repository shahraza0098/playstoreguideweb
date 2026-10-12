import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/services/account-setup",
        destination: "/services/play-console-account-setup",
        permanent: true,
      },
      {
        source: "/services/production-access",
        destination: "/services/production-access-guidance",
        permanent: true,
      },
      {
        source: "/services/app-publishing",
        destination: "/services/app-publishing-assistance",
        permanent: true,
      },
      {
        source: "/services/rejection-troubleshooting",
        destination: "/services/app-rejection-help",
        permanent: true,
      },
      {
        source: "/services/listing-optimization",
        destination: "/services/play-store-aso",
        permanent: true,
      },
      {
        source: "/guides/google-play-20-testers-requirement-playbook",
        destination: "/blog/google-play-closed-testing-requirements-guide",
        permanent: true,
      },
      {
        source: "/guides/how-to-pass-production-access-review",
        destination: "/blog/how-to-prepare-for-google-play-production-access",
        permanent: true,
      },
      {
        source: "/guides/google-play-account-verification-guide",
        destination: "/blog/google-play-developer-account-verification-guide",
        permanent: true,
      },
      {
        source: "/guides/google-play-app-rejection-recovery-guide",
        destination: "/blog/common-google-play-app-rejection-reasons",
        permanent: true,
      },
      {
        source: "/guides/google-play-data-safety-form-guide",
        destination: "/blog/android-app-publishing-checklist-2026",
        permanent: true,
      },
      {
        source: "/guides/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
