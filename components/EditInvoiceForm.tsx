"use client";

import { useState } from "react";

import { SenderAddress, ClientAddress, InvoiceItem } from "@/context/app-types";
import { useAppContext } from "@/context/app-context";
import {
  calculateTotal,
  formatCurrency,
  formatDateToLocal,
} from "@/app/lib/utils";
import { useFormState, useFormStatus } from "react-dom";

import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { Invoice } from "@/app/lib/definitions";

import "./EditInvoiceForm.css";
import FormItem from "@/app/ui/FormItem";
import FormSelect from "@/app/ui/FormSelect";
import { updateInvoice } from "@/app/lib/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="primary" aria-disabled={pending}>
      {pending ? "Saving..." : "Save Changes"}
    </Button>
  );
}

export default function EditInvoiceForm({
  isModalOpen,
  setIsModalOpen,
  invoice,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  invoice: Invoice;
}) {
  const [state, formAction] = useFormState(updateInvoice, initialState);

  const date = new Date(invoice.paymentDue);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div className="fixed left-0 top-0 flex h-full w-full justify-center lg:justify-start bg-black bg-opacity-50 z-50">
      <div className="max-h-full w-full lg:max-w-4xl overflow-y-auto lg:rounded-2xl bg-slate-50 dark:bg-slate-900 lg:ps-24">
        <div className="w-full">
          <form
            action={formAction}
            className="invoice-form mt-14 mb-8 mx-auto px-8"
          >
            <input type="hidden" name="_id" value={invoice._id} />
            <div className="flex items-center justify-between mb-2">
              <Heading variant="h1">
                Edit Invoice <span className="invoice-details--hash">#</span>
                {invoice._id.substring(0, 7).toUpperCase()}
              </Heading>
              <Button variant="light" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
            {/* BILL FROM */}
            <Heading variant="h3" className="mb-6 text-primary-500">
              Bill From
            </Heading>
            <section className="bill-from mb-10">
              {/* Sender Address */}
              <FormItem
                type="text"
                label="Street Address"
                htmlFor="senderAddress.street"
                name="senderAddress.street"
                className="sender-street"
                defaultValue={invoice.senderAddress.street}
              />
              {/* Sender City  */}
              <FormItem
                type="text"
                label="City"
                htmlFor="senderAddress.city"
                name="senderAddress.city"
                className="sender-city"
                defaultValue={invoice.senderAddress.city}
              />
              {/* Sender Postal */}
              <FormItem
                type="text"
                label="Postal Code"
                htmlFor="senderAddress.postCode"
                name="senderAddress.postCode"
                className="sender-postal"
                defaultValue={invoice.senderAddress.postCode}
              />
              {/* Sender Country  */}
              <FormItem
                type="text"
                label="Country"
                htmlFor="senderAddress.country"
                name="senderAddress.country"
                className="sender-country"
                defaultValue={invoice.senderAddress.country}
              />
            </section>

            {/* BILL TO */}
            <Heading variant="h3" className="mb-6 text-primary-500">
              Bill To
            </Heading>
            <section className="bill-to mb-10">
              {/* Client Name */}
              <FormItem
                type="text"
                label="Client Name"
                htmlFor="clientName"
                name="clientName"
                className="client-name"
                defaultValue={invoice.clientName}
              />
              {/* Client Email */}
              <FormItem
                type="email"
                label="Client Email"
                htmlFor="clientEmail"
                name="clientEmail"
                className="client-email"
                defaultValue={invoice.clientEmail}
              />
              {/* Sender address */}
              <FormItem
                type="text"
                label="Street Address"
                htmlFor="clientAddress.street"
                name="clientAddress.street"
                className="client-street"
                defaultValue={invoice.clientAddress.street}
              />
              {/* Sender City */}
              <FormItem
                type="text"
                label="City"
                htmlFor="clientAddress.city"
                name="clientAddress.city"
                className="client-city"
                defaultValue={invoice.clientAddress.city}
              />
              {/* Sender Postal */}
              <FormItem
                type="text"
                label="Postal Code"
                htmlFor="clientAddress.postCode"
                name="clientAddress.postCode"
                className="client-postal"
                defaultValue={invoice.clientAddress.postCode}
              />
              {/* Sender Country */}
              <FormItem
                type="text"
                label="Country"
                htmlFor="clientAddress.country"
                name="clientAddress.country"
                className="client-country"
                defaultValue={invoice.clientAddress.country}
              />
              {/* Payment Date */}
              <FormItem
                type="date"
                label="Invoice Date"
                htmlFor="paymentDue"
                name="paymentDue"
                className="invoice-date mt-6"
                defaultValue={formattedDate}
              />
              {/* Payment terms */}
              <FormSelect
                icon="arrow-down"
                label="Payment Terms"
                htmlFor="paymentTerms"
                name="paymentTerms"
                className="payment-terms mt-6"
                defaultValue={String(invoice.paymentTerms)}
                options={[
                  { item: "Net 1 Day", value: 1 },
                  { item: "Net 7 Days", value: 7 },
                  { item: "Net 14 Days", value: 14 },
                  { item: "Net 30 Days", value: 30 },
                  { item: "Net 60 Days", value: 60 },
                ]}
              />
              {/* Project description */}
              <FormItem
                type="text"
                label="Project Description"
                htmlFor="description"
                name="description"
                className="project-description"
                defaultValue={invoice.description}
              />
            </section>

            {/* Invoice Items */}
            <Heading variant="h2" className="mb-6">
              Item List
            </Heading>
            {invoice.items.map((item, index) => (
              <section className="bill-item" key={index}>
                <FormItem
                  type="text"
                  label="Item Name"
                  htmlFor={`items[${index}].name`}
                  name={`items[${index}].name`}
                  className="item-name"
                  defaultValue={item.name}
                />

                <FormItem
                  type="number"
                  label="Quantity"
                  htmlFor={`items[${index}].quantity`}
                  name={`items[${index}].quantity`}
                  className="item-quantity"
                  defaultValue={`${item.quantity}`}
                />

                <FormItem
                  type="number"
                  label="Price"
                  htmlFor={`items[${index}].price`}
                  name={`items[${index}].price`}
                  className="item-price"
                  defaultValue={item.price}
                />

                <FormItem
                  type="text"
                  label="Total"
                  htmlFor={`items[${index}].total`}
                  name={`items[${index}].total`}
                  className="item-total"
                  defaultValue={item.total}
                  disabled
                />

                <div className="item-delete">
                  <Button icon="delete" variant="transparent"></Button>
                </div>
              </section>
            ))}

            <div className="bill-item__button">
              <Button variant="edit">+ Add New Item</Button>
            </div>
            <div className="flex gap-3 justify-end mt-12">
              <Button
                variant="edit"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                Cancel
              </Button>
              <SubmitButton />
              <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
