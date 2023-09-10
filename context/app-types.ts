export interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface ClientAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
  formattedTotal: string;
}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: SenderAddress;
  clientAddress: ClientAddress;
  items: InvoiceItem[];
  total: number;
}

export interface AppContextState {
  invoices: Invoice[];
  filtered: Invoice[];
  loading: boolean;
}

export type AppContextAction =
  | { type: "GET_INVOICES"; payload: Invoice[] }
  | { type: "CREATE_NEW_INVOICE"; payload: Invoice }
  | { type: "CREATE_DRAFT_INVOICE"; payload: Invoice }
  | { type: "DELETE_INVOICE"; payload: string }
  | { type: "EDIT_INVOICE"; payload: Invoice }
  | { type: "ADD_INVOICE_ITEM"; payload: string }
  | {
      type: "UPDATE_INVOICE_ITEM";
      payload: {
        invoiceId: string;
        itemIndex: number;
        updatedItem: InvoiceItem;
      };
    }
  | {
      type: "DELETE_INVOICE_ITEM";
      payload: { invoiceId: string; itemIndex: number };
    }
  | { type: "FILTER_STATUS"; payload: string[] }
  | { type: "MARK_AS_PAID"; payload: string }
  | { type: "MARK_AS_PENDING"; payload: string };

export interface AppContextWithActions {
  state: AppContextState;
  getInvoices: (invoices: Invoice[]) => void;
  createInvoice: (invoice: Invoice) => void;
  createDraftInvoice: (invoice: Invoice) => void;
  editInvoice: (invoice: Invoice) => void;
  addInvoiceItem: (id: string) => void;
  updateInvoiceItem: (
    invoiceId: string,
    itemIndex: number,
    updatedItem: InvoiceItem
  ) => void;
  deleteInvoiceItem: (invoiceId: string, itemIndex: number) => void;
  filterInvoices: (status: string[]) => void;
  markInvoicePaid: (id: string) => void;
  markInvoicePending: (id: string) => void;
  deleteInvoice: (id: string) => void;
}
