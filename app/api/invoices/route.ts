import { NextRequest, NextResponse } from "next/server";
import jsonData from "../data.json";

export async function GET() {
  return NextResponse.json(jsonData);
}

export async function POST(request: NextRequest) {
  const invoice = await request.json();
  jsonData.push(invoice);
  console.log(`Added invoice ${invoice.id}`);
  console.log(jsonData);
  return NextResponse.json(invoice, { status: 201 });
}
