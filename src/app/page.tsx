"use client";

import Image from "next/image";
import { AirportSearch } from "@/components/search/AirportSearch";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Find your next flight.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
            <AirportSearch
              label="Origin"
              placeholder="Where from?"
              onSelect={(a) => console.log("Origin:", a)}
            />
            <AirportSearch
              label="Destination"
              placeholder="Where to?"
              onSelect={(a) => console.log("Destination:", a)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-12">
          <button
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            onClick={() => console.log("Searching...")}
          >
            Search Flights
          </button>
        </div>
      </main>
    </div>
  );
}
