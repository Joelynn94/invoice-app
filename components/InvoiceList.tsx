"use client";
import InvoiceSummary from "@/components/InvoiceSummary";
import NoInvoices from "@/components/NoInvoices";
import { Invoices } from "@/app/lib/definitions";

export default async function InvoiceList({
  invoices,
}: {
  invoices: Invoices;
}) {
  if (invoices.length === 0) {
    return <NoInvoices />;
  }

  return (
    <ul className="divide-y divide-slate-200 dark:divide-slate-800">
      {invoices.map((invoice) => (
        <li key={invoice._id}>
          <InvoiceSummary invoice={invoice} />
        </li>
      ))}
    </ul>
  );
}
