import React from 'react';
import Heading from '../../components/Heading/Heading';
import GoBack from '../../components/GoBack/GoBack';

import './InvoiceForm.scss';
import BillFrom from '../../components/BillFrom/BillFrom';
import BillTo from '../../components/BillTo/BillTo';

const InvoiceForm = ({ invoice }) => {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;

  return (
    <main className='invoice-form'>
      <GoBack></GoBack>
      <Heading variant='h2'>New Invoice</Heading>
      <BillFrom />
      <BillTo />
    </main>
  );
};

export default InvoiceForm;
