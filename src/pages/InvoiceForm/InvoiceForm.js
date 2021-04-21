import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';

import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import InvoiceButtons from '../../components/InvoiceCreateButtons/InvoiceCreateButtons';

import './InvoiceForm.scss';
import BillFrom from '../../components/BillFrom/BillFrom';
import BillTo from '../../components/BillTo/BillTo';

const defaultSenderAddress = {
  street: '',
  city: '',
  postCode: '',
  country: '',
};

const defaultClientAddress = {
  street: '',
  city: '',
  postCode: '',
  country: '',
};

const defaultState = {
  id: '',
  createdAt: '',
  paymentDue: '',
  description: '',
  paymentTerms: '',
  clientName: '',
  clientEmail: '',
  status: '',
  senderAddress: defaultSenderAddress,
  clientAddress: defaultClientAddress,
  items: [
    {
      name: '',
      quantity: '',
      price: '',
      total: '',
    },
  ],
  total: '',
};

const InvoiceForm = () => {
  const { invoices } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [invoice, setInvoice] = useState(defaultState);

  // destructure out of state
  const {
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = invoice;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className='invoice-form'>
      <GoBack></GoBack>
      <Heading variant='h1'>New Invoice</Heading>
      <BillFrom
        setInvoice={setInvoice}
        street={senderAddress.street}
        city={senderAddress.city}
        postCode={senderAddress.postCode}
        country={senderAddress.country}
      />
      <BillTo
        setInvoice={setInvoice}
        clientName={clientName}
        clientEmai={clientEmail}
        street={clientAddress.street}
        city={clientAddress.city}
        postCode={clientAddress.postCode}
        country={clientAddress.country}
        paymentDue={paymentDue}
        paymentTerms={paymentTerms}
        description={description}
      />
      <Heading variant='h2'>Item List</Heading>
      <section className='bill-item'>
        <FormInput
          className='item-name'
          name='name'
          type='text'
          value={items.name}
          label='Item Name'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='item-qty'
          name='quantity'
          type='number'
          min='1'
          value={items.quantity}
          label='Qty'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='item-price'
          name='price'
          step='.01'
          type='text'
          pattern='[0-9]*'
          value={items.price}
          label='Price'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <div className='bill-total'>
          <div>
            <Heading variant='h5'>Total</Heading>
            <span>{items.total}</span>
          </div>
          <Button icon='delete'></Button>
        </div>
      </section>
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
