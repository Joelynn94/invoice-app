import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Heading from '../Heading/Heading';

import './InvoicesTotal.scss';

const InvoicesTotal = () => {
  const { filtered } = useContext(AppContext);

  return (
    <div className='invoices-total'>
      <Heading variant='h1'>Invoices</Heading>
      <p className='invoices-total__sub'>
        {filtered.length === 1
          ? `${filtered.length} invoice`
          : filtered.length > 1
          ? `${filtered.length} invoices`
          : 'No invoices'}
      </p>
    </div>
  );
};

export default InvoicesTotal;
