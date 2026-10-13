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
  siteUrl: "https://playstoreguide.com",
  // Configurable placeholders for real registered business identity
  legalEntityName: "[Operating Business Entity Name, e.g. PlayStoreGuide Legal Entity]",
  businessRegistrationNumber: "[Company Registration / EIN / VAT Number, e.g. XX-XXXXXXX]",
  supportEmail: "support@playstoreguide.com",
  privacyEmail: "privacy@playstoreguide.com",
  legalJurisdiction: "[Applicable Jurisdiction, e.g. State of Delaware, United States / England & Wales]",
  physicalAddress: "[Registered Office Address, City, State/Province, Country]",
  paymentProcessors: [
    "[Configured Payment Method / Processor, e.g. Stripe / International Bank Wire / Wise Business]",
  ],
  dataProcessors: [
    {
      name: "Hosting & Content Delivery",
      purpose: "Edge hosting, static asset delivery, and DDoS mitigation",
      privacyUrl: "https://vercel.com/legal/privacy-policy",
    },
    {
      name: "Transactional Email Gateway",
      purpose: "Developer consultation request relay (when API keys are configured)",
      privacyUrl: "https://resend.com/legal/privacy-policy",
    },
  ],
  lastUpdatedDate: "October 2026",
  isDraftForLegalReview: true,
};
