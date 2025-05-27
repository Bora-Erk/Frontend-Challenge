import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <p>{t('footerPhrase')}</p>
      <p>{t('footerPhrase2')}</p>
      <a href="#">almilasucode@gmail.com</a>
      <nav className="footer__nav">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fas fa-blog"></i></a>
        <a href="#"><i className="fas fa-envelope"></i>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;