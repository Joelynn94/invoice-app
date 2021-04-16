import React from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';

import './BillTotal.scss';

const BillTotal = ({ item }) => {
  return (
    <div className='bill-total'>
      <div>
        <Heading variant='h5'>Total</Heading>
        <span>
          {parseFloat(item.itemQty * item.itemPrice).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <Button icon='delete'></Button>
    </div>
  );
};

export default BillTotal;
