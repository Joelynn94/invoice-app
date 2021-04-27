import React from 'react';
import Button from '../Button/Button';

import './InvoiceCreateButtons.scss';

const InvoiceCreateButtons = ({ invoice, createInvoice, ...otherProps }) => {
  return (
    <div className='invoice-create-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Discard</Button>
      <Button variant={'dark'}>Save as Draft</Button>
      <Button variant={'primary'} onClick={() => createInvoice(invoice)}>
        Save & Send
      </Button>
    </div>
  );
};

export default InvoiceCreateButtons;
