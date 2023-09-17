"use client";

import { useEffect, useState } from "react";

import {
  Invoice,
  SenderAddress,
  ClientAddress,
  InvoiceItem,
} from "@/context/app-types";
import FormInput from "@/components/FormInput";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import FormSelect from "@/components/FormSelect";
import { calculateTotal } from "@/utils/calculateTotal";
import { formatToCurrency } from "@/utils/formatToCurrency";
import { useAppContext } from "@/context/app-context";
import { isNumberValid } from "@/utils/validators";

import "./CreateInvoiceForm.css";

// Initialize a new invoice with default values
const initialNewInvoice: Invoice = {
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 1,
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
  items: [
    {
      name: "",
      quantity: 1,
      price: 0,
      total: 0,
      formattedTotal: "$0.00",
    },
  ],
  total: 0,
};

export default function CreateInvoiceForm({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { createInvoice, createDraftInvoice } = useAppContext();
  const [newInvoice, setNewInvoice] = useState(initialNewInvoice);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const invoiceTotal = newInvoice.items.reduce((total, item) => {
      if (typeof item.total === "number") {
        return total + item.total;
      }
      return total;
    }, 0);

    const newInvoiceWithTotal = {
      ...newInvoice,
      total: invoiceTotal,
      status: "pending",
    };

    setNewInvoice(newInvoiceWithTotal);
    createInvoice(newInvoiceWithTotal);
    setIsModalOpen(false);
  };

  const saveInvoiceAsDraft = () => {
    const invoiceTotal = newInvoice.items.reduce((total, item) => {
      if (typeof item.total === "number") {
        return total + item.total;
      }
      return total;
    }, 0);

    const newInvoiceWithTotal = {
      ...newInvoice,
      total: invoiceTotal,
      status: "draft",
    };

    setNewInvoice(newInvoiceWithTotal);
    createDraftInvoice(newInvoiceWithTotal);
    setIsModalOpen(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    // Split the 'name' attribute to access nested properties
    const nameParts = name.split(".");

    if (nameParts.length === 2) {
      // It's a nested property (e.g., senderAddress.street)
      setNewInvoice((prevInvoice) => ({
        ...prevInvoice,
        [nameParts[0]]: {
          ...(prevInvoice[nameParts[0] as keyof Invoice] as
            | SenderAddress
            | ClientAddress),
          [nameParts[1]]: value,
        },
      }));
    } else {
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

    // Custom validation to allow valid currency formats (e.g., 20.25 or 1000)
    const currencyRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

    // Check if the input field is the "Price" field
    if (name.includes("price")) {
      // If the entered value is not a valid currency, don't update the state
      if (!currencyRegex.test(value)) {
        return;
      }
    }

    setNewInvoice((prev) => {
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

    setNewInvoice((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const deleteInvoiceItem = (index: number) => {
    if (index < 0 || index >= newInvoice.items.length) return;

    setNewInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item, idx) => idx !== index),
    }));
  };
  return (
    <div className="fixed left-0 top-0 flex h-full w-full justify-center xl:justify-start bg-black bg-opacity-50 z-50">
      <div className="max-h-full w-full xl:max-w-4xl overflow-y-auto xl:rounded-2xl bg-slate-50 dark:bg-slate-900 xl:ps-24">
        <div className="w-full">
          <form
            onSubmit={handleFormSubmit}
            className="invoice-form mt-14 mb-8 mx-auto px-8"
          >
            <Heading variant="h1" className="mb-8">
              New Invoice
            </Heading>
            {/* BILL FROM */}
            <Heading variant="h3" className="mb-6 text-primary-500">
              Bill From
            </Heading>
            <section className="bill-from mb-10">
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
            <Heading variant="h3" className="mb-6 text-primary-500">
              Bill To
            </Heading>
            <section className="bill-to mb-10">
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
                className="invoice-date mt-6"
                value={newInvoice.paymentDue}
                onChange={(evt) => handleInputChange(evt)}
              />
              {/* Payment terms */}
              <FormSelect
                icon={"arrow-down"}
                label="Payment Terms"
                htmlFor="paymentTerms"
                name="paymentTerms"
                className="payment-terms mt-6"
                value={newInvoice.paymentTerms}
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
                  step="0.01"
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
                    variant="transparent"
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
            <div className="flex gap-3 justify-between mt-12">
              <Button variant="danger" onClick={() => setIsModalOpen(false)}>
                Discard
              </Button>
              <div className="flex gap-3">
                <Button variant="dark" onClick={saveInvoiceAsDraft}>
                  Save as Draft
                </Button>
                <Button type="submit" variant="primary">
                  Save Invoice
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
