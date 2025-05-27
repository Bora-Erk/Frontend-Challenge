import React, { createContext, useContext, useState } from 'react';

const translations = {
  greeting: { tr: 'almila', en: 'almila' },
  introPart1: {
    tr: 'Ben bir Frontend geliştiriciyim...',
    en: "I'm a Frontend Developer..."
  },
  introPart2: {
    tr: 'Sağlam ve ölçeklenebilir frontend ürünleri harika kullanıcı deneyimiyle oluşturmayı seven bir geliştirciyim',
    en: '...who likes to craft solid and scalable frontend products with great user experiences.'
  },
  meet: { tr: 'Tanışalım!', en: "Let's meet!" },
  currently: { tr: 'Şu anda', en: 'Currently' },
  freelancing: {
    tr: 'UX, UI & Web Tasarım projesi için Freelance çalışıyorum.',
    en: 'Freelancing for UX, UI & Web Design Project.'
  },
  invite: { tr: 'Takımınıza katılmamı davet edin →', en: 'Invite me to your team →' },

  skillsTitle: { tr: 'Yetenekler', en: 'Skills' },
  profileTitle: { tr: 'Profil', en: 'Profile' },
  basicInfo: { tr: 'Temel Bilgiler', en: 'Basic Information' },
  dob: { tr: 'Doğum tarihi', en: 'Date of Birth' },
  residence: { tr: 'İkamet Şehri', en: 'Residence City' },
  education: { tr: 'Eğitim Durumu', en: 'Education' },
  role: { tr: 'Tercih Ettiği Rol', en: 'Preferred Role' },
  aboutMe: { tr: 'Hakkımda', en: 'About me' },
  aboutText1: {
    tr: 'TRLorem ipsum dolor sit amet consectetur adipisicing elit.',
    en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  aboutText2: {
    tr: 'TRMinima accusamus ratione soluta aperiam sit voluptate?',
    en: 'Minima accusamus ratione soluta aperiam sit voluptate?'
  },

  projectsTitle: { tr: 'Projeler', en: 'Projects' },

  areYouBored: {
    tr: 'TRLorem ipsum dolor sit amet consectetur adipisicing elit.',
    en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  randomJokes: {
    tr: 'TRLorem ipsum dolor sit amet consectetur adipisicing elit.',
    en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  footerPhrase: {
    tr: 'Bir sonraki ürününüzde birlikte çalışalım.',
    en: "Let's work together on your next product."
  },
  navGithub: { tr: 'GitHub', en: 'GitHub' },
  navBlog: { tr: 'Kişisel Blog', en: 'Personal Blog' },
  navLinkedin: { tr: 'LinkedIn', en: 'LinkedIn' },
  navEmail: { tr: 'Email', en: 'Email' },

  switchLanguage: { tr: "İngilizce'ye Geç", en: "Türkçe'ye Geç" }
};

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('tr');
  const toggleLanguage = () => setLang(prev => (prev === 'tr' ? 'en' : 'tr'));
  const t = key => translations[key][lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);