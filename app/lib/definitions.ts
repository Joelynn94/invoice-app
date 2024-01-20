export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type BillFrom = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type BillTo = {
  name: string;
  email: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type Invoice = {
  id: string;
  status: string;
  description: string;
  createdAt: string;
  paymentDue: string;
  paymentTerms: number;
  billFrom: BillFrom;
  billTo: BillTo;
  items: Item[];
  total: number;
};

export type Invoices = Invoice[];
