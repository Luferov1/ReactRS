import React from 'react';
import styles from './style.module.scss';
import Form from './Form';

const FormPage = () => (
  <main className={styles.main}>
    <h2 className={styles.header}>Create new player card</h2>
    <Form />
  </main>
);

export default FormPage;
