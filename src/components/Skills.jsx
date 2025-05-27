import React from 'react';
import './Skills.css';
import jsLogo from '../assets/jsLogo.png';
import reactLogo from '../assets/reactLogo.png';
import reduxLogo from '../assets/reduxLogo.png';
import nodeLogo from '../assets/nodeLogo.png';
import vsLogo from '../assets/vsLogo.png';
import figmaLogo from '../assets/figmaLogo.png';

const skills = [
  { name: 'js', icon: jsLogo },
  { name: 'react', icon: reactLogo },
  { name: 'redux', icon: reduxLogo },
  { name: 'node', icon: nodeLogo },
  { name: 'vs', icon: vsLogo },
  { name: 'figma', icon: figmaLogo }
];

const Skills = () => (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skills-item">
            <img id={skill.name} src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );

export default Skills;