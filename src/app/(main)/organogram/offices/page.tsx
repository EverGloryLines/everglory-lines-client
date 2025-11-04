"use client";

import { OfficesHeroSection } from "./_components/offices-hero/offices-hero-section";
import { OfficesMapSection } from "./_components/agent-map/office-map-section";

export default function Offices() {
  return (
    <main>
      <OfficesHeroSection />
      <section id="offices-section" className="py-20 overflow-hidden">
        <OfficesMapSection />
      </section>
    </main>
  );
}
