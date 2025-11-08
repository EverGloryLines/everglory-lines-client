"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui";
import { Card } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Input } from "@/components/ui";
import { Label } from "@/components/ui";
import { searchPortCalls } from "@/data/schedules";
import { PortCallResult } from "@/data/mock-schedule-data";

const COUNTRIES = [
  { name: "Bangladesh", code: "BD" },
  { name: "India", code: "IN" },
];

const PORTS_BY_COUNTRY: Record<string, { name: string; code: string }[]> = {
  Bangladesh: [
    { name: "Chittagong", code: "CGP" },
    { name: "Pangaon", code: "PGN" },
    { name: "Mongla", code: "MGL" },
  ],
  India: [
    { name: "Kolkata", code: "CCU" },
    { name: "Paradip", code: "PRT" },
    { name: "Haldia", code: "HAL" },
  ],
};

const DAYS_OPTIONS = [1, 2, 3, 7, 14, 21, 30, 60, 90];

interface SearchFilters {
  country: string;
  port: string;
  dateFrom: string;
  days: number;
}

interface Props {
  onSearch: (
    results: PortCallResult[],
    params: { port: string; country: string }
  ) => void;
  onLoading: () => void;
}

export function PortCallsSearch({ onSearch, onLoading }: Props) {
  const [filters, setFilters] = useState<SearchFilters>({
    country: "",
    port: "",
    dateFrom: new Date().toISOString().split("T")[0],
    days: 3,
  });

  const [countryOpen, setCountryOpen] = useState(false);
  const [portOpen, setPortOpen] = useState(false);

  const handleSearch = useCallback(async () => {
    if (!filters.country || !filters.port) return;

    onLoading();
    const results = await searchPortCalls(
      filters.port,
      filters.country,
      filters.dateFrom,
      filters.days
    );
    onSearch(results, { port: filters.port, country: filters.country });
  }, [filters, onSearch, onLoading]);

  const isFormValid = filters.country && filters.port;

  const availablePorts = filters.country
    ? PORTS_BY_COUNTRY[filters.country] || []
    : [];

  return (
    <Card className="p-6 h-fit md:sticky md:top-6 rounded-none shadow-none">
      <h3 className="font-semibold text-foreground mb-6">Search Filters</h3>

      <div className="space-y-4">
        {/* Country/Region */}
        <div>
          <Label
            htmlFor="country"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Country/Region
          </Label>
          <div className="relative">
            <Input
              id="country"
              placeholder="Search country..."
              value={filters.country}
              onChange={(e) => {
                setFilters({ ...filters, country: e.target.value, port: "" });
                setCountryOpen(true);
              }}
              onFocus={() => setCountryOpen(true)}
              className="pr-8"
            />
            {filters.country && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() =>
                  setFilters({ ...filters, country: "", port: "" })
                }
              >
                ✕
              </button>
            )}
            {countryOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {COUNTRIES.filter(
                  (c) =>
                    c.name
                      .toLowerCase()
                      .includes(filters.country.toLowerCase()) ||
                    c.code.toLowerCase().includes(filters.country.toLowerCase())
                ).map((country) => (
                  <button
                    key={country.code}
                    className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                    onClick={() => {
                      setFilters({
                        ...filters,
                        country: country.name,
                        port: "",
                      });
                      setCountryOpen(false);
                    }}
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Port */}
        <div>
          <Label
            htmlFor="port"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Port
          </Label>
          <div className="relative">
            <Input
              id="port"
              placeholder="Search port..."
              value={filters.port}
              onChange={(e) => setFilters({ ...filters, port: e.target.value })}
              onFocus={() => setPortOpen(true)}
              disabled={!filters.country}
              className="pr-8"
            />
            {filters.port && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setFilters({ ...filters, port: "" })}
              >
                ✕
              </button>
            )}
            {portOpen && filters.country && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {availablePorts
                  .filter(
                    (p) =>
                      p.name
                        .toLowerCase()
                        .includes(filters.port.toLowerCase()) ||
                      p.code.toLowerCase().includes(filters.port.toLowerCase())
                  )
                  .map((port) => (
                    <button
                      key={port.code}
                      className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                      onClick={() => {
                        setFilters({ ...filters, port: port.name });
                        setPortOpen(false);
                      }}
                    >
                      {port.name}
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
          </div>
        </div>

        {/* Days */}
        <div>
          <Label
            htmlFor="days"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Days
          </Label>
          <Select
            value={filters.days.toString()}
            onValueChange={(value) =>
              setFilters({ ...filters, days: Number.parseInt(value) })
            }
          >
            <SelectTrigger id="days">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DAYS_OPTIONS.map((day) => (
                <SelectItem key={day} value={day.toString()}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
