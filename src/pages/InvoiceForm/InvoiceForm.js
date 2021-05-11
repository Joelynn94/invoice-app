import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ThemeContext } from '../../context/ThemeContext';
import { AppContext } from '../../context/AppContext';

import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import InvoiceButtons from '../../components/InvoiceCreateButtons/InvoiceCreateButtons';

import './InvoiceForm.scss';
import BillFrom from '../../components/BillFrom/BillFrom';
import BillTo from '../../components/BillTo/BillTo';
import BillItem from '../../components/BillItem/BillItem';

import formatDate from '../../utils/formatDate';
import formatRandomId from '../../utils/formatRandomId';

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
  status: 'draft',
  senderAddress: defaultSenderAddress,
  clientAddress: defaultClientAddress,
  items: [defaultBillItem],
  total: '',
};

const InvoiceForm = ({ history }) => {
  const { createInvoice } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [invoice, setInvoice] = useState(defaultState);

  const [senderAddress, setSenderAddress] = useState({
    senderStreet: '',
    senderCity: '',
    senderPostCode: '',
    senderCountry: '',
  });

  const [clientAddress, setClientAddress] = useState({
    clientStreet: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',
  });

  const [billToDetails, setBillToDetails] = useState({
    paymentDue: '',
    description: '',
    paymentTerms: '',
    clientName: '',
    clientEmail: '',
  });

  const [billItems, setBillItems] = useState([]);

  useEffect(() => {
    console.dir(invoice);
  }, [invoice]);

  function handleSenderAddressChange(event) {
    setSenderAddress({
      ...senderAddress,
      [event.target.name]: event.target.value,
    });
  }

  function handleClientAddressChange(event) {
    setClientAddress({
      ...clientAddress,
      [event.target.name]: event.target.value,
    });
  }

  function handleBillToChange(event) {
    setBillToDetails({
      ...billToDetails,
      [event.target.name]: event.target.value,
    });
    setInvoice({
      id: formatRandomId(),
      createdAt: formatDate(),
      paymentDue: billToDetails.paymentDue,
      description: billToDetails.description,
      paymentTerms: billToDetails.paymentTerms,
      clientName: billToDetails.clientName,
      clientEmail: billToDetails.clientEmail,
      senderAddress,
      clientAddress,
      items: [...billItems],
      total: '',
    });
  }

  function handleBillItemsChange(id, event) {
    const items = [...billItems];
    items[id] = event.target.value;

    setBillItems((currentItem) =>
      currentItem.map((item) =>
        item.id === id
          ? { ...item, [event.target.name]: event.target.value }
          : item
      )
    );
  }

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

  function onFormSubmit(e) {
    e.preventDefault();

    setInvoice({
      ...invoice,
      senderAddress,
      clientAddress,
      billToDetails,
      billItems,
    });
    console.log(invoice);
  }

  return (
    <main className='invoice-form'>
      <form onSubmit={onFormSubmit}>
        <GoBack></GoBack>
        <Heading variant='h1'>New Invoice</Heading>
        <BillFrom
          senderStreet={senderAddress.senderStreet}
          senderCity={senderAddress.senderCity}
          senderPostCode={senderAddress.senderPostCode}
          senderCountry={senderAddress.senderCountry}
          onAddressChange={handleSenderAddressChange}
        />
        <BillTo
          clientName={billToDetails.clientName}
          clientEmail={billToDetails.clientEmail}
          paymentDue={billToDetails.paymentDue}
          paymentTerms={billToDetails.paymentTerms}
          description={billToDetails.description}
          clientStreet={clientAddress.clientStreet}
          clientCity={clientAddress.clientCity}
          clientPostCode={clientAddress.clientPostCode}
          clientCountry={clientAddress.clientCountry}
          onClientAddressChange={handleClientAddressChange}
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
        <InvoiceButtons
          createInvoice={createInvoice}
          invoice={invoice}
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
