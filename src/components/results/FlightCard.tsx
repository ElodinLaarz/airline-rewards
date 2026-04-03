import * as React from "react";
import { NormalizedFlight } from "@/types";
import { Button } from "@/components/ui/button";

interface FlightCardProps {
  flight: NormalizedFlight;
}

export function FlightCard({ flight }: FlightCardProps) {
  const departureDate = new Date(flight.departureTime);
  const arrivalDate = new Date(flight.arrivalTime);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <span className="text-sm font-bold">{flight.airline}</span>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">{flight.airlineName}</p>
            <p className="text-xs text-zinc-500">Flight {flight.flightNumber}</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between gap-8 px-4">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">{formatTime(departureDate)}</p>
            <p className="text-sm font-medium text-zinc-500">{flight.origin}</p>
          </div>

          <div className="relative flex flex-1 flex-col items-center">
            <p className="mb-1 text-xs text-zinc-500">{formatDuration(flight.durationMinutes)}</p>
            <div className="relative h-px w-full bg-zinc-200 dark:bg-zinc-800">
              <div className="absolute -top-1 left-0 h-2 w-2 rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"></div>
              <div className="absolute -top-1 right-0 h-2 w-2 rounded-full border border-zinc-200 bg-zinc-900 dark:border-zinc-800 dark:bg-zinc-50"></div>
            </div>
            <p className="mt-1 text-xs font-medium text-zinc-500">
              {flight.stops === 0
                ? "Non-stop"
                : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xl font-bold">{formatTime(arrivalDate)}</p>
            <p className="text-sm font-medium text-zinc-500">{flight.destination}</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 border-t pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div className="text-right">
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">${flight.priceUsd}</p>
            <p className="text-xs text-zinc-500">Total for {flight.seatsRequested} adult</p>
          </div>
          <Button variant="default" size="sm" className="w-full md:w-auto">
            View Deal
          </Button>
        </div>
      </div>
    </div>
  );
}
