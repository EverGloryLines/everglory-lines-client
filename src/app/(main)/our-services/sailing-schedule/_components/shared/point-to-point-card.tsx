"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { Card } from "@/components/ui";
import { ChevronDown, ChevronUp, MapPin, Ship, Clock } from "lucide-react";
import type { PointToPointResult } from "@/data/mock-schedule-data";
import { formatDate } from "@/lib/date-formatters";
import { RouteDetailsMap } from "./route-details-map";

interface Props {
  result: PointToPointResult;
}

export function PointToPointCard({ result }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow rounded-none shadow-none">
      {/* Main Content */}
      <div className="p-6">
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {/* Departure (ETD) */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase">
                Departure (ETD)
              </span>
            </div>
            <p className="font-semibold text-foreground mb-1">
              {formatDate(result.etd)}
            </p>
            <p className="text-sm text-primary hover:underline cursor-pointer">
              {result.from.name}
            </p>
          </div>

          {/* Arrival (ETA) */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase">
                Arrival (ETA)
              </span>
            </div>
            <p className="font-semibold text-foreground mb-1">
              {formatDate(result.eta)}
            </p>
            <p className="text-sm text-primary hover:underline cursor-pointer">
              {result.to.name}
            </p>
          </div>

          {/* Vessel/Voyage */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Ship className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase">
                Vessel/Voyage
              </span>
            </div>
            <p className="font-semibold text-primary hover:underline cursor-pointer mb-1">
              {result.vessel.name}
            </p>
            <p className="text-xs text-muted-foreground mb-2">
              {result.vessel.voyageNumber}
            </p>
            <p className="text-xs text-muted-foreground">
              Transit Time:{" "}
              <span className="font-semibold text-foreground">
                {result.transitTime.days}d {result.transitTime.hours}h
              </span>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 justify-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Book now
            </Button>
            <Button variant="outline">Get a quote</Button>
          </div>
        </div>

        {/* Deadlines (No change) */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase">
              Deadlines
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            <div>
              <p className="text-muted-foreground font-medium mb-1">
                Empty container pickup
              </p>
              <p className="font-semibold text-foreground">
                {result.deadlines.emptyPickup || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-medium mb-1">
                Container gate-in
              </p>
              <p className="font-semibold text-foreground">
                {result.deadlines.gateIn || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-medium mb-1">
                Shipping Instructions
              </p>
              <p className="font-semibold text-foreground">
                {result.deadlines.shippingInstructions || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-medium mb-1">
                Verified Gross Mass
              </p>
              <p className="font-semibold text-foreground">
                {result.deadlines.vgm || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-medium mb-1">
                Dangerous Goods Declaration
              </p>
              <p className="font-semibold text-foreground">
                {result.deadlines.dangerousGoods || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Expand Toggle (No change) */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm text-primary hover:underline flex items-center gap-1 font-medium"
        >
          {expanded ? (
            <>
              Hide route details <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show route details <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Route Details (Updated props) */}
      {expanded && result.routeDetails && (
        <div className="bg-muted border-t p-6">
          <RouteDetailsMap
            stops={result.routeDetails.stops}
            vessel={result.vessel.details}
          />
        </div>
      )}
    </Card>
  );
}
