import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

import { Foxer360AuthService } from 'common/services/foxer360auth.service';
import { parseAccessTokenFromHeader } from 'utils';

@Injectable()
export class UserMiddleware implements NestMiddleware {

  constructor(private readonly foxer360auth: Foxer360AuthService) {}

  public resolve(...args) {
    return async (req, res, next) => {
      const accessToken = parseAccessTokenFromHeader(req.headers);
      if (!accessToken) {
        // tslint:disable-next-line:no-console
        console.log('No Access Token found in Headers!');
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }

      if (!await this.foxer360auth.userExists(accessToken)) {
        // tslint:disable-next-line:no-console
        console.log(`User doesn't exists in this client!`);
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }

      next();
    };
  }

}
