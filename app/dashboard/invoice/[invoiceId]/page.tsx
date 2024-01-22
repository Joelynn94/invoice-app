"use client";

import { useState, useEffect } from "react";
import InvoiceDetails from "@/components/InvoiceDetails";
import InvoiceStatus from "@/components/InvoiceStatus";
import { Invoice } from "@/types/definitions";

const getInvoiceById = async (id: string): Promise<Invoice> => {
  try {
    const res = await fetch(`http://localhost:3000/api/invoices/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }
};

export default function InvoiceRead({
  params,
}: {
  params: { invoiceId: string };
}) {
  const { invoiceId } = params;
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice).catch(console.error);
  }, [invoiceId]);

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  return (
    <>
      <InvoiceStatus invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
    </>
  );
}
