import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import React from 'react';
import Search from '@/app/components/Search';

const Header = () => {
  return (
    <header className="max-w-6xl w-full pt-3 px-4 mx-auto flex flex-col sm:justify-between sm:flex-row">
      <Link href="/" className="w-fit">
        <Title className="text-nowrap" level={2}>
          Daily News
        </Title>
      </Link>
      <Search />
    </header>
  );
};

export default Header;
