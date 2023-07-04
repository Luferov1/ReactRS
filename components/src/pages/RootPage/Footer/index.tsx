import React from 'react';
import { Link } from 'react-router-dom';
import ghLogo from '../../../assets/svg/gitLogo.svg';
import styles from './style.module.scss';
import SvgNText from '../../../components/SvgNtext';
import { FooterLinks } from '../../../enums';

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.text}>Test task</span>
    <Link to={FooterLinks.GH} className={styles.link}>
      <SvgNText width={100} height={60} text="Dmitry Luferov" src={ghLogo} />
    </Link>
    <span className={styles.text}>2023</span>
  </footer>
);

export default Footer;
