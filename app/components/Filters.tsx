'use client';

import { IArticle } from '@/app/types/article';
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Select } from 'antd';
import { getAuthor, redirectWithParams } from '@/app/constants/utils';
import { SOURCES_ID, SOURCES_NAME } from '@/app/constants';

type Props = {
  articles: IArticle[];
  filterArticles: (articles: IArticle[]) => unknown;
};

function Authors({ articles, filterArticles }: Props) {
  const [authors, setAuthors] = useState<string[]>([]);

  const authorsOptions = useMemo(() => {
    let authorSet = new Set<string>();
    articles?.forEach((article) => {
      if (article.author) {
        authorSet.add(article.author);
      }
    });

    return Array.from(authorSet).map((author) => ({
      label: author,
      value: author,
    }));
  }, []);

  const authorsChange = (authors: string[]) => {
    setAuthors(authors);
  };

  const filterByAuthors = (articles: IArticle[]) => {
    if (authors.length === 0) {
      return articles;
    }

    const filteredArticles = articles.filter((article) => {
      return authors.includes(getAuthor(article));
    });
    return filteredArticles;
  };

  useEffect(() => {
    const id = setTimeout(() => {
      filterArticles(filterByAuthors(articles));
    }, 400);
    return () => {
      clearTimeout(id);
    };
  }, [authors]);

  return (
    <div className="flex md:max-w-md w-full gap-4">
      <Select
        className="w-full"
        placeholder="Author"
        maxTagCount="responsive"
        onChange={authorsChange}
        mode="tags"
        size="large"
        allowClear
        options={authorsOptions}
      />
    </div>
  );
}

function Sources() {
  const search = useSearchParams();

  const filters = search ? Object.fromEntries(search?.entries()) : {};
  const initialValues = {
    source: filters.source ? JSON.parse(filters.source) : [],
  };

  const onSourceChange = (
    source: (typeof SOURCES_ID)[keyof typeof SOURCES_ID][],
  ) => {
    redirectWithParams({ source });
  };

  const sourceOptions = useMemo(() => {
    return Object.values(SOURCES_ID).map((source) => ({
      label: SOURCES_NAME[source],
      value: source,
    }));
  }, []);

  return (
    <Select
      mode="tags"
      className="w-full"
      placeholder="Source"
      size="large"
      maxTagCount="responsive"
      defaultValue={initialValues.source}
      onChange={onSourceChange}
      options={sourceOptions}
      allowClear
    />
  );
}

export default function Filters({ articles, filterArticles }: Props) {
  return (
    <div className="flex md:max-w-md w-full gap-4">
      <Authors articles={articles} filterArticles={filterArticles} />
      <Sources />
    </div>
  );
}
