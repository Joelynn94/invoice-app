import React from 'react';
import Heading from '../../components/Heading/Heading';
import GoBack from '../../components/GoBack/GoBack';
import BillFrom from '../../components/BillFrom/BillFrom';
import BillTo from '../../components/BillTo/BillTo';
import BillItem from '../../components/BillItem/BillItem';

import './InvoiceForm.scss';
const InvoiceForm = ({ invoice }) => {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;

  return (
    <main className='invoice-form'>
      <GoBack></GoBack>
      <Heading variant='h1'>New Invoice</Heading>
      <BillFrom />
      <BillTo />
      <BillItem />
    </main>
  );
};

export default InvoiceForm;
