import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import InvoiceCreateButtons from '../../components/InvoiceCreateButtons/InvoiceCreateButtons';
import BillFrom from '../../components/BillFrom/BillFrom';
import BillTo from '../../components/BillTo/BillTo';
import BillItem from '../../components/BillItem/BillItem';
import './InvoiceForm.scss';

import calculateTotal from '../../utils/calculateTotal';
import useForm from '../../utils/useForm';

const InvoiceForm = () => {
  const { currentInvoice, setCurrentInvoice, createInvoice } =
    useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const {
    handleSenderAddressChange,
    handleClientAddressChange,
    handleBillToChange,
    handleBillItemsChange,
    setStatusToPending,
    calculateInvoiceTotal,
    billToDetails,
    senderAddress,
    clientAddress,
    billItems,
    total,
    setBillItems,
  } = useForm();

  useEffect(() => {
    console.dir(currentInvoice);
  }, [currentInvoice]);

  function handleDeleteItemClick(id) {
    const removedItem = billItems.filter((item) => {
      return item.id !== id;
    });
    setBillItems(removedItem);
  }

  function addBillItem(event) {
    event.preventDefault();
    setBillItems([
      ...billItems,
      {
        id: uuidv4(),
        itemName: '',
        quantity: '',
        price: '',
        total: '',
      },
    ]);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setCurrentInvoice({
      ...billToDetails,
      senderAddress: {
        ...senderAddress,
      },
      clientAddress: {
        ...clientAddress,
      },
      items: [...billItems],
      status: setStatusToPending(),
      total: calculateInvoiceTotal(),
    });
    createInvoice(currentInvoice);
  }

  return (
    <main className='invoice-form'>
      <form onSubmit={handleFormSubmit}>
        <GoBack></GoBack>
        <Heading variant='h1'>New Invoice</Heading>
        <BillFrom
          senderStreet={senderAddress.street}
          senderCity={senderAddress.city}
          senderPostCode={senderAddress.postCode}
          senderCountry={senderAddress.country}
          onAddressChange={handleSenderAddressChange}
        />
        <BillTo
          clientName={billToDetails.clientName}
          clientEmail={billToDetails.clientEmail}
          paymentDue={billToDetails.paymentDue}
          paymentTerms={billToDetails.paymentTerms}
          description={billToDetails.description}
          clientStreet={clientAddress.street}
          clientCity={clientAddress.city}
          clientPostCode={clientAddress.postCode}
          clientCountry={clientAddress.country}
          onAddressChange={handleClientAddressChange}
          onBillToChange={handleBillToChange}
        />
        <Heading variant='h2'>Item List</Heading>
        {billItems.map((item) => {
          return (
            <BillItem
              key={item.id}
              id={item.id}
              itemName={item.itemName}
              quantity={item.quantity}
              price={item.price}
              total={item.quantity * item.price}
              item={item}
              items={billItems}
              onBillItemChange={(e) => handleBillItemsChange(item.id, e)}
              onHandleItemDelete={handleDeleteItemClick}
            />
          );
        })}

        <div className='bill-item__button'>
          <Button
            type='submit'
            onClick={(e) => addBillItem(e)}
            style={{
              backgroundColor: theme.cardBg,
            }}
          >
            + Add New Item
          </Button>
        </div>
        <InvoiceCreateButtons
          style={{
            backgroundColor: theme.cardBg,
            color: theme.text,
          }}
        />
      </form>
    </main>
  );
};

export default InvoiceForm;
