'use strict';

export function gregorian(date) {
  if (typeof date == 'number') {
    date = date.toString();
  }

  date = date.split('-').join('').split('/').join('').split('');

  const birthNumber = date.reduce((acc, ret) => {
    return +acc + +ret;
  });

  if (birthNumber > 9 && birthNumber !== 11 && birthNumber !== 22 && birthNumber !== 33) {
    return calculateNumerology(birthNumber);
  }

  return birthNumber;
}
