"use client";

import Link from "next/link";
import Image from "next/image";

import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
import { Invoice } from "@/app/lib/definitions";
import InvoiceBadge from "./InvoiceBadge";
import Heading from "./Heading";
import Button from "./Button";

import "./InvoiceSummary.css";

export default function InvoiceSummary({ invoice }: { invoice: Invoice }) {
  return (
    <>
      {invoice && (
        <Link
          className="invoice-summary__link"
          href={`http://localhost:3000/invoice/${invoice._id}`}
        >
          <div className="invoice-summary">
            <div className="invoice-summary__id">
              <Heading variant="h3">
                <span className="invoice-summary__hash">#</span>
                {invoice._id.substring(0, 7).toUpperCase()}
              </Heading>
            </div>
            <div className="invoice-summary__client-name">
              <p>{invoice.clientName}</p>
            </div>
            <div className="invoice-summary__wrap">
              <div className="invoice-summary__due-date">
                <p>
                  <span className="invoice-summary__due-txt">Due</span>
                  {formatDateToLocal(invoice.paymentDue)}
                </p>
              </div>
              <div className="invoice-summary__total">
                <Heading variant="h3">
                  {formatCurrency(Number(invoice.total))}
                </Heading>
              </div>
            </div>
            <div className="invoice-summary__due-date">
              <p className="text-sm lg:text-base">
                <span className="invoice-summary__due-txt">Due</span>
                {formatDateToLocal(invoice.paymentDue)}
              </p>
            </div>
            <div className="invoice-summary__total">
              <Heading variant="h3">
                {formatCurrency(Number(invoice.total))}
              </Heading>
            </div>
            <div className="invoice-summary__badge">
              <InvoiceBadge status={invoice.status} />
            </div>
            <div className="invoice-summary__arrow">
              <Image
                src="/assets/icon-arrow-right.svg"
                alt="right arrow icon"
                width={7}
                height={10}
                style={{ height: "auto", width: "auto" }}
              />
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
