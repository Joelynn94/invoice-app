import React from 'react';
import Heading from '../Heading/Heading';

import './InvoiceItem.scss';

const InvoiceItem = ({ invoice }) => {
  return (
    <div>
      {invoice.items.map((item, index) => (
        <div className='invoice-details__item' key={index}>
          <div className='invoice-details__breakdown'>
            <Heading variant='h4'>{item.name}</Heading>
            <p className='invoice-details--alt-txt'>{`${
              item.quantity
            } x ${item.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}</p>
          </div>
          <div className='invoice-details__total'>
            <Heading variant='h4'>
              $
              {item.total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </Heading>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvoiceItem;
