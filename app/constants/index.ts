export const DEFAULT_CATEGORIES = {
  BUSINESS: 'business',
  ENTERTAINMENT: 'entertainment',
  GENERAL: 'general',
  HEALTH: 'health',
  SCIENCE: 'science',
  SPORTS: 'sports',
  TECHNOLOGY: 'technology',
} as const;

export const SOURCES_ID = {
  THE_GUARDIAN: 'the-guardian',
  NYT: 'nyt',
  NEWS_ORG: 'news-org',
} as const;

export const SOURCES_NAME = {
  [SOURCES_ID.THE_GUARDIAN]: 'The Guardian',
  [SOURCES_ID.NYT]: 'The New York Times',
  [SOURCES_ID.NEWS_ORG]: 'The News ORG',
} as const;

export const ENDPOINT = {
  [SOURCES_ID.NEWS_ORG]: {
    TOP_HEADLINES: 'https://newsapi.org/v2/top-headlines',
    SEARCH: 'https://newsapi.org/v2/everything',
  },
  [SOURCES_ID.THE_GUARDIAN]: {
    TOP_HEADLINES: 'https://content.guardianapis.com/search',
    SEARCH: 'https://content.guardianapis.com/search',
  },
  [SOURCES_ID.NYT]: {
    TOP_HEADLINES: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    SEARCH: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  },
} as const;

// Should be kept in .env file.
/* ----- Environment Variables ----- */
export const API_KEY = {
  [SOURCES_ID.NEWS_ORG]: '08fd4e21499042caa662309bd122f02b',
  [SOURCES_ID.THE_GUARDIAN]: '879da63a-9bdb-4039-842f-df7370b87626',
  [SOURCES_ID.NYT]: 'XtnGuImp7ckr8VKFpx1MYGNG93VcA9AA',
};
/* ----- End of Environment Variables ----- */
