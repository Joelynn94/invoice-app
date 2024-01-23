/**
 * Checks if a value is a valid number that is not NaN and is an integer.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a valid number, false otherwise.
 */
export const isNumberValid = (value: number): boolean => {
  if (typeof value === "number" && !Number.isNaN(value)) {
    if (Number(value)) {
      return true;
    }
  }
  return false;
};

export const formatCurrency = (amount: number) => {
  // console.log("amount", amount);
  // console.log("type", typeof amount);
  const numberAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  // console.log("numberAmount", numberAmount);
  return numberAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = "en-US"
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const calculateTotal = (quantity: number, price: number): number => {
  if (quantity === undefined || price === undefined) {
    throw new Error("Quantity and price must be defined.");
  }

  const convertedQuantity = Number(quantity);
  const convertedPrice = typeof price === "string" ? parseFloat(price) : price;

  const quantityTotal = isNumberValid(convertedQuantity)
    ? convertedQuantity
    : 0;
  const priceTotal = isNumberValid(convertedPrice) ? convertedPrice : 0;
  const total = quantityTotal * priceTotal;

  if (!isNumberValid(total)) {
    throw new Error("Invalid total");
  }

  return total;
};

export const mapPaymentTerms = (paymentTerms: string): number => {
  console.log("paymentTerms", paymentTerms);
  if (paymentTerms === "Net 1 Day") {
    return 1;
  } else if (paymentTerms === "Net 7 Days") {
    return 7;
  } else if (paymentTerms === "Net 14 Days") {
    return 14;
  } else if (paymentTerms === "Net 30 Days") {
    return 30;
  } else if (paymentTerms === "Net 60 Days") {
    return 60;
  }

  return 0;
};
