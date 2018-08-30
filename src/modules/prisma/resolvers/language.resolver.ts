import { Query, Resolver, Mutation } from '@nestjs/graphql';
import { Language, Prisma } from 'generated/prisma';

@Resolver('language')
export class LanguageResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('language')
  public async getLanguage(obj, args, context, info): Promise<Language> {
    return await this.prisma.query.language(args, info);
  }

  @Query('languages')
  public async getAllEnabledLanguages(obj, args, context, info): Promise<Language[]> {
    // Filter just enabled languages
    args = {
      ...args,
      where: {
        ...args.where,
        isEnabled: true
      }
    }

    return await this.prisma.query.languages(args, info);
  }

}
