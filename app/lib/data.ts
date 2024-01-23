import { unstable_noStore as noStore } from "next/cache";
import connectDB from "@/libs/connectDB";
import Invoice from "@/models/invoice";
import { Invoice as IInvoice } from "./definitions";

export async function getInvoices(filter: string[] | string) {
  noStore();
  try {
    await connectDB();

    let invoices;
    if (filter.length === 0) {
      invoices = await Invoice.find({});
    } else {
      invoices = await Invoice.find({ status: filter });
    }

    // Convert invoices to a plain object
    return JSON.parse(JSON.stringify(invoices));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch invoices");
  }
}

export async function getInvoiceById(id: string) {
  try {
    await connectDB();

    const invoice = await Invoice.findById(id);
    if (!invoice) {
      throw new Error("Invoice not found");
    }

    return JSON.parse(JSON.stringify(invoice));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch invoice");
  }
}

export async function updateInvoice(id: string, invoiceData: IInvoice) {
  try {
    await connectDB();

    const updatedInvoice = await Invoice.findByIdAndUpdate(id, invoiceData, {
      new: true,
    });
    if (!updatedInvoice) {
      throw new Error("Invoice not found");
    }

    return JSON.parse(JSON.stringify(updatedInvoice));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update invoice");
  }
}
