import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';

import './InvoicePopover.scss';

const InvoicePopover = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { filterInvoices } = useContext(AppContext);

  const [statusFiltered, setFiltered] = useState('');

  const handleCheckbox = (event) => {
    const { name, checked } = event.target;

    const newCheckedArray = [...statusFiltered];
    let index;

    if (checked) {
      // check if the filter already exists in the tracking array
      index = newCheckedArray.indexOf(name);
      if (index === -1) {
        //if it doesn’t, add it.
        newCheckedArray.push(name);
      }
      // update state
      setFiltered(newCheckedArray);
      filterInvoices(newCheckedArray);
      console.log(newCheckedArray);
    } else {
      // get the position of the item in the array
      index = newCheckedArray.indexOf(name);
      // remove the item if the checkbox is not checked
      newCheckedArray.splice(index, 1);
      // update state
      setFiltered(newCheckedArray);
      filterInvoices(newCheckedArray);
      console.log(newCheckedArray);
    }
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
              value={statusFiltered}
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
              value={statusFiltered}
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
              value={statusFiltered}
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
