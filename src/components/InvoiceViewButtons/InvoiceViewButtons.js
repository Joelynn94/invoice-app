import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Button from '../../components/Button/Button';
import './InvoiceViewButtons.scss';

const InvoiceViewButtons = ({ invoice, ...otherProps }) => {
  const { markAsPaid, deleteInvoice } = useContext(AppContext);
  const history = useHistory();

  const onDeleteClick = () => {
    deleteInvoice(invoice.id);
    history.push('/');
  };

  return (
    <div className='invoice-view-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Edit</Button>
      <Button variant={'danger'} onClick={onDeleteClick}>
        Delete
      </Button>
      <Button variant={'primary'} onClick={() => markAsPaid(invoice.id)}>
        Mark as Paid
      </Button>
    </div>
  );
};

export default InvoiceViewButtons;
