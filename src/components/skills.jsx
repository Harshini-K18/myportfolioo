import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed

const skills = [
  "HTML", "CSS", "JavaScript", "Python", "SQL",
  "Git", "GitHub", "ReactJS", "C++" , "Java", "C" , "C#" , "MongoDB"
];

export default function Skills() {
  return (
    <section id="skills" className="section skills animate-reveal">
      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />Technical Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => <span className="skill-card" key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}
