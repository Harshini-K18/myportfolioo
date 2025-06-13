import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed

export default function Internship() {
  return (
    <section id="internship" className="section internship animate-reveal">
      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />Internship</h2>

      <div className="education-grid vertical">
        <div className="edu-card">
          <h3>CodSoft Virtual Internship</h3>
          <p className="edu-duration">(September 2024)</p>
          <p>Role: Front-end Developer Intern</p>
          <p className="edu-score">During a span of four weeks, I developed three front-end projects to enhance my web development skills. These include a responsive <strong>Portfolio Website</strong> built with HTML, CSS, and JavaScript to showcase my work, a clean and smooth <strong>Landing Page</strong> with intuitive navigation, and a <strong>basic Calculator</strong> capable of performing arithmetic operations using JavaScript.
        </p>
        </div>

        <div className="edu-card">
          <h3>RSC Systems Pvt Ltd</h3>
          <p className="edu-duration">(Mar 11, 2025 - Jun 11, 2025)</p>
          <p>Role: Software Developer Intern</p>
          <p className="edu-score">Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.
Collaborated with the team to build intuitive UI components and improve user experience.
Gained hands-on experience with React.js, including component-based architecture, props, state, and hooks.
Strengthened skills in debugging, Git, and working in agile development environments.</p>
        </div>

        {/* Add more internships similarly */}
      </div>
    </section>
  );
}
