'use strict';

import * as moment from 'jalali-moment';

export function jalali(input) {
  input = input.split('/').join('-');

  const convertedBirthDate = moment.from(input, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
  return calculateNumerology(convertedBirthDate);
}
