export interface Leg {
  id: number;
  label: string;
  mapImage: string;
}

export type LegId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const LEGS: Leg[] = [
  { id: 1, label: "LEG-1", mapImage: "/homepage/leg/leg-1.jpg" },
  { id: 2, label: "LEG-2", mapImage: "/homepage/leg/leg-2.jpg" },
  { id: 3, label: "LEG-3", mapImage: "/homepage/leg/leg-3.jpg" },
  { id: 4, label: "LEG-4", mapImage: "/homepage/leg/leg-4.jpg" },
  { id: 5, label: "LEG-5", mapImage: "/homepage/leg/leg-5.jpg" },
  { id: 6, label: "LEG-6", mapImage: "/homepage/leg/leg-6.jpg" },
  { id: 7, label: "LEG-7", mapImage: "/homepage/leg/leg-7.jpg" },
  { id: 8, label: "LEG-8", mapImage: "/homepage/leg/leg-8.jpg" },
  { id: 9, label: "LEG-9", mapImage: "/homepage/leg/leg-9.jpg" },
  { id: 10, label: "LEG-10", mapImage: "/homepage/leg/leg-10.jpg" },
  { id: 11, label: "LEG-11", mapImage: "/homepage/leg/leg-11.jpg" },
  { id: 12, label: "LEG-12", mapImage: "/homepage/leg/leg-12.jpg" },
];
