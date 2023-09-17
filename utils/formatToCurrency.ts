import { isNumberValid } from "./validators";
/*
 * Format a price to a currency
 *
 * @param {string} price - The price to format
 * @param {string} currency - The currency to format to
 * @param {string} locale - The locale to format to
 * @returns {string} The formatted price
 *
 * @example
 * formatToCurrency("1000", "USD", "en-US");
 * // => "$1,000.00"
 * @example
 * formatToCurrency("1000", "EUR", "de-DE");
 * // => "1.000,00 €"
 */
export const formatToCurrency = (
  price: number | string,
  currency: string = "USD",
  locale: string = "en-US"
): string | undefined => {
  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    console.error("Invalid price string:", price);
    return undefined;
  }

  let currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return currencyFormatter.format(numericPrice);
};

// export const formatToCurrency = (
//   price: number | string,
//   currency: string = "USD",
//   locale: string = "en-US"
// ): string => {
//   console.log({
//     price,
//     currency,
//     locale,
//   });
//   const numericPrice = typeof price === "string" ? parseFloat(price) : price;

//   if (!isNumberValid(numericPrice)) {
//     throw new Error("Invalid price string: " + price);
//   }

//   let currencyFormatter = new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency: currency,
//   });

//   console.log(typeof currencyFormatter.format(numericPrice));
//   return currencyFormatter.format(numericPrice);
// };
