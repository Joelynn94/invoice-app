import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';

import './BillFrom.scss';

const BillFrom = ({
  street,
  city,
  postCode,
  country,
  onStreetChange,
  onCityChange,
  onPostCodeChange,
  onCountryChange,
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
          name='senderStreet'
          type='text'
          value={street}
          onChange={onStreetChange}
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
          name='senderCity'
          type='text'
          value={city}
          onChange={onCityChange}
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
          name='senderPostCode'
          type='text'
          value={postCode}
          onChange={onPostCodeChange}
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
          name='senderCountry'
          type='text'
          value={country}
          onChange={onCountryChange}
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
