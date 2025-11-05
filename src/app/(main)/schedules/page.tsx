import { Metadata } from "next";
import { SchedulesPage } from "./_components";

export const metadata: Metadata = {
  title: "Schedules - Shipping Routes",
  description: "Search shipping schedules and routes",
};

export default function Schedules() {
  return <SchedulesPage />;
}
