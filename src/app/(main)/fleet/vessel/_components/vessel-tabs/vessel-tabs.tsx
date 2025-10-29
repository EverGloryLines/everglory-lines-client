"use client";

import { Vessel } from "@/types";
import { VesselCard } from "./vessel-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

interface VesselTabsProps {
  vessels: Vessel[];
}

export function VesselTabs({ vessels }: VesselTabsProps) {
  const getShortName = (name: string) => {
    return name.replace(" EXPRESS", "");
  };

  return (
    <Tabs defaultValue={vessels[0].id} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100">
        {vessels.map((vessel) => (
          <TabsTrigger
            key={vessel.id}
            value={vessel.id}
            className="text-xs sm:text-sm rounded-none font-plus-jakarta-sans font-semibold data-[state=active]:bg-[#485FA3] data-[state=active]:text-white"
          >
            <span className="sm:hidden">{getShortName(vessel.name)}</span>
            <span className="hidden sm:inline">{vessel.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {vessels.map((vessel) => (
        <TabsContent key={vessel.id} value={vessel.id} className="mt-0">
          <VesselCard vessel={vessel} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
