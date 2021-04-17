import React from 'react';
import Button from '../../components/Button/Button';

import './InvoiceViewButtons.scss';

const InvoiceViewButtons = ({ ...otherProps }) => {
  return (
    <div className='invoice-view-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Edit</Button>
      <Button variant={'danger'}>Delete</Button>
      <Button variant={'primary'}>Mark as Paid</Button>
    </div>
  );
};

export default InvoiceViewButtons;
