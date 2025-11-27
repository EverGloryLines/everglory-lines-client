"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui";
import { Label } from "@/components/ui";
import { Button } from "@/components/ui";
import { Calendar } from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Checkbox } from "@/components/ui";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // Assumed utility function

export const PortTab = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Disable past dates: any date where the day's start is before today's start
  const disablePastDates = (d: Date) =>
    d < new Date(new Date().setHours(0, 0, 0, 0));

  const nextOptions = ["2 Weeks", "4 Weeks", "6 Weeks", "8 Weeks"];

  // Mode state handling
  const [includeFeeder, setIncludeFeeder] = useState(true);
  const [oceanVesselOnly, setOceanVesselOnly] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="port-name" className="text-sm font-normal text-gray-800">Port Name</Label>
        <Input id="port-name" placeholder="Input Port Name" className="rounded-none transition-all duration-200 ease-in-out focus-visible:shadow-md focus-visible:scale-[1.01] focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-none"/>
      </div>
      <div className="flex gap-4">
        <div className="grid gap-2 w-1/2">
          <Label className="text-sm font-normal text-gray-800">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal rounded-none",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={disablePastDates} // Disable past dates
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-2 w-1/2">
          <Label className="text-sm font-normal text-gray-800">Next</Label>
          <Select defaultValue="2 Weeks">
            <SelectTrigger className="rounded-none w-full">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              {nextOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2 pt-2">
        <Label>Mode</Label>
        <div className="flex gap-6">
          <div className="flex items-center space-x-2">
            {/* Note: Using Checkbox for a visually distinct radio-like option, but using a single state logic for "one or two options" is complex, so I'll treat them as independent toggles as implied by the image/description. */}
            <Checkbox
              id="include-feeder"
              checked={includeFeeder}
              onCheckedChange={(checked) => setIncludeFeeder(!!checked)}
              className="rounded-full data-[state=checked]:bg-purple-700 data-[state=checked]:text-white"
            />
            <label
              htmlFor="include-feeder"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include Feeder
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ocean-vessel-only"
              checked={oceanVesselOnly}
              onCheckedChange={(checked) => setOceanVesselOnly(!!checked)}
              className="rounded-full data-[state=checked]:bg-purple-700 data-[state=checked]:text-white"
            />
            <label
              htmlFor="ocean-vessel-only"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ocean Vessel Only
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 rounded-none cursor-pointer">
          SEARCH
        </Button>
      </div>
    </div>
  );
};
