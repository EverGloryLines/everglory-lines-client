"use client";

import { useState } from "react";
import { PointToPointSearch } from "../shared/point-to-point-search";
import type { PointToPointResult } from "@/data/mock-schedule-data";
import { PointToPointResults } from "../shared/point-to-point-results";

export function PointToPointTab() {
  const [results, setResults] = useState<PointToPointResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState<{
    from: string;
    to: string;
  } | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <PointToPointSearch
        onSearch={(results, params) => {
          setResults(results);
          setSearchParams(params);
          setIsLoading(false);
        }}
        onLoading={() => setIsLoading(true)}
      />
      <div className="md:col-span-2">
        <PointToPointResults
          results={results}
          isLoading={isLoading}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}
