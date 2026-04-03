import { NormalizedFlight, PointsConversion, Region, RegionPair } from "@/types";
import { awardCharts } from "@/data/awardCharts";
import { cardPrograms } from "@/data/cardPrograms";

// Helper to determine region (Simplified for MVP)
function getRegion(airportCode: string): Region {
  const US_AIRPORTS = ["JFK", "LAX", "ORD", "DFW", "DEN", "SFO", "ATL", "EWR", "MIA", "SEA", "BOS"];
  const EUROPE_AIRPORTS = ["LHR", "CDG", "FRA", "AMS", "MAD", "MUC", "ZRH", "IST", "BCN", "FCO"];
  const ASIA_AIRPORTS = ["HND", "NRT", "SIN", "HKG", "ICN", "BKK", "TPE", "PEK", "PVG"];
  const MIDDLE_EAST_AIRPORTS = ["DXB", "DOH", "AUH"];

  if (US_AIRPORTS.includes(airportCode)) return "north_america";
  if (EUROPE_AIRPORTS.includes(airportCode)) return "europe";
  if (ASIA_AIRPORTS.includes(airportCode)) return "asia";
  if (MIDDLE_EAST_AIRPORTS.includes(airportCode)) return "middle_east";

  return "north_america"; // Fallback
}

export function calculateConversions(flight: NormalizedFlight): PointsConversion[] {
  const conversions: PointsConversion[] = [];
  const originRegion = getRegion(flight.origin);
  const destRegion = getRegion(flight.destination);
  const regionPair = `${originRegion}-${destRegion}` as RegionPair;

  // 1. Travel Eraser (Cash)
  for (const card of cardPrograms) {
    conversions.push({
      cardProgram: card.id,
      cardProgramName: card.name,
      method: "travel_eraser",
      cardPointsNeeded: Math.ceil((flight.priceUsd * 100) / card.centsPerPoint),
      valuePerPoint: card.centsPerPoint / 100,
      isRecommended: false,
    });
  }

  // 2. Point Transfers
  for (const chart of awardCharts) {
    // Avoid dynamic object access with user-controlled input (though regionPair is derived)
    const pricing =
      chart.businessClassPricing[regionPair as keyof typeof chart.businessClassPricing];
    if (!pricing) continue;

    const milesNeeded = pricing.milesOneWay * flight.seatsRequested;

    for (const card of cardPrograms) {
      const partner = card.transferPartners.find((p) => p.loyaltyProgramId === chart.programId);
      if (!partner) continue;

      const cardPointsNeeded = Math.ceil(milesNeeded * partner.ratio);
      const valuePerPoint = flight.priceUsd / cardPointsNeeded;

      conversions.push({
        cardProgram: card.id,
        cardProgramName: card.name,
        method: "transfer",
        transferPartner: partner.loyaltyProgramName,
        cardPointsNeeded,
        valuePerPoint,
        isRecommended: valuePerPoint > 0.02, // Recommended if > 2 cents per point
      });
    }
  }

  return conversions.sort((a, b) => a.cardPointsNeeded - b.cardPointsNeeded);
}
