import { Inject } from '@nestjs/common';
import { Storage } from 'modules/storage/storage.provider';
import * as jwks from 'jwks-rsa';
import * as jwt from 'jsonwebtoken';

export class AuthService {

  private jwksClient: jwks.JwksClient;

  constructor(@Inject('Storage') private readonly storage: Storage) {
    // Create JWKs client
    this.jwksClient = jwks({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    });
  }

  /** */
  public async authorize(id: string, access_token: string, id_token: string): Promise<any> {
    // Check if user isn't already authorized
    if (this.isAuthorized(id)) {
      return Promise.resolve(true);
    }

    if (!access_token || access_token.length < 1) {
      return Promise.reject('Missing Access Token');
    }

    if (!id_token || id_token.length < 1) {
      return Promise.reject('Missing ID Token');
    }

    // Create new client in Storage
    this.storage.auth.create(id);

    // Setup access_token and id_token
    this.storage.auth.setAttribute(id, 'access_token', access_token);
    this.storage.auth.setAttribute(id, 'id_token', id_token);

    // Decode ID token and save it
    const profile = this.decodeIDToken(id_token);
    if (profile !== null) {
      this.storage.auth.setAttribute(id, 'profile', profile);
    }

    return new Promise((resolve, reject) => {
      this.verify(access_token)
      .then((decoded) => {
        // Check decoded
        if (!decoded) {
          resolve(false);
        }

        // Save info into storageerr
        this.storage.auth.setAuthorized(id, true);
        this.storage.auth.setAttribute(id, 'decoded', decoded);
        this.storage.auth.setAttribute(id, 'expiration', decoded.exp as number);

        resolve(true);
      }, (message) => {
        reject(message);
      });
    });
  }

  /** */
  public isAuthorized(id: string): boolean {
    const client = this.storage.auth.getInfo(id);
    if (client === null) {
      return false;
    }

    if (!client.authorized) {
      return false;
    }

    if (!client.expiration) {
      this.storage.auth.setAuthorized(id, false);
      return false;
    }

    // Valide expiration time
    const now = Math.round(new Date().getTime() / 1000);
    if ((now - client.expiration) > 0) {
      this.storage.auth.setAuthorized(id, false);
      return false;
    }

    return true;
  }

  /**
   * Remove client from storage
   *
   * @param {string} id
   * @return {void}
   */
  public remove(id: string): void {
    this.storage.auth.remove(id);
  }

  /** */
  private async verify(access_token: string): Promise<any> {
    // No Access Token found
    if (access_token === null) {
      return Promise.reject('Missing Access Token');
    }

    return new Promise((resolve, reject) => {
      interface Decoded {
        header: any;
        payload: any;
      }

      let header, payload;
      try {
        const decoded = jwt.decode(access_token, { complete: true }) as Decoded;

        header = decoded.header;
        payload = decoded.payload;
      } catch (err) {
        reject('Invalid Access Token');
        return;
      }

      if (!header || !header.kid || !payload) {
        reject('Invalid Access Token');
        return;
      }

      this.jwksClient.getSigningKey(header.kid, (err, key) => {
        if (err) {
          reject(err.message);
          return;
        }

        const publicKey = key.publicKey || key.rsaPublicKey;

        // Verify
        jwt.verify(access_token, publicKey, { algorithms: ['RS256'] }, (verr, decoded) => {
          if (verr) {
            reject(verr.message);
            return;
          }

          resolve(decoded);
        });
      });
    });
  }

  /** */
  private decodeIDToken(id_token: string) {
    if (!id_token || id_token.length < 1) {
      return null;
    }

    const decode = jwt.decode(id_token, { complete: true }) as { payload: any };
    if (!decode || decode === undefined) {
      return null;
    }

    return decode.payload;
  }

}
