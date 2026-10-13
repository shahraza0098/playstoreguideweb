import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.playstoreguide.com";
export const SITE_NAME = "PlayStoreGuide";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function constructMetadata({
  title,
  description,
  path = "",
  keywords = [
    "Google Play Console",
    "20 testers 14 days",
    "closed testing Google Play",
    "Google Play production access",
    "Android app publishing",
    "Google Play rejection help",
    "Google Play developer account verification",
    "D-U-N-S number Play Console",
    "App Store Optimization Android",
  ],
  ogType = "website",
  publishedTime,
  modifiedTime,
}: MetadataProps): Metadata {
  const isRoot = path === "" || path === "/";
  const normalizedPath = isRoot ? "/" : (path.startsWith("/") ? path : `/${path}`).replace(/\/+$/, "");
  const canonicalUrl = isRoot ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;

  // Strip redundant brand suffix if already included in title to prevent double template suffixes
  const cleanTitle = title.replace(/\s*(\||\-)\s*PlayStoreGuide$/i, "").trim();
  const fullTitle = cleanTitle.includes(SITE_NAME) ? cleanTitle : `${cleanTitle} | ${SITE_NAME}`;

  return {
    title: isRoot
      ? {
          default: title,
          template: `%s | ${SITE_NAME}`,
        }
      : cleanTitle,
    description,
    keywords,
    authors: [{ name: "PlayStoreGuide Editorial & Advisory Team" }],
    creator: "PlayStoreGuide",
    publisher: "PlayStoreGuide",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${cleanTitle} - PlayStoreGuide`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@PlayStoreGuide",
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Structured Data (JSON-LD) Generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PlayStoreGuide",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Independent technical consultancy and educational resource providing Google Play publishing guidance, closed testing coordination, policy compliance audits, and account verification support for Android developers.",
    sameAs: [],
    knowsAbout: [
      "Google Play Console",
      "Android App Publishing",
      "Google Play 14-day 20-tester Requirement",
      "Google Play Production Access Review",
      "Google Play Developer Policy Compliance",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@playstoreguide.com",
      availableLanguage: ["English"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Step-by-step Google Play publishing guides, closed testing coordination, and policy compliance advisory for Android developers.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "Developer Consultation & Advisory",
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Google Play Publishing Services",
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "PlayStoreGuide Technical Team",
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${SITE_URL}${url}`,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
