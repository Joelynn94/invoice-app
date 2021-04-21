import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';

import './BillFrom.scss';

const BillFrom = ({ street, city, postCode, country, setInvoice }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      <Heading variant='h4'>Bill From</Heading>
      <section className='bill-from'>
        <FormInput
          label='Street Address'
          className='street'
          name='senderStreet'
          type='text'
          value={street}
          onChange={(street) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              senderAddress: {
                // spread out the state of senderAddress
                ...prev.senderAddress,
                street,
              },
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          label='City'
          className='city'
          name='senderCity'
          type='text'
          value={city}
          onChange={(city) =>
            setInvoice((prev) => ({
              // spread out previous state of invoice
              ...prev,
              senderAddress: {
                // spread out the state of senderAddress
                ...prev.senderAddress,
                city,
              },
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          label='Post Code'
          className='postCode'
          name='senderPostCode'
          type='text'
          value={postCode}
          onChange={(postCode) =>
            setInvoice((prev) => ({
              // spread out previous state of invoice
              ...prev,
              senderAddress: {
                // spread out the state of senderAddress
                ...prev.senderAddress,
                postCode,
              },
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          label='Country'
          className='country'
          name='senderCountry'
          type='text'
          value={country}
          onChange={(country) =>
            setInvoice((prev) => ({
              // spread out previous state of invoice
              ...prev,
              senderAddress: {
                // spread out the state of senderAddress
                ...prev.senderAddress,
                country,
              },
            }))
          }
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
