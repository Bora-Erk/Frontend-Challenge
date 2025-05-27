import React from 'react';
import './Projects.css';
import randomJokes from '../assets/randomJokes.png';
import areYouBored from '../assets/areYouBored.png';
import { useLanguage } from '../context/LanguageContext.jsx';


const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    { title: 'Random Jokes', tags: ['react','vercel','axios','router'], img: randomJokes, desc:t('areYouBored') },
    { title: 'Are you bored?', tags: ['react','redux','axios','router','vercel'], img: areYouBored, desc:t('randomJokes') }
  ];

  return (
    <section className="projects">
      <h2>{t('projectsTitle')}</h2>
      <div className="projects__grid">
        {projects.map(p => (
          <article key={p.title} className="project">
            <div className="project__info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project__tags">
                {p.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project__links">
                <a href="#">View on Github</a>
                <a href="#">Go to app →</a>
              </div>
            </div>
            <img src={p.img} alt={p.title} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;