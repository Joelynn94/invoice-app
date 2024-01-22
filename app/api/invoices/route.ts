import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/libs/connectDB";
import Invoice from "@/models/invoice";

export async function GET(
  request: NextRequest
): Promise<NextResponse<(typeof Invoice)[]>> {
  await connectDB();

  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get("status");
  const filter = status ? { status } : {};

  console.log("filter", filter);

  const invoices = await Invoice.find(filter);
  console.log("invoices", invoices);
  return NextResponse.json(invoices);
}

export async function POST(request: NextRequest) {
  const invoiceData = await request.json();
  await connectDB();
  await Invoice.create(invoiceData);
  return NextResponse.json(
    { message: "Invoice successfully created" },
    { status: 201 }
  );
}
