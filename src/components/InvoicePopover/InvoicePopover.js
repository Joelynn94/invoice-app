import React from 'react';

import './InvoicePopover.scss';

const InvoicePopover = () => {
  return (
    <div>
      <ul>
        <li>
          <label>
            <input type='checkbox' name='draft' id='draft' />
            <div>
              <p>Draft</p>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default InvoicePopover;
