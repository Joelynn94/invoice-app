import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './InvoicePopover.scss';

const InvoicePopover = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='invoices-popover' style={{ backgroundColor: theme.cardBg }}>
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
