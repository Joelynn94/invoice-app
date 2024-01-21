import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/libs/connectDB";
import Invoice from "@/models/invoice";

export async function GET() {
  await connectDB();
  const invoices = await Invoice.find();
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
