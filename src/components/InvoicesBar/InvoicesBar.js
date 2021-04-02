import React from 'react';
import Button from '../Button/Button';
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
import InvoicePopover from '../InvoicePopover/InvoicePopover';
import InvoicesTotal from '../InvoicesTotal/InvoicesTotal';
import NewInvoiceButton from '../NewInvoiceButton/NewInvoiceButton';

const InvoicesBar = () => {
  return (
    <div>
      <InvoicesTotal />
      <InvoiceFilter />
      <InvoicePopover />
      <NewInvoiceButton />
      <Button type='button' variant='secondary' size='lg' icon='sun'>
        Testing button
      </Button>
    </div>
  );
};

export default InvoicesBar;
