import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    projects: <T = Project[]>(args: { where?: ProjectWhereInput, orderBy?: ProjectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websites: <T = Website[]>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslations: <T = PageTranslation[]>(args: { where?: PageTranslationWhereInput, orderBy?: PageTranslationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTasks: <T = PageTask[]>(args: { where?: PageTaskWhereInput, orderBy?: PageTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChats: <T = PageChat[]>(args: { where?: PageChatWhereInput, orderBy?: PageChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pages: <T = Page[]>(args: { where?: PageWhereInput, orderBy?: PageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTypes: <T = PageType[]>(args: { where?: PageTypeWhereInput, orderBy?: PageTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    project: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    website: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    page: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    projectsConnection: <T = ProjectConnection>(args: { where?: ProjectWhereInput, orderBy?: ProjectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websitesConnection: <T = WebsiteConnection>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslationsConnection: <T = PageTranslationConnection>(args: { where?: PageTranslationWhereInput, orderBy?: PageTranslationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTasksConnection: <T = PageTaskConnection>(args: { where?: PageTaskWhereInput, orderBy?: PageTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChatsConnection: <T = PageChatConnection>(args: { where?: PageChatWhereInput, orderBy?: PageChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagesConnection: <T = PageConnection>(args: { where?: PageWhereInput, orderBy?: PageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTypesConnection: <T = PageTypeConnection>(args: { where?: PageTypeWhereInput, orderBy?: PageTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createProject: <T = Project>(args: { data: ProjectCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageTranslation: <T = PageTranslation>(args: { data: PageTranslationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageTask: <T = PageTask>(args: { data: PageTaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageChat: <T = PageChat>(args: { data: PageChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPage: <T = Page>(args: { data: PageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageType: <T = PageType>(args: { data: PageTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProject: <T = Project | null>(args: { data: ProjectUpdateInput, where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWebsite: <T = Website | null>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageTranslation: <T = PageTranslation | null>(args: { data: PageTranslationUpdateInput, where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageTask: <T = PageTask | null>(args: { data: PageTaskUpdateInput, where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageChat: <T = PageChat | null>(args: { data: PageChatUpdateInput, where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePage: <T = Page | null>(args: { data: PageUpdateInput, where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageType: <T = PageType | null>(args: { data: PageTypeUpdateInput, where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProject: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWebsite: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePage: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProject: <T = Project>(args: { where: ProjectWhereUniqueInput, create: ProjectCreateInput, update: ProjectUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTranslation: <T = PageTranslation>(args: { where: PageTranslationWhereUniqueInput, create: PageTranslationCreateInput, update: PageTranslationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTask: <T = PageTask>(args: { where: PageTaskWhereUniqueInput, create: PageTaskCreateInput, update: PageTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageChat: <T = PageChat>(args: { where: PageChatWhereUniqueInput, create: PageChatCreateInput, update: PageChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPage: <T = Page>(args: { where: PageWhereUniqueInput, create: PageCreateInput, update: PageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageType: <T = PageType>(args: { where: PageTypeWhereUniqueInput, create: PageTypeCreateInput, update: PageTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProjects: <T = BatchPayload>(args: { data: ProjectUpdateInput, where?: ProjectWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateInput, where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTranslations: <T = BatchPayload>(args: { data: PageTranslationUpdateInput, where?: PageTranslationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTasks: <T = BatchPayload>(args: { data: PageTaskUpdateInput, where?: PageTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageChats: <T = BatchPayload>(args: { data: PageChatUpdateInput, where?: PageChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPages: <T = BatchPayload>(args: { data: PageUpdateInput, where?: PageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTypes: <T = BatchPayload>(args: { data: PageTypeUpdateInput, where?: PageTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateInput, where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProjects: <T = BatchPayload>(args: { where?: ProjectWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWebsites: <T = BatchPayload>(args: { where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTranslations: <T = BatchPayload>(args: { where?: PageTranslationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTasks: <T = BatchPayload>(args: { where?: PageTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageChats: <T = BatchPayload>(args: { where?: PageChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPages: <T = BatchPayload>(args: { where?: PageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTypes: <T = BatchPayload>(args: { where?: PageTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    project: <T = ProjectSubscriptionPayload | null>(args: { where?: ProjectSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    website: <T = WebsiteSubscriptionPayload | null>(args: { where?: WebsiteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageTranslation: <T = PageTranslationSubscriptionPayload | null>(args: { where?: PageTranslationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageTask: <T = PageTaskSubscriptionPayload | null>(args: { where?: PageTaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageChat: <T = PageChatSubscriptionPayload | null>(args: { where?: PageChatSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    page: <T = PageSubscriptionPayload | null>(args: { where?: PageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageType: <T = PageTypeSubscriptionPayload | null>(args: { where?: PageTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Project: (where?: ProjectWhereInput) => Promise<boolean>
  Website: (where?: WebsiteWhereInput) => Promise<boolean>
  PageTranslation: (where?: PageTranslationWhereInput) => Promise<boolean>
  PageTask: (where?: PageTaskWhereInput) => Promise<boolean>
  PageChat: (where?: PageChatWhereInput) => Promise<boolean>
  Page: (where?: PageWhereInput) => Promise<boolean>
  PageType: (where?: PageTypeWhereInput) => Promise<boolean>
  Language: (where?: LanguageWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateLanguage {
  count: Int!
}

type AggregatePage {
  count: Int!
}

type AggregatePageChat {
  count: Int!
}

type AggregatePageTask {
  count: Int!
}

type AggregatePageTranslation {
  count: Int!
}

type AggregatePageType {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateWebsite {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""Raw JSON value"""
scalar Json

type Language implements Node {
  id: ID!
  code: String!
  name: String!
  englishName: String!
  isDefault: Boolean!
  isEnabled: Boolean!
}

"""A connection to a list of items."""
type LanguageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LanguageEdge]!
  aggregate: AggregateLanguage!
}

input LanguageCreateInput {
  code: String!
  name: String!
  englishName: String!
  isDefault: Boolean
  isEnabled: Boolean
}

input LanguageCreateManyInput {
  create: [LanguageCreateInput!]
  connect: [LanguageWhereUniqueInput!]
}

input LanguageCreateOneInput {
  create: LanguageCreateInput
  connect: LanguageWhereUniqueInput
}

"""An edge in a connection."""
type LanguageEdge {
  """The item at the end of the edge."""
  node: Language!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LanguageOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
  englishName_ASC
  englishName_DESC
  isDefault_ASC
  isDefault_DESC
  isEnabled_ASC
  isEnabled_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LanguagePreviousValues {
  id: ID!
  code: String!
  name: String!
  englishName: String!
  isDefault: Boolean!
  isEnabled: Boolean!
}

type LanguageSubscriptionPayload {
  mutation: MutationType!
  node: Language
  updatedFields: [String!]
  previousValues: LanguagePreviousValues
}

input LanguageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LanguageWhereInput
}

input LanguageUpdateDataInput {
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

input LanguageUpdateInput {
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

input LanguageUpdateManyInput {
  create: [LanguageCreateInput!]
  connect: [LanguageWhereUniqueInput!]
  disconnect: [LanguageWhereUniqueInput!]
  delete: [LanguageWhereUniqueInput!]
  update: [LanguageUpdateWithWhereUniqueNestedInput!]
  upsert: [LanguageUpsertWithWhereUniqueNestedInput!]
}

input LanguageUpdateOneInput {
  create: LanguageCreateInput
  connect: LanguageWhereUniqueInput
  delete: Boolean
  update: LanguageUpdateDataInput
  upsert: LanguageUpsertNestedInput
}

input LanguageUpdateWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput!
  data: LanguageUpdateDataInput!
}

input LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput!
  create: LanguageCreateInput!
}

input LanguageUpsertWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput!
  update: LanguageUpdateDataInput!
  create: LanguageCreateInput!
}

input LanguageWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  englishName: String

  """All values that are not equal to given value."""
  englishName_not: String

  """All values that are contained in given list."""
  englishName_in: [String!]

  """All values that are not contained in given list."""
  englishName_not_in: [String!]

  """All values less than the given value."""
  englishName_lt: String

  """All values less than or equal the given value."""
  englishName_lte: String

  """All values greater than the given value."""
  englishName_gt: String

  """All values greater than or equal the given value."""
  englishName_gte: String

  """All values containing the given string."""
  englishName_contains: String

  """All values not containing the given string."""
  englishName_not_contains: String

  """All values starting with the given string."""
  englishName_starts_with: String

  """All values not starting with the given string."""
  englishName_not_starts_with: String

  """All values ending with the given string."""
  englishName_ends_with: String

  """All values not ending with the given string."""
  englishName_not_ends_with: String
  isDefault: Boolean

  """All values that are not equal to given value."""
  isDefault_not: Boolean
  isEnabled: Boolean

  """All values that are not equal to given value."""
  isEnabled_not: Boolean
}

input LanguageWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createProject(data: ProjectCreateInput!): Project!
  createWebsite(data: WebsiteCreateInput!): Website!
  createPageTranslation(data: PageTranslationCreateInput!): PageTranslation!
  createPageTask(data: PageTaskCreateInput!): PageTask!
  createPageChat(data: PageChatCreateInput!): PageChat!
  createPage(data: PageCreateInput!): Page!
  createPageType(data: PageTypeCreateInput!): PageType!
  createLanguage(data: LanguageCreateInput!): Language!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updatePageTranslation(data: PageTranslationUpdateInput!, where: PageTranslationWhereUniqueInput!): PageTranslation
  updatePageTask(data: PageTaskUpdateInput!, where: PageTaskWhereUniqueInput!): PageTask
  updatePageChat(data: PageChatUpdateInput!, where: PageChatWhereUniqueInput!): PageChat
  updatePage(data: PageUpdateInput!, where: PageWhereUniqueInput!): Page
  updatePageType(data: PageTypeUpdateInput!, where: PageTypeWhereUniqueInput!): PageType
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deletePageTranslation(where: PageTranslationWhereUniqueInput!): PageTranslation
  deletePageTask(where: PageTaskWhereUniqueInput!): PageTask
  deletePageChat(where: PageChatWhereUniqueInput!): PageChat
  deletePage(where: PageWhereUniqueInput!): Page
  deletePageType(where: PageTypeWhereUniqueInput!): PageType
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  upsertPageTranslation(where: PageTranslationWhereUniqueInput!, create: PageTranslationCreateInput!, update: PageTranslationUpdateInput!): PageTranslation!
  upsertPageTask(where: PageTaskWhereUniqueInput!, create: PageTaskCreateInput!, update: PageTaskUpdateInput!): PageTask!
  upsertPageChat(where: PageChatWhereUniqueInput!, create: PageChatCreateInput!, update: PageChatUpdateInput!): PageChat!
  upsertPage(where: PageWhereUniqueInput!, create: PageCreateInput!, update: PageUpdateInput!): Page!
  upsertPageType(where: PageTypeWhereUniqueInput!, create: PageTypeCreateInput!, update: PageTypeUpdateInput!): PageType!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  updateManyProjects(data: ProjectUpdateInput!, where: ProjectWhereInput): BatchPayload!
  updateManyWebsites(data: WebsiteUpdateInput!, where: WebsiteWhereInput): BatchPayload!
  updateManyPageTranslations(data: PageTranslationUpdateInput!, where: PageTranslationWhereInput): BatchPayload!
  updateManyPageTasks(data: PageTaskUpdateInput!, where: PageTaskWhereInput): BatchPayload!
  updateManyPageChats(data: PageChatUpdateInput!, where: PageChatWhereInput): BatchPayload!
  updateManyPages(data: PageUpdateInput!, where: PageWhereInput): BatchPayload!
  updateManyPageTypes(data: PageTypeUpdateInput!, where: PageTypeWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateInput!, where: LanguageWhereInput): BatchPayload!
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
  deleteManyPageTranslations(where: PageTranslationWhereInput): BatchPayload!
  deleteManyPageTasks(where: PageTaskWhereInput): BatchPayload!
  deleteManyPageChats(where: PageChatWhereInput): BatchPayload!
  deleteManyPages(where: PageWhereInput): BatchPayload!
  deleteManyPageTypes(where: PageTypeWhereInput): BatchPayload!
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Page implements Node {
  id: ID!
  parent(where: PageWhereInput): Page
  website(where: WebsiteWhereInput): Website!
  type(where: PageTypeWhereInput): PageType!
  translations(where: PageTranslationWhereInput, orderBy: PageTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTranslation!]
  chats(where: PageChatWhereInput, orderBy: PageChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageChat!]
}

type PageChat implements Node {
  id: ID!
  page(where: PageWhereInput): Page!
  text: String!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type PageChatConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PageChatEdge]!
  aggregate: AggregatePageChat!
}

input PageChatCreateInput {
  text: String!
  page: PageCreateOneWithoutChatsInput!
}

input PageChatCreateManyWithoutPageInput {
  create: [PageChatCreateWithoutPageInput!]
  connect: [PageChatWhereUniqueInput!]
}

input PageChatCreateWithoutPageInput {
  text: String!
}

"""An edge in a connection."""
type PageChatEdge {
  """The item at the end of the edge."""
  node: PageChat!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PageChatOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PageChatPreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

type PageChatSubscriptionPayload {
  mutation: MutationType!
  node: PageChat
  updatedFields: [String!]
  previousValues: PageChatPreviousValues
}

input PageChatSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PageChatSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageChatSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageChatSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PageChatWhereInput
}

input PageChatUpdateInput {
  text: String
  page: PageUpdateOneWithoutChatsInput
}

input PageChatUpdateManyWithoutPageInput {
  create: [PageChatCreateWithoutPageInput!]
  connect: [PageChatWhereUniqueInput!]
  disconnect: [PageChatWhereUniqueInput!]
  delete: [PageChatWhereUniqueInput!]
  update: [PageChatUpdateWithWhereUniqueWithoutPageInput!]
  upsert: [PageChatUpsertWithWhereUniqueWithoutPageInput!]
}

input PageChatUpdateWithoutPageDataInput {
  text: String
}

input PageChatUpdateWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput!
  data: PageChatUpdateWithoutPageDataInput!
}

input PageChatUpsertWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput!
  update: PageChatUpdateWithoutPageDataInput!
  create: PageChatCreateWithoutPageInput!
}

input PageChatWhereInput {
  """Logical AND on all given filters."""
  AND: [PageChatWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageChatWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageChatWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  page: PageWhereInput
}

input PageChatWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type PageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PageEdge]!
  aggregate: AggregatePage!
}

input PageCreateInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
}

input PageCreateManyWithoutWebsiteInput {
  create: [PageCreateWithoutWebsiteInput!]
  connect: [PageWhereUniqueInput!]
}

input PageCreateOneInput {
  create: PageCreateInput
  connect: PageWhereUniqueInput
}

input PageCreateOneWithoutChatsInput {
  create: PageCreateWithoutChatsInput
  connect: PageWhereUniqueInput
}

input PageCreateOneWithoutTranslationsInput {
  create: PageCreateWithoutTranslationsInput
  connect: PageWhereUniqueInput
}

input PageCreateWithoutChatsInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
}

input PageCreateWithoutTranslationsInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  chats: PageChatCreateManyWithoutPageInput
}

input PageCreateWithoutWebsiteInput {
  parent: PageCreateOneInput
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
}

"""An edge in a connection."""
type PageEdge {
  """The item at the end of the edge."""
  node: Page!

  """A cursor for use in pagination."""
  cursor: String!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PageOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PagePreviousValues {
  id: ID!
}

enum PageStatus {
  DRAFT
  PENDING
  PUBLISHED
}

type PageSubscriptionPayload {
  mutation: MutationType!
  node: Page
  updatedFields: [String!]
  previousValues: PagePreviousValues
}

input PageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PageWhereInput
}

type PageTask implements Node {
  id: ID!
  pageTranslation(where: PageTranslationWhereInput): PageTranslation!
  done: Boolean!
  name: String!
  description: String!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type PageTaskConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PageTaskEdge]!
  aggregate: AggregatePageTask!
}

input PageTaskCreateInput {
  done: Boolean
  name: String!
  description: String!
  pageTranslation: PageTranslationCreateOneWithoutTasksInput!
}

input PageTaskCreateManyWithoutPageTranslationInput {
  create: [PageTaskCreateWithoutPageTranslationInput!]
  connect: [PageTaskWhereUniqueInput!]
}

input PageTaskCreateWithoutPageTranslationInput {
  done: Boolean
  name: String!
  description: String!
}

"""An edge in a connection."""
type PageTaskEdge {
  """The item at the end of the edge."""
  node: PageTask!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PageTaskOrderByInput {
  id_ASC
  id_DESC
  done_ASC
  done_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PageTaskPreviousValues {
  id: ID!
  done: Boolean!
  name: String!
  description: String!
  updatedAt: DateTime!
}

type PageTaskSubscriptionPayload {
  mutation: MutationType!
  node: PageTask
  updatedFields: [String!]
  previousValues: PageTaskPreviousValues
}

input PageTaskSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTaskSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTaskSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTaskSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PageTaskWhereInput
}

input PageTaskUpdateInput {
  done: Boolean
  name: String
  description: String
  pageTranslation: PageTranslationUpdateOneWithoutTasksInput
}

input PageTaskUpdateManyWithoutPageTranslationInput {
  create: [PageTaskCreateWithoutPageTranslationInput!]
  connect: [PageTaskWhereUniqueInput!]
  disconnect: [PageTaskWhereUniqueInput!]
  delete: [PageTaskWhereUniqueInput!]
  update: [PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput!]
  upsert: [PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput!]
}

input PageTaskUpdateWithoutPageTranslationDataInput {
  done: Boolean
  name: String
  description: String
}

input PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput!
  data: PageTaskUpdateWithoutPageTranslationDataInput!
}

input PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput!
  update: PageTaskUpdateWithoutPageTranslationDataInput!
  create: PageTaskCreateWithoutPageTranslationInput!
}

input PageTaskWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTaskWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTaskWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTaskWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  done: Boolean

  """All values that are not equal to given value."""
  done_not: Boolean
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  pageTranslation: PageTranslationWhereInput
}

input PageTaskWhereUniqueInput {
  id: ID
}

type PageTranslation implements Node {
  id: ID!
  page(where: PageWhereInput): Page!
  language(where: LanguageWhereInput): Language!
  url: String!
  content: Json!
  name: String!
  status: PageStatus!
  publishedFrom: DateTime
  publishedTo: DateTime
  tasks(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTask!]
}

"""A connection to a list of items."""
type PageTranslationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PageTranslationEdge]!
  aggregate: AggregatePageTranslation!
}

input PageTranslationCreateInput {
  url: String!
  content: Json
  name: String
  status: PageStatus
  publishedFrom: DateTime
  publishedTo: DateTime
  page: PageCreateOneWithoutTranslationsInput!
  language: LanguageCreateOneInput!
  tasks: PageTaskCreateManyWithoutPageTranslationInput
}

input PageTranslationCreateManyWithoutPageInput {
  create: [PageTranslationCreateWithoutPageInput!]
  connect: [PageTranslationWhereUniqueInput!]
}

input PageTranslationCreateOneWithoutTasksInput {
  create: PageTranslationCreateWithoutTasksInput
  connect: PageTranslationWhereUniqueInput
}

input PageTranslationCreateWithoutPageInput {
  url: String!
  content: Json
  name: String
  status: PageStatus
  publishedFrom: DateTime
  publishedTo: DateTime
  language: LanguageCreateOneInput!
  tasks: PageTaskCreateManyWithoutPageTranslationInput
}

input PageTranslationCreateWithoutTasksInput {
  url: String!
  content: Json
  name: String
  status: PageStatus
  publishedFrom: DateTime
  publishedTo: DateTime
  page: PageCreateOneWithoutTranslationsInput!
  language: LanguageCreateOneInput!
}

"""An edge in a connection."""
type PageTranslationEdge {
  """The item at the end of the edge."""
  node: PageTranslation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PageTranslationOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  content_ASC
  content_DESC
  name_ASC
  name_DESC
  status_ASC
  status_DESC
  publishedFrom_ASC
  publishedFrom_DESC
  publishedTo_ASC
  publishedTo_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PageTranslationPreviousValues {
  id: ID!
  url: String!
  content: Json!
  name: String!
  status: PageStatus!
  publishedFrom: DateTime
  publishedTo: DateTime
}

type PageTranslationSubscriptionPayload {
  mutation: MutationType!
  node: PageTranslation
  updatedFields: [String!]
  previousValues: PageTranslationPreviousValues
}

input PageTranslationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTranslationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTranslationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTranslationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PageTranslationWhereInput
}

input PageTranslationUpdateInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  publishedFrom: DateTime
  publishedTo: DateTime
  page: PageUpdateOneWithoutTranslationsInput
  language: LanguageUpdateOneInput
  tasks: PageTaskUpdateManyWithoutPageTranslationInput
}

input PageTranslationUpdateManyWithoutPageInput {
  create: [PageTranslationCreateWithoutPageInput!]
  connect: [PageTranslationWhereUniqueInput!]
  disconnect: [PageTranslationWhereUniqueInput!]
  delete: [PageTranslationWhereUniqueInput!]
  update: [PageTranslationUpdateWithWhereUniqueWithoutPageInput!]
  upsert: [PageTranslationUpsertWithWhereUniqueWithoutPageInput!]
}

input PageTranslationUpdateOneWithoutTasksInput {
  create: PageTranslationCreateWithoutTasksInput
  connect: PageTranslationWhereUniqueInput
  delete: Boolean
  update: PageTranslationUpdateWithoutTasksDataInput
  upsert: PageTranslationUpsertWithoutTasksInput
}

input PageTranslationUpdateWithoutPageDataInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  publishedFrom: DateTime
  publishedTo: DateTime
  language: LanguageUpdateOneInput
  tasks: PageTaskUpdateManyWithoutPageTranslationInput
}

input PageTranslationUpdateWithoutTasksDataInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  publishedFrom: DateTime
  publishedTo: DateTime
  page: PageUpdateOneWithoutTranslationsInput
  language: LanguageUpdateOneInput
}

input PageTranslationUpdateWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput!
  data: PageTranslationUpdateWithoutPageDataInput!
}

input PageTranslationUpsertWithoutTasksInput {
  update: PageTranslationUpdateWithoutTasksDataInput!
  create: PageTranslationCreateWithoutTasksInput!
}

input PageTranslationUpsertWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput!
  update: PageTranslationUpdateWithoutPageDataInput!
  create: PageTranslationCreateWithoutPageInput!
}

input PageTranslationWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTranslationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTranslationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTranslationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  status: PageStatus

  """All values that are not equal to given value."""
  status_not: PageStatus

  """All values that are contained in given list."""
  status_in: [PageStatus!]

  """All values that are not contained in given list."""
  status_not_in: [PageStatus!]
  publishedFrom: DateTime

  """All values that are not equal to given value."""
  publishedFrom_not: DateTime

  """All values that are contained in given list."""
  publishedFrom_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedFrom_not_in: [DateTime!]

  """All values less than the given value."""
  publishedFrom_lt: DateTime

  """All values less than or equal the given value."""
  publishedFrom_lte: DateTime

  """All values greater than the given value."""
  publishedFrom_gt: DateTime

  """All values greater than or equal the given value."""
  publishedFrom_gte: DateTime
  publishedTo: DateTime

  """All values that are not equal to given value."""
  publishedTo_not: DateTime

  """All values that are contained in given list."""
  publishedTo_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedTo_not_in: [DateTime!]

  """All values less than the given value."""
  publishedTo_lt: DateTime

  """All values less than or equal the given value."""
  publishedTo_lte: DateTime

  """All values greater than the given value."""
  publishedTo_gt: DateTime

  """All values greater than or equal the given value."""
  publishedTo_gte: DateTime
  page: PageWhereInput
  language: LanguageWhereInput
  tasks_every: PageTaskWhereInput
  tasks_some: PageTaskWhereInput
  tasks_none: PageTaskWhereInput
}

input PageTranslationWhereUniqueInput {
  id: ID
}

type PageType implements Node {
  id: ID!
  name: String!
  content: Json!
  website(where: WebsiteWhereInput): Website!
  plugins: [String!]!
}

"""A connection to a list of items."""
type PageTypeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PageTypeEdge]!
  aggregate: AggregatePageType!
}

input PageTypeCreateInput {
  name: String!
  content: Json
  plugins: PageTypeCreatepluginsInput
  website: WebsiteCreateOneWithoutPageTypesInput!
}

input PageTypeCreateManyWithoutWebsiteInput {
  create: [PageTypeCreateWithoutWebsiteInput!]
  connect: [PageTypeWhereUniqueInput!]
}

input PageTypeCreateOneInput {
  create: PageTypeCreateInput
  connect: PageTypeWhereUniqueInput
}

input PageTypeCreatepluginsInput {
  set: [String!]
}

input PageTypeCreateWithoutWebsiteInput {
  name: String!
  content: Json
  plugins: PageTypeCreatepluginsInput
}

"""An edge in a connection."""
type PageTypeEdge {
  """The item at the end of the edge."""
  node: PageType!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PageTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PageTypePreviousValues {
  id: ID!
  name: String!
  content: Json!
  plugins: [String!]!
}

type PageTypeSubscriptionPayload {
  mutation: MutationType!
  node: PageType
  updatedFields: [String!]
  previousValues: PageTypePreviousValues
}

input PageTypeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTypeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTypeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTypeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PageTypeWhereInput
}

input PageTypeUpdateDataInput {
  name: String
  content: Json
  plugins: PageTypeUpdatepluginsInput
  website: WebsiteUpdateOneWithoutPageTypesInput
}

input PageTypeUpdateInput {
  name: String
  content: Json
  plugins: PageTypeUpdatepluginsInput
  website: WebsiteUpdateOneWithoutPageTypesInput
}

input PageTypeUpdateManyWithoutWebsiteInput {
  create: [PageTypeCreateWithoutWebsiteInput!]
  connect: [PageTypeWhereUniqueInput!]
  disconnect: [PageTypeWhereUniqueInput!]
  delete: [PageTypeWhereUniqueInput!]
  update: [PageTypeUpdateWithWhereUniqueWithoutWebsiteInput!]
  upsert: [PageTypeUpsertWithWhereUniqueWithoutWebsiteInput!]
}

input PageTypeUpdateOneInput {
  create: PageTypeCreateInput
  connect: PageTypeWhereUniqueInput
  delete: Boolean
  update: PageTypeUpdateDataInput
  upsert: PageTypeUpsertNestedInput
}

input PageTypeUpdatepluginsInput {
  set: [String!]
}

input PageTypeUpdateWithoutWebsiteDataInput {
  name: String
  content: Json
  plugins: PageTypeUpdatepluginsInput
}

input PageTypeUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput!
  data: PageTypeUpdateWithoutWebsiteDataInput!
}

input PageTypeUpsertNestedInput {
  update: PageTypeUpdateDataInput!
  create: PageTypeCreateInput!
}

input PageTypeUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput!
  update: PageTypeUpdateWithoutWebsiteDataInput!
  create: PageTypeCreateWithoutWebsiteInput!
}

input PageTypeWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTypeWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTypeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTypeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  website: WebsiteWhereInput
}

input PageTypeWhereUniqueInput {
  id: ID
}

input PageUpdateDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
}

input PageUpdateInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
}

input PageUpdateManyWithoutWebsiteInput {
  create: [PageCreateWithoutWebsiteInput!]
  connect: [PageWhereUniqueInput!]
  disconnect: [PageWhereUniqueInput!]
  delete: [PageWhereUniqueInput!]
  update: [PageUpdateWithWhereUniqueWithoutWebsiteInput!]
  upsert: [PageUpsertWithWhereUniqueWithoutWebsiteInput!]
}

input PageUpdateOneInput {
  create: PageCreateInput
  connect: PageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PageUpdateDataInput
  upsert: PageUpsertNestedInput
}

input PageUpdateOneWithoutChatsInput {
  create: PageCreateWithoutChatsInput
  connect: PageWhereUniqueInput
  delete: Boolean
  update: PageUpdateWithoutChatsDataInput
  upsert: PageUpsertWithoutChatsInput
}

input PageUpdateOneWithoutTranslationsInput {
  create: PageCreateWithoutTranslationsInput
  connect: PageWhereUniqueInput
  delete: Boolean
  update: PageUpdateWithoutTranslationsDataInput
  upsert: PageUpsertWithoutTranslationsInput
}

input PageUpdateWithoutChatsDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
}

input PageUpdateWithoutTranslationsDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  chats: PageChatUpdateManyWithoutPageInput
}

input PageUpdateWithoutWebsiteDataInput {
  parent: PageUpdateOneInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
}

input PageUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput!
  data: PageUpdateWithoutWebsiteDataInput!
}

input PageUpsertNestedInput {
  update: PageUpdateDataInput!
  create: PageCreateInput!
}

input PageUpsertWithoutChatsInput {
  update: PageUpdateWithoutChatsDataInput!
  create: PageCreateWithoutChatsInput!
}

input PageUpsertWithoutTranslationsInput {
  update: PageUpdateWithoutTranslationsDataInput!
  create: PageCreateWithoutTranslationsInput!
}

input PageUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput!
  update: PageUpdateWithoutWebsiteDataInput!
  create: PageCreateWithoutWebsiteInput!
}

input PageWhereInput {
  """Logical AND on all given filters."""
  AND: [PageWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  parent: PageWhereInput
  website: WebsiteWhereInput
  type: PageTypeWhereInput
  translations_every: PageTranslationWhereInput
  translations_some: PageTranslationWhereInput
  translations_none: PageTranslationWhereInput
  chats_every: PageChatWhereInput
  chats_some: PageChatWhereInput
  chats_none: PageChatWhereInput
}

input PageWhereUniqueInput {
  id: ID
}

type Project implements Node {
  id: ID!
  name: String!
  defaultName: String!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language!]
  defaultLanguage(where: LanguageWhereInput): Language!
  settings: Json!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
}

"""A connection to a list of items."""
type ProjectConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  defaultName: String!
  settings: Json
  languages: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput!
  websites: WebsiteCreateManyWithoutProjectInput
}

input ProjectCreateOneWithoutWebsitesInput {
  create: ProjectCreateWithoutWebsitesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutWebsitesInput {
  name: String!
  defaultName: String!
  settings: Json
  languages: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput!
}

"""An edge in a connection."""
type ProjectEdge {
  """The item at the end of the edge."""
  node: Project!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  defaultName_ASC
  defaultName_DESC
  settings_ASC
  settings_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
  defaultName: String!
  settings: Json!
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProjectSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProjectSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProjectSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
}

input ProjectUpdateInput {
  name: String
  defaultName: String
  settings: Json
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneInput
  websites: WebsiteUpdateManyWithoutProjectInput
}

input ProjectUpdateOneWithoutWebsitesInput {
  create: ProjectCreateWithoutWebsitesInput
  connect: ProjectWhereUniqueInput
  delete: Boolean
  update: ProjectUpdateWithoutWebsitesDataInput
  upsert: ProjectUpsertWithoutWebsitesInput
}

input ProjectUpdateWithoutWebsitesDataInput {
  name: String
  defaultName: String
  settings: Json
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneInput
}

input ProjectUpsertWithoutWebsitesInput {
  update: ProjectUpdateWithoutWebsitesDataInput!
  create: ProjectCreateWithoutWebsitesInput!
}

input ProjectWhereInput {
  """Logical AND on all given filters."""
  AND: [ProjectWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProjectWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProjectWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  defaultName: String

  """All values that are not equal to given value."""
  defaultName_not: String

  """All values that are contained in given list."""
  defaultName_in: [String!]

  """All values that are not contained in given list."""
  defaultName_not_in: [String!]

  """All values less than the given value."""
  defaultName_lt: String

  """All values less than or equal the given value."""
  defaultName_lte: String

  """All values greater than the given value."""
  defaultName_gt: String

  """All values greater than or equal the given value."""
  defaultName_gte: String

  """All values containing the given string."""
  defaultName_contains: String

  """All values not containing the given string."""
  defaultName_not_contains: String

  """All values starting with the given string."""
  defaultName_starts_with: String

  """All values not starting with the given string."""
  defaultName_not_starts_with: String

  """All values ending with the given string."""
  defaultName_ends_with: String

  """All values not ending with the given string."""
  defaultName_not_ends_with: String
  languages_every: LanguageWhereInput
  languages_some: LanguageWhereInput
  languages_none: LanguageWhereInput
  defaultLanguage: LanguageWhereInput
  websites_every: WebsiteWhereInput
  websites_some: WebsiteWhereInput
  websites_none: WebsiteWhereInput
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  pageTranslations(where: PageTranslationWhereInput, orderBy: PageTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTranslation]!
  pageTasks(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTask]!
  pageChats(where: PageChatWhereInput, orderBy: PageChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageChat]!
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page]!
  pageTypes(where: PageTypeWhereInput, orderBy: PageTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageType]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  project(where: ProjectWhereUniqueInput!): Project
  website(where: WebsiteWhereUniqueInput!): Website
  pageTranslation(where: PageTranslationWhereUniqueInput!): PageTranslation
  pageTask(where: PageTaskWhereUniqueInput!): PageTask
  pageChat(where: PageChatWhereUniqueInput!): PageChat
  page(where: PageWhereUniqueInput!): Page
  pageType(where: PageTypeWhereUniqueInput!): PageType
  language(where: LanguageWhereUniqueInput!): Language
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  pageTranslationsConnection(where: PageTranslationWhereInput, orderBy: PageTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTranslationConnection!
  pageTasksConnection(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTaskConnection!
  pageChatsConnection(where: PageChatWhereInput, orderBy: PageChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageChatConnection!
  pagesConnection(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageConnection!
  pageTypesConnection(where: PageTypeWhereInput, orderBy: PageTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTypeConnection!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
  pageTranslation(where: PageTranslationSubscriptionWhereInput): PageTranslationSubscriptionPayload
  pageTask(where: PageTaskSubscriptionWhereInput): PageTaskSubscriptionPayload
  pageChat(where: PageChatSubscriptionWhereInput): PageChatSubscriptionPayload
  page(where: PageSubscriptionWhereInput): PageSubscriptionPayload
  pageType(where: PageTypeSubscriptionWhereInput): PageTypeSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
}

type Website implements Node {
  id: ID!
  title: String!
  project(where: ProjectWhereInput): Project!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language!]
  defaultLanguage(where: LanguageWhereInput): Language!
  urlMask: String!
  settings: Json!
  pageTypes(where: PageTypeWhereInput, orderBy: PageTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageType!]
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page!]
}

"""A connection to a list of items."""
type WebsiteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WebsiteEdge]!
  aggregate: AggregateWebsite!
}

input WebsiteCreateInput {
  title: String!
  urlMask: String!
  settings: Json
  project: ProjectCreateOneWithoutWebsitesInput!
  languages: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput!
  pageTypes: PageTypeCreateManyWithoutWebsiteInput
  pages: PageCreateManyWithoutWebsiteInput
}

input WebsiteCreateManyWithoutProjectInput {
  create: [WebsiteCreateWithoutProjectInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateOneWithoutPagesInput {
  create: WebsiteCreateWithoutPagesInput
  connect: WebsiteWhereUniqueInput
}

input WebsiteCreateOneWithoutPageTypesInput {
  create: WebsiteCreateWithoutPageTypesInput
  connect: WebsiteWhereUniqueInput
}

input WebsiteCreateWithoutPagesInput {
  title: String!
  urlMask: String!
  settings: Json
  project: ProjectCreateOneWithoutWebsitesInput!
  languages: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput!
  pageTypes: PageTypeCreateManyWithoutWebsiteInput
}

input WebsiteCreateWithoutPageTypesInput {
  title: String!
  urlMask: String!
  settings: Json
  project: ProjectCreateOneWithoutWebsitesInput!
  languages: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput!
  pages: PageCreateManyWithoutWebsiteInput
}

input WebsiteCreateWithoutProjectInput {
  title: String!
  urlMask: String!
  settings: Json
  languages: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput!
  pageTypes: PageTypeCreateManyWithoutWebsiteInput
  pages: PageCreateManyWithoutWebsiteInput
}

"""An edge in a connection."""
type WebsiteEdge {
  """The item at the end of the edge."""
  node: Website!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WebsiteOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  urlMask_ASC
  urlMask_DESC
  settings_ASC
  settings_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type WebsitePreviousValues {
  id: ID!
  title: String!
  urlMask: String!
  settings: Json!
}

type WebsiteSubscriptionPayload {
  mutation: MutationType!
  node: Website
  updatedFields: [String!]
  previousValues: WebsitePreviousValues
}

input WebsiteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WebsiteWhereInput
}

input WebsiteUpdateInput {
  title: String
  urlMask: String
  settings: Json
  project: ProjectUpdateOneWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneInput
  pageTypes: PageTypeUpdateManyWithoutWebsiteInput
  pages: PageUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateManyWithoutProjectInput {
  create: [WebsiteCreateWithoutProjectInput!]
  connect: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutProjectInput!]
}

input WebsiteUpdateOneWithoutPagesInput {
  create: WebsiteCreateWithoutPagesInput
  connect: WebsiteWhereUniqueInput
  delete: Boolean
  update: WebsiteUpdateWithoutPagesDataInput
  upsert: WebsiteUpsertWithoutPagesInput
}

input WebsiteUpdateOneWithoutPageTypesInput {
  create: WebsiteCreateWithoutPageTypesInput
  connect: WebsiteWhereUniqueInput
  delete: Boolean
  update: WebsiteUpdateWithoutPageTypesDataInput
  upsert: WebsiteUpsertWithoutPageTypesInput
}

input WebsiteUpdateWithoutPagesDataInput {
  title: String
  urlMask: String
  settings: Json
  project: ProjectUpdateOneWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneInput
  pageTypes: PageTypeUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutPageTypesDataInput {
  title: String
  urlMask: String
  settings: Json
  project: ProjectUpdateOneWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneInput
  pages: PageUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutProjectDataInput {
  title: String
  urlMask: String
  settings: Json
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneInput
  pageTypes: PageTypeUpdateManyWithoutWebsiteInput
  pages: PageUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutProjectDataInput!
}

input WebsiteUpsertWithoutPagesInput {
  update: WebsiteUpdateWithoutPagesDataInput!
  create: WebsiteCreateWithoutPagesInput!
}

input WebsiteUpsertWithoutPageTypesInput {
  update: WebsiteUpdateWithoutPageTypesDataInput!
  create: WebsiteCreateWithoutPageTypesInput!
}

input WebsiteUpsertWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutProjectDataInput!
  create: WebsiteCreateWithoutProjectInput!
}

input WebsiteWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  urlMask: String

  """All values that are not equal to given value."""
  urlMask_not: String

  """All values that are contained in given list."""
  urlMask_in: [String!]

  """All values that are not contained in given list."""
  urlMask_not_in: [String!]

  """All values less than the given value."""
  urlMask_lt: String

  """All values less than or equal the given value."""
  urlMask_lte: String

  """All values greater than the given value."""
  urlMask_gt: String

  """All values greater than or equal the given value."""
  urlMask_gte: String

  """All values containing the given string."""
  urlMask_contains: String

  """All values not containing the given string."""
  urlMask_not_contains: String

  """All values starting with the given string."""
  urlMask_starts_with: String

  """All values not starting with the given string."""
  urlMask_not_starts_with: String

  """All values ending with the given string."""
  urlMask_ends_with: String

  """All values not ending with the given string."""
  urlMask_not_ends_with: String
  project: ProjectWhereInput
  languages_every: LanguageWhereInput
  languages_some: LanguageWhereInput
  languages_none: LanguageWhereInput
  defaultLanguage: LanguageWhereInput
  pageTypes_every: PageTypeWhereInput
  pageTypes_some: PageTypeWhereInput
  pageTypes_none: PageTypeWhereInput
  pages_every: PageWhereInput
  pages_some: PageWhereInput
  pages_none: PageWhereInput
}

input WebsiteWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type PageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProjectOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'defaultName_ASC' |
  'defaultName_DESC' |
  'settings_ASC' |
  'settings_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LanguageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'code_ASC' |
  'code_DESC' |
  'name_ASC' |
  'name_DESC' |
  'englishName_ASC' |
  'englishName_DESC' |
  'isDefault_ASC' |
  'isDefault_DESC' |
  'isEnabled_ASC' |
  'isEnabled_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PageStatus =   'DRAFT' |
  'PENDING' |
  'PUBLISHED'

export type WebsiteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'urlMask_ASC' |
  'urlMask_DESC' |
  'settings_ASC' |
  'settings_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PageTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'content_ASC' |
  'content_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PageTranslationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'url_ASC' |
  'url_DESC' |
  'content_ASC' |
  'content_DESC' |
  'name_ASC' |
  'name_DESC' |
  'status_ASC' |
  'status_DESC' |
  'publishedFrom_ASC' |
  'publishedFrom_DESC' |
  'publishedTo_ASC' |
  'publishedTo_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PageTaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'done_ASC' |
  'done_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PageChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface PageTaskCreateInput {
  done?: Boolean
  name: String
  description: String
  pageTranslation: PageTranslationCreateOneWithoutTasksInput
}

export interface ProjectWhereInput {
  AND?: ProjectWhereInput[] | ProjectWhereInput
  OR?: ProjectWhereInput[] | ProjectWhereInput
  NOT?: ProjectWhereInput[] | ProjectWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  defaultName?: String
  defaultName_not?: String
  defaultName_in?: String[] | String
  defaultName_not_in?: String[] | String
  defaultName_lt?: String
  defaultName_lte?: String
  defaultName_gt?: String
  defaultName_gte?: String
  defaultName_contains?: String
  defaultName_not_contains?: String
  defaultName_starts_with?: String
  defaultName_not_starts_with?: String
  defaultName_ends_with?: String
  defaultName_not_ends_with?: String
  languages_every?: LanguageWhereInput
  languages_some?: LanguageWhereInput
  languages_none?: LanguageWhereInput
  defaultLanguage?: LanguageWhereInput
  websites_every?: WebsiteWhereInput
  websites_some?: WebsiteWhereInput
  websites_none?: WebsiteWhereInput
}

export interface ProjectUpdateInput {
  name?: String
  defaultName?: String
  settings?: Json
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
  websites?: WebsiteUpdateManyWithoutProjectInput
}

export interface PageChatWhereInput {
  AND?: PageChatWhereInput[] | PageChatWhereInput
  OR?: PageChatWhereInput[] | PageChatWhereInput
  NOT?: PageChatWhereInput[] | PageChatWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  page?: PageWhereInput
}

export interface PageCreateWithoutWebsiteInput {
  parent?: PageCreateOneInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput
  chats?: PageChatCreateManyWithoutPageInput
}

export interface PageTranslationUpdateWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput
  data: PageTranslationUpdateWithoutPageDataInput
}

export interface PageCreateOneInput {
  create?: PageCreateInput
  connect?: PageWhereUniqueInput
}

export interface LanguageUpdateManyInput {
  create?: LanguageCreateInput[] | LanguageCreateInput
  connect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
  disconnect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
  delete?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
  update?: LanguageUpdateWithWhereUniqueNestedInput[] | LanguageUpdateWithWhereUniqueNestedInput
  upsert?: LanguageUpsertWithWhereUniqueNestedInput[] | LanguageUpsertWithWhereUniqueNestedInput
}

export interface PageCreateInput {
  parent?: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput
  chats?: PageChatCreateManyWithoutPageInput
}

export interface LanguageSubscriptionWhereInput {
  AND?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  OR?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  NOT?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LanguageWhereInput
}

export interface WebsiteCreateOneWithoutPagesInput {
  create?: WebsiteCreateWithoutPagesInput
  connect?: WebsiteWhereUniqueInput
}

export interface PageSubscriptionWhereInput {
  AND?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput
  OR?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput
  NOT?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PageWhereInput
}

export interface WebsiteCreateWithoutPagesInput {
  title: String
  urlMask: String
  settings?: Json
  project: ProjectCreateOneWithoutWebsitesInput
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
  pageTypes?: PageTypeCreateManyWithoutWebsiteInput
}

export interface PageChatSubscriptionWhereInput {
  AND?: PageChatSubscriptionWhereInput[] | PageChatSubscriptionWhereInput
  OR?: PageChatSubscriptionWhereInput[] | PageChatSubscriptionWhereInput
  NOT?: PageChatSubscriptionWhereInput[] | PageChatSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PageChatWhereInput
}

export interface ProjectCreateOneWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput
  connect?: ProjectWhereUniqueInput
}

export interface PageTaskSubscriptionWhereInput {
  AND?: PageTaskSubscriptionWhereInput[] | PageTaskSubscriptionWhereInput
  OR?: PageTaskSubscriptionWhereInput[] | PageTaskSubscriptionWhereInput
  NOT?: PageTaskSubscriptionWhereInput[] | PageTaskSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PageTaskWhereInput
}

export interface ProjectCreateWithoutWebsitesInput {
  name: String
  defaultName: String
  settings?: Json
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
}

export interface PageTranslationSubscriptionWhereInput {
  AND?: PageTranslationSubscriptionWhereInput[] | PageTranslationSubscriptionWhereInput
  OR?: PageTranslationSubscriptionWhereInput[] | PageTranslationSubscriptionWhereInput
  NOT?: PageTranslationSubscriptionWhereInput[] | PageTranslationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PageTranslationWhereInput
}

export interface PageTypeCreateOneInput {
  create?: PageTypeCreateInput
  connect?: PageTypeWhereUniqueInput
}

export interface WebsiteSubscriptionWhereInput {
  AND?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput
  OR?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput
  NOT?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WebsiteWhereInput
}

export interface PageTypeCreateInput {
  name: String
  content?: Json
  plugins?: PageTypeCreatepluginsInput
  website: WebsiteCreateOneWithoutPageTypesInput
}

export interface LanguageUpdateInput {
  code?: String
  name?: String
  englishName?: String
  isDefault?: Boolean
  isEnabled?: Boolean
}

export interface WebsiteCreateOneWithoutPageTypesInput {
  create?: WebsiteCreateWithoutPageTypesInput
  connect?: WebsiteWhereUniqueInput
}

export interface PageTypeUpdateInput {
  name?: String
  content?: Json
  plugins?: PageTypeUpdatepluginsInput
  website?: WebsiteUpdateOneWithoutPageTypesInput
}

export interface WebsiteCreateWithoutPageTypesInput {
  title: String
  urlMask: String
  settings?: Json
  project: ProjectCreateOneWithoutWebsitesInput
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
  pages?: PageCreateManyWithoutWebsiteInput
}

export interface WebsiteWhereUniqueInput {
  id?: ID_Input
}

export interface PageTranslationCreateManyWithoutPageInput {
  create?: PageTranslationCreateWithoutPageInput[] | PageTranslationCreateWithoutPageInput
  connect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput
}

export interface PageTaskWhereUniqueInput {
  id?: ID_Input
}

export interface PageTranslationCreateWithoutPageInput {
  url: String
  content?: Json
  name?: String
  status?: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
  language: LanguageCreateOneInput
  tasks?: PageTaskCreateManyWithoutPageTranslationInput
}

export interface PageWhereUniqueInput {
  id?: ID_Input
}

export interface PageTaskCreateManyWithoutPageTranslationInput {
  create?: PageTaskCreateWithoutPageTranslationInput[] | PageTaskCreateWithoutPageTranslationInput
  connect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input
}

export interface PageTaskCreateWithoutPageTranslationInput {
  done?: Boolean
  name: String
  description: String
}

export interface PageUpsertWithoutChatsInput {
  update: PageUpdateWithoutChatsDataInput
  create: PageCreateWithoutChatsInput
}

export interface PageChatCreateManyWithoutPageInput {
  create?: PageChatCreateWithoutPageInput[] | PageChatCreateWithoutPageInput
  connect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
}

export interface PageUpdateOneWithoutChatsInput {
  create?: PageCreateWithoutChatsInput
  connect?: PageWhereUniqueInput
  delete?: Boolean
  update?: PageUpdateWithoutChatsDataInput
  upsert?: PageUpsertWithoutChatsInput
}

export interface PageChatCreateWithoutPageInput {
  text: String
}

export interface PageTranslationUpsertWithoutTasksInput {
  update: PageTranslationUpdateWithoutTasksDataInput
  create: PageTranslationCreateWithoutTasksInput
}

export interface WebsiteCreateInput {
  title: String
  urlMask: String
  settings?: Json
  project: ProjectCreateOneWithoutWebsitesInput
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
  pageTypes?: PageTypeCreateManyWithoutWebsiteInput
  pages?: PageCreateManyWithoutWebsiteInput
}

export interface PageTranslationUpdateOneWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput
  connect?: PageTranslationWhereUniqueInput
  delete?: Boolean
  update?: PageTranslationUpdateWithoutTasksDataInput
  upsert?: PageTranslationUpsertWithoutTasksInput
}

export interface PageTranslationCreateInput {
  url: String
  content?: Json
  name?: String
  status?: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
  page: PageCreateOneWithoutTranslationsInput
  language: LanguageCreateOneInput
  tasks?: PageTaskCreateManyWithoutPageTranslationInput
}

export interface PageUpsertWithoutTranslationsInput {
  update: PageUpdateWithoutTranslationsDataInput
  create: PageCreateWithoutTranslationsInput
}

export interface PageCreateOneWithoutTranslationsInput {
  create?: PageCreateWithoutTranslationsInput
  connect?: PageWhereUniqueInput
}

export interface PageUpdateOneWithoutTranslationsInput {
  create?: PageCreateWithoutTranslationsInput
  connect?: PageWhereUniqueInput
  delete?: Boolean
  update?: PageUpdateWithoutTranslationsDataInput
  upsert?: PageUpsertWithoutTranslationsInput
}

export interface PageCreateWithoutTranslationsInput {
  parent?: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  chats?: PageChatCreateManyWithoutPageInput
}

export interface WebsiteUpdateInput {
  title?: String
  urlMask?: String
  settings?: Json
  project?: ProjectUpdateOneWithoutWebsitesInput
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput
  pages?: PageUpdateManyWithoutWebsiteInput
}

export interface PageTaskUpdateManyWithoutPageTranslationInput {
  create?: PageTaskCreateWithoutPageTranslationInput[] | PageTaskCreateWithoutPageTranslationInput
  connect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
  disconnect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
  delete?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
  update?: PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput
  upsert?: PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput
}

export interface PageUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput
  update: PageUpdateWithoutWebsiteDataInput
  create: PageCreateWithoutWebsiteInput
}

export interface PageTranslationCreateOneWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput
  connect?: PageTranslationWhereUniqueInput
}

export interface PageChatUpsertWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput
  update: PageChatUpdateWithoutPageDataInput
  create: PageChatCreateWithoutPageInput
}

export interface PageTranslationCreateWithoutTasksInput {
  url: String
  content?: Json
  name?: String
  status?: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
  page: PageCreateOneWithoutTranslationsInput
  language: LanguageCreateOneInput
}

export interface PageChatUpdateWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput
  data: PageChatUpdateWithoutPageDataInput
}

export interface PageChatCreateInput {
  text: String
  page: PageCreateOneWithoutChatsInput
}

export interface PageTranslationUpsertWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput
  update: PageTranslationUpdateWithoutPageDataInput
  create: PageTranslationCreateWithoutPageInput
}

export interface PageCreateOneWithoutChatsInput {
  create?: PageCreateWithoutChatsInput
  connect?: PageWhereUniqueInput
}

export interface PageTaskUpdateWithoutPageTranslationDataInput {
  done?: Boolean
  name?: String
  description?: String
}

export interface PageCreateWithoutChatsInput {
  parent?: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput
}

export interface ProjectCreateInput {
  name: String
  defaultName: String
  settings?: Json
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
  websites?: WebsiteCreateManyWithoutProjectInput
}

export interface PageTaskWhereInput {
  AND?: PageTaskWhereInput[] | PageTaskWhereInput
  OR?: PageTaskWhereInput[] | PageTaskWhereInput
  NOT?: PageTaskWhereInput[] | PageTaskWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  done?: Boolean
  done_not?: Boolean
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  pageTranslation?: PageTranslationWhereInput
}

export interface LanguageCreateInput {
  code: String
  name: String
  englishName: String
  isDefault?: Boolean
  isEnabled?: Boolean
}

export interface PageTranslationUpdateWithoutPageDataInput {
  url?: String
  content?: Json
  name?: String
  status?: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
  language?: LanguageUpdateOneInput
  tasks?: PageTaskUpdateManyWithoutPageTranslationInput
}

export interface WebsiteCreateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
}

export interface LanguageUpdateWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput
  data: LanguageUpdateDataInput
}

export interface PageTypeCreateManyWithoutWebsiteInput {
  create?: PageTypeCreateWithoutWebsiteInput[] | PageTypeCreateWithoutWebsiteInput
  connect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
}

export interface LanguageUpdateDataInput {
  code?: String
  name?: String
  englishName?: String
  isDefault?: Boolean
  isEnabled?: Boolean
}

export interface PageTypeCreatepluginsInput {
  set?: String[] | String
}

export interface LanguageUpsertWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface PageTranslationWhereInput {
  AND?: PageTranslationWhereInput[] | PageTranslationWhereInput
  OR?: PageTranslationWhereInput[] | PageTranslationWhereInput
  NOT?: PageTranslationWhereInput[] | PageTranslationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  status?: PageStatus
  status_not?: PageStatus
  status_in?: PageStatus[] | PageStatus
  status_not_in?: PageStatus[] | PageStatus
  publishedFrom?: DateTime
  publishedFrom_not?: DateTime
  publishedFrom_in?: DateTime[] | DateTime
  publishedFrom_not_in?: DateTime[] | DateTime
  publishedFrom_lt?: DateTime
  publishedFrom_lte?: DateTime
  publishedFrom_gt?: DateTime
  publishedFrom_gte?: DateTime
  publishedTo?: DateTime
  publishedTo_not?: DateTime
  publishedTo_in?: DateTime[] | DateTime
  publishedTo_not_in?: DateTime[] | DateTime
  publishedTo_lt?: DateTime
  publishedTo_lte?: DateTime
  publishedTo_gt?: DateTime
  publishedTo_gte?: DateTime
  page?: PageWhereInput
  language?: LanguageWhereInput
  tasks_every?: PageTaskWhereInput
  tasks_some?: PageTaskWhereInput
  tasks_none?: PageTaskWhereInput
}

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
  delete?: Boolean
  update?: LanguageUpdateDataInput
  upsert?: LanguageUpsertNestedInput
}

export interface PageTypeWhereInput {
  AND?: PageTypeWhereInput[] | PageTypeWhereInput
  OR?: PageTypeWhereInput[] | PageTypeWhereInput
  NOT?: PageTypeWhereInput[] | PageTypeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  website?: WebsiteWhereInput
}

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface ProjectSubscriptionWhereInput {
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProjectWhereInput
}

export interface WebsiteUpdateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  update?: WebsiteUpdateWithWhereUniqueWithoutProjectInput[] | WebsiteUpdateWithWhereUniqueWithoutProjectInput
  upsert?: WebsiteUpsertWithWhereUniqueWithoutProjectInput[] | WebsiteUpsertWithWhereUniqueWithoutProjectInput
}

export interface ProjectWhereUniqueInput {
  id?: ID_Input
}

export interface WebsiteUpdateWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutProjectDataInput
}

export interface PageChatWhereUniqueInput {
  id?: ID_Input
}

export interface WebsiteUpdateWithoutProjectDataInput {
  title?: String
  urlMask?: String
  settings?: Json
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput
  pages?: PageUpdateManyWithoutWebsiteInput
}

export interface PageUpdateInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
  chats?: PageChatUpdateManyWithoutPageInput
}

export interface PageTypeUpdateManyWithoutWebsiteInput {
  create?: PageTypeCreateWithoutWebsiteInput[] | PageTypeCreateWithoutWebsiteInput
  connect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
  disconnect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
  delete?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
  update?: PageTypeUpdateWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpdateWithWhereUniqueWithoutWebsiteInput
  upsert?: PageTypeUpsertWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpsertWithWhereUniqueWithoutWebsiteInput
}

export interface PageChatUpdateInput {
  text?: String
  page?: PageUpdateOneWithoutChatsInput
}

export interface PageTypeUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput
  data: PageTypeUpdateWithoutWebsiteDataInput
}

export interface PageTaskUpdateInput {
  done?: Boolean
  name?: String
  description?: String
  pageTranslation?: PageTranslationUpdateOneWithoutTasksInput
}

export interface PageTypeUpdateWithoutWebsiteDataInput {
  name?: String
  content?: Json
  plugins?: PageTypeUpdatepluginsInput
}

export interface PageTranslationUpdateInput {
  url?: String
  content?: Json
  name?: String
  status?: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
  page?: PageUpdateOneWithoutTranslationsInput
  language?: LanguageUpdateOneInput
  tasks?: PageTaskUpdateManyWithoutPageTranslationInput
}

export interface PageTypeUpdatepluginsInput {
  set?: String[] | String
}

export interface PageUpsertNestedInput {
  update: PageUpdateDataInput
  create: PageCreateInput
}

export interface PageTypeUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput
  update: PageTypeUpdateWithoutWebsiteDataInput
  create: PageTypeCreateWithoutWebsiteInput
}

export interface PageChatUpdateManyWithoutPageInput {
  create?: PageChatCreateWithoutPageInput[] | PageChatCreateWithoutPageInput
  connect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
  disconnect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
  delete?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
  update?: PageChatUpdateWithWhereUniqueWithoutPageInput[] | PageChatUpdateWithWhereUniqueWithoutPageInput
  upsert?: PageChatUpsertWithWhereUniqueWithoutPageInput[] | PageChatUpsertWithWhereUniqueWithoutPageInput
}

export interface PageUpdateManyWithoutWebsiteInput {
  create?: PageCreateWithoutWebsiteInput[] | PageCreateWithoutWebsiteInput
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput
  update?: PageUpdateWithWhereUniqueWithoutWebsiteInput[] | PageUpdateWithWhereUniqueWithoutWebsiteInput
  upsert?: PageUpsertWithWhereUniqueWithoutWebsiteInput[] | PageUpsertWithWhereUniqueWithoutWebsiteInput
}

export interface PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput
  data: PageTaskUpdateWithoutPageTranslationDataInput
}

export interface PageUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput
  data: PageUpdateWithoutWebsiteDataInput
}

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
}

export interface PageUpdateWithoutWebsiteDataInput {
  parent?: PageUpdateOneInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
  chats?: PageChatUpdateManyWithoutPageInput
}

export interface PageTypeCreateWithoutWebsiteInput {
  name: String
  content?: Json
  plugins?: PageTypeCreatepluginsInput
}

export interface PageUpdateOneInput {
  create?: PageCreateInput
  connect?: PageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PageUpdateDataInput
  upsert?: PageUpsertNestedInput
}

export interface PageTypeSubscriptionWhereInput {
  AND?: PageTypeSubscriptionWhereInput[] | PageTypeSubscriptionWhereInput
  OR?: PageTypeSubscriptionWhereInput[] | PageTypeSubscriptionWhereInput
  NOT?: PageTypeSubscriptionWhereInput[] | PageTypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PageTypeWhereInput
}

export interface PageUpdateDataInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
  chats?: PageChatUpdateManyWithoutPageInput
}

export interface WebsiteWhereInput {
  AND?: WebsiteWhereInput[] | WebsiteWhereInput
  OR?: WebsiteWhereInput[] | WebsiteWhereInput
  NOT?: WebsiteWhereInput[] | WebsiteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  urlMask?: String
  urlMask_not?: String
  urlMask_in?: String[] | String
  urlMask_not_in?: String[] | String
  urlMask_lt?: String
  urlMask_lte?: String
  urlMask_gt?: String
  urlMask_gte?: String
  urlMask_contains?: String
  urlMask_not_contains?: String
  urlMask_starts_with?: String
  urlMask_not_starts_with?: String
  urlMask_ends_with?: String
  urlMask_not_ends_with?: String
  project?: ProjectWhereInput
  languages_every?: LanguageWhereInput
  languages_some?: LanguageWhereInput
  languages_none?: LanguageWhereInput
  defaultLanguage?: LanguageWhereInput
  pageTypes_every?: PageTypeWhereInput
  pageTypes_some?: PageTypeWhereInput
  pageTypes_none?: PageTypeWhereInput
  pages_every?: PageWhereInput
  pages_some?: PageWhereInput
  pages_none?: PageWhereInput
}

export interface WebsiteUpdateOneWithoutPagesInput {
  create?: WebsiteCreateWithoutPagesInput
  connect?: WebsiteWhereUniqueInput
  delete?: Boolean
  update?: WebsiteUpdateWithoutPagesDataInput
  upsert?: WebsiteUpsertWithoutPagesInput
}

export interface PageTranslationWhereUniqueInput {
  id?: ID_Input
}

export interface WebsiteUpdateWithoutPagesDataInput {
  title?: String
  urlMask?: String
  settings?: Json
  project?: ProjectUpdateOneWithoutWebsitesInput
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput
}

export interface PageUpdateWithoutChatsDataInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
}

export interface ProjectUpdateOneWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput
  connect?: ProjectWhereUniqueInput
  delete?: Boolean
  update?: ProjectUpdateWithoutWebsitesDataInput
  upsert?: ProjectUpsertWithoutWebsitesInput
}

export interface PageUpdateWithoutTranslationsDataInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  chats?: PageChatUpdateManyWithoutPageInput
}

export interface ProjectUpdateWithoutWebsitesDataInput {
  name?: String
  defaultName?: String
  settings?: Json
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
}

export interface PageChatUpdateWithoutPageDataInput {
  text?: String
}

export interface ProjectUpsertWithoutWebsitesInput {
  update: ProjectUpdateWithoutWebsitesDataInput
  create: ProjectCreateWithoutWebsitesInput
}

export interface LanguageCreateManyInput {
  create?: LanguageCreateInput[] | LanguageCreateInput
  connect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
}

export interface WebsiteUpsertWithoutPagesInput {
  update: WebsiteUpdateWithoutPagesDataInput
  create: WebsiteCreateWithoutPagesInput
}

export interface PageCreateManyWithoutWebsiteInput {
  create?: PageCreateWithoutWebsiteInput[] | PageCreateWithoutWebsiteInput
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput
}

export interface PageTypeUpdateOneInput {
  create?: PageTypeCreateInput
  connect?: PageTypeWhereUniqueInput
  delete?: Boolean
  update?: PageTypeUpdateDataInput
  upsert?: PageTypeUpsertNestedInput
}

export interface LanguageWhereInput {
  AND?: LanguageWhereInput[] | LanguageWhereInput
  OR?: LanguageWhereInput[] | LanguageWhereInput
  NOT?: LanguageWhereInput[] | LanguageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  code?: String
  code_not?: String
  code_in?: String[] | String
  code_not_in?: String[] | String
  code_lt?: String
  code_lte?: String
  code_gt?: String
  code_gte?: String
  code_contains?: String
  code_not_contains?: String
  code_starts_with?: String
  code_not_starts_with?: String
  code_ends_with?: String
  code_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  englishName?: String
  englishName_not?: String
  englishName_in?: String[] | String
  englishName_not_in?: String[] | String
  englishName_lt?: String
  englishName_lte?: String
  englishName_gt?: String
  englishName_gte?: String
  englishName_contains?: String
  englishName_not_contains?: String
  englishName_starts_with?: String
  englishName_not_starts_with?: String
  englishName_ends_with?: String
  englishName_not_ends_with?: String
  isDefault?: Boolean
  isDefault_not?: Boolean
  isEnabled?: Boolean
  isEnabled_not?: Boolean
}

export interface PageTypeUpdateDataInput {
  name?: String
  content?: Json
  plugins?: PageTypeUpdatepluginsInput
  website?: WebsiteUpdateOneWithoutPageTypesInput
}

export interface PageTranslationUpdateWithoutTasksDataInput {
  url?: String
  content?: Json
  name?: String
  status?: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
  page?: PageUpdateOneWithoutTranslationsInput
  language?: LanguageUpdateOneInput
}

export interface WebsiteUpdateOneWithoutPageTypesInput {
  create?: WebsiteCreateWithoutPageTypesInput
  connect?: WebsiteWhereUniqueInput
  delete?: Boolean
  update?: WebsiteUpdateWithoutPageTypesDataInput
  upsert?: WebsiteUpsertWithoutPageTypesInput
}

export interface PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput
  update: PageTaskUpdateWithoutPageTranslationDataInput
  create: PageTaskCreateWithoutPageTranslationInput
}

export interface PageTranslationUpdateManyWithoutPageInput {
  create?: PageTranslationCreateWithoutPageInput[] | PageTranslationCreateWithoutPageInput
  connect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput
  disconnect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput
  delete?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput
  update?: PageTranslationUpdateWithWhereUniqueWithoutPageInput[] | PageTranslationUpdateWithWhereUniqueWithoutPageInput
  upsert?: PageTranslationUpsertWithWhereUniqueWithoutPageInput[] | PageTranslationUpsertWithWhereUniqueWithoutPageInput
}

export interface PageTypeUpsertNestedInput {
  update: PageTypeUpdateDataInput
  create: PageTypeCreateInput
}

export interface WebsiteUpsertWithoutPageTypesInput {
  update: WebsiteUpdateWithoutPageTypesDataInput
  create: WebsiteCreateWithoutPageTypesInput
}

export interface WebsiteUpdateWithoutPageTypesDataInput {
  title?: String
  urlMask?: String
  settings?: Json
  project?: ProjectUpdateOneWithoutWebsitesInput
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
  pages?: PageUpdateManyWithoutWebsiteInput
}

export interface WebsiteCreateWithoutProjectInput {
  title: String
  urlMask: String
  settings?: Json
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
  pageTypes?: PageTypeCreateManyWithoutWebsiteInput
  pages?: PageCreateManyWithoutWebsiteInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutProjectDataInput
  create: WebsiteCreateWithoutProjectInput
}

export interface PageTypeWhereUniqueInput {
  id?: ID_Input
}

export interface PageWhereInput {
  AND?: PageWhereInput[] | PageWhereInput
  OR?: PageWhereInput[] | PageWhereInput
  NOT?: PageWhereInput[] | PageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  parent?: PageWhereInput
  website?: WebsiteWhereInput
  type?: PageTypeWhereInput
  translations_every?: PageTranslationWhereInput
  translations_some?: PageTranslationWhereInput
  translations_none?: PageTranslationWhereInput
  chats_every?: PageChatWhereInput
  chats_some?: PageChatWhereInput
  chats_none?: PageChatWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface LanguagePreviousValues {
  id: ID_Output
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

export interface PageTask extends Node {
  id: ID_Output
  pageTranslation: PageTranslation
  done: Boolean
  name: String
  description: String
  updatedAt: DateTime
}

export interface Project extends Node {
  id: ID_Output
  name: String
  defaultName: String
  languages?: Language[]
  defaultLanguage: Language
  settings: Json
  websites?: Website[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateLanguage {
  count: Int
}

export interface PageChat extends Node {
  id: ID_Output
  page: Page
  text: String
  createdAt: DateTime
}

export interface PagePreviousValues {
  id: ID_Output
}

export interface LanguageSubscriptionPayload {
  mutation: MutationType
  node?: Language
  updatedFields?: String[]
  previousValues?: LanguagePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LanguageConnection {
  pageInfo: PageInfo
  edges: LanguageEdge[]
  aggregate: AggregateLanguage
}

/*
 * An edge in a connection.

 */
export interface LanguageEdge {
  node: Language
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PageTypeConnection {
  pageInfo: PageInfo
  edges: PageTypeEdge[]
  aggregate: AggregatePageType
}

export interface AggregatePageType {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PageEdge {
  node: Page
  cursor: String
}

export interface PageTypePreviousValues {
  id: ID_Output
  name: String
  content: Json
  plugins: String[]
}

export interface AggregatePageChat {
  count: Int
}

export interface PageTypeSubscriptionPayload {
  mutation: MutationType
  node?: PageType
  updatedFields?: String[]
  previousValues?: PageTypePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PageChatConnection {
  pageInfo: PageInfo
  edges: PageChatEdge[]
  aggregate: AggregatePageChat
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType
  node?: Project
  updatedFields?: String[]
  previousValues?: ProjectPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PageTaskEdge {
  node: PageTask
  cursor: String
}

export interface ProjectPreviousValues {
  id: ID_Output
  name: String
  defaultName: String
  settings: Json
}

export interface AggregatePageTranslation {
  count: Int
}

export interface PageTranslation extends Node {
  id: ID_Output
  page: Page
  language: Language
  url: String
  content: Json
  name: String
  status: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
  tasks?: PageTask[]
}

/*
 * A connection to a list of items.

 */
export interface PageTranslationConnection {
  pageInfo: PageInfo
  edges: PageTranslationEdge[]
  aggregate: AggregatePageTranslation
}

export interface WebsiteSubscriptionPayload {
  mutation: MutationType
  node?: Website
  updatedFields?: String[]
  previousValues?: WebsitePreviousValues
}

/*
 * An edge in a connection.

 */
export interface WebsiteEdge {
  node: Website
  cursor: String
}

export interface WebsitePreviousValues {
  id: ID_Output
  title: String
  urlMask: String
  settings: Json
}

export interface AggregateProject {
  count: Int
}

export interface Page extends Node {
  id: ID_Output
  parent?: Page
  website: Website
  type: PageType
  translations?: PageTranslation[]
  chats?: PageChat[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface PageTranslationSubscriptionPayload {
  mutation: MutationType
  node?: PageTranslation
  updatedFields?: String[]
  previousValues?: PageTranslationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PageTypeEdge {
  node: PageType
  cursor: String
}

export interface PageTranslationPreviousValues {
  id: ID_Output
  url: String
  content: Json
  name: String
  status: PageStatus
  publishedFrom?: DateTime
  publishedTo?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PageConnection {
  pageInfo: PageInfo
  edges: PageEdge[]
  aggregate: AggregatePage
}

export interface PageType extends Node {
  id: ID_Output
  name: String
  content: Json
  website: Website
  plugins: String[]
}

export interface AggregatePageTask {
  count: Int
}

export interface PageTaskSubscriptionPayload {
  mutation: MutationType
  node?: PageTask
  updatedFields?: String[]
  previousValues?: PageTaskPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PageTranslationEdge {
  node: PageTranslation
  cursor: String
}

export interface PageTaskPreviousValues {
  id: ID_Output
  done: Boolean
  name: String
  description: String
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface WebsiteConnection {
  pageInfo: PageInfo
  edges: WebsiteEdge[]
  aggregate: AggregateWebsite
}

export interface Website extends Node {
  id: ID_Output
  title: String
  project: Project
  languages?: Language[]
  defaultLanguage: Language
  urlMask: String
  settings: Json
  pageTypes?: PageType[]
  pages?: Page[]
}

/*
 * A connection to a list of items.

 */
export interface ProjectConnection {
  pageInfo: PageInfo
  edges: ProjectEdge[]
  aggregate: AggregateProject
}

/*
 * An edge in a connection.

 */
export interface PageChatEdge {
  node: PageChat
  cursor: String
}

export interface PageSubscriptionPayload {
  mutation: MutationType
  node?: Page
  updatedFields?: String[]
  previousValues?: PagePreviousValues
}

export interface Language extends Node {
  id: ID_Output
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

export interface PageChatPreviousValues {
  id: ID_Output
  text: String
  createdAt: DateTime
}

export interface PageChatSubscriptionPayload {
  mutation: MutationType
  node?: PageChat
  updatedFields?: String[]
  previousValues?: PageChatPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PageTaskConnection {
  pageInfo: PageInfo
  edges: PageTaskEdge[]
  aggregate: AggregatePageTask
}

export interface AggregatePage {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ProjectEdge {
  node: Project
  cursor: String
}

export interface AggregateWebsite {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
Raw JSON value
*/
export type Json = any