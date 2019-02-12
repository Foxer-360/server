import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    projects: <T = Array<Project | null>>(args: { where?: ProjectWhereInput | null, orderBy?: ProjectOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslations: <T = Array<PageTranslation | null>>(args: { where?: PageTranslationWhereInput | null, orderBy?: PageTranslationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagePlugins: <T = Array<PagePlugin | null>>(args: { where?: PagePluginWhereInput | null, orderBy?: PagePluginOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTasks: <T = Array<PageTask | null>>(args: { where?: PageTaskWhereInput | null, orderBy?: PageTaskOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChats: <T = Array<PageChat | null>>(args: { where?: PageChatWhereInput | null, orderBy?: PageChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = Array<File | null>>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigations: <T = Array<Navigation | null>>(args: { where?: NavigationWhereInput | null, orderBy?: NavigationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationNodes: <T = Array<NavigationNode | null>>(args: { where?: NavigationNodeWhereInput | null, orderBy?: NavigationNodeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Array<Tag | null>>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscribers: <T = Array<Subscriber | null>>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inquiries: <T = Array<Inquiry | null>>(args: { where?: InquiryWhereInput | null, orderBy?: InquiryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datasources: <T = Array<Datasource | null>>(args: { where?: DatasourceWhereInput | null, orderBy?: DatasourceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datasourceItems: <T = Array<DatasourceItem | null>>(args: { where?: DatasourceItemWhereInput | null, orderBy?: DatasourceItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pages: <T = Array<Page | null>>(args: { where?: PageWhereInput | null, orderBy?: PageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTypes: <T = Array<PageType | null>>(args: { where?: PageTypeWhereInput | null, orderBy?: PageTypeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websites: <T = Array<Website | null>>(args: { where?: WebsiteWhereInput | null, orderBy?: WebsiteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Array<Language | null>>(args: { where?: LanguageWhereInput | null, orderBy?: LanguageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    project: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pagePlugin: <T = PagePlugin | null>(args: { where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    navigation: <T = Navigation | null>(args: { where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    navigationNode: <T = NavigationNode | null>(args: { where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    subscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    inquiry: <T = Inquiry | null>(args: { where: InquiryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    datasource: <T = Datasource | null>(args: { where: DatasourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    datasourceItem: <T = DatasourceItem | null>(args: { where: DatasourceItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    page: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    website: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    projectsConnection: <T = ProjectConnection>(args: { where?: ProjectWhereInput | null, orderBy?: ProjectOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslationsConnection: <T = PageTranslationConnection>(args: { where?: PageTranslationWhereInput | null, orderBy?: PageTranslationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagePluginsConnection: <T = PagePluginConnection>(args: { where?: PagePluginWhereInput | null, orderBy?: PagePluginOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTasksConnection: <T = PageTaskConnection>(args: { where?: PageTaskWhereInput | null, orderBy?: PageTaskOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChatsConnection: <T = PageChatConnection>(args: { where?: PageChatWhereInput | null, orderBy?: PageChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationsConnection: <T = NavigationConnection>(args: { where?: NavigationWhereInput | null, orderBy?: NavigationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationNodesConnection: <T = NavigationNodeConnection>(args: { where?: NavigationNodeWhereInput | null, orderBy?: NavigationNodeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscribersConnection: <T = SubscriberConnection>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inquiriesConnection: <T = InquiryConnection>(args: { where?: InquiryWhereInput | null, orderBy?: InquiryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datasourcesConnection: <T = DatasourceConnection>(args: { where?: DatasourceWhereInput | null, orderBy?: DatasourceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datasourceItemsConnection: <T = DatasourceItemConnection>(args: { where?: DatasourceItemWhereInput | null, orderBy?: DatasourceItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagesConnection: <T = PageConnection>(args: { where?: PageWhereInput | null, orderBy?: PageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTypesConnection: <T = PageTypeConnection>(args: { where?: PageTypeWhereInput | null, orderBy?: PageTypeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websitesConnection: <T = WebsiteConnection>(args: { where?: WebsiteWhereInput | null, orderBy?: WebsiteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput | null, orderBy?: LanguageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
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
    createSubscriber: <T = Subscriber>(args: { data: SubscriberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInquiry: <T = Inquiry>(args: { data: InquiryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDatasource: <T = Datasource>(args: { data: DatasourceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDatasourceItem: <T = DatasourceItem>(args: { data: DatasourceItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPage: <T = Page>(args: { data: PageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageType: <T = PageType>(args: { data: PageTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProject: <T = Project | null>(args: { data: ProjectUpdateInput, where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageTranslation: <T = PageTranslation | null>(args: { data: PageTranslationUpdateInput, where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePagePlugin: <T = PagePlugin | null>(args: { data: PagePluginUpdateInput, where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageTask: <T = PageTask | null>(args: { data: PageTaskUpdateInput, where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageChat: <T = PageChat | null>(args: { data: PageChatUpdateInput, where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNavigation: <T = Navigation | null>(args: { data: NavigationUpdateInput, where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNavigationNode: <T = NavigationNode | null>(args: { data: NavigationNodeUpdateInput, where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSubscriber: <T = Subscriber | null>(args: { data: SubscriberUpdateInput, where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateInquiry: <T = Inquiry | null>(args: { data: InquiryUpdateInput, where: InquiryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDatasource: <T = Datasource | null>(args: { data: DatasourceUpdateInput, where: DatasourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDatasourceItem: <T = DatasourceItem | null>(args: { data: DatasourceItemUpdateInput, where: DatasourceItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePage: <T = Page | null>(args: { data: PageUpdateInput, where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageType: <T = PageType | null>(args: { data: PageTypeUpdateInput, where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateWebsite: <T = Website | null>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProject: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePagePlugin: <T = PagePlugin | null>(args: { where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNavigation: <T = Navigation | null>(args: { where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNavigationNode: <T = NavigationNode | null>(args: { where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSubscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteInquiry: <T = Inquiry | null>(args: { where: InquiryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDatasource: <T = Datasource | null>(args: { where: DatasourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDatasourceItem: <T = DatasourceItem | null>(args: { where: DatasourceItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePage: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteWebsite: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertProject: <T = Project>(args: { where: ProjectWhereUniqueInput, create: ProjectCreateInput, update: ProjectUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTranslation: <T = PageTranslation>(args: { where: PageTranslationWhereUniqueInput, create: PageTranslationCreateInput, update: PageTranslationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPagePlugin: <T = PagePlugin>(args: { where: PagePluginWhereUniqueInput, create: PagePluginCreateInput, update: PagePluginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTask: <T = PageTask>(args: { where: PageTaskWhereUniqueInput, create: PageTaskCreateInput, update: PageTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageChat: <T = PageChat>(args: { where: PageChatWhereUniqueInput, create: PageChatCreateInput, update: PageChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNavigation: <T = Navigation>(args: { where: NavigationWhereUniqueInput, create: NavigationCreateInput, update: NavigationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNavigationNode: <T = NavigationNode>(args: { where: NavigationNodeWhereUniqueInput, create: NavigationNodeCreateInput, update: NavigationNodeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSubscriber: <T = Subscriber>(args: { where: SubscriberWhereUniqueInput, create: SubscriberCreateInput, update: SubscriberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInquiry: <T = Inquiry>(args: { where: InquiryWhereUniqueInput, create: InquiryCreateInput, update: InquiryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDatasource: <T = Datasource>(args: { where: DatasourceWhereUniqueInput, create: DatasourceCreateInput, update: DatasourceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDatasourceItem: <T = DatasourceItem>(args: { where: DatasourceItemWhereUniqueInput, create: DatasourceItemCreateInput, update: DatasourceItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPage: <T = Page>(args: { where: PageWhereUniqueInput, create: PageCreateInput, update: PageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageType: <T = PageType>(args: { where: PageTypeWhereUniqueInput, create: PageTypeCreateInput, update: PageTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProjects: <T = BatchPayload>(args: { data: ProjectUpdateInput, where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTranslations: <T = BatchPayload>(args: { data: PageTranslationUpdateInput, where?: PageTranslationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPagePlugins: <T = BatchPayload>(args: { data: PagePluginUpdateInput, where?: PagePluginWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTasks: <T = BatchPayload>(args: { data: PageTaskUpdateInput, where?: PageTaskWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageChats: <T = BatchPayload>(args: { data: PageChatUpdateInput, where?: PageChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNavigations: <T = BatchPayload>(args: { data: NavigationUpdateInput, where?: NavigationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNavigationNodes: <T = BatchPayload>(args: { data: NavigationNodeUpdateInput, where?: NavigationNodeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySubscribers: <T = BatchPayload>(args: { data: SubscriberUpdateInput, where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInquiries: <T = BatchPayload>(args: { data: InquiryUpdateInput, where?: InquiryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDatasources: <T = BatchPayload>(args: { data: DatasourceUpdateInput, where?: DatasourceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDatasourceItems: <T = BatchPayload>(args: { data: DatasourceItemUpdateInput, where?: DatasourceItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPages: <T = BatchPayload>(args: { data: PageUpdateInput, where?: PageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTypes: <T = BatchPayload>(args: { data: PageTypeUpdateInput, where?: PageTypeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateInput, where?: WebsiteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateInput, where?: LanguageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProjects: <T = BatchPayload>(args: { where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTranslations: <T = BatchPayload>(args: { where?: PageTranslationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPagePlugins: <T = BatchPayload>(args: { where?: PagePluginWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTasks: <T = BatchPayload>(args: { where?: PageTaskWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageChats: <T = BatchPayload>(args: { where?: PageChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNavigations: <T = BatchPayload>(args: { where?: NavigationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNavigationNodes: <T = BatchPayload>(args: { where?: NavigationNodeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySubscribers: <T = BatchPayload>(args: { where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInquiries: <T = BatchPayload>(args: { where?: InquiryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDatasources: <T = BatchPayload>(args: { where?: DatasourceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDatasourceItems: <T = BatchPayload>(args: { where?: DatasourceItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPages: <T = BatchPayload>(args: { where?: PageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTypes: <T = BatchPayload>(args: { where?: PageTypeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWebsites: <T = BatchPayload>(args: { where?: WebsiteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    project: <T = ProjectSubscriptionPayload | null>(args: { where?: ProjectSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pageTranslation: <T = PageTranslationSubscriptionPayload | null>(args: { where?: PageTranslationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pagePlugin: <T = PagePluginSubscriptionPayload | null>(args: { where?: PagePluginSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pageTask: <T = PageTaskSubscriptionPayload | null>(args: { where?: PageTaskSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pageChat: <T = PageChatSubscriptionPayload | null>(args: { where?: PageChatSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    navigation: <T = NavigationSubscriptionPayload | null>(args: { where?: NavigationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    navigationNode: <T = NavigationNodeSubscriptionPayload | null>(args: { where?: NavigationNodeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    subscriber: <T = SubscriberSubscriptionPayload | null>(args: { where?: SubscriberSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    inquiry: <T = InquirySubscriptionPayload | null>(args: { where?: InquirySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    datasource: <T = DatasourceSubscriptionPayload | null>(args: { where?: DatasourceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    datasourceItem: <T = DatasourceItemSubscriptionPayload | null>(args: { where?: DatasourceItemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    page: <T = PageSubscriptionPayload | null>(args: { where?: PageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pageType: <T = PageTypeSubscriptionPayload | null>(args: { where?: PageTypeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    website: <T = WebsiteSubscriptionPayload | null>(args: { where?: WebsiteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
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
  Subscriber: (where?: SubscriberWhereInput) => Promise<boolean>
  Inquiry: (where?: InquiryWhereInput) => Promise<boolean>
  Datasource: (where?: DatasourceWhereInput) => Promise<boolean>
  DatasourceItem: (where?: DatasourceItemWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateDatasource {
  count: Int!
}

type AggregateDatasourceItem {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateInquiry {
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

type AggregateSubscriber {
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

type Datasource implements Node {
  id: ID!
  type: String!
  schema: Json!
  uiSchema: Json
  displayInNavigation: Boolean
  slug: [String!]!
  datasourceItems(where: DatasourceItemWhereInput, orderBy: DatasourceItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DatasourceItem!]
  page(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page!]
}

"""A connection to a list of items."""
type DatasourceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DatasourceEdge]!
  aggregate: AggregateDatasource!
}

input DatasourceCreateInput {
  type: String!
  schema: Json!
  uiSchema: Json
  displayInNavigation: Boolean
  slug: DatasourceCreateslugInput
  datasourceItems: DatasourceItemCreateManyWithoutDatasourceInput
  page: PageCreateManyWithoutDatasourcesInput
}

input DatasourceCreateManyWithoutPageInput {
  create: [DatasourceCreateWithoutPageInput!]
  connect: [DatasourceWhereUniqueInput!]
}

input DatasourceCreateOneWithoutDatasourceItemsInput {
  create: DatasourceCreateWithoutDatasourceItemsInput
  connect: DatasourceWhereUniqueInput
}

input DatasourceCreateslugInput {
  set: [String!]
}

input DatasourceCreateWithoutDatasourceItemsInput {
  type: String!
  schema: Json!
  uiSchema: Json
  displayInNavigation: Boolean
  slug: DatasourceCreateslugInput
  page: PageCreateManyWithoutDatasourcesInput
}

input DatasourceCreateWithoutPageInput {
  type: String!
  schema: Json!
  uiSchema: Json
  displayInNavigation: Boolean
  slug: DatasourceCreateslugInput
  datasourceItems: DatasourceItemCreateManyWithoutDatasourceInput
}

"""An edge in a connection."""
type DatasourceEdge {
  """The item at the end of the edge."""
  node: Datasource!

  """A cursor for use in pagination."""
  cursor: String!
}

type DatasourceItem implements Node {
  id: ID!
  datasource(where: DatasourceWhereInput): Datasource!
  slug: String!
  content: Json!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type DatasourceItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DatasourceItemEdge]!
  aggregate: AggregateDatasourceItem!
}

input DatasourceItemCreateInput {
  slug: String!
  content: Json!
  datasource: DatasourceCreateOneWithoutDatasourceItemsInput!
}

input DatasourceItemCreateManyWithoutDatasourceInput {
  create: [DatasourceItemCreateWithoutDatasourceInput!]
  connect: [DatasourceItemWhereUniqueInput!]
}

input DatasourceItemCreateWithoutDatasourceInput {
  slug: String!
  content: Json!
}

"""An edge in a connection."""
type DatasourceItemEdge {
  """The item at the end of the edge."""
  node: DatasourceItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DatasourceItemOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DatasourceItemPreviousValues {
  id: ID!
  slug: String!
  content: Json!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type DatasourceItemSubscriptionPayload {
  mutation: MutationType!
  node: DatasourceItem
  updatedFields: [String!]
  previousValues: DatasourceItemPreviousValues
}

input DatasourceItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DatasourceItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DatasourceItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DatasourceItemSubscriptionWhereInput!]

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
  node: DatasourceItemWhereInput
}

input DatasourceItemUpdateInput {
  slug: String
  content: Json
  datasource: DatasourceUpdateOneWithoutDatasourceItemsInput
}

input DatasourceItemUpdateManyWithoutDatasourceInput {
  create: [DatasourceItemCreateWithoutDatasourceInput!]
  connect: [DatasourceItemWhereUniqueInput!]
  disconnect: [DatasourceItemWhereUniqueInput!]
  delete: [DatasourceItemWhereUniqueInput!]
  update: [DatasourceItemUpdateWithWhereUniqueWithoutDatasourceInput!]
  upsert: [DatasourceItemUpsertWithWhereUniqueWithoutDatasourceInput!]
}

input DatasourceItemUpdateWithoutDatasourceDataInput {
  slug: String
  content: Json
}

input DatasourceItemUpdateWithWhereUniqueWithoutDatasourceInput {
  where: DatasourceItemWhereUniqueInput!
  data: DatasourceItemUpdateWithoutDatasourceDataInput!
}

input DatasourceItemUpsertWithWhereUniqueWithoutDatasourceInput {
  where: DatasourceItemWhereUniqueInput!
  update: DatasourceItemUpdateWithoutDatasourceDataInput!
  create: DatasourceItemCreateWithoutDatasourceInput!
}

input DatasourceItemWhereInput {
  """Logical AND on all given filters."""
  AND: [DatasourceItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [DatasourceItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DatasourceItemWhereInput!]
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
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
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
  datasource: DatasourceWhereInput
}

input DatasourceItemWhereUniqueInput {
  id: ID
}

enum DatasourceOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  schema_ASC
  schema_DESC
  uiSchema_ASC
  uiSchema_DESC
  displayInNavigation_ASC
  displayInNavigation_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DatasourcePreviousValues {
  id: ID!
  type: String!
  schema: Json!
  uiSchema: Json
  displayInNavigation: Boolean
  slug: [String!]!
}

type DatasourceSubscriptionPayload {
  mutation: MutationType!
  node: Datasource
  updatedFields: [String!]
  previousValues: DatasourcePreviousValues
}

input DatasourceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DatasourceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DatasourceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DatasourceSubscriptionWhereInput!]

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
  node: DatasourceWhereInput
}

input DatasourceUpdateInput {
  type: String
  schema: Json
  uiSchema: Json
  displayInNavigation: Boolean
  slug: DatasourceUpdateslugInput
  datasourceItems: DatasourceItemUpdateManyWithoutDatasourceInput
  page: PageUpdateManyWithoutDatasourcesInput
}

input DatasourceUpdateManyWithoutPageInput {
  create: [DatasourceCreateWithoutPageInput!]
  connect: [DatasourceWhereUniqueInput!]
  disconnect: [DatasourceWhereUniqueInput!]
  delete: [DatasourceWhereUniqueInput!]
  update: [DatasourceUpdateWithWhereUniqueWithoutPageInput!]
  upsert: [DatasourceUpsertWithWhereUniqueWithoutPageInput!]
}

input DatasourceUpdateOneWithoutDatasourceItemsInput {
  create: DatasourceCreateWithoutDatasourceItemsInput
  connect: DatasourceWhereUniqueInput
  delete: Boolean
  update: DatasourceUpdateWithoutDatasourceItemsDataInput
  upsert: DatasourceUpsertWithoutDatasourceItemsInput
}

input DatasourceUpdateslugInput {
  set: [String!]
}

input DatasourceUpdateWithoutDatasourceItemsDataInput {
  type: String
  schema: Json
  uiSchema: Json
  displayInNavigation: Boolean
  slug: DatasourceUpdateslugInput
  page: PageUpdateManyWithoutDatasourcesInput
}

input DatasourceUpdateWithoutPageDataInput {
  type: String
  schema: Json
  uiSchema: Json
  displayInNavigation: Boolean
  slug: DatasourceUpdateslugInput
  datasourceItems: DatasourceItemUpdateManyWithoutDatasourceInput
}

input DatasourceUpdateWithWhereUniqueWithoutPageInput {
  where: DatasourceWhereUniqueInput!
  data: DatasourceUpdateWithoutPageDataInput!
}

input DatasourceUpsertWithoutDatasourceItemsInput {
  update: DatasourceUpdateWithoutDatasourceItemsDataInput!
  create: DatasourceCreateWithoutDatasourceItemsInput!
}

input DatasourceUpsertWithWhereUniqueWithoutPageInput {
  where: DatasourceWhereUniqueInput!
  update: DatasourceUpdateWithoutPageDataInput!
  create: DatasourceCreateWithoutPageInput!
}

input DatasourceWhereInput {
  """Logical AND on all given filters."""
  AND: [DatasourceWhereInput!]

  """Logical OR on all given filters."""
  OR: [DatasourceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DatasourceWhereInput!]
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
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  displayInNavigation: Boolean

  """All values that are not equal to given value."""
  displayInNavigation_not: Boolean
  datasourceItems_every: DatasourceItemWhereInput
  datasourceItems_some: DatasourceItemWhereInput
  datasourceItems_none: DatasourceItemWhereInput
  page_every: PageWhereInput
  page_some: PageWhereInput
  page_none: PageWhereInput
}

input DatasourceWhereUniqueInput {
  id: ID
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

type Inquiry implements Node {
  id: ID!
  message: Json!
  url: String
  createdAt: DateTime!
  formType: String
  ip: String
}

"""A connection to a list of items."""
type InquiryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InquiryEdge]!
  aggregate: AggregateInquiry!
}

input InquiryCreateInput {
  message: Json!
  url: String
  formType: String
  ip: String
}

"""An edge in a connection."""
type InquiryEdge {
  """The item at the end of the edge."""
  node: Inquiry!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InquiryOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  formType_ASC
  formType_DESC
  ip_ASC
  ip_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InquiryPreviousValues {
  id: ID!
  message: Json!
  url: String
  createdAt: DateTime!
  formType: String
  ip: String
}

type InquirySubscriptionPayload {
  mutation: MutationType!
  node: Inquiry
  updatedFields: [String!]
  previousValues: InquiryPreviousValues
}

input InquirySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InquirySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InquirySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InquirySubscriptionWhereInput!]

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
  node: InquiryWhereInput
}

input InquiryUpdateInput {
  message: Json
  url: String
  formType: String
  ip: String
}

input InquiryWhereInput {
  """Logical AND on all given filters."""
  AND: [InquiryWhereInput!]

  """Logical OR on all given filters."""
  OR: [InquiryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InquiryWhereInput!]
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
  formType: String

  """All values that are not equal to given value."""
  formType_not: String

  """All values that are contained in given list."""
  formType_in: [String!]

  """All values that are not contained in given list."""
  formType_not_in: [String!]

  """All values less than the given value."""
  formType_lt: String

  """All values less than or equal the given value."""
  formType_lte: String

  """All values greater than the given value."""
  formType_gt: String

  """All values greater than or equal the given value."""
  formType_gte: String

  """All values containing the given string."""
  formType_contains: String

  """All values not containing the given string."""
  formType_not_contains: String

  """All values starting with the given string."""
  formType_starts_with: String

  """All values not starting with the given string."""
  formType_not_starts_with: String

  """All values ending with the given string."""
  formType_ends_with: String

  """All values not ending with the given string."""
  formType_not_ends_with: String
  ip: String

  """All values that are not equal to given value."""
  ip_not: String

  """All values that are contained in given list."""
  ip_in: [String!]

  """All values that are not contained in given list."""
  ip_not_in: [String!]

  """All values less than the given value."""
  ip_lt: String

  """All values less than or equal the given value."""
  ip_lte: String

  """All values greater than the given value."""
  ip_gt: String

  """All values greater than or equal the given value."""
  ip_gte: String

  """All values containing the given string."""
  ip_contains: String

  """All values not containing the given string."""
  ip_not_contains: String

  """All values starting with the given string."""
  ip_starts_with: String

  """All values not starting with the given string."""
  ip_not_starts_with: String

  """All values ending with the given string."""
  ip_ends_with: String

  """All values not ending with the given string."""
  ip_not_ends_with: String
}

input InquiryWhereUniqueInput {
  id: ID
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
  createSubscriber(data: SubscriberCreateInput!): Subscriber!
  createInquiry(data: InquiryCreateInput!): Inquiry!
  createDatasource(data: DatasourceCreateInput!): Datasource!
  createDatasourceItem(data: DatasourceItemCreateInput!): DatasourceItem!
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
  updateSubscriber(data: SubscriberUpdateInput!, where: SubscriberWhereUniqueInput!): Subscriber
  updateInquiry(data: InquiryUpdateInput!, where: InquiryWhereUniqueInput!): Inquiry
  updateDatasource(data: DatasourceUpdateInput!, where: DatasourceWhereUniqueInput!): Datasource
  updateDatasourceItem(data: DatasourceItemUpdateInput!, where: DatasourceItemWhereUniqueInput!): DatasourceItem
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
  deleteSubscriber(where: SubscriberWhereUniqueInput!): Subscriber
  deleteInquiry(where: InquiryWhereUniqueInput!): Inquiry
  deleteDatasource(where: DatasourceWhereUniqueInput!): Datasource
  deleteDatasourceItem(where: DatasourceItemWhereUniqueInput!): DatasourceItem
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
  upsertSubscriber(where: SubscriberWhereUniqueInput!, create: SubscriberCreateInput!, update: SubscriberUpdateInput!): Subscriber!
  upsertInquiry(where: InquiryWhereUniqueInput!, create: InquiryCreateInput!, update: InquiryUpdateInput!): Inquiry!
  upsertDatasource(where: DatasourceWhereUniqueInput!, create: DatasourceCreateInput!, update: DatasourceUpdateInput!): Datasource!
  upsertDatasourceItem(where: DatasourceItemWhereUniqueInput!, create: DatasourceItemCreateInput!, update: DatasourceItemUpdateInput!): DatasourceItem!
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
  updateManySubscribers(data: SubscriberUpdateInput!, where: SubscriberWhereInput): BatchPayload!
  updateManyInquiries(data: InquiryUpdateInput!, where: InquiryWhereInput): BatchPayload!
  updateManyDatasources(data: DatasourceUpdateInput!, where: DatasourceWhereInput): BatchPayload!
  updateManyDatasourceItems(data: DatasourceItemUpdateInput!, where: DatasourceItemWhereInput): BatchPayload!
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
  deleteManySubscribers(where: SubscriberWhereInput): BatchPayload!
  deleteManyInquiries(where: InquiryWhereInput): BatchPayload!
  deleteManyDatasources(where: DatasourceWhereInput): BatchPayload!
  deleteManyDatasourceItems(where: DatasourceItemWhereInput): BatchPayload!
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
  page: ID
  title: String
  link: String
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
  page: ID
  title: String
  link: String
  order: Int
  parent: ID
  navigation: NavigationCreateOneWithoutNodesInput!
}

input NavigationNodeCreateManyWithoutNavigationInput {
  create: [NavigationNodeCreateWithoutNavigationInput!]
  connect: [NavigationNodeWhereUniqueInput!]
}

input NavigationNodeCreateWithoutNavigationInput {
  page: ID
  title: String
  link: String
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
  title_ASC
  title_DESC
  link_ASC
  link_DESC
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
  page: ID
  title: String
  link: String
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
  title: String
  link: String
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
  title: String
  link: String
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
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
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
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  plugin(where: PagePluginWhereInput): PagePlugin
  datasources(where: DatasourceWhereInput, orderBy: DatasourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Datasource!]
}

type PageChat implements Node {
  id: ID!
  page(where: PageWhereInput): Page!
  text: String!
  createdAt: DateTime!
  auth0id: ID
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
  auth0id: ID
  page: PageCreateOneWithoutChatsInput!
}

input PageChatCreateManyWithoutPageInput {
  create: [PageChatCreateWithoutPageInput!]
  connect: [PageChatWhereUniqueInput!]
}

input PageChatCreateWithoutPageInput {
  text: String!
  auth0id: ID
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
  auth0id_ASC
  auth0id_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PageChatPreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
  auth0id: ID
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
  auth0id: ID
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
  auth0id: ID
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
  auth0id: ID

  """All values that are not equal to given value."""
  auth0id_not: ID

  """All values that are contained in given list."""
  auth0id_in: [ID!]

  """All values that are not contained in given list."""
  auth0id_not_in: [ID!]

  """All values less than the given value."""
  auth0id_lt: ID

  """All values less than or equal the given value."""
  auth0id_lte: ID

  """All values greater than the given value."""
  auth0id_gt: ID

  """All values greater than or equal the given value."""
  auth0id_gte: ID

  """All values containing the given string."""
  auth0id_contains: ID

  """All values not containing the given string."""
  auth0id_not_contains: ID

  """All values starting with the given string."""
  auth0id_starts_with: ID

  """All values not starting with the given string."""
  auth0id_not_starts_with: ID

  """All values ending with the given string."""
  auth0id_ends_with: ID

  """All values not ending with the given string."""
  auth0id_not_ends_with: ID
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
  tags: TagCreateManyWithoutPagesInput
  plugin: PagePluginCreateOneWithoutPageInput
  datasources: DatasourceCreateManyWithoutPageInput
}

input PageCreateManyWithoutDatasourcesInput {
  create: [PageCreateWithoutDatasourcesInput!]
  connect: [PageWhereUniqueInput!]
}

input PageCreateManyWithoutTagsInput {
  create: [PageCreateWithoutTagsInput!]
  connect: [PageWhereUniqueInput!]
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

input PageCreateOneWithoutPluginInput {
  create: PageCreateWithoutPluginInput
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
  tags: TagCreateManyWithoutPagesInput
  plugin: PagePluginCreateOneWithoutPageInput
  datasources: DatasourceCreateManyWithoutPageInput
}

input PageCreateWithoutDatasourcesInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
  tags: TagCreateManyWithoutPagesInput
  plugin: PagePluginCreateOneWithoutPageInput
}

input PageCreateWithoutPluginInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
  tags: TagCreateManyWithoutPagesInput
  datasources: DatasourceCreateManyWithoutPageInput
}

input PageCreateWithoutTagsInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
  plugin: PagePluginCreateOneWithoutPageInput
  datasources: DatasourceCreateManyWithoutPageInput
}

input PageCreateWithoutTranslationsInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  chats: PageChatCreateManyWithoutPageInput
  tags: TagCreateManyWithoutPagesInput
  plugin: PagePluginCreateOneWithoutPageInput
  datasources: DatasourceCreateManyWithoutPageInput
}

input PageCreateWithoutWebsiteInput {
  parent: PageCreateOneInput
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
  tags: TagCreateManyWithoutPagesInput
  plugin: PagePluginCreateOneWithoutPageInput
  datasources: DatasourceCreateManyWithoutPageInput
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
  page: PageCreateOneWithoutPluginInput!
  language: LanguageCreateOneInput!
}

input PagePluginCreateOneWithoutPageInput {
  create: PagePluginCreateWithoutPageInput
  connect: PagePluginWhereUniqueInput
}

input PagePluginCreateWithoutPageInput {
  plugin: String!
  content: Json
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
  page: PageUpdateOneWithoutPluginInput
  language: LanguageUpdateOneInput
}

input PagePluginUpdateOneWithoutPageInput {
  create: PagePluginCreateWithoutPageInput
  connect: PagePluginWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PagePluginUpdateWithoutPageDataInput
  upsert: PagePluginUpsertWithoutPageInput
}

input PagePluginUpdateWithoutPageDataInput {
  plugin: String
  content: Json
  language: LanguageUpdateOneInput
}

input PagePluginUpsertWithoutPageInput {
  update: PagePluginUpdateWithoutPageDataInput!
  create: PagePluginCreateWithoutPageInput!
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
  auth0id: ID
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
  auth0id: ID
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
  auth0id: ID
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
  auth0id_ASC
  auth0id_DESC
  createdAt_ASC
  createdAt_DESC
}

type PageTaskPreviousValues {
  id: ID!
  done: Boolean!
  name: String!
  description: String!
  updatedAt: DateTime!
  auth0id: ID
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
  auth0id: ID
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
  auth0id: ID
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
  auth0id: ID

  """All values that are not equal to given value."""
  auth0id_not: ID

  """All values that are contained in given list."""
  auth0id_in: [ID!]

  """All values that are not contained in given list."""
  auth0id_not_in: [ID!]

  """All values less than the given value."""
  auth0id_lt: ID

  """All values less than or equal the given value."""
  auth0id_lte: ID

  """All values greater than the given value."""
  auth0id_gt: ID

  """All values greater than or equal the given value."""
  auth0id_gte: ID

  """All values containing the given string."""
  auth0id_contains: ID

  """All values not containing the given string."""
  auth0id_not_contains: ID

  """All values starting with the given string."""
  auth0id_starts_with: ID

  """All values not starting with the given string."""
  auth0id_not_starts_with: ID

  """All values ending with the given string."""
  auth0id_ends_with: ID

  """All values not ending with the given string."""
  auth0id_not_ends_with: ID
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
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
  tasks(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTask!]
  createdAt: DateTime!
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
  description: String
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
  description: String
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
  description: String
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
  description_ASC
  description_DESC
  publishedFrom_ASC
  publishedFrom_DESC
  publishedTo_ASC
  publishedTo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PageTranslationPreviousValues {
  id: ID!
  url: String!
  content: Json!
  name: String!
  status: PageStatus!
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
  createdAt: DateTime!
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
  description: String
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
  description: String
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
  description: String
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
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
  datasources: DatasourceUpdateManyWithoutPageInput
}

input PageUpdateInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
  datasources: DatasourceUpdateManyWithoutPageInput
}

input PageUpdateManyWithoutDatasourcesInput {
  create: [PageCreateWithoutDatasourcesInput!]
  connect: [PageWhereUniqueInput!]
  disconnect: [PageWhereUniqueInput!]
  delete: [PageWhereUniqueInput!]
  update: [PageUpdateWithWhereUniqueWithoutDatasourcesInput!]
  upsert: [PageUpsertWithWhereUniqueWithoutDatasourcesInput!]
}

input PageUpdateManyWithoutTagsInput {
  create: [PageCreateWithoutTagsInput!]
  connect: [PageWhereUniqueInput!]
  disconnect: [PageWhereUniqueInput!]
  delete: [PageWhereUniqueInput!]
  update: [PageUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [PageUpsertWithWhereUniqueWithoutTagsInput!]
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

input PageUpdateOneWithoutPluginInput {
  create: PageCreateWithoutPluginInput
  connect: PageWhereUniqueInput
  delete: Boolean
  update: PageUpdateWithoutPluginDataInput
  upsert: PageUpsertWithoutPluginInput
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
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
  datasources: DatasourceUpdateManyWithoutPageInput
}

input PageUpdateWithoutDatasourcesDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
}

input PageUpdateWithoutPluginDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  datasources: DatasourceUpdateManyWithoutPageInput
}

input PageUpdateWithoutTagsDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  plugin: PagePluginUpdateOneWithoutPageInput
  datasources: DatasourceUpdateManyWithoutPageInput
}

input PageUpdateWithoutTranslationsDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneWithoutPagesInput
  type: PageTypeUpdateOneInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
  datasources: DatasourceUpdateManyWithoutPageInput
}

input PageUpdateWithoutWebsiteDataInput {
  parent: PageUpdateOneInput
  type: PageTypeUpdateOneInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
  datasources: DatasourceUpdateManyWithoutPageInput
}

input PageUpdateWithWhereUniqueWithoutDatasourcesInput {
  where: PageWhereUniqueInput!
  data: PageUpdateWithoutDatasourcesDataInput!
}

input PageUpdateWithWhereUniqueWithoutTagsInput {
  where: PageWhereUniqueInput!
  data: PageUpdateWithoutTagsDataInput!
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

input PageUpsertWithoutPluginInput {
  update: PageUpdateWithoutPluginDataInput!
  create: PageCreateWithoutPluginInput!
}

input PageUpsertWithoutTranslationsInput {
  update: PageUpdateWithoutTranslationsDataInput!
  create: PageCreateWithoutTranslationsInput!
}

input PageUpsertWithWhereUniqueWithoutDatasourcesInput {
  where: PageWhereUniqueInput!
  update: PageUpdateWithoutDatasourcesDataInput!
  create: PageCreateWithoutDatasourcesInput!
}

input PageUpsertWithWhereUniqueWithoutTagsInput {
  where: PageWhereUniqueInput!
  update: PageUpdateWithoutTagsDataInput!
  create: PageCreateWithoutTagsInput!
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
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  plugin: PagePluginWhereInput
  datasources_every: DatasourceWhereInput
  datasources_some: DatasourceWhereInput
  datasources_none: DatasourceWhereInput
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
  subscribers(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscriber]!
  inquiries(where: InquiryWhereInput, orderBy: InquiryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inquiry]!
  datasources(where: DatasourceWhereInput, orderBy: DatasourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Datasource]!
  datasourceItems(where: DatasourceItemWhereInput, orderBy: DatasourceItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DatasourceItem]!
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
  subscriber(where: SubscriberWhereUniqueInput!): Subscriber
  inquiry(where: InquiryWhereUniqueInput!): Inquiry
  datasource(where: DatasourceWhereUniqueInput!): Datasource
  datasourceItem(where: DatasourceItemWhereUniqueInput!): DatasourceItem
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
  subscribersConnection(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubscriberConnection!
  inquiriesConnection(where: InquiryWhereInput, orderBy: InquiryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InquiryConnection!
  datasourcesConnection(where: DatasourceWhereInput, orderBy: DatasourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DatasourceConnection!
  datasourceItemsConnection(where: DatasourceItemWhereInput, orderBy: DatasourceItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DatasourceItemConnection!
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

type Subscriber implements Node {
  id: ID!
  email: String!
  url: String
  createdAt: DateTime!
  ip: String
}

"""A connection to a list of items."""
type SubscriberConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SubscriberEdge]!
  aggregate: AggregateSubscriber!
}

input SubscriberCreateInput {
  email: String!
  url: String
  ip: String
}

"""An edge in a connection."""
type SubscriberEdge {
  """The item at the end of the edge."""
  node: Subscriber!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SubscriberOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  ip_ASC
  ip_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SubscriberPreviousValues {
  id: ID!
  email: String!
  url: String
  createdAt: DateTime!
  ip: String
}

type SubscriberSubscriptionPayload {
  mutation: MutationType!
  node: Subscriber
  updatedFields: [String!]
  previousValues: SubscriberPreviousValues
}

input SubscriberSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SubscriberSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubscriberSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubscriberSubscriptionWhereInput!]

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
  node: SubscriberWhereInput
}

input SubscriberUpdateInput {
  email: String
  url: String
  ip: String
}

input SubscriberWhereInput {
  """Logical AND on all given filters."""
  AND: [SubscriberWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubscriberWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubscriberWhereInput!]
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
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
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
  ip: String

  """All values that are not equal to given value."""
  ip_not: String

  """All values that are contained in given list."""
  ip_in: [String!]

  """All values that are not contained in given list."""
  ip_not_in: [String!]

  """All values less than the given value."""
  ip_lt: String

  """All values less than or equal the given value."""
  ip_lte: String

  """All values greater than the given value."""
  ip_gt: String

  """All values greater than or equal the given value."""
  ip_gte: String

  """All values containing the given string."""
  ip_contains: String

  """All values not containing the given string."""
  ip_not_contains: String

  """All values starting with the given string."""
  ip_starts_with: String

  """All values not starting with the given string."""
  ip_not_starts_with: String

  """All values ending with the given string."""
  ip_ends_with: String

  """All values not ending with the given string."""
  ip_not_ends_with: String
}

input SubscriberWhereUniqueInput {
  id: ID
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
  subscriber(where: SubscriberSubscriptionWhereInput): SubscriberSubscriptionPayload
  inquiry(where: InquirySubscriptionWhereInput): InquirySubscriptionPayload
  datasource(where: DatasourceSubscriptionWhereInput): DatasourceSubscriptionPayload
  datasourceItem(where: DatasourceItemSubscriptionWhereInput): DatasourceItemSubscriptionPayload
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
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page!]
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
  pages: PageCreateManyWithoutTagsInput
}

input TagCreateManyWithoutPagesInput {
  create: [TagCreateWithoutPagesInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreatepluginsInput {
  set: [String!]
}

input TagCreateWithoutPagesInput {
  name: String!
  displayInNavigation: Boolean
  color: String!
  plugins: TagCreatepluginsInput
  website: WebsiteCreateOneInput!
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
  pages: PageUpdateManyWithoutTagsInput
}

input TagUpdateManyWithoutPagesInput {
  create: [TagCreateWithoutPagesInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutPagesInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutPagesInput!]
}

input TagUpdatepluginsInput {
  set: [String!]
}

input TagUpdateWithoutPagesDataInput {
  name: String
  displayInNavigation: Boolean
  color: String
  plugins: TagUpdatepluginsInput
  website: WebsiteUpdateOneInput
}

input TagUpdateWithWhereUniqueWithoutPagesInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutPagesDataInput!
}

input TagUpsertWithWhereUniqueWithoutPagesInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutPagesDataInput!
  create: TagCreateWithoutPagesInput!
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
  pages_every: PageWhereInput
  pages_some: PageWhereInput
  pages_none: PageWhereInput
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

export type DatasourceItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'content_ASC' |
  'content_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type DatasourceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'schema_ASC' |
  'schema_DESC' |
  'uiSchema_ASC' |
  'uiSchema_DESC' |
  'displayInNavigation_ASC' |
  'displayInNavigation_DESC' |
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

export type InquiryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'message_ASC' |
  'message_DESC' |
  'url_ASC' |
  'url_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'formType_ASC' |
  'formType_DESC' |
  'ip_ASC' |
  'ip_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NavigationNodeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'page_ASC' |
  'page_DESC' |
  'title_ASC' |
  'title_DESC' |
  'link_ASC' |
  'link_DESC' |
  'order_ASC' |
  'order_DESC' |
  'parent_ASC' |
  'parent_DESC' |
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

export type PageChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'auth0id_ASC' |
  'auth0id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type PageStatus =   'DRAFT' |
  'PENDING' |
  'PUBLISHED'

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
  'auth0id_ASC' |
  'auth0id_DESC' |
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
  'description_ASC' |
  'description_DESC' |
  'publishedFrom_ASC' |
  'publishedFrom_DESC' |
  'publishedTo_ASC' |
  'publishedTo_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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

export type SubscriberOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'url_ASC' |
  'url_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'ip_ASC' |
  'ip_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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

export interface DatasourceCreateInput {
  type: String
  schema: Json
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug?: DatasourceCreateslugInput | null
  datasourceItems?: DatasourceItemCreateManyWithoutDatasourceInput | null
  page?: PageCreateManyWithoutDatasourcesInput | null
}

export interface DatasourceCreateManyWithoutPageInput {
  create?: DatasourceCreateWithoutPageInput[] | DatasourceCreateWithoutPageInput | null
  connect?: DatasourceWhereUniqueInput[] | DatasourceWhereUniqueInput | null
}

export interface DatasourceCreateOneWithoutDatasourceItemsInput {
  create?: DatasourceCreateWithoutDatasourceItemsInput | null
  connect?: DatasourceWhereUniqueInput | null
}

export interface DatasourceCreateslugInput {
  set?: String[] | String | null
}

export interface DatasourceCreateWithoutDatasourceItemsInput {
  type: String
  schema: Json
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug?: DatasourceCreateslugInput | null
  page?: PageCreateManyWithoutDatasourcesInput | null
}

export interface DatasourceCreateWithoutPageInput {
  type: String
  schema: Json
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug?: DatasourceCreateslugInput | null
  datasourceItems?: DatasourceItemCreateManyWithoutDatasourceInput | null
}

export interface DatasourceItemCreateInput {
  slug: String
  content: Json
  datasource: DatasourceCreateOneWithoutDatasourceItemsInput
}

export interface DatasourceItemCreateManyWithoutDatasourceInput {
  create?: DatasourceItemCreateWithoutDatasourceInput[] | DatasourceItemCreateWithoutDatasourceInput | null
  connect?: DatasourceItemWhereUniqueInput[] | DatasourceItemWhereUniqueInput | null
}

export interface DatasourceItemCreateWithoutDatasourceInput {
  slug: String
  content: Json
}

export interface DatasourceItemSubscriptionWhereInput {
  AND?: DatasourceItemSubscriptionWhereInput[] | DatasourceItemSubscriptionWhereInput | null
  OR?: DatasourceItemSubscriptionWhereInput[] | DatasourceItemSubscriptionWhereInput | null
  NOT?: DatasourceItemSubscriptionWhereInput[] | DatasourceItemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DatasourceItemWhereInput | null
}

export interface DatasourceItemUpdateInput {
  slug?: String | null
  content?: Json | null
  datasource?: DatasourceUpdateOneWithoutDatasourceItemsInput | null
}

export interface DatasourceItemUpdateManyWithoutDatasourceInput {
  create?: DatasourceItemCreateWithoutDatasourceInput[] | DatasourceItemCreateWithoutDatasourceInput | null
  connect?: DatasourceItemWhereUniqueInput[] | DatasourceItemWhereUniqueInput | null
  disconnect?: DatasourceItemWhereUniqueInput[] | DatasourceItemWhereUniqueInput | null
  delete?: DatasourceItemWhereUniqueInput[] | DatasourceItemWhereUniqueInput | null
  update?: DatasourceItemUpdateWithWhereUniqueWithoutDatasourceInput[] | DatasourceItemUpdateWithWhereUniqueWithoutDatasourceInput | null
  upsert?: DatasourceItemUpsertWithWhereUniqueWithoutDatasourceInput[] | DatasourceItemUpsertWithWhereUniqueWithoutDatasourceInput | null
}

export interface DatasourceItemUpdateWithoutDatasourceDataInput {
  slug?: String | null
  content?: Json | null
}

export interface DatasourceItemUpdateWithWhereUniqueWithoutDatasourceInput {
  where: DatasourceItemWhereUniqueInput
  data: DatasourceItemUpdateWithoutDatasourceDataInput
}

export interface DatasourceItemUpsertWithWhereUniqueWithoutDatasourceInput {
  where: DatasourceItemWhereUniqueInput
  update: DatasourceItemUpdateWithoutDatasourceDataInput
  create: DatasourceItemCreateWithoutDatasourceInput
}

export interface DatasourceItemWhereInput {
  AND?: DatasourceItemWhereInput[] | DatasourceItemWhereInput | null
  OR?: DatasourceItemWhereInput[] | DatasourceItemWhereInput | null
  NOT?: DatasourceItemWhereInput[] | DatasourceItemWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  datasource?: DatasourceWhereInput | null
}

export interface DatasourceItemWhereUniqueInput {
  id?: ID_Input | null
}

export interface DatasourceSubscriptionWhereInput {
  AND?: DatasourceSubscriptionWhereInput[] | DatasourceSubscriptionWhereInput | null
  OR?: DatasourceSubscriptionWhereInput[] | DatasourceSubscriptionWhereInput | null
  NOT?: DatasourceSubscriptionWhereInput[] | DatasourceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DatasourceWhereInput | null
}

export interface DatasourceUpdateInput {
  type?: String | null
  schema?: Json | null
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug?: DatasourceUpdateslugInput | null
  datasourceItems?: DatasourceItemUpdateManyWithoutDatasourceInput | null
  page?: PageUpdateManyWithoutDatasourcesInput | null
}

export interface DatasourceUpdateManyWithoutPageInput {
  create?: DatasourceCreateWithoutPageInput[] | DatasourceCreateWithoutPageInput | null
  connect?: DatasourceWhereUniqueInput[] | DatasourceWhereUniqueInput | null
  disconnect?: DatasourceWhereUniqueInput[] | DatasourceWhereUniqueInput | null
  delete?: DatasourceWhereUniqueInput[] | DatasourceWhereUniqueInput | null
  update?: DatasourceUpdateWithWhereUniqueWithoutPageInput[] | DatasourceUpdateWithWhereUniqueWithoutPageInput | null
  upsert?: DatasourceUpsertWithWhereUniqueWithoutPageInput[] | DatasourceUpsertWithWhereUniqueWithoutPageInput | null
}

export interface DatasourceUpdateOneWithoutDatasourceItemsInput {
  create?: DatasourceCreateWithoutDatasourceItemsInput | null
  connect?: DatasourceWhereUniqueInput | null
  delete?: Boolean | null
  update?: DatasourceUpdateWithoutDatasourceItemsDataInput | null
  upsert?: DatasourceUpsertWithoutDatasourceItemsInput | null
}

export interface DatasourceUpdateslugInput {
  set?: String[] | String | null
}

export interface DatasourceUpdateWithoutDatasourceItemsDataInput {
  type?: String | null
  schema?: Json | null
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug?: DatasourceUpdateslugInput | null
  page?: PageUpdateManyWithoutDatasourcesInput | null
}

export interface DatasourceUpdateWithoutPageDataInput {
  type?: String | null
  schema?: Json | null
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug?: DatasourceUpdateslugInput | null
  datasourceItems?: DatasourceItemUpdateManyWithoutDatasourceInput | null
}

export interface DatasourceUpdateWithWhereUniqueWithoutPageInput {
  where: DatasourceWhereUniqueInput
  data: DatasourceUpdateWithoutPageDataInput
}

export interface DatasourceUpsertWithoutDatasourceItemsInput {
  update: DatasourceUpdateWithoutDatasourceItemsDataInput
  create: DatasourceCreateWithoutDatasourceItemsInput
}

export interface DatasourceUpsertWithWhereUniqueWithoutPageInput {
  where: DatasourceWhereUniqueInput
  update: DatasourceUpdateWithoutPageDataInput
  create: DatasourceCreateWithoutPageInput
}

export interface DatasourceWhereInput {
  AND?: DatasourceWhereInput[] | DatasourceWhereInput | null
  OR?: DatasourceWhereInput[] | DatasourceWhereInput | null
  NOT?: DatasourceWhereInput[] | DatasourceWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  type?: String | null
  type_not?: String | null
  type_in?: String[] | String | null
  type_not_in?: String[] | String | null
  type_lt?: String | null
  type_lte?: String | null
  type_gt?: String | null
  type_gte?: String | null
  type_contains?: String | null
  type_not_contains?: String | null
  type_starts_with?: String | null
  type_not_starts_with?: String | null
  type_ends_with?: String | null
  type_not_ends_with?: String | null
  displayInNavigation?: Boolean | null
  displayInNavigation_not?: Boolean | null
  datasourceItems_every?: DatasourceItemWhereInput | null
  datasourceItems_some?: DatasourceItemWhereInput | null
  datasourceItems_none?: DatasourceItemWhereInput | null
  page_every?: PageWhereInput | null
  page_some?: PageWhereInput | null
  page_none?: PageWhereInput | null
}

export interface DatasourceWhereUniqueInput {
  id?: ID_Input | null
}

export interface FileCreateInput {
  hash: String
  category?: String | null
  filename: String
  mimetype?: String | null
  size?: Int | null
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FileWhereInput | null
}

export interface FileUpdateInput {
  hash?: String | null
  category?: String | null
  filename?: String | null
  mimetype?: String | null
  size?: Int | null
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput | null
  OR?: FileWhereInput[] | FileWhereInput | null
  NOT?: FileWhereInput[] | FileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  hash?: String | null
  hash_not?: String | null
  hash_in?: String[] | String | null
  hash_not_in?: String[] | String | null
  hash_lt?: String | null
  hash_lte?: String | null
  hash_gt?: String | null
  hash_gte?: String | null
  hash_contains?: String | null
  hash_not_contains?: String | null
  hash_starts_with?: String | null
  hash_not_starts_with?: String | null
  hash_ends_with?: String | null
  hash_not_ends_with?: String | null
  category?: String | null
  category_not?: String | null
  category_in?: String[] | String | null
  category_not_in?: String[] | String | null
  category_lt?: String | null
  category_lte?: String | null
  category_gt?: String | null
  category_gte?: String | null
  category_contains?: String | null
  category_not_contains?: String | null
  category_starts_with?: String | null
  category_not_starts_with?: String | null
  category_ends_with?: String | null
  category_not_ends_with?: String | null
  filename?: String | null
  filename_not?: String | null
  filename_in?: String[] | String | null
  filename_not_in?: String[] | String | null
  filename_lt?: String | null
  filename_lte?: String | null
  filename_gt?: String | null
  filename_gte?: String | null
  filename_contains?: String | null
  filename_not_contains?: String | null
  filename_starts_with?: String | null
  filename_not_starts_with?: String | null
  filename_ends_with?: String | null
  filename_not_ends_with?: String | null
  mimetype?: String | null
  mimetype_not?: String | null
  mimetype_in?: String[] | String | null
  mimetype_not_in?: String[] | String | null
  mimetype_lt?: String | null
  mimetype_lte?: String | null
  mimetype_gt?: String | null
  mimetype_gte?: String | null
  mimetype_contains?: String | null
  mimetype_not_contains?: String | null
  mimetype_starts_with?: String | null
  mimetype_not_starts_with?: String | null
  mimetype_ends_with?: String | null
  mimetype_not_ends_with?: String | null
  size?: Int | null
  size_not?: Int | null
  size_in?: Int[] | Int | null
  size_not_in?: Int[] | Int | null
  size_lt?: Int | null
  size_lte?: Int | null
  size_gt?: Int | null
  size_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface FileWhereUniqueInput {
  id?: ID_Input | null
  hash?: String | null
}

export interface InquiryCreateInput {
  message: Json
  url?: String | null
  formType?: String | null
  ip?: String | null
}

export interface InquirySubscriptionWhereInput {
  AND?: InquirySubscriptionWhereInput[] | InquirySubscriptionWhereInput | null
  OR?: InquirySubscriptionWhereInput[] | InquirySubscriptionWhereInput | null
  NOT?: InquirySubscriptionWhereInput[] | InquirySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: InquiryWhereInput | null
}

export interface InquiryUpdateInput {
  message?: Json | null
  url?: String | null
  formType?: String | null
  ip?: String | null
}

export interface InquiryWhereInput {
  AND?: InquiryWhereInput[] | InquiryWhereInput | null
  OR?: InquiryWhereInput[] | InquiryWhereInput | null
  NOT?: InquiryWhereInput[] | InquiryWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  formType?: String | null
  formType_not?: String | null
  formType_in?: String[] | String | null
  formType_not_in?: String[] | String | null
  formType_lt?: String | null
  formType_lte?: String | null
  formType_gt?: String | null
  formType_gte?: String | null
  formType_contains?: String | null
  formType_not_contains?: String | null
  formType_starts_with?: String | null
  formType_not_starts_with?: String | null
  formType_ends_with?: String | null
  formType_not_ends_with?: String | null
  ip?: String | null
  ip_not?: String | null
  ip_in?: String[] | String | null
  ip_not_in?: String[] | String | null
  ip_lt?: String | null
  ip_lte?: String | null
  ip_gt?: String | null
  ip_gte?: String | null
  ip_contains?: String | null
  ip_not_contains?: String | null
  ip_starts_with?: String | null
  ip_not_starts_with?: String | null
  ip_ends_with?: String | null
  ip_not_ends_with?: String | null
}

export interface InquiryWhereUniqueInput {
  id?: ID_Input | null
}

export interface LanguageCreateInput {
  code: String
  name: String
  englishName: String
  isDefault?: Boolean | null
  isEnabled?: Boolean | null
}

export interface LanguageCreateManyInput {
  create?: LanguageCreateInput[] | LanguageCreateInput | null
  connect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
}

export interface LanguageCreateOneInput {
  create?: LanguageCreateInput | null
  connect?: LanguageWhereUniqueInput | null
}

export interface LanguageSubscriptionWhereInput {
  AND?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput | null
  OR?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput | null
  NOT?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LanguageWhereInput | null
}

export interface LanguageUpdateDataInput {
  code?: String | null
  name?: String | null
  englishName?: String | null
  isDefault?: Boolean | null
  isEnabled?: Boolean | null
}

export interface LanguageUpdateInput {
  code?: String | null
  name?: String | null
  englishName?: String | null
  isDefault?: Boolean | null
  isEnabled?: Boolean | null
}

export interface LanguageUpdateManyInput {
  create?: LanguageCreateInput[] | LanguageCreateInput | null
  connect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
  disconnect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
  delete?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
  update?: LanguageUpdateWithWhereUniqueNestedInput[] | LanguageUpdateWithWhereUniqueNestedInput | null
  upsert?: LanguageUpsertWithWhereUniqueNestedInput[] | LanguageUpsertWithWhereUniqueNestedInput | null
}

export interface LanguageUpdateOneInput {
  create?: LanguageCreateInput | null
  connect?: LanguageWhereUniqueInput | null
  delete?: Boolean | null
  update?: LanguageUpdateDataInput | null
  upsert?: LanguageUpsertNestedInput | null
}

export interface LanguageUpdateWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput
  data: LanguageUpdateDataInput
}

export interface LanguageUpsertNestedInput {
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface LanguageUpsertWithWhereUniqueNestedInput {
  where: LanguageWhereUniqueInput
  update: LanguageUpdateDataInput
  create: LanguageCreateInput
}

export interface LanguageWhereInput {
  AND?: LanguageWhereInput[] | LanguageWhereInput | null
  OR?: LanguageWhereInput[] | LanguageWhereInput | null
  NOT?: LanguageWhereInput[] | LanguageWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  code?: String | null
  code_not?: String | null
  code_in?: String[] | String | null
  code_not_in?: String[] | String | null
  code_lt?: String | null
  code_lte?: String | null
  code_gt?: String | null
  code_gte?: String | null
  code_contains?: String | null
  code_not_contains?: String | null
  code_starts_with?: String | null
  code_not_starts_with?: String | null
  code_ends_with?: String | null
  code_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  englishName?: String | null
  englishName_not?: String | null
  englishName_in?: String[] | String | null
  englishName_not_in?: String[] | String | null
  englishName_lt?: String | null
  englishName_lte?: String | null
  englishName_gt?: String | null
  englishName_gte?: String | null
  englishName_contains?: String | null
  englishName_not_contains?: String | null
  englishName_starts_with?: String | null
  englishName_not_starts_with?: String | null
  englishName_ends_with?: String | null
  englishName_not_ends_with?: String | null
  isDefault?: Boolean | null
  isDefault_not?: Boolean | null
  isEnabled?: Boolean | null
  isEnabled_not?: Boolean | null
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input | null
}

export interface NavigationCreateInput {
  name: String
  website: WebsiteCreateOneInput
  nodes?: NavigationNodeCreateManyWithoutNavigationInput | null
}

export interface NavigationCreateOneWithoutNodesInput {
  create?: NavigationCreateWithoutNodesInput | null
  connect?: NavigationWhereUniqueInput | null
}

export interface NavigationCreateWithoutNodesInput {
  name: String
  website: WebsiteCreateOneInput
}

export interface NavigationNodeCreateInput {
  page?: ID_Input | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Input | null
  navigation: NavigationCreateOneWithoutNodesInput
}

export interface NavigationNodeCreateManyWithoutNavigationInput {
  create?: NavigationNodeCreateWithoutNavigationInput[] | NavigationNodeCreateWithoutNavigationInput | null
  connect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
}

export interface NavigationNodeCreateWithoutNavigationInput {
  page?: ID_Input | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Input | null
}

export interface NavigationNodeSubscriptionWhereInput {
  AND?: NavigationNodeSubscriptionWhereInput[] | NavigationNodeSubscriptionWhereInput | null
  OR?: NavigationNodeSubscriptionWhereInput[] | NavigationNodeSubscriptionWhereInput | null
  NOT?: NavigationNodeSubscriptionWhereInput[] | NavigationNodeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NavigationNodeWhereInput | null
}

export interface NavigationNodeUpdateInput {
  page?: ID_Input | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Input | null
  navigation?: NavigationUpdateOneWithoutNodesInput | null
}

export interface NavigationNodeUpdateManyWithoutNavigationInput {
  create?: NavigationNodeCreateWithoutNavigationInput[] | NavigationNodeCreateWithoutNavigationInput | null
  connect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
  disconnect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
  delete?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
  update?: NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput[] | NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput | null
  upsert?: NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput[] | NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput | null
}

export interface NavigationNodeUpdateWithoutNavigationDataInput {
  page?: ID_Input | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Input | null
}

export interface NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput {
  where: NavigationNodeWhereUniqueInput
  data: NavigationNodeUpdateWithoutNavigationDataInput
}

export interface NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput {
  where: NavigationNodeWhereUniqueInput
  update: NavigationNodeUpdateWithoutNavigationDataInput
  create: NavigationNodeCreateWithoutNavigationInput
}

export interface NavigationNodeWhereInput {
  AND?: NavigationNodeWhereInput[] | NavigationNodeWhereInput | null
  OR?: NavigationNodeWhereInput[] | NavigationNodeWhereInput | null
  NOT?: NavigationNodeWhereInput[] | NavigationNodeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  page?: ID_Input | null
  page_not?: ID_Input | null
  page_in?: ID_Output[] | ID_Output | null
  page_not_in?: ID_Output[] | ID_Output | null
  page_lt?: ID_Input | null
  page_lte?: ID_Input | null
  page_gt?: ID_Input | null
  page_gte?: ID_Input | null
  page_contains?: ID_Input | null
  page_not_contains?: ID_Input | null
  page_starts_with?: ID_Input | null
  page_not_starts_with?: ID_Input | null
  page_ends_with?: ID_Input | null
  page_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  link?: String | null
  link_not?: String | null
  link_in?: String[] | String | null
  link_not_in?: String[] | String | null
  link_lt?: String | null
  link_lte?: String | null
  link_gt?: String | null
  link_gte?: String | null
  link_contains?: String | null
  link_not_contains?: String | null
  link_starts_with?: String | null
  link_not_starts_with?: String | null
  link_ends_with?: String | null
  link_not_ends_with?: String | null
  order?: Int | null
  order_not?: Int | null
  order_in?: Int[] | Int | null
  order_not_in?: Int[] | Int | null
  order_lt?: Int | null
  order_lte?: Int | null
  order_gt?: Int | null
  order_gte?: Int | null
  parent?: ID_Input | null
  parent_not?: ID_Input | null
  parent_in?: ID_Output[] | ID_Output | null
  parent_not_in?: ID_Output[] | ID_Output | null
  parent_lt?: ID_Input | null
  parent_lte?: ID_Input | null
  parent_gt?: ID_Input | null
  parent_gte?: ID_Input | null
  parent_contains?: ID_Input | null
  parent_not_contains?: ID_Input | null
  parent_starts_with?: ID_Input | null
  parent_not_starts_with?: ID_Input | null
  parent_ends_with?: ID_Input | null
  parent_not_ends_with?: ID_Input | null
  navigation?: NavigationWhereInput | null
}

export interface NavigationNodeWhereUniqueInput {
  id?: ID_Input | null
}

export interface NavigationSubscriptionWhereInput {
  AND?: NavigationSubscriptionWhereInput[] | NavigationSubscriptionWhereInput | null
  OR?: NavigationSubscriptionWhereInput[] | NavigationSubscriptionWhereInput | null
  NOT?: NavigationSubscriptionWhereInput[] | NavigationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NavigationWhereInput | null
}

export interface NavigationUpdateInput {
  name?: String | null
  website?: WebsiteUpdateOneInput | null
  nodes?: NavigationNodeUpdateManyWithoutNavigationInput | null
}

export interface NavigationUpdateOneWithoutNodesInput {
  create?: NavigationCreateWithoutNodesInput | null
  connect?: NavigationWhereUniqueInput | null
  delete?: Boolean | null
  update?: NavigationUpdateWithoutNodesDataInput | null
  upsert?: NavigationUpsertWithoutNodesInput | null
}

export interface NavigationUpdateWithoutNodesDataInput {
  name?: String | null
  website?: WebsiteUpdateOneInput | null
}

export interface NavigationUpsertWithoutNodesInput {
  update: NavigationUpdateWithoutNodesDataInput
  create: NavigationCreateWithoutNodesInput
}

export interface NavigationWhereInput {
  AND?: NavigationWhereInput[] | NavigationWhereInput | null
  OR?: NavigationWhereInput[] | NavigationWhereInput | null
  NOT?: NavigationWhereInput[] | NavigationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  website?: WebsiteWhereInput | null
  nodes_every?: NavigationNodeWhereInput | null
  nodes_some?: NavigationNodeWhereInput | null
  nodes_none?: NavigationNodeWhereInput | null
}

export interface NavigationWhereUniqueInput {
  id?: ID_Input | null
}

export interface PageChatCreateInput {
  text: String
  auth0id?: ID_Input | null
  page: PageCreateOneWithoutChatsInput
}

export interface PageChatCreateManyWithoutPageInput {
  create?: PageChatCreateWithoutPageInput[] | PageChatCreateWithoutPageInput | null
  connect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
}

export interface PageChatCreateWithoutPageInput {
  text: String
  auth0id?: ID_Input | null
}

export interface PageChatSubscriptionWhereInput {
  AND?: PageChatSubscriptionWhereInput[] | PageChatSubscriptionWhereInput | null
  OR?: PageChatSubscriptionWhereInput[] | PageChatSubscriptionWhereInput | null
  NOT?: PageChatSubscriptionWhereInput[] | PageChatSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PageChatWhereInput | null
}

export interface PageChatUpdateInput {
  text?: String | null
  auth0id?: ID_Input | null
  page?: PageUpdateOneWithoutChatsInput | null
}

export interface PageChatUpdateManyWithoutPageInput {
  create?: PageChatCreateWithoutPageInput[] | PageChatCreateWithoutPageInput | null
  connect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
  disconnect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
  delete?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
  update?: PageChatUpdateWithWhereUniqueWithoutPageInput[] | PageChatUpdateWithWhereUniqueWithoutPageInput | null
  upsert?: PageChatUpsertWithWhereUniqueWithoutPageInput[] | PageChatUpsertWithWhereUniqueWithoutPageInput | null
}

export interface PageChatUpdateWithoutPageDataInput {
  text?: String | null
  auth0id?: ID_Input | null
}

export interface PageChatUpdateWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput
  data: PageChatUpdateWithoutPageDataInput
}

export interface PageChatUpsertWithWhereUniqueWithoutPageInput {
  where: PageChatWhereUniqueInput
  update: PageChatUpdateWithoutPageDataInput
  create: PageChatCreateWithoutPageInput
}

export interface PageChatWhereInput {
  AND?: PageChatWhereInput[] | PageChatWhereInput | null
  OR?: PageChatWhereInput[] | PageChatWhereInput | null
  NOT?: PageChatWhereInput[] | PageChatWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  auth0id?: ID_Input | null
  auth0id_not?: ID_Input | null
  auth0id_in?: ID_Output[] | ID_Output | null
  auth0id_not_in?: ID_Output[] | ID_Output | null
  auth0id_lt?: ID_Input | null
  auth0id_lte?: ID_Input | null
  auth0id_gt?: ID_Input | null
  auth0id_gte?: ID_Input | null
  auth0id_contains?: ID_Input | null
  auth0id_not_contains?: ID_Input | null
  auth0id_starts_with?: ID_Input | null
  auth0id_not_starts_with?: ID_Input | null
  auth0id_ends_with?: ID_Input | null
  auth0id_not_ends_with?: ID_Input | null
  page?: PageWhereInput | null
}

export interface PageChatWhereUniqueInput {
  id?: ID_Input | null
}

export interface PageCreateInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
  datasources?: DatasourceCreateManyWithoutPageInput | null
}

export interface PageCreateManyWithoutDatasourcesInput {
  create?: PageCreateWithoutDatasourcesInput[] | PageCreateWithoutDatasourcesInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
}

export interface PageCreateManyWithoutTagsInput {
  create?: PageCreateWithoutTagsInput[] | PageCreateWithoutTagsInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
}

export interface PageCreateManyWithoutWebsiteInput {
  create?: PageCreateWithoutWebsiteInput[] | PageCreateWithoutWebsiteInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
}

export interface PageCreateOneInput {
  create?: PageCreateInput | null
  connect?: PageWhereUniqueInput | null
}

export interface PageCreateOneWithoutChatsInput {
  create?: PageCreateWithoutChatsInput | null
  connect?: PageWhereUniqueInput | null
}

export interface PageCreateOneWithoutPluginInput {
  create?: PageCreateWithoutPluginInput | null
  connect?: PageWhereUniqueInput | null
}

export interface PageCreateOneWithoutTranslationsInput {
  create?: PageCreateWithoutTranslationsInput | null
  connect?: PageWhereUniqueInput | null
}

export interface PageCreateWithoutChatsInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
  datasources?: DatasourceCreateManyWithoutPageInput | null
}

export interface PageCreateWithoutDatasourcesInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
}

export interface PageCreateWithoutPluginInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  datasources?: DatasourceCreateManyWithoutPageInput | null
}

export interface PageCreateWithoutTagsInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
  datasources?: DatasourceCreateManyWithoutPageInput | null
}

export interface PageCreateWithoutTranslationsInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
  datasources?: DatasourceCreateManyWithoutPageInput | null
}

export interface PageCreateWithoutWebsiteInput {
  parent?: PageCreateOneInput | null
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
  datasources?: DatasourceCreateManyWithoutPageInput | null
}

export interface PagePluginCreateInput {
  plugin: String
  content?: Json | null
  page: PageCreateOneWithoutPluginInput
  language: LanguageCreateOneInput
}

export interface PagePluginCreateOneWithoutPageInput {
  create?: PagePluginCreateWithoutPageInput | null
  connect?: PagePluginWhereUniqueInput | null
}

export interface PagePluginCreateWithoutPageInput {
  plugin: String
  content?: Json | null
  language: LanguageCreateOneInput
}

export interface PagePluginSubscriptionWhereInput {
  AND?: PagePluginSubscriptionWhereInput[] | PagePluginSubscriptionWhereInput | null
  OR?: PagePluginSubscriptionWhereInput[] | PagePluginSubscriptionWhereInput | null
  NOT?: PagePluginSubscriptionWhereInput[] | PagePluginSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PagePluginWhereInput | null
}

export interface PagePluginUpdateInput {
  plugin?: String | null
  content?: Json | null
  page?: PageUpdateOneWithoutPluginInput | null
  language?: LanguageUpdateOneInput | null
}

export interface PagePluginUpdateOneWithoutPageInput {
  create?: PagePluginCreateWithoutPageInput | null
  connect?: PagePluginWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PagePluginUpdateWithoutPageDataInput | null
  upsert?: PagePluginUpsertWithoutPageInput | null
}

export interface PagePluginUpdateWithoutPageDataInput {
  plugin?: String | null
  content?: Json | null
  language?: LanguageUpdateOneInput | null
}

export interface PagePluginUpsertWithoutPageInput {
  update: PagePluginUpdateWithoutPageDataInput
  create: PagePluginCreateWithoutPageInput
}

export interface PagePluginWhereInput {
  AND?: PagePluginWhereInput[] | PagePluginWhereInput | null
  OR?: PagePluginWhereInput[] | PagePluginWhereInput | null
  NOT?: PagePluginWhereInput[] | PagePluginWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  plugin?: String | null
  plugin_not?: String | null
  plugin_in?: String[] | String | null
  plugin_not_in?: String[] | String | null
  plugin_lt?: String | null
  plugin_lte?: String | null
  plugin_gt?: String | null
  plugin_gte?: String | null
  plugin_contains?: String | null
  plugin_not_contains?: String | null
  plugin_starts_with?: String | null
  plugin_not_starts_with?: String | null
  plugin_ends_with?: String | null
  plugin_not_ends_with?: String | null
  page?: PageWhereInput | null
  language?: LanguageWhereInput | null
}

export interface PagePluginWhereUniqueInput {
  id?: ID_Input | null
}

export interface PageSubscriptionWhereInput {
  AND?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput | null
  OR?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput | null
  NOT?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PageWhereInput | null
}

export interface PageTaskCreateInput {
  done?: Boolean | null
  name: String
  description: String
  auth0id?: ID_Input | null
  pageTranslation: PageTranslationCreateOneWithoutTasksInput
}

export interface PageTaskCreateManyWithoutPageTranslationInput {
  create?: PageTaskCreateWithoutPageTranslationInput[] | PageTaskCreateWithoutPageTranslationInput | null
  connect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
}

export interface PageTaskCreateWithoutPageTranslationInput {
  done?: Boolean | null
  name: String
  description: String
  auth0id?: ID_Input | null
}

export interface PageTaskSubscriptionWhereInput {
  AND?: PageTaskSubscriptionWhereInput[] | PageTaskSubscriptionWhereInput | null
  OR?: PageTaskSubscriptionWhereInput[] | PageTaskSubscriptionWhereInput | null
  NOT?: PageTaskSubscriptionWhereInput[] | PageTaskSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PageTaskWhereInput | null
}

export interface PageTaskUpdateInput {
  done?: Boolean | null
  name?: String | null
  description?: String | null
  auth0id?: ID_Input | null
  pageTranslation?: PageTranslationUpdateOneWithoutTasksInput | null
}

export interface PageTaskUpdateManyWithoutPageTranslationInput {
  create?: PageTaskCreateWithoutPageTranslationInput[] | PageTaskCreateWithoutPageTranslationInput | null
  connect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
  disconnect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
  delete?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
  update?: PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput | null
  upsert?: PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput | null
}

export interface PageTaskUpdateWithoutPageTranslationDataInput {
  done?: Boolean | null
  name?: String | null
  description?: String | null
  auth0id?: ID_Input | null
}

export interface PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput
  data: PageTaskUpdateWithoutPageTranslationDataInput
}

export interface PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput {
  where: PageTaskWhereUniqueInput
  update: PageTaskUpdateWithoutPageTranslationDataInput
  create: PageTaskCreateWithoutPageTranslationInput
}

export interface PageTaskWhereInput {
  AND?: PageTaskWhereInput[] | PageTaskWhereInput | null
  OR?: PageTaskWhereInput[] | PageTaskWhereInput | null
  NOT?: PageTaskWhereInput[] | PageTaskWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  done?: Boolean | null
  done_not?: Boolean | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  auth0id?: ID_Input | null
  auth0id_not?: ID_Input | null
  auth0id_in?: ID_Output[] | ID_Output | null
  auth0id_not_in?: ID_Output[] | ID_Output | null
  auth0id_lt?: ID_Input | null
  auth0id_lte?: ID_Input | null
  auth0id_gt?: ID_Input | null
  auth0id_gte?: ID_Input | null
  auth0id_contains?: ID_Input | null
  auth0id_not_contains?: ID_Input | null
  auth0id_starts_with?: ID_Input | null
  auth0id_not_starts_with?: ID_Input | null
  auth0id_ends_with?: ID_Input | null
  auth0id_not_ends_with?: ID_Input | null
  pageTranslation?: PageTranslationWhereInput | null
}

export interface PageTaskWhereUniqueInput {
  id?: ID_Input | null
}

export interface PageTranslationCreateInput {
  url: String
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  page: PageCreateOneWithoutTranslationsInput
  language: LanguageCreateOneInput
  tasks?: PageTaskCreateManyWithoutPageTranslationInput | null
}

export interface PageTranslationCreateManyWithoutPageInput {
  create?: PageTranslationCreateWithoutPageInput[] | PageTranslationCreateWithoutPageInput | null
  connect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
}

export interface PageTranslationCreateOneWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput | null
  connect?: PageTranslationWhereUniqueInput | null
}

export interface PageTranslationCreateWithoutPageInput {
  url: String
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  language: LanguageCreateOneInput
  tasks?: PageTaskCreateManyWithoutPageTranslationInput | null
}

export interface PageTranslationCreateWithoutTasksInput {
  url: String
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  page: PageCreateOneWithoutTranslationsInput
  language: LanguageCreateOneInput
}

export interface PageTranslationSubscriptionWhereInput {
  AND?: PageTranslationSubscriptionWhereInput[] | PageTranslationSubscriptionWhereInput | null
  OR?: PageTranslationSubscriptionWhereInput[] | PageTranslationSubscriptionWhereInput | null
  NOT?: PageTranslationSubscriptionWhereInput[] | PageTranslationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PageTranslationWhereInput | null
}

export interface PageTranslationUpdateInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  page?: PageUpdateOneWithoutTranslationsInput | null
  language?: LanguageUpdateOneInput | null
  tasks?: PageTaskUpdateManyWithoutPageTranslationInput | null
}

export interface PageTranslationUpdateManyWithoutPageInput {
  create?: PageTranslationCreateWithoutPageInput[] | PageTranslationCreateWithoutPageInput | null
  connect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
  disconnect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
  delete?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
  update?: PageTranslationUpdateWithWhereUniqueWithoutPageInput[] | PageTranslationUpdateWithWhereUniqueWithoutPageInput | null
  upsert?: PageTranslationUpsertWithWhereUniqueWithoutPageInput[] | PageTranslationUpsertWithWhereUniqueWithoutPageInput | null
}

export interface PageTranslationUpdateOneWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput | null
  connect?: PageTranslationWhereUniqueInput | null
  delete?: Boolean | null
  update?: PageTranslationUpdateWithoutTasksDataInput | null
  upsert?: PageTranslationUpsertWithoutTasksInput | null
}

export interface PageTranslationUpdateWithoutPageDataInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  language?: LanguageUpdateOneInput | null
  tasks?: PageTaskUpdateManyWithoutPageTranslationInput | null
}

export interface PageTranslationUpdateWithoutTasksDataInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  page?: PageUpdateOneWithoutTranslationsInput | null
  language?: LanguageUpdateOneInput | null
}

export interface PageTranslationUpdateWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput
  data: PageTranslationUpdateWithoutPageDataInput
}

export interface PageTranslationUpsertWithoutTasksInput {
  update: PageTranslationUpdateWithoutTasksDataInput
  create: PageTranslationCreateWithoutTasksInput
}

export interface PageTranslationUpsertWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput
  update: PageTranslationUpdateWithoutPageDataInput
  create: PageTranslationCreateWithoutPageInput
}

export interface PageTranslationWhereInput {
  AND?: PageTranslationWhereInput[] | PageTranslationWhereInput | null
  OR?: PageTranslationWhereInput[] | PageTranslationWhereInput | null
  NOT?: PageTranslationWhereInput[] | PageTranslationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  status?: PageStatus | null
  status_not?: PageStatus | null
  status_in?: PageStatus[] | PageStatus | null
  status_not_in?: PageStatus[] | PageStatus | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  publishedFrom?: DateTime | null
  publishedFrom_not?: DateTime | null
  publishedFrom_in?: DateTime[] | DateTime | null
  publishedFrom_not_in?: DateTime[] | DateTime | null
  publishedFrom_lt?: DateTime | null
  publishedFrom_lte?: DateTime | null
  publishedFrom_gt?: DateTime | null
  publishedFrom_gte?: DateTime | null
  publishedTo?: DateTime | null
  publishedTo_not?: DateTime | null
  publishedTo_in?: DateTime[] | DateTime | null
  publishedTo_not_in?: DateTime[] | DateTime | null
  publishedTo_lt?: DateTime | null
  publishedTo_lte?: DateTime | null
  publishedTo_gt?: DateTime | null
  publishedTo_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  page?: PageWhereInput | null
  language?: LanguageWhereInput | null
  tasks_every?: PageTaskWhereInput | null
  tasks_some?: PageTaskWhereInput | null
  tasks_none?: PageTaskWhereInput | null
}

export interface PageTranslationWhereUniqueInput {
  id?: ID_Input | null
}

export interface PageTypeCreateInput {
  name: String
  content?: Json | null
  plugins?: PageTypeCreatepluginsInput | null
  website: WebsiteCreateOneWithoutPageTypesInput
}

export interface PageTypeCreateManyWithoutWebsiteInput {
  create?: PageTypeCreateWithoutWebsiteInput[] | PageTypeCreateWithoutWebsiteInput | null
  connect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
}

export interface PageTypeCreateOneInput {
  create?: PageTypeCreateInput | null
  connect?: PageTypeWhereUniqueInput | null
}

export interface PageTypeCreatepluginsInput {
  set?: String[] | String | null
}

export interface PageTypeCreateWithoutWebsiteInput {
  name: String
  content?: Json | null
  plugins?: PageTypeCreatepluginsInput | null
}

export interface PageTypeSubscriptionWhereInput {
  AND?: PageTypeSubscriptionWhereInput[] | PageTypeSubscriptionWhereInput | null
  OR?: PageTypeSubscriptionWhereInput[] | PageTypeSubscriptionWhereInput | null
  NOT?: PageTypeSubscriptionWhereInput[] | PageTypeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PageTypeWhereInput | null
}

export interface PageTypeUpdateDataInput {
  name?: String | null
  content?: Json | null
  plugins?: PageTypeUpdatepluginsInput | null
  website?: WebsiteUpdateOneWithoutPageTypesInput | null
}

export interface PageTypeUpdateInput {
  name?: String | null
  content?: Json | null
  plugins?: PageTypeUpdatepluginsInput | null
  website?: WebsiteUpdateOneWithoutPageTypesInput | null
}

export interface PageTypeUpdateManyWithoutWebsiteInput {
  create?: PageTypeCreateWithoutWebsiteInput[] | PageTypeCreateWithoutWebsiteInput | null
  connect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
  disconnect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
  delete?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
  update?: PageTypeUpdateWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpdateWithWhereUniqueWithoutWebsiteInput | null
  upsert?: PageTypeUpsertWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpsertWithWhereUniqueWithoutWebsiteInput | null
}

export interface PageTypeUpdateOneInput {
  create?: PageTypeCreateInput | null
  connect?: PageTypeWhereUniqueInput | null
  delete?: Boolean | null
  update?: PageTypeUpdateDataInput | null
  upsert?: PageTypeUpsertNestedInput | null
}

export interface PageTypeUpdatepluginsInput {
  set?: String[] | String | null
}

export interface PageTypeUpdateWithoutWebsiteDataInput {
  name?: String | null
  content?: Json | null
  plugins?: PageTypeUpdatepluginsInput | null
}

export interface PageTypeUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput
  data: PageTypeUpdateWithoutWebsiteDataInput
}

export interface PageTypeUpsertNestedInput {
  update: PageTypeUpdateDataInput
  create: PageTypeCreateInput
}

export interface PageTypeUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageTypeWhereUniqueInput
  update: PageTypeUpdateWithoutWebsiteDataInput
  create: PageTypeCreateWithoutWebsiteInput
}

export interface PageTypeWhereInput {
  AND?: PageTypeWhereInput[] | PageTypeWhereInput | null
  OR?: PageTypeWhereInput[] | PageTypeWhereInput | null
  NOT?: PageTypeWhereInput[] | PageTypeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  website?: WebsiteWhereInput | null
}

export interface PageTypeWhereUniqueInput {
  id?: ID_Input | null
}

export interface PageUpdateDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneWithoutPagesInput | null
  type?: PageTypeUpdateOneInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
  datasources?: DatasourceUpdateManyWithoutPageInput | null
}

export interface PageUpdateInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneWithoutPagesInput | null
  type?: PageTypeUpdateOneInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
  datasources?: DatasourceUpdateManyWithoutPageInput | null
}

export interface PageUpdateManyWithoutDatasourcesInput {
  create?: PageCreateWithoutDatasourcesInput[] | PageCreateWithoutDatasourcesInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  update?: PageUpdateWithWhereUniqueWithoutDatasourcesInput[] | PageUpdateWithWhereUniqueWithoutDatasourcesInput | null
  upsert?: PageUpsertWithWhereUniqueWithoutDatasourcesInput[] | PageUpsertWithWhereUniqueWithoutDatasourcesInput | null
}

export interface PageUpdateManyWithoutTagsInput {
  create?: PageCreateWithoutTagsInput[] | PageCreateWithoutTagsInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  update?: PageUpdateWithWhereUniqueWithoutTagsInput[] | PageUpdateWithWhereUniqueWithoutTagsInput | null
  upsert?: PageUpsertWithWhereUniqueWithoutTagsInput[] | PageUpsertWithWhereUniqueWithoutTagsInput | null
}

export interface PageUpdateManyWithoutWebsiteInput {
  create?: PageCreateWithoutWebsiteInput[] | PageCreateWithoutWebsiteInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  update?: PageUpdateWithWhereUniqueWithoutWebsiteInput[] | PageUpdateWithWhereUniqueWithoutWebsiteInput | null
  upsert?: PageUpsertWithWhereUniqueWithoutWebsiteInput[] | PageUpsertWithWhereUniqueWithoutWebsiteInput | null
}

export interface PageUpdateOneInput {
  create?: PageCreateInput | null
  connect?: PageWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: PageUpdateDataInput | null
  upsert?: PageUpsertNestedInput | null
}

export interface PageUpdateOneWithoutChatsInput {
  create?: PageCreateWithoutChatsInput | null
  connect?: PageWhereUniqueInput | null
  delete?: Boolean | null
  update?: PageUpdateWithoutChatsDataInput | null
  upsert?: PageUpsertWithoutChatsInput | null
}

export interface PageUpdateOneWithoutPluginInput {
  create?: PageCreateWithoutPluginInput | null
  connect?: PageWhereUniqueInput | null
  delete?: Boolean | null
  update?: PageUpdateWithoutPluginDataInput | null
  upsert?: PageUpsertWithoutPluginInput | null
}

export interface PageUpdateOneWithoutTranslationsInput {
  create?: PageCreateWithoutTranslationsInput | null
  connect?: PageWhereUniqueInput | null
  delete?: Boolean | null
  update?: PageUpdateWithoutTranslationsDataInput | null
  upsert?: PageUpsertWithoutTranslationsInput | null
}

export interface PageUpdateWithoutChatsDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneWithoutPagesInput | null
  type?: PageTypeUpdateOneInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
  datasources?: DatasourceUpdateManyWithoutPageInput | null
}

export interface PageUpdateWithoutDatasourcesDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneWithoutPagesInput | null
  type?: PageTypeUpdateOneInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
}

export interface PageUpdateWithoutPluginDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneWithoutPagesInput | null
  type?: PageTypeUpdateOneInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  datasources?: DatasourceUpdateManyWithoutPageInput | null
}

export interface PageUpdateWithoutTagsDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneWithoutPagesInput | null
  type?: PageTypeUpdateOneInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
  datasources?: DatasourceUpdateManyWithoutPageInput | null
}

export interface PageUpdateWithoutTranslationsDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneWithoutPagesInput | null
  type?: PageTypeUpdateOneInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
  datasources?: DatasourceUpdateManyWithoutPageInput | null
}

export interface PageUpdateWithoutWebsiteDataInput {
  parent?: PageUpdateOneInput | null
  type?: PageTypeUpdateOneInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
  datasources?: DatasourceUpdateManyWithoutPageInput | null
}

export interface PageUpdateWithWhereUniqueWithoutDatasourcesInput {
  where: PageWhereUniqueInput
  data: PageUpdateWithoutDatasourcesDataInput
}

export interface PageUpdateWithWhereUniqueWithoutTagsInput {
  where: PageWhereUniqueInput
  data: PageUpdateWithoutTagsDataInput
}

export interface PageUpdateWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput
  data: PageUpdateWithoutWebsiteDataInput
}

export interface PageUpsertNestedInput {
  update: PageUpdateDataInput
  create: PageCreateInput
}

export interface PageUpsertWithoutChatsInput {
  update: PageUpdateWithoutChatsDataInput
  create: PageCreateWithoutChatsInput
}

export interface PageUpsertWithoutPluginInput {
  update: PageUpdateWithoutPluginDataInput
  create: PageCreateWithoutPluginInput
}

export interface PageUpsertWithoutTranslationsInput {
  update: PageUpdateWithoutTranslationsDataInput
  create: PageCreateWithoutTranslationsInput
}

export interface PageUpsertWithWhereUniqueWithoutDatasourcesInput {
  where: PageWhereUniqueInput
  update: PageUpdateWithoutDatasourcesDataInput
  create: PageCreateWithoutDatasourcesInput
}

export interface PageUpsertWithWhereUniqueWithoutTagsInput {
  where: PageWhereUniqueInput
  update: PageUpdateWithoutTagsDataInput
  create: PageCreateWithoutTagsInput
}

export interface PageUpsertWithWhereUniqueWithoutWebsiteInput {
  where: PageWhereUniqueInput
  update: PageUpdateWithoutWebsiteDataInput
  create: PageCreateWithoutWebsiteInput
}

export interface PageWhereInput {
  AND?: PageWhereInput[] | PageWhereInput | null
  OR?: PageWhereInput[] | PageWhereInput | null
  NOT?: PageWhereInput[] | PageWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  parent?: PageWhereInput | null
  website?: WebsiteWhereInput | null
  type?: PageTypeWhereInput | null
  translations_every?: PageTranslationWhereInput | null
  translations_some?: PageTranslationWhereInput | null
  translations_none?: PageTranslationWhereInput | null
  chats_every?: PageChatWhereInput | null
  chats_some?: PageChatWhereInput | null
  chats_none?: PageChatWhereInput | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  plugin?: PagePluginWhereInput | null
  datasources_every?: DatasourceWhereInput | null
  datasources_some?: DatasourceWhereInput | null
  datasources_none?: DatasourceWhereInput | null
}

export interface PageWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProjectCreateInput {
  name: String
  defaultName: String
  settings?: Json | null
  languages?: LanguageCreateManyInput | null
  defaultLanguage: LanguageCreateOneInput
  websites?: WebsiteCreateManyWithoutProjectInput | null
}

export interface ProjectCreateOneWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput | null
  connect?: ProjectWhereUniqueInput | null
}

export interface ProjectCreateWithoutWebsitesInput {
  name: String
  defaultName: String
  settings?: Json | null
  languages?: LanguageCreateManyInput | null
  defaultLanguage: LanguageCreateOneInput
}

export interface ProjectSubscriptionWhereInput {
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProjectWhereInput | null
}

export interface ProjectUpdateInput {
  name?: String | null
  defaultName?: String | null
  settings?: Json | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneInput | null
  websites?: WebsiteUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateOneWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput | null
  connect?: ProjectWhereUniqueInput | null
  delete?: Boolean | null
  update?: ProjectUpdateWithoutWebsitesDataInput | null
  upsert?: ProjectUpsertWithoutWebsitesInput | null
}

export interface ProjectUpdateWithoutWebsitesDataInput {
  name?: String | null
  defaultName?: String | null
  settings?: Json | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneInput | null
}

export interface ProjectUpsertWithoutWebsitesInput {
  update: ProjectUpdateWithoutWebsitesDataInput
  create: ProjectCreateWithoutWebsitesInput
}

export interface ProjectWhereInput {
  AND?: ProjectWhereInput[] | ProjectWhereInput | null
  OR?: ProjectWhereInput[] | ProjectWhereInput | null
  NOT?: ProjectWhereInput[] | ProjectWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  defaultName?: String | null
  defaultName_not?: String | null
  defaultName_in?: String[] | String | null
  defaultName_not_in?: String[] | String | null
  defaultName_lt?: String | null
  defaultName_lte?: String | null
  defaultName_gt?: String | null
  defaultName_gte?: String | null
  defaultName_contains?: String | null
  defaultName_not_contains?: String | null
  defaultName_starts_with?: String | null
  defaultName_not_starts_with?: String | null
  defaultName_ends_with?: String | null
  defaultName_not_ends_with?: String | null
  languages_every?: LanguageWhereInput | null
  languages_some?: LanguageWhereInput | null
  languages_none?: LanguageWhereInput | null
  defaultLanguage?: LanguageWhereInput | null
  websites_every?: WebsiteWhereInput | null
  websites_some?: WebsiteWhereInput | null
  websites_none?: WebsiteWhereInput | null
}

export interface ProjectWhereUniqueInput {
  id?: ID_Input | null
}

export interface SubscriberCreateInput {
  email: String
  url?: String | null
  ip?: String | null
}

export interface SubscriberSubscriptionWhereInput {
  AND?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  OR?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  NOT?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SubscriberWhereInput | null
}

export interface SubscriberUpdateInput {
  email?: String | null
  url?: String | null
  ip?: String | null
}

export interface SubscriberWhereInput {
  AND?: SubscriberWhereInput[] | SubscriberWhereInput | null
  OR?: SubscriberWhereInput[] | SubscriberWhereInput | null
  NOT?: SubscriberWhereInput[] | SubscriberWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  ip?: String | null
  ip_not?: String | null
  ip_in?: String[] | String | null
  ip_not_in?: String[] | String | null
  ip_lt?: String | null
  ip_lte?: String | null
  ip_gt?: String | null
  ip_gte?: String | null
  ip_contains?: String | null
  ip_not_contains?: String | null
  ip_starts_with?: String | null
  ip_not_starts_with?: String | null
  ip_ends_with?: String | null
  ip_not_ends_with?: String | null
}

export interface SubscriberWhereUniqueInput {
  id?: ID_Input | null
}

export interface TagCreateInput {
  name: String
  displayInNavigation?: Boolean | null
  color: String
  plugins?: TagCreatepluginsInput | null
  website: WebsiteCreateOneInput
  pages?: PageCreateManyWithoutTagsInput | null
}

export interface TagCreateManyWithoutPagesInput {
  create?: TagCreateWithoutPagesInput[] | TagCreateWithoutPagesInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
}

export interface TagCreatepluginsInput {
  set?: String[] | String | null
}

export interface TagCreateWithoutPagesInput {
  name: String
  displayInNavigation?: Boolean | null
  color: String
  plugins?: TagCreatepluginsInput | null
  website: WebsiteCreateOneInput
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TagWhereInput | null
}

export interface TagUpdateInput {
  name?: String | null
  displayInNavigation?: Boolean | null
  color?: String | null
  plugins?: TagUpdatepluginsInput | null
  website?: WebsiteUpdateOneInput | null
  pages?: PageUpdateManyWithoutTagsInput | null
}

export interface TagUpdateManyWithoutPagesInput {
  create?: TagCreateWithoutPagesInput[] | TagCreateWithoutPagesInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  update?: TagUpdateWithWhereUniqueWithoutPagesInput[] | TagUpdateWithWhereUniqueWithoutPagesInput | null
  upsert?: TagUpsertWithWhereUniqueWithoutPagesInput[] | TagUpsertWithWhereUniqueWithoutPagesInput | null
}

export interface TagUpdatepluginsInput {
  set?: String[] | String | null
}

export interface TagUpdateWithoutPagesDataInput {
  name?: String | null
  displayInNavigation?: Boolean | null
  color?: String | null
  plugins?: TagUpdatepluginsInput | null
  website?: WebsiteUpdateOneInput | null
}

export interface TagUpdateWithWhereUniqueWithoutPagesInput {
  where: TagWhereUniqueInput
  data: TagUpdateWithoutPagesDataInput
}

export interface TagUpsertWithWhereUniqueWithoutPagesInput {
  where: TagWhereUniqueInput
  update: TagUpdateWithoutPagesDataInput
  create: TagCreateWithoutPagesInput
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput | null
  OR?: TagWhereInput[] | TagWhereInput | null
  NOT?: TagWhereInput[] | TagWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  displayInNavigation?: Boolean | null
  displayInNavigation_not?: Boolean | null
  color?: String | null
  color_not?: String | null
  color_in?: String[] | String | null
  color_not_in?: String[] | String | null
  color_lt?: String | null
  color_lte?: String | null
  color_gt?: String | null
  color_gte?: String | null
  color_contains?: String | null
  color_not_contains?: String | null
  color_starts_with?: String | null
  color_not_starts_with?: String | null
  color_ends_with?: String | null
  color_not_ends_with?: String | null
  website?: WebsiteWhereInput | null
  pages_every?: PageWhereInput | null
  pages_some?: PageWhereInput | null
  pages_none?: PageWhereInput | null
}

export interface TagWhereUniqueInput {
  id?: ID_Input | null
}

export interface WebsiteCreateInput {
  title: String
  urlMask: String
  settings?: Json | null
  project: ProjectCreateOneWithoutWebsitesInput
  languages?: LanguageCreateManyInput | null
  defaultLanguage: LanguageCreateOneInput
  pageTypes?: PageTypeCreateManyWithoutWebsiteInput | null
  pages?: PageCreateManyWithoutWebsiteInput | null
}

export interface WebsiteCreateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateOneInput {
  create?: WebsiteCreateInput | null
  connect?: WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateOneWithoutPagesInput {
  create?: WebsiteCreateWithoutPagesInput | null
  connect?: WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateOneWithoutPageTypesInput {
  create?: WebsiteCreateWithoutPageTypesInput | null
  connect?: WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateWithoutPagesInput {
  title: String
  urlMask: String
  settings?: Json | null
  project: ProjectCreateOneWithoutWebsitesInput
  languages?: LanguageCreateManyInput | null
  defaultLanguage: LanguageCreateOneInput
  pageTypes?: PageTypeCreateManyWithoutWebsiteInput | null
}

export interface WebsiteCreateWithoutPageTypesInput {
  title: String
  urlMask: String
  settings?: Json | null
  project: ProjectCreateOneWithoutWebsitesInput
  languages?: LanguageCreateManyInput | null
  defaultLanguage: LanguageCreateOneInput
  pages?: PageCreateManyWithoutWebsiteInput | null
}

export interface WebsiteCreateWithoutProjectInput {
  title: String
  urlMask: String
  settings?: Json | null
  languages?: LanguageCreateManyInput | null
  defaultLanguage: LanguageCreateOneInput
  pageTypes?: PageTypeCreateManyWithoutWebsiteInput | null
  pages?: PageCreateManyWithoutWebsiteInput | null
}

export interface WebsiteSubscriptionWhereInput {
  AND?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  OR?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  NOT?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: WebsiteWhereInput | null
}

export interface WebsiteUpdateDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  project?: ProjectUpdateOneWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneInput | null
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput | null
  pages?: PageUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  project?: ProjectUpdateOneWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneInput | null
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput | null
  pages?: PageUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueWithoutProjectInput[] | WebsiteUpdateWithWhereUniqueWithoutProjectInput | null
  upsert?: WebsiteUpsertWithWhereUniqueWithoutProjectInput[] | WebsiteUpsertWithWhereUniqueWithoutProjectInput | null
}

export interface WebsiteUpdateOneInput {
  create?: WebsiteCreateInput | null
  connect?: WebsiteWhereUniqueInput | null
  delete?: Boolean | null
  update?: WebsiteUpdateDataInput | null
  upsert?: WebsiteUpsertNestedInput | null
}

export interface WebsiteUpdateOneWithoutPagesInput {
  create?: WebsiteCreateWithoutPagesInput | null
  connect?: WebsiteWhereUniqueInput | null
  delete?: Boolean | null
  update?: WebsiteUpdateWithoutPagesDataInput | null
  upsert?: WebsiteUpsertWithoutPagesInput | null
}

export interface WebsiteUpdateOneWithoutPageTypesInput {
  create?: WebsiteCreateWithoutPageTypesInput | null
  connect?: WebsiteWhereUniqueInput | null
  delete?: Boolean | null
  update?: WebsiteUpdateWithoutPageTypesDataInput | null
  upsert?: WebsiteUpsertWithoutPageTypesInput | null
}

export interface WebsiteUpdateWithoutPagesDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  project?: ProjectUpdateOneWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneInput | null
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithoutPageTypesDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  project?: ProjectUpdateOneWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneInput | null
  pages?: PageUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithoutProjectDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneInput | null
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput | null
  pages?: PageUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutProjectDataInput
}

export interface WebsiteUpsertNestedInput {
  update: WebsiteUpdateDataInput
  create: WebsiteCreateInput
}

export interface WebsiteUpsertWithoutPagesInput {
  update: WebsiteUpdateWithoutPagesDataInput
  create: WebsiteCreateWithoutPagesInput
}

export interface WebsiteUpsertWithoutPageTypesInput {
  update: WebsiteUpdateWithoutPageTypesDataInput
  create: WebsiteCreateWithoutPageTypesInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutProjectDataInput
  create: WebsiteCreateWithoutProjectInput
}

export interface WebsiteWhereInput {
  AND?: WebsiteWhereInput[] | WebsiteWhereInput | null
  OR?: WebsiteWhereInput[] | WebsiteWhereInput | null
  NOT?: WebsiteWhereInput[] | WebsiteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  urlMask?: String | null
  urlMask_not?: String | null
  urlMask_in?: String[] | String | null
  urlMask_not_in?: String[] | String | null
  urlMask_lt?: String | null
  urlMask_lte?: String | null
  urlMask_gt?: String | null
  urlMask_gte?: String | null
  urlMask_contains?: String | null
  urlMask_not_contains?: String | null
  urlMask_starts_with?: String | null
  urlMask_not_starts_with?: String | null
  urlMask_ends_with?: String | null
  urlMask_not_ends_with?: String | null
  project?: ProjectWhereInput | null
  languages_every?: LanguageWhereInput | null
  languages_some?: LanguageWhereInput | null
  languages_none?: LanguageWhereInput | null
  defaultLanguage?: LanguageWhereInput | null
  pageTypes_every?: PageTypeWhereInput | null
  pageTypes_some?: PageTypeWhereInput | null
  pageTypes_none?: PageTypeWhereInput | null
  pages_every?: PageWhereInput | null
  pages_some?: PageWhereInput | null
  pages_none?: PageWhereInput | null
}

export interface WebsiteWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateDatasource {
  count: Int
}

export interface AggregateDatasourceItem {
  count: Int
}

export interface AggregateFile {
  count: Int
}

export interface AggregateInquiry {
  count: Int
}

export interface AggregateLanguage {
  count: Int
}

export interface AggregateNavigation {
  count: Int
}

export interface AggregateNavigationNode {
  count: Int
}

export interface AggregatePage {
  count: Int
}

export interface AggregatePageChat {
  count: Int
}

export interface AggregatePagePlugin {
  count: Int
}

export interface AggregatePageTask {
  count: Int
}

export interface AggregatePageTranslation {
  count: Int
}

export interface AggregatePageType {
  count: Int
}

export interface AggregateProject {
  count: Int
}

export interface AggregateSubscriber {
  count: Int
}

export interface AggregateTag {
  count: Int
}

export interface AggregateWebsite {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Datasource extends Node {
  id: ID_Output
  type: String
  schema: Json
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug: Array<String>
  datasourceItems?: Array<DatasourceItem> | null
  page?: Array<Page> | null
}

/*
 * A connection to a list of items.

 */
export interface DatasourceConnection {
  pageInfo: PageInfo
  edges: Array<DatasourceEdge | null>
  aggregate: AggregateDatasource
}

/*
 * An edge in a connection.

 */
export interface DatasourceEdge {
  node: Datasource
  cursor: String
}

export interface DatasourceItem extends Node {
  id: ID_Output
  datasource: Datasource
  slug: String
  content: Json
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface DatasourceItemConnection {
  pageInfo: PageInfo
  edges: Array<DatasourceItemEdge | null>
  aggregate: AggregateDatasourceItem
}

/*
 * An edge in a connection.

 */
export interface DatasourceItemEdge {
  node: DatasourceItem
  cursor: String
}

export interface DatasourceItemPreviousValues {
  id: ID_Output
  slug: String
  content: Json
  createdAt: DateTime
  updatedAt: DateTime
}

export interface DatasourceItemSubscriptionPayload {
  mutation: MutationType
  node?: DatasourceItem | null
  updatedFields?: Array<String> | null
  previousValues?: DatasourceItemPreviousValues | null
}

export interface DatasourcePreviousValues {
  id: ID_Output
  type: String
  schema: Json
  uiSchema?: Json | null
  displayInNavigation?: Boolean | null
  slug: Array<String>
}

export interface DatasourceSubscriptionPayload {
  mutation: MutationType
  node?: Datasource | null
  updatedFields?: Array<String> | null
  previousValues?: DatasourcePreviousValues | null
}

export interface File extends Node {
  id: ID_Output
  hash: String
  category?: String | null
  filename: String
  mimetype?: String | null
  size?: Int | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: Array<FileEdge | null>
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  hash: String
  category?: String | null
  filename: String
  mimetype?: String | null
  size?: Int | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File | null
  updatedFields?: Array<String> | null
  previousValues?: FilePreviousValues | null
}

export interface Inquiry extends Node {
  id: ID_Output
  message: Json
  url?: String | null
  createdAt: DateTime
  formType?: String | null
  ip?: String | null
}

/*
 * A connection to a list of items.

 */
export interface InquiryConnection {
  pageInfo: PageInfo
  edges: Array<InquiryEdge | null>
  aggregate: AggregateInquiry
}

/*
 * An edge in a connection.

 */
export interface InquiryEdge {
  node: Inquiry
  cursor: String
}

export interface InquiryPreviousValues {
  id: ID_Output
  message: Json
  url?: String | null
  createdAt: DateTime
  formType?: String | null
  ip?: String | null
}

export interface InquirySubscriptionPayload {
  mutation: MutationType
  node?: Inquiry | null
  updatedFields?: Array<String> | null
  previousValues?: InquiryPreviousValues | null
}

export interface Language extends Node {
  id: ID_Output
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

/*
 * A connection to a list of items.

 */
export interface LanguageConnection {
  pageInfo: PageInfo
  edges: Array<LanguageEdge | null>
  aggregate: AggregateLanguage
}

/*
 * An edge in a connection.

 */
export interface LanguageEdge {
  node: Language
  cursor: String
}

export interface LanguagePreviousValues {
  id: ID_Output
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

export interface LanguageSubscriptionPayload {
  mutation: MutationType
  node?: Language | null
  updatedFields?: Array<String> | null
  previousValues?: LanguagePreviousValues | null
}

export interface Navigation extends Node {
  id: ID_Output
  name: String
  website: Website
  nodes?: Array<NavigationNode> | null
}

/*
 * A connection to a list of items.

 */
export interface NavigationConnection {
  pageInfo: PageInfo
  edges: Array<NavigationEdge | null>
  aggregate: AggregateNavigation
}

/*
 * An edge in a connection.

 */
export interface NavigationEdge {
  node: Navigation
  cursor: String
}

export interface NavigationNode extends Node {
  id: ID_Output
  navigation: Navigation
  page?: ID_Output | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Output | null
}

/*
 * A connection to a list of items.

 */
export interface NavigationNodeConnection {
  pageInfo: PageInfo
  edges: Array<NavigationNodeEdge | null>
  aggregate: AggregateNavigationNode
}

/*
 * An edge in a connection.

 */
export interface NavigationNodeEdge {
  node: NavigationNode
  cursor: String
}

export interface NavigationNodePreviousValues {
  id: ID_Output
  page?: ID_Output | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Output | null
}

export interface NavigationNodeSubscriptionPayload {
  mutation: MutationType
  node?: NavigationNode | null
  updatedFields?: Array<String> | null
  previousValues?: NavigationNodePreviousValues | null
}

export interface NavigationPreviousValues {
  id: ID_Output
  name: String
}

export interface NavigationSubscriptionPayload {
  mutation: MutationType
  node?: Navigation | null
  updatedFields?: Array<String> | null
  previousValues?: NavigationPreviousValues | null
}

export interface Page extends Node {
  id: ID_Output
  parent?: Page | null
  website: Website
  type: PageType
  translations?: Array<PageTranslation> | null
  chats?: Array<PageChat> | null
  tags?: Array<Tag> | null
  plugin?: PagePlugin | null
  datasources?: Array<Datasource> | null
}

export interface PageChat extends Node {
  id: ID_Output
  page: Page
  text: String
  createdAt: DateTime
  auth0id?: ID_Output | null
}

/*
 * A connection to a list of items.

 */
export interface PageChatConnection {
  pageInfo: PageInfo
  edges: Array<PageChatEdge | null>
  aggregate: AggregatePageChat
}

/*
 * An edge in a connection.

 */
export interface PageChatEdge {
  node: PageChat
  cursor: String
}

export interface PageChatPreviousValues {
  id: ID_Output
  text: String
  createdAt: DateTime
  auth0id?: ID_Output | null
}

export interface PageChatSubscriptionPayload {
  mutation: MutationType
  node?: PageChat | null
  updatedFields?: Array<String> | null
  previousValues?: PageChatPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface PageConnection {
  pageInfo: PageInfo
  edges: Array<PageEdge | null>
  aggregate: AggregatePage
}

/*
 * An edge in a connection.

 */
export interface PageEdge {
  node: Page
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
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
export interface PagePluginConnection {
  pageInfo: PageInfo
  edges: Array<PagePluginEdge | null>
  aggregate: AggregatePagePlugin
}

/*
 * An edge in a connection.

 */
export interface PagePluginEdge {
  node: PagePlugin
  cursor: String
}

export interface PagePluginPreviousValues {
  id: ID_Output
  plugin: String
  content: Json
}

export interface PagePluginSubscriptionPayload {
  mutation: MutationType
  node?: PagePlugin | null
  updatedFields?: Array<String> | null
  previousValues?: PagePluginPreviousValues | null
}

export interface PagePreviousValues {
  id: ID_Output
}

export interface PageSubscriptionPayload {
  mutation: MutationType
  node?: Page | null
  updatedFields?: Array<String> | null
  previousValues?: PagePreviousValues | null
}

export interface PageTask extends Node {
  id: ID_Output
  pageTranslation: PageTranslation
  done: Boolean
  name: String
  description: String
  updatedAt: DateTime
  auth0id?: ID_Output | null
}

/*
 * A connection to a list of items.

 */
export interface PageTaskConnection {
  pageInfo: PageInfo
  edges: Array<PageTaskEdge | null>
  aggregate: AggregatePageTask
}

/*
 * An edge in a connection.

 */
export interface PageTaskEdge {
  node: PageTask
  cursor: String
}

export interface PageTaskPreviousValues {
  id: ID_Output
  done: Boolean
  name: String
  description: String
  updatedAt: DateTime
  auth0id?: ID_Output | null
}

export interface PageTaskSubscriptionPayload {
  mutation: MutationType
  node?: PageTask | null
  updatedFields?: Array<String> | null
  previousValues?: PageTaskPreviousValues | null
}

export interface PageTranslation extends Node {
  id: ID_Output
  page: Page
  language: Language
  url: String
  content: Json
  name: String
  status: PageStatus
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  tasks?: Array<PageTask> | null
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PageTranslationConnection {
  pageInfo: PageInfo
  edges: Array<PageTranslationEdge | null>
  aggregate: AggregatePageTranslation
}

/*
 * An edge in a connection.

 */
export interface PageTranslationEdge {
  node: PageTranslation
  cursor: String
}

export interface PageTranslationPreviousValues {
  id: ID_Output
  url: String
  content: Json
  name: String
  status: PageStatus
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  createdAt: DateTime
}

export interface PageTranslationSubscriptionPayload {
  mutation: MutationType
  node?: PageTranslation | null
  updatedFields?: Array<String> | null
  previousValues?: PageTranslationPreviousValues | null
}

export interface PageType extends Node {
  id: ID_Output
  name: String
  content: Json
  website: Website
  plugins: Array<String>
}

/*
 * A connection to a list of items.

 */
export interface PageTypeConnection {
  pageInfo: PageInfo
  edges: Array<PageTypeEdge | null>
  aggregate: AggregatePageType
}

/*
 * An edge in a connection.

 */
export interface PageTypeEdge {
  node: PageType
  cursor: String
}

export interface PageTypePreviousValues {
  id: ID_Output
  name: String
  content: Json
  plugins: Array<String>
}

export interface PageTypeSubscriptionPayload {
  mutation: MutationType
  node?: PageType | null
  updatedFields?: Array<String> | null
  previousValues?: PageTypePreviousValues | null
}

export interface Project extends Node {
  id: ID_Output
  name: String
  defaultName: String
  languages?: Array<Language> | null
  defaultLanguage: Language
  settings: Json
  websites?: Array<Website> | null
}

/*
 * A connection to a list of items.

 */
export interface ProjectConnection {
  pageInfo: PageInfo
  edges: Array<ProjectEdge | null>
  aggregate: AggregateProject
}

/*
 * An edge in a connection.

 */
export interface ProjectEdge {
  node: Project
  cursor: String
}

export interface ProjectPreviousValues {
  id: ID_Output
  name: String
  defaultName: String
  settings: Json
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType
  node?: Project | null
  updatedFields?: Array<String> | null
  previousValues?: ProjectPreviousValues | null
}

export interface Subscriber extends Node {
  id: ID_Output
  email: String
  url?: String | null
  createdAt: DateTime
  ip?: String | null
}

/*
 * A connection to a list of items.

 */
export interface SubscriberConnection {
  pageInfo: PageInfo
  edges: Array<SubscriberEdge | null>
  aggregate: AggregateSubscriber
}

/*
 * An edge in a connection.

 */
export interface SubscriberEdge {
  node: Subscriber
  cursor: String
}

export interface SubscriberPreviousValues {
  id: ID_Output
  email: String
  url?: String | null
  createdAt: DateTime
  ip?: String | null
}

export interface SubscriberSubscriptionPayload {
  mutation: MutationType
  node?: Subscriber | null
  updatedFields?: Array<String> | null
  previousValues?: SubscriberPreviousValues | null
}

export interface Tag extends Node {
  id: ID_Output
  website: Website
  name: String
  displayInNavigation?: Boolean | null
  plugins: Array<String>
  color: String
  pages?: Array<Page> | null
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: Array<TagEdge | null>
  aggregate: AggregateTag
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface TagPreviousValues {
  id: ID_Output
  name: String
  displayInNavigation?: Boolean | null
  plugins: Array<String>
  color: String
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag | null
  updatedFields?: Array<String> | null
  previousValues?: TagPreviousValues | null
}

export interface Website extends Node {
  id: ID_Output
  title: String
  project: Project
  languages?: Array<Language> | null
  defaultLanguage: Language
  urlMask: String
  settings: Json
  pageTypes?: Array<PageType> | null
  pages?: Array<Page> | null
}

/*
 * A connection to a list of items.

 */
export interface WebsiteConnection {
  pageInfo: PageInfo
  edges: Array<WebsiteEdge | null>
  aggregate: AggregateWebsite
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

export interface WebsiteSubscriptionPayload {
  mutation: MutationType
  node?: Website | null
  updatedFields?: Array<String> | null
  previousValues?: WebsitePreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string