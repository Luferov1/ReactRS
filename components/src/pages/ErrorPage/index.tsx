import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Button from '../../components/Button';
import { Path } from '../../enums';

const ErrorPage = () => (
  <div className={styles.container}>
    <p className={styles.message}>
      Oops! Something went wrong. This page was deleted or doesn&apos;t exist
    </p>
    <Link to={Path.Home}>
      <Button width={100} height={60} text="Go back home" />
    </Link>
  </div>
);

export default ErrorPage;
