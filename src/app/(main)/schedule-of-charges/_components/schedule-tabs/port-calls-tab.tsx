"use client";

import type { PortCallResult } from "@/data/mock-schedule-data";
import { useState } from "react";
import { PortCallsSearch } from "../shared/port-calls-search";
import { PortCallsResults } from "../shared/port-calls-results";

export function PortCallsTab() {
  const [results, setResults] = useState<PortCallResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState<{
    port: string;
    country: string;
  } | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <PortCallsSearch
        onSearch={(results, params) => {
          setResults(results);
          setSearchParams(params);
          setIsLoading(false);
        }}
        onLoading={() => setIsLoading(true)}
      />
      <div className="md:col-span-2">
        <PortCallsResults
          results={results}
          isLoading={isLoading}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}
