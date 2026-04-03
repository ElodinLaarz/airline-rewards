import { Airline, Alliance } from "@/types";

export const airlines: Airline[] = [
  // Star Alliance
  {
    code: "UA",
    name: "United Airlines",
    alliance: "star_alliance",
    loyaltyProgram: "united_mileageplus",
    hubs: ["EWR", "ORD", "SFO", "IAH", "IAD", "DEN", "LAX"],
  },
  {
    code: "AC",
    name: "Air Canada",
    alliance: "star_alliance",
    loyaltyProgram: "aeroplan",
    hubs: ["YYZ", "YVR", "YUL"],
  },
  {
    code: "LH",
    name: "Lufthansa",
    alliance: "star_alliance",
    loyaltyProgram: "miles_and_more",
    hubs: ["FRA", "MUC"],
  },
  {
    code: "NH",
    name: "ANA",
    alliance: "star_alliance",
    loyaltyProgram: "ana_mileage_club",
    hubs: ["NRT", "HND"],
  },
  {
    code: "SQ",
    name: "Singapore Airlines",
    alliance: "star_alliance",
    loyaltyProgram: "krisflyer",
    hubs: ["SIN"],
  },
  {
    code: "TK",
    name: "Turkish Airlines",
    alliance: "star_alliance",
    loyaltyProgram: "turkish_miles_smiles",
    hubs: ["IST"],
  },
  {
    code: "LX",
    name: "Swiss International",
    alliance: "star_alliance",
    loyaltyProgram: "miles_and_more",
    hubs: ["ZRH"],
  },
  {
    code: "BR",
    name: "EVA Air",
    alliance: "star_alliance",
    loyaltyProgram: "infinity_mileagelands",
    hubs: ["TPE"],
  },
  {
    code: "AV",
    name: "Avianca",
    alliance: "star_alliance",
    loyaltyProgram: "lifemiles",
    hubs: ["BOG"],
  },

  // oneworld
  {
    code: "AA",
    name: "American Airlines",
    alliance: "oneworld",
    loyaltyProgram: "aadvantage",
    hubs: ["DFW", "CLT", "MIA", "ORD", "PHL", "PHX"],
  },
  {
    code: "BA",
    name: "British Airways",
    alliance: "oneworld",
    loyaltyProgram: "ba_avios",
    hubs: ["LHR"],
  },
  {
    code: "CX",
    name: "Cathay Pacific",
    alliance: "oneworld",
    loyaltyProgram: "cathay_asia_miles",
    hubs: ["HKG"],
  },
  {
    code: "QF",
    name: "Qantas",
    alliance: "oneworld",
    loyaltyProgram: "qantas_points",
    hubs: ["SYD", "MEL"],
  },
  {
    code: "QR",
    name: "Qatar Airways",
    alliance: "oneworld",
    loyaltyProgram: "qatar_privilege_club",
    hubs: ["DOH"],
  },
  {
    code: "AS",
    name: "Alaska Airlines",
    alliance: "oneworld",
    loyaltyProgram: "alaska_mileage_plan",
    hubs: ["SEA"],
  },
  {
    code: "JL",
    name: "Japan Airlines",
    alliance: "oneworld",
    loyaltyProgram: "jal_mileage_bank",
    hubs: ["NRT", "HND"],
  },

  // SkyTeam
  {
    code: "DL",
    name: "Delta Air Lines",
    alliance: "skyteam",
    loyaltyProgram: "delta_skymiles",
    hubs: ["ATL", "MSP", "DTW", "SLC", "SEA", "LAX", "JFK"],
  },
  {
    code: "AF",
    name: "Air France",
    alliance: "skyteam",
    loyaltyProgram: "flying_blue",
    hubs: ["CDG"],
  },
  { code: "KL", name: "KLM", alliance: "skyteam", loyaltyProgram: "flying_blue", hubs: ["AMS"] },
  { code: "KE", name: "Korean Air", alliance: "skyteam", loyaltyProgram: "skypass", hubs: ["ICN"] },

  // Non-alliance
  {
    code: "EK",
    name: "Emirates",
    alliance: "none",
    loyaltyProgram: "emirates_skywards",
    hubs: ["DXB"],
  },
  {
    code: "EY",
    name: "Etihad Airways",
    alliance: "none",
    loyaltyProgram: "etihad_guest",
    hubs: ["AUH"],
  },
];

const airlinesByCode = new Map(airlines.map((a) => [a.code, a]));

export function getAirline(code: string): Airline | undefined {
  return airlinesByCode.get(code);
}

export function getAirlinesByAlliance(alliance: Alliance | "all"): Airline[] {
  if (alliance === "all") return airlines;
  return airlines.filter((a) => a.alliance === alliance);
}
