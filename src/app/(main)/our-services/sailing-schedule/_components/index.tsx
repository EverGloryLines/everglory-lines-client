"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { PointToPointTab } from "./schedule-tabs/point-to-point-tab";
import { PortCallsTab } from "./schedule-tabs/port-calls-tab";
import { VesselSchedulesTab } from "./schedule-tabs/vessel-schedules-tab";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SailingScheduleView } from "./table/schedule-view";

export function SchedulesPage() {
  const [activeTab, setActiveTab] = useState("point-to-point");

  return (
    <main className="min-h-screen bg-background px-4 py-4 md:py-16">
      {/* <Image
        src={"/organogram/others/sailing-schedule.png"}
        alt="schedule of charges banner"
        width={1440}
        height={1080}
        priority
      /> */}
      {/* REPLACED: The Image component is gone. Added the table view here. */}
      <div className="container mx-auto mb-8">
        <SailingScheduleView />
      </div>
      <div className="container mx-auto">
        {/* Header */}
        {/* <div className="my-6 md:my-8">
          <SectionTitle className="text-left">Schedules</SectionTitle>
          <p className="text-base lg:text-lg text-[#000000]/70 leading-relaxed tracking-tight">
            Search our extensive routes to find the schedule which fits your
            supply chain.
          </p>
        </div> */}

        {/* Tabs */}
        {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex items-center justify-start mb-6 bg-white border-b-4 border-gray-200 rounded-none">
            <div className="max-w-md space-x-6">
              <TabsTrigger
                value="point-to-point"
                className="font-plus-jakarta-sans font-semibold text-xs md:text-sm data-[state=active]:border-b-2 rounded-none data-[state=active]:border-gray-400"
              >
                Point-to-Point
              </TabsTrigger>
              <TabsTrigger
                value="port-calls"
                className="font-plus-jakarta-sans font-semibold text-xs md:text-sm data-[state=active]:border-b-2 rounded-none data-[state=active]:border-gray-400"
              >
                Port Calls
              </TabsTrigger>
              <TabsTrigger
                value="vessel-schedules"
                className="font-plus-jakarta-sans font-semibold text-xs md:text-sm data-[state=active]:border-b-2 rounded-none data-[state=active]:border-gray-400"
              >
                Vessel Schedules
              </TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="point-to-point" className="mt-6">
            <PointToPointTab />
          </TabsContent>

          <TabsContent value="port-calls" className="mt-6">
            <PortCallsTab />
          </TabsContent>

          <TabsContent value="vessel-schedules" className="mt-6">
            <VesselSchedulesTab />
          </TabsContent>
        </Tabs> */}
      </div> 

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none;
          }
          .md\\:col-span-2 {
            grid-column: span 2;
          }
          .md\\:w-1\\/3 {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
