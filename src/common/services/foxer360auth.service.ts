import { Injectable } from '@nestjs/common';
import ApolloClient from 'apollo-boost';
import * as fetchFce from 'node-fetch';
import gql from 'graphql-tag';

import { EnvironmentException } from '../exceptions/environment.exception';

const fetch = fetchFce as any;

export interface IProject {
  id: string;
  name: string;
}

export interface IWebsite {
  id: string;
  title: string;
  project: {
    id: string;
  };
}

export interface IUser {
  auth0id: string;
  avatar: string;
  email: string;
  id: string;
  username: string;
}

@Injectable()
export class Foxer360AuthService {

  private client: ApolloClient<any>;
  private clientAccessIdentity: string;
  private clientIdentity: string;

  constructor() {
    // Get necessary information from ENV
    const server = process.env.FOXER360_AUTH_SERVER;
    const clientId = process.env.FOXER360_AUTH_CLIENT_ID;
    const clientSecret = process.env.FOXER360_AUTH_CLIENT_SECRET;

    if (!server || server.length < 2) {
      throw new EnvironmentException('FOXER360_AUTH_SERVER');
    }
    if (!clientId || clientId.length < 2) {
      throw new EnvironmentException('FOXER360_AUTH_CLIENT_ID');
    }
    if (!clientSecret || clientSecret.length < 2) {
      throw new EnvironmentException('FOXER360_AUTH_CLIENT_SECRET');
    }

    // Create Apollo client
    this.client = new ApolloClient({
      fetchOptions: { fetch },
      uri: server,
    });

    if (!this.client) {
      throw new Error('Failed to create GraphQL Client connected to Foxer360 Authorization Server!');
    }

    // Setup identities
    this.clientIdentity = `client: { id: "${clientId}" }`;
    this.clientAccessIdentity = `client: { id: "${clientId}" secret: "${clientSecret}" }`;
  }

