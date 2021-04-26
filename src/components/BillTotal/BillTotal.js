import React from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import changeToCurrency from '../../utils/changeToCurrency';
import formatRandomId from '../../utils/formatRandomId';

import './BillTotal.scss';

const BillTotal = ({ item }) => {
  return (
    <div className='bill-total'>
      <div>
        <Heading variant='h5'>Total</Heading>
        <span>{changeToCurrency(parseFloat(item.quantity * item.price))}</span>
      </div>
      <Button icon='delete'></Button>
    </div>
  );
};

export default BillTotal;
