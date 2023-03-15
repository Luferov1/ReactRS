import React from 'react';
import styles from './style.module.scss';

interface Props {
  width: number;
  height: number;
  text: string;
}

const Button = (props: Props) => {
  const { width, height, text } = props;
  return (
    <button
      style={{
        width: `${width}%`,
        height,
      }}
      className={styles.button}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
