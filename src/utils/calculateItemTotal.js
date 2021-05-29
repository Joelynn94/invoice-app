const calculateItemTotal = (price, quantity) => {
  let total = 0;
  total += Number(quantity) * Number(price);
  return total;
};

export default calculateItemTotal;
