import React from 'react';

import './InvoicePopover.scss';

const InvoicePopover = () => {
  return (
    <div className='invoices-popover'>
      <ul>
        <li>
          <label className='invoices-popover__label'>
            <input type='checkbox' name='draft' id='draft' />
            <div>
              <p>Draft</p>
            </div>
          </label>
        </li>
        <li>
          <label className='invoices-popover__label'>
            <input type='checkbox' name='pending' id='pending' />
            <div>
              <p>Pending</p>
            </div>
          </label>
        </li>
        <li>
          <label className='invoices-popover__label'>
            <input type='checkbox' name='paid' id='paid' />
            <div>
              <p>Paid</p>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default InvoicePopover;
