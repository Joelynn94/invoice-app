"use client";

import { useAppContext } from "@/context/app-context";
import InvoiceSummary from "@/components/InvoiceSummary";
import NoInvoices from "@/components/NoInvoices";

export default function InvoiceList() {
  const { state } = useAppContext();
  return (
    <>
      {state.filtered.length > 0 ? (
        state.filtered.map((invoice) => (
          <InvoiceSummary invoice={invoice} key={invoice.id} />
        ))
      ) : state.invoices.length > 0 ? (
        state.invoices.map((invoice) => (
          <InvoiceSummary invoice={invoice} key={invoice.id} />
        ))
      ) : (
        <NoInvoices />
      )}
    </>
  );
}
