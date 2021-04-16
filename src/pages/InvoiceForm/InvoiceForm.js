import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';

import Heading from '../../components/Heading/Heading';
import GoBack from '../../components/GoBack/GoBack';
import BillFrom from '../../components/BillFrom/BillFrom';
import BillTo from '../../components/BillTo/BillTo';
import BillItem from '../../components/BillItem/BillItem';

import './InvoiceForm.scss';
import Button from '../../components/Button/Button';

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
      <div className='bill-item__button grid-span3'>
        <Button
          type='submit'
          style={{
            backgroundColor: theme.cardBg,
          }}
        >
          + Add New Item
        </Button>
      </div>
      <div
        className='invoice-form__buttons'
        style={{
          backgroundColor: theme.cardBg,
          color: theme.text,
        }}
      >
        <Button variant={'edit-dark'}>Discard</Button>
        <Button variant={'dark'}>Save as Draft</Button>
        <Button variant={'primary'}>Save & Send</Button>
      </div>
    </main>
  );
};

export default InvoiceForm;
