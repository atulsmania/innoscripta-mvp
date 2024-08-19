'use client';

import { IArticle } from '@/app/types/article';
import { Card, Empty } from 'antd';
import Title from 'antd/es/typography/Title';

import { Typography } from 'antd';
const { Link } = Typography;

function Article({ article }: { article: IArticle }) {
  const { author, title, publishedAt } = article;
  const date = new Date(publishedAt).toDateString();

  return (
    <Card classNames={{ body: 'h-full' }}>
      <div className="flex flex-col justify-between h-full">
        <Title level={5}>{title.replace(`- ${author}`, '')}</Title>
        <div>
          <p className="text-gray-600 text-xs items">
            By {author} - {date}
          </p>
          <p className="text-xs text-gray-600">Source: {article.source.name}</p>

          <Link href={article.url} target="_blank">
            Read more
          </Link>
        </div>
      </div>
    </Card>
  );
}

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  if (!articles) {
    return <Empty className="h-full flex-1" description="No articles found" />;
  }

  const renderArticles = (article: IArticle, index: number) => {
    return <Article key={index} article={article} />;
  };

  return (
    <div className="flex flex-col sm:grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {articles?.map(renderArticles)}
    </div>
  );
};

export default ArticleList;
