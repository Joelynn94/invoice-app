"use client";

import React, { useState } from "react";

import CreateInvoiceForm from "./CreateInvoiceForm";
// import { useAppContext } from "../context/app-context";
import { Invoices } from "@/app/lib/definitions";
import InvoiceFilter from "./InvoiceFilter";
import Heading from "./Heading";
import Button from "./Button";

import "./Dashboard.css";

export default function DashboardBar({ invoices }: { invoices: Invoices }) {
  // const { state } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="invoices-bar">
      <div className="invoices-total">
        <Heading variant="h1">Invoices</Heading>
        <p className="invoices-total__sub">
          {invoices.length === 0
            ? `No Invoices`
            : invoices.length === 1
              ? `${invoices.length} invoice`
              : invoices.length > 1
                ? `${invoices.length} total invoices`
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
