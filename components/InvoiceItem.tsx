import { formatToCurrency } from "@/utils/formatToCurrency";
import { Invoice } from "@/context/app-types";
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
            <Heading variant="h3">{item.itemName}</Heading>
            <p className="invoice-details--alt-txt">{`${
              item.quantity
            } x ${formatToCurrency(item.price)}`}</p>
          </div>
          <div className="invoice-details__item--total">
            <Heading variant="h3">{formatToCurrency(item.total)}</Heading>
          </div>
          <div className="invoice-details__item--breakdown-lg">
            <p className="invoice-details--alt-txt justify-start font-bold">{`${item.itemName}`}</p>
            <p className="invoice-details--alt-txt justify-center font-bold">{`${item.quantity}`}</p>
            <p className="invoice-details--alt-txt justify-end font-bold">
              {formatToCurrency(item.price)}
            </p>
            <p className="justify-end font-bold">
              {formatToCurrency(item.total)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
