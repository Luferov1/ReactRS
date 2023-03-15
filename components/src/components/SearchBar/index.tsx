import React, { ChangeEvent } from 'react';
import styles from './style.module.scss';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange, value }: Props) => (
  <input
    className={styles.searchBar}
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default SearchBar;
