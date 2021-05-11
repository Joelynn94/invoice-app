import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';

import './InvoiceCreateButtons.scss';

const InvoiceCreateButtons = ({ invoice, createInvoice, ...otherProps }) => {
  const history = useHistory();

  const routeChange = () => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    let path = `/`;
    history.push(path);
  };

  return (
    <div className='invoice-create-buttons' {...otherProps}>
      <Button variant={'edit-dark'}>Discard</Button>
      <Button variant={'dark'}>Save as Draft</Button>
      <Button
        variant={'primary'}
        onClick={() => {
          createInvoice(invoice);
          routeChange();
        }}
      >
        Save & Send
      </Button>
    </div>
  );
};

export default InvoiceCreateButtons;
