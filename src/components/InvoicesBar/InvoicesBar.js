import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import InvoiceFilter from "../InvoiceFilter/InvoiceFilter";
import InvoicesTotal from "../InvoicesTotal/InvoicesTotal";

import "./InvoicesBar.scss";

const InvoicesBar = ({ invoices }) => {
  return (
    <div className="invoices-bar">
      <InvoicesTotal invoices={invoices} />
      <InvoiceFilter invoices={invoices} />
      <Link to="/create" className="">
        <Button type="button" variant="primary" size="lg" icon="plus">
          New
        </Button>
      </Link>
    </div>
  );
};

export default InvoicesBar;
