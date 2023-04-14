import React, { forwardRef } from 'react';
import styles from './style.module.scss';
import { useAppSelector } from '../../hooks';
import { IValidInput } from '../../interfaces';

const SearchBar = forwardRef<HTMLInputElement, IValidInput>(
  ({ text, type, name, onBlur, onChange }, ref) => {
    const { isModalOpened } = useAppSelector((state) => state.mainPageReducer);
    return (
      <>
        <input
          type={type}
          onChange={onChange}
          placeholder="Search for players"
          ref={ref}
          name={name}
          onBlur={onBlur}
          className={isModalOpened ? styles.hidden : undefined}
        />
        <button
          type="submit"
          className={
            isModalOpened
              ? [styles.submitButton, styles.hidden].join(' ')
              : styles.submitButton
          }
        >
          {text}
        </button>
      </>
    );
  }
);

export default SearchBar;
