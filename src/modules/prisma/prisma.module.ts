import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { prismaProvider } from './prisma.provider';
import { LanguageResolver } from './resolvers/language.resolver';
import { ProjectResolver } from './resolvers/project.resolver';
import { WebsiteResolver } from './resolvers/website.resolver';
import { PageTypeResolver } from './resolvers/pageType.resolver';
import { PagePluginResolver } from './resolvers/pagePlugin.resolver';
import { PageResolver } from './resolvers/page.resolver';
import { PageTaskResolver } from './resolvers/pageTask.resolver';
import { PageChatResolver } from './resolvers/pageChat.resolver';
import { FrontendResolver } from './resolvers/frontend.resolver';
import { NavigationResolver } from './resolvers/navigation.resolvers';
import { SubscriptionsService } from 'modules/subscriptions/subscriptions.service';
import { SubscriptionsModule } from 'modules/subscriptions/subscriptions.module';
import { FrontendService } from './services/frontend.service';
import { importSchema } from 'graphql-import';

@Module({
  imports: [GraphQLModule, SubscriptionsModule.forRoot(5001)],
  providers: [prismaProvider, LanguageResolver, ProjectResolver, WebsiteResolver, PageTypeResolver,
    PageResolver, PageTaskResolver, PageChatResolver, FrontendResolver, FrontendService, NavigationResolver,
    PagePluginResolver],
  exports: [prismaProvider],
})
export class PrismaModule implements NestModule {

  constructor(private readonly graphQLFactory: GraphQLFactory,
              private readonly subscriptionsService: SubscriptionsService) {}

  public configure(consumer: MiddlewareConsumer) {
    // const typeDefs = this.graphQLFactory.mergeTypesByPaths('src/**/*.graphql');
    const typeDefs = importSchema('src/modules/prisma/schemas/schema.graphql');
    const schema = this.graphQLFactory.createSchema({ typeDefs });

    // Create subscription server
    this.subscriptionsService.createSubscriptionServer(schema);

    consumer
    .apply(
      graphiqlExpress({
        endpointURL: '/graphql',
        subscriptionsEndpoint: `ws://localhost:5001/subscriptions`,
      }),
    )
    .forRoutes('/graphiql')
    .apply(
      graphqlExpress(req => ({
        schema,
        rootValue: req,
        context: req,
      })),
    )
    .forRoutes('/graphql');
  }

}
