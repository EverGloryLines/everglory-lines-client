"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { TrackingTab } from "./tracking-tab";
import { ScheduleTab } from "./schedule-tab";
import { PriceTab } from "./price-tab";

export const HeroModal = () => {
  return (
    <div
      className="relative w-full max-lg:min-w-full mx-auto p-4 bg-white shadow-lg lg:shadow-2xl rounded-none z-20 
        md:max-w-md lg:absolute lg:right-[0%] lg:top-1/2 lg:-translate-y-1/2 lg:w-full lg:max-w-md lg:mt-0 xl:max-w-lg" 
    >
      <Tabs defaultValue="tracking" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-0 rounded-none bg-transparent border-b border-gray-200">
          <TabsTrigger
            value="tracking"
            className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-600 data-[state=active]:text-red-600 font-plus-jakarta-sans font-semibold uppercase text-gray-700 py-3 rounded-none"
          >
            Tracking
          </TabsTrigger>
          <TabsTrigger
            value="schedule"
            className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-600 data-[state=active]:text-red-600 font-plus-jakarta-sans font-semibold uppercase text-gray-700 py-3 rounded-none"
          >
            Schedule
          </TabsTrigger>
          <TabsTrigger
            value="price"
            className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-600 data-[state=active]:text-red-600 font-plus-jakarta-sans font-semibold uppercase text-gray-700 py-3 rounded-none"
          >
            Price
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tracking" className="mt-4">
          <TrackingTab />
        </TabsContent>
        <TabsContent value="schedule" className="mt-4">
          <ScheduleTab />
        </TabsContent>
        <TabsContent value="price" className="mt-4">
          <PriceTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
