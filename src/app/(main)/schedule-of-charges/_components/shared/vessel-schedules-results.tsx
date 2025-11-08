"use client";

import { Card } from "@/components/ui";

import { Ship } from "lucide-react";
import { VesselInfoCard } from "./vessel-info-card";
import { VoyageTimeline } from "./voyage-timeline";
import type { VesselScheduleResult } from "@/data/mock-schedule-data";

interface Props {
  result: VesselScheduleResult | null;
  isLoading: boolean;
  searchParams: { vesselName: string } | null;
}

// This component was named VesselSchedulesResults in your tab component
// but the file was named vessel-schedules.tsx. Assuming this is the correct file.
export function VesselSchedulesResults({
  result,
  isLoading,
  searchParams,
}: Props) {
  if (!searchParams) {
    return (
      <Card className="p-12 text-center rounded-none shadow-none">
        <div className="flex flex-col items-center gap-3">
          <Ship className="w-12 h-12 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Enter vessel name</h3>
          <p className="text-sm text-muted-foreground">
            Enter a vessel name or IMO number and click Search to view schedule
          </p>
        </div>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="p-12 text-center rounded-none shadow-none">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-muted rounded-full animate-pulse" />
          <p className="text-sm text-muted-foreground">
            Loading vessel schedule...
          </p>
        </div>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="p-12 text-center rounded-none shadow-none">
        <div className="flex flex-col items-center gap-3">
          <Ship className="w-12 h-12 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Vessel not found</h3>
          <p className="text-sm text-muted-foreground">
            Try searching with a different vessel name or IMO
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Vessel Info (This will now work correctly) */}
      <VesselInfoCard vessel={result.vessel} />

      {/* Voyage Timeline (This will pass the new 'voyages' prop) */}
      <Card className="p-6 rounded-none shadow-none">
        <h3 className="font-semibold text-foreground mb-6">Voyage History</h3>
        <VoyageTimeline voyages={result.voyages} />
      </Card>
    </div>
  );
}
