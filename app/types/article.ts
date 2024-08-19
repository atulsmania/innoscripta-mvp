import { SOURCES_ID } from '@/app/constants';

export interface IArticle {
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export type FilterParams = {
  source?: (typeof SOURCES_ID)[keyof typeof SOURCES_ID][];
  query?: string;
  authors?: string;
  category?: string;
};

export interface NewsOrgArticle {
  source: { id: string; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NYTArticle {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  pub_date: string;
  news_desk: string;
  multimedia: { url: string }[];
  headline: { main: string };
  byline: { original: string };
}

export interface GuardianArticle {
  id: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  tags: { webTitle: string }[];
}

export type CATEGORIES =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
