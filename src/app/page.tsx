import React from "react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata, generateFAQSchema } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";
import { WorkflowTimeline } from "@/components/home/WorkflowTimeline";
import { TestingEligibilitySection } from "@/components/home/TestingEligibilitySection";
import { ClosedTestingSpotlightSection } from "@/components/home/ClosedTestingSpotlightSection";
import { ClosedTestingMistakesSection } from "@/components/home/ClosedTestingMistakesSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HomeFaqSection, homeFaqs } from "@/components/home/HomeFaqSection";
import { FeaturedGuidesSection } from "@/components/home/FeaturedGuidesSection";
import { InteractiveChecklistPreview } from "@/components/home/InteractiveChecklistPreview";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = constructMetadata({
  title: "Google Play 14-Day Closed Testing Assistance & Production Access Guidance",
  description:
    "Prepare for Google Play Production Access with guided 14-day closed testing assistance. 20+ verified real Android testers, continuous retention tracking, authentic telemetry, and reviewer-ready questionnaire guidance.",
  path: "/",
});

export default function Home() {
  const faqSchema = generateFAQSchema(homeFaqs);

  return (
    <div className="flex flex-col">
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section: Focused squarely on 14-Day Closed Testing & Production Access */}
      <HeroSection />

      {/* 2. 14-Day Testing Process: Reusable 4-Phase Timeline from Setup to Production Review */}
      <WorkflowTimeline />

      {/* 3. Account Eligibility Matrix: Who needs closed testing vs who is exempt */}
      <TestingEligibilitySection />

      {/* 4 & 5. Primary Service Spotlight: Inclusions, Real Device Testers & Transparent Exclusions */}
      <ClosedTestingSpotlightSection />

      {/* 6. Common Compliance Mistakes That Delay Production Access */}
      <ClosedTestingMistakesSection />

      {/* 7. Comprehensive Advisory Tracks: Secondary publishing services overview */}
      <ServicesGrid />

      {/* 8. Frequently Asked Questions about 14-Day Testing & Production Review */}
      <HomeFaqSection />

      {/* 9. Featured Technical Guides & Playbooks */}
      <FeaturedGuidesSection />

      {/* 10. Interactive Pre-Launch Checklist Tool Preview */}
      <InteractiveChecklistPreview />

      {/* 11. Final Enquiry Banner */}
      <CtaBanner />
    </div>
  );
}
