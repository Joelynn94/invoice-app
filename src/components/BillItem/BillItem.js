import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import FormInput from '../FormInput/FormInput';
import Heading from '../Heading/Heading';
import BillTotal from '../BillTotal/BillTotal';

import './BillItem.scss';

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

    const billItem = {
      ...item,
      itemName: item.itemName,
      itemQty: item.itemQty,
      itemPrice: item.itemPrice,
      itemTotal: item.itemTotal,
    };

    dispatch({
      type: 'ADD_INVOICE',
      payload: billItem,
    });

    setItem({
      itemName: '',
      itemQty: '',
      itemPrice: '',
      itemTotal: '',
    });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

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
