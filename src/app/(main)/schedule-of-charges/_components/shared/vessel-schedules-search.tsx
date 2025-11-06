"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui";
import { Card } from "@/components/ui";
import { Input } from "@/components/ui";
import { Label } from "@/components/ui";
import { CalendarIcon } from "lucide-react";
import type { VesselScheduleResult } from "@/data/mock-schedule-data";
import { searchVesselSchedules } from "@/data/schedules";

const VESSEL_NAMES = [
  "UDDIPON EXPRESS",
  "UTTARAN EXPRESS",
  "UNNAYAN EXPRESS",
  "UDAYUN EXPRESS",
];

interface SearchFilters {
  vesselName: string;
  dateFrom: string;
}

interface Props {
  onSearch: (
    result: VesselScheduleResult,
    params: { vesselName: string }
  ) => void;
  onLoading: () => void;
}

export function VesselSchedulesSearch({ onSearch, onLoading }: Props) {
  const [filters, setFilters] = useState<SearchFilters>({
    vesselName: "",
    dateFrom: new Date().toISOString().split("T")[0],
  });

  const [vesselOpen, setVesselOpen] = useState(false);

  const handleSearch = useCallback(async () => {
    if (!filters.vesselName) return;

    onLoading();
    const result = await searchVesselSchedules(
      filters.vesselName,
      filters.dateFrom
    );
    onSearch(result, { vesselName: filters.vesselName });
  }, [filters, onSearch, onLoading]);

  const isFormValid = filters.vesselName;

  return (
    <Card className="p-6 h-fit md:sticky md:top-6">
      <h3 className="font-semibold text-foreground mb-6">Search Filters</h3>

      <div className="space-y-4">
        {/* Vessel Name */}
        <div>
          <Label
            htmlFor="vessel"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Vessel name
          </Label>
          <div className="relative">
            <Input
              id="vessel"
              placeholder="Enter vessel name or IMO..."
              value={filters.vesselName}
              onChange={(e) => {
                setFilters({ ...filters, vesselName: e.target.value });
                setVesselOpen(true);
              }}
              onFocus={() => setVesselOpen(true)}
              className="pr-8"
            />
            {filters.vesselName && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setFilters({ ...filters, vesselName: "" })}
              >
                ✕
              </button>
            )}
            {vesselOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {VESSEL_NAMES.filter((v) =>
                  v.toLowerCase().includes(filters.vesselName.toLowerCase())
                ).map((vessel) => (
                  <button
                    key={vessel}
                    className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                    onClick={() => {
                      setFilters({ ...filters, vesselName: vessel });
                      setVesselOpen(false);
                    }}
                  >
                    {vessel}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Date From */}
        <div>
          <Label
            htmlFor="dateFrom"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Date from
          </Label>
          <div className="relative">
            <Input
              id="dateFrom"
              type="date"
              value={filters.dateFrom}
              onChange={(e) =>
                setFilters({ ...filters, dateFrom: e.target.value })
              }
              className="pr-8"
            />
            <CalendarIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          disabled={!isFormValid}
          className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Search
        </Button>
      </div>
    </Card>
  );
}
