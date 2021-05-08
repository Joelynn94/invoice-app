const checkIsNan = (val) => {
  if (isNaN(val)) {
    return 0;
  }
  return val;
};

const calculateTotal = (items) => {
  checkIsNan(items);
  let total = 0;
  for (const item of items) {
    total += item.total;
  }
  return total;
};

export default calculateTotal;
