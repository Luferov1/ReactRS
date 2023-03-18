import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';
import { Path } from '../../../../enums';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink
      to={Path.Home}
      className={({ isActive }) =>
        isActive ? styles.link_active : styles.link
      }
    >
      Home
    </NavLink>
    <NavLink
      to={Path.About}
      className={({ isActive }) =>
        isActive ? styles.link_active : styles.link
      }
    >
      About us
    </NavLink>
  </nav>
);

export default Navigation;
