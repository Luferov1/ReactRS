import React, { ChangeEvent, Component } from 'react';
import styles from './style.module.scss';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component<Props> {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        className={styles.searchBar}
        type="text"
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default SearchBar;
