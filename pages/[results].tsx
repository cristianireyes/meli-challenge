import { useCallback } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ItemSummary } from 'components/item-summary';
import { Breadcrumb } from 'components/breadcrumb';
import { getCategories, getItems } from 'utils/search-helpers';
import { Author, Item } from 'utils/types';
import styles from 'styles/search-results.module.scss';

interface SearchResultsPageProps {
  author: Author;
  categories: string[];
  items: Item[];
}

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<{ props: SearchResultsPageProps }> => {
  const itemSearch: string = context.query.search as string;

  const res = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${itemSearch}`,
  );
  const data = await res.json();

  return {
    props: {
      author: {
        name: 'Cristian',
        lastname: 'Reyes',
      },
      categories: getCategories(data.filters),
      items: getItems(data.results),
    },
  };
};

/**
 * Search Results Page
 */

const SearchResultsPage: NextPage<SearchResultsPageProps> = ({
  categories,
  items,
}) => {
  const router = useRouter();

  const handleOpenItemDetail = useCallback(
    (id: string) => {
      router.push({
        pathname: `/items/${id}`,
        query: { categories },
      });
    },
    [categories, router],
  );

  if (!categories?.length || !items?.length) {
    // TODO: add image
    return <span>No se encontraron resultados</span>;
  }

  return (
    <>
      <Head>
        <title>Resultados</title>
        <meta name="description" content="Resultados de la búsqueda" />
      </Head>

      <Breadcrumb categories={categories} />
      <div className={styles.searchResults}>
        {items.map(item => (
          <ItemSummary
            key={item.id}
            item={item}
            onOpenItemDetail={id => handleOpenItemDetail(id)}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResultsPage;
