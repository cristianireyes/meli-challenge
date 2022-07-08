import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ItemPrice } from 'components/item-price';
import { Item } from 'utils/types';
import styles from './item-summary.module.scss';

interface ItemSummaryProps {
  item: Item;
  onOpenItemDetail: (id: string) => void;
}

export const ItemSummary: FunctionComponent<ItemSummaryProps> = ({
  item,
  onOpenItemDetail,
}) => (
  <div className={styles.wrapper} onClick={() => onOpenItemDetail(item.id)}>
    <div className={styles.thumbnail}>
      <Image
        src={item.picture}
        alt={item.title}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className={styles.summary}>
      <div className={styles.amount}>
        <ItemPrice price={item.price} />
        {item.freeShipping && (
          <span className={styles.shipping}>
            <Image
              src="/icons/ic_shipping.png"
              alt="Envío gratis"
              layout="fill"
              objectFit="contain"
            />
          </span>
        )}
      </div>
      <span className={styles.title}>{item.title}</span>
    </div>
    <div className={styles.stateName}>{item.address.stateName}</div>
  </div>
);
