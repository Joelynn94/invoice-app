export type Item = {
  _id: string;
  name: string;
  quantity: number;
  price: string;
  total: string;
};

export type Address = {
  _id: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Invoice = {
  _id: string;
  createdAt: string;
  status: string;
  description: string;
  paymentDue: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: string;
};

export type Invoices = Invoice[];
