import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../FormInput/FormInput';
import Heading from '../Heading/Heading';

import './BillItem';

const BillItem = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [item, setItem] = useState({
    itemName: '',
    itemQty: '',
    itemPrice: '',
    itemTotal: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setItem({
      itemName: '',
      itemQty: '',
      itemPrice: '',
      itemTotal: '',
    });
  };

  const toCurrency = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    console.log({
      [name]:
        type === 'number'
          ? Number.parseFloat(value, 10).toFixed(2)
          : value.trim(),
    });

    setItem({
      ...item,
      [name]:
        type === 'number'
          ? Number.parseFloat(value, 10).toFixed(2)
          : value.trim(),
    });
  };

  return (
    <form className='bill-item' onSubmit={handleSubmit}>
      <Heading variant='h2'>Item List</Heading>
      <FormInput
        name='itemName'
        type='text'
        onChange={handleChange}
        value={item.itemName}
        label='Item Name'
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.borderColor}`,
          color: theme.text,
        }}
      />
      <FormInput
        name='itemQty'
        type='number'
        onChange={handleChange}
        value={toCurrency(item.itemQty)}
        label='Qty'
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.borderColor}`,
          color: theme.text,
        }}
      />
      <FormInput
        name='itemPrice'
        type='number'
        onChange={handleChange}
        value={toCurrency(item.itemPrice)}
        label='Price'
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.borderColor}`,
          color: theme.text,
        }}
      />
      <FormInput
        name='itemTotal'
        type='number'
        onChange={handleChange}
        value={item.itemTotal}
        label='Total'
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.borderColor}`,
          color: theme.text,
        }}
      />
    </form>
  );
};

export default BillItem;
