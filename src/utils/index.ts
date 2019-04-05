import { Colors } from './colors';

/**
 * Simple util function to check if given
 * parameter is a number
 *
 * @param {any} a tested paramter
 * @return {boolean} true if a is number, otherwise returns false
 */
const isNumber = (a: any): boolean => {
  return !isNaN(Number(a));
};

/**
 * Callback for asyncForEach function
 */
type Callback<T = any> = (element?: T, index?: number, arr?: T[]) => void;

/**
 * Async version of forEach method
 *
 * @param {<T = any>T[]} arr array which will be processed
 * @param {Callback<T>} fce which will call for each element
 */
const asyncForEach = async <T = any> (arr: T[], fce: Callback<T>) => {
  for (let index = 0; index < arr.length; index++) {
    await fce(arr[index], index, arr);
  }
};

/**
 * Simple helper which returns access token from headers
 *
 * @param {any} headers
 * @return {string | null}
 */
const parseAccessTokenFromHeader = (headers: any): string | null => {
  if (!headers || !headers.authorization) {
    return null;
  }

  const regex = /^Bearer\s*([^\s]+)$/i;
  const match = regex.exec(headers.authorization);
  if (!match || !match[1]) {
    return null;
  }

  return match[1];
 };

export {
  Colors,
  isNumber,
  asyncForEach,
  parseAccessTokenFromHeader,
};
