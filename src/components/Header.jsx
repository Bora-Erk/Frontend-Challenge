import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const Header = ({ onToggleTheme, currentTheme }) => {
  const { t, toggleLanguage, lang } = useLanguage();
  return (
    <header className="header">
      <div className="header-controls">
      <Form>
        <FormGroup switch>
          <Input className="theme-switch"
          onClick={onToggleTheme} type="switch" role="switch" />
          <Label className='theme-label' check>{currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</Label>
        </FormGroup>
      </Form>
        <button className="lang-switch" onClick={toggleLanguage}>
          {t('switchLanguage')}
        </button>
        
      </div>
      <div className="header-intro">
        <p>{t('greeting')}</p>        
        <h2>
          {t('introPart1')}
        </h2>
        <p id='intro-part-2'>
          {t('introPart2')}<br />
        </p>
        <div className="header-social">
        <a href="#"><i className="fab fa-github"></i>GitHub</a>
          <a href="#"><i className="fab fa-linkedin"></i>LinkedIn</a>
          
        </div>
        
      </div>

      

      <div className="header-image">
        <img id='almila' src="src/assets/foto.png" alt="Almila" />
      </div>
    </header>
  );
};

export default Header;