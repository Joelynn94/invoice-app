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

const defaultSenderAddress = {
  street: '',
  city: '',
  postCode: '',
  country: '',
};

const defaultClientAddress = {
  street: '',
  city: '',
  postCode: '',
  country: '',
};

const defaultBillItem = {
  id: uuidv4(),
  itemName: '',
  quantity: '',
  price: '',
  total: '',
};

const defaultState = {
  id: formatRandomId(),
  createdAt: formatDate(),
  paymentDue: '',
  description: '',
  paymentTerms: '',
  clientName: '',
  clientEmail: '',
  status: 'pending',
  senderAddress: defaultSenderAddress,
  clientAddress: defaultClientAddress,
  items: [defaultBillItem],
  total: '',
};

const InvoiceForm = () => {
  const { currentInvoice, setCurrentInvoice, createInvoice } =
    useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [invoice, setInvoice] = useState(defaultState);

  useEffect(() => {
    console.dir(invoice);
  }, [invoice]);

  function handleDeleteItemClick(id) {
    const removedItem = billItems.filter((item) => {
      return item.id !== id;
    });
    setBillItems(removedItem);
  }

  function addBillItem() {
    setInvoice((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        {
          id: uuidv4(),
          itemName: '',
          quantity: '',
          price: '',
          total: '',
        },
      ],
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    setInvoice({
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

    createInvoice(invoice);
  }

  return (
    <main className='invoice-form'>
      <form onSubmit={handleFormSubmit}>
        <GoBack></GoBack>
        <Heading variant='h1'>New Invoice</Heading>
        <BillFrom
          setInvoice={setInvoice}
          street={senderAddress.street}
          city={senderAddress.city}
          postCode={senderAddress.postCode}
          country={senderAddress.country}
        />
        <BillTo
          setInvoice={setInvoice}
          clientName={clientName}
          clientEmail={clientEmail}
          street={clientAddress.street}
          city={clientAddress.city}
          postCode={clientAddress.postCode}
          country={clientAddress.country}
          paymentDue={paymentDue}
          paymentTerms={paymentTerms}
          description={description}
        />
        <Heading variant='h2'>Item List</Heading>
        {currentInvoice.items.map((item) => {
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
          onFormSubmit={handleFormSubmit}
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
