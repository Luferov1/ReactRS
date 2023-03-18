import React from 'react';
import styles from './style.module.scss';
import logo from '../../assets/svg/logo.svg';

const Logo = () => (
  <div className={styles.logo}>
    <img className={styles.svg} src={logo} alt="logo" />
  </div>
);

export default Logo;
