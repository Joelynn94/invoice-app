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

import formatDate from '../../utils/formatDate';
import formatRandomId from '../../utils/formatRandomId';
import calculateTotal from '../../utils/calculateTotal';

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
  items: defaultBillItem,
  total: '',
};

const InvoiceForm = ({ history }) => {
  const { currentInvoice } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [invoice, setInvoice] = useState(defaultState);

  const [senderAddress, setSenderAddress] = useState({
    street: '',
    city: '',
    postCode: '',
    country: '',
  });

  const [clientAddress, setClientAddress] = useState({
    street: '',
    city: '',
    postCode: '',
    country: '',
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

  function handleFormSubmit(e) {
    e.preventDefault();

    setInvoice({
      ...invoice,
      ...billToDetails,
      senderAddress: { ...senderAddress },
      clientAddress: { ...clientAddress },
      items: [...billItems],
      total: calculateTotal(billItems),
    });

    console.log(currentInvoice);
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
          onSenderAddressChange={handleSenderAddressChange}
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
