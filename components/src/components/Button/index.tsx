import React, { Component } from 'react';
import styles from './style.module.scss';

interface Props {
  width: number;
  height: number;
  text: string;
}

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component<Props> {
  render() {
    const { width, height, text } = this.props;
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
  }
}

export default Button;
