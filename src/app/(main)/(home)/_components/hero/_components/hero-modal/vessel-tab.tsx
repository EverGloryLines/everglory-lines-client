"use client";

import { Input } from "@/components/ui";
import { Label } from "@/components/ui";
import { Button } from "@/components/ui";

export const VesselTab = () => {
  return (
    <div className="space-y-4 pt-2">
      <div className="grid gap-2">
        <Label htmlFor="vessel-name" className="text-sm font-normal text-gray-800">Vessel Name</Label>
        <Input id="vessel-name" placeholder="Input Vessel Name" className="rounded-none transition-all duration-200 ease-in-out focus-visible:shadow-md focus-visible:scale-[1.01] focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-none" />
      </div>
      <div className="flex justify-end pt-4">
        <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 rounded-none cursor-pointer">
          SEARCH
        </Button>
      </div>
    </div>
  );
};
