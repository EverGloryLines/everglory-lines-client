"use client";

import type { VesselScheduleResult } from "@/data/mock-schedule-data";
import { useState } from "react";
import { VesselSchedulesSearch } from "../shared/vessel-schedules-search";
import { VesselSchedulesResults } from "../shared/vessel-schedules-results";

export function VesselSchedulesTab() {
  const [result, setResult] = useState<VesselScheduleResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState<{
    vesselName: string;
  } | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <VesselSchedulesSearch
        onSearch={(result, params) => {
          setResult(result);
          setSearchParams(params);
          setIsLoading(false);
        }}
        onLoading={() => setIsLoading(true)}
      />
      <div className="md:col-span-2">
        <VesselSchedulesResults
          result={result}
          isLoading={isLoading}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}
