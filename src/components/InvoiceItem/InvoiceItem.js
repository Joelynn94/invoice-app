import React from 'react';

import Heading from '../Heading/Heading';
import changeToCurrency from '../../utils/changeToCurrency';
import './InvoiceItem.scss';

const InvoiceItem = ({ invoice }) => {
  return (
    <>
      <div className='invoice-details__item--breakdown-lg-headings'>
        <Heading variant='h4' className='justify-start'>
          Item Name
        </Heading>
        <Heading variant='h4' className='justify-center'>
          QTY.
        </Heading>
        <Heading variant='h4'>Price</Heading>
        <Heading variant='h4'>Total</Heading>
      </div>
      {invoice.items.map((item, index) => (
        <div className='invoice-details__item' key={index}>
          <div className='invoice-details__item--breakdown'>
            <Heading variant='h4'>{item.itemName}</Heading>
            <p className='invoice-details--alt-txt'>{`${
              item.quantity
            } x ${changeToCurrency(item.price)}`}</p>
          </div>
          <div className='invoice-details__item--total'>
            <Heading variant='h4'>${changeToCurrency(item.total)}</Heading>
          </div>
          <div className='invoice-details__item--breakdown-lg'>
            <p className='invoice-details--alt-txt justify-start'>{`${item.itemName}`}</p>
            <p className='invoice-details--alt-txt justify-center'>{`${item.quantity}`}</p>
            <p className='invoice-details--alt-txt'>{`${changeToCurrency(
              item.price
            )}`}</p>
            <Heading variant='h4'>${changeToCurrency(item.total)}</Heading>
          </div>
        </div>
      ))}
    </>
  );
};

export default InvoiceItem;
