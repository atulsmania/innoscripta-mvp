'use client';

import React from 'react';
import { DEFAULT_CATEGORIES } from '@/app/constants';
import { redirectWithParams } from '@/app/constants/utils';

const Categories = () => {
  const categories = Object.keys(DEFAULT_CATEGORIES);

  const categoryClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const category = (e.target as HTMLElement)
      .id as keyof typeof DEFAULT_CATEGORIES;

    if (!category) return;

    const redirectParams = { category: DEFAULT_CATEGORIES[category] };
    redirectWithParams(redirectParams);
  };

  return (
    <div
      className="flex gap-2 overflow-x-auto max-w-full no-scrollbar"
      onClick={categoryClickHandler}
    >
      {categories.map((category) => {
        return (
          <span
            key={category}
            id={category}
            className="py-1 mt-2 px-1 md:px-2 bg-slate-100 text-sm capitalize flex items-center rounded-lg cursor-pointer"
          >
            {category}
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
