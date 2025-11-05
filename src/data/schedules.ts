/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  pointToPointMockData,
  PortCallResult,
  portCallsMockData,
  vesselScheduleMockData,
  VesselScheduleResult,
  type PointToPointResult,
} from "./mock-schedule-data";

export async function searchPointToPoint(
  from: string,
  to: string,
  date: string,
  containerType: string
): Promise<PointToPointResult[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return pointToPointMockData;
}

export async function searchPortCalls(
  port: string,
  country: string,
  dateFrom: string,
  days: number
): Promise<PortCallResult[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return portCallsMockData;
}

export async function searchVesselSchedules(
  vesselName: string,
  dateFrom: string
): Promise<VesselScheduleResult> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return vesselScheduleMockData;
}
