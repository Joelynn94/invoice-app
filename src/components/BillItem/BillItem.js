import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import FormInput from '../FormInput/FormInput';
import Heading from '../Heading/Heading';

import './BillItem.scss';
import Button from '../Button/Button';
import BillTotal from '../BillTotal/BillTotal';

const BillItem = () => {
  const { dispatch } = useContext(AppContext);
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
      itemName: item.itemName,
      itemQty: parseInt(item.itemQty),
      itemPrice: parseFloat(item.itemPrice).toFixed(2),
      itemTotal: parseFloat(item.itemTotal).toFixed(2),
    });
  };

  const formatCurrencyValue = (str) => {
    return str.toString().replace(/,/g, '');
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    console.log({
      ...item,
      [name]:
        name === 'itemPrice' || name === 'itemTotal'
          ? parseFloat(
              formatCurrencyValue(value).toLocaleString(undefined, {
                style: 'decimal',
                maximumFractionDigits: 2,
              })
            )
          : value.trim(),
    });

    setItem({
      ...item,
      [name]: type === 'number' ? parseFloat(value) : value,
    });
  };

  return (
    <>
      <Heading variant='h2'>Item List</Heading>
      <form className='bill-item' onSubmit={handleSubmit}>
        <FormInput
          className='grid-span3'
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
          min='1'
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
          step='.01'
          type='text'
          pattern='[0-9]*'
          onChange={handleChange}
          value={item.itemPrice}
          label='Price'
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <BillTotal item={item} />
      </form>
    </>
  );
};

export default BillItem;
