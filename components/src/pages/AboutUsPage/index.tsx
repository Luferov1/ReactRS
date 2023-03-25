import React from 'react';
import styles from './style.module.scss';
import avatar from '../../assets/jpg/avatar.jpg';
import HeaderNText from '../../components/HeaderNText';

const AboutUsPage = () => (
  <main className={styles.main}>
    <aside className={styles.aside}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <p className={styles.aside__header}>Contacts:</p>
      <HeaderNText header="Telegram" text="Luferov1" />
      <HeaderNText header="Discord" text="luferov#6744" />
      <HeaderNText header="Instagram" text="luferov1" />
    </aside>
    <article className={styles.article}>
      <h2 className={styles.header}>Dmitry Luferov</h2>
      <h3 className={styles.subHeader}>Junior Front-End developer</h3>
      <p className={styles.info}>
        Hello, I am studying Front-End engineering and I am a big fan of Fantasy
        Premier League Football. This website is about players, who can bring to
        you massive number of points in the next gameweeks. This is just my
        personal opinion.
      </p>
    </article>
  </main>
);

export default AboutUsPage;
