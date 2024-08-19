import { DEFAULT_CATEGORIES } from '.';
import { CATEGORIES } from '../types/article';

const NYT_SECTION_MAP = {
  [DEFAULT_CATEGORIES.BUSINESS]: 'business',
  [DEFAULT_CATEGORIES.ENTERTAINMENT]: 'arts', // The NYT uses 'arts' for entertainment
  [DEFAULT_CATEGORIES.GENERAL]: 'world', // General news corresponds to 'world' or 'us'
  [DEFAULT_CATEGORIES.HEALTH]: 'health',
  [DEFAULT_CATEGORIES.SCIENCE]: 'science',
  [DEFAULT_CATEGORIES.SPORTS]: 'sports',
  [DEFAULT_CATEGORIES.TECHNOLOGY]: 'technology',
};

export const mapCategoryToNYTSection = (category: CATEGORIES) => {
  const lowerCaseCategory = category.toLowerCase();
  return (
    NYT_SECTION_MAP[lowerCaseCategory as keyof typeof NYT_SECTION_MAP] ||
    NYT_SECTION_MAP[DEFAULT_CATEGORIES.GENERAL]
  ); // Default to 'world' for general news
};
