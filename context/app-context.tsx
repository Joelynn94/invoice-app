"use client";

import {
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";

import {
  Invoice,
  InvoiceItem,
  AppContextState,
  AppContextAction,
  AppContextWithActions,
} from "./app-types";
import { appReducer } from "./app-reducer";

const initialState: AppContextState = {
  invoices: [
    {
      id: "RT3080",
      createdAt: "2021-08-18",
      paymentDue: "2021-08-19",
      description: "Re-branding",
      paymentTerms: 1,
      clientName: "Jensen Huang",
      clientEmail: "jensenh@mail.com",
      status: "paid",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "106 Kendell Street",
        city: "Sharrington",
        postCode: "NR24 5WQ",
        country: "United Kingdom",
      },
      items: [
        {
          name: "Brand Guidelines",
          quantity: 1,
          price: 1800.9,
          total: 1800.9,
          formattedTotal: "$1,800.90",
        },
      ],
      total: 1800.9,
    },
    {
      id: "XM9141",
      createdAt: "2021-08-21",
      paymentDue: "2021-09-20",
      description: "Graphic Design",
      paymentTerms: 30,
      clientName: "Alex Grim",
      clientEmail: "alexgrim@mail.com",
      status: "pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "84 Church Way",
        city: "Bradford",
        postCode: "BD1 9PB",
        country: "United Kingdom",
      },
      items: [
        {
          name: "Banner Design",
          quantity: 1,
          price: 156.0,
          total: 156.0,
          formattedTotal: "$156.00",
        },
        {
          name: "Email Design",
          quantity: 2,
          price: 200.0,
          total: 400.0,
          formattedTotal: "$400.00",
        },
      ],
      total: 556.0,
    },
    {
      id: "RG0314",
      createdAt: "2021-09-24",
      paymentDue: "2021-10-01",
      description: "Website Redesign",
      paymentTerms: 7,
      clientName: "John Morrison",
      clientEmail: "jm@myco.com",
      status: "paid",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "79 Dover Road",
        city: "Westhall",
        postCode: "IP19 3PF",
        country: "United Kingdom",
      },
      items: [
        {
          name: "Website Redesign",
          quantity: 1,
          price: 14002.33,
          total: 14002.33,
          formattedTotal: "$14,002.33",
        },
      ],
      total: 14002.33,
    },
    {
      id: "RT2080",
      createdAt: "2021-10-11",
      paymentDue: "2021-10-12",
      description: "Logo Concept",
      paymentTerms: 1,
      clientName: "Alysa Werner",
      clientEmail: "alysa@email.co.uk",
      status: "pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "63 Warwick Road",
        city: "Carlisle",
        postCode: "CA20 2TG",
        country: "United Kingdom",
      },
      items: [
        {
          name: "Logo Sketches",
          quantity: 1,
          price: 102.04,
          total: 102.04,
          formattedTotal: "$102.04",
        },
      ],
      total: 102.04,
    },
    {
      id: "AA1449",
      createdAt: "2021-10-7",
      paymentDue: "2021-10-14",
      description: "Re-branding",
      paymentTerms: 7,
      clientName: "Mellisa Clarke",
      clientEmail: "mellisa.clarke@example.com",
      status: "pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "46 Abbey Row",
        city: "Cambridge",
        postCode: "CB5 6EG",
        country: "United Kingdom",
      },
      items: [
        {
          name: "New Logo",
          quantity: 1,
          price: 1532.33,
          total: 1532.33,
          formattedTotal: "$1,532.33",
        },
        {
          name: "Brand Guidelines",
          quantity: 1,
          price: 2500.0,
          total: 2500.0,
          formattedTotal: "$2,500.00",
        },
      ],
      total: 4032.33,
    },
    {
      id: "TY9141",
      createdAt: "2021-10-01",
      paymentDue: "2021-10-31",
      description: "Landing Page Design",
      paymentTerms: 30,
      clientName: "Thomas Wayne",
      clientEmail: "thomas@dc.com",
      status: "pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "3964  Queens Lane",
        city: "Gotham",
        postCode: "60457",
        country: "United States of America",
      },
      items: [
        {
          name: "Web Design",
          quantity: 1,
          price: 6155.91,
          total: 6155.91,
          formattedTotal: "$6,155.91",
        },
      ],
      total: 6155.91,
    },
    {
      id: "FV2353",
      createdAt: "2021-11-05",
      paymentDue: "2021-11-12",
      description: "Logo Re-design",
      paymentTerms: 7,
      clientName: "Anita Wainwright",
      clientEmail: "",
      status: "draft",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      items: [
        {
          name: "Logo Re-design",
          quantity: 1,
          price: 3102.04,
          total: 3102.04,
          formattedTotal: "$3,102.04",
        },
      ],
      total: 3102.04,
    },
  ],
  filtered: [],
  loading: false,
};

// Create the context
export const AppContext = createContext<AppContextWithActions>({
  state: initialState,
  getInvoices: () => null,
  createInvoice: () => null,
  createDraftInvoice: () => null,
  editInvoice: () => null,
  addInvoiceItem: () => null,
  updateInvoiceItem: () => null,
  deleteInvoiceItem: () => null,
  filterInvoices: () => null,
  markInvoicePaid: () => null,
  markInvoicePending: () => null,
  deleteInvoice: () => null,
});

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    appReducer as Reducer<AppContextState, AppContextAction>,
    initialState
  );

  const getInvoices = (invoices: Invoice[]) => {
    dispatch({ type: "GET_INVOICES", payload: invoices });
  };

  const createInvoice = (invoice: Invoice) => {
    dispatch({ type: "CREATE_NEW_INVOICE", payload: invoice });
  };

  const createDraftInvoice = (invoice: Invoice) => {
    dispatch({ type: "CREATE_DRAFT_INVOICE", payload: invoice });
  };

  const editInvoice = (invoice: Invoice) => {
    dispatch({ type: "EDIT_INVOICE", payload: invoice });
  };

  const addInvoiceItem = (invoiceId: string) => {
    dispatch({ type: "ADD_INVOICE_ITEM", payload: invoiceId });
  };

  const updateInvoiceItem = (
    invoiceId: string,
    itemIndex: number,
    updatedItem: InvoiceItem
  ) => {
    dispatch({
      type: "UPDATE_INVOICE_ITEM",
      payload: { invoiceId, itemIndex, updatedItem },
    });
  };

  const deleteInvoiceItem = (invoiceId: string, itemIndex: number) => {
    dispatch({
      type: "DELETE_INVOICE_ITEM",
      payload: { invoiceId, itemIndex },
    });
  };

  const filterInvoices = (status: string[]) => {
    dispatch({ type: "FILTER_STATUS", payload: status });
  };

  const markInvoicePaid = (status: string) => {
    dispatch({ type: "MARK_AS_PAID", payload: status });
  };

  const markInvoicePending = (status: string) => {
    dispatch({ type: "MARK_AS_PENDING", payload: status });
  };

  const deleteInvoice = (id: string) => {
    dispatch({ type: "DELETE_INVOICE", payload: id });
  };

  const contextValue = {
    state,
    getInvoices,
    createInvoice,
    createDraftInvoice,
    editInvoice,
    addInvoiceItem,
    updateInvoiceItem,
    deleteInvoiceItem,
    filterInvoices,
    markInvoicePaid,
    markInvoicePending,
    deleteInvoice,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Create a custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
