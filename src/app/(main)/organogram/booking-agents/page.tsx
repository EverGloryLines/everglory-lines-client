"use client";


import { BookingAgentsHeroSection } from "./_components/booking-agent-hero/booking-agents-hero-section";
import { AgentMapSection } from "./_components/booking-agent-map/agent-map-section";

export default function BookingAgents() {
  return (
    <main>
      <BookingAgentsHeroSection />
      {/* Placeholder for offices section below */}
      <section id="booking-agent-map" className="py-20 overflow-hidden">
        <AgentMapSection />
      </section>
    </main>
  );
}
