import * as React from "react";
import { NormalizedFlight } from "@/types";
import { FlightCard } from "./FlightCard";

interface FlightListProps {
  flights: NormalizedFlight[];
  isLoading: boolean;
}

export function FlightList({ flights, isLoading }: FlightListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-40 w-full animate-pulse rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
          ></div>
        ))}
      </div>
    );
  }

  if (flights.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">No flights found</p>
        <p className="mt-2 text-zinc-500">Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}
