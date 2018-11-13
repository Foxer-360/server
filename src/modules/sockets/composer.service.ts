import { Inject } from '@nestjs/common';
import { Storage } from 'modules/storage/storage.provider';
import { isNumber } from 'utils';

interface LooseObject {
  [key: string]: any;
}

export class ComposerService {

  constructor(@Inject('Storage') private readonly storage: Storage) {
    // Nothing to do
  }

  /**
   * Simple returns map of component positions in page content
   *
   * @param {string} pageId
   * @return {object}
   */
  public getComponentPositionMap(pageId: string): LooseObject {
    // if (!isNumber(pageId)) {
    //   return null;
    // }

    return this.storage.composer.getComponentPositionMap(pageId);
  }

  /**
   * Try to remove component from content of page
   *
   * @param {string} id of client who try to remove component
   * @param {object} data
   * @return {boolean} true if component was removed, otherwise returns false
   */
  public removeComponent(id: string, data: any): boolean {
    const pageId = data.pageId;
    const componentId = data.componentId;

    // if (!isNumber(pageId)) {
    //   return false;
    // }

    if (!isNumber(componentId)) {
      return false;
    }

    const success = this.storage.composer.clientRemoveComponent(id, pageId, componentId);
    return success;
  }

  /**
   * Add new component into content of page
   *
   * @param {string} id of client who try to add component
   * @param {object} data
   * @return {boolean} true if component was added, otherwise returns false
   */
  public addComponent(id: string, data: any): boolean {
    const pageId = data.pageId;
    const component = data.component;

    // if (!isNumber(pageId)) {
    //   return false;
    // }

    if (!component || component === null) {
      return false;
    }

    const success = this.storage.composer.clientAddComponent(id, pageId, component);
    return success;
  }

  /**
   * Update content of component in content of page
   *
   * @param {string} id of client who try to update component
   * @param {object} data
   * @return {boolean} true if component was updated, otherwise returns false
   */
  public updateComponent(id: string, data: any): boolean {
    const pageId = data.pageId;
    const componentId = data.componentId;
    const componentData = data.data;

    // if (!isNumber(pageId)) {
    //   return false;
    // }

    if (!isNumber(componentId)) {
      return false;
    }

    if (!componentData || componentData === null) {
      return false;
    }

    const success = this.storage.composer.clientUpdateComponent(id, pageId, componentId, componentData);
    return success;
  }

  /**
   * Inform server, that you want to edit some component and
   * if it's possible, server will lock this component for you
   *
   * @param {string} id of client who wants to start edit component
   * @param {object} data
   * @return {boolean} true if component is locked for this client, otherwise return false
   */
  public startEditComponent(id: string, data: any): boolean {
    const pageId = data.pageId;
    const componentId = data.componentId;

    // if (!isNumber(pageId)) {
    //   return false;
    // }

    // if (!isNumber(componentId)) {
    //   return false;
    // }

    try {
      const success = this.storage.composer.clientStartEditComponent(id, pageId, componentId);
      // tslint:disable-next-line:no-console
      console.log('Success', success);
      return success;
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.log('Error:', e);
    }
    return true;
  }

  /**
   * Inform server, that you stop edit some component and unlock
   * this component for others
   *
   * @param {string} id of client who wants to stop edit component
   * @param {object} data
   * @return {boolean} true if component is unlocked for this client, otherwise return false
   */
  public stopEditComponent(id: string, data: any): boolean {
    const pageId = data.pageId;
    const componentId = data.componentId;

    // if (!isNumber(pageId)) {
    //   return false;
    // }

    // if (!isNumber(componentId)) {
    //   return false;
    // }

    const success = this.storage.composer.clientStopEditingComponent(id, pageId, componentId);
    return success;
  }

  /**
   * Inform server, that you start editing some page. This is useful,
   * because you will get informations about other users and what they edit
   * and also other users will be informed, that you are editing
   *
   * @param {string} id of client who wants to start edit page
   * @param {object} data
   * @return {Promise<boolean>} true if page can be edited by this client, otherwise return false
   */
  public async startEditPage(id: string, data: any): Promise<boolean> {
    const pageId = data.pageId;
    // if (!isNumber(pageId)) {
    //   return Promise.resolve(false);
    // }

    // Try to start edit page
    try {
      const success = await this.storage.composer.clientStartEditPage(id, pageId);
      return Promise.resolve(success);
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  /**
   * Inform server, that you stop edit some page. This will unregister you from
   * getting informations about updates in this page and also inform other users,
   * that you are no longer editing this page
   *
   * @param {string} id of client who wants to stop edit page
   * @param {object} data
   * @return {Promise<boolean>} true if client is unregistred from this page, otherwise return false
   */
  public async stopEditPage(id: string, data: any): Promise<boolean> {
    const pageId = data.pageId;
    // if (!isNumber(pageId)) {
    //   return Promise.resolve(false);
    // }

    // Try to stop edit page
    try {
      const success = await this.storage.composer.clientStopEditPage(id, pageId);
      return Promise.resolve(success);
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  /**
   * Ask server for getting information about some page. This informations are actual from
   * database and from storage of very actual changes by other users
   *
   * @param {string} id of client who want informations
   * @param {object} data
   * @return {object} informations about page (content, who is editing, which components are locked, etc)
   */
  public async  getPageInformation(id: string, data: any): Promise<any> {
    const pageId = data.pageId;
    // if (!isNumber(pageId)) {
    //   return null;
    // }
    return await this.storage.composer.getInformationAboutPage(id, pageId);
  }

  /**
   * Move component to new position
   *
   * @param {string} id fo client who want to move component
   * @param {object} data
   * @return {boolean}
   */
  public moveComponent(id: string, data: any): boolean {
    const pageId = data.pageId;
    const componentId = data.componentId;
    const position = data.position;

    // if (!isNumber(pageId)) {
    //   return false;
    // }

    if (!isNumber(componentId)) {
      return false;
    }

    if (!isNumber(position)) {
      return false;
    }

    const success = this.storage.composer.clientMoveComponent(id, pageId, componentId, position);
    return success;
  }

  /**
   * Return client ids of clients who edit page
   *
   * @param {string} pageId
   * @return {string[]}
   */
  public getClientsWhoEditPage(pageId: string): string[] {
    // if (!isNumber(pageId)) {
    //   return null;
    // }

    return this.storage.composer.getClientsWhoEditPage(pageId);
  }

  /**
   * Return locked components from storage
   *
   * @param {string} pageId
   * @return {object}
   */
  public getLockedComponents(pageId: string): LooseObject {
    // if (!isNumber(pageId)) {
    //   return null;
    // }

    return this.storage.composer.getLockedComponents(pageId);
  }

  /**
   * Force remove client
   *
   * @param {string} id of client who you want to remove
   * @return {object}
   */
  public forceRemoveClient(id: string): LooseObject {
    return this.storage.composer.forceRemoveClient(id);
  }

  public resolveCommit(id: string, pageId: string, commit: LooseObject) {
    return this.storage.composer.resolveCommit(id, pageId, commit);
  }

}
