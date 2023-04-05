import React, { ChangeEvent } from 'react';
import styles from './style.module.scss';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange, value }: Props) => {
  return (
    <form
      className={styles.searchBar}
      onSubmit={(event) => {
        event.preventDefault();
        console.log(value);
      }}
    >
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
