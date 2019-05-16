import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';

import { Colors, getSigningPublicKey, loadEnvConfig, readEnvironmentVariable } from 'utils';

// Load config from .env
loadEnvConfig();

const log = (message: string): void => {
  const prefix = Colors.red(Colors.bright('[Auth Error]'));
  const msg = Colors.red(message);

  // tslint:disable-next-line:no-console
  console.log(`${prefix} ${msg}`);
};

const logOperation = (args: any): void => {
  const prefix = Colors.yellow(Colors.bright('[GraphQL Operation]'));
  let op = `Operation wan't provided!`;
  if (args && args.body && args.body.operationName) {
    op = args.body.operationName;
  }
  const text = Colors.yellow(op);

  // tslint:disable-next-line:no-console
  console.log(`${prefix} ${text}`);
};

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject('JwksClient') private readonly client: JwksClient) {}

  public canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    // Get authorization bearer from headers
    if (!context) {
      log(`Bearer wasn't provided!`);
      return false;
    }
    const args = context.getArgByIndex(0);
    if (!args || !args.headers || !args.headers.authorization) {
      logOperation(args);
      log(`Bearer wasn't provided!`);
      return false;
    }

    const regex = /^Bearer\s*([^\s]+)$/i;
    const match = regex.exec(args.headers.authorization);
    if (!match || !match[1]) {
      logOperation(args);
      log(`Bearer wasn't provided!`);
      return false;
    }

    const accessToken = match[1];

    // Verify env properties
    const audience = readEnvironmentVariable('auth0_audience');

    // Verify JWT access token
    const options = {
      algorithms: ['RS256'],
      audience,
    };

    return new Promise((resolve) => {
      jwt.verify(accessToken, getSigningPublicKey(this.client), options, (err, decode) => {
        if (err) {
          logOperation(args);
          log(err.toString());

          return resolve(false);
        }

        return resolve(true);
      });
    });
  }

}
