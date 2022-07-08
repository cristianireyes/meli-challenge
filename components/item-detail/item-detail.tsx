import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ItemPrice } from 'components/item-price';
import { Item } from 'utils/types';
import styles from './item-detail.module.scss';

/**
 * returns the item condition
 * see -> https://developers.mercadolibre.com.ar/es_ar/categorias-y-atributos
 * disclaimer: the not_specified condition will not be displayed.
 */
const conditionMap: Record<string, string> = {
  used: 'Usado',
  new: 'Nuevo',
};

export const ItemDetail: FunctionComponent<{ item: Item }> = ({ item }) => (
  <div className={styles.wrapper}>
    <div className={styles.detail}>
      <div className={styles.image}>
        <Image
          src={item.picture}
          alt={item.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3>Descripción del producto</h3>
      <span>{item.description}</span>
    </div>
    <div className={styles.purchaseInformation}>
      <span className={styles.condition}>
        {conditionMap[item.condition] && `${conditionMap[item.condition]} - `}
        {item.soldQuantity} vendidos
      </span>
      <h2>{item.title}</h2>
      <ItemPrice price={item.price} variant="large" />
      <button className={styles.button}>Comprar</button>
    </div>
  </div>
);
