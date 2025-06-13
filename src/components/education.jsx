import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed
export default function Education() {
  return (
    <section id="education" className="section education animate-reveal">
      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />Education</h2>

      <div className="education-grid vertical">
        <div className="edu-card">
          <h3>RNS Institute of Technology</h3>
          <p className="edu-duration">(2022 – 2026)</p>
          <p>B.E. in Information Science & Engineering</p>
          <p className="edu-score">CGPA: 8.62 / 10</p>
        </div>

        <div className="edu-card">
          <h3>Sadhana PU College</h3>
          <p className="edu-duration">(2022)</p>
          <p>PUE Karnataka - PCMC</p>
          <p className="edu-score">85%</p>
        </div>

        <div className="edu-card">
          <h3>Jyothy Kendriya Vidyalaya</h3>
          <p className="edu-duration">(2020)</p>
          <p>CBSE - 10th</p>
          <p className="edu-score">80%</p>
        </div>
      </div>
    </section>
  );
}
