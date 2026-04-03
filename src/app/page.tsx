"use client";

import Image from "next/image";
import { FlightSearchForm } from "@/components/search/FlightSearchForm";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-20 px-6 bg-zinc-50 dark:bg-black sm:items-start">
        <div className="mb-12 flex flex-col items-center sm:items-start">
          <Image
            className="dark:invert mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Find the best rewards for your next flight.
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Compare miles, points, and transfer partners in one place.
          </p>
        </div>

        <FlightSearchForm />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 w-full">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Award Charts</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Access regional award pricing across major airline alliances.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Transfer Partners</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Calculate optimal point transfers from Amex, Capital One, and more.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Flight Search</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Real-time flight search integration with Kiwi and Amadeus.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
