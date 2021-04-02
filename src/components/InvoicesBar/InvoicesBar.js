import React from 'react';
import Button from '../Button/Button';
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
import InvoicePopover from '../InvoicePopover/InvoicePopover';
import InvoicesTotal from '../InvoicesTotal/InvoicesTotal';

const InvoicesBar = () => {
  return (
    <div>
      <InvoicesTotal />
      <InvoiceFilter />
      <InvoicePopover />
      <Button type='button' variant='primary' size='lg' icon='plus'>
        New Invoice
      </Button>
      <Button type='button' variant='primary' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='light' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='dark' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='edit-dark' size='lg'>
        Mark as Paid
      </Button>
      <Button type='button' variant='edit-light' size='lg'>
        Mark as Paid
      </Button>
    </div>
  );
};

export default InvoicesBar;
