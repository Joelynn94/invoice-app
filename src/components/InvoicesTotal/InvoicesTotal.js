import React from 'react';
import Heading from '../Heading/Heading';

import './InvoicesTotal.scss';

const InvoicesTotal = () => {
  return (
    <div className='invoices-total'>
      <Heading variant='h1'>Invoices</Heading>
      <p className='invoices-total__sub'>7 Invoices</p>
    </div>
  );
};

export default InvoicesTotal;
