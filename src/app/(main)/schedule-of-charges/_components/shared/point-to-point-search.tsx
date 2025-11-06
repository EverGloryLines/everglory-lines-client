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
import { Checkbox } from "@/components/ui";

import { CalendarIcon } from "lucide-react";
import { PointToPointResult } from "@/data/mock-schedule-data";
import { searchPointToPoint } from "@/data/schedules";

const CITIES = [
  { name: "Chittagong, Bangladesh", code: "CGP" },
  { name: "Pangaon, Bangladesh", code: "PGN" },
  { name: "Mongla, Bangladesh", code: "MGL" },
  { name: "Kolkata, India", code: "CCU" },
  { name: "Paradip, India", code: "PRT" },
  { name: "Haldia, India", code: "HAL" },
];

const CONTAINER_TYPES = [
  "20' Dry Standard",
  "40' Dry Standard",
  "40' High Cube",
  "20' Reefer",
  "40' Reefer High Cube",
  "20' Open Top",
  "40' Open Top",
  "20' Flat Rack",
  "40' Flat Rack",
];

const VESSEL_FLAGS = [
  "Bangladesh"
];

interface SearchFilters {
  from: string;
  to: string;
  date: string;
  containerType: string;
  temperatureControl: boolean;
  vesselFlag: string;
}

interface Props {
  onSearch: (
    results: PointToPointResult[],
    params: { from: string; to: string }
  ) => void;
  onLoading: () => void;
}

export function PointToPointSearch({ onSearch, onLoading }: Props) {
  const [filters, setFilters] = useState<SearchFilters>({
    from: "",
    to: "",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    containerType: "40' Dry Standard",
    temperatureControl: false,
    vesselFlag: "",
  });

  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const handleSearch = useCallback(async () => {
    if (!filters.from || !filters.to) return;

    onLoading();
    const results = await searchPointToPoint(
      filters.from,
      filters.to,
      filters.date,
      filters.containerType
    );
    onSearch(results, { from: filters.from, to: filters.to });
  }, [filters, onSearch, onLoading]);

  const isFormValid = filters.from && filters.to;

  return (
    <Card className="p-6 h-fit md:sticky md:top-6 rounded-none shadow-none">
      <h3 className="font-semibold text-foreground mb-6">Search Filters</h3>

      <div className="space-y-4">
        {/* From Location */}
        <div>
          <Label
            htmlFor="from"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            From (City, Country/Region)
          </Label>
          <div className="relative">
            <Input
              id="from"
              placeholder="Search city or port..."
              value={filters.from}
              onChange={(e) => setFilters({ ...filters, from: e.target.value })}
              onFocus={() => setFromOpen(true)}
              className="pr-8"
            />
            {filters.from && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setFilters({ ...filters, from: "" })}
              >
                ✕
              </button>
            )}
            {fromOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {CITIES.filter(
                  (c) =>
                    c.name.toLowerCase().includes(filters.from.toLowerCase()) ||
                    c.code.toLowerCase().includes(filters.from.toLowerCase())
                ).map((city) => (
                  <button
                    key={city.code}
                    className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                    onClick={() => {
                      setFilters({ ...filters, from: city.name });
                      setFromOpen(false);
                    }}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* To Location */}
        <div>
          <Label
            htmlFor="to"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            To (City, Country/Region)
          </Label>
          <div className="relative">
            <Input
              id="to"
              placeholder="Search destination..."
              value={filters.to}
              onChange={(e) => setFilters({ ...filters, to: e.target.value })}
              onFocus={() => setToOpen(true)}
              className="pr-8"
            />
            {filters.to && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setFilters({ ...filters, to: "" })}
              >
                ✕
              </button>
            )}
            {toOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {CITIES.filter(
                  (c) =>
                    c.name.toLowerCase().includes(filters.to.toLowerCase()) ||
                    c.code.toLowerCase().includes(filters.to.toLowerCase())
                ).map((city) => (
                  <button
                    key={city.code}
                    className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                    onClick={() => {
                      setFilters({ ...filters, to: city.name });
                      setToOpen(false);
                    }}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Date */}
        <div>
          <Label
            htmlFor="date"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Departing
          </Label>
          <div className="relative">
            <Input
              id="date"
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              className="pr-8"
            />
            <CalendarIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Container Type */}
        <div>
          <Label
            htmlFor="container"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Container type
          </Label>
          <Select
            value={filters.containerType}
            onValueChange={(value) =>
              setFilters({ ...filters, containerType: value })
            }
          >
            <SelectTrigger id="container">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CONTAINER_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Temperature Control */}
        <div className="flex items-center gap-2">
          <Checkbox
            id="temperature"
            checked={filters.temperatureControl}
            onCheckedChange={(checked) =>
              setFilters({ ...filters, temperatureControl: checked as boolean })
            }
          />
          <Label
            htmlFor="temperature"
            className="text-sm text-muted-foreground cursor-pointer"
          >
            Cargo requires temperature control
          </Label>
        </div>

        {/* Vessel Flag */}
        <div>
          <Label
            htmlFor="flag"
            className="text-sm font-medium text-foreground mb-2 block"
          >
            Vessel flag (optional)
          </Label>
          <Select
            value={filters.vesselFlag}
            onValueChange={(value) =>
              setFilters({ ...filters, vesselFlag: value })
            }
          >
            <SelectTrigger id="flag">
              <SelectValue placeholder="Please select" />
            </SelectTrigger>
            <SelectContent>
              {VESSEL_FLAGS.map((flag) => (
                <SelectItem key={flag} value={flag}>
                  {flag}
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
