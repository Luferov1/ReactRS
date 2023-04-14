import React from 'react';
import styles from './style.module.scss';

interface Props {
  header: string;
  text: string | number;
}

const HeaderNText = ({ text, header }: Props) => (
  <div className={styles.container}>
    <span className={styles.header}>{`${header}:\u0020`}</span>
    <span className={styles.text}>{text}</span>
  </div>
);

export default HeaderNText;
