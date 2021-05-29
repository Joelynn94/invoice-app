const checkIsNan = (val) => {
  if (isNaN(val)) {
    return 0;
  }
  return val;
};

const calculateTotal = (items) => {
  checkIsNan(items);
  let total = 0;
  items.forEach((item) => (total += item.quantity * item.price));
  return total;
};

export default calculateTotal;
