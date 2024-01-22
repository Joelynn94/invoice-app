"use client";

import React, { useEffect, useState, MouseEvent } from "react";
import "./Popover.css";

const fetchInvoices = async (statusFilter: string[]) => {
  const res = await fetch(`/api/invoices?status=${statusFilter.join(",")}`, {
    cache: "no-store",
  });
  const invoices = await res.json();
  // Update your state or context with the fetched invoices
  return invoices;
};

export default function Popover() {
  const [statusFilter, setStatusFilter] = useState<string[]>([]);

  useEffect(() => {
    fetchInvoices(statusFilter);
  }, [statusFilter]);

  const handleCheckbox = (event: MouseEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;

    let newStatusFilter;
    if (checked) {
      newStatusFilter = [...statusFilter, name];
    } else {
      newStatusFilter = statusFilter.filter((status) => status !== name);
    }

    setStatusFilter(newStatusFilter);

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("status", newStatusFilter.join(","));
    history.pushState({}, "", newUrl.toString());

    // Fetch the filtered invoices from the server
    fetchInvoices(newStatusFilter);
  };

  return (
    <div className="invoices-popover">
      <ul>
        <li>
          <label className="invoices-popover__label">
            <input
              className="invoices-popover__checkbox"
              type="checkbox"
              name="draft"
              id="draft"
              value={statusFilter}
              onClick={handleCheckbox}
            />
            <span className="invoices-popover__checkmark"></span>
            <div>
              <p>Draft</p>
            </div>
          </label>
        </li>
        <li>
          <label className="invoices-popover__label">
            <input
              className="invoices-popover__checkbox"
              type="checkbox"
              name="pending"
              id="pending"
              value={statusFilter}
              onClick={handleCheckbox}
            />
            <span className="invoices-popover__checkmark"></span>
            <div>
              <p>Pending</p>
            </div>
          </label>
        </li>
        <li>
          <label className="invoices-popover__label">
            <input
              className="invoices-popover__checkbox"
              type="checkbox"
              name="paid"
              id="paid"
              value={statusFilter}
              onClick={handleCheckbox}
            />
            <span className="invoices-popover__checkmark"></span>
            <div>
              <p>Paid</p>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}
