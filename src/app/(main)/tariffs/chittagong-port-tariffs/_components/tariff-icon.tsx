"use client";

import type React from "react";

import { Ship, Anchor, Cog, Container, Truck, Waves } from "lucide-react";

interface TariffIconProps {
  iconName: string;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Ship: <Ship className="h-6 w-6" />,
  Anchor: <Anchor className="h-6 w-6" />,
  Cog: <Cog className="h-6 w-6" />,
  Container: <Container className="h-6 w-6" />,
  Truck: <Truck className="h-6 w-6" />,
  Waves: <Waves className="h-6 w-6" />,
};

export function TariffIcon({ iconName }: TariffIconProps) {
  return (
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#485FA3] flex items-center justify-center text-white">
      {ICON_MAP[iconName] || <Ship className="h-6 w-6" />}
    </div>
  );
}
