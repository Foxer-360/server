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
    pageAnnotations: <T = Array<PageAnnotation | null>>(args: { where?: PageAnnotationWhereInput | null, orderBy?: PageAnnotationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = Array<File | null>>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigations: <T = Array<Navigation | null>>(args: { where?: NavigationWhereInput | null, orderBy?: NavigationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationNodes: <T = Array<NavigationNode | null>>(args: { where?: NavigationNodeWhereInput | null, orderBy?: NavigationNodeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Array<Tag | null>>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscribers: <T = Array<Subscriber | null>>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inquiries: <T = Array<Inquiry | null>>(args: { where?: InquiryWhereInput | null, orderBy?: InquiryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pages: <T = Array<Page | null>>(args: { where?: PageWhereInput | null, orderBy?: PageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTypes: <T = Array<PageType | null>>(args: { where?: PageTypeWhereInput | null, orderBy?: PageTypeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websites: <T = Array<Website | null>>(args: { where?: WebsiteWhereInput | null, orderBy?: WebsiteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Array<Language | null>>(args: { where?: LanguageWhereInput | null, orderBy?: LanguageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    project: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pagePlugin: <T = PagePlugin | null>(args: { where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageAnnotation: <T = PageAnnotation | null>(args: { where: PageAnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    navigation: <T = Navigation | null>(args: { where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    navigationNode: <T = NavigationNode | null>(args: { where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    subscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    inquiry: <T = Inquiry | null>(args: { where: InquiryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    page: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    website: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    projectsConnection: <T = ProjectConnection>(args: { where?: ProjectWhereInput | null, orderBy?: ProjectOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTranslationsConnection: <T = PageTranslationConnection>(args: { where?: PageTranslationWhereInput | null, orderBy?: PageTranslationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pagePluginsConnection: <T = PagePluginConnection>(args: { where?: PagePluginWhereInput | null, orderBy?: PagePluginOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageTasksConnection: <T = PageTaskConnection>(args: { where?: PageTaskWhereInput | null, orderBy?: PageTaskOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageChatsConnection: <T = PageChatConnection>(args: { where?: PageChatWhereInput | null, orderBy?: PageChatOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pageAnnotationsConnection: <T = PageAnnotationConnection>(args: { where?: PageAnnotationWhereInput | null, orderBy?: PageAnnotationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput | null, orderBy?: FileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationsConnection: <T = NavigationConnection>(args: { where?: NavigationWhereInput | null, orderBy?: NavigationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    navigationNodesConnection: <T = NavigationNodeConnection>(args: { where?: NavigationNodeWhereInput | null, orderBy?: NavigationNodeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscribersConnection: <T = SubscriberConnection>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    inquiriesConnection: <T = InquiryConnection>(args: { where?: InquiryWhereInput | null, orderBy?: InquiryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
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
    createPageAnnotation: <T = PageAnnotation>(args: { data: PageAnnotationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNavigation: <T = Navigation>(args: { data: NavigationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNavigationNode: <T = NavigationNode>(args: { data: NavigationNodeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSubscriber: <T = Subscriber>(args: { data: SubscriberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInquiry: <T = Inquiry>(args: { data: InquiryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPage: <T = Page>(args: { data: PageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPageType: <T = PageType>(args: { data: PageTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProject: <T = Project | null>(args: { data: ProjectUpdateInput, where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageTranslation: <T = PageTranslation | null>(args: { data: PageTranslationUpdateInput, where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePagePlugin: <T = PagePlugin | null>(args: { data: PagePluginUpdateInput, where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageTask: <T = PageTask | null>(args: { data: PageTaskUpdateInput, where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageChat: <T = PageChat | null>(args: { data: PageChatUpdateInput, where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageAnnotation: <T = PageAnnotation | null>(args: { data: PageAnnotationUpdateInput, where: PageAnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNavigation: <T = Navigation | null>(args: { data: NavigationUpdateInput, where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNavigationNode: <T = NavigationNode | null>(args: { data: NavigationNodeUpdateInput, where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSubscriber: <T = Subscriber | null>(args: { data: SubscriberUpdateInput, where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateInquiry: <T = Inquiry | null>(args: { data: InquiryUpdateInput, where: InquiryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePage: <T = Page | null>(args: { data: PageUpdateInput, where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePageType: <T = PageType | null>(args: { data: PageTypeUpdateInput, where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateWebsite: <T = Website | null>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProject: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageTranslation: <T = PageTranslation | null>(args: { where: PageTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePagePlugin: <T = PagePlugin | null>(args: { where: PagePluginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageTask: <T = PageTask | null>(args: { where: PageTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageChat: <T = PageChat | null>(args: { where: PageChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageAnnotation: <T = PageAnnotation | null>(args: { where: PageAnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNavigation: <T = Navigation | null>(args: { where: NavigationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNavigationNode: <T = NavigationNode | null>(args: { where: NavigationNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSubscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteInquiry: <T = Inquiry | null>(args: { where: InquiryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePage: <T = Page | null>(args: { where: PageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePageType: <T = PageType | null>(args: { where: PageTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteWebsite: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertProject: <T = Project>(args: { where: ProjectWhereUniqueInput, create: ProjectCreateInput, update: ProjectUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTranslation: <T = PageTranslation>(args: { where: PageTranslationWhereUniqueInput, create: PageTranslationCreateInput, update: PageTranslationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPagePlugin: <T = PagePlugin>(args: { where: PagePluginWhereUniqueInput, create: PagePluginCreateInput, update: PagePluginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageTask: <T = PageTask>(args: { where: PageTaskWhereUniqueInput, create: PageTaskCreateInput, update: PageTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageChat: <T = PageChat>(args: { where: PageChatWhereUniqueInput, create: PageChatCreateInput, update: PageChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageAnnotation: <T = PageAnnotation>(args: { where: PageAnnotationWhereUniqueInput, create: PageAnnotationCreateInput, update: PageAnnotationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNavigation: <T = Navigation>(args: { where: NavigationWhereUniqueInput, create: NavigationCreateInput, update: NavigationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNavigationNode: <T = NavigationNode>(args: { where: NavigationNodeWhereUniqueInput, create: NavigationNodeCreateInput, update: NavigationNodeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSubscriber: <T = Subscriber>(args: { where: SubscriberWhereUniqueInput, create: SubscriberCreateInput, update: SubscriberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInquiry: <T = Inquiry>(args: { where: InquiryWhereUniqueInput, create: InquiryCreateInput, update: InquiryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPage: <T = Page>(args: { where: PageWhereUniqueInput, create: PageCreateInput, update: PageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPageType: <T = PageType>(args: { where: PageTypeWhereUniqueInput, create: PageTypeCreateInput, update: PageTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProjects: <T = BatchPayload>(args: { data: ProjectUpdateManyMutationInput, where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTranslations: <T = BatchPayload>(args: { data: PageTranslationUpdateManyMutationInput, where?: PageTranslationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPagePlugins: <T = BatchPayload>(args: { data: PagePluginUpdateManyMutationInput, where?: PagePluginWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTasks: <T = BatchPayload>(args: { data: PageTaskUpdateManyMutationInput, where?: PageTaskWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageChats: <T = BatchPayload>(args: { data: PageChatUpdateManyMutationInput, where?: PageChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageAnnotations: <T = BatchPayload>(args: { data: PageAnnotationUpdateManyMutationInput, where?: PageAnnotationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNavigations: <T = BatchPayload>(args: { data: NavigationUpdateManyMutationInput, where?: NavigationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNavigationNodes: <T = BatchPayload>(args: { data: NavigationNodeUpdateManyMutationInput, where?: NavigationNodeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateManyMutationInput, where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySubscribers: <T = BatchPayload>(args: { data: SubscriberUpdateManyMutationInput, where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInquiries: <T = BatchPayload>(args: { data: InquiryUpdateManyMutationInput, where?: InquiryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPageTypes: <T = BatchPayload>(args: { data: PageTypeUpdateManyMutationInput, where?: PageTypeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateManyMutationInput, where?: WebsiteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateManyMutationInput, where?: LanguageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProjects: <T = BatchPayload>(args: { where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTranslations: <T = BatchPayload>(args: { where?: PageTranslationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPagePlugins: <T = BatchPayload>(args: { where?: PagePluginWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageTasks: <T = BatchPayload>(args: { where?: PageTaskWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageChats: <T = BatchPayload>(args: { where?: PageChatWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPageAnnotations: <T = BatchPayload>(args: { where?: PageAnnotationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNavigations: <T = BatchPayload>(args: { where?: NavigationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNavigationNodes: <T = BatchPayload>(args: { where?: NavigationNodeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySubscribers: <T = BatchPayload>(args: { where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInquiries: <T = BatchPayload>(args: { where?: InquiryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
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
    pageAnnotation: <T = PageAnnotationSubscriptionPayload | null>(args: { where?: PageAnnotationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    navigation: <T = NavigationSubscriptionPayload | null>(args: { where?: NavigationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    navigationNode: <T = NavigationNodeSubscriptionPayload | null>(args: { where?: NavigationNodeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    subscriber: <T = SubscriberSubscriptionPayload | null>(args: { where?: SubscriberSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    inquiry: <T = InquirySubscriptionPayload | null>(args: { where?: InquirySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
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
  PageAnnotation: (where?: PageAnnotationWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Navigation: (where?: NavigationWhereInput) => Promise<boolean>
  NavigationNode: (where?: NavigationNodeWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Subscriber: (where?: SubscriberWhereInput) => Promise<boolean>
  Inquiry: (where?: InquiryWhereInput) => Promise<boolean>
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

type AggregatePageAnnotation {
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

input FileUpdateManyMutationInput {
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
  ip: String
}

input InquiryUpdateManyMutationInput {
  message: Json
  url: String
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

input LanguageScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageScalarWhereInput!]
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

input LanguageUpdateManyDataInput {
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

input LanguageUpdateManyInput {
  create: [LanguageCreateInput!]
  connect: [LanguageWhereUniqueInput!]
  set: [LanguageWhereUniqueInput!]
  disconnect: [LanguageWhereUniqueInput!]
  delete: [LanguageWhereUniqueInput!]
  update: [LanguageUpdateWithWhereUniqueNestedInput!]
  updateMany: [LanguageUpdateManyWithWhereNestedInput!]
  deleteMany: [LanguageScalarWhereInput!]
  upsert: [LanguageUpsertWithWhereUniqueNestedInput!]
}

input LanguageUpdateManyMutationInput {
  code: String
  name: String
  englishName: String
  isDefault: Boolean
  isEnabled: Boolean
}

input LanguageUpdateManyWithWhereNestedInput {
  where: LanguageScalarWhereInput!
  data: LanguageUpdateManyDataInput!
}

input LanguageUpdateOneRequiredInput {
  create: LanguageCreateInput
  connect: LanguageWhereUniqueInput
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
  createPageAnnotation(data: PageAnnotationCreateInput!): PageAnnotation!
  createFile(data: FileCreateInput!): File!
  createNavigation(data: NavigationCreateInput!): Navigation!
  createNavigationNode(data: NavigationNodeCreateInput!): NavigationNode!
  createTag(data: TagCreateInput!): Tag!
  createSubscriber(data: SubscriberCreateInput!): Subscriber!
  createInquiry(data: InquiryCreateInput!): Inquiry!
  createPage(data: PageCreateInput!): Page!
  createPageType(data: PageTypeCreateInput!): PageType!
  createWebsite(data: WebsiteCreateInput!): Website!
  createLanguage(data: LanguageCreateInput!): Language!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updatePageTranslation(data: PageTranslationUpdateInput!, where: PageTranslationWhereUniqueInput!): PageTranslation
  updatePagePlugin(data: PagePluginUpdateInput!, where: PagePluginWhereUniqueInput!): PagePlugin
  updatePageTask(data: PageTaskUpdateInput!, where: PageTaskWhereUniqueInput!): PageTask
  updatePageChat(data: PageChatUpdateInput!, where: PageChatWhereUniqueInput!): PageChat
  updatePageAnnotation(data: PageAnnotationUpdateInput!, where: PageAnnotationWhereUniqueInput!): PageAnnotation
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateNavigation(data: NavigationUpdateInput!, where: NavigationWhereUniqueInput!): Navigation
  updateNavigationNode(data: NavigationNodeUpdateInput!, where: NavigationNodeWhereUniqueInput!): NavigationNode
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateSubscriber(data: SubscriberUpdateInput!, where: SubscriberWhereUniqueInput!): Subscriber
  updateInquiry(data: InquiryUpdateInput!, where: InquiryWhereUniqueInput!): Inquiry
  updatePage(data: PageUpdateInput!, where: PageWhereUniqueInput!): Page
  updatePageType(data: PageTypeUpdateInput!, where: PageTypeWhereUniqueInput!): PageType
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deletePageTranslation(where: PageTranslationWhereUniqueInput!): PageTranslation
  deletePagePlugin(where: PagePluginWhereUniqueInput!): PagePlugin
  deletePageTask(where: PageTaskWhereUniqueInput!): PageTask
  deletePageChat(where: PageChatWhereUniqueInput!): PageChat
  deletePageAnnotation(where: PageAnnotationWhereUniqueInput!): PageAnnotation
  deleteFile(where: FileWhereUniqueInput!): File
  deleteNavigation(where: NavigationWhereUniqueInput!): Navigation
  deleteNavigationNode(where: NavigationNodeWhereUniqueInput!): NavigationNode
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteSubscriber(where: SubscriberWhereUniqueInput!): Subscriber
  deleteInquiry(where: InquiryWhereUniqueInput!): Inquiry
  deletePage(where: PageWhereUniqueInput!): Page
  deletePageType(where: PageTypeWhereUniqueInput!): PageType
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  upsertPageTranslation(where: PageTranslationWhereUniqueInput!, create: PageTranslationCreateInput!, update: PageTranslationUpdateInput!): PageTranslation!
  upsertPagePlugin(where: PagePluginWhereUniqueInput!, create: PagePluginCreateInput!, update: PagePluginUpdateInput!): PagePlugin!
  upsertPageTask(where: PageTaskWhereUniqueInput!, create: PageTaskCreateInput!, update: PageTaskUpdateInput!): PageTask!
  upsertPageChat(where: PageChatWhereUniqueInput!, create: PageChatCreateInput!, update: PageChatUpdateInput!): PageChat!
  upsertPageAnnotation(where: PageAnnotationWhereUniqueInput!, create: PageAnnotationCreateInput!, update: PageAnnotationUpdateInput!): PageAnnotation!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertNavigation(where: NavigationWhereUniqueInput!, create: NavigationCreateInput!, update: NavigationUpdateInput!): Navigation!
  upsertNavigationNode(where: NavigationNodeWhereUniqueInput!, create: NavigationNodeCreateInput!, update: NavigationNodeUpdateInput!): NavigationNode!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertSubscriber(where: SubscriberWhereUniqueInput!, create: SubscriberCreateInput!, update: SubscriberUpdateInput!): Subscriber!
  upsertInquiry(where: InquiryWhereUniqueInput!, create: InquiryCreateInput!, update: InquiryUpdateInput!): Inquiry!
  upsertPage(where: PageWhereUniqueInput!, create: PageCreateInput!, update: PageUpdateInput!): Page!
  upsertPageType(where: PageTypeWhereUniqueInput!, create: PageTypeCreateInput!, update: PageTypeUpdateInput!): PageType!
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  updateManyPageTranslations(data: PageTranslationUpdateManyMutationInput!, where: PageTranslationWhereInput): BatchPayload!
  updateManyPagePlugins(data: PagePluginUpdateManyMutationInput!, where: PagePluginWhereInput): BatchPayload!
  updateManyPageTasks(data: PageTaskUpdateManyMutationInput!, where: PageTaskWhereInput): BatchPayload!
  updateManyPageChats(data: PageChatUpdateManyMutationInput!, where: PageChatWhereInput): BatchPayload!
  updateManyPageAnnotations(data: PageAnnotationUpdateManyMutationInput!, where: PageAnnotationWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyNavigations(data: NavigationUpdateManyMutationInput!, where: NavigationWhereInput): BatchPayload!
  updateManyNavigationNodes(data: NavigationNodeUpdateManyMutationInput!, where: NavigationNodeWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  updateManySubscribers(data: SubscriberUpdateManyMutationInput!, where: SubscriberWhereInput): BatchPayload!
  updateManyInquiries(data: InquiryUpdateManyMutationInput!, where: InquiryWhereInput): BatchPayload!
  updateManyPageTypes(data: PageTypeUpdateManyMutationInput!, where: PageTypeWhereInput): BatchPayload!
  updateManyWebsites(data: WebsiteUpdateManyMutationInput!, where: WebsiteWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateManyMutationInput!, where: LanguageWhereInput): BatchPayload!
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  deleteManyPageTranslations(where: PageTranslationWhereInput): BatchPayload!
  deleteManyPagePlugins(where: PagePluginWhereInput): BatchPayload!
  deleteManyPageTasks(where: PageTaskWhereInput): BatchPayload!
  deleteManyPageChats(where: PageChatWhereInput): BatchPayload!
  deleteManyPageAnnotations(where: PageAnnotationWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyNavigations(where: NavigationWhereInput): BatchPayload!
  deleteManyNavigationNodes(where: NavigationNodeWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManySubscribers(where: SubscriberWhereInput): BatchPayload!
  deleteManyInquiries(where: InquiryWhereInput): BatchPayload!
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
  website: Website!
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
  navigation: Navigation!
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

input NavigationNodeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [NavigationNodeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [NavigationNodeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NavigationNodeScalarWhereInput!]
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
  navigation: NavigationUpdateOneRequiredWithoutNodesInput
}

input NavigationNodeUpdateManyDataInput {
  page: ID
  title: String
  link: String
  order: Int
  parent: ID
}

input NavigationNodeUpdateManyMutationInput {
  page: ID
  title: String
  link: String
  order: Int
  parent: ID
}

input NavigationNodeUpdateManyWithoutNavigationInput {
  create: [NavigationNodeCreateWithoutNavigationInput!]
  connect: [NavigationNodeWhereUniqueInput!]
  set: [NavigationNodeWhereUniqueInput!]
  disconnect: [NavigationNodeWhereUniqueInput!]
  delete: [NavigationNodeWhereUniqueInput!]
  update: [NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput!]
  updateMany: [NavigationNodeUpdateManyWithWhereNestedInput!]
  deleteMany: [NavigationNodeScalarWhereInput!]
  upsert: [NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput!]
}

input NavigationNodeUpdateManyWithWhereNestedInput {
  where: NavigationNodeScalarWhereInput!
  data: NavigationNodeUpdateManyDataInput!
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
  website: WebsiteUpdateOneRequiredInput
  nodes: NavigationNodeUpdateManyWithoutNavigationInput
}

input NavigationUpdateManyMutationInput {
  name: String
}

input NavigationUpdateOneRequiredWithoutNodesInput {
  create: NavigationCreateWithoutNodesInput
  connect: NavigationWhereUniqueInput
  update: NavigationUpdateWithoutNodesDataInput
  upsert: NavigationUpsertWithoutNodesInput
}

input NavigationUpdateWithoutNodesDataInput {
  name: String
  website: WebsiteUpdateOneRequiredInput
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
  parent: Page
  website: Website!
  type: PageType!
  translations(where: PageTranslationWhereInput, orderBy: PageTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTranslation!]
  chats(where: PageChatWhereInput, orderBy: PageChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageChat!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  plugin: PagePlugin
}

type PageAnnotation implements Node {
  id: ID!
  pageTranslation: PageTranslation!
  key: String!
  value: String!
}

"""A connection to a list of items."""
type PageAnnotationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PageAnnotationEdge]!
  aggregate: AggregatePageAnnotation!
}

input PageAnnotationCreateInput {
  key: String!
  value: String!
  pageTranslation: PageTranslationCreateOneWithoutAnnotationsInput!
}

input PageAnnotationCreateManyWithoutPageTranslationInput {
  create: [PageAnnotationCreateWithoutPageTranslationInput!]
  connect: [PageAnnotationWhereUniqueInput!]
}

input PageAnnotationCreateWithoutPageTranslationInput {
  key: String!
  value: String!
}

"""An edge in a connection."""
type PageAnnotationEdge {
  """The item at the end of the edge."""
  node: PageAnnotation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PageAnnotationOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PageAnnotationPreviousValues {
  id: ID!
  key: String!
  value: String!
}

input PageAnnotationScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PageAnnotationScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageAnnotationScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageAnnotationScalarWhereInput!]
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
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
}

type PageAnnotationSubscriptionPayload {
  mutation: MutationType!
  node: PageAnnotation
  updatedFields: [String!]
  previousValues: PageAnnotationPreviousValues
}

input PageAnnotationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PageAnnotationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageAnnotationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageAnnotationSubscriptionWhereInput!]

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
  node: PageAnnotationWhereInput
}

input PageAnnotationUpdateInput {
  key: String
  value: String
  pageTranslation: PageTranslationUpdateOneRequiredWithoutAnnotationsInput
}

input PageAnnotationUpdateManyDataInput {
  key: String
  value: String
}

input PageAnnotationUpdateManyMutationInput {
  key: String
  value: String
}

input PageAnnotationUpdateManyWithoutPageTranslationInput {
  create: [PageAnnotationCreateWithoutPageTranslationInput!]
  connect: [PageAnnotationWhereUniqueInput!]
  set: [PageAnnotationWhereUniqueInput!]
  disconnect: [PageAnnotationWhereUniqueInput!]
  delete: [PageAnnotationWhereUniqueInput!]
  update: [PageAnnotationUpdateWithWhereUniqueWithoutPageTranslationInput!]
  updateMany: [PageAnnotationUpdateManyWithWhereNestedInput!]
  deleteMany: [PageAnnotationScalarWhereInput!]
  upsert: [PageAnnotationUpsertWithWhereUniqueWithoutPageTranslationInput!]
}

input PageAnnotationUpdateManyWithWhereNestedInput {
  where: PageAnnotationScalarWhereInput!
  data: PageAnnotationUpdateManyDataInput!
}

input PageAnnotationUpdateWithoutPageTranslationDataInput {
  key: String
  value: String
}

input PageAnnotationUpdateWithWhereUniqueWithoutPageTranslationInput {
  where: PageAnnotationWhereUniqueInput!
  data: PageAnnotationUpdateWithoutPageTranslationDataInput!
}

input PageAnnotationUpsertWithWhereUniqueWithoutPageTranslationInput {
  where: PageAnnotationWhereUniqueInput!
  update: PageAnnotationUpdateWithoutPageTranslationDataInput!
  create: PageAnnotationCreateWithoutPageTranslationInput!
}

input PageAnnotationWhereInput {
  """Logical AND on all given filters."""
  AND: [PageAnnotationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageAnnotationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageAnnotationWhereInput!]
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
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
  pageTranslation: PageTranslationWhereInput
}

input PageAnnotationWhereUniqueInput {
  id: ID
}

type PageChat implements Node {
  id: ID!
  page: Page!
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

input PageChatScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PageChatScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageChatScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageChatScalarWhereInput!]
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
  page: PageUpdateOneRequiredWithoutChatsInput
}

input PageChatUpdateManyDataInput {
  text: String
  auth0id: ID
}

input PageChatUpdateManyMutationInput {
  text: String
  auth0id: ID
}

input PageChatUpdateManyWithoutPageInput {
  create: [PageChatCreateWithoutPageInput!]
  connect: [PageChatWhereUniqueInput!]
  set: [PageChatWhereUniqueInput!]
  disconnect: [PageChatWhereUniqueInput!]
  delete: [PageChatWhereUniqueInput!]
  update: [PageChatUpdateWithWhereUniqueWithoutPageInput!]
  updateMany: [PageChatUpdateManyWithWhereNestedInput!]
  deleteMany: [PageChatScalarWhereInput!]
  upsert: [PageChatUpsertWithWhereUniqueWithoutPageInput!]
}

input PageChatUpdateManyWithWhereNestedInput {
  where: PageChatScalarWhereInput!
  data: PageChatUpdateManyDataInput!
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
}

input PageCreateWithoutPluginInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
  tags: TagCreateManyWithoutPagesInput
}

input PageCreateWithoutTagsInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
  plugin: PagePluginCreateOneWithoutPageInput
}

input PageCreateWithoutTranslationsInput {
  parent: PageCreateOneInput
  website: WebsiteCreateOneWithoutPagesInput!
  type: PageTypeCreateOneInput!
  chats: PageChatCreateManyWithoutPageInput
  tags: TagCreateManyWithoutPagesInput
  plugin: PagePluginCreateOneWithoutPageInput
}

input PageCreateWithoutWebsiteInput {
  parent: PageCreateOneInput
  type: PageTypeCreateOneInput!
  translations: PageTranslationCreateManyWithoutPageInput
  chats: PageChatCreateManyWithoutPageInput
  tags: TagCreateManyWithoutPagesInput
  plugin: PagePluginCreateOneWithoutPageInput
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
  page: Page!
  language: Language!
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
  page: PageUpdateOneRequiredWithoutPluginInput
  language: LanguageUpdateOneRequiredInput
}

input PagePluginUpdateManyMutationInput {
  plugin: String
  content: Json
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
  language: LanguageUpdateOneRequiredInput
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

input PageScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PageScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageScalarWhereInput!]
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
  pageTranslation: PageTranslation!
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

input PageTaskScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTaskScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTaskScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTaskScalarWhereInput!]
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
  pageTranslation: PageTranslationUpdateOneRequiredWithoutTasksInput
}

input PageTaskUpdateManyDataInput {
  done: Boolean
  name: String
  description: String
  auth0id: ID
}

input PageTaskUpdateManyMutationInput {
  done: Boolean
  name: String
  description: String
  auth0id: ID
}

input PageTaskUpdateManyWithoutPageTranslationInput {
  create: [PageTaskCreateWithoutPageTranslationInput!]
  connect: [PageTaskWhereUniqueInput!]
  set: [PageTaskWhereUniqueInput!]
  disconnect: [PageTaskWhereUniqueInput!]
  delete: [PageTaskWhereUniqueInput!]
  update: [PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput!]
  updateMany: [PageTaskUpdateManyWithWhereNestedInput!]
  deleteMany: [PageTaskScalarWhereInput!]
  upsert: [PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput!]
}

input PageTaskUpdateManyWithWhereNestedInput {
  where: PageTaskScalarWhereInput!
  data: PageTaskUpdateManyDataInput!
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
  page: Page!
  language: Language!
  url: String!
  content: Json!
  name: String!
  status: PageStatus!
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
  tasks(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageTask!]
  annotations(where: PageAnnotationWhereInput, orderBy: PageAnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageAnnotation!]
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
  annotations: PageAnnotationCreateManyWithoutPageTranslationInput
}

input PageTranslationCreateManyWithoutPageInput {
  create: [PageTranslationCreateWithoutPageInput!]
  connect: [PageTranslationWhereUniqueInput!]
}

input PageTranslationCreateOneWithoutAnnotationsInput {
  create: PageTranslationCreateWithoutAnnotationsInput
  connect: PageTranslationWhereUniqueInput
}

input PageTranslationCreateOneWithoutTasksInput {
  create: PageTranslationCreateWithoutTasksInput
  connect: PageTranslationWhereUniqueInput
}

input PageTranslationCreateWithoutAnnotationsInput {
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
  annotations: PageAnnotationCreateManyWithoutPageTranslationInput
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
  annotations: PageAnnotationCreateManyWithoutPageTranslationInput
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

input PageTranslationScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTranslationScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTranslationScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTranslationScalarWhereInput!]
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
  page: PageUpdateOneRequiredWithoutTranslationsInput
  language: LanguageUpdateOneRequiredInput
  tasks: PageTaskUpdateManyWithoutPageTranslationInput
  annotations: PageAnnotationUpdateManyWithoutPageTranslationInput
}

input PageTranslationUpdateManyDataInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
}

input PageTranslationUpdateManyMutationInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
}

input PageTranslationUpdateManyWithoutPageInput {
  create: [PageTranslationCreateWithoutPageInput!]
  connect: [PageTranslationWhereUniqueInput!]
  set: [PageTranslationWhereUniqueInput!]
  disconnect: [PageTranslationWhereUniqueInput!]
  delete: [PageTranslationWhereUniqueInput!]
  update: [PageTranslationUpdateWithWhereUniqueWithoutPageInput!]
  updateMany: [PageTranslationUpdateManyWithWhereNestedInput!]
  deleteMany: [PageTranslationScalarWhereInput!]
  upsert: [PageTranslationUpsertWithWhereUniqueWithoutPageInput!]
}

input PageTranslationUpdateManyWithWhereNestedInput {
  where: PageTranslationScalarWhereInput!
  data: PageTranslationUpdateManyDataInput!
}

input PageTranslationUpdateOneRequiredWithoutAnnotationsInput {
  create: PageTranslationCreateWithoutAnnotationsInput
  connect: PageTranslationWhereUniqueInput
  update: PageTranslationUpdateWithoutAnnotationsDataInput
  upsert: PageTranslationUpsertWithoutAnnotationsInput
}

input PageTranslationUpdateOneRequiredWithoutTasksInput {
  create: PageTranslationCreateWithoutTasksInput
  connect: PageTranslationWhereUniqueInput
  update: PageTranslationUpdateWithoutTasksDataInput
  upsert: PageTranslationUpsertWithoutTasksInput
}

input PageTranslationUpdateWithoutAnnotationsDataInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
  page: PageUpdateOneRequiredWithoutTranslationsInput
  language: LanguageUpdateOneRequiredInput
  tasks: PageTaskUpdateManyWithoutPageTranslationInput
}

input PageTranslationUpdateWithoutPageDataInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
  language: LanguageUpdateOneRequiredInput
  tasks: PageTaskUpdateManyWithoutPageTranslationInput
  annotations: PageAnnotationUpdateManyWithoutPageTranslationInput
}

input PageTranslationUpdateWithoutTasksDataInput {
  url: String
  content: Json
  name: String
  status: PageStatus
  description: String
  publishedFrom: DateTime
  publishedTo: DateTime
  page: PageUpdateOneRequiredWithoutTranslationsInput
  language: LanguageUpdateOneRequiredInput
  annotations: PageAnnotationUpdateManyWithoutPageTranslationInput
}

input PageTranslationUpdateWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput!
  data: PageTranslationUpdateWithoutPageDataInput!
}

input PageTranslationUpsertWithoutAnnotationsInput {
  update: PageTranslationUpdateWithoutAnnotationsDataInput!
  create: PageTranslationCreateWithoutAnnotationsInput!
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
  annotations_every: PageAnnotationWhereInput
  annotations_some: PageAnnotationWhereInput
  annotations_none: PageAnnotationWhereInput
}

input PageTranslationWhereUniqueInput {
  id: ID
}

type PageType implements Node {
  id: ID!
  name: String!
  content: Json!
  website: Website!
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

input PageTypeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PageTypeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PageTypeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PageTypeScalarWhereInput!]
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
  website: WebsiteUpdateOneRequiredWithoutPageTypesInput
}

input PageTypeUpdateInput {
  name: String
  content: Json
  plugins: PageTypeUpdatepluginsInput
  website: WebsiteUpdateOneRequiredWithoutPageTypesInput
}

input PageTypeUpdateManyDataInput {
  name: String
  content: Json
  plugins: PageTypeUpdatepluginsInput
}

input PageTypeUpdateManyMutationInput {
  name: String
  content: Json
  plugins: PageTypeUpdatepluginsInput
}

input PageTypeUpdateManyWithoutWebsiteInput {
  create: [PageTypeCreateWithoutWebsiteInput!]
  connect: [PageTypeWhereUniqueInput!]
  set: [PageTypeWhereUniqueInput!]
  disconnect: [PageTypeWhereUniqueInput!]
  delete: [PageTypeWhereUniqueInput!]
  update: [PageTypeUpdateWithWhereUniqueWithoutWebsiteInput!]
  updateMany: [PageTypeUpdateManyWithWhereNestedInput!]
  deleteMany: [PageTypeScalarWhereInput!]
  upsert: [PageTypeUpsertWithWhereUniqueWithoutWebsiteInput!]
}

input PageTypeUpdateManyWithWhereNestedInput {
  where: PageTypeScalarWhereInput!
  data: PageTypeUpdateManyDataInput!
}

input PageTypeUpdateOneRequiredInput {
  create: PageTypeCreateInput
  connect: PageTypeWhereUniqueInput
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
  website: WebsiteUpdateOneRequiredWithoutPagesInput
  type: PageTypeUpdateOneRequiredInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
}

input PageUpdateInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneRequiredWithoutPagesInput
  type: PageTypeUpdateOneRequiredInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
}

input PageUpdateManyWithoutTagsInput {
  create: [PageCreateWithoutTagsInput!]
  connect: [PageWhereUniqueInput!]
  set: [PageWhereUniqueInput!]
  disconnect: [PageWhereUniqueInput!]
  delete: [PageWhereUniqueInput!]
  update: [PageUpdateWithWhereUniqueWithoutTagsInput!]
  deleteMany: [PageScalarWhereInput!]
  upsert: [PageUpsertWithWhereUniqueWithoutTagsInput!]
}

input PageUpdateManyWithoutWebsiteInput {
  create: [PageCreateWithoutWebsiteInput!]
  connect: [PageWhereUniqueInput!]
  set: [PageWhereUniqueInput!]
  disconnect: [PageWhereUniqueInput!]
  delete: [PageWhereUniqueInput!]
  update: [PageUpdateWithWhereUniqueWithoutWebsiteInput!]
  deleteMany: [PageScalarWhereInput!]
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

input PageUpdateOneRequiredWithoutChatsInput {
  create: PageCreateWithoutChatsInput
  connect: PageWhereUniqueInput
  update: PageUpdateWithoutChatsDataInput
  upsert: PageUpsertWithoutChatsInput
}

input PageUpdateOneRequiredWithoutPluginInput {
  create: PageCreateWithoutPluginInput
  connect: PageWhereUniqueInput
  update: PageUpdateWithoutPluginDataInput
  upsert: PageUpsertWithoutPluginInput
}

input PageUpdateOneRequiredWithoutTranslationsInput {
  create: PageCreateWithoutTranslationsInput
  connect: PageWhereUniqueInput
  update: PageUpdateWithoutTranslationsDataInput
  upsert: PageUpsertWithoutTranslationsInput
}

input PageUpdateWithoutChatsDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneRequiredWithoutPagesInput
  type: PageTypeUpdateOneRequiredInput
  translations: PageTranslationUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
}

input PageUpdateWithoutPluginDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneRequiredWithoutPagesInput
  type: PageTypeUpdateOneRequiredInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
}

input PageUpdateWithoutTagsDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneRequiredWithoutPagesInput
  type: PageTypeUpdateOneRequiredInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  plugin: PagePluginUpdateOneWithoutPageInput
}

input PageUpdateWithoutTranslationsDataInput {
  parent: PageUpdateOneInput
  website: WebsiteUpdateOneRequiredWithoutPagesInput
  type: PageTypeUpdateOneRequiredInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
}

input PageUpdateWithoutWebsiteDataInput {
  parent: PageUpdateOneInput
  type: PageTypeUpdateOneRequiredInput
  translations: PageTranslationUpdateManyWithoutPageInput
  chats: PageChatUpdateManyWithoutPageInput
  tags: TagUpdateManyWithoutPagesInput
  plugin: PagePluginUpdateOneWithoutPageInput
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
}

input PageWhereUniqueInput {
  id: ID
}

type Project implements Node {
  id: ID!
  name: String!
  defaultName: String!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language!]
  defaultLanguage: Language!
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
  defaultLanguage: LanguageUpdateOneRequiredInput
  websites: WebsiteUpdateManyWithoutProjectInput
}

input ProjectUpdateManyMutationInput {
  name: String
  defaultName: String
  settings: Json
}

input ProjectUpdateOneRequiredWithoutWebsitesInput {
  create: ProjectCreateWithoutWebsitesInput
  connect: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutWebsitesDataInput
  upsert: ProjectUpsertWithoutWebsitesInput
}

input ProjectUpdateWithoutWebsitesDataInput {
  name: String
  defaultName: String
  settings: Json
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneRequiredInput
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
  pageAnnotations(where: PageAnnotationWhereInput, orderBy: PageAnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageAnnotation]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  navigations(where: NavigationWhereInput, orderBy: NavigationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Navigation]!
  navigationNodes(where: NavigationNodeWhereInput, orderBy: NavigationNodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NavigationNode]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  subscribers(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscriber]!
  inquiries(where: InquiryWhereInput, orderBy: InquiryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Inquiry]!
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page]!
  pageTypes(where: PageTypeWhereInput, orderBy: PageTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PageType]!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  project(where: ProjectWhereUniqueInput!): Project
  pageTranslation(where: PageTranslationWhereUniqueInput!): PageTranslation
  pagePlugin(where: PagePluginWhereUniqueInput!): PagePlugin
  pageTask(where: PageTaskWhereUniqueInput!): PageTask
  pageChat(where: PageChatWhereUniqueInput!): PageChat
  pageAnnotation(where: PageAnnotationWhereUniqueInput!): PageAnnotation
  file(where: FileWhereUniqueInput!): File
  navigation(where: NavigationWhereUniqueInput!): Navigation
  navigationNode(where: NavigationNodeWhereUniqueInput!): NavigationNode
  tag(where: TagWhereUniqueInput!): Tag
  subscriber(where: SubscriberWhereUniqueInput!): Subscriber
  inquiry(where: InquiryWhereUniqueInput!): Inquiry
  page(where: PageWhereUniqueInput!): Page
  pageType(where: PageTypeWhereUniqueInput!): PageType
  website(where: WebsiteWhereUniqueInput!): Website
  language(where: LanguageWhereUniqueInput!): Language
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  pageTranslationsConnection(where: PageTranslationWhereInput, orderBy: PageTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTranslationConnection!
  pagePluginsConnection(where: PagePluginWhereInput, orderBy: PagePluginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PagePluginConnection!
  pageTasksConnection(where: PageTaskWhereInput, orderBy: PageTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageTaskConnection!
  pageChatsConnection(where: PageChatWhereInput, orderBy: PageChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageChatConnection!
  pageAnnotationsConnection(where: PageAnnotationWhereInput, orderBy: PageAnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageAnnotationConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  navigationsConnection(where: NavigationWhereInput, orderBy: NavigationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NavigationConnection!
  navigationNodesConnection(where: NavigationNodeWhereInput, orderBy: NavigationNodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NavigationNodeConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  subscribersConnection(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubscriberConnection!
  inquiriesConnection(where: InquiryWhereInput, orderBy: InquiryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InquiryConnection!
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

input SubscriberUpdateManyMutationInput {
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
  pageAnnotation(where: PageAnnotationSubscriptionWhereInput): PageAnnotationSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  navigation(where: NavigationSubscriptionWhereInput): NavigationSubscriptionPayload
  navigationNode(where: NavigationNodeSubscriptionWhereInput): NavigationNodeSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  subscriber(where: SubscriberSubscriptionWhereInput): SubscriberSubscriptionPayload
  inquiry(where: InquirySubscriptionWhereInput): InquirySubscriptionPayload
  page(where: PageSubscriptionWhereInput): PageSubscriptionPayload
  pageType(where: PageTypeSubscriptionWhereInput): PageTypeSubscriptionPayload
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
}

type Tag implements Node {
  id: ID!
  website: Website!
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

input TagScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TagScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagScalarWhereInput!]
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
  website: WebsiteUpdateOneRequiredInput
  pages: PageUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
  displayInNavigation: Boolean
  color: String
  plugins: TagUpdatepluginsInput
}

input TagUpdateManyMutationInput {
  name: String
  displayInNavigation: Boolean
  color: String
  plugins: TagUpdatepluginsInput
}

input TagUpdateManyWithoutPagesInput {
  create: [TagCreateWithoutPagesInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutPagesInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
  deleteMany: [TagScalarWhereInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutPagesInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdatepluginsInput {
  set: [String!]
}

input TagUpdateWithoutPagesDataInput {
  name: String
  displayInNavigation: Boolean
  color: String
  plugins: TagUpdatepluginsInput
  website: WebsiteUpdateOneRequiredInput
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
  project: Project!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language!]
  defaultLanguage: Language!
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

input WebsiteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteScalarWhereInput!]
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
  project: ProjectUpdateOneRequiredWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneRequiredInput
  pageTypes: PageTypeUpdateManyWithoutWebsiteInput
  pages: PageUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateInput {
  title: String
  urlMask: String
  settings: Json
  project: ProjectUpdateOneRequiredWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneRequiredInput
  pageTypes: PageTypeUpdateManyWithoutWebsiteInput
  pages: PageUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateManyDataInput {
  title: String
  urlMask: String
  settings: Json
}

input WebsiteUpdateManyMutationInput {
  title: String
  urlMask: String
  settings: Json
}

input WebsiteUpdateManyWithoutProjectInput {
  create: [WebsiteCreateWithoutProjectInput!]
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutProjectInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutProjectInput!]
}

input WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput!
  data: WebsiteUpdateManyDataInput!
}

input WebsiteUpdateOneRequiredInput {
  create: WebsiteCreateInput
  connect: WebsiteWhereUniqueInput
  update: WebsiteUpdateDataInput
  upsert: WebsiteUpsertNestedInput
}

input WebsiteUpdateOneRequiredWithoutPagesInput {
  create: WebsiteCreateWithoutPagesInput
  connect: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutPagesDataInput
  upsert: WebsiteUpsertWithoutPagesInput
}

input WebsiteUpdateOneRequiredWithoutPageTypesInput {
  create: WebsiteCreateWithoutPageTypesInput
  connect: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutPageTypesDataInput
  upsert: WebsiteUpsertWithoutPageTypesInput
}

input WebsiteUpdateWithoutPagesDataInput {
  title: String
  urlMask: String
  settings: Json
  project: ProjectUpdateOneRequiredWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneRequiredInput
  pageTypes: PageTypeUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutPageTypesDataInput {
  title: String
  urlMask: String
  settings: Json
  project: ProjectUpdateOneRequiredWithoutWebsitesInput
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneRequiredInput
  pages: PageUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithoutProjectDataInput {
  title: String
  urlMask: String
  settings: Json
  languages: LanguageUpdateManyInput
  defaultLanguage: LanguageUpdateOneRequiredInput
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

export type PageAnnotationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'key_ASC' |
  'key_DESC' |
  'value_ASC' |
  'value_DESC' |
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

export interface FileUpdateManyMutationInput {
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
  ip?: String | null
}

export interface InquiryUpdateManyMutationInput {
  message?: Json | null
  url?: String | null
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

export interface LanguageScalarWhereInput {
  AND?: LanguageScalarWhereInput[] | LanguageScalarWhereInput | null
  OR?: LanguageScalarWhereInput[] | LanguageScalarWhereInput | null
  NOT?: LanguageScalarWhereInput[] | LanguageScalarWhereInput | null
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

export interface LanguageUpdateManyDataInput {
  code?: String | null
  name?: String | null
  englishName?: String | null
  isDefault?: Boolean | null
  isEnabled?: Boolean | null
}

export interface LanguageUpdateManyInput {
  create?: LanguageCreateInput[] | LanguageCreateInput | null
  connect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
  set?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
  disconnect?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
  delete?: LanguageWhereUniqueInput[] | LanguageWhereUniqueInput | null
  update?: LanguageUpdateWithWhereUniqueNestedInput[] | LanguageUpdateWithWhereUniqueNestedInput | null
  updateMany?: LanguageUpdateManyWithWhereNestedInput[] | LanguageUpdateManyWithWhereNestedInput | null
  deleteMany?: LanguageScalarWhereInput[] | LanguageScalarWhereInput | null
  upsert?: LanguageUpsertWithWhereUniqueNestedInput[] | LanguageUpsertWithWhereUniqueNestedInput | null
}

export interface LanguageUpdateManyMutationInput {
  code?: String | null
  name?: String | null
  englishName?: String | null
  isDefault?: Boolean | null
  isEnabled?: Boolean | null
}

export interface LanguageUpdateManyWithWhereNestedInput {
  where: LanguageScalarWhereInput
  data: LanguageUpdateManyDataInput
}

export interface LanguageUpdateOneRequiredInput {
  create?: LanguageCreateInput | null
  connect?: LanguageWhereUniqueInput | null
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

export interface NavigationNodeScalarWhereInput {
  AND?: NavigationNodeScalarWhereInput[] | NavigationNodeScalarWhereInput | null
  OR?: NavigationNodeScalarWhereInput[] | NavigationNodeScalarWhereInput | null
  NOT?: NavigationNodeScalarWhereInput[] | NavigationNodeScalarWhereInput | null
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
  navigation?: NavigationUpdateOneRequiredWithoutNodesInput | null
}

export interface NavigationNodeUpdateManyDataInput {
  page?: ID_Input | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Input | null
}

export interface NavigationNodeUpdateManyMutationInput {
  page?: ID_Input | null
  title?: String | null
  link?: String | null
  order?: Int | null
  parent?: ID_Input | null
}

export interface NavigationNodeUpdateManyWithoutNavigationInput {
  create?: NavigationNodeCreateWithoutNavigationInput[] | NavigationNodeCreateWithoutNavigationInput | null
  connect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
  set?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
  disconnect?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
  delete?: NavigationNodeWhereUniqueInput[] | NavigationNodeWhereUniqueInput | null
  update?: NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput[] | NavigationNodeUpdateWithWhereUniqueWithoutNavigationInput | null
  updateMany?: NavigationNodeUpdateManyWithWhereNestedInput[] | NavigationNodeUpdateManyWithWhereNestedInput | null
  deleteMany?: NavigationNodeScalarWhereInput[] | NavigationNodeScalarWhereInput | null
  upsert?: NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput[] | NavigationNodeUpsertWithWhereUniqueWithoutNavigationInput | null
}

export interface NavigationNodeUpdateManyWithWhereNestedInput {
  where: NavigationNodeScalarWhereInput
  data: NavigationNodeUpdateManyDataInput
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
  website?: WebsiteUpdateOneRequiredInput | null
  nodes?: NavigationNodeUpdateManyWithoutNavigationInput | null
}

export interface NavigationUpdateManyMutationInput {
  name?: String | null
}

export interface NavigationUpdateOneRequiredWithoutNodesInput {
  create?: NavigationCreateWithoutNodesInput | null
  connect?: NavigationWhereUniqueInput | null
  update?: NavigationUpdateWithoutNodesDataInput | null
  upsert?: NavigationUpsertWithoutNodesInput | null
}

export interface NavigationUpdateWithoutNodesDataInput {
  name?: String | null
  website?: WebsiteUpdateOneRequiredInput | null
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

export interface PageAnnotationCreateInput {
  key: String
  value: String
  pageTranslation: PageTranslationCreateOneWithoutAnnotationsInput
}

export interface PageAnnotationCreateManyWithoutPageTranslationInput {
  create?: PageAnnotationCreateWithoutPageTranslationInput[] | PageAnnotationCreateWithoutPageTranslationInput | null
  connect?: PageAnnotationWhereUniqueInput[] | PageAnnotationWhereUniqueInput | null
}

export interface PageAnnotationCreateWithoutPageTranslationInput {
  key: String
  value: String
}

export interface PageAnnotationScalarWhereInput {
  AND?: PageAnnotationScalarWhereInput[] | PageAnnotationScalarWhereInput | null
  OR?: PageAnnotationScalarWhereInput[] | PageAnnotationScalarWhereInput | null
  NOT?: PageAnnotationScalarWhereInput[] | PageAnnotationScalarWhereInput | null
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
  key?: String | null
  key_not?: String | null
  key_in?: String[] | String | null
  key_not_in?: String[] | String | null
  key_lt?: String | null
  key_lte?: String | null
  key_gt?: String | null
  key_gte?: String | null
  key_contains?: String | null
  key_not_contains?: String | null
  key_starts_with?: String | null
  key_not_starts_with?: String | null
  key_ends_with?: String | null
  key_not_ends_with?: String | null
  value?: String | null
  value_not?: String | null
  value_in?: String[] | String | null
  value_not_in?: String[] | String | null
  value_lt?: String | null
  value_lte?: String | null
  value_gt?: String | null
  value_gte?: String | null
  value_contains?: String | null
  value_not_contains?: String | null
  value_starts_with?: String | null
  value_not_starts_with?: String | null
  value_ends_with?: String | null
  value_not_ends_with?: String | null
}

export interface PageAnnotationSubscriptionWhereInput {
  AND?: PageAnnotationSubscriptionWhereInput[] | PageAnnotationSubscriptionWhereInput | null
  OR?: PageAnnotationSubscriptionWhereInput[] | PageAnnotationSubscriptionWhereInput | null
  NOT?: PageAnnotationSubscriptionWhereInput[] | PageAnnotationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PageAnnotationWhereInput | null
}

export interface PageAnnotationUpdateInput {
  key?: String | null
  value?: String | null
  pageTranslation?: PageTranslationUpdateOneRequiredWithoutAnnotationsInput | null
}

export interface PageAnnotationUpdateManyDataInput {
  key?: String | null
  value?: String | null
}

export interface PageAnnotationUpdateManyMutationInput {
  key?: String | null
  value?: String | null
}

export interface PageAnnotationUpdateManyWithoutPageTranslationInput {
  create?: PageAnnotationCreateWithoutPageTranslationInput[] | PageAnnotationCreateWithoutPageTranslationInput | null
  connect?: PageAnnotationWhereUniqueInput[] | PageAnnotationWhereUniqueInput | null
  set?: PageAnnotationWhereUniqueInput[] | PageAnnotationWhereUniqueInput | null
  disconnect?: PageAnnotationWhereUniqueInput[] | PageAnnotationWhereUniqueInput | null
  delete?: PageAnnotationWhereUniqueInput[] | PageAnnotationWhereUniqueInput | null
  update?: PageAnnotationUpdateWithWhereUniqueWithoutPageTranslationInput[] | PageAnnotationUpdateWithWhereUniqueWithoutPageTranslationInput | null
  updateMany?: PageAnnotationUpdateManyWithWhereNestedInput[] | PageAnnotationUpdateManyWithWhereNestedInput | null
  deleteMany?: PageAnnotationScalarWhereInput[] | PageAnnotationScalarWhereInput | null
  upsert?: PageAnnotationUpsertWithWhereUniqueWithoutPageTranslationInput[] | PageAnnotationUpsertWithWhereUniqueWithoutPageTranslationInput | null
}

export interface PageAnnotationUpdateManyWithWhereNestedInput {
  where: PageAnnotationScalarWhereInput
  data: PageAnnotationUpdateManyDataInput
}

export interface PageAnnotationUpdateWithoutPageTranslationDataInput {
  key?: String | null
  value?: String | null
}

export interface PageAnnotationUpdateWithWhereUniqueWithoutPageTranslationInput {
  where: PageAnnotationWhereUniqueInput
  data: PageAnnotationUpdateWithoutPageTranslationDataInput
}

export interface PageAnnotationUpsertWithWhereUniqueWithoutPageTranslationInput {
  where: PageAnnotationWhereUniqueInput
  update: PageAnnotationUpdateWithoutPageTranslationDataInput
  create: PageAnnotationCreateWithoutPageTranslationInput
}

export interface PageAnnotationWhereInput {
  AND?: PageAnnotationWhereInput[] | PageAnnotationWhereInput | null
  OR?: PageAnnotationWhereInput[] | PageAnnotationWhereInput | null
  NOT?: PageAnnotationWhereInput[] | PageAnnotationWhereInput | null
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
  key?: String | null
  key_not?: String | null
  key_in?: String[] | String | null
  key_not_in?: String[] | String | null
  key_lt?: String | null
  key_lte?: String | null
  key_gt?: String | null
  key_gte?: String | null
  key_contains?: String | null
  key_not_contains?: String | null
  key_starts_with?: String | null
  key_not_starts_with?: String | null
  key_ends_with?: String | null
  key_not_ends_with?: String | null
  value?: String | null
  value_not?: String | null
  value_in?: String[] | String | null
  value_not_in?: String[] | String | null
  value_lt?: String | null
  value_lte?: String | null
  value_gt?: String | null
  value_gte?: String | null
  value_contains?: String | null
  value_not_contains?: String | null
  value_starts_with?: String | null
  value_not_starts_with?: String | null
  value_ends_with?: String | null
  value_not_ends_with?: String | null
  pageTranslation?: PageTranslationWhereInput | null
}

export interface PageAnnotationWhereUniqueInput {
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

export interface PageChatScalarWhereInput {
  AND?: PageChatScalarWhereInput[] | PageChatScalarWhereInput | null
  OR?: PageChatScalarWhereInput[] | PageChatScalarWhereInput | null
  NOT?: PageChatScalarWhereInput[] | PageChatScalarWhereInput | null
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
  page?: PageUpdateOneRequiredWithoutChatsInput | null
}

export interface PageChatUpdateManyDataInput {
  text?: String | null
  auth0id?: ID_Input | null
}

export interface PageChatUpdateManyMutationInput {
  text?: String | null
  auth0id?: ID_Input | null
}

export interface PageChatUpdateManyWithoutPageInput {
  create?: PageChatCreateWithoutPageInput[] | PageChatCreateWithoutPageInput | null
  connect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
  set?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
  disconnect?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
  delete?: PageChatWhereUniqueInput[] | PageChatWhereUniqueInput | null
  update?: PageChatUpdateWithWhereUniqueWithoutPageInput[] | PageChatUpdateWithWhereUniqueWithoutPageInput | null
  updateMany?: PageChatUpdateManyWithWhereNestedInput[] | PageChatUpdateManyWithWhereNestedInput | null
  deleteMany?: PageChatScalarWhereInput[] | PageChatScalarWhereInput | null
  upsert?: PageChatUpsertWithWhereUniqueWithoutPageInput[] | PageChatUpsertWithWhereUniqueWithoutPageInput | null
}

export interface PageChatUpdateManyWithWhereNestedInput {
  where: PageChatScalarWhereInput
  data: PageChatUpdateManyDataInput
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
}

export interface PageCreateWithoutPluginInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
}

export interface PageCreateWithoutTagsInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
}

export interface PageCreateWithoutTranslationsInput {
  parent?: PageCreateOneInput | null
  website: WebsiteCreateOneWithoutPagesInput
  type: PageTypeCreateOneInput
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
}

export interface PageCreateWithoutWebsiteInput {
  parent?: PageCreateOneInput | null
  type: PageTypeCreateOneInput
  translations?: PageTranslationCreateManyWithoutPageInput | null
  chats?: PageChatCreateManyWithoutPageInput | null
  tags?: TagCreateManyWithoutPagesInput | null
  plugin?: PagePluginCreateOneWithoutPageInput | null
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
  page?: PageUpdateOneRequiredWithoutPluginInput | null
  language?: LanguageUpdateOneRequiredInput | null
}

export interface PagePluginUpdateManyMutationInput {
  plugin?: String | null
  content?: Json | null
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
  language?: LanguageUpdateOneRequiredInput | null
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

export interface PageScalarWhereInput {
  AND?: PageScalarWhereInput[] | PageScalarWhereInput | null
  OR?: PageScalarWhereInput[] | PageScalarWhereInput | null
  NOT?: PageScalarWhereInput[] | PageScalarWhereInput | null
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

export interface PageTaskScalarWhereInput {
  AND?: PageTaskScalarWhereInput[] | PageTaskScalarWhereInput | null
  OR?: PageTaskScalarWhereInput[] | PageTaskScalarWhereInput | null
  NOT?: PageTaskScalarWhereInput[] | PageTaskScalarWhereInput | null
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
  pageTranslation?: PageTranslationUpdateOneRequiredWithoutTasksInput | null
}

export interface PageTaskUpdateManyDataInput {
  done?: Boolean | null
  name?: String | null
  description?: String | null
  auth0id?: ID_Input | null
}

export interface PageTaskUpdateManyMutationInput {
  done?: Boolean | null
  name?: String | null
  description?: String | null
  auth0id?: ID_Input | null
}

export interface PageTaskUpdateManyWithoutPageTranslationInput {
  create?: PageTaskCreateWithoutPageTranslationInput[] | PageTaskCreateWithoutPageTranslationInput | null
  connect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
  set?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
  disconnect?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
  delete?: PageTaskWhereUniqueInput[] | PageTaskWhereUniqueInput | null
  update?: PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpdateWithWhereUniqueWithoutPageTranslationInput | null
  updateMany?: PageTaskUpdateManyWithWhereNestedInput[] | PageTaskUpdateManyWithWhereNestedInput | null
  deleteMany?: PageTaskScalarWhereInput[] | PageTaskScalarWhereInput | null
  upsert?: PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput[] | PageTaskUpsertWithWhereUniqueWithoutPageTranslationInput | null
}

export interface PageTaskUpdateManyWithWhereNestedInput {
  where: PageTaskScalarWhereInput
  data: PageTaskUpdateManyDataInput
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
  annotations?: PageAnnotationCreateManyWithoutPageTranslationInput | null
}

export interface PageTranslationCreateManyWithoutPageInput {
  create?: PageTranslationCreateWithoutPageInput[] | PageTranslationCreateWithoutPageInput | null
  connect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
}

export interface PageTranslationCreateOneWithoutAnnotationsInput {
  create?: PageTranslationCreateWithoutAnnotationsInput | null
  connect?: PageTranslationWhereUniqueInput | null
}

export interface PageTranslationCreateOneWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput | null
  connect?: PageTranslationWhereUniqueInput | null
}

export interface PageTranslationCreateWithoutAnnotationsInput {
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
  annotations?: PageAnnotationCreateManyWithoutPageTranslationInput | null
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
  annotations?: PageAnnotationCreateManyWithoutPageTranslationInput | null
}

export interface PageTranslationScalarWhereInput {
  AND?: PageTranslationScalarWhereInput[] | PageTranslationScalarWhereInput | null
  OR?: PageTranslationScalarWhereInput[] | PageTranslationScalarWhereInput | null
  NOT?: PageTranslationScalarWhereInput[] | PageTranslationScalarWhereInput | null
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
  page?: PageUpdateOneRequiredWithoutTranslationsInput | null
  language?: LanguageUpdateOneRequiredInput | null
  tasks?: PageTaskUpdateManyWithoutPageTranslationInput | null
  annotations?: PageAnnotationUpdateManyWithoutPageTranslationInput | null
}

export interface PageTranslationUpdateManyDataInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
}

export interface PageTranslationUpdateManyMutationInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
}

export interface PageTranslationUpdateManyWithoutPageInput {
  create?: PageTranslationCreateWithoutPageInput[] | PageTranslationCreateWithoutPageInput | null
  connect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
  set?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
  disconnect?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
  delete?: PageTranslationWhereUniqueInput[] | PageTranslationWhereUniqueInput | null
  update?: PageTranslationUpdateWithWhereUniqueWithoutPageInput[] | PageTranslationUpdateWithWhereUniqueWithoutPageInput | null
  updateMany?: PageTranslationUpdateManyWithWhereNestedInput[] | PageTranslationUpdateManyWithWhereNestedInput | null
  deleteMany?: PageTranslationScalarWhereInput[] | PageTranslationScalarWhereInput | null
  upsert?: PageTranslationUpsertWithWhereUniqueWithoutPageInput[] | PageTranslationUpsertWithWhereUniqueWithoutPageInput | null
}

export interface PageTranslationUpdateManyWithWhereNestedInput {
  where: PageTranslationScalarWhereInput
  data: PageTranslationUpdateManyDataInput
}

export interface PageTranslationUpdateOneRequiredWithoutAnnotationsInput {
  create?: PageTranslationCreateWithoutAnnotationsInput | null
  connect?: PageTranslationWhereUniqueInput | null
  update?: PageTranslationUpdateWithoutAnnotationsDataInput | null
  upsert?: PageTranslationUpsertWithoutAnnotationsInput | null
}

export interface PageTranslationUpdateOneRequiredWithoutTasksInput {
  create?: PageTranslationCreateWithoutTasksInput | null
  connect?: PageTranslationWhereUniqueInput | null
  update?: PageTranslationUpdateWithoutTasksDataInput | null
  upsert?: PageTranslationUpsertWithoutTasksInput | null
}

export interface PageTranslationUpdateWithoutAnnotationsDataInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  page?: PageUpdateOneRequiredWithoutTranslationsInput | null
  language?: LanguageUpdateOneRequiredInput | null
  tasks?: PageTaskUpdateManyWithoutPageTranslationInput | null
}

export interface PageTranslationUpdateWithoutPageDataInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  language?: LanguageUpdateOneRequiredInput | null
  tasks?: PageTaskUpdateManyWithoutPageTranslationInput | null
  annotations?: PageAnnotationUpdateManyWithoutPageTranslationInput | null
}

export interface PageTranslationUpdateWithoutTasksDataInput {
  url?: String | null
  content?: Json | null
  name?: String | null
  status?: PageStatus | null
  description?: String | null
  publishedFrom?: DateTime | null
  publishedTo?: DateTime | null
  page?: PageUpdateOneRequiredWithoutTranslationsInput | null
  language?: LanguageUpdateOneRequiredInput | null
  annotations?: PageAnnotationUpdateManyWithoutPageTranslationInput | null
}

export interface PageTranslationUpdateWithWhereUniqueWithoutPageInput {
  where: PageTranslationWhereUniqueInput
  data: PageTranslationUpdateWithoutPageDataInput
}

export interface PageTranslationUpsertWithoutAnnotationsInput {
  update: PageTranslationUpdateWithoutAnnotationsDataInput
  create: PageTranslationCreateWithoutAnnotationsInput
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
  annotations_every?: PageAnnotationWhereInput | null
  annotations_some?: PageAnnotationWhereInput | null
  annotations_none?: PageAnnotationWhereInput | null
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

export interface PageTypeScalarWhereInput {
  AND?: PageTypeScalarWhereInput[] | PageTypeScalarWhereInput | null
  OR?: PageTypeScalarWhereInput[] | PageTypeScalarWhereInput | null
  NOT?: PageTypeScalarWhereInput[] | PageTypeScalarWhereInput | null
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
  website?: WebsiteUpdateOneRequiredWithoutPageTypesInput | null
}

export interface PageTypeUpdateInput {
  name?: String | null
  content?: Json | null
  plugins?: PageTypeUpdatepluginsInput | null
  website?: WebsiteUpdateOneRequiredWithoutPageTypesInput | null
}

export interface PageTypeUpdateManyDataInput {
  name?: String | null
  content?: Json | null
  plugins?: PageTypeUpdatepluginsInput | null
}

export interface PageTypeUpdateManyMutationInput {
  name?: String | null
  content?: Json | null
  plugins?: PageTypeUpdatepluginsInput | null
}

export interface PageTypeUpdateManyWithoutWebsiteInput {
  create?: PageTypeCreateWithoutWebsiteInput[] | PageTypeCreateWithoutWebsiteInput | null
  connect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
  set?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
  disconnect?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
  delete?: PageTypeWhereUniqueInput[] | PageTypeWhereUniqueInput | null
  update?: PageTypeUpdateWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpdateWithWhereUniqueWithoutWebsiteInput | null
  updateMany?: PageTypeUpdateManyWithWhereNestedInput[] | PageTypeUpdateManyWithWhereNestedInput | null
  deleteMany?: PageTypeScalarWhereInput[] | PageTypeScalarWhereInput | null
  upsert?: PageTypeUpsertWithWhereUniqueWithoutWebsiteInput[] | PageTypeUpsertWithWhereUniqueWithoutWebsiteInput | null
}

export interface PageTypeUpdateManyWithWhereNestedInput {
  where: PageTypeScalarWhereInput
  data: PageTypeUpdateManyDataInput
}

export interface PageTypeUpdateOneRequiredInput {
  create?: PageTypeCreateInput | null
  connect?: PageTypeWhereUniqueInput | null
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
  website?: WebsiteUpdateOneRequiredWithoutPagesInput | null
  type?: PageTypeUpdateOneRequiredInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
}

export interface PageUpdateInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneRequiredWithoutPagesInput | null
  type?: PageTypeUpdateOneRequiredInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
}

export interface PageUpdateManyWithoutTagsInput {
  create?: PageCreateWithoutTagsInput[] | PageCreateWithoutTagsInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  set?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  update?: PageUpdateWithWhereUniqueWithoutTagsInput[] | PageUpdateWithWhereUniqueWithoutTagsInput | null
  deleteMany?: PageScalarWhereInput[] | PageScalarWhereInput | null
  upsert?: PageUpsertWithWhereUniqueWithoutTagsInput[] | PageUpsertWithWhereUniqueWithoutTagsInput | null
}

export interface PageUpdateManyWithoutWebsiteInput {
  create?: PageCreateWithoutWebsiteInput[] | PageCreateWithoutWebsiteInput | null
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  set?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput | null
  update?: PageUpdateWithWhereUniqueWithoutWebsiteInput[] | PageUpdateWithWhereUniqueWithoutWebsiteInput | null
  deleteMany?: PageScalarWhereInput[] | PageScalarWhereInput | null
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

export interface PageUpdateOneRequiredWithoutChatsInput {
  create?: PageCreateWithoutChatsInput | null
  connect?: PageWhereUniqueInput | null
  update?: PageUpdateWithoutChatsDataInput | null
  upsert?: PageUpsertWithoutChatsInput | null
}

export interface PageUpdateOneRequiredWithoutPluginInput {
  create?: PageCreateWithoutPluginInput | null
  connect?: PageWhereUniqueInput | null
  update?: PageUpdateWithoutPluginDataInput | null
  upsert?: PageUpsertWithoutPluginInput | null
}

export interface PageUpdateOneRequiredWithoutTranslationsInput {
  create?: PageCreateWithoutTranslationsInput | null
  connect?: PageWhereUniqueInput | null
  update?: PageUpdateWithoutTranslationsDataInput | null
  upsert?: PageUpsertWithoutTranslationsInput | null
}

export interface PageUpdateWithoutChatsDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneRequiredWithoutPagesInput | null
  type?: PageTypeUpdateOneRequiredInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
}

export interface PageUpdateWithoutPluginDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneRequiredWithoutPagesInput | null
  type?: PageTypeUpdateOneRequiredInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
}

export interface PageUpdateWithoutTagsDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneRequiredWithoutPagesInput | null
  type?: PageTypeUpdateOneRequiredInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
}

export interface PageUpdateWithoutTranslationsDataInput {
  parent?: PageUpdateOneInput | null
  website?: WebsiteUpdateOneRequiredWithoutPagesInput | null
  type?: PageTypeUpdateOneRequiredInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
}

export interface PageUpdateWithoutWebsiteDataInput {
  parent?: PageUpdateOneInput | null
  type?: PageTypeUpdateOneRequiredInput | null
  translations?: PageTranslationUpdateManyWithoutPageInput | null
  chats?: PageChatUpdateManyWithoutPageInput | null
  tags?: TagUpdateManyWithoutPagesInput | null
  plugin?: PagePluginUpdateOneWithoutPageInput | null
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
  defaultLanguage?: LanguageUpdateOneRequiredInput | null
  websites?: WebsiteUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateManyMutationInput {
  name?: String | null
  defaultName?: String | null
  settings?: Json | null
}

export interface ProjectUpdateOneRequiredWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput | null
  connect?: ProjectWhereUniqueInput | null
  update?: ProjectUpdateWithoutWebsitesDataInput | null
  upsert?: ProjectUpsertWithoutWebsitesInput | null
}

export interface ProjectUpdateWithoutWebsitesDataInput {
  name?: String | null
  defaultName?: String | null
  settings?: Json | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneRequiredInput | null
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

export interface SubscriberUpdateManyMutationInput {
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

export interface TagScalarWhereInput {
  AND?: TagScalarWhereInput[] | TagScalarWhereInput | null
  OR?: TagScalarWhereInput[] | TagScalarWhereInput | null
  NOT?: TagScalarWhereInput[] | TagScalarWhereInput | null
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
  website?: WebsiteUpdateOneRequiredInput | null
  pages?: PageUpdateManyWithoutTagsInput | null
}

export interface TagUpdateManyDataInput {
  name?: String | null
  displayInNavigation?: Boolean | null
  color?: String | null
  plugins?: TagUpdatepluginsInput | null
}

export interface TagUpdateManyMutationInput {
  name?: String | null
  displayInNavigation?: Boolean | null
  color?: String | null
  plugins?: TagUpdatepluginsInput | null
}

export interface TagUpdateManyWithoutPagesInput {
  create?: TagCreateWithoutPagesInput[] | TagCreateWithoutPagesInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  set?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  update?: TagUpdateWithWhereUniqueWithoutPagesInput[] | TagUpdateWithWhereUniqueWithoutPagesInput | null
  updateMany?: TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput | null
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput | null
  upsert?: TagUpsertWithWhereUniqueWithoutPagesInput[] | TagUpsertWithWhereUniqueWithoutPagesInput | null
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface TagUpdatepluginsInput {
  set?: String[] | String | null
}

export interface TagUpdateWithoutPagesDataInput {
  name?: String | null
  displayInNavigation?: Boolean | null
  color?: String | null
  plugins?: TagUpdatepluginsInput | null
  website?: WebsiteUpdateOneRequiredInput | null
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

export interface WebsiteScalarWhereInput {
  AND?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  OR?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  NOT?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
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
  project?: ProjectUpdateOneRequiredWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneRequiredInput | null
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput | null
  pages?: PageUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  project?: ProjectUpdateOneRequiredWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneRequiredInput | null
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput | null
  pages?: PageUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateManyDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
}

export interface WebsiteUpdateManyMutationInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
}

export interface WebsiteUpdateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  set?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueWithoutProjectInput[] | WebsiteUpdateWithWhereUniqueWithoutProjectInput | null
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput | null
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  upsert?: WebsiteUpsertWithWhereUniqueWithoutProjectInput[] | WebsiteUpsertWithWhereUniqueWithoutProjectInput | null
}

export interface WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput
  data: WebsiteUpdateManyDataInput
}

export interface WebsiteUpdateOneRequiredInput {
  create?: WebsiteCreateInput | null
  connect?: WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateDataInput | null
  upsert?: WebsiteUpsertNestedInput | null
}

export interface WebsiteUpdateOneRequiredWithoutPagesInput {
  create?: WebsiteCreateWithoutPagesInput | null
  connect?: WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithoutPagesDataInput | null
  upsert?: WebsiteUpsertWithoutPagesInput | null
}

export interface WebsiteUpdateOneRequiredWithoutPageTypesInput {
  create?: WebsiteCreateWithoutPageTypesInput | null
  connect?: WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithoutPageTypesDataInput | null
  upsert?: WebsiteUpsertWithoutPageTypesInput | null
}

export interface WebsiteUpdateWithoutPagesDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  project?: ProjectUpdateOneRequiredWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneRequiredInput | null
  pageTypes?: PageTypeUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithoutPageTypesDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  project?: ProjectUpdateOneRequiredWithoutWebsitesInput | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneRequiredInput | null
  pages?: PageUpdateManyWithoutWebsiteInput | null
}

export interface WebsiteUpdateWithoutProjectDataInput {
  title?: String | null
  urlMask?: String | null
  settings?: Json | null
  languages?: LanguageUpdateManyInput | null
  defaultLanguage?: LanguageUpdateOneRequiredInput | null
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

export interface AggregatePageAnnotation {
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
}

export interface PageAnnotation extends Node {
  id: ID_Output
  pageTranslation: PageTranslation
  key: String
  value: String
}

/*
 * A connection to a list of items.

 */
export interface PageAnnotationConnection {
  pageInfo: PageInfo
  edges: Array<PageAnnotationEdge | null>
  aggregate: AggregatePageAnnotation
}

/*
 * An edge in a connection.

 */
export interface PageAnnotationEdge {
  node: PageAnnotation
  cursor: String
}

export interface PageAnnotationPreviousValues {
  id: ID_Output
  key: String
  value: String
}

export interface PageAnnotationSubscriptionPayload {
  mutation: MutationType
  node?: PageAnnotation | null
  updatedFields?: Array<String> | null
  previousValues?: PageAnnotationPreviousValues | null
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
  annotations?: Array<PageAnnotation> | null
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