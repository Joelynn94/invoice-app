import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { AppContext } from '../../context/AppContext';
import Button from '../Button/Button';
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
import InvoicesTotal from '../InvoicesTotal/InvoicesTotal';
import './InvoicesBar.scss';

import formatDate from '../../utils/formatDate';
import formatRandomId from '../../utils/formatRandomId';

const newInvoice = {
  id: formatRandomId(),
  createdAt: formatDate(),
  paymentDue: '',
  description: '',
  paymentTerms: '',
  clientName: '',
  clientEmail: '',
  status: 'pending',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  items: [
    {
      id: uuidv4(),
      itemName: '',
      quantity: '',
      price: '',
      total: '',
    },
  ],
  total: 100,
};

const InvoicesBar = ({ invoices }) => {
  const { setCurrentInvoice } = useContext(AppContext);

  return (
    <div className='invoices-bar'>
      <InvoicesTotal invoices={invoices} />
      <InvoiceFilter />
      <Link to='/create' onClick={() => setCurrentInvoice(newInvoice)}>
        <Button type='button' variant='primary' size='lg' icon='plus'>
          New
        </Button>
      </Link>
    </div>
  );
};

export default InvoicesBar;
