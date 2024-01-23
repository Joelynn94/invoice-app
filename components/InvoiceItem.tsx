"use client";

import { formatCurrency } from "@/app/lib/utils";
import { Invoice } from "@/app/lib/definitions";
import Heading from "./Heading";

import "./InvoiceItem.css";

export default function InvoiceItem({ invoice }: { invoice: Invoice }) {
  return (
    <>
      <div className="invoice-details__item--breakdown-lg-headings">
        <Heading variant="h3" className="justify-start">
          Item Name
        </Heading>
        <Heading variant="h3" className="justify-center">
          QTY.
        </Heading>
        <Heading variant="h3">Price</Heading>
        <Heading variant="h3">Total</Heading>
      </div>
      {invoice.items.map((item, index) => (
        <div className="invoice-details__item" key={index}>
          <div className="invoice-details__item--breakdown">
            <Heading variant="h3">{item.name}</Heading>
            <p className="invoice-details--alt-txt">{`${
              item.quantity
            } x ${formatCurrency(parseFloat(item.price))}`}</p>
          </div>
          <div className="invoice-details__item--total">
            <Heading variant="h3">
              {formatCurrency(parseFloat(item.total))}
            </Heading>
          </div>
          <div className="invoice-details__item--breakdown-lg">
            <p className="invoice-details--alt-txt justify-start font-bold">{`${item.name}`}</p>
            <p className="invoice-details--alt-txt justify-center font-bold">{`${item.quantity}`}</p>
            <p className="invoice-details--alt-txt justify-end font-bold">
              {formatCurrency(parseFloat(item.price))}
            </p>
            <p className="justify-end font-bold">
              {formatCurrency(parseFloat(item.total))}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
