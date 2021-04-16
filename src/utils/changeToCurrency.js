const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const formatToCurrency = (num) => {
  return num.toLocaleString(undefined, currencyOptions);
};

export default formatToCurrency;
