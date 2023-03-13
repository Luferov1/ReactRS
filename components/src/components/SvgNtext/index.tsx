import React, { Component } from 'react';
import styles from './style.module.scss';

interface Props {
  width: number;
  height: number;
  text: string;
  src: string;
}

// eslint-disable-next-line react/prefer-stateless-function
class SvgNText extends Component<Props> {
  render() {
    const { width, height, text, src } = this.props;
    return (
      <div className={styles.container} style={{ width: `${width}%`, height }}>
        <img className={styles.img} src={src} alt={text} />
        <span className={styles.text}>{text}</span>
      </div>
    );
  }
}

export default SvgNText;
