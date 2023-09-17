import React, { useState } from "react";
import Link from "next/link";

import { useAppContext } from "../context/app-context";
import InvoiceFilter from "./InvoiceFilter";
import Heading from "./Heading";
import Button from "./Button";

import "./Dashboard.css";
import CreateInvoiceForm from "./CreateInvoiceForm";

export default function DashboardBar() {
  const { state } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="invoices-bar">
      <div className="invoices-total">
        <Heading variant="h1">Invoices</Heading>
        <p className="invoices-total__sub">
          {state.filtered.length === 0
            ? `${state.invoices.length} total invoices`
            : state.filtered.length === 1
            ? `${state.filtered.length} invoice`
            : state.filtered.length > 1
            ? `${state.filtered.length} total invoices`
            : "No invoices"}
        </p>
      </div>
      <InvoiceFilter />

      <Button
        type="button"
        variant="primary"
        size="lg"
        icon="plus"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        New
      </Button>

      {isModalOpen && (
        <CreateInvoiceForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
