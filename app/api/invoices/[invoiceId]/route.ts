import { NextRequest, NextResponse } from "next/server";
import jsonData from "../../data.json";
import connectDB from "@/libs/connectDB";
import Invoice from "@/models/invoice";

export async function GET(
  request: NextRequest,
  context: { params: { invoiceId: string } }
) {
  const { invoiceId } = context.params;
  await connectDB();
  console.log("invoiceId", invoiceId);

  const foundInvoice = await Invoice.findById(invoiceId);
  if (!foundInvoice) {
    return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
  }

  return NextResponse.json(foundInvoice, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  context: { params: { invoiceId: string } }
) {
  const { invoiceId } = context.params;
  await connectDB();

  const invoiceData = await request.json();
  const updatedInvoice = await Invoice.findByIdAndUpdate(
    invoiceId,
    invoiceData,
    { new: true }
  );
  if (!updatedInvoice) {
    return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
  }

  return NextResponse.json(updatedInvoice, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  context: { params: { invoiceId: string } }
) {
  const { invoiceId } = context.params;
  await connectDB();

  const deletedInvoice = await Invoice.findByIdAndDelete(invoiceId);
  if (!deletedInvoice) {
    return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Invoice successfully deleted" },
    { status: 200 }
  );
}
