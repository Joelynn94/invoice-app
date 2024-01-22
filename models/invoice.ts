import mongoose, { Document, Schema } from "mongoose";

export interface IInvoice extends Document {
  id: string;
  createdAt: Date;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    total: number;
  }>;
  total: number;
}

const AddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
  country: { type: String, required: true },
});

const InvoiceItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: String, required: true },
  total: { type: String, required: true },
});

const InvoiceSchema: Schema = new Schema(
  {
    createdAt: { type: Date, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    paymentDue: { type: Date, required: true },
    paymentTerms: { type: Number, required: true },
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    clientAddress: { type: AddressSchema, required: true },
    senderAddress: { type: AddressSchema, required: true },
    items: [
      {
        type: InvoiceItemSchema,
        required: true,
      },
    ],
    total: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Invoice =
  mongoose.models.Invoice<IInvoice> ||
  mongoose.model<IInvoice>("Invoice", InvoiceSchema);

export default Invoice;
