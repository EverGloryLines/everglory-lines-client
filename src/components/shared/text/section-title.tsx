import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={cn(
        "text-[32px] md:text-[36px] 2xl:text-[48px] font-plus-jakarta-sans font-medium tracking-[-0.02em] bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] my-2",
        className
      )}
    >
      {children}
    </h2>
  );
};
