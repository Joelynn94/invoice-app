import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import Button from '../../components/Button/Button';
import FormInput from '../FormInput/FormInput';
import './BillItem.scss';

const BillItem = ({
  id,
  itemName,
  quantity,
  price,
  total,
  onBillItemChange,
  onHandleItemDelete,
}) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      <section className='bill-item'>
        <>
          <FormInput
            label='Item Name'
            className='item-name'
            name='itemName'
            type='text'
            value={itemName}
            onChange={onBillItemChange}
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
            pattern=''
            value={quantity}
            onChange={onBillItemChange}
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
            onChange={onBillItemChange}
            style={{
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.borderColor}`,
              color: theme.text,
            }}
          />
          <div className='bill-total'>
            <FormInput
              label='Total'
              className='item-total'
              name='total'
              type='text'
              disabled
              value={total}
              onChange={onBillItemChange}
              style={{
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.borderColor}`,
                color: theme.text,
              }}
            />
            <Button
              icon='delete'
              onClick={() => onHandleItemDelete(id)}
            ></Button>
          </div>
        </>
      </section>
    </>
  );
};

export default BillItem;
