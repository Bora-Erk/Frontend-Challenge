import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
      <LanguageProvider>
        <Header/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
        </LanguageProvider>
      </>
    
  )
}

export default App
