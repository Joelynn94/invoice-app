import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';

import Heading from '../../components/Heading/Heading';
import GoBack from '../../components/GoBack/GoBack';
import BillFrom from '../../components/BillFrom/BillFrom';
import BillTo from '../../components/BillTo/BillTo';
import BillItem from '../../components/BillItem/BillItem';
import Button from '../../components/Button/Button';

import './InvoiceForm.scss';
import InvoiceButtons from '../../components/InvoiceCreateButtons/InvoiceCreateButtons';

const InvoiceForm = () => {
  const { invoices } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <main className='invoice-form'>
      <GoBack></GoBack>
      <Heading variant='h1'>New Invoice</Heading>
      <BillFrom invoices={invoices} />
      <BillTo invoices={invoices} />
      <BillItem invoices={invoices} />
      <div className='bill-item__button'>
        <Button
          type='submit'
          style={{
            backgroundColor: theme.cardBg,
          }}
        >
          + Add New Item
        </Button>
      </div>
      <InvoiceButtons
        style={{
          backgroundColor: theme.cardBg,
          color: theme.text,
        }}
      />
    </main>
  );
};

export default InvoiceForm;
