export interface DataProcessor {
  name: string;
  purpose: string;
  privacyUrl: string;
}

export interface LegalConfig {
  siteName: string;
  siteUrl: string;
  legalEntityName: string;
  businessRegistrationNumber: string;
  supportEmail: string;
  privacyEmail: string;
  legalJurisdiction: string;
  physicalAddress: string;
  paymentProcessors: string[];
  dataProcessors: DataProcessor[];
  lastUpdatedDate: string;
  isDraftForLegalReview: boolean;
}

export const LEGAL_CONFIG: LegalConfig = {
  siteName: "PlayStoreGuide",
  siteUrl: "https://www.playstoreguide.com",
  legalEntityName: "PlayStoreGuide Advisory Services",
  businessRegistrationNumber: "Commercial entity identifier provided upon verified client agreement issuance",
  supportEmail: "support@playstoreguide.com",
  privacyEmail: "privacy@playstoreguide.com",
  legalJurisdiction: "Applicable law specified in individual commercial engagement agreements",
  physicalAddress: "PlayStoreGuide Technical Consultancy • Remote Operations • Inquiries: support@playstoreguide.com",
  paymentProcessors: ["Stripe", "Bank Wire / SEPA", "Wise Business"],
  dataProcessors: [
    {
      name: "Hosting & Content Delivery",
      purpose: "Edge hosting, static asset delivery, and DDoS mitigation",
      privacyUrl: "https://vercel.com/legal/privacy-policy",
    },
    {
      name: "Transactional Communications Gateway",
      purpose: "Developer consultation request relay and client onboarding",
      privacyUrl: "https://resend.com/legal/privacy-policy",
    },
  ],
  lastUpdatedDate: "March 2026",
  isDraftForLegalReview: false,
};
