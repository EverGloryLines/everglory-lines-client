"use client";

import { OfficesHeroSection } from "./_components/agent-hero/offices-hero-section";
import { AgentMapSection } from "./_components/agent-map/agent-map-section";

export default function Offices() {
  return (
    <main>
      <OfficesHeroSection />
      {/* Placeholder for offices section below */}
      <section id="offices-section" className="py-20">
        <AgentMapSection />
      </section>
    </main>
  );
}
