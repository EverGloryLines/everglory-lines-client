"use client";

import { Button } from "@/components/ui";
import { Card } from "@/components/ui";

import { Printer, Download, Ship } from "lucide-react";
import { PortCallCard } from "./port-call-card";
import type { PortCallResult } from "@/data/mock-schedule-data";
import { downloadCSV, exportPortCallsToCSV } from "@/lib/export-to-excel";

interface Props {
  results: PortCallResult[];
  isLoading: boolean;
  searchParams: { port: string; country: string } | null;
}

export function PortCallsResults({ results, isLoading, searchParams }: Props) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (!searchParams) return;
    const csv = exportPortCallsToCSV(results, searchParams);
    const date = new Date().toISOString().split("T")[0];
    downloadCSV(csv, `schedules-port-calls-${date}.csv`);
  };

  if (!searchParams) {
    return (
      <Card className="p-12 text-center">
        <div className="flex flex-col items-center gap-3">
          <Ship className="w-12 h-12 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">
            Enter search criteria
          </h3>
          <p className="text-sm text-muted-foreground">
            Select a port and click Search to find vessel calls
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">
            Search results for{" "}
            <span className="font-semibold text-foreground">
              {searchParams.port}
            </span>
            , {searchParams.country}
          </p>
          <button className="text-sm text-primary hover:underline flex items-center gap-1">
            ↑ Earlier sailings
          </button>
        </div>
        <div className="flex gap-2 print:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrint}
            className="text-muted-foreground hover:text-foreground"
            title="Print results"
          >
            <Printer className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDownload}
            className="text-muted-foreground hover:text-foreground"
            title="Download as CSV"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <Card key={i} className="h-24 bg-muted animate-pulse" />
          ))}
        </div>
      ) : results.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <Ship className="w-12 h-12 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">
              No port calls found
            </h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search criteria
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {results.map((result) => (
            <PortCallCard key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}
