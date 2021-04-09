import React from 'react';
import invoices from '../data.json';
import GoBack from '../components/GoBack/GoBack';
import StatusCard from '../components/StatusCard/StatusCard';
import InvoiceDetails from '../components/InvoiceDetails/InvoiceDetails';

const Invoice = ({ match }) => {
  const invoice = invoices.find((invoice) => invoice.id === match.params.id);
  return (
    <main>
      <GoBack />
      <StatusCard invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
    </main>
  );
};

export default Invoice;
