"use client";

import { ContainerSpec } from "@/types";
import Image from "next/image";

interface ContainerCardProps {
  container: ContainerSpec;
  onLearnMore: () => void;
}

export function ContainerCard({ container, onLearnMore }: ContainerCardProps) {
  return (
    <div
    onClick={onLearnMore}
      className="group cursor-pointer  flex flex-col bg-card rounded-none border border-border overflow-hidden transition-all duration-300  hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-[#485FA3]"
      
    >
      {/* Title at top, left-aligned */}
      <div className="px-4 pt-4">
        <h3 className="font-normal font-plus-jakarta-sans text-base text-muted-foreground text-left">
          {container.title}
        </h3>
      </div>

      {/* Image centered in middle */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
        <Image
          src={container.image || "/placeholder.svg"}
          alt={container.title}
          width={200}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Button at bottom, left-aligned */}
      <div className="px-4 pb-4">
        <button  className="text-sm font-medium text-muted-foreground group-hover:text-[#485FA3] transition-colors text-left">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
