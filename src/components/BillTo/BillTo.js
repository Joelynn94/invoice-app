import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';
import FormSelect from '../FormSelect/FormSelect';
import FormOption from '../FormOption/FormOption';

import './BillTo.scss';

const BillTo = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [form, setForm] = useState({
    clientName: '',
    clientEmail: '',
    clientStreetAddress: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',
    invoiceDate: '',
    paymentTerms: '',
    projectDescription: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm({
      clientName: '',
      clientEmail: '',
      clientStreetAddress: '',
      clientCity: '',
      clientPostCode: '',
      clientCountry: '',
      invoiceDate: '',
      paymentTerms: '',
      projectDescription: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log({ [name]: value });

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <Heading variant='h4'>Bill To</Heading>
      <section className='bill-to' onSubmit={handleSubmit}>
        <FormInput
          className='grid-span2'
          name='clientName'
          type='text'
          onChange={handleChange}
          value={form.clientName}
          label="Client's Name"
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='grid-span2'
          name='clientEmail'
          type='text'
          onChange={handleChange}
          value={form.clientEmail}
          label="Client's Email"
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='grid-span2'
          name='clientStreetAddress'
          type='text'
          onChange={handleChange}
          value={form.clientStreetAddress}
          label='Street Address'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          name='clientCity'
          type='text'
          onChange={handleChange}
          value={form.clientCity}
          label='City'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          name='clientPostCode'
          type='text'
          onChange={handleChange}
          value={form.clientPostCode}
          label='Post Code'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='grid-span2'
          name='clientCountry'
          type='text'
          onChange={handleChange}
          value={form.clientCountry}
          label='Country'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='grid-span2'
          name='invoiceDate'
          type='date'
          onChange={handleChange}
          value={form.invoiceDate}
          label='Invoice Date'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormSelect
          className='grid-span2'
          name='paymentTerms'
          onChange={handleChange}
          value={form.paymentTerms}
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
          className='grid-span2'
          name='projectDescription'
          type='text'
          onChange={handleChange}
          value={form.projectDescription}
          label='Project Description'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
      </section>
    </>
  );
};

export default BillTo;
