"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FlightWithPoints } from "@/types";
import { FlightList } from "@/components/results/FlightList";
import { Button } from "@/components/ui/button";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [flights, setFlights] = React.useState<FlightWithPoints[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const departDate = searchParams.get("departDate");
  const adults = searchParams.get("adults");

  React.useEffect(() => {
    async function fetchFlights() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?${searchParams.toString()}`);
        if (!res.ok) throw new Error("Search failed");
        const data = await res.json();
        setFlights(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    if (origin && destination && departDate) {
      fetchFlights();
    }
  }, [searchParams, origin, destination, departDate]);

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black min-h-screen">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
              ← Back
            </Button>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {origin} to {destination}
              </p>
              <p className="text-xs text-zinc-500">
                {departDate} • {adults} adult{parseInt(adults || "1") > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => router.push("/")}>
            Edit Search
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-8">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Flight Results
        </h2>
        <FlightList flights={flights} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <p className="text-lg animate-pulse">Loading search results...</p>
        </div>
      }
    >
      <ResultsContent />
    </React.Suspense>
  );
}
