import React, { useState } from 'react';
import InvoicePopover from '../InvoicePopover/InvoicePopover';

import './InvoiceFilter.scss';

const InvoiceFilter = ({ invoices }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='invoices-filter'>
      <button
        className='invoices-filter__btn'
        type='button'
        aria-expanded='false'
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
        <div className='invoices-filter__arrow'>
          <svg width='11' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 1l4.228 4.228L9.456 1'
              stroke='#7C5DFA'
              strokeWidth='2'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </div>
      </button>
      {isOpen && <InvoicePopover invoices={invoices} />}
    </div>
  );
};

export default InvoiceFilter;
