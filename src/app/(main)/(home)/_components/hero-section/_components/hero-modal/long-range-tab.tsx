"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Label } from "@/components/ui";
import { Button } from "@/components/ui";

export const LongRangeTab = () => {
  const continents = [
    "Asia",
    "North America",
    "Latin America",
    "Europe",
    "Africa",
  ];

  return (
    <div className="space-y-4 pt-2">
      <div className="grid gap-2">
        <Label htmlFor="from-continent" className="text-sm font-normal text-gray-800">From Continent</Label>
        <Select>
          <SelectTrigger className="w-full rounded-none">
            <SelectValue placeholder="Select Continent" />
          </SelectTrigger>
          <SelectContent>
            {continents.map((continent) => (
              <SelectItem key={continent} value={continent}>
                {continent}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="to-continent" className="text-sm font-normal text-gray-800">To Continent</Label>
        <Select>
          <SelectTrigger className="w-full rounded-none">
            <SelectValue placeholder="Select Continent" />
          </SelectTrigger>
          <SelectContent>
            {continents.map((continent) => (
              <SelectItem key={continent} value={continent}>
                {continent}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end pt-4">
        <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 rounded-none cursor-pointer">
          SEARCH
        </Button>
      </div>
    </div>
  );
};
