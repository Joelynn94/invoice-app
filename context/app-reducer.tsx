import generateID from "@/utils/generateId";
import { Invoice, AppContextAction, AppContextState } from "./app-types";
import { formatDate } from "@/utils/formatDate";

export const appReducer = (
  state: AppContextState,
  action: AppContextAction
) => {
  switch (action.type) {
    case "GET_INVOICES": {
      return { ...state, invoices: action.payload, loading: false };
    }
    case "CREATE_NEW_INVOICE": {
      const newInvoice = action.payload;
      const updateInvoice = {
        ...newInvoice,
        id: generateID(),
        status: "pending",
        createdAt: formatDate(new Date()),
      };

      return {
        ...state,
        invoices: [updateInvoice, ...state.invoices],
        loading: false,
      };
    }
    case "CREATE_DRAFT_INVOICE": {
      const newInvoice = action.payload;
      const updateInvoice = {
        ...newInvoice,
        id: generateID(),
        status: "draft",
        createdAt: formatDate(new Date()),
      };

      return {
        ...state,
        invoices: [updateInvoice, ...state.invoices],
        loading: false,
      };
    }
    case "UPDATE_INVOICE": {
      const updatedInvoice = action.payload;
      const updatedInvoices = state.invoices.map((invoice: Invoice) => {
        return invoice.id === updatedInvoice.id ? updatedInvoice : invoice;
      });

      return { ...state, invoices: updatedInvoices };
    }
    case "DELETE_INVOICE": {
      const invoiceId = action.payload;
      const removedInvoice = state.invoices.filter((invoice: Invoice) => {
        return invoice.id !== invoiceId;
      });

      return { ...state, invoices: removedInvoice };
    }
    case "ADD_INVOICE_ITEM": {
      const invoiceId = action.payload;
      const newItem = {
        name: "",
        quantity: 0,
        price: 0,
        total: "0.00",
      };
      const updatedInvoices = state.invoices.map((invoice) =>
        invoice.id === invoiceId
          ? { ...invoice, items: [...invoice.items, newItem] }
          : invoice
      );

      return { ...state, invoices: updatedInvoices };
    }
    case "UPDATE_INVOICE_ITEM": {
      const { invoiceId, itemIndex, updatedItem } = action.payload;
      // Find the invoice to which you want to update the item
      const updatedInvoices = state.invoices.map((invoice) => {
        if (invoice.id === invoiceId) {
          // Check if the itemIndex is within the valid range
          if (itemIndex >= 0 && itemIndex < invoice.items.length) {
            // Create a copy of the items array and update the specific item at itemIndex
            const updatedItems = [...invoice.items];
            updatedItems[itemIndex] = updatedItem;

            return { ...invoice, items: updatedItems };
          }
        }
        return invoice;
      });

      return { ...state, invoices: updatedInvoices };
    }
    case "DELETE_INVOICE_ITEM": {
      const { invoiceId, itemIndex } = action.payload;
      // Find the invoice to which you want to delete the item
      const updatedInvoices = state.invoices.map((invoice) => {
        if (invoice.id === invoiceId) {
          // Check if the itemIndex is within the valid range
          if (itemIndex >= 0 && itemIndex < invoice.items.length) {
            // Create a copy of the items array and remove the item at itemIndex
            const updatedItems = [...invoice.items];
            updatedItems.splice(itemIndex, 1);

            return { ...invoice, items: updatedItems };
          }
        }
        return invoice;
      });

      return { ...state, invoices: updatedInvoices };
    }
    case "FILTER_STATUS": {
      const filteredStatus = action.payload;
      const filteredInvoicesByStatus = state.invoices.filter((invoice) =>
        filteredStatus.includes(invoice.status)
      );
      return { ...state, filtered: filteredInvoicesByStatus };
    }
    case "MARK_AS_PENDING": {
      const invoiceId = action.payload;
      const updatedInvoice = state.invoices.map((invoice: Invoice) => {
        return invoice.id === invoiceId
          ? { ...invoice, status: "pending" }
          : invoice;
      });

      return { ...state, invoices: updatedInvoice };
    }
    case "MARK_AS_PAID": {
      const invoiceId = action.payload;
      const updatedInvoice = state.invoices.map((invoice: Invoice) => {
        return invoice.id === invoiceId
          ? { ...invoice, status: "paid" }
          : invoice;
      });
      return { ...state, invoices: updatedInvoice };
    }
    default: {
      return state;
    }
  }
};
