import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <LanguageProvider>
      
      <Header onToggleTheme={toggleTheme} currentTheme={theme} />
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App
