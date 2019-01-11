import { Prisma } from 'generated/prisma';
import { builder, Delta } from '@foxer360/delta';

/**
 * NOTE: This storage was copied from old version of server, where was used REST API
 * instead of GraphQL. In old version, there was page id as number. Now it's a string.
 * Also page id here means id of translations of page... Not page.
 */

interface LooseObject {
  [key: string]: any;
}

interface PageInfo {
  id: string;
  content: LooseObject;
  _componentsIds: string[]; // Helper which will contain ids of all components in content
  _whoEdits: { [key: number]: string | null }; // Helper save client ids to components (who lock it)
  _editors: string[]; // Array if client ids who edits this page
  delta: Delta;
}

interface PagesStorage {
  [key: number]: PageInfo;
}

interface ClientInfo {
  id: string;
  actualPage: string | null; // ID of page which client actually edits
  actualComponent: number | null; // ID of component which client actually edits in actualPage
}

interface ClientsStorage {
  [key: string]: ClientInfo;
}

/**
 * Storage entity to handle informations about
 * Composer like which component is locked
 */
export class Composer {

  private pages: PagesStorage;
  private clients: ClientsStorage;

  constructor(private readonly prisma: Prisma) {
    // Init pages map
    this.pages = {};
    this.clients = {};
  }

  public getComponentIds(page: string) {
    const content = builder(this.pages[page].delta, {...this.pages[page].content});
    const componentIds = [];

    // tslint:disable-next-line:no-any
    const recursive = (d: any) => {
      if (!d) {
        return;
      }
      if (d.type === 'container' || d.id === 'root') {
        if (d.content && d.content.length > 0) {
          // tslint:disable-next-line:no-any
          d.content.forEach((c: any) => {
            recursive(c);
          });
        }
      } else {
        componentIds.push(d.id);
      }
    };

    recursive(content);

    return componentIds;
  }

