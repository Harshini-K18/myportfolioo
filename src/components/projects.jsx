import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed

const projects = [
  {
    title: "ER Triage Predictor",
    description: "Logistic Regression model using Python to predict ER triage levels, with a Flask frontend and location-based enhancements.",
    tech: "Python, Flask, Bootstrap, HTML, CSS, JavaScript",
    link: "https://github.com/Harshini-K18/ER_Triage_Predictor"
  },
  {
    title: "Chatroom Application",
    description: "Real-time chatroom built with Django and Bootstrap. Includes user authentication and responsive UI.",
    tech: "Django, HTML, CSS, JavaScript, Git",
    link: "https://github.com/Harshini-K18/chatroom"
  },
  {
    title: "Recipe Manager",
    description: "Full-stack MERN app with Create, Read, Update, Delete (CRUD) for managing recipes.",
    tech: "MongoDB, Express.js, React, Node.js",
    link: "https://github.com/Harshini-K18/Recipe-manager-MERN"
  },
  {
    title: "Online Learning Website",
    description: "Responsive e-learning platform focusing on UI/UX using ReactJS.",
    tech: "HTML, CSS, JavaScript, ReactJS",
    
  },
  {
    title: "Bitcoin Price Forecasting",
    description: "Forecasting Bitcoin prices using ARIMA, Holt-Winters, and Prophet in R.",
    tech: "R, ARIMA, Prophet",
  },
  {
    title: "Student Attendance Management System",
    description: "Built a student attendance web app using Streamlit and MySQL with full CRUD functionality.",
    tech: "MySQL, Streamlit, Python",
    link: "https://github.com/Harshini-K18/Student-Attendance-management-system"
  },
  {
    title: "Spotify Analysis",
    description: "Conducted analysis and visualization of Spotify streaming data using Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn.",
    tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
  }
];


export default function Projects() {
  return (
    <section id="projects" className="section projects animate-reveal">
      <h2 className="bubble-heading">
  <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />
  Projects
</h2>
      <div className="projects-grid vertical">
       {projects.map((proj, index) => (
  <div className="project-card" key={index}>
    <h3>{proj.title}</h3>
    <p>{proj.description}</p>
    <div className="tech-stack">
      <strong>Tech:</strong>
      {proj.tech.split(',').map((tech, i) => (
        <span key={i} className="highlight-tech">{tech.trim()}</span>
      ))}
    </div>
    
    {/* GitHub Link - Conditional */}
    {proj.link && (
      <div className="project-link">
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View on GitHub →
        </a>
      </div>
    )}
  </div>
))}

      </div>
    </section>
  );
}

