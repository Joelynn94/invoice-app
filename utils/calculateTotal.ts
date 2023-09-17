import { isNumberValid } from "./validators";
import { formatToCurrency } from "./formatToCurrency";

/**
 * Calculates the quantity and price totals for a given service.
 *
 * @param {number} quantity - The quantity of the service.
 * @param {number} price - The price of the service.
 * @returns {number} The total price of the service formatted as currency.
 */
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
