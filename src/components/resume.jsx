import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed
export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
            <h2 className="bubble-heading">
        <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />View My Resume</h2>
      <div className="contact-links">
        <a href="/Harshini K- Resume.pdf" download target="_blank" rel="noopener noreferrer">Download Resume</a>
        <a href="/Harshini K- Resume.pdf" target="_blank" rel="noopener noreferrer">View Online</a>
      </div>
    </section>
  );
}
