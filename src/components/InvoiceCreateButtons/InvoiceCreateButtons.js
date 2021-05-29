import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';

import './InvoiceCreateButtons.scss';

const InvoiceCreateButtons = ({
  invoice,
  onFormSubmit,
  createInvoice,
  ...otherProps
}) => {
  const history = useHistory();

  const handleCreateButtonClick = (e) => {
    onFormSubmit(e);
    createInvoice(invoice);
    history.push('/');
  };

  return (
    <div className='invoice-create-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Discard</Button>
      <Button variant={'dark'}>Save as Draft</Button>
      <Button variant={'primary'} onClick={handleCreateButtonClick}>
        Save & Send
      </Button>
    </div>
  );
};

export default InvoiceCreateButtons;
