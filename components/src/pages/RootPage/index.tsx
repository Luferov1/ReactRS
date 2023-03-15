import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';
import Header from './Header';
import Footer from './Footer';

const RootPage = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.background}>
      <div className={styles.players} />
    </div>
    <Outlet />
    <Footer />
  </div>
);

export default RootPage;
