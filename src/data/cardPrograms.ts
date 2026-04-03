import { CardProgram } from "@/types";

export const cardPrograms: CardProgram[] = [
  {
    id: "capital_one",
    name: "Capital One Venture",
    centsPerPoint: 1.0,
    transferPartners: [
      {
        cardProgram: "capital_one",
        loyaltyProgramId: "aeroplan",
        loyaltyProgramName: "Aeroplan",
        ratio: 1.0,
      },
      {
        cardProgram: "capital_one",
        loyaltyProgramId: "lifemiles",
        loyaltyProgramName: "LifeMiles",
        ratio: 1.0,
      },
      {
        cardProgram: "capital_one",
        loyaltyProgramId: "flying_blue",
        loyaltyProgramName: "Flying Blue",
        ratio: 1.0,
      },
      {
        cardProgram: "capital_one",
        loyaltyProgramId: "ba_avios",
        loyaltyProgramName: "British Airways Avios",
        ratio: 1.0,
      },
    ],
  },
  {
    id: "amex_mr",
    name: "Amex Membership Rewards",
    centsPerPoint: 1.0,
    transferPartners: [
      {
        cardProgram: "amex_mr",
        loyaltyProgramId: "aeroplan",
        loyaltyProgramName: "Aeroplan",
        ratio: 1.0,
      },
      {
        cardProgram: "amex_mr",
        loyaltyProgramId: "flying_blue",
        loyaltyProgramName: "Flying Blue",
        ratio: 1.0,
      },
      {
        cardProgram: "amex_mr",
        loyaltyProgramId: "ba_avios",
        loyaltyProgramName: "British Airways Avios",
        ratio: 1.0,
      },
    ],
  },
];
