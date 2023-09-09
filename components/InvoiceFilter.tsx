import React, { useState } from "react";
import Image from "next/image";
import Popover from "./Popover";

import "./InvoiceFilter.css";

export default function InvoiceFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="invoices-filter">
      <button
        className="invoices-filter__btn"
        type="button"
        aria-expanded="false"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
        <div className="invoices-filter__arrow">
          <Image
            src="/assets/icon-arrow-down.svg"
            alt=""
            width="11"
            height="7"
          />
        </div>
      </button>
      {isOpen && <Popover />}
    </div>
  );
}
