"use client";

import Image from "next/image";
import Heading from "./Heading";

import "./NoInvoices.css";

export default function NoInvoices() {
  return (
    <div className="no-invoices">
      <Image
        src="/assets/illustration-empty.svg"
        alt="illustration of no invoices"
        className="no-invoices--image"
        width={300}
        height={200}
      />
      <Heading variant="h1">There is nothing here</Heading>
      <p>
        Create an invoice by clicking the
        <span className="no-invoices--span"> New</span> button and get started
      </p>
    </div>
  );
}
