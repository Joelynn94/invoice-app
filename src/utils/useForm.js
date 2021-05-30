import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import formatDate from '../utils/formatDate';
import formatRandomId from '../utils/formatRandomId';
import calculateTotal from '../utils/calculateTotal';

const useForm = () => {
  const [values, setValues] = useState({
    paymentDue: '',
    description: '',
    paymentTerms: '',
    clientName: '',
    clientEmail: '',
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [
      {
        id: uuidv4(),
        itemName: '',
        quantity: '',
        price: '',
        total: '',
      },
    ],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return { handleInputChange, values };
};

export default useForm;
