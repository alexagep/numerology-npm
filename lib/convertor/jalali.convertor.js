'use strict';
import { calculateNumerology } from "./calculator.js";

import moment from 'jalali-moment';

export function jalali(input) {
  const convertedBirthDate = moment.from(input, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
  return calculateNumerology(convertedBirthDate);
}

