/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// Add types to ColumnDef to support our custom styling
declare module "@tanstack/react-table" {
  interface ColumnDefBase<TData, TValue> {
    meta?: {
      headerClassName?: string;
    };
  }
}

// -- Types --
export type PortSchedule = {
  vessel: string;
  voyage: string;
  // We use flexible keys because the ports change order
  port1?: { eta: string; etd: string };
  port2?: { eta: string; etd: string };
  port3?: { eta: string; etd: string };
  port4?: { eta: string; etd: string };
  port5?: { eta: string; etd: string };
};

const columnHelper = createColumnHelper<PortSchedule>();

// -- Helper for colored headers --
const portHeader = (label: string, colorClass: string) => ({
  header: label,
  meta: { headerClassName: colorClass },
});

// -- Configuration 1: Chittagong -> Pangaon -> Kolkata -> Haldia --
export const columnsRouteA: ColumnDef<PortSchedule, any>[] = [
  columnHelper.accessor("vessel", {
    header: "Vessel",
    cell: (info) => <span className="font-semibold">{info.getValue()}</span>,
    meta: { headerClassName: "bg-gray-100 text-center pl-4" },
  }),
  columnHelper.accessor("voyage", {
    header: "Voyage",
    meta: { headerClassName: "bg-gray-100" },
  }),
  columnHelper.group({
    ...portHeader("Chittagong", "bg-blue-100"),
    columns: [
      columnHelper.accessor("port1.eta", { header: "ETA" }),
      columnHelper.accessor("port1.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Pangaon", "bg-green-100"),
    columns: [
      columnHelper.accessor("port2.eta", { header: "ETA" }),
      columnHelper.accessor("port2.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Kolkata", "bg-yellow-100"),
    columns: [
      columnHelper.accessor("port3.eta", { header: "ETA" }),
      columnHelper.accessor("port3.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Haldia", "bg-orange-100"),
    columns: [
      columnHelper.accessor("port4.eta", { header: "ETA" }),
      columnHelper.accessor("port4.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Chittagong", "bg-blue-100"),
    columns: [
      columnHelper.accessor("port5.eta", { header: "ETA" }),
      columnHelper.accessor("port5.etd", { header: "ETD" }),
    ],
  }),
];

// -- Configuration 2: Chittagong -> Haldia -> Pangaon -> Haldia --
export const columnsRouteB: ColumnDef<PortSchedule, any>[] = [
  columnHelper.accessor("vessel", {
    header: "Vessel",
    cell: (info) => <span className="font-semibold">{info.getValue()}</span>,
    meta: { headerClassName: "bg-gray-100 text-center pl-4" },
  }),
  columnHelper.accessor("voyage", {
    header: "Voyage",
    meta: { headerClassName: "bg-gray-100" },
  }),
  columnHelper.group({
    ...portHeader("Chittagong", "bg-blue-100"),
    columns: [
      columnHelper.accessor("port1.eta", { header: "ETA" }),
      columnHelper.accessor("port1.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Haldia", "bg-orange-100"),
    columns: [
      columnHelper.accessor("port2.eta", { header: "ETA" }),
      columnHelper.accessor("port2.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Pangaon", "bg-green-100"),
    columns: [
      columnHelper.accessor("port3.eta", { header: "ETA" }),
      columnHelper.accessor("port3.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Haldia", "bg-orange-100"),
    columns: [
      columnHelper.accessor("port4.eta", { header: "ETA" }),
      columnHelper.accessor("port4.etd", { header: "ETD" }),
    ],
  }),
  columnHelper.group({
    ...portHeader("Chittagong", "bg-blue-100"),
    columns: [
      columnHelper.accessor("port5.eta", { header: "ETA" }),
      columnHelper.accessor("port5.etd", { header: "ETD" }),
    ],
  }),
];
