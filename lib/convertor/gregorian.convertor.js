'use strict';

import { calculateNumerology } from "./calculator.js";

export function gregorian(date) {
  return calculateNumerology(date);
}
