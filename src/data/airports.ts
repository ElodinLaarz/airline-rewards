import { Airport } from "@/types";

export const airports: Airport[] = [
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    country: "United States",
  },
  { code: "LHR", name: "London Heathrow Airport", city: "London", country: "United Kingdom" },
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan" },
  { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  {
    code: "DXB",
    name: "Dubai International Airport",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "China" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { code: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands" },
  { code: "SYD", name: "Sydney Airport", city: "Sydney", country: "Australia" },
  {
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
    country: "United States",
  },
  { code: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "United States" },
  {
    code: "DFW",
    name: "Dallas/Fort Worth International Airport",
    city: "Dallas",
    country: "United States",
  },
  { code: "DEN", name: "Denver International Airport", city: "Denver", country: "United States" },
  {
    code: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
    country: "United States",
  },
  {
    code: "ATL",
    name: "Hartsfield-Jackson Atlanta International Airport",
    city: "Atlanta",
    country: "United States",
  },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain" },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  {
    code: "YYZ",
    name: "Toronto Pearson International Airport",
    city: "Toronto",
    country: "Canada",
  },
  { code: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada" },
  {
    code: "MEX",
    name: "Mexico City International Airport",
    city: "Mexico City",
    country: "Mexico",
  },
  {
    code: "GRU",
    name: "São Paulo/Guarulhos International Airport",
    city: "São Paulo",
    country: "Brazil",
  },
  { code: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar" },
  {
    code: "AUH",
    name: "Abu Dhabi International Airport",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
  },
];

export function searchAirports(query: string): Airport[] {
  const normalizedQuery = query.toLowerCase();
  return airports.filter(
    (a) =>
      a.code.toLowerCase().includes(normalizedQuery) ||
      a.name.toLowerCase().includes(normalizedQuery) ||
      a.city.toLowerCase().includes(normalizedQuery),
  );
}
