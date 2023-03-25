import React from 'react';
import styles from './style.module.scss';

interface Props {
  width: number;
  height: number;
  text: string;
  src: string;
}

const SvgNText = ({ text, src, height, width }: Props) => (
  <div className={styles.container} style={{ width: `${width}%`, height }}>
    <img className={styles.img} src={src} alt={text} />
    <span className={styles.text}>{text}</span>
  </div>
);

export default SvgNText;
