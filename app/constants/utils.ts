import newsOrgApi from '@/app/api/newsOrgApi';
import nytApi from '@/app/api/nytApi';
import theGuardianApi from '@/app/api/theGuardianApi';
import { FilterParams, IArticle } from '@/app/types/article';
import { SOURCES_ID } from '@/app/constants';

export const redirectWithParams = <T extends FilterParams>(data: T) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.searchParams);

  Object.keys(data).forEach((key) => {
    const value = data[key as keyof T];
    if (!value || (Array.isArray(value) && value.length === 0)) {
      searchParams.delete(key);
      return;
    }
    searchParams.set(
      key,
      Array.isArray(value) ? JSON.stringify(value) : (value as string),
    );
  });
  url.search = searchParams.toString();
  window.location.href = url.toString();
};

export const fetchResources = async (params: FilterParams) => {
  const decodedSources = getDecodedSources(params.source as unknown as string);

  const requestParams: Omit<FilterParams, 'source'> = {
    query: params.query,
    category: params.category,
  };

  const articles: IArticle[] = [];

  try {
    for (const source of decodedSources) {
      switch (source) {
        case SOURCES_ID.NYT:
          const nyt = await nytApi.getArticles(requestParams);
          articles.push(...nyt);
          break;
        case SOURCES_ID.THE_GUARDIAN:
          const guardian = await theGuardianApi.getArticles(requestParams);
          articles.push(...guardian);
          break;
        case SOURCES_ID.NEWS_ORG:
          const news = await newsOrgApi.getArticles(requestParams);
          articles.push(...news);
          break;
      }
    }
  } catch (e) {
    console.error(e);
  }

  return articles;
};

export const getDecodedSources = (
  sources: string,
): (typeof SOURCES_ID)[keyof typeof SOURCES_ID][] => {
  const decodedSources = sources
    ? JSON.parse(sources)
    : [SOURCES_ID.NYT, SOURCES_ID.THE_GUARDIAN, SOURCES_ID.NEWS_ORG];

  return decodedSources;
};

export const getAuthor = (article: IArticle) => {
  return article.author || article.source?.name || 'Unknown';
};
