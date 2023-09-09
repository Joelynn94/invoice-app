import React from "react";
import Link from "next/link";

import { useAppContext } from "../context/app-context";
import InvoiceFilter from "./InvoiceFilter";
import Heading from "./Heading";
import Button from "./Button";

import "./Dashboard.css";

export default function DashboardBar() {
  const { state } = useAppContext();

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
      <Link href="/dashboard/invoice/create" className="">
        <Button type="button" variant="primary" size="lg" icon="plus">
          New
        </Button>
      </Link>
    </div>
  );
}
