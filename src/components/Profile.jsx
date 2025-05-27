import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Profile.css';

const Profile = () => {
  const { t } = useLanguage();
  return (
    <section className="profile">
      <h2>{t('profileTitle')}</h2>
      <div className="profile-container">
        <div className="profile-basic">
          <h3>{t('basicInfo')}</h3>          
          <ul>
            <li><strong>{t('dob')}:</strong> 24.03.1996</li>
            <li><strong>{t('residence')}:</strong> Ankara</li>
            <li><strong>{t('education')}:</strong> Hacettepe Ünv., Biyoloji Lisans, 2016</li>
            <li><strong>{t('role')}:</strong> Frontend, UI</li>
          </ul>
        </div>
        <div className="profile-image">
          <img id='img'src="src/assets/profile.png" alt="" />
        </div>
        <div className="profile-about">
          <h3>{t('aboutMe')}</h3>
          <p>{t('aboutText1')}</p>
          <p>{t('aboutText2')}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;