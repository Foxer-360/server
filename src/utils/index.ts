import { config } from 'dotenv';
import { existsSync } from 'fs';
import * as path from 'path';

import { EnvironmentException } from 'common/exceptions/environment.exception';
import { Colors } from './colors';
import { getSigningPublicKey } from './auth';

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

/**
 * Simple function to get path to .env file. There are only two options. First
 * option is in root directory of this package and second option is in root
 * directory of whole auth system, where this package is only as workspace.
 *
 * @type {[type]}
 */
const getEnvFilePath = (): string | undefined => {
  const root = path.resolve(__dirname, '../..');
  const workspaceRoot = path.resolve(root, '..');

  const first = path.resolve(root, '.env');
  const second = path.resolve(workspaceRoot, '.env');

  // In root directory of this package
  if (existsSync(first)) {
    return first;
  }

  // In root directory of workspace
  if (existsSync(second)) {
    return second;
  }

  // There is no .env file
  // tslint:disable-next-line:no-console
  console.error('Server has no .env file. Please check, that you have it in correct place!');
  process.exit(1);
  return undefined;
};

const loadEnvConfig = () => {
  const envPath = getEnvFilePath();

  config({ path: envPath });
};

/**
 * Check if environment variable is defined in .env file, if not throw error.
 *
 * @param {string} name of variable (can be lower case, automatically convert
 *                      to upper case)
 * @return {boolean}
 */
const checkEnvironmentVariable = (name: string): boolean => {
  name = name.toUpperCase();

  if (!process.env[name] || process.env[name] === undefined || process.env[name] === null) {
    const prefix = Colors.red('You need to specify');
    const envName = Colors.red(Colors.bright(name));
    const postfix = Colors.red('in environment!');
    // tslint:disable-next-line:no-console
    console.log(`${prefix} ${envName} ${postfix}`);

    throw new EnvironmentException(name);
    return false;
  }

  if ((process.env[name] as string).length < 1) {
    const prefix = Colors.red('Environment variable');
    const envName = Colors.red(Colors.bright(name));
    const postfix = Colors.red('is defined, but its empty!');
    // tslint:disable-next-line:no-console
    console.log(`${prefix} ${envName} ${postfix}`);

    throw new EnvironmentException(name);
    return false;
  }

  return true;
};

/**
 * Read environment variable defined in .env file. If it's not defined, throw
 * error.
 *
 * @param {string} naem of variable (can be lower case, automatically convert
 *                      to upper case)
 * @return {string} value
 */
const readEnvironmentVariable = (name: string): string => {
  name = name.toUpperCase();
  checkEnvironmentVariable(name);

  return process.env[name] as string;
};

export {
  Colors,
  asyncForEach,
  checkEnvironmentVariable,
  getEnvFilePath,
  getSigningPublicKey,
  isNumber,
  loadEnvConfig,
  parseAccessTokenFromHeader,
  readEnvironmentVariable,
};
