import React from 'react';
import './Projects.css';
import workintech from '../assets/workintech.png';
import journey from '../assets/journey.png';
import { useLanguage } from '../context/LanguageContext.jsx';


const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    { title: 'Workintech', tags: ['react','vercel','axios','router'], img: workintech, desc:t('areYouBored') },
    { title: 'Journey', tags: ['react','redux','axios','router','vercel'], img: journey, desc:t('randomJokes') }
  ];

  return (
    <section className="projects">
      <h2>{t('projectsTitle')}</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.title} className="project">
            <img src={p.img} alt={p.title} />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-links">
                <a href="#">View Site</a>
                <a href="#">Github</a>
                
              </div>
            </div>
            
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;