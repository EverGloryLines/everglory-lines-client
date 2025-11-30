"use client";

import { SectionDescription } from "@/components/shared/text/section-description";
import { SectionTitle } from "@/components/shared/text/section-title";
import { useEffect, useRef, useState } from "react";

export function TariffHeader() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-center mb-8 md:mb-12">
      <div
        ref={titleRef}
        className="transition-all duration-500 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <SectionTitle>Chittagong Port Tariff Overview</SectionTitle>
      </div>

      <div
        ref={descRef}
        className="transition-all duration-800 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: isVisible ? "100ms" : "0ms",
        }}
      >
        <SectionDescription>
          Explore the different sections of chittagong port tariff guide
        </SectionDescription>
      </div>
    </div>
  );
}
