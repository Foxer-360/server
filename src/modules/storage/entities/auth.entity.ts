interface ClientAuthInfo {
  id: string;
  authorized: boolean;
  access_token?: string;
  id_token?: string;
  expiration?: number;
  decoded: any;
  profile: any;
}

type attrs = 'access_token' | 'id_token' | 'expiration' | 'authorized' | 'decoded' | 'profile';

/**
 * Storage entity for sockets to hold auth information about clients
 */
export class Auth {

  private clients: ClientAuthInfo[];

  constructor() {
    this.clients = [] as ClientAuthInfo[];
  }

  /** */
  public getInfo(id: string): ClientAuthInfo {
    const client = this.clients.find((val: ClientAuthInfo) => {
      if (val.id === id) {
        return true;
      }

      return false;
    });

    if (client) {
      return client;
    }

    return null;
  }

  /** */
  public isExists(id: string): boolean {
    const client = this.getInfo(id);

    return (client) ? true : false;
  }

  /** */
  public setAttribute(id: string, attr: attrs, val: any) {
    const index = this.getIndex(id);
    if (index < 0) {
      // Create new user
      const user = {
        id,
        authorized: false,
        [attr]: val,
      } as ClientAuthInfo;

      this.clients.push(user);
      return;
    }

    this.clients[index] = {
      ...this.clients[index],
      [attr]: val,
    } as ClientAuthInfo;
  }

  /** */
  public setAuthorized(id: string, auth: boolean) {
    this.setAttribute(id, 'authorized', auth);
  }

  /** */
  public remove(id: string | string[]) {
    if (!Array.isArray(id)) {
      id = [id];
    }

    this.clients = this.clients.filter((client: ClientAuthInfo) => {
      if (id.indexOf(client.id) > -1) {
        return false;
      }

      return true;
    });
  }

  /** */
  public create(id: string) {
    // Check if client exists
    const index = this.getIndex(id);

    if (index > -1) {
      return;
    }

    // Otherwise create new
    const user = {
      id,
      authorized: false,
    } as ClientAuthInfo;

    this.clients.push(user);
  }

  /** */
  public getAccessToken(id: string): string {
    const info = this.getInfo(id);
    if (!info || info === null) {
      return null;
    }

    if (!info.access_token || info.access_token === null || info.access_token.length < 1) {
      return null;
    }

    return info.access_token;
  }

  /** */
  public getIdToken(id: string): string {
    const info = this.getInfo(id);
    if (!info || info === null) {
      return null;
    }

    if (!info.id_token || info.id_token === null || info.id_token.length < 1) {
      return null;
    }

    return info.id_token;
  }

  /** */
  private getIndex(id: string): number {
    let index = -1;
    this.clients.forEach((val: ClientAuthInfo, i: number) => {
      if (val.id === id) {
        index = i;
      }
    }, this);

    return index;
  }

}
