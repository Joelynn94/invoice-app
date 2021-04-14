import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import FormInput from '../FormInput/FormInput';
import Heading from '../Heading/Heading';

import './BillItem';

const BillItem = () => {
  const { dispatch } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [item, setItem] = useState({
    itemName: '',
    itemQty: 0,
    itemPrice: '',
    itemTotal: '',
  });

  const toCurrency = (str) => {
    const formatStrToCurrency = parseFloat(str).toFixed(2);
    return formatStrToCurrency;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setItem({
      itemName: item.itemName,
      itemQty: parseInt(item.itemQty),
      itemPrice: parseFloat(item.itemPrice).toFixed(2),
      itemTotal: parseFloat(item.itemTotal).toFixed(2),
    });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    console.log({
      ...item,
      [name]:
        name === 'itemPrice' || name === 'itemTotal'
          ? parseFloat(value).toFixed(2)
          : value.trim(),
    });

    setItem({
      ...item,
      [name]:
        name === 'itemPrice' || name === 'itemTotal'
          ? parseFloat(value).toFixed(2)
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
        value={item.itemQty}
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
        value={parseFloat(toCurrency(item.itemPrice))}
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
        value={parseFloat(toCurrency(item.itemTotal))}
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
