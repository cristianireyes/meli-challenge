import { FunctionComponent, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputSearch } from 'components/input-search';
import styles from './navbar.module.scss';

const Logo: FunctionComponent = () => (
  <Link href="/">
    <a className={styles.logo}>
      <Image
        aria-label="Logo MercadoLibre"
        src="/icons/logo-ml.png"
        alt="MercadoLibre"
        height="36px"
        width="53px"
      />
    </a>
  </Link>
);

export const Navbar: FunctionComponent = () => {
  const router = useRouter();

  const handleSearch = useCallback(
    (search: string) => {
      router.push(`/items?search=${search}`);
    },
    [router],
  );

  return (
    <div className={styles.navbar}>
      <Logo />
      <InputSearch onSearch={handleSearch} />
    </div>
  );
};
