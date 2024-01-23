import Image from "next/image";
import Link from "next/link";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
import DashboardBar from "@/components/DashboardBar";
import InvoiceList from "@/components/InvoiceList";
import InvoiceBadge from "@/components/InvoiceBadge";
import Heading from "@/components/Heading";
import { getInvoices } from "@/app/lib/data";
import { Invoices } from "@/app/lib/definitions";

export default async function Dashboard({
  children,
  searchParams,
}: {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const statusFilter = searchParams.status ? searchParams.status : "";
  console.log(
    "passing statusFilter to getInvoices with type: ",
    typeof statusFilter
  );
  const invoices: Invoices = await getInvoices(statusFilter);
  const plainInvoices = JSON.parse(JSON.stringify(invoices));

  return (
    <>
      <DashboardBar invoices={plainInvoices} />
      <InvoiceList invoices={invoices} />
      {/* <ul className="divide-y divide-slate-200 dark:divide-slate-800">
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            <Link
              className="invoice-summary__link"
              href={`http://localhost:3000/invoice/${invoice._id}`}
            >
              <div className="invoice-summary">
                <div className="invoice-summary__id">
                  <Heading variant="h3">
                    <span className="invoice-summary__hash">#</span>
                    {invoice._id}
                  </Heading>
                </div>
                <div className="invoice-summary__client-name">
                  <p>{invoice.clientName}</p>
                </div>
                <div className="invoice-summary__wrap">
                  <div className="invoice-summary__due-date">
                    <p>
                      <span className="invoice-summary__due-txt">Due</span>
                      {formatDateToLocal(invoice.paymentDue)}
                    </p>
                  </div>
                  <div className="invoice-summary__total">
                    <Heading variant="h3">
                      {formatCurrency(parseFloat(invoice.total))}
                    </Heading>
                  </div>
                </div>
                <div className="invoice-summary__due-date">
                  <p className="text-sm lg:text-base">
                    <span className="invoice-summary__due-txt">Due</span>
                    {formatDateToLocal(invoice.paymentDue)}
                  </p>
                </div>
                <div className="invoice-summary__total">
                  <Heading variant="h3">
                    {formatCurrency(parseFloat(invoice.total))}
                  </Heading>
                </div>
                <div className="invoice-summary__badge">
                  <InvoiceBadge status={invoice.status} />
                </div>
                <div className="invoice-summary__arrow">
                  <Image
                    src="/assets/icon-arrow-right.svg"
                    alt="right arrow icon"
                    width={7}
                    height={10}
                    style={{ height: "auto", width: "auto" }}
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
