import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../../components/Button/Button';

import './InvoiceViewButtons.scss';

const InvoiceViewButtons = ({ invoice, ...otherProps }) => {
  const { markAsPaid } = useContext(AppContext);

  return (
    <div className='invoice-view-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Edit</Button>
      <Button variant={'danger'}>Delete</Button>
      <Button variant={'primary'} onClick={() => markAsPaid(invoice)}>
        Mark as Paid
      </Button>
    </div>
  );
};

export default InvoiceViewButtons;
