"use client";

import { Ship } from "lucide-react";

import { formatDateTime } from "@/lib/date-formatters";
import type { Location, VesselDetails } from "@/data/mock-schedule-data";

// Updated Stop interface
interface Stop {
  port: Location;
  etd: string;
  eta: string;
}

interface Props {
  stops: Stop[];
  vessel: VesselDetails; // Now expects the detailed vessel info
}

export function RouteDetailsMap({ stops, vessel }: Props) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground mb-4">Route Details</h4>

      {/* Timeline */}
      <div className="relative pl-8 space-y-4">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />

        {stops.map((stop, index) => (
          <div key={index} className="space-y-3">
            {/* Port marker */}
            <div className="relative -left-6">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background" />
            </div>

            {/* Port info */}
            <div>
              <p className="font-semibold text-foreground text-sm hover:underline cursor-pointer">
                {stop.port.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {stop.port.terminal || ""}
              </p>
            </div>

            {/* Arrival (ETA) - Only show for stops after the first */}
            {index > 0 && (
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-0.5">
                  Arrival (ETA)
                </p>
                <p className="text-xs text-foreground">
                  {formatDateTime(stop.eta)}
                </p>
              </div>
            )}

            {/* Departure (ETD) - Only show for stops before the last */}
            {index < stops.length - 1 && (
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-0.5">
                  Departure (ETD)
                </p>
                <p className="text-xs text-foreground">
                  {formatDateTime(stop.etd)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Vessel Info Card (This will now work as intended) */}
      <div className="mt-6 p-4 bg-card border border-border rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <Ship className="w-4 h-4 text-muted-foreground" />
          <h5 className="font-semibold text-foreground text-sm">
            Vessel Details
          </h5>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div>
            <p className="text-muted-foreground font-medium mb-0.5">
              IMO Number
            </p>
            <p className="font-semibold text-foreground">{vessel.imo}</p>
          </div>
          <div>
            <p className="text-muted-foreground font-medium mb-0.5">Flag</p>
            <p className="font-semibold text-foreground">{vessel.flag}</p>
          </div>
          <div>
            <p className="text-muted-foreground font-medium mb-0.5">Built</p>
            <p className="font-semibold text-foreground">{vessel.built}</p>
          </div>
          <div>
            <p className="text-muted-foreground font-medium mb-0.5">
              Call Sign
            </p>
            <p className="font-semibold text-foreground">{vessel.callSign}</p>
          </div>
          <div>
            <p className="text-muted-foreground font-medium mb-0.5">Service</p>
            <p className="font-semibold text-foreground">
              {vessel.class || "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
