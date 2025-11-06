"use client";

import { Card } from "@/components/ui";
import type { PortCallResult } from "@/data/mock-schedule-data";
import { formatDateTime } from "@/lib/date-formatters";
import { Ship, Building2, ArrowDown, ArrowUp, Clock } from "lucide-react";

interface Props {
  result: PortCallResult;
}

export function PortCallCard({ result }: Props) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-4 gap-4 mb-6">
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
          <p className="text-xs text-muted-foreground">
            {result.vessel.voyageNumbers.join(" | ")}
          </p>
        </div>

        {/* Terminal */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase">
              Terminal
            </span>
          </div>
          <p className="font-semibold text-foreground">{result.terminal}</p>
        </div>

        {/* Arrival */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase">
              Arrival
            </span>
          </div>
          <p className="font-semibold text-foreground text-sm">
            {formatDateTime(result.arrival)}
          </p>
        </div>

        {/* Departure */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase">
              Departure
            </span>
          </div>
          <p className="font-semibold text-foreground text-sm">
            {formatDateTime(result.departure)}
          </p>
        </div>
      </div>

      {/* Deadlines */}
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
    </Card>
  );
}
