import React from 'react';
import invoices from '../../data.json';
import GoBack from '../GoBack/GoBack';
import StatusCard from '../StatusCard/StatusCard';

const ViewInvoice = () => {
  return (
    <main>
      <GoBack />
      {invoices.map((invoice) => (
        <StatusCard key={invoice.id} invoice={invoice} />
      ))}
    </main>
  );
};

export default ViewInvoice;
