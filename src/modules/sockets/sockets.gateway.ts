import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsException,
} from '@nestjs/websockets';
import { AuthService } from './auth.service';
import { ComposerService } from './composer.service';
import { config } from 'dotenv';
import { Colors } from 'utils';
import { EnvironmentException } from 'common/exceptions/environment.exception';

interface StandardResponse {
  status: 'success' | 'error';
  message?: string;
  payload?: any;
}

// Load config from .env
config();

if (!process.env.SOCKET_PORT) {
  throw new EnvironmentException('SOCKET_PORT');
}

// Convert into number and check it
const port = Number(process.env.SOCKET_PORT);
if (isNaN(port)) {
  throw new EnvironmentException('SOCKET_PORT');
}

@WebSocketGateway(port)
export class SocketsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() private server;

  private DEBUG_MESSAGES = true;

  private UpdateTypes = {
    newEditors: 'newEditors',
    newLocks: 'newLocks',
    addComponent: 'addComponent',
    updateComponent: 'updateComponent',
    removeComponent: 'removeComponent',
    moveComponent: 'moveComponent',
  };

  constructor(
    private readonly authService: AuthService,
    private readonly composerService: ComposerService,
  ) {
    // Nothing to do
  }

  /** */
  public afterInit(server: any) {
    this.debug('Socket server was initialized');
  }

  /** */
  public async handleConnection(client: any) {
    this.debug(`Client with ID ${client.id} was connected`);

    // Try to get tokens from query
    const query = client.handshake.query;
    if (!query) {
      this.debug(`Client ${client.id} is not authorized`);
      client.emit('unauthorized');
      return Promise.resolve();
    }

    const access_token = query.access_token;
    const id_token = query.id_token;

    // Check both tokens
    if (!access_token || access_token.length < 1) {
      this.debug(`Client ${client.id} is not authorized`);
      client.emit('unauthorized');
      return Promise.resolve();
    }
    if (!id_token || id_token.length < 1) {
      this.debug(`Client ${client.id} is not authorized`);
      client.emit('unauthorized');
      return Promise.resolve();
    }

    // Try to authorize
    this.debug(`Try to authorize client ${client.id}`);
    try {
      // Try verify
      const authorized = await this.authService.authorize(client.id, access_token, id_token);

      if (authorized) {
        this.debug(`Client ${client.id} is successfuly authorized`);
        client.emit('authorize', { status: 'success' });
        return Promise.resolve();
      }

      this.debug(`Client ${client.id} is not authorized`);
      client.emit('authorize', { status: 'error', message: 'Verification failed.' });
      return Promise.resolve();
    } catch (message) {
      this.debug(`Client ${client.id} has error:`, message);
      client.emit('authorize', { status: 'error', message });
      return Promise.resolve();
    }
  }

  /** */
  public handleDisconnect(client: any) {
    this.debug(`Client with ID ${client.id} was disconnected`);

    // Remove client from Composer
    const info = this.composerService.forceRemoveClient(client.id);
    if (info.component !== null) {
      // Inform about new locks
      this.informAboutUpdate(client.id, info.page, this.UpdateTypes.newLocks, {
        pageId: info.page,
        locks: this.composerService.getLockedComponents(info.page),
      });
    }
    if (info.page !== null) {
      // Inform about new editors
      this.informAboutUpdate(client.id, info.page, this.UpdateTypes.newEditors, {
        pageId: info.page,
        editors: this.composerService.getClientsWhoEditPage(info.page),
      });
    }

    // Remove client from auth (logout)
    this.authService.remove(client.id);
  }

  /** */
  @SubscribeMessage('authorize')
  public async authorize(client: any, data: any): Promise<WsResponse<StandardResponse>> {
    // Debug message
    this.debug(`Client ${client.id} is trying to authorize`);

    // Check for data
    if (!data.access_token || data.access_token.length < 1) {
      this.debug(`Client ${client.id} has error:`, 'Missing Access Token');
      throw new WsException('Missing Access Token');
    }
    if (!data.id_token || data.id_token.length < 1) {
      this.debug(`Client ${client.id} has error:`, 'Missing ID Token');
      throw new WsException('Missing ID Token');
    }

    const id = client.id;

    // Try to authorize
    try {
      // Try verify
      const authorized = await this.authService.authorize(id, data.access_token, data.id_token);

      if (authorized) {
        this.debug(`Client ${client.id} is successfuly authorized`);
        return this.response('authorize', { status: 'success' });
      }

      this.debug(`Client ${client.id} is not authorized`);
      return this.response('authorize', { status: 'error', message: 'Verification failed.' });
    } catch (message) {
      this.debug(`Client ${client.id} has error:`, message);
      this.response('authorize', { status: 'error', message });
    }
  }

  /** */
  @SubscribeMessage('composer/start-edit-page')
  public async startEditPage(client: any, data: any): Promise<WsResponse<StandardResponse>> {
    try {
      const success = await this.composerService.startEditPage(client.id, data);

      if (!success) {
        const response = this.response('composer/start-edit-page', {
          status: 'error',
          message: 'Something went wrong! Try it again.',
        });
        return Promise.resolve(response);
      }

      // Send new editors
      this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.newEditors, {
        pageId: data.pageId,
        editors: this.composerService.getClientsWhoEditPage(data.pageId),
      });
      return Promise.resolve(this.response('composer/start-edit-page', {
        status: 'success',
      }));
    } catch (e) {
      const response = this.response('composer/start-edit-page', {
        status: 'error',
        message: e.message,
      });
      return Promise.resolve(response);
    }
  }

  /** */
  @SubscribeMessage('composer/get-page')
  public getPageInfo(client: any, data: any): WsResponse<StandardResponse> {
    const page = this.composerService.getPageInformation(client.id, data);

    if (page !== undefined && page !== null) {
      return this.response('composer/get-page', {
        status: 'success',
        payload: { ...page },
      });
    }

    return this.response('composer/get-page', {
      status: 'error',
      message: 'No data about page was loaded. Meybe page doesnt exists.',
    });
  }

  /** */
  @SubscribeMessage('composer/stop-edit-page')
  public async stopEditPage(client: any, data: any): Promise<WsResponse<StandardResponse>> {
    try {
      const success = await this.composerService.stopEditPage(client.id, data);

      if (!success) {
        const response = this.response('composer/stop-edit-page', {
          status: 'error',
          message: 'Something went wrong! Try it again.',
        });
        return Promise.resolve(response);
      }

      // Send new locks for sure
      this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.newLocks, {
        pageId: data.pageId,
        locks: this.composerService.getLockedComponents(data.pageId),
      });
      // Send new editors
      this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.newEditors, {
        pageId: data.pageId,
        editors: this.composerService.getClientsWhoEditPage(data.pageId),
      });
      return Promise.resolve(this.response('composer/stop-edit-page', {
        status: 'success',
      }));
    } catch (e) {
      const response = this.response('composer/stop-edit-page', {
        status: 'error',
        message: e.message,
      });
      return Promise.resolve(response);
    }
  }

  /** */
  @SubscribeMessage('composer/start-edit-component')
  public startEditComponent(client: any, data: any): WsResponse<StandardResponse> {
    const success = this.composerService.startEditComponent(client.id, data);

    if (!success) {
      return this.response('composer/start-edit-component', {
        status: 'error',
        message: 'Lock component for you failed',
      });
    }

    // Send new locks
    this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.newLocks, {
      pageId: data.pageId,
      locks: this.composerService.getLockedComponents(data.pageId),
    });
    return this.response('composer/start-edit-component', {
      status: 'success',
    });
  }

  /** */
  @SubscribeMessage('composer/add-component')
  public addComponent(client: any, data: any): WsResponse<StandardResponse> {
    const success = this.composerService.addComponent(client.id, data);

    if (!success) {
      return this.response('composer/add-component', {
        status: 'error',
        message: 'Add component into content failed',
      });
    }

    const positionMap = this.composerService.getComponentPositionMap(data.pageId);

    // Send added component
    this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.addComponent, {
      who: client.id,
      pageId: data.pageId,
      positionMap,
      component: data.component,
    });

    return this.response('composer/add-component', {
      status: 'success',
      payload: { positionMap },
    });
  }

  /** */
  @SubscribeMessage('composer/update-component')
  public updateComponent(client: any, data: any): WsResponse<StandardResponse> {
    const success = this.composerService.updateComponent(client.id, data);

    if (!success) {
      return this.response('composer/update-component', {
        status: 'error',
        message: 'Update component failed',
      });
    }

    // Send update component
    this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.updateComponent, {
      who: client.id,
      pageId: data.pageId,
      componentId: data.componentId,
      data: data.data,
    });

    return this.response('composer/update-component', {
      status: 'success',
    });
  }

  /** */
  @SubscribeMessage('composer/move-component')
  public moveComponent(client: any, data: any): WsResponse<StandardResponse> {
    const success = this.composerService.moveComponent(client.id, data);

    if (!success) {
      return this.response('composer/move-component', {
        status: 'error',
        message: 'Move component failed',
      });
    }

    const positionMap = this.composerService.getComponentPositionMap(data.pageId);

    // Send move component
    this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.moveComponent, {
      who: client.id,
      pageId: data.pageId,
      componentId: data.componentId,
      position: data.position,
      positionMap,
    });

    return this.response('composer/move-component', {
      status: 'success',
      payload: { positionMap },
    });
  }

  /** */
  @SubscribeMessage('composer/remove-component')
  public removeComponent(client: any, data: any): WsResponse<StandardResponse> {
    const success = this.composerService.removeComponent(client.id, data);

    if (!success) {
      return this.response('composer/remove-component', {
        status: 'error',
        message: 'Remove component from content failed',
      });
    }

    const positionMap = this.composerService.getComponentPositionMap(data.pageId);

    // Send remove component
    this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.removeComponent, {
      who: client.id,
      pageId: data.pageId,
      componentId: data.componentId,
      positionMap,
    });

    return this.response('composer/remove-component', {
      status: 'success',
      payload: { positionMap },
    });
  }

  /** */
  @SubscribeMessage('composer/stop-edit-component')
  public stopEditComponent(client: any, data: any): WsResponse<StandardResponse> {
    const success = this.composerService.stopEditComponent(client.id, data);

    if (!success) {
      return this.response('composer/stop-edit-component', {
        status: 'error',
        message: 'Failed stoping edit component',
      });
    }

    // Send new locks
    this.informAboutUpdate(client.id, data.pageId, this.UpdateTypes.newLocks, {
      pageId: data.pageId,
      locks: this.composerService.getLockedComponents(data.pageId),
    });
    return this.response('composer/stop-edit-component', {
      status: 'success',
    });
  }

  /** */
  @SubscribeMessage('composer/get-position-map')
  public getPositionMap(client: any, data: any): WsResponse<StandardResponse> {
    const positionMap = this.composerService.getComponentPositionMap(data.pageId);

    if (!positionMap || positionMap === null) {
      return this.response('composer/get-position-map', {
        status: 'error',
        message: 'Get position map failed',
      });
    }

    return this.response('composer/get-position-map', {
      status: 'success',
      payload: { positionMap },
    });
  }

  /** */
  @SubscribeMessage('composer/commit')
  public commit(client: any, data: any): WsResponse<StandardResponse> {
    try {
      const updates = this.composerService.resolveCommit(client.id, data.pageId, data.data);

      this.informAboutUpdateCommit(client.id, data.pageId, data.data);

      return this.response('composer/commit', {
        status: 'success',
        payload: { updates },
      });
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.log(e.message);
    }
    return this.response('composer/commit', {
      status: 'error',
      message: 'Internal error',
    });
  }

  // tslint:disable-next-line:no-any
  private informAboutUpdateCommit(id: string, pageId: string, data: any): void {
    const clientIds = this.composerService.getClientsWhoEditPage(pageId);
    if (!clientIds || clientIds === null) {
      return;
    }

    // Prepare response
    const event = 'composer/updateCommits';
    const payload = {
      commits: data.commits,
    };

    // Send to all clients
    clientIds.forEach((client: string) => {
      // Skip client who fired this update
      if (client === id) {
        return;
      }

      // Send event to client
      const socket = this.server.sockets.sockets[client];
      // If socket doesn't exist (some type of error)
      if (!socket || socket === null) {
        return;
      }

      socket.emit(event, payload);
    }, this);
  }

  /**
   * This method gets all clients related with page and
   * inform them about new update, like somebody lock component
   * or somebody move component, etc
   *
   * @param {string} id of client, who fire this. He doesn't need update
   * @param {string} pageId
   * @param {string} type of update (moveComponent, newLocks, newEditors)
   * @param {any} data which contains these updates
   * @return {void}
   */
  private informAboutUpdate(id: string, pageId: string, type: string, data: any): void {
    const clientIds = this.composerService.getClientsWhoEditPage(pageId);
    if (!clientIds || clientIds === null) {
      return;
    }

    // Prepare response
    const event = 'composer/update';
    const payload = {
      type,
      data,
    };

    // Send to all clients
    clientIds.forEach((client: string) => {
      // Skip client who fired this update
      if (client === id) {
        return;
      }

      // Send event to client
      const socket = this.server.sockets.sockets[client];
      // If socket doesn't exist (some type of error)
      if (!socket || socket === null) {
        return;
      }

      socket.emit(event, payload);
    }, this);
  }

  /**
   * Simple console.log, but with condition if debug messages are
   * enabled
   *
   * @param {any[]} args
   * @return {void}
   */
  private debug(...args: any[]): void {
    if (this.DEBUG_MESSAGES) {
      const prefix = Colors.bright(Colors.blue('[SOCKET]'));
      // tslint:disable-next-line:no-console
      console.log(prefix, ...args);
    }
  }

  /**
   * Create response object
   *
   * @param {string} event
   * @param {any} data
   * @return {WsResponse<any>}
   */
  private response(event: string, data: any): WsResponse<any> {
    return { event, data };
  }

}
