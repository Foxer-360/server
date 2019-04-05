import { Colors } from 'utils';

export class EnvironmentException extends Error {

  constructor(name: string) {
    const prefix = Colors.red('Environment variable');
    const sufix = Colors.red('is not defined in .env file or has bad format or value !');
    const message = `${prefix} ${Colors.green(name)} ${sufix}`;
    super(message);

    this.name = 'EnvironmentException';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }

}
