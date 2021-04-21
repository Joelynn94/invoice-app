import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import Heading from '../Heading/Heading';
import changeToCurrency from '../../utils/changeToCurrency';

import './BillItem.scss';

const BillItem = ({ setInvoice, itemName, quantity, price, total }) => {
  const { dispatch } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      <section className='bill-item'>
        <FormInput
          label='Item Name'
          className='item-name'
          name='itemName'
          type='text'
          value={itemName}
          onChange={(itemName) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              items: {
                // spread out previous state of items
                ...prev.items,
                itemName,
              },
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          label='Qty'
          className='item-qty'
          name='itemQty'
          type='text'
          value={quantity}
          onChange={(quantity) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              items: {
                // spread out previous state of items
                ...prev.items,
                quantity,
              },
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          label='Price'
          className='item-price'
          name='itemPrice'
          type='text'
          value={price}
          onChange={(price) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              items: {
                // spread out previous state of items
                ...prev.items,
                price,
              },
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <div className='item-total bill-total'>
          <div>
            <Heading variant='h5'>Total</Heading>
            <span>{changeToCurrency(parseFloat(total))}</span>
          </div>
          <Button icon='delete'></Button>
        </div>
      </section>
    </>
  );
};

export default BillItem;
