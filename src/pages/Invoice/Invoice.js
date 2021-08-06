import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../context/AppContext';
import GoBack from '../../components/GoBack/GoBack';
import StatusCard from '../../components/StatusCard/StatusCard';
import InvoiceDetails from '../../components/InvoiceDetails/InvoiceDetails';
import './Invoice.scss';

const Invoice = ({ match }) => {
  const { invoices, setCurrentInvoice, getInvoices } = useContext(AppContext);
  // find the invoice clicked and set to current
  const invoice = invoices.find((invoice) => invoice.id === match.params.id);

  useEffect(() => {
    getInvoices(invoices);
    setCurrentInvoice(invoice);
  }, []);

  return (
    <main className='invoice'>
      <GoBack />
      <StatusCard invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
    </main>
  );
};

export default Invoice;
