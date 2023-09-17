"use client";

import { useState } from "react";

import { useAppContext } from "@/context/app-context";
import { Invoice } from "@/context/app-types";
import InvoiceBadge from "./InvoiceBadge";
import Button from "./Button";

import "./InvoiceStatus.css";
import EditInvoiceForm from "./EditInvoiceForm";
import ConfirmModal from "./ConfirmModal";

export default function InvoiceStatus({ invoice }: { invoice: Invoice }) {
  const { markInvoicePaid, markInvoicePending, deleteInvoice } =
    useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onDeleteClick = () => {
    deleteInvoice(invoice.id);
    setIsModalOpen(false);

    // Redirect to dashboard after deleting invoice
    window.location.href = "/dashboard";
  };

  return (
    <>
      <div className="status-card">
        <p className="status-card__status-text">Status</p>
        <InvoiceBadge status={invoice.status} />
        <div className="invoice-view-buttons">
          <Button variant="edit" onClick={() => setIsModalOpen(!isModalOpen)}>
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
          >
            Delete
          </Button>
          {invoice.status === "pending" && (
            <Button
              variant="primary"
              onClick={() => markInvoicePaid(invoice.id)}
            >
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
      {isDeleteModalOpen && (
        <ConfirmModal
          invoice={invoice}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          onDeleteClick={onDeleteClick}
        />
      )}
      {isModalOpen && (
        <EditInvoiceForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          invoice={invoice}
        />
      )}
    </>
  );
}
