"use strict";

export const numberToKilo = function (number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
};

export const currentYear = new Date().getFullYear();
