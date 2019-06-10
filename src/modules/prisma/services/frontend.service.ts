import { Injectable } from '@nestjs/common';

export interface IResolvedUrl {
  website: string | null;
  language: string | null;
  pages: string[] | null;
}

@Injectable()
export class FrontendService {

  public resolveUrl(url: string): IResolvedUrl {
    if (url[url.length - 1] !== '/') {
      url += '/';
    }

    const regex = /^\/?([a-z-_]{3,}\/?)?([a-z]{2}\/)([a-z-_0-9]{3,}[a-z-_\/0-9]*)?\/?$/gi;
    const matches = regex.exec(url);

    const res = {
      website: null,
      language: null,
      pages: null,
    };

    if (!matches) {
      return res;
    }

    matches.forEach((match, groupIndex) => {
      switch (groupIndex) {
        case 1:
          // This is group of website
          if (match) {
            res.website = match.replace('/', '');
          }
          break;
        case 2:
          // This is group for language
          if (match) {
            res.language = match.replace('/', '');
          }
          break;
        case 3:
          // This is group for pages
          if (match) {
            const pages = match.split('/').filter((p) => p.length > 2);
            res.pages = [ ...pages ];
          }
          break;
        default:
          break;
      }
    });

    return res;
  }

}
