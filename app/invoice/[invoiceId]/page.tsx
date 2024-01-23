import InvoiceDetails from "@/components/InvoiceDetails";
import InvoiceStatus from "@/components/InvoiceStatus";
import { Invoice } from "@/app/lib/definitions";
import { getInvoiceById } from "@/app/lib/data";

export default async function InvoiceRead({
  params,
}: {
  params: { invoiceId: string };
}) {
  const { invoiceId } = params;
  const invoice = await getInvoiceById(invoiceId);

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
