import React from 'react';
import Heading from '../Heading/Heading';
import InvoiceItem from '../InvoiceItem/InvoiceItem';

import './InvoiceDetails.scss';

const InvoiceDetails = ({ invoice }) => {
  return (
    <div className='inovice-details'>
      <Heading variant='h3'>
        <span className='inovice-details__hash'>#</span>
        {invoice.id}
      </Heading>
      <Heading variant='h3'>{invoice.description}</Heading>
      <div className='invoice-details__address'>
        <address>
          <p>{invoice.senderAddress.street}</p>
          <p>{invoice.senderAddress.city}</p>
          <p>{invoice.senderAddress.postCode}</p>
          <p>{invoice.senderAddress.country}</p>
        </address>
      </div>
      <div className='invoice-details__invoice-date'>
        <Heading variant='h3'>Invoice Date</Heading>
        <Heading variant='h2'>{invoice.createdAt}</Heading>
      </div>
      <div className='invoice-details__payment-date'>
        <Heading variant='h3'>Payment Due</Heading>
        <Heading variant='h2'>{invoice.paymentDue}</Heading>
      </div>
      <div className='invoice-details__bill-to'>
        <Heading variant='h3'>Bill To</Heading>
        <Heading variant='h2'>{invoice.clientName}</Heading>
        <address>
          <p>{invoice.clientAddress.street}</p>
          <p>{invoice.clientAddress.city}</p>
          <p>{invoice.clientAddress.postCode}</p>
          <p>{invoice.clientAddress.country}</p>
        </address>
      </div>
      <div className='invoice-details__sent-to'>
        <Heading variant='h3'>Sent to</Heading>
        <p>{invoice.clientEmail}</p>
      </div>
      <div className='invoice-details__items'>
        <InvoiceItem invoice={invoice} key={invoice.id} />
      </div>
      <div className='invoice-details__grand-total'>
        <Heading variant='h3'>Grand Total</Heading>
        <Heading variant='h2'>${invoice.total}</Heading>
      </div>
    </div>
  );
};

export default InvoiceDetails;
