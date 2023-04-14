import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';
import Header from './Header';
import Footer from './Footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { mainPageSlice } from '../../store/reducers/MainPageSlice';

const RootPage = () => {
  const { isModalOpened } = useAppSelector((state) => state.mainPageReducer);
  const dispatch = useAppDispatch();
  const { setIsModalOpened } = mainPageSlice.actions;
  return (
    <div
      className={
        isModalOpened
          ? [styles.wrapper, styles.hidden].join(' ')
          : styles.wrapper
      }
      aria-hidden="true"
      onClick={() => {
        if (isModalOpened) {
          dispatch(setIsModalOpened(false));
        }
      }}
    >
      <Header />
      <div
        className={
          isModalOpened
            ? [styles.background, styles.hiddenBackground].join(' ')
            : styles.background
        }
      >
        <div className={styles.players} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
