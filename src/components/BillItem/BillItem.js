import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../../components/Button/Button';
import FormInput from '../FormInput/FormInput';
import Heading from '../Heading/Heading';
import changeToCurrency from '../../utils/changeToCurrency';

import './BillItem.scss';

const BillItem = ({
  item,
  items,
  index,
  itemName,
  quantity,
  price,
  total,
  setInvoice,
}) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const values = [...items];
  console.log(values[index]);

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
              ...prev,
              items: [
                {
                  ...item,
                  itemName,
                },
              ],
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
              ...prev,
              items: [
                {
                  ...item,
                  quantity,
                },
              ],
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
              ...prev,
              items: [{ ...item, price }],
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
