import { Injectable } from '@nestjs/common';
import ApolloClient from 'apollo-boost';
import * as fetchFce from 'node-fetch';
import gql from 'graphql-tag';

import { EnvironmentException } from '../exceptions/environment.exception';

const fetch = fetchFce as any;

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

}
