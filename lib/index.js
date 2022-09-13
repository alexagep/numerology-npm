import * as converters from './converters/index.js';
import { chaldeanNumerology } from './converters/name.converter.js';

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

  /**
   * This function converts the name to chaldean Numerology number
   * @param {string} name like Ali Aghapour or John Smith
   * @returns
   */
  convertName(name) {
    return chaldeanNumerology(name);
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
