import React, { useState } from 'react';
import FormInput from '../components/FormInput/FormInput';

const InvoiceForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm({
      email: '',
      password: '',
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
    <form onSubmit={handleSubmit}>
      <FormInput
        name='email'
        type='email'
        onChange={handleChange}
        value={form.email}
        label='email'
      />
    </form>
  );
};

export default InvoiceForm;
