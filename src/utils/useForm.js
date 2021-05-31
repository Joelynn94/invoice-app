import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import calculateTotal from '../utils/calculateTotal';

const useForm = () => {
  const [status, setStatus] = useState('');
  const [total, setTotal] = useState(0);
  const [billToDetails, setBillToDetails] = useState({
    paymentDue: '',
    description: '',
    paymentTerms: '',
    clientName: '',
    clientEmail: '',
  });
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
  const [billItems, setBillItems] = useState([]);

  function setStatusToPending() {
    setStatus('pending');
  }

  function calculateInvoiceTotal() {
    setTotal(calculateTotal(billItems));
  }

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
  return {
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
    status,
    total,
    setBillItems,
  };
};

export default useForm;
