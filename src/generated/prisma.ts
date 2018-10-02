import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    projects: <T = Project[]>(args: { where?: ProjectWhereInput, orderBy?: ProjectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslations: <T = PageTranslation[]>(args: { where?: PageTranslationWhereInput, orderBy?: PageTranslationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagePlugins: <T = PagePlugin[]>(args: { where?: PagePluginWhereInput, orderBy?: PagePluginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTasks: <T = PageTask[]>(args: { where?: PageTaskWhereInput, orderBy?: PageTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChats: <T = PageChat[]>(args: { where?: PageChatWhereInput, orderBy?: PageChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigations: <T = Navigation[]>(args: { where?: NavigationWhereInput, orderBy?: NavigationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationNodes: <T = NavigationNode[]>(args: { where?: NavigationNodeWhereInput, orderBy?: NavigationNodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pages: <T = Page[]>(args: { where?: PageWhereInput, orderBy?: PageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTypes: <T = PageType[]>(args: { where?: PageTypeWhereInput, orderBy?: PageTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websites: <T = Website[]>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    project: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagePlugin: <T = PagePlugin | null>(args: { where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigation: <T = Navigation | null>(args: { where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationNode: <T = NavigationNode | null>(args: { where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    page: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    website: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    projectsConnection: <T = ProjectConnection>(args: { where?: ProjectWhereInput, orderBy?: ProjectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslationsConnection: <T = PageTranslationConnection>(args: { where?: PageTranslationWhereInput, orderBy?: PageTranslationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagePluginsConnection: <T = PagePluginConnection>(args: { where?: PagePluginWhereInput, orderBy?: PagePluginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTasksConnection: <T = PageTaskConnection>(args: { where?: PageTaskWhereInput, orderBy?: PageTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChatsConnection: <T = PageChatConnection>(args: { where?: PageChatWhereInput, orderBy?: PageChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationsConnection: <T = NavigationConnection>(args: { where?: NavigationWhereInput, orderBy?: NavigationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationNodesConnection: <T = NavigationNodeConnection>(args: { where?: NavigationNodeWhereInput, orderBy?: NavigationNodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagesConnection: <T = PageConnection>(args: { where?: PageWhereInput, orderBy?: PageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTypesConnection: <T = PageTypeConnection>(args: { where?: PageTypeWhereInput, orderBy?: PageTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websitesConnection: <T = WebsiteConnection>(args: { where?: WebsiteWhereInput, orderBy?: WebsiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createProject: <T = Project>(args: { data: ProjectCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageTranslation: <T = PageTranslation>(args: { data: PageTranslationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPagePlugin: <T = PagePlugin>(args: { data: PagePluginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageTask: <T = PageTask>(args: { data: PageTaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageChat: <T = PageChat>(args: { data: PageChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNavigation: <T = Navigation>(args: { data: NavigationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNavigationNode: <T = NavigationNode>(args: { data: NavigationNodeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPage: <T = Page>(args: { data: PageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageType: <T = PageType>(args: { data: PageTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProject: <T = Project | null>(args: { data: ProjectUpdateInput, where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageTranslation: <T = PageTranslation | null>(args: { data: PageTranslationUpdateInput, where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePagePlugin: <T = PagePlugin | null>(args: { data: PagePluginUpdateInput, where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageTask: <T = PageTask | null>(args: { data: PageTaskUpdateInput, where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageChat: <T = PageChat | null>(args: { data: PageChatUpdateInput, where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNavigation: <T = Navigation | null>(args: { data: NavigationUpdateInput, where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNavigationNode: <T = NavigationNode | null>(args: { data: NavigationNodeUpdateInput, where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePage: <T = Page | null>(args: { data: PageUpdateInput, where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePageType: <T = PageType | null>(args: { data: PageTypeUpdateInput, where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateWebsite: <T = Website | null>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProject: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePagePlugin: <T = PagePlugin | null>(args: { where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNavigation: <T = Navigation | null>(args: { where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNavigationNode: <T = NavigationNode | null>(args: { where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePage: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteWebsite: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProject: <T = Project>(args: { where: ProjectWhereUniqueInput, create: ProjectCreateInput, update: ProjectUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTranslation: <T = PageTranslation>(args: { where: PageTranslationWhereUniqueInput, create: PageTranslationCreateInput, update: PageTranslationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPagePlugin: <T = PagePlugin>(args: { where: PagePluginWhereUniqueInput, create: PagePluginCreateInput, update: PagePluginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTask: <T = PageTask>(args: { where: PageTaskWhereUniqueInput, create: PageTaskCreateInput, update: PageTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageChat: <T = PageChat>(args: { where: PageChatWhereUniqueInput, create: PageChatCreateInput, update: PageChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNavigation: <T = Navigation>(args: { where: NavigationWhereUniqueInput, create: NavigationCreateInput, update: NavigationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNavigationNode: <T = NavigationNode>(args: { where: NavigationNodeWhereUniqueInput, create: NavigationNodeCreateInput, update: NavigationNodeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPage: <T = Page>(args: { where: PageWhereUniqueInput, create: PageCreateInput, update: PageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageType: <T = PageType>(args: { where: PageTypeWhereUniqueInput, create: PageTypeCreateInput, update: PageTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProjects: <T = BatchPayload>(args: { data: ProjectUpdateInput, where?: ProjectWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTranslations: <T = BatchPayload>(args: { data: PageTranslationUpdateInput, where?: PageTranslationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPagePlugins: <T = BatchPayload>(args: { data: PagePluginUpdateInput, where?: PagePluginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTasks: <T = BatchPayload>(args: { data: PageTaskUpdateInput, where?: PageTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageChats: <T = BatchPayload>(args: { data: PageChatUpdateInput, where?: PageChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNavigations: <T = BatchPayload>(args: { data: NavigationUpdateInput, where?: NavigationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNavigationNodes: <T = BatchPayload>(args: { data: NavigationNodeUpdateInput, where?: NavigationNodeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPages: <T = BatchPayload>(args: { data: PageUpdateInput, where?: PageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTypes: <T = BatchPayload>(args: { data: PageTypeUpdateInput, where?: PageTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateInput, where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateInput, where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProjects: <T = BatchPayload>(args: { where?: ProjectWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTranslations: <T = BatchPayload>(args: { where?: PageTranslationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPagePlugins: <T = BatchPayload>(args: { where?: PagePluginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTasks: <T = BatchPayload>(args: { where?: PageTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageChats: <T = BatchPayload>(args: { where?: PageChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNavigations: <T = BatchPayload>(args: { where?: NavigationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNavigationNodes: <T = BatchPayload>(args: { where?: NavigationNodeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPages: <T = BatchPayload>(args: { where?: PageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTypes: <T = BatchPayload>(args: { where?: PageTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWebsites: <T = BatchPayload>(args: { where?: WebsiteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    project: <T = ProjectSubscriptionPayload | null>(args: { where?: ProjectSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageTranslation: <T = PageTranslationSubscriptionPayload | null>(args: { where?: PageTranslationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pagePlugin: <T = PagePluginSubscriptionPayload | null>(args: { where?: PagePluginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageTask: <T = PageTaskSubscriptionPayload | null>(args: { where?: PageTaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageChat: <T = PageChatSubscriptionPayload | null>(args: { where?: PageChatSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    navigation: <T = NavigationSubscriptionPayload | null>(args: { where?: NavigationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    navigationNode: <T = NavigationNodeSubscriptionPayload | null>(args: { where?: NavigationNodeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    page: <T = PageSubscriptionPayload | null>(args: { where?: PageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pageType: <T = PageTypeSubscriptionPayload | null>(args: { where?: PageTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    website: <T = WebsiteSubscriptionPayload | null>(args: { where?: WebsiteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Project: (where?: ProjectWhereInput) => Promise<boolean>
  PageTranslation: (where?: PageTranslationWhereInput) => Promise<boolean>
  PagePlugin: (where?: PagePluginWhereInput) => Promise<boolean>
  PageTask: (where?: PageTaskWhereInput) => Promise<boolean>
  PageChat: (where?: PageChatWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Navigation: (where?: NavigationWhereInput) => Promise<boolean>
  NavigationNode: (where?: NavigationNodeWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Page: (where?: PageWhereInput) => Promise<boolean>
  PageType: (where?: PageTypeWhereInput) => Promise<boolean>
  Website: (where?: WebsiteWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateFile {
  count: Int!
}

type AggregateLanguage {
  count: Int!
}

type AggregateNavigation {
  count: Int!
}

type AggregateNavigationNode {
  count: Int!
}

type AggregatePage {
  count: Int!
}

type AggregatePageChat {
  count: Int!
}

type AggregatePagePlugin {
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

type AggregateTag {
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

type File implements Node {
  id: ID!
  hash: String!
  category: String
  filename: String!
  mimetype: String
  size: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  hash: String!
  category: String
  filename: String!
  mimetype: String
  size: Int
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  hash_ASC
  hash_DESC
  category_ASC
  category_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FilePreviousValues {
  id: ID!
  hash: String!
  category: String
  filename: String!
  mimetype: String
  size: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

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
  node: FileWhereInput
}

input FileUpdateInput {
  hash: String
  category: String
  filename: String
  mimetype: String
  size: Int
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
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
  hash: String

  """All values that are not equal to given value."""
  hash_not: String

  """All values that are contained in given list."""
  hash_in: [String!]

  """All values that are not contained in given list."""
  hash_not_in: [String!]

  """All values less than the given value."""
  hash_lt: String

  """All values less than or equal the given value."""
  hash_lte: String

  """All values greater than the given value."""
  hash_gt: String

  """All values greater than or equal the given value."""
  hash_gte: String

  """All values containing the given string."""
  hash_contains: String

  """All values not containing the given string."""
  hash_not_contains: String

  """All values starting with the given string."""
  hash_starts_with: String

  """All values not starting with the given string."""
  hash_not_starts_with: String

  """All values ending with the given string."""
  hash_ends_with: String

  """All values not ending with the given string."""
  hash_not_ends_with: String
  category: String

  """All values that are not equal to given value."""
  category_not: String

  """All values that are contained in given list."""
  category_in: [String!]

  """All values that are not contained in given list."""
  category_not_in: [String!]

  """All values less than the given value."""
  category_lt: String

  """All values less than or equal the given value."""
  category_lte: String

  """All values greater than the given value."""
  category_gt: String

  """All values greater than or equal the given value."""
  category_gte: String

  """All values containing the given string."""
  category_contains: String

  """All values not containing the given string."""
  category_not_contains: String

  """All values starting with the given string."""
  category_starts_with: String

  """All values not starting with the given string."""
  category_not_starts_with: String

  """All values ending with the given string."""
  category_ends_with: String

  """All values not ending with the given string."""
  category_not_ends_with: String
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  size: Int

  """All values that are not equal to given value."""
  size_not: Int

  """All values that are contained in given list."""
  size_in: [Int!]

  """All values that are not contained in given list."""
  size_not_in: [Int!]

  """All values less than the given value."""
  size_lt: Int

  """All values less than or equal the given value."""
  size_lte: Int

  """All values greater than the given value."""
  size_gt: Int

  """All values greater than or equal the given value."""
  size_gte: Int
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
}

input FileWhereUniqueInput {
  id: ID
  hash: String
}

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
  createPageTranslation(data: PageTranslationCreateInput!): PageTranslation!
  createPagePlugin(data: PagePluginCreateInput!): PagePlugin!
  createPageTask(data: PageTaskCreateInput!): PageTask!
  createPageChat(data: PageChatCreateInput!): PageChat!
  createFile(data: FileCreateInput!): File!
  createNavigation(data: NavigationCreateInput!): Navigation!
  createNavigationNode(data: NavigationNodeCreateInput!): NavigationNode!
  createTag(data: TagCreateInput!): Tag!
  createPage(data: PageCreateInput!): Page!
  createPageType(data: PageTypeCreateInput!): PageType!
  createWebsite(data: WebsiteCreateInput!): Website!
  createLanguage(data: LanguageCreateInput!): Language!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updatePageTranslation(data: PageTranslationUpdateInput!, where: PageTranslationWhereUniqueInput!): PageTranslation
  updatePagePlugin(data: PagePluginUpdateInput!, where: PagePluginWhereUniqueInput!): PagePlugin
  updatePageTask(data: PageTaskUpdateInput!, where: PageTaskWhereUniqueInput!): PageTask
  updatePageChat(data: PageChatUpdateInput!, where: PageChatWhereUniqueInput!): PageChat
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateNavigation(data: NavigationUpdateInput!, where: NavigationWhereUniqueInput!): Navigation
  updateNavigationNode(data: NavigationNodeUpdateInput!, where: NavigationNodeWhereUniqueInput!): NavigationNode
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updatePage(data: PageUpdateInput!, where: PageWhereUniqueInput!): Page
  updatePageType(data: PageTypeUpdateInput!, where: PageTypeWhereUniqueInput!): PageType
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deletePageTranslation(where: PageTranslationWhereUniqueInput!): PageTranslation
  deletePagePlugin(where: PagePluginWhereUniqueInput!): PagePlugin
  deletePageTask(where: PageTaskWhereUniqueInput!): PageTask
  deletePageChat(where: PageChatWhereUniqueInput!): PageChat
  deleteFile(where: FileWhereUniqueInput!): File
  deleteNavigation(where: NavigationWhereUniqueInput!): Navigation
  deleteNavigationNode(where: NavigationNodeWhereUniqueInput!): NavigationNode
  deleteTag(where: TagWhereUniqueInput!): Tag
  deletePage(where: PageWhereUniqueInput!): Page
  deletePageType(where: PageTypeWhereUniqueInput!): PageType
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  upsertPageTranslation(where: PageTranslationWhereUniqueInput!, create: PageTranslationCreateInput!, update: PageTranslationUpdateInput!): PageTranslation!
  upsertPagePlugin(where: PagePluginWhereUniqueInput!, create: PagePluginCreateInput!, update: PagePluginUpdateInput!): PagePlugin!
  upsertPageTask(where: PageTaskWhereUniqueInput!, create: PageTaskCreateInput!, update: PageTaskUpdateInput!): PageTask!
  upsertPageChat(where: PageChatWhereUniqueInput!, create: PageChatCreateInput!, update: PageChatUpdateInput!): PageChat!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertNavigation(where: NavigationWhereUniqueInput!, create: NavigationCreateInput!, update: NavigationUpdateInput!): Navigation!
  upsertNavigationNode(where: NavigationNodeWhereUniqueInput!, create: NavigationNodeCreateInput!, update: NavigationNodeUpdateInput!): NavigationNode!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertPage(where: PageWhereUniqueInput!, create: PageCreateInput!, update: PageUpdateInput!): Page!
  upsertPageType(where: PageTypeWhereUniqueInput!, create: PageTypeCreateInput!, update: PageTypeUpdateInput!): PageType!
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  updateManyProjects(data: ProjectUpdateInput!, where: ProjectWhereInput): BatchPayload!
  updateManyPageTranslations(data: PageTranslationUpdateInput!, where: PageTranslationWhereInput): BatchPayload!
  updateManyPagePlugins(data: PagePluginUpdateInput!, where: PagePluginWhereInput): BatchPayload!
  updateManyPageTasks(data: PageTaskUpdateInput!, where: PageTaskWhereInput): BatchPayload!
  updateManyPageChats(data: PageChatUpdateInput!, where: PageChatWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  updateManyNavigations(data: NavigationUpdateInput!, where: NavigationWhereInput): BatchPayload!
  updateManyNavigationNodes(data: NavigationNodeUpdateInput!, where: NavigationNodeWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  updateManyPages(data: PageUpdateInput!, where: PageWhereInput): BatchPayload!
  updateManyPageTypes(data: PageTypeUpdateInput!, where: PageTypeWhereInput): BatchPayload!
  updateManyWebsites(data: WebsiteUpdateInput!, where: WebsiteWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateInput!, where: LanguageWhereInput): BatchPayload!
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  deleteManyPageTranslations(where: PageTranslationWhereInput): BatchPayload!
  deleteManyPagePlugins(where: PagePluginWhereInput): BatchPayload!
  deleteManyPageTasks(where: PageTaskWhereInput): BatchPayload!
  deleteManyPageChats(where: PageChatWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyNavigations(where: NavigationWhereInput): BatchPayload!
  deleteManyNavigationNodes(where: NavigationNodeWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyPages(where: PageWhereInput): BatchPayload!
  deleteManyPageTypes(where: PageTypeWhereInput): BatchPayload!
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Navigation implements Node {
  id: ID!
  name: String!
  website(where: WebsiteWhereInput): Website!
  nodes(where: NavigationNodeWhereInput, orderBy: NavigationNodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NavigationNode!]
}

"""A connection to a list of items."""
type NavigationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NavigationEdge]!
  aggregate: AggregateNavigation!
}

input NavigationCreateInput {
  name: String!
  website: WebsiteCreateOneInput!
  nodes: NavigationNodeCreateManyWithoutNavigationInput
}

input NavigationCreateOneWithoutNodesInput {
  create: NavigationCreateWithoutNodesInput
  connect: NavigationWhereUniqueInput
}

input NavigationCreateWithoutNodesInput {
  name: String!
  website: WebsiteCreateOneInput!
}

"""An edge in a connection."""
type NavigationEdge {
  """The item at the end of the edge."""
  node: Navigation!

  """A cursor for use in pagination."""
  cursor: String!
}

type NavigationNode implements Node {
  id: ID!
  navigation(where: NavigationWhereInput): Navigation!
  page: ID!
  order: Int
  parent: ID
}

"""A connection to a list of items."""
type NavigationNodeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NavigationNodeEdge]!
  aggregate: AggregateNavigationNode!
}

input NavigationNodeCreateInput {
  page: ID!
  order: Int
  parent: ID
  navigation: NavigationCreateOneWithoutNodesInput!
}

input NavigationNodeCreateManyWithoutNavigationInput {
  create: [NavigationNodeCreateWithoutNavigationInput!]
  connect: [NavigationNodeWhereUniqueInput!]
}

input NavigationNodeCreateWithoutNavigationInput {
  page: ID!
  order: Int
  parent: ID
}

"""An edge in a connection."""
type NavigationNodeEdge {
  """The item at the end of the edge."""
  node: NavigationNode!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NavigationNodeOrderByInput {
  id_ASC
  id_DESC
  page_ASC
  page_DESC
  order_ASC
  order_DESC
  parent_ASC
  parent_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NavigationNodePreviousValues {
  id: ID!
  page: ID!
  order: Int
  parent: ID
}

type NavigationNodeSubscriptionPayload {
  mutation: MutationType!
  node: NavigationNode
  updatedFields: [String!]
  previousValues: NavigationNodePreviousValues
}

input NavigationNodeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NavigationNodeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NavigationNodeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NavigationNodeSubscriptionWhereInput!]

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
  node: NavigationNodeWhereInput
}

input NavigationNodeUpdateInput {
  page: ID
  order: Int
  parent: ID
  navigation: NavigationUpdateOneWithoutNodesInput
}

input NavigationNodeUpdateManyWithoutNavigationInput {
  create: [NavigationNodeCreateWithoutNavigationInput!]
  connect: [NavigationNodeWhereUniqueInput!]
  disconnect: [NavigationNodeWhereUniqueInput!]
  delete: [NavigationNodeWhereUniqueInput!]
  update: [NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput!]
  upsert: [NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput!]
}

input NavigationNodeUpdateWithoutNavigationDataInput {
  page: ID
  order: Int
  parent: ID
}

input NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput {
  where: NavigationNodeWhereUniqueInput!
  data: NavigationNodeUpdateWithoutNavigationDataInput!
}

input NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput {
  where: NavigationNodeWhereUniqueInput!
  update: NavigationNodeUpdateWithoutNavigationDataInput!
  create: NavigationNodeCreateWithoutNavigationInput!
}

input NavigationNodeWhereInput {
  """Logical AND on all given filters."""
  AND: [NavigationNodeWhereInput!]

  """Logical OR on all given filters."""
  OR: [NavigationNodeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NavigationNodeWhereInput!]
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
  page: ID

  """All values that are not equal to given value."""
  page_not: ID

  """All values that are contained in given list."""
  page_in: [ID!]

  """All values that are not contained in given list."""
  page_not_in: [ID!]

  """All values less than the given value."""
  page_lt: ID

  """All values less than or equal the given value."""
  page_lte: ID

  """All values greater than the given value."""
  page_gt: ID

  """All values greater than or equal the given value."""
  page_gte: ID

  """All values containing the given string."""
  page_contains: ID

  """All values not containing the given string."""
  page_not_contains: ID

  """All values starting with the given string."""
  page_starts_with: ID

  """All values not starting with the given string."""
  page_not_starts_with: ID

  """All values ending with the given string."""
  page_ends_with: ID

  """All values not ending with the given string."""
  page_not_ends_with: ID
  order: Int

  """All values that are not equal to given value."""
  order_not: Int

  """All values that are contained in given list."""
  order_in: [Int!]

  """All values that are not contained in given list."""
  order_not_in: [Int!]

  """All values less than the given value."""
  order_lt: Int

  """All values less than or equal the given value."""
  order_lte: Int

  """All values greater than the given value."""
  order_gt: Int

  """All values greater than or equal the given value."""
  order_gte: Int
  parent: ID

  """All values that are not equal to given value."""
  parent_not: ID

  """All values that are contained in given list."""
  parent_in: [ID!]

  """All values that are not contained in given list."""
  parent_not_in: [ID!]

  """All values less than the given value."""
  parent_lt: ID

  """All values less than or equal the given value."""
  parent_lte: ID

  """All values greater than the given value."""
  parent_gt: ID

  """All values greater than or equal the given value."""
  parent_gte: ID

  """All values containing the given string."""
  parent_contains: ID

  """All values not containing the given string."""
  parent_not_contains: ID

  """All values starting with the given string."""
  parent_starts_with: ID

  """All values not starting with the given string."""
  parent_not_starts_with: ID

  """All values ending with the given string."""
  parent_ends_with: ID

  """All values not ending with the given string."""
  parent_not_ends_with: ID
  navigation: NavigationWhereInput
}

input NavigationNodeWhereUniqueInput {
  id: ID
}

enum NavigationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NavigationPreviousValues {
  id: ID!
  name: String!
}

type NavigationSubscriptionPayload {
  mutation: MutationType!
  node: Navigation
  updatedFields: [String!]
  previousValues: NavigationPreviousValues
}

input NavigationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NavigationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NavigationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NavigationSubscriptionWhereInput!]

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
  node: NavigationWhereInput
}

input NavigationUpdateInput {
  name: String
  website: WebsiteUpdateOneInput
  nodes: NavigationNodeUpdateManyWithoutNavigationInput
}

input NavigationUpdateOneWithoutNodesInput {
  create: NavigationCreateWithoutNodesInput
  connect: NavigationWhereUniqueInput
  delete: Boolean
  update: NavigationUpdateWithoutNodesDataInput
  upsert: NavigationUpsertWithoutNodesInput
}

input NavigationUpdateWithoutNodesDataInput {
  name: String
  website: WebsiteUpdateOneInput
}

input NavigationUpsertWithoutNodesInput {
  update: NavigationUpdateWithoutNodesDataInput!
  create: NavigationCreateWithoutNodesInput!
}

input NavigationWhereInput {
  """Logical AND on all given filters."""
  AND: [NavigationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NavigationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NavigationWhereInput!]
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
  nodes_every: NavigationNodeWhereInput
  nodes_some: NavigationNodeWhereInput
  nodes_none: NavigationNodeWhereInput
}

input NavigationWhereUniqueInput {
  id: ID
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

type PagePlugin implements Node {
  id: ID!
  page(where: PageWhereInput): Page!
  language(where: LanguageWhereInput): Language!
  plugin: String!
  content: Json!
}

"""A connection to a list of items."""
type PagePluginConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PagePluginEdge]!
  aggregate: AggregatePagePlugin!
}

input PagePluginCreateInput {
  plugin: String!
  content: Json
  page: PageCreateOneInput!
  language: LanguageCreateOneInput!
}

"""An edge in a connection."""
type PagePluginEdge {
  """The item at the end of the edge."""
  node: PagePlugin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PagePluginOrderByInput {
  id_ASC
  id_DESC
  plugin_ASC
  plugin_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PagePluginPreviousValues {
  id: ID!
  plugin: String!
  content: Json!
}

type PagePluginSubscriptionPayload {
  mutation: MutationType!
  node: PagePlugin
  updatedFields: [String!]
  previousValues: PagePluginPreviousValues
}

input PagePluginSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PagePluginSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PagePluginSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PagePluginSubscriptionWhereInput!]

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
  node: PagePluginWhereInput
}

input PagePluginUpdateInput {
  plugin: String
  content: Json
  page: PageUpdateOneInput
  language: LanguageUpdateOneInput
}

input PagePluginWhereInput {
  """Logical AND on all given filters."""
  AND: [PagePluginWhereInput!]

  """Logical OR on all given filters."""
  OR: [PagePluginWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PagePluginWhereInput!]
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
  plugin: String

  """All values that are not equal to given value."""
  plugin_not: String

  """All values that are contained in given list."""
  plugin_in: [String!]

  """All values that are not contained in given list."""
  plugin_not_in: [String!]

  """All values less than the given value."""
  plugin_lt: String

  """All values less than or equal the given value."""
  plugin_lte: String

  """All values greater than the given value."""
  plugin_gt: String

  """All values greater than or equal the given value."""
  plugin_gte: String

  """All values containing the given string."""
  plugin_contains: String

  """All values not containing the given string."""
  plugin_not_contains: String

  """All values starting with the given string."""
  plugin_starts_with: String

  """All values not starting with the given string."""
  plugin_not_starts_with: String

  """All values ending with the given string."""
  plugin_ends_with: String

  """All values not ending with the given string."""
  plugin_not_ends_with: String
  page: PageWhereInput
  language: LanguageWhereInput
}

input PagePluginWhereUniqueInput {
  id: ID
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
  pageTranslations(where: PageTranslationWhereInput, orderBy: PageTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTranslation]!
  pagePlugins(where: PagePluginWhereInput, orderBy: PagePluginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PagePlugin]!
  pageTasks(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTask]!
  pageChats(where: PageChatWhereInput, orderBy: PageChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageChat]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  navigations(where: NavigationWhereInput, orderBy: NavigationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Navigation]!
  navigationNodes(where: NavigationNodeWhereInput, orderBy: NavigationNodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NavigationNode]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page]!
  pageTypes(where: PageTypeWhereInput, orderBy: PageTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageType]!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  project(where: ProjectWhereUniqueInput!): Project
  pageTranslation(where: PageTranslationWhereUniqueInput!): PageTranslation
  pagePlugin(where: PagePluginWhereUniqueInput!): PagePlugin
  pageTask(where: PageTaskWhereUniqueInput!): PageTask
  pageChat(where: PageChatWhereUniqueInput!): PageChat
  file(where: FileWhereUniqueInput!): File
  navigation(where: NavigationWhereUniqueInput!): Navigation
  navigationNode(where: NavigationNodeWhereUniqueInput!): NavigationNode
  tag(where: TagWhereUniqueInput!): Tag
  page(where: PageWhereUniqueInput!): Page
  pageType(where: PageTypeWhereUniqueInput!): PageType
  website(where: WebsiteWhereUniqueInput!): Website
  language(where: LanguageWhereUniqueInput!): Language
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  pageTranslationsConnection(where: PageTranslationWhereInput, orderBy: PageTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTranslationConnection!
  pagePluginsConnection(where: PagePluginWhereInput, orderBy: PagePluginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PagePluginConnection!
  pageTasksConnection(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTaskConnection!
  pageChatsConnection(where: PageChatWhereInput, orderBy: PageChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageChatConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  navigationsConnection(where: NavigationWhereInput, orderBy: NavigationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NavigationConnection!
  navigationNodesConnection(where: NavigationNodeWhereInput, orderBy: NavigationNodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NavigationNodeConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  pagesConnection(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageConnection!
  pageTypesConnection(where: PageTypeWhereInput, orderBy: PageTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTypeConnection!
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  pageTranslation(where: PageTranslationSubscriptionWhereInput): PageTranslationSubscriptionPayload
  pagePlugin(where: PagePluginSubscriptionWhereInput): PagePluginSubscriptionPayload
  pageTask(where: PageTaskSubscriptionWhereInput): PageTaskSubscriptionPayload
  pageChat(where: PageChatSubscriptionWhereInput): PageChatSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  navigation(where: NavigationSubscriptionWhereInput): NavigationSubscriptionPayload
  navigationNode(where: NavigationNodeSubscriptionWhereInput): NavigationNodeSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  page(where: PageSubscriptionWhereInput): PageSubscriptionPayload
  pageType(where: PageTypeSubscriptionWhereInput): PageTypeSubscriptionPayload
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
}

type Tag implements Node {
  id: ID!
  website(where: WebsiteWhereInput): Website!
  name: String!
  displayInNavigation: Boolean
  plugins: [String!]!
  color: String!
}

"""A connection to a list of items."""
type TagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  displayInNavigation: Boolean
  color: String!
  plugins: TagCreatepluginsInput
  website: WebsiteCreateOneInput!
}

input TagCreatepluginsInput {
  set: [String!]
}

"""An edge in a connection."""
type TagEdge {
  """The item at the end of the edge."""
  node: Tag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  displayInNavigation_ASC
  displayInNavigation_DESC
  color_ASC
  color_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
  displayInNavigation: Boolean
  plugins: [String!]!
  color: String!
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagSubscriptionWhereInput!]

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
  node: TagWhereInput
}

input TagUpdateInput {
  name: String
  displayInNavigation: Boolean
  color: String
  plugins: TagUpdatepluginsInput
  website: WebsiteUpdateOneInput
}

input TagUpdatepluginsInput {
  set: [String!]
}

input TagWhereInput {
  """Logical AND on all given filters."""
  AND: [TagWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagWhereInput!]
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
  displayInNavigation: Boolean

  """All values that are not equal to given value."""
  displayInNavigation_not: Boolean
  color: String

  """All values that are not equal to given value."""
  color_not: String

  """All values that are contained in given list."""
  color_in: [String!]

  """All values that are not contained in given list."""
  color_not_in: [String!]

  """All values less than the given value."""
  color_lt: String

  """All values less than or equal the given value."""
  color_lte: String

  """All values greater than the given value."""
  color_gt: String

  """All values greater than or equal the given value."""
  color_gte: String

  """All values containing the given string."""
  color_contains: String

  """All values not containing the given string."""
  color_not_contains: String

  """All values starting with the given string."""
  color_starts_with: String

  """All values not starting with the given string."""
  color_not_starts_with: String

  """All values ending with the given string."""
  color_ends_with: String

  """All values not ending with the given string."""
  color_not_ends_with: String
  website: WebsiteWhereInput
}

input TagWhereUniqueInput {
  id: ID
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

input WebsiteCreateOneInput {
  create: WebsiteCreateInput
  connect: WebsiteWhereUniqueInput
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

input WebsiteUpdateDataInput {
  title: String
  urlMask: String
  settings: Json
  project: ProjectUpdateOneWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneInput
  pageTypes: PageTypeUpdateManyWithoutWebsiteInput
  pages: PageUpdateManyWithoutWebsiteInput
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

input WebsiteUpdateOneInput {
  create: WebsiteCreateInput
  connect: WebsiteWhereUniqueInput
  delete: Boolean
  update: WebsiteUpdateDataInput
  upsert: WebsiteUpsertNestedInput
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

input WebsiteUpsertNestedInput {
  update: WebsiteUpdateDataInput!
  create: WebsiteCreateInput!
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

export type PageStatus =   'DRAFT' |
  'PENDING' |
  'PUBLISHED'

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

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'displayInNavigation_ASC' |
  'displayInNavigation_DESC' |
  'color_ASC' |
  'color_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type NavigationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type PageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'hash_ASC' |
  'hash_DESC' |
  'category_ASC' |
  'category_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'size_ASC' |
  'size_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type NavigationNodeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'page_ASC' |
  'page_DESC' |
  'order_ASC' |
  'order_DESC' |
  'parent_ASC' |
  'parent_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PageChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PagePluginOrderByInput =   'id_ASC' |
  'id_DESC' |
  'plugin_ASC' |
  'plugin_DESC' |
  'content_ASC' |
  'content_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface PageChatCreateInput {
  text: String
  page: PageCreateOneWithoutChatsInput
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

export interface ProjectCreateInput {
  name: String
  defaultName: String
  settings?: Json
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
  websites?: WebsiteCreateManyWithoutProjectInput
}

export interface PageTranslationUpdateWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput
  data: PageTranslationUpdateWithoutPageDataInput
}

export interface LanguageCreateManyInput {
  create?: LanguageCreateInput[] | LanguageCreateInput
  connect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
}

export interface NavigationNodeCreateInput {
  page: ID_Input
  order?: Int
  parent?: ID_Input
  navigation: NavigationCreateOneWithoutNodesInput
}

export interface LanguageCreateInput {
  code: String
  name: String
  englishName: String
  isDefault?: Boolean
  isEnabled?: Boolean
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

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
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

export interface WebsiteCreateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
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

export interface WebsiteCreateWithoutProjectInput {
  title: String
  urlMask: String
  settings?: Json
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
  pageTypes?: PageTypeCreateManyWithoutWebsiteInput
  pages?: PageCreateManyWithoutWebsiteInput
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

export interface PageTypeCreateManyWithoutWebsiteInput {
  create?: PageTypeCreateWithoutWebsiteInput[] | PageTypeCreateWithoutWebsiteInput
  connect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface PageTypeCreateWithoutWebsiteInput {
  name: String
  content?: Json
  plugins?: PageTypeCreatepluginsInput
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

export interface PageTypeCreatepluginsInput {
  set?: String[] | String
}

export interface PagePluginWhereInput {
  AND?: PagePluginWhereInput[] | PagePluginWhereInput
  OR?: PagePluginWhereInput[] | PagePluginWhereInput
  NOT?: PagePluginWhereInput[] | PagePluginWhereInput
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
  plugin?: String
  plugin_not?: String
  plugin_in?: String[] | String
  plugin_not_in?: String[] | String
  plugin_lt?: String
  plugin_lte?: String
  plugin_gt?: String
  plugin_gte?: String
  plugin_contains?: String
  plugin_not_contains?: String
  plugin_starts_with?: String
  plugin_not_starts_with?: String
  plugin_ends_with?: String
  plugin_not_ends_with?: String
  page?: PageWhereInput
  language?: LanguageWhereInput
}

export interface PageCreateManyWithoutWebsiteInput {
  create?: PageCreateWithoutWebsiteInput[] | PageCreateWithoutWebsiteInput
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput
}

export interface PagePluginSubscriptionWhereInput {
  AND?: PagePluginSubscriptionWhereInput[] | PagePluginSubscriptionWhereInput
  OR?: PagePluginSubscriptionWhereInput[] | PagePluginSubscriptionWhereInput
  NOT?: PagePluginSubscriptionWhereInput[] | PagePluginSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PagePluginWhereInput
}

export interface PageCreateWithoutWebsiteInput {
  parent?: PageCreateOneInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput
  chats?: PageChatCreateManyWithoutPageInput
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

export interface PageCreateOneInput {
  create?: PageCreateInput
  connect?: PageWhereUniqueInput
}

export interface NavigationWhereInput {
  AND?: NavigationWhereInput[] | NavigationWhereInput
  OR?: NavigationWhereInput[] | NavigationWhereInput
  NOT?: NavigationWhereInput[] | NavigationWhereInput
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
  nodes_every?: NavigationNodeWhereInput
  nodes_some?: NavigationNodeWhereInput
  nodes_none?: NavigationNodeWhereInput
}

export interface PageCreateInput {
  parent?: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput
  chats?: PageChatCreateManyWithoutPageInput
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

export interface WebsiteCreateOneWithoutPagesInput {
  create?: WebsiteCreateWithoutPagesInput
  connect?: WebsiteWhereUniqueInput
}

export interface LanguageUpdateInput {
  code?: String
  name?: String
  englishName?: String
  isDefault?: Boolean
  isEnabled?: Boolean
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

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput
  OR?: TagWhereInput[] | TagWhereInput
  NOT?: TagWhereInput[] | TagWhereInput
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
  displayInNavigation?: Boolean
  displayInNavigation_not?: Boolean
  color?: String
  color_not?: String
  color_in?: String[] | String
  color_not_in?: String[] | String
  color_lt?: String
  color_lte?: String
  color_gt?: String
  color_gte?: String
  color_contains?: String
  color_not_contains?: String
  color_starts_with?: String
  color_not_starts_with?: String
  color_ends_with?: String
  color_not_ends_with?: String
  website?: WebsiteWhereInput
}

export interface ProjectCreateOneWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput
  connect?: ProjectWhereUniqueInput
}

export interface PageTypeUpdateInput {
  name?: String
  content?: Json
  plugins?: PageTypeUpdatepluginsInput
  website?: WebsiteUpdateOneWithoutPageTypesInput
}

export interface ProjectCreateWithoutWebsitesInput {
  name: String
  defaultName: String
  settings?: Json
  languages?: LanguageCreateManyInput
  defaultLanguage: LanguageCreateOneInput
}

export interface PageTranslationWhereUniqueInput {
  id?: ID_Input
}

export interface PageTypeCreateOneInput {
  create?: PageTypeCreateInput
  connect?: PageTypeWhereUniqueInput
}

export interface PageTaskWhereUniqueInput {
  id?: ID_Input
}

export interface PageTypeCreateInput {
  name: String
  content?: Json
  plugins?: PageTypeCreatepluginsInput
  website: WebsiteCreateOneWithoutPageTypesInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  hash?: String
}

export interface WebsiteCreateOneWithoutPageTypesInput {
  create?: WebsiteCreateWithoutPageTypesInput
  connect?: WebsiteWhereUniqueInput
}

export interface NavigationNodeWhereUniqueInput {
  id?: ID_Input
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

export interface PageWhereUniqueInput {
  id?: ID_Input
}

export interface PageTranslationCreateManyWithoutPageInput {
  create?: PageTranslationCreateWithoutPageInput[] | PageTranslationCreateWithoutPageInput
  connect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput
}

export interface WebsiteWhereUniqueInput {
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

export interface PageUpdateInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
  chats?: PageChatUpdateManyWithoutPageInput
}

export interface PageTaskCreateManyWithoutPageTranslationInput {
  create?: PageTaskCreateWithoutPageTranslationInput[] | PageTaskCreateWithoutPageTranslationInput
  connect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
}

export interface TagUpdateInput {
  name?: String
  displayInNavigation?: Boolean
  color?: String
  plugins?: TagUpdatepluginsInput
  website?: WebsiteUpdateOneInput
}

export interface PageTaskCreateWithoutPageTranslationInput {
  done?: Boolean
  name: String
  description: String
}

export interface NavigationUpdateWithoutNodesDataInput {
  name?: String
  website?: WebsiteUpdateOneInput
}

export interface PageChatCreateManyWithoutPageInput {
  create?: PageChatCreateWithoutPageInput[] | PageChatCreateWithoutPageInput
  connect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
}

export interface NavigationNodeUpdateInput {
  page?: ID_Input
  order?: Int
  parent?: ID_Input
  navigation?: NavigationUpdateOneWithoutNodesInput
}

export interface PageChatCreateWithoutPageInput {
  text: String
}

export interface NavigationNodeUpdateWithoutNavigationDataInput {
  page?: ID_Input
  order?: Int
  parent?: ID_Input
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

export interface NavigationNodeUpdateManyWithoutNavigationInput {
  create?: NavigationNodeCreateWithoutNavigationInput[] | NavigationNodeCreateWithoutNavigationInput
  connect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput
  disconnect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput
  delete?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput
  update?: NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput[] | NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput
  upsert?: NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput[] | NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput
}

export interface PageCreateOneWithoutTranslationsInput {
  create?: PageCreateWithoutTranslationsInput
  connect?: PageWhereUniqueInput
}

export interface WebsiteUpdateDataInput {
  title?: String
  urlMask?: String
  settings?: Json
  project?: ProjectUpdateOneWithoutWebsitesInput
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput
  pages?: PageUpdateManyWithoutWebsiteInput
}

export interface PageCreateWithoutTranslationsInput {
  parent?: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  chats?: PageChatCreateManyWithoutPageInput
}

export interface NavigationUpdateInput {
  name?: String
  website?: WebsiteUpdateOneInput
  nodes?: NavigationNodeUpdateManyWithoutNavigationInput
}

export interface PagePluginCreateInput {
  plugin: String
  content?: Json
  page: PageCreateOneInput
  language: LanguageCreateOneInput
}

export interface PageUpsertWithoutChatsInput {
  update: PageUpdateWithoutChatsDataInput
  create: PageCreateWithoutChatsInput
}

export interface PageTaskCreateInput {
  done?: Boolean
  name: String
  description: String
  pageTranslation: PageTranslationCreateOneWithoutTasksInput
}

export interface PageUpdateOneWithoutChatsInput {
  create?: PageCreateWithoutChatsInput
  connect?: PageWhereUniqueInput
  delete?: Boolean
  update?: PageUpdateWithoutChatsDataInput
  upsert?: PageUpsertWithoutChatsInput
}

export interface PageTranslationCreateOneWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput
  connect?: PageTranslationWhereUniqueInput
}

export interface PageTranslationUpsertWithoutTasksInput {
  update: PageTranslationUpdateWithoutTasksDataInput
  create: PageTranslationCreateWithoutTasksInput
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

export interface PageTranslationUpdateOneWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput
  connect?: PageTranslationWhereUniqueInput
  delete?: Boolean
  update?: PageTranslationUpdateWithoutTasksDataInput
  upsert?: PageTranslationUpsertWithoutTasksInput
}

export interface PageTaskUpdateManyWithoutPageTranslationInput {
  create?: PageTaskCreateWithoutPageTranslationInput[] | PageTaskCreateWithoutPageTranslationInput
  connect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
  disconnect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
  delete?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput
  update?: PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput
  upsert?: PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput
}

export interface PagePluginUpdateInput {
  plugin?: String
  content?: Json
  page?: PageUpdateOneInput
  language?: LanguageUpdateOneInput
}

export interface PageCreateOneWithoutChatsInput {
  create?: PageCreateWithoutChatsInput
  connect?: PageWhereUniqueInput
}

export interface PageUpdateWithoutTranslationsDataInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  chats?: PageChatUpdateManyWithoutPageInput
}

export interface PageCreateWithoutChatsInput {
  parent?: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput
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

export interface FileCreateInput {
  hash: String
  category?: String
  filename: String
  mimetype?: String
  size?: Int
}

export interface PageUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput
  update: PageUpdateWithoutWebsiteDataInput
  create: PageCreateWithoutWebsiteInput
}

export interface NavigationCreateInput {
  name: String
  website: WebsiteCreateOneInput
  nodes?: NavigationNodeCreateManyWithoutNavigationInput
}

export interface PageChatUpsertWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput
  update: PageChatUpdateWithoutPageDataInput
  create: PageChatCreateWithoutPageInput
}

export interface WebsiteCreateOneInput {
  create?: WebsiteCreateInput
  connect?: WebsiteWhereUniqueInput
}

export interface PageChatUpdateWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput
  data: PageChatUpdateWithoutPageDataInput
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

export interface PageTranslationUpsertWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput
  update: PageTranslationUpdateWithoutPageDataInput
  create: PageTranslationCreateWithoutPageInput
}

export interface NavigationNodeCreateManyWithoutNavigationInput {
  create?: NavigationNodeCreateWithoutNavigationInput[] | NavigationNodeCreateWithoutNavigationInput
  connect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput
}

export interface PageTaskUpdateWithoutPageTranslationDataInput {
  done?: Boolean
  name?: String
  description?: String
}

export interface NavigationNodeCreateWithoutNavigationInput {
  page: ID_Input
  order?: Int
  parent?: ID_Input
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

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TagWhereInput
}

export interface NavigationCreateOneWithoutNodesInput {
  create?: NavigationCreateWithoutNodesInput
  connect?: NavigationWhereUniqueInput
}

export interface NavigationSubscriptionWhereInput {
  AND?: NavigationSubscriptionWhereInput[] | NavigationSubscriptionWhereInput
  OR?: NavigationSubscriptionWhereInput[] | NavigationSubscriptionWhereInput
  NOT?: NavigationSubscriptionWhereInput[] | NavigationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NavigationWhereInput
}

export interface NavigationCreateWithoutNodesInput {
  name: String
  website: WebsiteCreateOneInput
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

export interface TagCreateInput {
  name: String
  displayInNavigation?: Boolean
  color: String
  plugins?: TagCreatepluginsInput
  website: WebsiteCreateOneInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
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
  hash?: String
  hash_not?: String
  hash_in?: String[] | String
  hash_not_in?: String[] | String
  hash_lt?: String
  hash_lte?: String
  hash_gt?: String
  hash_gte?: String
  hash_contains?: String
  hash_not_contains?: String
  hash_starts_with?: String
  hash_not_starts_with?: String
  hash_ends_with?: String
  hash_not_ends_with?: String
  category?: String
  category_not?: String
  category_in?: String[] | String
  category_not_in?: String[] | String
  category_lt?: String
  category_lte?: String
  category_gt?: String
  category_gte?: String
  category_contains?: String
  category_not_contains?: String
  category_starts_with?: String
  category_not_starts_with?: String
  category_ends_with?: String
  category_not_ends_with?: String
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  size?: Int
  size_not?: Int
  size_in?: Int[] | Int
  size_not_in?: Int[] | Int
  size_lt?: Int
  size_lte?: Int
  size_gt?: Int
  size_gte?: Int
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
}

export interface TagCreatepluginsInput {
  set?: String[] | String
}

export interface NavigationNodeWhereInput {
  AND?: NavigationNodeWhereInput[] | NavigationNodeWhereInput
  OR?: NavigationNodeWhereInput[] | NavigationNodeWhereInput
  NOT?: NavigationNodeWhereInput[] | NavigationNodeWhereInput
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
  page?: ID_Input
  page_not?: ID_Input
  page_in?: ID_Input[] | ID_Input
  page_not_in?: ID_Input[] | ID_Input
  page_lt?: ID_Input
  page_lte?: ID_Input
  page_gt?: ID_Input
  page_gte?: ID_Input
  page_contains?: ID_Input
  page_not_contains?: ID_Input
  page_starts_with?: ID_Input
  page_not_starts_with?: ID_Input
  page_ends_with?: ID_Input
  page_not_ends_with?: ID_Input
  order?: Int
  order_not?: Int
  order_in?: Int[] | Int
  order_not_in?: Int[] | Int
  order_lt?: Int
  order_lte?: Int
  order_gt?: Int
  order_gte?: Int
  parent?: ID_Input
  parent_not?: ID_Input
  parent_in?: ID_Input[] | ID_Input
  parent_not_in?: ID_Input[] | ID_Input
  parent_lt?: ID_Input
  parent_lte?: ID_Input
  parent_gt?: ID_Input
  parent_gte?: ID_Input
  parent_contains?: ID_Input
  parent_not_contains?: ID_Input
  parent_starts_with?: ID_Input
  parent_not_starts_with?: ID_Input
  parent_ends_with?: ID_Input
  parent_not_ends_with?: ID_Input
  navigation?: NavigationWhereInput
}

export interface ProjectUpdateInput {
  name?: String
  defaultName?: String
  settings?: Json
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
  websites?: WebsiteUpdateManyWithoutProjectInput
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

export interface LanguageUpdateManyInput {
  create?: LanguageCreateInput[] | LanguageCreateInput
  connect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
  disconnect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
  delete?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput
  update?: LanguageUpdateWithWhereUniqueNestedInput[] | LanguageUpdateWithWhereUniqueNestedInput
  upsert?: LanguageUpsertWithWhereUniqueNestedInput[] | LanguageUpsertWithWhereUniqueNestedInput
}

export interface ProjectWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpdateWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput
  data: LanguageUpdateDataInput
}

export interface PageChatWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpdateDataInput {
  code?: String
  name?: String
  englishName?: String
  isDefault?: Boolean
  isEnabled?: Boolean
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpsertWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput
  connect?: LanguageWhereUniqueInput
  delete?: Boolean
  update?: LanguageUpdateDataInput
  upsert?: LanguageUpsertNestedInput
}

export interface NavigationUpsertWithoutNodesInput {
  update: NavigationUpdateWithoutNodesDataInput
  create: NavigationCreateWithoutNodesInput
}

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput {
  where: NavigationNodeWhereUniqueInput
  update: NavigationNodeUpdateWithoutNavigationDataInput
  create: NavigationNodeCreateWithoutNavigationInput
}

export interface WebsiteUpdateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput
  update?: WebsiteUpdateWithWhereUniqueWithoutProjectInput[] | WebsiteUpdateWithWhereUniqueWithoutProjectInput
  upsert?: WebsiteUpsertWithWhereUniqueWithoutProjectInput[] | WebsiteUpsertWithWhereUniqueWithoutProjectInput
}

export interface WebsiteUpsertNestedInput {
  update: WebsiteUpdateDataInput
  create: WebsiteCreateInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutProjectDataInput
}

export interface FileUpdateInput {
  hash?: String
  category?: String
  filename?: String
  mimetype?: String
  size?: Int
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

export interface PageChatUpdateInput {
  text?: String
  page?: PageUpdateOneWithoutChatsInput
}

export interface PageTypeUpdateManyWithoutWebsiteInput {
  create?: PageTypeCreateWithoutWebsiteInput[] | PageTypeCreateWithoutWebsiteInput
  connect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
  disconnect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
  delete?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput
  update?: PageTypeUpdateWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpdateWithWhereUniqueWithoutWebsiteInput
  upsert?: PageTypeUpsertWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpsertWithWhereUniqueWithoutWebsiteInput
}

export interface PageTaskUpdateInput {
  done?: Boolean
  name?: String
  description?: String
  pageTranslation?: PageTranslationUpdateOneWithoutTasksInput
}

export interface PageTypeUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput
  data: PageTypeUpdateWithoutWebsiteDataInput
}

export interface PageUpdateOneWithoutTranslationsInput {
  create?: PageCreateWithoutTranslationsInput
  connect?: PageWhereUniqueInput
  delete?: Boolean
  update?: PageUpdateWithoutTranslationsDataInput
  upsert?: PageUpsertWithoutTranslationsInput
}

export interface PageTypeUpdateWithoutWebsiteDataInput {
  name?: String
  content?: Json
  plugins?: PageTypeUpdatepluginsInput
}

export interface PageUpsertNestedInput {
  update: PageUpdateDataInput
  create: PageCreateInput
}

export interface PageTypeUpdatepluginsInput {
  set?: String[] | String
}

export interface PageChatUpdateManyWithoutPageInput {
  create?: PageChatCreateWithoutPageInput[] | PageChatCreateWithoutPageInput
  connect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
  disconnect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
  delete?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput
  update?: PageChatUpdateWithWhereUniqueWithoutPageInput[] | PageChatUpdateWithWhereUniqueWithoutPageInput
  upsert?: PageChatUpsertWithWhereUniqueWithoutPageInput[] | PageChatUpsertWithWhereUniqueWithoutPageInput
}

export interface PageTypeUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput
  update: PageTypeUpdateWithoutWebsiteDataInput
  create: PageTypeCreateWithoutWebsiteInput
}

export interface PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput
  data: PageTaskUpdateWithoutPageTranslationDataInput
}

export interface PageUpdateManyWithoutWebsiteInput {
  create?: PageCreateWithoutWebsiteInput[] | PageCreateWithoutWebsiteInput
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput
  update?: PageUpdateWithWhereUniqueWithoutWebsiteInput[] | PageUpdateWithWhereUniqueWithoutWebsiteInput
  upsert?: PageUpsertWithWhereUniqueWithoutWebsiteInput[] | PageUpsertWithWhereUniqueWithoutWebsiteInput
}

export interface NavigationNodeSubscriptionWhereInput {
  AND?: NavigationNodeSubscriptionWhereInput[] | NavigationNodeSubscriptionWhereInput
  OR?: NavigationNodeSubscriptionWhereInput[] | NavigationNodeSubscriptionWhereInput
  NOT?: NavigationNodeSubscriptionWhereInput[] | NavigationNodeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NavigationNodeWhereInput
}

export interface PageUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput
  data: PageUpdateWithoutWebsiteDataInput
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

export interface PageUpdateWithoutWebsiteDataInput {
  parent?: PageUpdateOneInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
  chats?: PageChatUpdateManyWithoutPageInput
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

export interface PageUpdateOneInput {
  create?: PageCreateInput
  connect?: PageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PageUpdateDataInput
  upsert?: PageUpsertNestedInput
}

export interface PagePluginWhereUniqueInput {
  id?: ID_Input
}

export interface PageUpdateDataInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
  chats?: PageChatUpdateManyWithoutPageInput
}

export interface PageTypeWhereUniqueInput {
  id?: ID_Input
}

export interface WebsiteUpdateOneWithoutPagesInput {
  create?: WebsiteCreateWithoutPagesInput
  connect?: WebsiteWhereUniqueInput
  delete?: Boolean
  update?: WebsiteUpdateWithoutPagesDataInput
  upsert?: WebsiteUpsertWithoutPagesInput
}

export interface NavigationUpdateOneWithoutNodesInput {
  create?: NavigationCreateWithoutNodesInput
  connect?: NavigationWhereUniqueInput
  delete?: Boolean
  update?: NavigationUpdateWithoutNodesDataInput
  upsert?: NavigationUpsertWithoutNodesInput
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

export interface WebsiteUpdateOneInput {
  create?: WebsiteCreateInput
  connect?: WebsiteWhereUniqueInput
  delete?: Boolean
  update?: WebsiteUpdateDataInput
  upsert?: WebsiteUpsertNestedInput
}

export interface ProjectUpdateOneWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput
  connect?: ProjectWhereUniqueInput
  delete?: Boolean
  update?: ProjectUpdateWithoutWebsitesDataInput
  upsert?: ProjectUpsertWithoutWebsitesInput
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

export interface ProjectUpdateWithoutWebsitesDataInput {
  name?: String
  defaultName?: String
  settings?: Json
  languages?: LanguageUpdateManyInput
  defaultLanguage?: LanguageUpdateOneInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutProjectDataInput
  create: WebsiteCreateWithoutProjectInput
}

export interface ProjectUpsertWithoutWebsitesInput {
  update: ProjectUpdateWithoutWebsitesDataInput
  create: ProjectCreateWithoutWebsitesInput
}

export interface PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput
  update: PageTaskUpdateWithoutPageTranslationDataInput
  create: PageTaskCreateWithoutPageTranslationInput
}

export interface WebsiteUpsertWithoutPagesInput {
  update: WebsiteUpdateWithoutPagesDataInput
  create: WebsiteCreateWithoutPagesInput
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

export interface TagUpdatepluginsInput {
  set?: String[] | String
}

export interface WebsiteUpdateOneWithoutPageTypesInput {
  create?: WebsiteCreateWithoutPageTypesInput
  connect?: WebsiteWhereUniqueInput
  delete?: Boolean
  update?: WebsiteUpdateWithoutPageTypesDataInput
  upsert?: WebsiteUpsertWithoutPageTypesInput
}

export interface PageUpdateWithoutChatsDataInput {
  parent?: PageUpdateOneInput
  website?: WebsiteUpdateOneWithoutPagesInput
  type?: PageTypeUpdateOneInput
  translations?: PageTranslationUpdateManyWithoutPageInput
}

export interface PageChatUpdateWithoutPageDataInput {
  text?: String
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

export interface PageUpsertWithoutTranslationsInput {
  update: PageUpdateWithoutTranslationsDataInput
  create: PageCreateWithoutTranslationsInput
}

export interface NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput {
  where: NavigationNodeWhereUniqueInput
  data: NavigationNodeUpdateWithoutNavigationDataInput
}

export interface NavigationWhereUniqueInput {
  id?: ID_Input
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

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface NavigationNode extends Node {
  id: ID_Output
  navigation: Navigation
  page: ID_Output
  order?: Int
  parent?: ID_Output
}

export interface LanguagePreviousValues {
  id: ID_Output
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

export interface Language extends Node {
  id: ID_Output
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

export interface AggregateLanguage {
  count: Int
}

export interface BatchPayload {
  count: Long
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

export interface PageTypePreviousValues {
  id: ID_Output
  name: String
  content: Json
  plugins: String[]
}

export interface AggregateWebsite {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface WebsiteEdge {
  node: Website
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface WebsiteConnection {
  pageInfo: PageInfo
  edges: WebsiteEdge[]
  aggregate: AggregateWebsite
}

/*
 * An edge in a connection.

 */
export interface PageTypeEdge {
  node: PageType
  cursor: String
}

export interface Navigation extends Node {
  id: ID_Output
  name: String
  website: Website
  nodes?: NavigationNode[]
}

export interface AggregatePage {
  count: Int
}

export interface WebsitePreviousValues {
  id: ID_Output
  title: String
  urlMask: String
  settings: Json
}

/*
 * A connection to a list of items.

 */
export interface PageConnection {
  pageInfo: PageInfo
  edges: PageEdge[]
  aggregate: AggregatePage
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
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface ProjectPreviousValues {
  id: ID_Output
  name: String
  defaultName: String
  settings: Json
}

export interface AggregateNavigationNode {
  count: Int
}

export interface File extends Node {
  id: ID_Output
  hash: String
  category?: String
  filename: String
  mimetype?: String
  size?: Int
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface NavigationNodeConnection {
  pageInfo: PageInfo
  edges: NavigationNodeEdge[]
  aggregate: AggregateNavigationNode
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
export interface NavigationEdge {
  node: Navigation
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

export interface AggregateFile {
  count: Int
}

export interface PagePlugin extends Node {
  id: ID_Output
  page: Page
  language: Language
  plugin: String
  content: Json
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface PagePluginSubscriptionPayload {
  mutation: MutationType
  node?: PagePlugin
  updatedFields?: String[]
  previousValues?: PagePluginPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PageChatEdge {
  node: PageChat
  cursor: String
}

export interface PagePluginPreviousValues {
  id: ID_Output
  plugin: String
  content: Json
}

export interface AggregatePageTask {
  count: Int
}

export interface PageChat extends Node {
  id: ID_Output
  page: Page
  text: String
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PageTaskConnection {
  pageInfo: PageInfo
  edges: PageTaskEdge[]
  aggregate: AggregatePageTask
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
export interface PagePluginEdge {
  node: PagePlugin
  cursor: String
}

export interface PageTaskPreviousValues {
  id: ID_Output
  done: Boolean
  name: String
  description: String
  updatedAt: DateTime
}

export interface AggregatePageTranslation {
  count: Int
}

export interface PageTask extends Node {
  id: ID_Output
  pageTranslation: PageTranslation
  done: Boolean
  name: String
  description: String
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PageTranslationConnection {
  pageInfo: PageInfo
  edges: PageTranslationEdge[]
  aggregate: AggregatePageTranslation
}

export interface PageChatSubscriptionPayload {
  mutation: MutationType
  node?: PageChat
  updatedFields?: String[]
  previousValues?: PageChatPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ProjectEdge {
  node: Project
  cursor: String
}

export interface PageChatPreviousValues {
  id: ID_Output
  text: String
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ProjectConnection {
  pageInfo: PageInfo
  edges: ProjectEdge[]
  aggregate: AggregateProject
}

export interface WebsiteSubscriptionPayload {
  mutation: MutationType
  node?: Website
  updatedFields?: String[]
  previousValues?: WebsitePreviousValues
}

export interface LanguageSubscriptionPayload {
  mutation: MutationType
  node?: Language
  updatedFields?: String[]
  previousValues?: LanguagePreviousValues
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PageTypeConnection {
  pageInfo: PageInfo
  edges: PageTypeEdge[]
  aggregate: AggregatePageType
}

export interface FilePreviousValues {
  id: ID_Output
  hash: String
  category?: String
  filename: String
  mimetype?: String
  size?: Int
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateTag {
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
 * An edge in a connection.

 */
export interface NavigationNodeEdge {
  node: NavigationNode
  cursor: String
}

export interface NavigationSubscriptionPayload {
  mutation: MutationType
  node?: Navigation
  updatedFields?: String[]
  previousValues?: NavigationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface NavigationConnection {
  pageInfo: PageInfo
  edges: NavigationEdge[]
  aggregate: AggregateNavigation
}

export interface NavigationPreviousValues {
  id: ID_Output
  name: String
}

export interface AggregatePageChat {
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
 * An edge in a connection.

 */
export interface PageTaskEdge {
  node: PageTask
  cursor: String
}

export interface NavigationNodeSubscriptionPayload {
  mutation: MutationType
  node?: NavigationNode
  updatedFields?: String[]
  previousValues?: NavigationNodePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PagePluginConnection {
  pageInfo: PageInfo
  edges: PagePluginEdge[]
  aggregate: AggregatePagePlugin
}

export interface NavigationNodePreviousValues {
  id: ID_Output
  page: ID_Output
  order?: Int
  parent?: ID_Output
}

export interface AggregateProject {
  count: Int
}

export interface PageType extends Node {
  id: ID_Output
  name: String
  content: Json
  website: Website
  plugins: String[]
}

export interface Tag extends Node {
  id: ID_Output
  website: Website
  name: String
  displayInNavigation?: Boolean
  plugins: String[]
  color: String
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag
  updatedFields?: String[]
  previousValues?: TagPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PageEdge {
  node: Page
  cursor: String
}

export interface TagPreviousValues {
  id: ID_Output
  name: String
  displayInNavigation?: Boolean
  plugins: String[]
  color: String
}

export interface AggregateNavigation {
  count: Int
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

/*
 * A connection to a list of items.

 */
export interface PageChatConnection {
  pageInfo: PageInfo
  edges: PageChatEdge[]
  aggregate: AggregatePageChat
}

/*
 * An edge in a connection.

 */
export interface PageTranslationEdge {
  node: PageTranslation
  cursor: String
}

export interface PageTypeSubscriptionPayload {
  mutation: MutationType
  node?: PageType
  updatedFields?: String[]
  previousValues?: PageTypePreviousValues
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

export interface PagePreviousValues {
  id: ID_Output
}

export interface PageSubscriptionPayload {
  mutation: MutationType
  node?: Page
  updatedFields?: String[]
  previousValues?: PagePreviousValues
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

export interface AggregatePagePlugin {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

export interface AggregatePageType {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
Raw JSON value
*/
export type Json = any

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number