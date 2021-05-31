import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';
import './BillFrom.scss';

const BillFrom = ({
  senderStreet,
  senderCity,
  senderPostCode,
  senderCountry,
  onAddressChange,
}) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      <Heading variant='h4'>Bill From</Heading>
      <section className='bill-from'>
        <FormInput
          id='sender-street'
          label='Street Address'
          className='sender-street'
          name='street'
          type='text'
          value={senderStreet}
          onChange={onAddressChange}
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          id='sender-city'
          label='City'
          className='sender-city'
          name='city'
          type='text'
          value={senderCity}
          onChange={onAddressChange}
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          id='sender-post'
          label='Post Code'
          className='sender-post-code'
          name='postCode'
          type='text'
          value={senderPostCode}
          onChange={onAddressChange}
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          id='sender-country'
          label='Country'
          className='sender-country'
          name='country'
          type='text'
          value={senderCountry}
          onChange={onAddressChange}
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
      </section>
    </>
  );
};

export default BillFrom;
