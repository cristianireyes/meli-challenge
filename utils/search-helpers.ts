import { Item } from './types';

export const getCategories = (filters: any[]): string[] => {
  const categoriesFiltered = filters.find(filter => filter.id === 'category');

  const categories = categoriesFiltered?.values[0]?.path_from_root?.map(
    (category: any) => category.name,
  );

  return categories ?? [];
};

const getPictureURL = (id: string): string => {
  return `https://http2.mlstatic.com/D_NQ_NP_${id}-V.webp`;
};

export const getParsedItem = (item: any): Item => {
  const [amount, decimals] = item.price.toString().split('.');

  return {
    id: item.id,
    condition: item.condition,
    freeShipping: item.shipping.free_shipping,
    picture: getPictureURL(item.thumbnail_id),
    price: {
      amount: Number(amount),
      currency: item.currency_id,
      ...(decimals && { decimals: Number(decimals) }),
    },
    title: item.title,
    soldQuantity: item.sold_quantity,
    address: {
      stateName: item.seller_address.state.name,
    },
  };
};

/**
 * get the first four elements
 * @param data data provided by Meli
 * @returns
 */
export const getItems = (data: any): Item[] => {
  const items = data.slice(0, 4);

  return items.map((item: any): Item => getParsedItem(item));
};
