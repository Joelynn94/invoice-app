import InvoiceSummary from "@/components/InvoiceSummary";
import NoInvoices from "@/components/NoInvoices";
import { Invoices } from "@/types/definitions";

const getInvoices = async (statusFilter: string[]): Promise<Invoices> => {
  try {
    const res = await fetch(`/api/invoices?status=${statusFilter.join(",")}`, {
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

export default async function InvoiceList(searchParams: { status: string[] }) {
  const statusFilter = searchParams.status;
  console.log(searchParams);
  // const invoices = await getInvoices(statusFilter);
  return (
    <>
      <NoInvoices />
    </>
  );
}
