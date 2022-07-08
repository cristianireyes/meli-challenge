import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Breadcrumb } from 'components/breadcrumb';
import { ItemDetail } from 'components/item-detail';
import { getParsedItem } from 'utils/search-helpers';
import { Author, Item } from 'utils/types';

interface ItemDetailPageProps {
  author: Author;
  categories: string[];
  item: Item;
}

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<{ props: ItemDetailPageProps }> => {
  const id: string = context.query.id as string;

  const [itemDetailData, itemDescriptionData] = await Promise.all([
    fetch(`https://api.mercadolibre.com/items/${id}`),
    fetch(`https://api.mercadolibre.com/items/${id}/description`),
  ]);

  const itemDetail = await itemDetailData.json();
  const itemDescription = await itemDescriptionData.json();

  const item: Item = {
    ...getParsedItem(itemDetail),
    description: itemDescription.plain_text,
  };

  return {
    props: {
      author: {
        name: 'Cristian',
        lastname: 'Reyes',
      },
      categories: context.query.categories as string[],
      item,
    },
  };
};

const ItemDetailPage: NextPage<ItemDetailPageProps> = ({
  categories,
  item,
}) => (
  <>
    <Head>
      <title>{item.title}</title>
      <meta name="description" content={item.description} />
    </Head>
    <Breadcrumb categories={categories} />
    <ItemDetail item={item} />
  </>
);

export default ItemDetailPage;
