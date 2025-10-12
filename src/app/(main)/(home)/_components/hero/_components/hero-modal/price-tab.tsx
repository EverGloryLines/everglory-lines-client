"use client";

import { Button } from "@/components/ui";

export const PriceTab = () => {
  const handleGetPrice = () => {
    console.log("Redirecting to quotation module...");
  };

  return (
    <div className="space-y-6 pt-2">
      <p className="text-base font-normal text-gray-700">
        Need a price for your transportation? Access our instant quotation
        module and discover SpotOn on pilot trades
      </p>
      <Button
        onClick={handleGetPrice}
        className="w-full rounded-none bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-base cursor-pointer"
      >
        Get a price
      </Button>
      <p className="text-sm text-gray-600 mt-4">
        Prices module is accessible for registered customers.
      </p>
    </div>
  );
};
