import React from "react";
import { useNavigate } from "react-router-dom";
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed

export default function Certifications() {
  const certs = [
    "MERN stack Development",
    "Data Structures and Algorithms",
    "Artificial Intelligence Foundation",
    "Networking and Cloud Computing",
    "MongoDB"
  ];

  const navigate = useNavigate();

  return (
    <section id="certifications" className="cert-section animate-reveal">
      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />Certifications</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            {cert}
          </div>
        ))}
      </div>
      <span className="show-more-btn" onClick={() => navigate("/certificate-detail")}>
        Show More
      </span>
    </section>
  );
}
