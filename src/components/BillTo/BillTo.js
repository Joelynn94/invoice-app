import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';

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

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading variant='h4'>Bill To</Heading>
      <FormInput
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
      <FormInput
        name='paymentTerms'
        type='text'
        onChange={handleChange}
        value={form.paymentTerms}
        label='Payment Terms'
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.borderColor}`,
          color: theme.text,
        }}
      />
      <FormInput
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
    </form>
  );
};

export default BillTo;
