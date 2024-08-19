import { fetchResources } from '@/app/constants/utils';
import { FilterParams } from '@/app/types/article';
import Home from '@/app/components/Home';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Fragment } from 'react';

type Props = {
  searchParams: FilterParams;
};

async function App({ searchParams }: Props) {
  const articles = await fetchResources(searchParams);

  return (
    <Fragment>
      <Header />
      <Home searchParams={searchParams} articles={articles} />
      <Footer />
    </Fragment>
  );
}

export default App;
