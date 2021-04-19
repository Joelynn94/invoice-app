import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import InvoicesBar from '../components/InvoicesBar/InvoicesBar';
import InvoiceSummary from '../components/InvoiceSummary/InvoiceSummary';
import NoInvoices from '../components/NoInvoices/NoInvoices';

const Dashboard = () => {
  const { invoices, filtered } = useContext(AppContext);

  return (
    <main>
      <InvoicesBar invoices={invoices} />
      {filtered.length > 0 ? (
        filtered.map((item) => <InvoiceSummary invoice={item} key={item.id} />)
      ) : invoices.length > 0 ? (
        invoices.map((invoice) => (
          <InvoiceSummary invoice={invoice} key={invoice.id} />
        ))
      ) : (
        <NoInvoices />
      )}
    </main>
  );
};

export default Dashboard;
