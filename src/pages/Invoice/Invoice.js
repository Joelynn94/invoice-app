import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import GoBack from '../../components/GoBack/GoBack';
import StatusCard from '../../components/StatusCard/StatusCard';
import InvoiceDetails from '../../components/InvoiceDetails/InvoiceDetails';
import Button from '../../components/Button/Button';

import './Invoice.scss';

const Invoice = ({ match }) => {
  const { invoices } = useContext(AppContext);
  const invoice = invoices.find((invoice) => invoice.id === match.params.id);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <main className='invoice'>
      <GoBack />
      <StatusCard invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
      <div
        className='invoice__buttons'
        style={{
          backgroundColor: theme.cardBg,
          color: theme.text,
        }}
      >
        <Button variant={'edit-dark'}>Edit</Button>
        <Button variant={'danger'}>Delete</Button>
        <Button variant={'primary'}>Mark as Paid</Button>
      </div>
    </main>
  );
};

export default Invoice;
