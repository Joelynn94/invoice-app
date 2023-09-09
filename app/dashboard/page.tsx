"use client";

import { useAppContext } from "@/context/app-context";
import DashboardBar from "@/components/DashboardBar";
import InvoiceSummary from "@/components/InvoiceSummary";
import NoInvoices from "@/components/NoInvoices";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const { state } = useAppContext();
  return (
    <>
      <DashboardBar />
      {state.filtered.length > 0 ? (
        state.filtered.map((invoice) => (
          <InvoiceSummary invoice={invoice} key={invoice.id} />
        ))
      ) : state.invoices ? (
        state.invoices.map((invoice) => (
          <InvoiceSummary invoice={invoice} key={invoice.id} />
        ))
      ) : (
        <NoInvoices />
      )}
    </>
  );
}
