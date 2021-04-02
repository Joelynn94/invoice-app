import React from 'react';
import Button from '../Button/Button';
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
// import InvoicePopover from '../InvoicePopover/InvoicePopover';
import InvoicesTotal from '../InvoicesTotal/InvoicesTotal';

import './InvoicesBar.scss';

const InvoicesBar = () => {
  return (
    <div className='invoices-bar'>
      <InvoicesTotal />
      <InvoiceFilter />
      {/* <InvoicePopover /> */}
      <Button type='button' variant='primary' size='lg' icon='plus'>
        New Invoice
      </Button>
    </div>
  );
};

export default InvoicesBar;
