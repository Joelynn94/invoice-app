import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';

import './InvoicePopover.scss';

const InvoicePopover = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { filterInvoices, clearFilter, filtered } = useContext(AppContext);

  const [statusFiltered, setFiltered] = useState('');

  const handleCheckbox = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      filterInvoices(name);
      console.log(filtered);
    } else {
      clearFilter();
    }
  };

  // const handleCheckbox = (event) => {
  //   // get the name and check status from the event object
  //   const { name, checked } = event.target;

  //   // spread out the current state into a new array
  //   const newCheckedArray = [...filtered];
  //   let index;

  //   // check from the target if the item is checked
  //   if (checked) {
  //     // push the name of checkbox to the new array
  //     newCheckedArray.push(name);
  //     console.log(newCheckedArray);
  //     filterInvoices(newCheckedArray);
  //   } else {
  //     // get the position of the item in the array
  //     index = newCheckedArray.indexOf(name);
  //     // remove the item if the checkbox is not checked
  //     newCheckedArray.splice(index, 1);
  //     filterInvoices(newCheckedArray);
  //     console.log(newCheckedArray);
  //   }
  // };

  return (
    <div className='invoices-popover' style={{ backgroundColor: theme.cardBg }}>
      <ul>
        <li>
          <label className='invoices-popover__label'>
            <input
              type='checkbox'
              name='draft'
              id='draft'
              value={filtered}
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
              value={filtered}
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
              value={filtered}
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
