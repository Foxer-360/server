import { Injectable, Inject, OnModuleDestroy } from '@nestjs/common';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

@Injectable()
export class SubscriptionsService implements OnModuleDestroy {

  private subscriptionServer: SubscriptionServer;

  constructor(@Inject('SUBSCRIPTION_SERVER') private readonly ws) {}

  public createSubscriptionServer(schema: any) {
    this.subscriptionServer = new SubscriptionServer({
      execute,
      subscribe,
      schema,
    }, {
        server: this.ws,
        path: '/subscriptions',
    });
  }

  public onModuleDestroy() {
    this.ws.close();
    this.subscriptionServer.close();
  }

}
