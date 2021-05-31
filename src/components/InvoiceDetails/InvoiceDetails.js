import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import Heading from '../Heading/Heading';
import InvoiceItem from '../InvoiceItem/InvoiceItem';
import changeToCurrency from '../../utils/changeToCurrency';
import formatDate from '../../utils/formatDate';
import './InvoiceDetails.scss';

const InvoiceDetails = ({ invoice }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='invoice-details' style={{ backgroundColor: theme.cardBg }}>
      <div className='invoice-details__top-grid'>
        <div>
          <Heading variant='h3'>
            <span className='invoice-details--hash'>#</span>
            {invoice.id}
          </Heading>
          <Heading
            className='invoice-details--alt-txt invoice-details--desc'
            variant='h4'
          >
            {invoice.description}
          </Heading>
        </div>
        <div className='invoice-details__address'>
          <address className='invoice-details--alt-txt'>
            <p>{invoice.senderAddress.street}</p>
            <p>{invoice.senderAddress.city}</p>
            <p>{invoice.senderAddress.postCode}</p>
            <p>{invoice.senderAddress.country}</p>
          </address>
        </div>
      </div>
      <div className='invoice-details__detail-grid'>
        <div className='invoice-details__dates'>
          <div className='invoice-details__date'>
            <Heading variant='h4' className='invoice-details--alt-txt'>
              Invoice Date
            </Heading>
            <Heading variant='h3' className='invoice-details--created-at'>
              {formatDate(invoice.createdAt)}
            </Heading>
          </div>
          <div className='invoice-details__payment-date'>
            <Heading variant='h4' className='invoice-details--alt-txt'>
              Payment Due
            </Heading>
            <Heading variant='h3' className='invoice-details--payment-due'>
              {formatDate(invoice.paymentDue)}
            </Heading>
          </div>
        </div>
        <div className='invoice-details__bill-to'>
          <Heading variant='h4' className='invoice-details--alt-txt'>
            Bill To
          </Heading>
          <Heading variant='h3' className='invoice-details--client-name'>
            {invoice.clientName}
          </Heading>
          <address className='invoice-details--alt-txt'>
            <p>{invoice.clientAddress.street}</p>
            <p>{invoice.clientAddress.city}</p>
            <p>{invoice.clientAddress.postCode}</p>
            <p>{invoice.clientAddress.country}</p>
          </address>
        </div>
        <div className='invoice-details__sent-to'>
          <Heading variant='h4' className='invoice-details--alt-txt'>
            Sent to
          </Heading>
          <Heading variant='h3' className='invoice-details--client-email'>
            {invoice.clientEmail}
          </Heading>
        </div>
      </div>

      <div
        className='invoice-details__items'
        style={{ backgroundColor: theme.altCardBg }}
      >
        <InvoiceItem invoice={invoice} key={invoice.id} />
      </div>
      <div
        className='invoice-details__grand-total'
        style={{ backgroundColor: theme.altBody }}
      >
        <Heading variant='h4' className='invoice-details--alt-txt'>
          Grand Total
        </Heading>
        <Heading variant='h3' className='invoice-details--invoice-total'>
          ${changeToCurrency(invoice.total)}
        </Heading>
      </div>
    </div>
  );
};

export default InvoiceDetails;
