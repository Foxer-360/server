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
import { SubscriberResolver } from './resolvers/subscriber.resolver';
import { InquiryResolver } from './resolvers/inquiry.resolver';
import { TagResolver } from './resolvers/tag.resolver';
import { DatasourceResolver } from './resolvers/datasource.resolver';
import { DatasourceItemResolver } from './resolvers/datasourceItem.resolver';
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
    TagResolver, PagePluginResolver, SubscriberResolver, InquiryResolver, DatasourceResolver, DatasourceItemResolver],
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
      //authorizationMiddleware(process.env.AUTHORIZATION_API_ADDRESS),
      /* async (resolve, root, args, context, info) => {
        const { operation: gqlOperation } = info;
        const authorizationToken = (
          context
          && context.headers
          && context.headers.authorization
        ) || (
          context
          && context.request
          && context.request.headers
          && context.request.headers.authorization
        );

        const token = authorizationToken && authorizationToken.includes('Bearer ')
          ? authorizationToken.replace('Bearer ', '')
          : authorizationToken;

        const { hasUserPermission }: any = await request(
          process.env.AUTHORIZATION_API_ADDRESS,
          `
          query($token: String, $isUserAnonymous: Boolean, $gqlOperation: Json!) {
            hasUserPermission(token: $token  isUserAnonymous: $isUserAnonymous gqlOperation: $gqlOperation)
          }
          `,
          {
            ...(token ? { token } : { isUserAnonymous: true }),
            gqlOperation,
          },
        );

        if (hasUserPermission) {
          return resolve(root, args, context, info);
        }

        throw new Error(`User hasn't permission for ${gqlOperation.selectionSet.selections.map(selection => selection.name.value)}`);
      }*/
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
