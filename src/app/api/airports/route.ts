import { NextRequest, NextResponse } from "next/server";
import { searchAirports } from "@/data/airports";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json([]);
  }

  const results = searchAirports(q);
  return NextResponse.json(results);
}
