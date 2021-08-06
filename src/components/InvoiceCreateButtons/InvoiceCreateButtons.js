import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Button from '../Button/Button';
import './InvoiceCreateButtons.scss';

const InvoiceCreateButtons = ({ onFormSubmit, ...otherProps }) => {
  const { clearCurrentInvoice } = useContext(AppContext);
  const history = useHistory();

  function handleCreateButtonClick(e) {
    onFormSubmit(e);
    history.push('/');
    clearCurrentInvoice();
  }

  return (
    <div className='invoice-create-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Discard</Button>
      <Button variant={'dark'}>Save as Draft</Button>
      <Button
        type='submit'
        variant={'primary'}
        onClick={(e) => handleCreateButtonClick(e)}
      >
        Save & Send
      </Button>
    </div>
  );
};

export default InvoiceCreateButtons;
