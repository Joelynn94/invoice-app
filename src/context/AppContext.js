import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_INVOICE':
      return {
        ...state,
        currentInvoice: action.payload,
        loading: false,
      };
    case 'GET_INVOICES':
      return {
        ...state,
        invoices: [...action.payload],
        loading: false,
      };
    case 'CREATE_INVOICE':
      return {
        ...state,
        invoices: [action.payload, ...state.invoices],
        loading: false,
      };
    case 'EDIT_INVOICE':
      return {
        ...state,
        invoices: state.invoices.map((invoice) => {
          return invoice.id === action.payload.id ? action.payload : invoice;
        }),
        loading: false,
      };
    case 'DELETE_INVOICE':
      return {
        ...state,
        invoices: state.invoices.filter((invoice) => {
          return invoice.id !== action.payload;
        }),
      };
    case 'INVOICE_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'FILTER_STATUS':
      let value = action.payload;
      const filteredInvocies = state.invoices.filter((invoice) => {
        return invoice.status.includes(value);
      });
      return {
        ...state,
        filtered: filteredInvocies,
      };
    case 'SAVE_DRAFT':
      return {
        ...state,
        status: 'draft',
        loading: false,
      };
    case 'MARK_PAID':
      return {
        ...state,
        status: 'paid',
        loading: false,
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        filtered: [],
      };
    case 'TOGGLE_DARK_MODE':
      localStorage.setItem('isLightTheme', !state.isLightTheme);
      return {
        isLightTheme: !state.isLightTheme,
      };
    default:
      return state;
  }
};

const intitalState = {
  invoices: [
    {
      id: 'RT3080',
      createdAt: '2021-08-18',
      paymentDue: '2021-08-19',
      description: 'Re-branding',
      paymentTerms: 1,
      clientName: 'Jensen Huang',
      clientEmail: 'jensenh@mail.com',
      status: 'paid',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '106 Kendell Street',
        city: 'Sharrington',
        postCode: 'NR24 5WQ',
        country: 'United Kingdom',
      },
      items: [
        {
          itemName: 'Brand Guidelines',
          quantity: 1,
          price: 1800.9,
          total: 1800.9,
        },
      ],
      total: 1800.9,
    },
    {
      id: 'XM9141',
      createdAt: '2021-08-21',
      paymentDue: '2021-09-20',
      description: 'Graphic Design',
      paymentTerms: 30,
      clientName: 'Alex Grim',
      clientEmail: 'alexgrim@mail.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '84 Church Way',
        city: 'Bradford',
        postCode: 'BD1 9PB',
        country: 'United Kingdom',
      },
      items: [
        {
          itemName: 'Banner Design',
          quantity: 1,
          price: 156.0,
          total: 156.0,
        },
        {
          itemName: 'Email Design',
          quantity: 2,
          price: 200.0,
          total: 400.0,
        },
      ],
      total: 556.0,
    },
    {
      id: 'RG0314',
      createdAt: '2021-09-24',
      paymentDue: '2021-10-01',
      description: 'Website Redesign',
      paymentTerms: 7,
      clientName: 'John Morrison',
      clientEmail: 'jm@myco.com',
      status: 'paid',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '79 Dover Road',
        city: 'Westhall',
        postCode: 'IP19 3PF',
        country: 'United Kingdom',
      },
      items: [
        {
          itemName: 'Website Redesign',
          quantity: 1,
          price: 14002.33,
          total: 14002.33,
        },
      ],
      total: 14002.33,
    },
    {
      id: 'RT2080',
      createdAt: '2021-10-11',
      paymentDue: '2021-10-12',
      description: 'Logo Concept',
      paymentTerms: 1,
      clientName: 'Alysa Werner',
      clientEmail: 'alysa@email.co.uk',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '63 Warwick Road',
        city: 'Carlisle',
        postCode: 'CA20 2TG',
        country: 'United Kingdom',
      },
      items: [
        {
          itemName: 'Logo Sketches',
          quantity: 1,
          price: 102.04,
          total: 102.04,
        },
      ],
      total: 102.04,
    },
    {
      id: 'AA1449',
      createdAt: '2021-10-7',
      paymentDue: '2021-10-14',
      description: 'Re-branding',
      paymentTerms: 7,
      clientName: 'Mellisa Clarke',
      clientEmail: 'mellisa.clarke@example.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '46 Abbey Row',
        city: 'Cambridge',
        postCode: 'CB5 6EG',
        country: 'United Kingdom',
      },
      items: [
        {
          itemName: 'New Logo',
          quantity: 1,
          price: 1532.33,
          total: 1532.33,
        },
        {
          itemName: 'Brand Guidelines',
          quantity: 1,
          price: 2500.0,
          total: 2500.0,
        },
      ],
      total: 4032.33,
    },
    {
      id: 'TY9141',
      createdAt: '2021-10-01',
      paymentDue: '2021-10-31',
      description: 'Landing Page Design',
      paymentTerms: 30,
      clientName: 'Thomas Wayne',
      clientEmail: 'thomas@dc.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '3964  Queens Lane',
        city: 'Gotham',
        postCode: '60457',
        country: 'United States of America',
      },
      items: [
        {
          itemName: 'Web Design',
          quantity: 1,
          price: 6155.91,
          total: 6155.91,
        },
      ],
      total: 6155.91,
    },
    {
      id: 'FV2353',
      createdAt: '2021-11-05',
      paymentDue: '2021-11-12',
      description: 'Logo Re-design',
      paymentTerms: 7,
      clientName: 'Anita Wainwright',
      clientEmail: '',
      status: 'draft',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      items: [
        {
          itemName: 'Logo Re-design',
          quantity: 1,
          price: 3102.04,
          total: 3102.04,
        },
      ],
      total: 3102.04,
    },
  ],
  currentInvoice: {},
  filtered: [],
  loading: false,
  editing: false,
};

export const AppContext = createContext(intitalState);

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, intitalState);

  const setCurrentInvoice = (invoice) => {
    dispatch({ type: 'SET_CURRENT_INVOICE', payload: invoice });
  };

  const getInvoices = (invoices) => {
    dispatch({ type: 'GET_INVOICES', payload: invoices });
  };

  const createInvoice = (invoice) => {
    dispatch({ type: 'CREATE_INVOICE', payload: invoice });
  };

  const editInvoice = (invoice) => {
    dispatch({ type: 'EDIT_INVOICE', payload: invoice });
  };

  const deleteInvoice = (id) => {
    dispatch({ type: 'DELETE_INVOICE', payload: id });
  };

  const filterInvoices = (status) => {
    dispatch({ type: 'FILTER_STATUS', payload: status });
  };

  const saveDraft = (status) => {
    dispatch({ type: 'SAVE_DRAFT', payload: status });
  };

  const markPaid = (status) => {
    dispatch({ type: 'MARK_PAID', payload: status });
  };

  const clearFilter = () => {
    dispatch({ type: 'CLEAR_FILTER' });
  };

  return (
    <AppContext.Provider
      value={{
        invoices: state.invoices,
        filtered: state.filtered,
        setCurrentInvoice,
        getInvoices,
        createInvoice,
        editInvoice,
        deleteInvoice,
        filterInvoices,
        saveDraft,
        markPaid,
        clearFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
