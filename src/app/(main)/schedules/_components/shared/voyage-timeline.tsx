"use client";

import type { VoyageStop } from "@/data/mock-schedule-data";
import { formatDateTime } from "@/lib/date-formatters";
import { ArrowDown, ArrowUp } from "lucide-react";

interface Props {
  voyages: VoyageStop[];
}

export function VoyageTimeline({ voyages }: Props) {
  return (
    <div className="relative pl-8 space-y-6">
      {/* Vertical dotted line */}
      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border border-l-2 border-dotted" />

      {voyages.map((voyage, index) => (
        <div key={index} className="space-y-3">
          {/* Port marker circle */}
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background -ml-1 mt-0.5" />

          {/* Port name */}
          <div className="space-y-1">
            <p className="font-semibold text-primary hover:underline cursor-pointer">
              {voyage.port.name}
            </p>
            <p className="text-xs text-muted-foreground">{voyage.terminal}</p>
          </div>

          {/* Arrival */}
          <div className="flex items-center gap-2">
            <ArrowDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground font-medium">
                Arrival - {voyage.arrivalVoyage}
              </p>
              <p className="text-xs text-foreground">
                {formatDateTime(voyage.arrivalDate)}
              </p>
            </div>
          </div>

          {/* Departure */}
          {index < voyages.length - 1 && (
            <div className="flex items-center gap-2">
              <ArrowUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  Departure - {voyage.departureVoyage}
                </p>
                <p className="text-xs text-foreground">
                  {formatDateTime(voyage.departureDate)}
                </p>
              </div>
            </div>
          )}

          {/* Spacer between timeline items */}
          {index < voyages.length - 1 && <div className="h-4" />}
        </div>
      ))}
    </div>
  );
}
