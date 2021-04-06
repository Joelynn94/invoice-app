import React from 'react';
import InvoiceBadge from '../InvoiceBadge/InvoiceBadge';

import './InvoiceSummary.scss';

const InvoiceSummary = ({ invoice }) => {
  return (
    <div className='invoice-summary'>
      <div className='invoice-summary__id'>
        <h3>
          <span className='invoice-summary__hash'>#</span>
          {invoice.id}
        </h3>
      </div>
      <div className='invoice-summary__client-name'>
        <p>{invoice.clientName}</p>
      </div>
      <div className='invoice-summary__wrap'>
        <div className='invoice-summary__due-date'>
          <p>
            <span className='invoice-summary__due-txt'>Due</span>
            {invoice.paymentDue}
          </p>
        </div>
        <div className='invoice-summary__total'>
          <h3>
            <span className='invoice-summary__symbol'>$</span>
            {invoice.total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h3>
        </div>
      </div>
      <div className='invoice-summary__badge'>
        <InvoiceBadge status={invoice.status} />
      </div>
    </div>
  );
};

export default InvoiceSummary;
