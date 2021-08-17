const checkIsNan = (val) => {
  if (isNaN(val)) {
    return 0;
  }
  return val;
};

const calculateTotal = (items) => {
  checkIsNan(items);
  if (items) {
    return items.map((item) => {
      return Number(item.quantity) * parseFloat(item.price);
    });
  }

  return items;
};

export default calculateTotal;
