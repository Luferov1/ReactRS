import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';
import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line react/prefer-stateless-function
class RootPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.background}>
          <div className={styles.players} />
        </div>
        <Outlet />
        <Footer />
      </div>
    );
  }
}

export default RootPage;
