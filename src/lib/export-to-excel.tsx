import type {
  PointToPointResult,
  PortCallResult,
} from "@/data/mock-schedule-data";
import { formatDateTime } from "./date-formatters";

export function exportPointToPointToCSV(
  results: PointToPointResult[],
  searchParams: { from: string; to: string }
) {
  const headers = [
    "Departure Date",
    "Departure Location",
    "Arrival Date",
    "Arrival Location",
    "Vessel Name",
    "Voyage Number",
    "Transit Time (Days)",
    "Transit Time (Hours)",
    "IMO Number",
    "Flag",
    "Empty Pickup",
    "Gate-in",
    "Shipping Instructions",
    "VGM",
    "Dangerous Goods",
  ];

  const rows = results.map((r) => [
    formatDateTime(r.departure.date),
    r.departure.location.name,
    formatDateTime(r.arrival.date),
    r.arrival.location.name,
    r.vessel.name,
    r.vessel.voyageNumber,
    r.transitTime.days,
    r.transitTime.hours,
    r.vessel.imo,
    r.vessel.flag,
    r.deadlines.emptyPickup || "N/A",
    r.deadlines.gateIn || "N/A",
    r.deadlines.shippingInstructions || "N/A",
    r.deadlines.vgm || "N/A",
    r.deadlines.dangerousGoods || "N/A",
  ]);

  return [
    `Search: ${searchParams.from} to ${searchParams.to}`,
    "",
    headers.join(","),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
  ].join("\n");
}

export function exportPortCallsToCSV(
  results: PortCallResult[],
  searchParams: { port: string; country: string }
) {
  const headers = [
    "Vessel Name",
    "Voyage Numbers",
    "Terminal",
    "Arrival Date",
    "Departure Date",
    "Empty Pickup",
    "Gate-in",
    "Shipping Instructions",
    "VGM",
    "Dangerous Goods",
  ];

  const rows = results.map((r) => [
    r.vessel.name,
    r.vessel.voyageNumbers.join("|"),
    r.terminal,
    formatDateTime(r.arrival),
    formatDateTime(r.departure),
    r.deadlines.emptyPickup || "N/A",
    r.deadlines.gateIn || "N/A",
    r.deadlines.shippingInstructions || "N/A",
    r.deadlines.vgm || "N/A",
    r.deadlines.dangerousGoods || "N/A",
  ]);

  return [
    `Search: ${searchParams.port}, ${searchParams.country}`,
    "",
    headers.join(","),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
  ].join("\n");
}

export function downloadCSV(csvContent: string, filename: string) {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function triggerPrint(contentId: string) {
  const content = document.getElementById(contentId);
  if (!content) return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print Results</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { font-size: 24px; margin-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f5f5f5; font-weight: bold; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        ${content.innerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}
