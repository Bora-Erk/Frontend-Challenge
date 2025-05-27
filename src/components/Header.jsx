import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import './Header.css';

const Header = () => {
  const { t, toggleLanguage, lang } = useLanguage();
  return (
    <header className="header">
      <div className="header__controls">
        {/* Dil Değiştir Butonu */}
        <button className="lang-switch" onClick={toggleLanguage}>
          {t('switchLanguage')}
        </button>
      </div>
      <div className="header__intro">
        <p>{t('greeting')}</p>        
        <h2>
          {t('introPart1')}<br />
          {t('introPart2')}<br />
          {t('meet')}
        </h2>
        <div className="header__social">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
        <p className="header__work">
          {t('currently')} <span>{t('freelancing')}</span><br />
          {t('invite')} <a href="mailto:pratamaisoi@gmail.com">pratamaisoi@gmail.com</a>
        </p>
      </div>

      

      <div className="header__image">
        <img src="/assets/almila.jpg" alt="Almila" />
      </div>
    </header>
  );
};

export default Header;