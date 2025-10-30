import React from "react";
import type { Metadata } from "next";
import { LinerServiceBenefitsGrid } from "./_components/liner-service-benefits-grid";
import { LinerServiceContentSections } from "./_components/liner-service-content-sections";
import { LinerServiceFAQSection } from "./_components/liner-service-faq-section";
import { LinerServiceHeroSection } from "./_components/liner-service-hero-section";

export const metadata: Metadata = {
  title:
    "Liner Services - Everglory Lines | India-Bangladesh Container Shipping",
  description:
    "Reliable container liner services between India and Bangladesh. Regular sailings, on-time delivery, and comprehensive cargo solutions for your shipping needs.",
};

export default function LinerServicePage() {
  return (
    <main className="w-full">
      <LinerServiceHeroSection />
      <LinerServiceContentSections />
        <LinerServiceBenefitsGrid />
      <LinerServiceFAQSection />
    </main>
  );
}
