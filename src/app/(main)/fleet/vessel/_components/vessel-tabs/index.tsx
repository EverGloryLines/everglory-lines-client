"use client";

import { useEffect, useRef, useState } from "react";
import { VesselTabs } from "./vessel-tabs";
import { vessels } from "@/constants/vessels-data";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

export function VesselSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4 bg-background overflow-x-hidden">
      <div className="container mx-auto">
        <div
          className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionTitle className="text-center">Vessel Specification</SectionTitle>
          <SectionDescription className="text-center">
            Discover Our Modern Container Vessels
          </SectionDescription>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <VesselTabs vessels={vessels} />
        </div>
      </div>
    </section>
  );
}
