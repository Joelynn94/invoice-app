import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import GoBack from '../../components/GoBack/GoBack';
import StatusCard from '../../components/StatusCard/StatusCard';
import InvoiceDetails from '../../components/InvoiceDetails/InvoiceDetails';

import './Invoice.scss';

const Invoice = ({ match }) => {
  const { invoices } = useContext(AppContext);
  const invoice = invoices.find((invoice) => invoice.id === match.params.id);

  return (
    <main className='invoice'>
      <GoBack />
      <StatusCard invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
    </main>
  );
};

export default Invoice;
