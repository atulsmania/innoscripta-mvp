import axios from 'axios';
import { FilterParams, IArticle, NewsOrgArticle } from '@/app/types/article';
import { API_KEY, ENDPOINT, SOURCES_ID, SOURCES_NAME } from '@/app/constants';

type NewsOrgApiResponse = {
  status: string;
  totalResults: number;
  articles: NewsOrgArticle[];
};

type RequestParams = Omit<FilterParams, 'source'>;

const getArticles = async (
  requestParams: RequestParams,
): Promise<IArticle[]> => {
  const { query, category } = requestParams;
  const { TOP_HEADLINES: url } = ENDPOINT[SOURCES_ID.NEWS_ORG];

  const response = await axios.get<NewsOrgApiResponse>(url, {
    params: {
      apiKey: API_KEY[SOURCES_ID.NEWS_ORG],
      q: query,
      language: 'en',
      pageSize: '10',
      page: 1,
      category: category,
    },
  });

  return response.data.articles.map((article) => ({
    source: {
      id: SOURCES_ID.NEWS_ORG,
      name: SOURCES_NAME[SOURCES_ID.NEWS_ORG],
    },
    author: article.author || 'Unknown',
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage: article.urlToImage,
    publishedAt: article.publishedAt,
    content: article.content,
  }));
};

export default { getArticles };
