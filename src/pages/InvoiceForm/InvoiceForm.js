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
import FormInput from '../../components/FormInput/FormInput';

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
  id: '',
  createdAt: '',
  paymentDue: '',
  description: '',
  paymentTerms: '',
  clientName: '',
  clientEmail: '',
  status: '',
  senderAddress: defaultSenderAddress,
  clientAddress: defaultClientAddress,
  items: [defaultBillItem],
};

const InvoiceForm = () => {
  const { invoices } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [invoice, setInvoice] = useState(defaultState);

  useEffect(() => {
    console.dir(invoice);
  }, [invoice]);

  // destructure out of state
  const {
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
  } = invoice;

  const addBillItem = (value) => {
    setInvoice((prevState) => ({
      ...prevState,
      items: [...items, { value }],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (e, index) => {
    console.log([e.target.name], e, index)
    const updatedItems = items.map((item, i) => index === i 
    ? Object.assign(item, {[e.target.name]: e.target.value}) 
    : item
    );
    setInvoice(updatedItems)
  }

  return (
    <main className='invoice-form'>
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
      {items.map((item, index) => {
        const { id, itemName, quantity, price, total } = item;
        return (
          <>
            <BillItem
              key={index}
              id={id}
              index={index}
              setInvoice={setInvoice}
              itemName={itemName}
              quantity={quantity}
              price={price}
              total={total}
              items={items}
              item={item}
            />
          </>
        );
      })}

      <div className='bill-item__button'>
        <Button
          type='submit'
          onClick={() =>
            setInvoice((prev) => ({
              ...prev,
              items: [...prev.items, 
              {  
                id: uuidv4(),
                itemName: '',
                quantity: '',
                price: '',
                total: '',
              }
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
        style={{
          backgroundColor: theme.cardBg,
          color: theme.text,
        }}
      />
    </main>
  );
};

export default InvoiceForm;
