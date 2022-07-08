import { FunctionComponent, useCallback, useState } from 'react';
import Image from 'next/image';
import styles from './input-search.module.scss';

interface InputSearchProps {
  onSearch: (search: string) => void;
}

export const InputSearch: FunctionComponent<InputSearchProps> = ({
  onSearch,
}) => {
  const [inputField, setInputField] = useState('');

  const search = useCallback(() => {
    if (inputField) {
      onSearch(inputField);
    }
  }, [inputField, onSearch]);

  return (
    <div className={styles.inputSearch}>
      <input
        type="text"
        aria-label="Buscar articulos"
        placeholder="Nunca pares de buscar"
        value={inputField}
        onChange={event => {
          event.preventDefault();
          setInputField(event.target.value);
        }}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            event.preventDefault();
            search();
          }
        }}
      />
      <button
        className={styles.icon}
        type="submit"
        onClick={event => {
          event.preventDefault();
          search();
        }}
      >
        <Image
          src="/icons/ic_search.png"
          aria-label="Buscar"
          alt="Buscar un articulo"
          width="20px"
          height="20px"
        />
      </button>
    </div>
  );
};
