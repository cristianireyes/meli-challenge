import { FunctionComponent } from 'react';
import { Price } from 'utils/types';
import { CurrencyMap, parsedAmount } from './item-price-helpers';
import styles from './item-price.module.scss';

type Variant = 'normal' | 'large';
interface ItemPriceProps {
  price: Price;
  variant?: Variant;
}

const styleVariantMap: Record<Variant, string> = {
  normal: styles.price,
  large: styles.priceLarge,
};

export const ItemPrice: FunctionComponent<ItemPriceProps> = ({
  price,
  variant = 'normal',
}) => (
  <div className={styleVariantMap[variant]}>
    <span>{CurrencyMap[price.currency]}</span>
    <span>{parsedAmount(price.amount)}</span>
    <span className={styles.decimals}>{price.decimals}</span>
  </div>
);
