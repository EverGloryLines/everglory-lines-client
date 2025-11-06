"use client";

import { useEffect, useState } from "react";
import { EastBoundRouteDestination } from "./_components/east-bound-route-destination";
import { WestBoundRouteDestination } from "./_components";

export function RouteMap() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-4 md:mb-12">
          <h1
            className="text-[26px] md:text-[30px] 2xl:text-[36px] font-plus-jakarta-sans font-medium tracking-normal bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] my-2"
            style={{
              animation: isVisible ? "slideInUp 0.6s ease-out 0s both" : "none",
            }}
          >
            Shipping Route Network
          </h1>
          <p
            className="text-base lg:text-lg text-[#000000]/70 max-w-sm sm:max-w-3xl mx-auto leading-relaxed tracking-tight"
            style={{
              animation: isVisible
                ? "slideInUp 0.6s ease-out 0.1s both"
                : "none",
            }}
          >
            Our comprehensive route connecting major ports
          </p>
        </div>

        <EastBoundRouteDestination className="mt-2 md:mt-8" />
        <WestBoundRouteDestination className="mt-2 md:mt-8" />
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
