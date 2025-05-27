import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <p>{t('footerPhrase')}</p>
      <nav className="footer__nav">
        <a href="#">{t('navGithub')}</a>
        <a href="#">{t('navBlog')}</a>
        <a href="#">{t('navLinkedin')}</a>
        <a href="#">{t('navEmail')}</a>
      </nav>
    </footer>
  );
};

export default Footer;