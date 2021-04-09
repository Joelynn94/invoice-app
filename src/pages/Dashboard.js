import React from 'react';
import invoices from '../data.json';

import InvoicesBar from '../components/InvoicesBar/InvoicesBar';
import InvoiceSummary from '../components/InvoiceSummary/InvoiceSummary';
import NoInvoices from '../components/NoInvoices/NoInvoices';

const Dashboard = () => {
  return (
    <main>
      <InvoicesBar invoices={invoices} />
      {invoices.length > 0 ? (
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
