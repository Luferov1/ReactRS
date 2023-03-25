import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Logo from '../../../components/Logo';
import Navigation from './Navigation';
import { Path } from '../../../enums';

const Header = () => (
  <header className={styles.header}>
    <Link to={Path.Home}>
      <Logo />
    </Link>
    <Navigation />
  </header>
);

export default Header;
