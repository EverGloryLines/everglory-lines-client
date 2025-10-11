import React from "react";
import { cn } from "@/lib/utils";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        "text-base lg:text-lg text-[#000000]/70 max-w-sm sm:max-w-3xl mx-auto leading-relaxed tracking-tight",
        className
      )}
    >
      {children}
    </p>
  );
};
