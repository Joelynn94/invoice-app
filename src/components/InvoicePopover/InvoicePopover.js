import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';

import './InvoicePopover.scss';

const InvoicePopover = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { filterInvoices } = useContext(AppContext);

  const [statusFilter, setStatusFilter] = useState('');

  const handleCheckbox = (event) => {
    const { name } = event.target;

    filterInvoices(name);

    setStatusFilter(name);
    setStatusFilter('');
  };

  return (
    <div className='invoices-popover' style={{ backgroundColor: theme.cardBg }}>
      <ul>
        <li>
          <label className='invoices-popover__label'>
            <input
              type='checkbox'
              name='draft'
              id='draft'
              value={statusFilter}
              onClick={handleCheckbox}
            />
            <div>
              <p>Draft</p>
            </div>
          </label>
        </li>
        <li>
          <label className='invoices-popover__label'>
            <input
              type='checkbox'
              name='pending'
              id='pending'
              value={statusFilter}
              onClick={handleCheckbox}
            />
            <div>
              <p>Pending</p>
            </div>
          </label>
        </li>
        <li>
          <label className='invoices-popover__label'>
            <input
              type='checkbox'
              name='paid'
              id='paid'
              value={statusFilter}
              onClick={handleCheckbox}
            />
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
