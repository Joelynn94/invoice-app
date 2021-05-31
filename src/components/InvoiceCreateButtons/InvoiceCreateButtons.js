import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Button from '../Button/Button';
import './InvoiceCreateButtons.scss';

const InvoiceCreateButtons = ({ ...otherProps }) => {
  const { createInvoice, currentInvoice } = useContext(AppContext);
  const history = useHistory();

  const handleCreateButtonClick = (e) => {
    createInvoice(currentInvoice);
    history.push('/');
  };

  return (
    <div className='invoice-create-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Discard</Button>
      <Button variant={'dark'}>Save as Draft</Button>
      <Button variant={'primary'} onClick={() => handleCreateButtonClick()}>
        Save & Send
      </Button>
    </div>
  );
};

export default InvoiceCreateButtons;
