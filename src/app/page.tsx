import React from "react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateFAQSchema } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WorkflowTimeline } from "@/components/home/WorkflowTimeline";
import { WhoWeHelpSection } from "@/components/home/WhoWeHelpSection";
import { FeaturedGuidesSection } from "@/components/home/FeaturedGuidesSection";
import { InteractiveChecklistPreview } from "@/components/home/InteractiveChecklistPreview";
import { HomeFaqSection, homeFaqs } from "@/components/home/HomeFaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = constructMetadata({
  title: "Google Play Publishing & Closed Testing Assistance for Android Developers",
  description:
    "Expert technical guidance for Android developers: 14-day 20-tester closed testing coordination, Play Console account verification, production access reviews, and policy rejection troubleshooting.",
  path: "/",
});

export default function Home() {
  const faqSchema = generateFAQSchema(homeFaqs);

  return (
    <div className="flex flex-col">
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section: Warm Cream Background, Two-Column Layout, Dashboard Illustration */}
      <HeroSection />

      {/* 2. Advisory Services: Pure White Content Panels with Deliverables */}
      <ServicesGrid />

      {/* 3. Testing & Publishing Process: Alternating Timeline with Connected Steps */}
      <WorkflowTimeline />

      {/* 4. Target Audiences & Impact: Persona Cards with Challenges and Solutions */}
      <WhoWeHelpSection />

      {/* 5. Featured Guides: Technical Knowledge Base Playbooks */}
      <FeaturedGuidesSection />

      {/* 6. Interactive Pre-Launch Checklist Tool Preview */}
      <InteractiveChecklistPreview />

      {/* 7. Comprehensive Transparent FAQ Section */}
      <HomeFaqSection />

      {/* 8. Final Enquiry & Consultation CTA with Contrasting Background */}
      <CtaBanner />
    </div>
  );
}
