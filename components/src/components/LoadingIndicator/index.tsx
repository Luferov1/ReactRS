import React from 'react';
import styles from './style.module.scss';

const LoadingIndicator = () => (
  <div className={styles.loadingIndicator}>
    <div className={styles.loadingIndicatorSpinner} />
  </div>
);

export default LoadingIndicator;
