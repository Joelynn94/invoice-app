import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../../components/Button/Button";

import "./InvoiceViewButtons.scss";

const InvoiceViewButtons = ({ invoice, ...otherProps }) => {
  const history = useHistory();
  const { markAsPaid, deleteInvoice } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const onDeleteClick = () => {
    deleteInvoice(invoice.id);
    history.push("/");
  };

  return (
    <div className="invoice-view-buttons" {...otherProps}>
      <Button variant={theme === dark ? "edit-dark" : "edit-light"}>
        Edit
      </Button>
      <Button variant={"danger"} onClick={onDeleteClick}>
        Delete
      </Button>
      <Button variant={"primary"} onClick={() => markAsPaid(invoice.id)}>
        Mark as Paid
      </Button>
    </div>
  );
};

export default InvoiceViewButtons;
