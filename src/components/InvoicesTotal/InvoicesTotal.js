import React from 'react';
import Heading from '../Heading/Heading';

import './InvoicesTotal.scss';

const InvoicesTotal = ({ invoices }) => {
  return (
    <div className='invoices-total'>
      <Heading variant='h1'>Invoices</Heading>
      <p className='invoices-total__sub'>
        {invoices.length > 0 ? `${invoices.length} invoices` : 'No invoices'}
      </p>
    </div>
  );
};

export default InvoicesTotal;
