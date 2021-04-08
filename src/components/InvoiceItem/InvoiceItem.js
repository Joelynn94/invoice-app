import React from 'react';
import Heading from '../Heading/Heading';

import './InvoiceItem.scss';

const InvoiceItem = ({ invoice }) => {
  return (
    <div className='invoice-details__item'>
      {invoice.items.map((item, index) => (
        <div key={index}>
          <Heading variant='h3'>{item.name}</Heading>
          <p>{`${item.quantity} x ${item.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}`}</p>
          <Heading variant='h3'>
            $
            {item.total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </Heading>
        </div>
      ))}
    </div>
  );
};

export default InvoiceItem;
