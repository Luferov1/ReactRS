import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';
import Header from './Header';

// eslint-disable-next-line react/prefer-stateless-function
class RootPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default RootPage;
