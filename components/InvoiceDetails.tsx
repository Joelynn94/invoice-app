"use client";

import { formatDate } from "@/utils/formatDate";
import { formatToCurrency } from "@/utils/formatToCurrency";
import { Invoice } from "@/context/app-types";
import Heading from "./Heading";
import InvoiceItem from "./InvoiceItem";

import "./InvoiceDetails.css";

export default function InvoiceDetails({ invoice }: { invoice: Invoice }) {
  return (
    <div className="invoice-details">
      <div className="invoice-details__top-grid">
        <div>
          <Heading variant="h3" className="mb-2">
            <span className="invoice-details--hash">#</span>
            {invoice.id}
          </Heading>
          <Heading
            className="invoice-details--alt-txt invoice-details--desc font-medium"
            variant="h3"
          >
            {invoice.description}
          </Heading>
        </div>
        <div className="invoice-details__address">
          <address className="invoice-details--alt-txt text-right">
            <p>{invoice.senderAddress.street}</p>
            <p>{invoice.senderAddress.city}</p>
            <p>{invoice.senderAddress.postCode}</p>
            <p>{invoice.senderAddress.country}</p>
          </address>
        </div>
      </div>
      <div className="invoice-details__detail-grid">
        <div className="invoice-details__dates">
          <div className="invoice-details__date">
            <Heading
              variant="h3"
              className="invoice-details--alt-txt font-medium"
            >
              Invoice Date
            </Heading>
            <Heading variant="h2" className="invoice-details--created-at">
              {formatDate(invoice.createdAt)}
            </Heading>
          </div>
          <div className="invoice-details__payment-date">
            <Heading
              variant="h3"
              className="invoice-details--alt-txt font-medium"
            >
              Payment Due
            </Heading>
            <Heading variant="h2" className="invoice-details--payment-due">
              {formatDate(invoice.paymentDue)}
            </Heading>
          </div>
        </div>
        <div className="invoice-details__bill-to">
          <Heading
            variant="h3"
            className="invoice-details--alt-txt font-medium"
          >
            Bill To
          </Heading>
          <Heading variant="h2" className="invoice-details--client-name">
            {invoice.clientName}
          </Heading>
          <address className="invoice-details--alt-txt">
            <p>{invoice.clientAddress.street}</p>
            <p>{invoice.clientAddress.city}</p>
            <p>{invoice.clientAddress.postCode}</p>
            <p>{invoice.clientAddress.country}</p>
          </address>
        </div>
        <div className="invoice-details__sent-to">
          <Heading
            variant="h3"
            className="invoice-details--alt-txt font-medium"
          >
            Sent to
          </Heading>
          <Heading variant="h2" className="invoice-details--client-email">
            {invoice.clientEmail}
          </Heading>
        </div>
      </div>

      <div className="invoice-details__items">
        <InvoiceItem invoice={invoice} key={invoice.id} />
      </div>
      <div className="invoice-details__grand-total">
        <Heading variant="h3" className="invoice-details--alt-txt">
          Grand Total
        </Heading>
        <Heading variant="h3" className="invoice-details--invoice-total">
          {formatToCurrency(invoice.total)}
        </Heading>
      </div>
    </div>
  );
}
