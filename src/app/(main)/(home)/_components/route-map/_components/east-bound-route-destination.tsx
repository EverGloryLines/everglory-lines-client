/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { MapPin, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Destination, RouteDestinationProps } from "@/types";

const defaultDestinations: Destination[] = [
  { name: "Paradip" },
  { name: "Kolkata" },
  { name: "Haldia" },
  { name: "Mongla" },
  { name: "Pangaon" },
  { name: "Chittagong" },
];

export function EastBoundRouteDestination({
  destinations = defaultDestinations,
  className,
}: RouteDestinationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={cn("w-full py-6 px-4", className)}>
      <h2 className="text-lg md:text-xl 2xl:text-2xl font-plus-jakarta-sans font-medium tracking-normal bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] my-2 md:my-4 pl-4 md:pl-8">
        EASTBOUND :
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-0">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-center"
            style={{
              animation: isVisible
                ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                : "none",
            }}
          >
            <DestinationPoint name={destination.name} index={index} />
            {index < destinations.length - 1 && (
              <RouteArrow direction={index % 2 === 0 ? "down" : "up"} />
            )}
          </div>
        ))}
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

function DestinationPoint({ name }: { name: string; index: number }) {
  return (
    <div className="relative flex flex-col items-center justify-center group">
      <div className="relative">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <MapPin
            className="w-20 h-20 text-[#ff7336] fill-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-600"
            strokeWidth={1.5}
          />
          {/* <div className="absolute inset-0 flex items-center justify-center pt-2">
            <span className="text-xs font-semibold text-gray-800 text-center px-2 max-w-[60px] leading-tight">
              {name}
            </span>
          </div> */}
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-base md:text-lg 2xl:text-xl uppercase font-plus-jakarta-sans font-medium tracking-normal bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] my-2">
          {name}
        </span>
      </div>
    </div>
  );
}

function RouteArrow({ direction }: { direction: "up" | "down" }) {
  return (
    <>
      <div className="hidden lg:flex items-center justify-center mx-3 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff7336] to-transparent rounded-full"></div>
          <ChevronRight
            className="w-6 h-6 text-[#ff7336] flex-shrink-0"
            strokeWidth={3}
          />
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-center py-3">
        <ChevronDown className="w-6 h-6 text-orange-500" strokeWidth={3} />
      </div>
    </>
  );
}
