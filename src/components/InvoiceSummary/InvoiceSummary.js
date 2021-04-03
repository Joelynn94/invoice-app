import React from 'react';
import InvoiceBadge from '../InvoiceBadge/InvoiceBadge';

import './InvoiceSummary.scss';

const InvoiceSummary = () => {
  return (
    <div className='invoice-summary'>
      <div className='invoice-summary__id'>
        <h3>
          <span className='invoice-summary__hash'>#</span>RT3080
        </h3>
      </div>
      <div className='invoice-summary__client-name'>
        <p>Jensen Huang</p>
      </div>
      <div className='invoice-summary__due-date'>
        <p>
          <span className='invoice-summary__due-txt'>Due</span>19 Aug 2021
        </p>
      </div>
      <div className='invoice-summary__total'>
        <h3>
          <span className='invoice-summary__symbol'>$</span>1,800.90
        </h3>
      </div>
      <InvoiceBadge status='paid' />
      <InvoiceBadge status='pending' />
      <InvoiceBadge status='draft' />
      <InvoiceBadge />
    </div>
  );
};

export default InvoiceSummary;
