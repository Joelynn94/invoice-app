import React from 'react';
import invoices from '../../data.json';
import GoBack from '../GoBack/GoBack';
import StatusCard from '../StatusCard/StatusCard';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';

const ViewInvoice = ({ match }) => {
  const invoice = invoices.find((invoice) => invoice.id === match.params.id);
  return (
    <main>
      <GoBack />
      <StatusCard invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
    </main>
  );
};

export default ViewInvoice;
