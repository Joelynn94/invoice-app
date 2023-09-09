"use client";

import { useState } from "react";

import {
  Invoice,
  SenderAddress,
  ClientAddress,
  InvoiceItem,
} from "@/context/app-types";
import generateID from "@/app/utils/generateId";
import FormInput from "@/components/FormInput";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import FormSelect from "@/components/FormSelect";

export default function InvoiceCreate() {
  // Initialize a new invoice with default values
  const initialNewInvoice: Invoice = {
    id: "", // You can generate a unique ID for the invoice
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
    status: "draft",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [],
    total: 0,
  };
  const [newInvoice, setNewInvoice] = useState(initialNewInvoice);

  const onCreateInvoice = (newInvoice: Invoice) => {
    console.log("Creating invoice...");
    console.log(newInvoice);
  };

  const addInvoiceId = (invoice: Invoice) => {
    return {
      ...invoice,
      id: generateID(),
    };
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedInvoice = addInvoiceId(newInvoice);
    onCreateInvoice(updatedInvoice);
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
      setNewInvoice((prevInvoice) => ({
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
      console.log("It's a top-level property");
      console.log({
        [name]: value,
      });
      // It's a top-level property (e.g., clientName)
      setNewInvoice((prevInvoice) => ({
        ...prevInvoice,
        [name]: value,
      }));
    }
  };

  const handleUpdateInvoiceItems = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setNewInvoice((prev) => ({
      ...prev,
      items: prev.items.map((item, index) => {
        if (name.includes(index.toString())) {
          return {
            ...item,
            [name.split(".")[1]]: value,
          };
        }
        return item;
      }),
    }));
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      itemName: "",
      quantity: 0,
      price: 0,
      total: 0,
    };

    setNewInvoice((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const deleteItem = (index: number) => {
    setNewInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item, idx) => idx !== index),
    }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="invoice-form">
      <Heading variant="h1">New Invoice</Heading>
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
          value={newInvoice.senderAddress.street}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender City  */}
        <FormInput
          type="text"
          label="City"
          htmlFor="senderAddress.city"
          name="senderAddress.city"
          className="sender-city"
          value={newInvoice.senderAddress.city}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Postal */}
        <FormInput
          type="text"
          label="Postal Code"
          htmlFor="senderAddress.postCode"
          name="senderAddress.postCode"
          className="sender-postal"
          value={newInvoice.senderAddress.postCode}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Country  */}
        <FormInput
          type="text"
          label="Country"
          htmlFor="senderAddress.country"
          name="senderAddress.country"
          className="sender-country"
          value={newInvoice.senderAddress.country}
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
          value={newInvoice.clientName}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Client Email */}
        <FormInput
          type="email"
          label="Client Email"
          htmlFor="clientEmail"
          name="clientEmail"
          className="client-email"
          value={newInvoice.clientEmail}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender address */}
        <FormInput
          type="text"
          label="Street Address"
          htmlFor="clientAddress.street"
          name="clientAddress.street"
          className="client-street"
          value={newInvoice.clientAddress.street}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender City */}
        <FormInput
          type="text"
          label="City"
          htmlFor="clientAddress.city"
          name="clientAddress.city"
          className="client-city"
          value={newInvoice.clientAddress.city}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Postal */}
        <FormInput
          type="text"
          label="Postal Code"
          htmlFor="clientAddress.postCode"
          name="clientAddress.postCode"
          className="client-postal"
          value={newInvoice.clientAddress.postCode}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Sender Country */}
        <FormInput
          type="text"
          label="Country"
          htmlFor="clientAddress.country"
          name="clientAddress.country"
          className="client-country"
          value={newInvoice.clientAddress.country}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Payment Date */}
        <FormInput
          type="date"
          label="Invoice Date"
          htmlFor="paymentDue"
          name="paymentDue"
          className="invoice-date"
          value={newInvoice.paymentDue}
          onChange={(evt) => handleInputChange(evt)}
        />
        {/* Payment terms */}
        <FormSelect
          icon={"arrow-down"}
          label="Payment Terms"
          htmlFor="paymentTerms"
          name="paymentTerms"
          className="payment-terms"
          value={newInvoice.paymentTerms}
          onChange={(evt) => handleInputChange(evt)}
          options={[
            { item: "Net 1 Day", value: "1" },
            { item: "Net 7 Days", value: "7" },
            { item: "Net 14 Days", value: "14" },
            { item: "Net 30 Days", value: "30" },
            { item: "Net 60 Days", value: "60" },
          ]}
        />
        {/* Project description */}
        <FormInput
          type="text"
          label="Project Description"
          htmlFor="description"
          name="description"
          className="project-description"
          value={newInvoice.description}
          onChange={(evt) => handleInputChange(evt)}
        />
      </section>

      {/* Invoice Items */}
      <Heading variant="h2" className="mb-6">
        Item List
      </Heading>
      {newInvoice.items.map((item, index) => (
        <section className="bill-item" key={index}>
          <FormInput
            type="text"
            label="Item Name"
            htmlFor={`items[${index}].itemName`}
            name={`items[${index}].itemName`}
            className="item-name"
            value={item.itemName}
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
            value={item.total}
            onChange={(evt) => handleUpdateInvoiceItems(evt)}
            disabled
          />

          <div className="item-delete">
            <Button icon="delete" onClick={() => deleteItem(index)}></Button>
          </div>
        </section>
      ))}

      <div className="bill-item__button">
        <Button variant="edit" onClick={() => addItem()}>
          + Add New Item
        </Button>
      </div>
      <div className="flex gap-3 justify-end">
        <Button variant="edit">Cancel</Button>
        <Button type="submit" variant="primary">
          Save Invoice
        </Button>
      </div>
    </form>
  );
}
