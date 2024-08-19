import axios from 'axios';
import {
  CATEGORIES,
  FilterParams,
  GuardianArticle,
  IArticle,
} from '@/app/types/article';
import { API_KEY, ENDPOINT, SOURCES_ID, SOURCES_NAME } from '@/app/constants';
import { mapCategoryToGuardianSection } from '@/app/constants/theGuardian';

type TheGuardianNewsResult = {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: GuardianArticle[];
  };
};

type RequestParams = Omit<FilterParams, 'source'>;

const getArticles = async (
  requestParams: RequestParams,
): Promise<IArticle[]> => {
  const { query = '', category } = requestParams;
  const { SEARCH, TOP_HEADLINES } = ENDPOINT[SOURCES_ID.THE_GUARDIAN];

  const section = category
    ? mapCategoryToGuardianSection(category as CATEGORIES)
    : undefined;

  const url = query ? SEARCH : TOP_HEADLINES;

  const response = await axios.get<TheGuardianNewsResult>(url, {
    params: {
      q: query,
      section: section,
      'api-key': API_KEY[SOURCES_ID.THE_GUARDIAN],
      'show-tags': 'contributor',
    },
  });

  return response.data.response.results.map((article) => ({
    source: {
      id: SOURCES_ID.THE_GUARDIAN,
      name: SOURCES_NAME[SOURCES_ID.THE_GUARDIAN],
    },
    author: article.tags[0]?.webTitle || 'Unknown',
    title: article.webTitle,
    description: null,
    url: article.webUrl,
    urlToImage: null,
    publishedAt: article.webPublicationDate,
    content: null,
  }));
};

export default { getArticles };
