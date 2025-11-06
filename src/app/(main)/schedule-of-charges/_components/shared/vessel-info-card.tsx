"use client";

import { Card } from "@/components/ui";
import type { Vessel } from "@/data/mock-schedule-data";
import { Ship } from "lucide-react";

interface Props {
  vessel: Vessel;
}

export function VesselInfoCard({ vessel }: Props) {
  const infos = [
    { label: "TEU (Nominal)", value: vessel.teu || "-" },
    { label: "Built", value: vessel.built || "-" },
    { label: "IMO Number", value: vessel.imo },
    { label: "Call Sign", value: vessel.callSign },
    { label: "Class", value: vessel.class || "-" },
    { label: "Flag", value: vessel.flag },
  ];

  return (
    <Card className="p-6 border border-border">
      <div className="flex items-center gap-2 mb-6">
        <Ship className="w-5 h-5 text-muted-foreground" />
        <h3 className="font-semibold text-foreground text-lg">{vessel.name}</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {infos.map((info, index) => (
          <div key={index} className="border-r last:border-r-0 pr-4 last:pr-0">
            <p className="text-xs text-muted-foreground font-medium mb-1">
              {info.label}
            </p>
            <p className="font-semibold text-foreground text-sm">
              {info.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
