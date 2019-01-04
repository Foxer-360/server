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
import { PageTranslationResolver } from './resolvers/pageTranslation.resolver';
import { FrontendResolver } from './resolvers/frontend.resolver';
import { NavigationResolver } from './resolvers/navigation.resolvers';
import { TagResolver } from './resolvers/tag.resolver';
import { SubscriptionsService } from 'modules/subscriptions/subscriptions.service';
import { SubscriptionsModule } from 'modules/subscriptions/subscriptions.module';
import { FrontendService } from './services/frontend.service';
import { importSchema } from 'graphql-import';
import { applyMiddleware } from 'graphql-middleware';
import graphqlPlayground from 'graphql-playground-middleware-express';
import authorizationMiddleware from 'foxer360-authorization';
import { checkJwt } from '../../middleware';

@Module({
  imports: [GraphQLModule, SubscriptionsModule.forRoot(5001)],
  providers: [prismaProvider, LanguageResolver, ProjectResolver, WebsiteResolver, PageTypeResolver,
    PageResolver, PageTaskResolver, PageChatResolver, PageTranslationResolver, FrontendResolver, FrontendService, NavigationResolver,
    TagResolver, PagePluginResolver],
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

    const schemaWithMiddleware = applyMiddleware(
      schema,
      // authorizationMiddleware(process.env.AUTHORIZATION_API_ADDRESS),
    );

    consumer
    .apply(checkJwt)
    .forRoutes('/graphql')
    .apply((req, res, next, err) => {
      if (err) return res.status(401).send(err.message);
      next();
    })
    .forRoutes('/graphql')
    .apply(
      graphqlPlayground({
        endpoint: '/graphql',
        subscriptionEndpoint: `ws://localhost:5001/subscriptions`,
      }),
    )
    .forRoutes('/graphiql')
    .apply(
      graphqlExpress(req => ({
        schema: schemaWithMiddleware,
        rootValue: req,
        context: req,
      })),
    )
    .forRoutes('/graphql');
  }

}
