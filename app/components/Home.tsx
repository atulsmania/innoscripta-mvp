'use client';

import React, { useState } from 'react';
import { FilterParams, IArticle } from '@/app/types/article';
import Filters from '@/app/components/Filters';
import Categories from '@/app/components/Categories';
import { Divider } from 'antd';
import ArticleList from '@/app/components/Article';

type Props = {
  searchParams: FilterParams;
  articles: IArticle[];
};

const Home = (props: Props) => {
  const [articles, setArticles] = useState<IArticle[]>(props.articles);

  const setFilteredArticles = (articles: IArticle[]) => {
    setArticles(articles);
  };

  return (
    <main className="px-4 flex-1 gap-4 max-w-6xl mx-auto w-full">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <Categories />
        <Divider
          type="vertical"
          style={{ height: '40px' }}
          className="hidden sm:block"
        />
        <Filters
          articles={props.articles}
          filterArticles={setFilteredArticles}
        />
      </div>
      <Divider />
      <ArticleList articles={articles} />
    </main>
  );
};

export default Home;
