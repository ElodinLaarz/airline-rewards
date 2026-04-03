import { AwardChart } from "@/types";

export const awardCharts: AwardChart[] = [
  {
    programId: "aeroplan",
    businessClassPricing: {
      "north_america-europe": { milesOneWay: 60000, milesRoundTrip: 120000 },
      "north_america-asia": { milesOneWay: 75000, milesRoundTrip: 150000 },
      "north_america-middle_east": { milesOneWay: 85000, milesRoundTrip: 170000 },
    },
  },
  {
    programId: "ba_avios",
    businessClassPricing: {
      "north_america-europe": { milesOneWay: 70000, milesRoundTrip: 140000 },
    },
  },
  {
    programId: "lifemiles",
    businessClassPricing: {
      "north_america-europe": { milesOneWay: 63000, milesRoundTrip: 126000 },
    },
  },
  {
    programId: "flying_blue",
    businessClassPricing: {
      "north_america-europe": { milesOneWay: 55000, milesRoundTrip: 110000 },
    },
  },
];
