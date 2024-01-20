import type { NextRequest, NextResponse } from "next/server";
import jsonData from "../../data.json";

export async function GET(
  request: NextRequest,
  context: { params: { invoiceId: string } }
) {
  const { invoiceId } = context.params;
  const invoice = jsonData.find(
    (inv) => inv.id.toLowerCase() === invoiceId.toLowerCase()
  );

  if (!invoice) {
    return new Response(JSON.stringify({ error: "Invoice not found" }), {
      status: 404,
    });
  }

  console.log(`Fetched invoice ${invoiceId}`);
  return new Response(JSON.stringify(invoice), { status: 200 });
}

export async function PUT(
  request: NextRequest,
  context: { params: { invoiceId: string } }
) {
  const { invoiceId } = context.params;
  const updatedInvoiceData = await request.json();
  const invoiceIndex = jsonData.findIndex(
    (inv) => inv.id.toLowerCase() === invoiceId.toLowerCase()
  );

  if (invoiceIndex === -1) {
    // Invoice not found
    return new Response(JSON.stringify({ error: "Invoice not found" }), {
      status: 404,
    });
  }

  // Update the invoice
  jsonData[invoiceIndex] = { ...jsonData[invoiceIndex], ...updatedInvoiceData };

  console.log(`Updated invoice ${invoiceId}`);
  return new Response(JSON.stringify(jsonData[invoiceIndex]), { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  context: { params: { invoiceId: string } }
) {
  const { invoiceId } = context.params;
  const initialLength = jsonData.length;

  // Filter out the invoice to delete
  const updatedInvoices = jsonData.filter(
    (inv) => inv.id.toLowerCase() !== invoiceId.toLowerCase()
  );

  if (updatedInvoices.length === initialLength) {
    // Invoice not found
    return new Response(JSON.stringify({ error: "Invoice not found" }), {
      status: 404,
    });
  }

  console.log(`Deleted invoice ${invoiceId}`);
  return new Response(JSON.stringify(updatedInvoices), { status: 200 });
}
