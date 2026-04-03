import { NextRequest, NextResponse } from "next/server";
import { airlines } from "@/data/airlines";
import { NormalizedFlight } from "@/types";

function generateMockFlights(
  origin: string,
  destination: string,
  departDate: string,
  adults: number,
): NormalizedFlight[] {
  const flights: NormalizedFlight[] = [];
  const count = Math.floor(Math.random() * 5) + 3; // 3-7 flights

  for (let i = 0; i < count; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const id = `${airline.code}-${Math.floor(Math.random() * 9000) + 1000}-${i}`;
    const departureTime = `${departDate}T${String(Math.floor(Math.random() * 24)).padStart(
      2,
      "0",
    )}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}:00Z`;

    // Duration between 4 and 14 hours
    const durationMinutes = Math.floor(Math.random() * 600) + 240;
    const arrivalDate = new Date(new Date(departureTime).getTime() + durationMinutes * 60000);

    const pricePerPaxUsd = Math.floor(Math.random() * 800) + 400;

    flights.push({
      id,
      source: "kiwi",
      airline: airline.code,
      airlineName: airline.name,
      flightNumber: `${airline.code}${Math.floor(Math.random() * 9000) + 100}`,
      origin,
      destination,
      departureTime,
      arrivalTime: arrivalDate.toISOString(),
      durationMinutes,
      stops: Math.floor(Math.random() * 2),
      stopCities: [],
      cabinClass: "business",
      priceUsd: pricePerPaxUsd * adults,
      pricePerPaxUsd,
      currency: "USD",
      deepLink: "https://example.com/booking",
      seatsRequested: adults,
      adjacentSeatsNote: adults > 1 ? "Adjacent seats confirmed" : "",
    });
  }

  return flights.sort((a, b) => a.priceUsd - b.priceUsd);
}

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams;
  const origin = q.get("origin");
  const destination = q.get("destination");
  const departDate = q.get("departDate");
  const adults = parseInt(q.get("adults") || "1");

  if (!origin || !destination || !departDate) {
    return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
  }

  const results = generateMockFlights(origin, destination, departDate, adults);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json(results);
}
