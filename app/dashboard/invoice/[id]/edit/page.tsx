"use client";

import { useState } from "react";

import {
  Invoice,
  SenderAddress,
  ClientAddress,
  InvoiceItem,
} from "@/context/app-types";
import { calculateTotal } from "@/utils/calculateTotal";
import { formatToCurrency } from "@/utils/formatToCurrency";
import { isNumberValid } from "@/utils/validators";
import { useAppContext } from "@/context/app-context";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";

export default function InvoiceEdit({ params }: { params: { id: string } }) {
  const { state, updateInvoice } = useAppContext();
  const invoice = state.invoices.find(
    (invoice: Invoice) => invoice.id === params.id
  );
  const [updatedInvoice, setUpdatedInvoice] = useState<Invoice>(invoice!);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const invoiceTotal = updatedInvoice.items.reduce((total, item) => {
      if (typeof item.total === "number") {
        return total + item.total;
      }
      return total;
    }, 0);

    const newInvoiceWithTotal = {
      ...updatedInvoice,
      total: invoiceTotal,
    };

    updateInvoice(newInvoiceWithTotal);
    setUpdatedInvoice(newInvoiceWithTotal);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    // Split the 'name' attribute to access nested properties
    const nameParts = name.split(".");

    if (nameParts.length === 2) {
      console.log("It's a nested property");
      console.log({
        [nameParts[0]]: {
          [nameParts[1]]: value,
        },
      });
      // It's a nested property (e.g., senderAddress.street)
      setUpdatedInvoice((prevInvoice) => ({
        ...prevInvoice,
        [nameParts[0]]: {
          ...(prevInvoice[nameParts[0] as keyof Invoice] as
            | SenderAddress
            | ClientAddress
            | InvoiceItem),
          [nameParts[1]]: value,
        },
      }));
    } else {
      // It's a top-level property (e.g., clientName)
      setUpdatedInvoice((prevInvoice) => ({
        ...prevInvoice,
        [name]: value,
      }));
    }
  };

  const handleUpdateInvoiceItems = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    // Custom validation to allow valid currency formats (e.g., 20.25 or 1000)
    const currencyRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

    // Check if the input field is the "Price" field
    if (name.includes("price")) {
      // If the entered value is not a valid currency, don't update the state
      if (!currencyRegex.test(value)) {
        return;
      }
    }

    setUpdatedInvoice((prev) => {
      // Extract the item index from the name
      const indexMatch = name.match(/\d+/);

      if (!indexMatch) {
        // If the index is not found, return the previous state
        return prev;
      }

      const itemIndex = parseInt(indexMatch[0], 10);
      const updateItems = prev.items.map((item, currentIndex) => {
        if (currentIndex === itemIndex) {
          const updatedItem = {
            ...item,
            [name.split(".")[1]]: value,
          };

          // Calculate the total based on the updated item's quantity and price
          const quantity = Number(updatedItem.quantity);
          const price = Number(updatedItem.price);

          if (isNumberValid(quantity) && isNumberValid(price)) {
            const total = calculateTotal(quantity, price);
            const formattedTotal = formatToCurrency(total) || "$0.00";

            return {
              ...updatedItem,
              total: total,
              formattedTotal: formattedTotal,
            };
          } else {
            return updatedItem;
          }
        }
        return item;
      });

      return { ...prev, items: updateItems };
    });
  };

  const addInvoiceItem = () => {
    const newItem: InvoiceItem = {
      name: "",
      quantity: 1,
      price: 0,
      total: 0,
      formattedTotal: "$0.00",
    };

    setUpdatedInvoice((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const deleteInvoiceItem = (index: number) => {
    if (index < 0 || index >= updatedInvoice.items.length) return;

    setUpdatedInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item, idx) => idx !== index),
    }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="invoice-form">
      <Heading variant="h1" className="mb-2">
        Edit Invoice <span className="invoice-details--hash">#</span>
        {params.id}
      </Heading>
      {/* BILL FROM */}
      <Heading variant="h3">Bill From</Heading>
      <section className="bill-from">
        {/* Sender Address */}
        <FormInput
          type="text"
          label="Street Address"
          htmlFor="senderAddress.street"
          name="senderAddress.street"
          className="sender-street"
          value={updatedInvoice.senderAddress.street}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender City  */}
        <FormInput
          type="text"
          label="City"
          htmlFor="senderAddress.city"
          name="senderAddress.city"
          className="sender-city"
          value={updatedInvoice.senderAddress.city}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Postal */}
        <FormInput
          type="text"
          label="Postal Code"
          htmlFor="senderAddress.postCode"
          name="senderAddress.postCode"
          className="sender-postal"
          value={updatedInvoice.senderAddress.postCode}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Country  */}
        <FormInput
          type="text"
          label="Country"
          htmlFor="senderAddress.country"
          name="senderAddress.country"
          className="sender-country"
          value={updatedInvoice.senderAddress.country}
          onChange={(evt) => handleInputChange(evt)}
        />
      </section>

      {/* BILL TO */}
      <Heading variant="h3">Bill To</Heading>
      <section className="bill-to">
        {/* Client Name */}
        <FormInput
          type="text"
          label="Client Name"
          htmlFor="clientName"
          name="clientName"
          className="client-name"
          value={updatedInvoice.clientName}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Client Email */}
        <FormInput
          type="email"
          label="Client Email"
          htmlFor="clientEmail"
          name="clientEmail"
          className="client-email"
          value={updatedInvoice.clientEmail}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender address */}
        <FormInput
          type="text"
          label="Street Address"
          htmlFor="clientAddress.street"
          name="clientAddress.street"
          className="client-street"
          value={updatedInvoice.clientAddress.street}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender City */}
        <FormInput
          type="text"
          label="City"
          htmlFor="clientAddress.city"
          name="clientAddress.city"
          className="client-city"
          value={updatedInvoice.clientAddress.city}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Postal */}
        <FormInput
          type="text"
          label="Postal Code"
          htmlFor="clientAddress.postCode"
          name="clientAddress.postCode"
          className="client-postal"
          value={updatedInvoice.clientAddress.postCode}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Country */}
        <FormInput
          type="text"
          label="Country"
          htmlFor="clientAddress.country"
          name="clientAddress.country"
          className="client-country"
          value={updatedInvoice.clientAddress.country}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Payment Date */}
        <FormInput
          type="date"
          label="Invoice Date"
          htmlFor="paymentDue"
          name="paymentDue"
          className="invoice-date"
          value={updatedInvoice.paymentDue}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Payment terms */}
        <FormSelect
          icon={"arrow-down"}
          label="Payment Terms"
          htmlFor="paymentTerms"
          name="paymentTerms"
          className="payment-terms"
          value={updatedInvoice.paymentTerms}
          onChange={(evt) => handleInputChange(evt)}
          options={[
            { item: "Net 1 Day", value: 1 },
            { item: "Net 7 Days", value: 7 },
            { item: "Net 14 Days", value: 14 },
            { item: "Net 30 Days", value: 30 },
            { item: "Net 60 Days", value: 60 },
          ]}
        />
        {/* Project description */}
        <FormInput
          type="text"
          label="Project Description"
          htmlFor="description"
          name="description"
          className="project-description"
          value={updatedInvoice.description}
          onChange={(evt) => handleInputChange(evt)}
        />
      </section>

      {/* Invoice Items */}
      <Heading variant="h2" className="mb-6">
        Item List
      </Heading>
      {updatedInvoice.items.map((item, index) => (
        <section className="bill-item" key={index}>
          <FormInput
            type="text"
            label="Item Name"
            htmlFor={`items[${index}].name`}
            name={`items[${index}].name`}
            className="item-name"
            value={item.name}
            onChange={(evt) => handleUpdateInvoiceItems(evt)}
          />

          <FormInput
            type="number"
            label="Quantity"
            htmlFor={`items[${index}].quantity`}
            name={`items[${index}].quantity`}
            className="item-quantity"
            value={item.quantity}
            onChange={(evt) => handleUpdateInvoiceItems(evt)}
          />

          <FormInput
            type="number"
            label="Price"
            htmlFor={`items[${index}].price`}
            name={`items[${index}].price`}
            className="item-price"
            value={item.price}
            onChange={(evt) => handleUpdateInvoiceItems(evt)}
          />

          <FormInput
            type="text"
            label="Total"
            htmlFor={`items[${index}].total`}
            name={`items[${index}].total`}
            className="item-total"
            value={item.formattedTotal}
            onChange={(evt) => handleUpdateInvoiceItems(evt)}
            disabled
          />

          <div className="item-delete">
            <Button
              icon="delete"
              onClick={() => deleteInvoiceItem(index)}
            ></Button>
          </div>
        </section>
      ))}

      <div className="bill-item__button">
        <Button variant="edit" onClick={() => addInvoiceItem()}>
          + Add New Item
        </Button>
      </div>
      <div className="flex gap-3 justify-end">
        <Button variant="edit">Cancel</Button>
        <Button type="submit" variant="primary">
          Save Changes
        </Button>
      </div>
    </form>
  );
}
