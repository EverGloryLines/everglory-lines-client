"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { PointToPointTab } from "./point-to-point";
import { VesselTab } from "./vessel-tab";
import { PortTab } from "./port-tab";
import { LongRangeTab } from "./long-range-tab";

export const ScheduleTab = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="point-to-point">
        <TabsList className="grid w-full grid-cols-4 h-auto p-0 rounded-none bg-transparent gap-2 mb-4">
          <TabsTrigger
            value="point-to-point"
            className="text-xs font-semibold uppercase text-gray-700 py-2 border-r border-gray-300 data-[state=active]:text-red-600 data-[state=active]:border-red-600 rounded-none"
          >
            Point to Point
          </TabsTrigger>
          <TabsTrigger
            value="vessel"
            className="text-xs font-semibold uppercase text-gray-700 py-2 border-r border-gray-300 data-[state=active]:text-red-600 data-[state=active]:border-red-600 rounded-none"
          >
            Vessel
          </TabsTrigger>
          <TabsTrigger
            value="port"
            className="text-xs font-semibold uppercase text-gray-700 py-2 border-r border-gray-300 data-[state=active]:text-red-600 data-[state=active]:border-red-600 rounded-none"
          >
            Port
          </TabsTrigger> 
          <TabsTrigger
            value="long-range"
            className="text-xs font-semibold uppercase text-gray-700 py-2 border-r border-gray-300 data-[state=active]:text-red-600 data-[state=active]:border-red-600 rounded-none"
          >
            Long Range
          </TabsTrigger>
        </TabsList>

        <TabsContent value="point-to-point">
          <PointToPointTab />
        </TabsContent>
        <TabsContent value="vessel">
          <VesselTab />
        </TabsContent>
        <TabsContent value="port">
          <PortTab />
        </TabsContent>
        <TabsContent value="long-range">
          <LongRangeTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
