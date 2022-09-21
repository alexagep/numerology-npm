import * as converters from './convertors/index.js';

export class Numeroljs {
  /**
   * This function handles the dateformat in feature
   * @param {string} date like 1989/05/22(gregorian) or 1368/03/01(jalali)
   * @param {string} dateformat jalali | gregorian(default)
   * @returns
   */
  handle(date, dateformat = 'gregorian') {
    return converters[dateformat](date);
  }
}

/**
 * @deprecated
 */
export const inPersian = converters['jalali'];

/**
 * @deprecated
 */
export const calculateNumerology = converters['gregorian'];
