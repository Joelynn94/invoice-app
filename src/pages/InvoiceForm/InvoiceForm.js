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
  status: 'draft',
  senderAddress: defaultSenderAddress,
  clientAddress: defaultClientAddress,
  items: [defaultBillItem],
  total: '',
};

const InvoiceForm = ({ history }) => {
  const { invoices, createInvoice } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [invoice, setInvoice] = useState(defaultState);

  const [senderAddress, setSenderAddress] = useState({});
  const [senderStreet, setSenderStreet] = useState('');
  const [senderCity, setSenderCity] = useState('');
  const [senderPostCode, setSenderPostCode] = useState('');
  const [senderCountry, setSenderCountry] = useState('');

  const [clientAddress, setClientAddress] = useState({});
  const [clientStreet, setClientStreet] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientPostCode, setClientPostCode] = useState('');
  const [clientCountry, setClientCountry] = useState('');

  // destructure out of state
  const {
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    items,
  } = invoice;

  useEffect(() => {
    console.dir(invoice);
  }, [invoice]);

  function handleSenderStreetChange(event) {
    setSenderStreet(event.target.value);
  }

  function handleSenderCityChange(event) {
    setSenderCity(event.target.value);
  }

  function handleSenderPostCodeChange(event) {
    setSenderPostCode(event.target.value);
  }

  function handleSenderCountryChange(event) {
    setSenderCountry(event.target.value);
  }

  function handleClientStreetChange(event) {
    setClientStreet(event.target.value);
  }

  function handleClientCityChange(event) {
    setClientCity(event.target.value);
  }

  function handleClientPostCodeChange(event) {
    setClientPostCode(event.target.value);
  }

  function handleClientCountryChange(event) {
    setClientCountry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(senderAddress);
    console.log(clientAddress);
  }

  return (
    <main className='invoice-form'>
      <form>
        <GoBack></GoBack>
        <Heading variant='h1'>New Invoice</Heading>
        <BillFrom
          street={senderStreet}
          city={senderCity}
          postCode={senderPostCode}
          country={senderCountry}
          onStreetChange={handleSenderStreetChange}
          onCityChange={handleSenderCityChange}
          onPostCodeChange={handleSenderPostCodeChange}
          onCountryChange={handleSenderCountryChange}
        />
        <BillTo
          setInvoice={setInvoice}
          clientName={clientName}
          clientEmail={clientEmail}
          paymentDue={paymentDue}
          paymentTerms={paymentTerms}
          description={description}
          street={clientStreet}
          city={clientCity}
          postCode={clientPostCode}
          country={clientCountry}
          onStreetChange={handleClientStreetChange}
          onCityChange={handleClientCityChange}
          onPostCodeChange={handleClientPostCodeChange}
          onCountryChange={handleClientCountryChange}
        />
        <Heading variant='h2'>Item List</Heading>
        {items.map((item) => {
          const { id, itemName, quantity, price, total } = item;
          return (
            <BillItem
              key={item.id}
              id={id}
              setInvoice={setInvoice}
              itemName={itemName}
              quantity={quantity}
              price={price}
              total={quantity * price}
              items={items}
              item={item}
            />
          );
        })}

        <div className='bill-item__button'>
          <Button
            type='submit'
            onClick={() =>
              setInvoice((prev) => ({
                ...prev,
                items: [
                  ...prev.items,
                  {
                    id: uuidv4(),
                    itemName: '',
                    quantity: '',
                    price: '',
                    total: '',
                  },
                ],
              }))
            }
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
