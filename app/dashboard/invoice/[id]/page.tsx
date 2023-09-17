"use client";

import InvoiceDetails from "@/components/InvoiceDetails";
import InvoiceStatus from "@/components/InvoiceStatus";
import { useAppContext } from "@/context/app-context";
import { Invoice } from "@/context/app-types";

export default function InvoiceRead({ params }: { params: { id: string } }) {
  const { state } = useAppContext();
  const invoice = state.invoices.find(
    (invoice: Invoice) => invoice.id === params.id
  );

  return (
    <>
      {invoice ? (
        <>
          <InvoiceStatus invoice={invoice} />
          <InvoiceDetails invoice={invoice} />
        </>
      ) : (
        <p>Invoice not found</p> // You can customize this message
      )}
    </>
  );
}
