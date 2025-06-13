import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CertificateDetail.css';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed

const certificates = [
  {
    title: "MERN stack Development",
    img: "/mern.jpeg"
  },
  {
    title: "Data Structures and Algorithms",
    img: "/dsa.jpeg"
  },
  {
    title: "Artificial Intelligence Foundation",
    img: "/aifc.jpeg"
  },
  {
    title: "Networking and Cloud Computing",
    img: "/cc.jpeg"
  },
  {
    title: "MongoDB",
    img: "/mongo.jpeg"
  }
];

export default function CertificateDetail() {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="cert-detail-section">
      {/* ✅ Back Button */}
      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to Home
      </button>

      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />My Certifications</h2>
      <div className="cert-detail-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-detail-card">
            <img
              src={cert.img}
              alt={cert.title}
              className="cert-detail-image"
              onClick={() => setSelectedImg(cert)}
            />
            <p className="cert-detail-title">{cert.title}</p>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="cert-modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.img} alt={selectedImg.title} className="zoomed-image" />
            <p>{selectedImg.title}</p>
            <a href={selectedImg.img} download className="download-btn">Download</a>
            <button className="close-btn" onClick={() => setSelectedImg(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
