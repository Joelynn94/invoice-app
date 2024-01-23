"use client";

import React, { useEffect, useState, MouseEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import "./Popover.css";

export default function Popover() {
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleCheckbox = (event: MouseEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;
    const params = new URLSearchParams(searchParams);
    const statusFilter = params.get("status") || [];

    if (checked && !params.has("status", name)) {
      params.append("status", name);
    } else if (checked && params.has("status", name)) {
      return;
    } else if (!checked && params.has("status", name)) {
      params.delete("status", name);
    }
    console.log("statusFilter", statusFilter);

    // Update the URL without navigating
    // router.replace(`${pathname}?${params.toString()}`);
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