  /**
   * Load page from database into storage
   *
   * @param {string} page
   * @return {Promise<boolean>} true if it was successful, otherwise returns false
   */
  public async loadPage(page: string): Promise<boolean> {
    try {
      // const data = await this.pageService.getExactly(page);
      const { content } = await this.prisma.query.pageTranslation({
        where: { id: page },
      }, '{ content }');

      if (content === null || content === undefined) {
        return Promise.resolve(false);
      }

      const componentIds = [];
      // tslint:disable-next-line:no-any
      const recursive = (d: any) => {
        if (!d) {
          return;
        }
        if (d.type === 'container' || d.id === 'root') {
          if (d.content && d.content.length > 0) {
            // tslint:disable-next-line:no-any
            d.content.forEach((c: any) => {
              recursive(c);
            });
          }
        } else {
          componentIds.push(d.id);
        }
      };

      recursive(content);

      // if (!Array.isArray(content)) {
      //   content = [];
      // } else {
      //   content.forEach((c: LooseObject) => {
      //     componentIds.push(c.id);
      //   }, this);
      // }

      const pageInfo = {
        id: page,
        content,
        _componentsIds: componentIds,
        _whoEdits: {},
        _editors: [],
        delta: new Delta(),
      } as PageInfo;
      if (!content || content.id !== 'root') {
        pageInfo.delta.commit('init', { data: {} });
        pageInfo.delta.push();
      }

      this.pages[page] = pageInfo;
      return Promise.resolve(true);
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  /**
   * Client start edit page. If page is no loaded, then load it from database
   * and prepare it.
   *
   * @param {string} client
   * @param {string} page
   * @return {Promise<boolean>} true if client start edit page, otherwise returns false
   */
  public async clientStartEditPage(clientId: string, page: string, userInfo: any): Promise<boolean> {
    // If client doesn't exist, register him
    if (!this.isClientRegistered(clientId)) {
      this.registerClient(clientId);
    }

    // If client is already editing another page
    const actualPage = this.clients[clientId].actualPage;
    if (actualPage !== null) {
      if (actualPage === page) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    }

    // If page is no loaded, than load it from db
    if (!this.isPageLoaded(page)) {
      try {
        const loaded = await this.loadPage(page);

        if (!loaded) {
          return Promise.resolve(false);
        }
      } catch (e) {
        return Promise.resolve(false);
      }
    }

    // Now add client as editor of page
    this.pages[page]._editors.push({ socketId: clientId, userInfo });
    this.clients[clientId].actualPage = page;

    return Promise.resolve(true);
  }

  /**
   * Client stop editing page. Also save actual state into DB.
   *
   * @param {string} client
   * @param {string} page
   * @return {Promise<boolean>} true if it was successful, otherwise returns false
   */
  public async clientStopEditPage(clientId: string, page: string): Promise<boolean> {
    // If client is not editing this page
    // if (!this.isClientEditingPage(client, page)) {
    //   return Promise.resolve(true);
    // }
    if (!this.isClientRegistered(clientId)) {
      return Promise.resolve(true);
    }

    if (page !== this.clients[clientId].actualPage) {
      if (!this.clients[clientId].actualPage) {
        return Promise.resolve(true);
      }

      page = this.clients[clientId].actualPage;
    }

    // Check if client edit some component, if so, then stop edit this component
    const actualComponent = this.clients[clientId].actualComponent;
    if (actualComponent !== null) {
      const stopped = this.clientStopEditingComponent(clientId, page, actualComponent);
      if (!stopped) {
        return Promise.resolve(false);
      }
    }

    // Sort components in content
    // const content = this.pages[page].content.sort((a: LooseObject, b: LooseObject) => {
    //   return a.position - b.position;
    // });

    // Send actual state of page into DB
    // const data = {
    //   content,
    // } as UpdatePageDto;

    try {

      if (await this.prisma.query.pageTranslation({ where: { id: page }})) {
        await this.prisma.mutation.updatePageTranslation({
          data: {
            content: builder(this.pages[page].delta, {...this.pages[page].content}),
          },
          where: {
            id: page,
          },
        }, '{ id }');
      }
      // await this.pageService.update(data, page);
    } catch (e) {
      return Promise.resolve(false);
    }

    // Then remove client from editors
    this.pages[page]._editors = this.pages[page]._editors.filter((val: LooseObject) => {

      if (val.socketId === clientId) {
        return false;
      }

      return true;
    });
    this.clients[clientId].actualPage = null;

    return Promise.resolve(true);
  }

  /**
   * Check if client is editing given page
   *
   * @param {string} client
   * @param {string} page
   * @return {boolean}
   */
  public isClientEditingPage(clientId: string, page: string): boolean {
    // Page must be loaded
    if (!this.isPageLoaded(page)) {
      return false;
    }

    // Client must be registered
    if (!this.isClientRegistered(clientId)) {
      return false;
    }

    // Check if client has page in editing
    if (this.clients[clientId].actualPage === page) {
      return true;
    }

    return false;
  }

  /**
   * Check if page is loaded in storage
   *
   * @param {string} page id of page, same as in DB (it's page in some language, not structure)
   * @return {boolean} true if page is loaded in storage, otherwise returns false
   */
  public isPageLoaded(page: string): boolean {
    if (this.pages[page] !== undefined && this.pages[page] !== null) {
      return true;
    }
    return false;
  }

  /**
   * Check if client is registered. It means that he
   * already start edit some page or component or something
   *
   * @param {string} client id of client (socket id)
   * @return {boolean} true if clieant is registered in storage, otherwise returns false
   */
  public isClientRegistered(clientId: string): boolean {
    if (this.clients[clientId] !== undefined && this.clients[clientId] !== null) {
      return true;
    }

    return false;
  }

  /**
   * Check if page contain some component
   *
   * @param {string} page
   * @param {number} component
   * @return {boolean} true if page contain component, otherwise returns false
   */
  public isPageContainComponent(page: string, component: number): boolean {
    return this.pages[page]._componentsIds.indexOf(component) > -1;
  }

  /**
   * Try to lock component for client. If client is not in page editing,
   * than it's impossible
   *
   * @param {string} client
   * @param {string} page
   * @param {number} component
   * @return {boolean} true if client can edit this component, otherwise returns false
   */
  public clientStartEditComponent(clientId: string, page: string, component: number): boolean {
    // Client must already edit this page
    if (!this.isClientEditingPage(clientId, page)) {
      return false;
    }

    // This page must contain component
    if (!this.isPageContainComponent(page, component)) {
      return false;
    }

    // Component must be unlocked (no other user edits it already)
    const whoEdit = this.getClientWhoEditComponent(page, component);
    if (whoEdit !== undefined && whoEdit !== null && whoEdit !== clientId) {
      return false;
    }

    // Client is ready to lock this component
    this.pages[page]._whoEdits[component] = clientId;
    this.clients[clientId].actualComponent = component;

    return true;
  }

  /**
   * Check if client is editing component in page.
   *
   * @param {string} client
   * @param {string} page
   * @param {number} component
   * @return {boolean} true if client is editing component, otherwise returns false
   */
  public isClientEditingComponent(clientId: string, page: string, component: number): boolean {
    // Client must edits page already
    if (!this.isClientEditingPage(clientId, page)) {
      return false;
    }

    if (this.clients[clientId].actualComponent === component) {
      return true;
    }

    return false;
  }

  /**
   * Update content of component. This is only possible, if client
   * is already registered, page is already loaded, client is already
   * editing page and client is already editing component. Otherwise,
   * client can't update component
   *
   * @param {string} client
   * @param {string} page
   * @param {number} component
   * @param {any} data
   * @return {boolean} true if component was updated, otherwise returns false
   */
  public clientUpdateComponent(clientId: string, page: string, component: number, data: any): boolean {
    if (!this.isClientEditingComponent(clientId, page, component)) {
      return false;
    }

    // Verify somehow data

    // Edit component in content
    this.pages[page].content = this.pages[page].content.map((c: LooseObject) => {
      if (c.id !== component) {
        return c;
      }

      return data;
    });

    return true;
  }

  /**
   * Client wants to stop editing some component
   *
   * @param {string} client
   * @param {string} page
   * @param {number} component
   * @return {boolean} false if client is editing component but can't unlock it, otherwise returns true
   */
  public clientStopEditingComponent(clientId: string, page: string, component: number): boolean {
    if (!this.isClientEditingComponent(clientId, page, component)) {
      return true;
    }

    this.pages[page]._whoEdits[component] = null;
    this.clients[clientId].actualComponent = null;

    return true;
  }

  /**
   * Get array of clients who edits page
   *
   * @param {string} page
   * @return {string[]}
   */
  public getClientsWhoEditPage(page: string): string[] {
    // Page must be loaded
    if (!this.isPageLoaded(page)) {
      return [];
    }

    return this.pages[page]._editors;
  }

  /**
   * Get id of client who edit (lock) component
   *
   * @param {string} page
   * @param {number} client
   * @return {string} client id or null, if component is unlocked (edited by anyone)
   */
  public getClientWhoEditComponent(page: string, component: number): string {
    if (!this.isPageLoaded(page)) {
      return null;
    }

    if (!this.isPageContainComponent(page, component)) {
      return null;
    }

    const who = this.pages[page]._whoEdits[component];
    return who;
  }

  /**
   * Get list of components which are locked, and also clients which lock them
   *
   * @param {string} page
   * @return {LooseObject[]} array of object { component, client }
   */
  public getLockedComponents(page: string): LooseObject[] {
    if (!this.isPageLoaded(page)) {
      return [];
    }

    const res = [] as LooseObject[];
    for (const key in this.pages[page]._whoEdits) {
      if (this.pages[page]._whoEdits.hasOwnProperty(key)) {
        res.push({ component: key, client: this.pages[page]._whoEdits[key] });
      }
    }

    return res;
  }

  /**
   * Register client in storage
   *
   * @param {string} client
   * @return {void}
   */
  public registerClient(clientId: string): void {
    this.clients[clientId] = {
      id: clientId,
      actualPage: null,
      actualComponent: null,
    };
  }

  /**
   * Add new component into content of page. This will check if ID is available
   * and if page exist and etc..
   *
   * @param {string} client
   * @param {string} page
   * @param {LooseObject} data
   * @return {boolean} true if component was added, otherwise returns false
   */
  public clientAddComponent(clientId: string, page: string, data: LooseObject): boolean {
    if (!this.isClientEditingPage(clientId, page)) {
      return false;
    }

    // Check if ID is available
    const id = data.id;
    if (isNaN(Number(id))) {
      return false;
    }

    if (this.pages[page]._componentsIds.indexOf(id) > -1) {
      return false;
    }

    // Check position
    let position = data.position;
    if (position === undefined || position === null) {
      position = this.pages[page].content.length;
    }

    // If position is negative, start counting from end
    if (position < 0) {
      position = this.pages[page].content.length + position + 1;
    }

    // Add to position
    let content = [];
    if (this.pages[page].content && this.pages[page].content.length > 0) {
      content = this.pages[page].content.map((o: LooseObject) => {
        // Correct position of others
        if (o.position >= position) {
          o.position++;
        }

        return o;
      });
    }

    content.push({ ...data, position });

    // Component can be added
    this.pages[page].content = content;
    this.pages[page]._componentsIds.push(id);

    return true;
  }

  /**
   * Remove component from content of page.
   *
   * @param {string} client
   * @param {string} page
   * @param {number} component
   * @return {boolean} true if component was removed, otherwise returns false
   */
  public clientRemoveComponent(clientId: string, page: string, component: number): boolean {
    if (!this.isClientEditingPage(clientId, page)) {
      return false;
    }

    // Check if component is unlocked and can be removed
    // This also check if component exists
    const who = this.getClientWhoEditComponent(page, component);
    if (who) {
      return false;
    }

    // Find current position of component
    let content = this.pages[page].content;
    let index = -1;
    const original = content.find((o: LooseObject, i: number) => {
      if (o.id === component) {
        index = i;
        return true;
      }

      return false;
    });
    const position = original.position;

    // Something goes wrong
    if (index < 0) {
      return false;
    }

    // Recalculate positions
    content = content.map((o: LooseObject) => {
      if (o.position > position) {
        o.position--;
      }

      return o;
    });

    // Remove component
    content.splice(index, 1);

    // Remove component from helper _componentIds array
    this.pages[page]._componentsIds = this.pages[page]._componentsIds.filter((id: number) => {
      if (id === component) {
        return false;
      }

      return true;
    });

    // Save content
    this.pages[page].content = content;

    return true;
  }

  /**
   * Move component to another position
   *
   * @param {string} client
   * @param {string} page
   * @param {number} component
   * @param {number} position
   * @return {boolean} true if it was successful, otherwise returns false
   */
  public clientMoveComponent(clientId: string, page: string, component: number, position: number): boolean {
    if (!this.isClientEditingPage(clientId, page)) {
      return false;
    }

    // Check if component exists in page
    if (!this.isPageContainComponent(page, component)) {
      return false;
    }

    // Is position valid
    if (this.pages[page].content.length < position) {
      return false;
    }

    // Find current position of component
    let content = this.pages[page].content;
    const original = content.find((o: LooseObject) => {
      if (o.id === component) {
        return true;
      }

      return false;
    });
    const oldPosition = original.position;

    // Change positions in content of page
    content = this.pages[page].content.map((o: LooseObject) => {
      // Change position of selected component
      if (o.id === component) {
        o.position = position;
        return o;
      }

      // Recalculate positions of other components
      let pos = o.position;
      if (oldPosition < o.position && o.position <= position) {
        pos--;
      }
      if (position <= o.position && o.position < oldPosition) {
        pos++;
      }

      o.position = pos;

      return o;
    });

    this.pages[page].content = content;

    return true;
  }

  /**
   * Get map of component -> position in page
   *
   * @param {string} page
   * @return {object} object key: value, where key is component id and value is position
   */
  public getComponentPositionMap(page: string): LooseObject {
    if (!this.isPageLoaded(page)) {
      return null;
    }

    const res = {};
    this.pages[page].content.forEach((val: LooseObject) => {
      res[val.id] = val.position;
    }, this);

    return res;
  }

  /**
   * Get information about page for client
   *
   * @param {string} client
   * @param {string} page
   * @return {LooseObject}
   */
  public getInformationAboutPage(clientId: string, page: string): LooseObject {
    if (!this.isPageLoaded(page)) {
      return null;
    }

    const res = {
      id: page,
      content: this.pages[page].content,
      editors: this.pages[page]._editors,
      locks: this.pages[page]._whoEdits,
      delta: this.pages[page].delta.export(),
    };

    return res;
  }

  /**
   * Force remove client from storage. This is useful, when client is disconnected
   * from sockets
   *
   * @param {string} client
   * @return {object}
   */
  public forceRemoveClient(clientId: string): LooseObject {
    if (!this.isClientRegistered(clientId)) {
      return { page: null, component: null };
    }

    // Get page and component which he edits
    const page = this.clients[clientId].actualPage;
    const component = this.clients[clientId].actualComponent;

    const res = {
      page,
      component,
    };

    if (!page || page === null) {
      // Remove from storage completly
      this.clients[clientId] = undefined;

      return res;
    }

    if (component && component !== null) {
      this.clientStopEditingComponent(clientId, page, component);
    }

    // Then remove client from editors
    this.pages[page]._editors = this.pages[page]._editors.filter((val: LooseObject) => {
      if (val.socketId === clientId) {
        return false;
      }

      return true;
    });
    this.clients[clientId].actualPage = null;

    // Remove from storage completly
    this.clients[clientId] = undefined;

    return res;
  }

  /**
   *
   */
  public resolveCommit(clientId: string, page: string, commit: LooseObject) {
    const diff = this.pages[page].delta.diff(commit);
    this.pages[page].delta.forceCommit(commit.commits);
    this.pages[page].delta.push();

    this.pages[page]._componentsIds = this.getComponentIds(page);

    return diff.updates;
  }

  public resetPageContent(pageId: string, content: LooseObject) {
    this.pages[pageId].delta = new Delta();
    this.pages[pageId].content = content;

    return {
      content: this.pages[pageId].content,
      delta: this.pages[pageId].delta,
    };
  }

}
