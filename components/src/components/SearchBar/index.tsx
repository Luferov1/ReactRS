import React, { ChangeEvent } from 'react';
import styles from './style.module.scss';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const SearchBar = ({ onChange, value, onSubmit }: Props) => {
  return (
    <form className={styles.searchBar} onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for players"
      />
      <button type="submit" className={styles.submitButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
