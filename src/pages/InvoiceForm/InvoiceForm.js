import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import changeToCurrency from '../../utils/changeToCurrency';
import formatRandomId from '../../utils/formatRandomId';

import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import FormOption from '../../components/FormOption/FormOption';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import InvoiceButtons from '../../components/InvoiceCreateButtons/InvoiceCreateButtons';

import './InvoiceForm.scss';
import BillFrom from '../../components/BillFrom/BillFrom';

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
      <Heading variant='h4'>Bill To</Heading>
      <section className='bill-to'>
        <FormInput
          className='client-name'
          name='clientName'
          type='text'
          value={clientName}
          label="Client's Name"
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='client-email'
          name='clientEmail'
          type='text'
          value={clientEmail}
          label="Client's Email"
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='client-street'
          name='clientStreet'
          type='text'
          value={clientAddress.clientStreet}
          label='Street Address'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='client-city'
          name='clientCity'
          type='text'
          value={clientAddress.clientCity}
          label='City'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='client-post-code'
          name='clientPostCode'
          type='text'
          value={clientAddress.clientPostCode}
          label='Post Code'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='client-country'
          name='clientCountry'
          type='text'
          value={clientAddress.clientCountry}
          label='Country'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='invoice-date'
          name='paymentDue'
          type='date'
          value={paymentDue}
          label='Invoice Date'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormSelect
          className='payment-terms'
          name='paymentTerms'
          value={paymentTerms}
          label='Payment Terms'
          icon={'arrow-down'}
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
          option='1'
        >
          <FormOption value='1' item='Net 1 day' />
          <FormOption value='7' item='Net 7 days' />
          <FormOption value='14' item='Net 14 days' />
          <FormOption value='30' item='Net 30 days' />
        </FormSelect>
        <FormInput
          className='project-description'
          name='description'
          type='text'
          value={description}
          label='Project Description'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
      </section>
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
