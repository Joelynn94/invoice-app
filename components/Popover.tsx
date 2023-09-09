import React, { useState, MouseEvent } from "react";
import { useAppContext } from "@/context/app-context";

import "./Popover.css";

export default function Popover() {
  const { filterInvoices } = useAppContext();
  const [statusFilter, setStatusFilter] = useState<string[]>([]);

  const handleCheckbox = (event: MouseEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;

    const newCheckedArray = [...statusFilter];
    let index;

    if (checked) {
      // check if the filter already exists in the tracking array
      index = newCheckedArray.indexOf(name);
      if (index === -1) {
        //if it doesn’t, add it.
        newCheckedArray.push(name);
      }
      // update state
      setStatusFilter(newCheckedArray);
      filterInvoices(newCheckedArray);
      console.log(newCheckedArray);
    } else {
      // get the position of the item in the array
      index = newCheckedArray.indexOf(name);
      // remove the item if the checkbox is not checked
      newCheckedArray.splice(index, 1);
      // update state
      setStatusFilter(newCheckedArray);
      filterInvoices(newCheckedArray);
      console.log(newCheckedArray);
    }
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
