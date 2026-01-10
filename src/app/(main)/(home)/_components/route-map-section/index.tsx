"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { Timeline } from "@/components/ui";

const data = [
  {
    title: "Paradip Port",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/homepage/route-map/paradip-port-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/paradip-port-2.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/paradip-port-3.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/paradip-port-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Kolkata Port",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/homepage/route-map/kolkata-Port-1.jpeg"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/kolkata-port-2.webp"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/kolkata-port-3.jpg"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/kolkata-port-4.jpg"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Haldia Port",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/homepage/route-map/haldia-port-1.webp"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/haldia-port-2.webp"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/haldia-port-3.jpg"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/haldia-port-4.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Mongla Port",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/homepage/route-map/mongla-port-1.webp"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/mongla-port-2.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/mongla-port-3.webp"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/Mongla-port-4.jpg"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Pangaon Port",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/homepage/route-map/pangaon-port-1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/pangaon-port-2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/pangaon-port-3.jpeg"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/pangaon-port-4.avif"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Chittagong Port",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/homepage/route-map/ctg-port-1.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/ctg-port-2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/ctg-port-3.avif"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/homepage/route-map/ctg-port-4.avif"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

export function RouteMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRoute, setActiveRoute] = useState<"eastbound" | "westbound">(
    "eastbound"
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Determine the data to show based on the active route
  // The default `data` is Eastbound. Westbound is the reverse of that.
  const currentData = activeRoute === "eastbound" ? data : [...data].reverse();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-32">
        <div className="text-center mb-4">
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

          {/* Route Toggle Buttons */}
          <div
            className="flex justify-center gap-4 mt-8"
            style={{
              animation: isVisible
                ? "slideInUp 0.6s ease-out 0.2s both"
                : "none",
            }}
          >
            <button
              onClick={() => setActiveRoute("eastbound")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 font-plus-jakarta-sans text-sm md:text-base ${
                activeRoute === "eastbound"
                  ? "bg-[#24479B] text-white shadow-lg shadow-[#24479B]/20"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50"
              }`}
            >
              Eastbound
            </button>
            <button
              onClick={() => setActiveRoute("westbound")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 font-plus-jakarta-sans text-sm md:text-base ${
                activeRoute === "westbound"
                  ? "bg-[#24479B] text-white shadow-lg shadow-[#24479B]/20"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50"
              }`}
            >
              Westbound
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-clip">
          <Timeline data={currentData} />
        </div>
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
