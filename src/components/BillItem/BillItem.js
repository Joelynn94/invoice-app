import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../../components/Button/Button';
import FormInput from '../FormInput/FormInput';
import Heading from '../Heading/Heading';
import changeToCurrency from '../../utils/changeToCurrency';

import './BillItem.scss';

const BillItem = ({
  id,
  index,
  item,
  items,
  itemName,
  quantity,
  price,
  total,
  setInvoice,
}) => {
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
          onChange={(itemName, e) =>
            setInvoice((prev) => {
              return {
                ...prev,
                items: items.map(item => (
                  console.log(item.id, index, item.id === id),
                  item.id === id ? {...item, itemName} : item
                ))
              }
          })
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
          name='quantity'
          type='text'
          value={quantity}
          onChange={(quantity, e) =>
            setInvoice((prev) => {
              return {
                ...prev,
                items: items.map(item => (
                  console.log(item.id, index, item.id === id),
                  item.id === id ? {...item, quantity} : item
                ))
              }
            })
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
          name='price'
          type='text'
          value={price}
          onChange={(price, e) =>
            setInvoice((prev) => {
              return {
                ...prev,
                items: items.map(item => (
                  console.log(item.id, index, item.id === id),
                  item.id === id ? {...item, price} : item
                ))
              }
            })
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
