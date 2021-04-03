import React from 'react';
import Button from '../Button/Button';

import './NewInvoiceButton.scss';

const NewInvoiceButton = () => {
  return (
    <div>
      <Button size='md'>
        <div>
          <svg width='11' height='11' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z'
              fill='#7C5DFA'
              fillRule='nonzero'
            />
          </svg>
        </div>
        New Invoice
      </Button>
    </div>
  );
};

export default NewInvoiceButton;