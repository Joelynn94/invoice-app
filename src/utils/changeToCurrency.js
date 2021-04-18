const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const formatToCurrency = (num) => {
  if (num) {
    return num.toLocaleString(undefined, currencyOptions);
  }
  return;
};

export default formatToCurrency;
