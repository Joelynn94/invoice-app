import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';

import './InvoiceForm.scss';

const InvoiceForm = ({ invoice }) => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [form, setForm] = useState({
    email: '',
    password: '',
    street: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm({
      email: '',
      password: '',
      street: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log({ [name]: value });

    setForm({
      [name]: value,
    });
  };

  return (
    <main className='invoice-form'>
      <Heading variant='h2'>New Invoice</Heading>
      <Heading variant='h4'>Bill From</Heading>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='street'
          type='text'
          onChange={handleChange}
          value={form.street}
          label='Street Address'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
      </form>
    </main>
  );
};

export default InvoiceForm;
