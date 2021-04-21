const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const formatToCurrency = (price) => {
  if (price) {
    return price.toLocaleString(undefined, currencyOptions);
  }
  return;
};

export default formatToCurrency;