  public async createProject(id: string, name: string): Promise<boolean> {
    const mutation = gql`mutation {
      createProject(
        ${this.clientAccessIdentity}
        data: {
          foxer360Id: "${id}"
          name: "${name}"
        }
      ) { id }
    }`;

    const result = await this.client.mutate({ mutation });
    if (!result || !result.data || !result.data.createProject) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  public async updateProject(id: string, name: string): Promise<boolean> {
    const mutation = gql`mutation {
      updateProject(
        ${this.clientAccessIdentity}
        data: {
          name: "${name}"
        }
        where: {
          foxer360Id: "${id}"
        }
      ) { id }
    }`;

    const result = await this.client.mutate({ mutation });
    if (!result || !result.data || !result.data.updateProject) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  public async deleteProject(id: string): Promise<boolean> {
    const mutation = gql`mutation {
      deleteProject(
        ${this.clientAccessIdentity}
        where: {
          foxer360Id: "${id}"
        }
      ) { id }
    }`;

    const result = await this.client.mutate({ mutation });
    if (!result || !result.data || !result.data.deleteProject) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  public async createWebsite(id: string, name: string, projectId: string): Promise<boolean> {
    const mutation = gql`mutation {
      createWebsite(
        ${this.clientAccessIdentity}
        data: {
          foxer360Id: "${id}"
          name: "${name}"
          project: "${projectId}"
        }
      ) { id }
    }`;

    const result = await this.client.mutate({ mutation });
    if (!result || !result.data || !result.data.createWebsite) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  public async updateWebsite(id: string, name: string): Promise<boolean> {
    const mutation = gql`mutation {
      updateWebsite(
        ${this.clientAccessIdentity}
        data: {
          name: "${name}"
        }
        where: {
          foxer360Id: "${id}"
        }
      ) { id }
    }`;

    const result = await this.client.mutate({ mutation });
    if (!result || !result.data || !result.data.updateWebsite) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  public async deleteWebsite(id: string): Promise<boolean> {
    const mutation = gql`mutation {
      deleteWebsite(
        ${this.clientAccessIdentity}
        where: {
          foxer360Id: "${id}"
        }
      ) { id }
    }`;

    const result = await this.client.mutate({ mutation });
    if (!result || !result.data || !result.data.deleteWebsite) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  public async syncProjectsWebsites(projects: IProject[], websites: IWebsite[]): Promise<boolean> {
    const reducedProjects = this.toStringReducer(projects, (acc, project) => {
      const res = `{ foxer360Id: "${project.id}" name: "${project.name}" } `;
      return acc + res;
    }, ' ');
    const reducedWebsites = this.toStringReducer(websites, (acc, website) => {
      const res = `{ foxer360Id: "${website.id}" name: "${website.title}" project: "${website.project.id}" } `;
      return acc + res;
    }, ' ');

    const data = `{ projects: [${reducedProjects}] websites: [${reducedWebsites}] }`;

    const mutation = gql`mutation {
      syncProjectsWebsites(
        ${this.clientAccessIdentity}
        data: ${data}
      )
    }`;

    const result = await this.client.mutate({ mutation });
    if (!result || !result.data || !result.data.syncProjectsWebsites) {
      return Promise.resolve(false);
    }

    return Promise.resolve(result.data.syncProjectsWebsites);
  }

  public async isUserOwner(accessToken: string): Promise<boolean> {
    const query = gql`query {
      owns(
        ${this.clientIdentity}
        user: {
          accessToken: "${accessToken}"
        }
      )
    }`;

    const result = await this.client.query({ query, fetchPolicy: 'no-cache' });
    if (!result || !result.data || !result.data.owns) {
      return Promise.resolve(false);
    }

    return Promise.resolve(result.data.owns);
  }

  public async userExists(accessToken: string): Promise<boolean> {
    const query = gql`query {
      exists(
        ${this.clientIdentity}
        user: {
          accessToken: "${accessToken}"
        }
      )
    }`;

    const result = await this.client.query({ query, fetchPolicy: 'no-cache' });
    if (!result || !result.data || !result.data.exists) {
      return Promise.resolve(false);
    }

    return Promise.resolve(result.data.exists);
  }

  public async enabledProjects(accessToken: string): Promise<string[]> {
    const query = gql`query {
      enabledProjects(
        ${this.clientIdentity}
        user: {
          accessToken: "${accessToken}"
        }
      ) { foxer360Id }
    }`;

    const result = await this.client.query({ query, fetchPolicy: 'no-cache' });
    if (!result || !result.data || !result.data.enabledProjects) {
      return Promise.resolve([]);
    }

    const mapped = result.data.enabledProjects.map((project) => project.foxer360Id);
    return Promise.resolve(mapped);
  }

  public async enabledWebsites(accessToken: string): Promise<string[]> {
    const query = gql`query {
      enabledWebsites(
        ${this.clientIdentity}
        user: {
          accessToken: "${accessToken}"
        }
      ) { foxer360Id }
    }`;

    const result = await this.client.query({ query, fetchPolicy: 'no-cache' });
    if (!result || !result.data || !result.data.enabledWebsites) {
      return Promise.resolve([]);
    }

    const mapped = result.data.enabledWebsites.map((website) => website.foxer360Id);
    return Promise.resolve(mapped);
  }

  public async getAllUsers(): Promise<IUser[]> {
    const query = gql`query {
      users(
        ${this.clientAccessIdentity}
      ) {
        auth0Id
        avatar
        email
        name
      }
    }`;
    const result = await this.client.query({ query, fetchPolicy: 'no-cache' });
    if (!result || !result.data || !result.data.users || result.data.users.length < 1) {
      return Promise.resolve([] as IUser[]);
    }

    const mapped = result.data.users.map((user) => {
      return {
        auth0id: user.auth0Id,
        email: user.email,
        username: user.name,
        avatar: user.avatar,
      } as IUser;
    }) as IUser[];

    return Promise.resolve(mapped);
  }

  private toStringReducer<T>(
    array: T[],
    callback: (accumulator: string, current: T, index?: number, array?: T[]) => string,
    initialValue?: string,
  ): string {
    let acc = initialValue ? initialValue : '';

    array.forEach((val, index) => {
      acc = callback(acc, val, index, array);
    });

    return acc;
  }

}
