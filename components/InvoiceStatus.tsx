import { useEffect, useRef } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/app-context";
import { Invoice } from "@/context/app-types";
import InvoiceBadge from "./InvoiceBadge";
import Button from "./Button";

import "./InvoiceStatus.css";

export default function InvoiceStatus({ invoice }: { invoice: Invoice }) {
  const { markInvoicePaid, markInvoicePending, deleteInvoice } =
    useAppContext();

  const onDeleteClick = () => {
    deleteInvoice(invoice.id);
    // router.push("/");
  };

  return (
    <div className="status-card">
      <p className="status-card__status-text">Status</p>
      <InvoiceBadge status={invoice.status} />
      <div className="invoice-view-buttons">
        <Link href={`/dashboard/invoice/${invoice.id}/edit`}>
          <Button variant="edit">Edit</Button>
        </Link>
        <Button variant="danger" onClick={onDeleteClick}>
          Delete
        </Button>
        {invoice.status === "pending" && (
          <Button variant="primary" onClick={() => markInvoicePaid(invoice.id)}>
            Mark as Paid
          </Button>
        )}
        {invoice.status === "draft" && (
          <Button
            variant="primary"
            onClick={() => markInvoicePending(invoice.id)}
          >
            Mark as Pending
          </Button>
        )}
      </div>
    </div>
  );
}
