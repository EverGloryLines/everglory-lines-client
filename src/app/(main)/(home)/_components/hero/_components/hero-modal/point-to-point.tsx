"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui";
import { Label } from "@/components/ui";
import { Button } from "@/components/ui";
import { Calendar } from "@/components/ui"; // Assuming shadcn Calendar
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // Assumed utility function for conditional classes

export const PointToPointTab = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Disable past dates: any date where the day's start is before today's start
  const disablePastDates = (d: Date) =>
    d < new Date(new Date().setHours(0, 0, 0, 0));

  const nextOptions = ["2 Weeks", "4 Weeks", "6 Weeks", "8 Weeks"];

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="origin" className="text-sm font-normal text-gray-800">
          Origin
        </Label>
        <Input id="origin" placeholder="Input Origin" className="rounded-none transition-all duration-200 ease-in-out focus-visible:shadow-md focus-visible:scale-[1.01] focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-none" />
      </div>
      <div className="grid gap-2">
        <Label
          htmlFor="destination"
          className="text-sm font-normal text-gray-800"
        >
          Destination
        </Label>
        <Input id="destination" placeholder="Input Destination" className="rounded-none transition-all duration-200 ease-in-out focus-visible:shadow-md focus-visible:scale-[1.01] focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-none" />
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
                initialFocus
                disabled={disablePastDates} // Disable past dates
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-2 w-1/2">
          <Label className="text-sm font-normal text-gray-800">Next</Label>
          <Select defaultValue="2 Weeks">
            <SelectTrigger className="w-full rounded-none transition-all duration-200 ease-in-out focus-visible:shadow-md focus-visible:scale-[1.01] focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-none">
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
      <div className="flex justify-between items-center pt-2">
        <Button variant="link" className="text-red-600 p-0 h-auto">
          Advanced
        </Button>
        <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 rounded-none cursor-pointer">
          SEARCH
        </Button>
      </div>
    </div>
  );
};
