import React from 'react';
import invoices from '../../data.json';
import GoBack from '../GoBack/GoBack';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';
import StatusCard from '../StatusCard/StatusCard';

const ViewInvoice = () => {
  return (
    <main>
      <GoBack />
      {invoices.map((invoice) => (
        <div key={invoice.id}>
          <StatusCard invoice={invoice} />
          <InvoiceDetails invoice={invoice} />
        </div>
      ))}
    </main>
  );
};

export default ViewInvoice;
