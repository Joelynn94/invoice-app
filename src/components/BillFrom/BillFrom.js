import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';

import './BillFrom.scss';

const BillFrom = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [form, setForm] = useState({
    streetAddress: '',
    city: '',
    postCode: '',
    country: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm({
      streetAddress: '',
      city: '',
      postCode: '',
      country: '',
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
      <Heading variant='h4'>Bill From</Heading>
      <section className='bill-from' onSubmit={handleSubmit}>
        <FormInput
          className='street'
          name='streetAddress'
          type='text'
          onChange={handleChange}
          value={form.streetAddress}
          label='Street Address'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='city'
          name='city'
          type='text'
          onChange={handleChange}
          value={form.city}
          label='City'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='post-code'
          name='postCode'
          type='text'
          onChange={handleChange}
          value={form.postCode}
          label='Post Code'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          className='country'
          name='country'
          type='text'
          onChange={handleChange}
          value={form.country}
          label='Country'
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

export default BillFrom;
