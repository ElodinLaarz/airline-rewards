"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Airport } from "@/types";
import { AirportSearch } from "./AirportSearch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FlightSearchForm() {
  const router = useRouter();
  const [origin, setOrigin] = React.useState<Airport | null>(null);
  const [destination, setDestination] = React.useState<Airport | null>(null);
  const [departDate, setDepartDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [adults, setAdults] = React.useState(1);
  const [isRoundTrip, setIsRoundTrip] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!origin || !destination || !departDate) {
      alert("Please fill in all required fields");
      return;
    }

    const params = new URLSearchParams({
      origin: origin.code,
      destination: destination.code,
      departDate,
      adults: adults.toString(),
      adjacentSeats: "true", // Defaulting for now
    });

    if (isRoundTrip && returnDate) {
      params.append("returnDate", returnDate);
    }

    router.push(`/results?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            checked={!isRoundTrip}
            onChange={() => setIsRoundTrip(false)}
            className="w-4 h-4 text-zinc-900 border-zinc-300 focus:ring-zinc-900 dark:focus:ring-zinc-300 dark:border-zinc-700"
          />
          <span className="text-sm font-medium">One-way</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            checked={isRoundTrip}
            onChange={() => setIsRoundTrip(true)}
            className="w-4 h-4 text-zinc-900 border-zinc-300 focus:ring-zinc-900 dark:focus:ring-zinc-300 dark:border-zinc-700"
          />
          <span className="text-sm font-medium">Round-trip</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AirportSearch label="From" placeholder="Origin airport" onSelect={setOrigin} />
        <AirportSearch label="To" placeholder="Destination airport" onSelect={setDestination} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-end">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Departure</label>
          <Input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
        </div>

        <div className={`space-y-1.5 ${!isRoundTrip ? "opacity-50 pointer-events-none" : ""}`}>
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Return</label>
          <Input
            type="date"
            disabled={!isRoundTrip}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Passengers</label>
          <Input
            type="number"
            min={1}
            max={9}
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Search Flights
        </Button>
      </div>
    </form>
  );
}
