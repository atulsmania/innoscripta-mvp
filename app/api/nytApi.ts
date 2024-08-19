import axios from 'axios';
import {
  CATEGORIES,
  FilterParams,
  IArticle,
  NYTArticle,
} from '@/app/types/article';
import { API_KEY, ENDPOINT, SOURCES_ID, SOURCES_NAME } from '@/app/constants';
import { mapCategoryToNYTSection } from '@/app/constants/nyt';

type NYTResponse = {
  status: string;
  copyright: string;
  response: {
    docs: NYTArticle[];
  };
};

type RequestParams = Omit<FilterParams, 'source'>;

const getArticles = async (
  requestParams: RequestParams,
): Promise<IArticle[]> => {
  const { SEARCH, TOP_HEADLINES } = ENDPOINT[SOURCES_ID.NYT];
  const { query = '', category } = requestParams;
  const url = query ? SEARCH : TOP_HEADLINES;

  const section = category
    ? mapCategoryToNYTSection(category as CATEGORIES)
    : undefined;

  const response = await axios.get<NYTResponse>(url, {
    params: {
      q: query,
      fq: section ? `news_desk:(${section})` : undefined,
      'api-key': API_KEY[SOURCES_ID.NYT],
    },
  });

  return response.data.response.docs.map((article) => ({
    source: {
      id: SOURCES_ID.NYT,
      name: SOURCES_NAME[SOURCES_ID.NYT],
    },
    author: article.byline.original?.replace('By ', '') || 'Unknown',
    title: article.headline.main,
    description: article.snippet,
    url: article.web_url,
    urlToImage: null,
    publishedAt: article.pub_date,
    content: null,
  }));
};

export default { getArticles };
