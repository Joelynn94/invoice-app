import React from 'react';
import Heading from '../Heading/Heading';

import './NoInvoices.scss';

const NoInvoices = () => {
  return (
    <div className='no-inovices'>
      <img
        src='./assets/illustration-empty.svg'
        alt='illustration of no invoices'
      />
      <Heading variant='h1'>There is nothing here</Heading>
      <p>
        Create an invoice by clicking the
        <span className='no-inovices--span'> New</span> button and get started
      </p>
    </div>
  );
};

export default NoInvoices;
