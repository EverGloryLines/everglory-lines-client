"use client";

import { ContainerSpec } from "@/types";
import { ContainerCard } from "./container-card";

interface ContainerGridProps {
  containers: ContainerSpec[];
  onSelectContainer: (id: string) => void;
}

export function ContainerGrid({
  containers,
  onSelectContainer,
}: ContainerGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {containers.map((container) => (
        <ContainerCard
          key={container.id}
          container={container}
          onLearnMore={() => onSelectContainer(container.id)}
        />
      ))}
    </div>
  );
}
