import { useEffect, useRef } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/app-context";
import { Invoice } from "@/context/app-types";
import InvoiceBadge from "./InvoiceBadge";
import Button from "./Button";

import "./InvoiceStatus.css";

export default function InvoiceStatus({ invoice }: { invoice: Invoice }) {
  const { markAsPaid, deleteInvoice } = useAppContext();

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
        <Button variant="primary" onClick={() => markAsPaid(invoice.id)}>
          Mark as Paid
        </Button>
      </div>
    </div>
  );
}
