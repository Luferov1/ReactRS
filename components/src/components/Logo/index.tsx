import React, { Component } from 'react';
import styles from './style.module.scss';
import logo from '../../assets/svg/logo.svg';

// eslint-disable-next-line react/prefer-stateless-function
class Logo extends Component {
  render() {
    return (
      <div className={styles.logo}>
        <img className={styles.svg} src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
