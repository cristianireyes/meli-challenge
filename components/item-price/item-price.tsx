import { FunctionComponent } from 'react';
import { Price } from 'utils/types';
import { CurrencyMap, parsedAmount } from './item-price-helpers';
import styles from './item-price.module.scss';

interface ItemPriceProps {
  price: Price;
}

export const ItemPrice: FunctionComponent<ItemPriceProps> = ({ price }) => (
  <div className={styles.price}>
    <span>{CurrencyMap[price.currency]}</span>
    <span>{parsedAmount(price.amount)}</span>
    <span className={styles.decimals}>{price.decimals}</span>
  </div>
);
