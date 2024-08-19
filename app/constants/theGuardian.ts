import { DEFAULT_CATEGORIES } from '@/app/constants';
import { CATEGORIES } from '@/app/types/article';

const GUARDIAN_SECTION_MAP = {
  [DEFAULT_CATEGORIES.BUSINESS]: 'business',
  [DEFAULT_CATEGORIES.ENTERTAINMENT]: 'culture', // The Guardian uses 'culture' for entertainment
  [DEFAULT_CATEGORIES.GENERAL]: 'news', // General news
  [DEFAULT_CATEGORIES.HEALTH]: 'society', // The Guardian doesn't have a direct health section, so 'society' is the closest
  [DEFAULT_CATEGORIES.SCIENCE]: 'science',
  [DEFAULT_CATEGORIES.SPORTS]: 'sport',
  [DEFAULT_CATEGORIES.TECHNOLOGY]: 'technology',
} as const;

export const mapCategoryToGuardianSection = (category: CATEGORIES) => {
  const lowerCaseCategory = category.toLowerCase();
  return (
    GUARDIAN_SECTION_MAP[
      lowerCaseCategory as keyof typeof GUARDIAN_SECTION_MAP
    ] || GUARDIAN_SECTION_MAP[DEFAULT_CATEGORIES.GENERAL]
  );
};
