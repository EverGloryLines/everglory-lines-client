/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  allPointToPointData,
  allPortCallsData,
  allVesselSchedules,
  PortCallResult,
  VesselScheduleResult,
  type PointToPointResult,
} from "./mock-schedule-data";
import { parseISO, isAfter, isBefore, addDays } from "date-fns";

export async function searchPointToPoint(
  from: string,
  to: string,
  date: string,
  containerType: string // This param is unused but in the signature
): Promise<PointToPointResult[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const searchDate = parseISO(date);

  // Normalize search terms (e.g., "Chittagong, Bangladesh" -> "Chittagong")
  const fromCity = from.split(",")[0].trim();
  const toCity = to.split(",")[0].trim();

  const results = allPointToPointData.filter((route) => {
    const routeDepartureDate = parseISO(route.departure.date);

    const isFrom =
      route.departure.location.name.toLowerCase() === fromCity.toLowerCase();
    const isTo =
      route.arrival.location.name.toLowerCase() === toCity.toLowerCase();
    const isAfterDate =
      isAfter(routeDepartureDate, searchDate) ||
      routeDepartureDate.toDateString() === searchDate.toDateString();

    return isFrom && isTo && isAfterDate;
  });

  // Sort results by departure date, ascending
  results.sort(
    (a, b) =>
      new Date(a.departure.date).getTime() -
      new Date(b.departure.date).getTime()
  );

  return results;
}

export async function searchPortCalls(
  port: string,
  country: string,
  dateFrom: string,
  days: number
): Promise<PortCallResult[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const searchDateStart = parseISO(dateFrom);
  const searchDateEnd = addDays(searchDateStart, days);

  // Normalize search terms
  const portName = port.split(",")[0].trim();
  const countryName = country.split(",")[0].trim();

  const results = allPortCallsData.filter((call) => {
    const callArrivalDate = parseISO(call.arrival);

    const isPort = call.port.name.toLowerCase() === portName.toLowerCase();
    const isCountry =
      call.port.country.toLowerCase() === countryName.toLowerCase();

    // Check if arrival date is within the [dateFrom, dateFrom + days] range
    const isAfterStart =
      isAfter(callArrivalDate, searchDateStart) ||
      callArrivalDate.toDateString() === searchDateStart.toDateString();
    const isBeforeEnd = isBefore(callArrivalDate, searchDateEnd);

    return isPort && isCountry && isAfterStart && isBeforeEnd;
  });

  // Sort results by arrival date, ascending
  results.sort(
    (a, b) => new Date(a.arrival).getTime() - new Date(b.arrival).getTime()
  );

  return results;
}

export async function searchVesselSchedules(
  vesselName: string,
  dateFrom: string // This param is unused but in the signature
): Promise<VesselScheduleResult | null> {
  // Return null if not found
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const result = allVesselSchedules.find(
    (schedule) =>
      schedule.vessel.name.toLowerCase() === vesselName.toLowerCase()
  );

  return result || null; // Return the found schedule or null
}
