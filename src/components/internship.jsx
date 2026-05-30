import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed

export default function Internship() {
  return (
    <section id="internship" className="section internship animate-reveal">
      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />Internship</h2>

      <div className="education-grid vertical">

        <div className="edu-card">
          <h3>RSC Systems Pvt Ltd</h3>
          <p className="edu-duration">(Mar 11, 2025 - Jun 11, 2025)</p>
          <p>Role: Software Developer Intern</p>
          <p className="edu-score">Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.
Collaborated with the team to build intuitive UI components and improve user experience.
Gained hands-on experience with React.js, including component-based architecture, props, state, and hooks.
Strengthened skills in debugging, Git, and working in agile development environments.</p>
        </div>

        <div className="edu-card">
  <h3>Mphasis Limited</h3>
  <p className="edu-duration">(February 2026 – May 2026)</p>
  <p>Role: Trainee Associate Software Engineer Intern</p>
  <p className="edu-score">
    Worked as a <strong>Trainee Associate Software Engineer Intern</strong> at 
    <strong> Mphasis</strong>, developing enterprise-level applications using 
    <strong> C#, .NET, ASP.NET Core MVC, Web API, SQL Server, and Entity Framework Core</strong>. 
    Implemented secure authentication and authorization mechanisms, developed modules for employee, skill, 
    project, and requirement management, and contributed to a skill-based resource allocation system. 
    Enhanced expertise in full-stack development, RESTful APIs, database design, and software engineering best practices.
  </p>
</div>

        {/* Add more internships similarly */}
      </div>
    </section>
  );
}
