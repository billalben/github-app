"use strict";

/**
 * convert number to kilo
 * @param {number} number - The number to convert to kilo.
 * @returns {string} - The formatted number.
 * @example
 * numberToKilo(1000); // 1K
 * numberToKilo(10000); // 10K
 */

export const numberToKilo = (number) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
};

export const currentYear = new Date().getFullYear();
