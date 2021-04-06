import React from 'react';
import Button from '../Button/Button';
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
import InvoicesTotal from '../InvoicesTotal/InvoicesTotal';

import './InvoicesBar.scss';

const InvoicesBar = ({ invoices }) => {
  return (
    <div className='invoices-bar'>
      <InvoicesTotal invoices={invoices} />
      <InvoiceFilter invoices={invoices} />
      <Button type='button' variant='primary' size='lg' icon='plus'>
        New
      </Button>
    </div>
  );
};

export default InvoicesBar;
