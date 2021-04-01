import React from 'react';
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
    </div>
  );
};

export default InvoicesBar;
