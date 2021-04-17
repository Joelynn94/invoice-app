import React from 'react';
import Button from '../Button/Button';

import './InvoiceCreateButtons.scss';

const InvoiceCreateButtons = ({ ...otherProps }) => {
  return (
    <div className='invoice-create-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Discard</Button>
      <Button variant={'dark'}>Save as Draft</Button>
      <Button variant={'primary'}>Save & Send</Button>
    </div>
  );
};

export default InvoiceCreateButtons;
