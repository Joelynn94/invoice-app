import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FormInput from '../../components/FormInput/FormInput';
import Heading from '../../components/Heading/Heading';
import FormSelect from '../FormSelect/FormSelect';
import FormOption from '../FormOption/FormOption';

import './BillTo.scss';

const BillTo = ({
  setInvoice,
  clientName,
  clientEmail,
  street,
  city,
  postCode,
  country,
  paymentDue,
  paymentTerms,
  description,
}) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <>
      <Heading variant='h4'>Bill To</Heading>
      <section className='bill-to'>
        <FormInput
          label="Client's Name"
          className='client-name'
          name='clientName'
          type='text'
          value={clientName}
          onChange={(clientName) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              clientName,
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          label="Client's Email"
          className='client-email'
          name='clientEmail'
          type='text'
          value={clientEmail}
          onChange={(clientEmail) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              clientEmail,
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormInput
          label='Street Address'
          className='client-street'
          name='clientStreet'
          type='text'
          value={street}
          onChange={(street) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              clientAddress: {
                // spread out previous state of clientAddress
                ...prev.clientAddress,
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
          className='client-city'
          name='clientCity'
          type='text'
          value={city}
          onChange={(city) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              clientAddress: {
                // spread out previous state of clientAddress
                ...prev.clientAddress,
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
          className='client-post-code'
          name='clientPostCode'
          type='text'
          value={postCode}
          onChange={(postCode) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              clientAddress: {
                // spread out previous state of clientAddress
                ...prev.clientAddress,
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
          className='client-country'
          name='clientCountry'
          type='text'
          value={country}
          onChange={(country) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              clientAddress: {
                // spread out previous state of clientAddress
                ...prev.clientAddress,
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
        <FormInput
          label='Invoice Date'
          className='invoice-date'
          name='paymentDue'
          type='date'
          value={paymentDue}
          onChange={(paymentDue) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              paymentDue,
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
        />
        <FormSelect
          label='Payment Terms'
          className='payment-terms'
          name='paymentTerms'
          icon={'arrow-down'}
          value={paymentTerms}
          onChange={(paymentTerms) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              paymentTerms,
            }))
          }
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.text,
          }}
          option='1'
        >
          <FormOption value='1' item='Net 1 day' />
          <FormOption value='7' item='Net 7 days' />
          <FormOption value='14' item='Net 14 days' />
          <FormOption value='30' item='Net 30 days' />
        </FormSelect>
        <FormInput
          label='Project Description'
          className='project-description'
          name='description'
          type='text'
          value={description}
          onChange={(description) =>
            setInvoice((prev) => ({
              // spread out previous state
              ...prev,
              description,
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

export default BillTo;
