import React from 'react';
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
import InvoicesTotal from '../InvoicesTotal/InvoicesTotal';

const InvoicesBar = () => {
  return (
    <div>
      <InvoicesTotal />
      <InvoiceFilter />
    </div>
  );
};

export default InvoicesBar;
