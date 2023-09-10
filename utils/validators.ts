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
