import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import Navigation from './Navigation';
import { Path } from '../../../enums';

const Header = () => (
  <header className={styles.header}>
    <Link to={Path.Home}>
      <Logo />
    </Link>
    <Navigation />
    <Button width={15} height={70} text="SignUp" />
  </header>
);

export default Header;
