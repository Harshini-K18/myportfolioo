import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed
export default function About() {
  return (
    <section id="about" className="section about animate-reveal">
      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />About Me</h2>
      <p>
        With a strong foundation in Information Science and Engineering (ISE), I am a motivated Full Stack Web Developer focused on Frontend Development and Data Analytics. I am an enthusiastic and inquisitive developer, driven to create impactful experiences while continually enhancing my skills through practical learning and teamwork. Experienced in building responsive web applications and data-driven solutions, I excel in Agile environments and collaborative settings, turning complex requirements into efficient, user-centered products.
      </p>
    </section>
  );
}
