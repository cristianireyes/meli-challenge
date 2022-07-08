import { FunctionComponent } from 'react';
import { nanoid } from 'nanoid';
import styles from './breadcrumb.module.scss';

interface BreadcrumbProps {
  categories: string[];
}

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
  categories,
}) => (
  <div className={styles.breadcrumb}>
    <ul className={styles.categories}>
      {categories.map(category => {
        return (
          <li className={styles.category} key={`${nanoid()}-${category}`}>
            {category}
          </li>
        );
      })}
    </ul>
  </div>
);
