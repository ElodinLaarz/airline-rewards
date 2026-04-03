// === Flight Search & Results ===

export interface SearchParams {
  origin: string;
  destination: string;
  departDate: string;
  returnDate?: string;
  adults: number;
  adjacentSeats: boolean;
}

export interface NormalizedFlight {
  id: string;
  source: "kiwi" | "amadeus";
  airline: string;
  airlineName: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  durationMinutes: number;
  stops: number;
  stopCities: string[];
  cabinClass: "business";
  priceUsd: number;
  pricePerPaxUsd: number;
  currency: string;
  deepLink: string;
  seatsRequested: number;
  adjacentSeatsNote: string;
}

// === Airlines ===

export type Alliance = "oneworld" | "star_alliance" | "skyteam" | "none";

export interface Airline {
  code: string;
  name: string;
  alliance: Alliance;
  loyaltyProgram: string;
  hubs: string[];
}

// === Award Charts ===

export interface LoyaltyProgram {
  id: string;
  name: string;
  airlineCode: string;
  currency: "miles" | "points";
}

export type Region =
  | "north_america"
  | "europe"
  | "asia"
  | "middle_east"
  | "oceania"
  | "south_america"
  | "africa";

export type RegionPair = `${Region}-${Region}`;

export interface AwardPricing {
  milesOneWay: number;
  milesRoundTrip: number;
  note?: string;
}

export interface AwardChart {
  programId: string;
  businessClassPricing: Partial<Record<RegionPair, AwardPricing>>;
}

// === Credit Card Points Programs ===

export type CardProgramId = "capital_one" | "amex_mr";

export interface TransferPartner {
  cardProgram: CardProgramId;
  loyaltyProgramId: string;
  loyaltyProgramName: string;
  ratio: number; // card points per 1 airline mile (1.0 = 1:1)
  transferBonusActive?: boolean;
  transferBonusRatio?: number;
}

export interface CardProgram {
  id: CardProgramId;
  name: string;
  centsPerPoint: number;
  transferPartners: TransferPartner[];
}

// === Points Conversion Result ===

export interface PointsConversion {
  cardProgram: CardProgramId;
  cardProgramName: string;
  method: "transfer" | "travel_eraser";
  transferPartner?: string;
  cardPointsNeeded: number;
  valuePerPoint: number;
  isRecommended: boolean;
}

export interface FlightWithPoints extends NormalizedFlight {
  awardMiles?: {
    programId: string;
    programName: string;
    milesNeeded: number;
  };
  pointsConversions: PointsConversion[];
}

// === Airport ===

export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}
