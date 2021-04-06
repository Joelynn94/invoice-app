import React from 'react';
import invoices from '../../data.json';

import InvoicesBar from '../InvoicesBar/InvoicesBar';
import InvoiceSummary from '../InvoiceSummary/InvoiceSummary';
import NoInvoices from '../NoInvoices/NoInvoices';

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
