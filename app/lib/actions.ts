"use server";

import { z } from "zod";
import { Invoice as IInvoice } from "./definitions";
import connectDB from "@/libs/connectDB";
import Invoice from "@/models/invoice";
import { mapPaymentTerms } from "./utils";

export async function updateInvoice(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData.entries());
  console.log("rawFormData", rawFormData);

  const items: any[] = [];

  // Extract item data from rawFormData
  Object.keys(rawFormData).forEach((key) => {
    if (key.startsWith("items[")) {
      const itemKey = key.split("[")[1].split("]")[0];
      const itemIndex = parseInt(itemKey);
      const itemProperty = key.split(".")[1];
      const itemValue = rawFormData[key];

      if (!items[itemIndex]) {
        items[itemIndex] = {};
      }

      items[itemIndex][itemProperty] = itemValue;
    }
  });

  console.log("rawFormData.paymentTerms", rawFormData.paymentTerms);
  // Transform rawFormData into a nested structure
  const transformedData = {
    _id: rawFormData._id,
    senderAddress: {
      street: rawFormData["senderAddress.street"],
      city: rawFormData["senderAddress.city"],
      postCode: rawFormData["senderAddress.postCode"],
      country: rawFormData["senderAddress.country"],
    },
    clientName: rawFormData.clientName,
    clientEmail: rawFormData.clientEmail,
    clientAddress: {
      street: rawFormData["clientAddress.street"],
      city: rawFormData["clientAddress.city"],
      postCode: rawFormData["clientAddress.postCode"],
      country: rawFormData["clientAddress.country"],
    },
    paymentDue: new Date(rawFormData.paymentDue as string),
    paymentTerms: rawFormData.paymentTerms,
    description: rawFormData.description,
    items: items.map((item) => ({
      name: item["name"],
      quantity: Number(item["quantity"]),
      price: item["price"],
      total: Number(item["total"]),
    })),
    total: Number(rawFormData.total),
  };

  console.log("transformedData", transformedData);

  try {
    await connectDB();

    console.log("submitting invoice");
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      transformedData._id,
      transformedData
    );

    console.log("Updated invoice", updatedInvoice);
    if (!updatedInvoice) {
      return { message: "Invoice not found" };
    }

    return { message: "Invoice changes saved" };
  } catch (err) {
    console.log(err);
    return { message: "Failed to save changes" };
  }
}
