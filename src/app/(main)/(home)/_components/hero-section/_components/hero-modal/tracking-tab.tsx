"use client";

import { Input } from "@/components/ui";
import { Button } from "@/components/ui";
import { Label } from "@/components/ui";

export const TrackingTab = () => {
  // Simple state or form handling can be added here
  const handleTracking = () => {
    console.log("Tracking shipment...");
  };

  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="tracking-number"
          className="text-sm font-normal text-gray-600"
        >
          Container, Bill of lading or Booking Number
        </Label>
        <Input
          type="text"
          id="tracking-number"
          placeholder="ex.ABCD1234567"
          className="rounded-none transition-all duration-200 ease-in-out focus-visible:shadow-md focus-visible:scale-[1.01] focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-none"
        />
        <p className="text-xs font-light text-muted-foreground mt-1">
          To track up to three containers, please enter references separated by
          a comma.
        </p>
      </div>
      <Button
        onClick={handleTracking}
        className="w-full rounded-none bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-base cursor-pointer"
      >
        Shipment Tracking
      </Button>
    </div>
  );
};
