import React from 'react';
import bubbleIcon from '../assets/bubble.png'; // adjust the path if needed
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact-section animate-reveal">
      <h2 className="bubble-heading">
              <img src={bubbleIcon} alt="Projects Icon" className="bubble-icon-img" />Contact Me</h2>

      <div className="contact-item">
        <FaEnvelope />
        <span>harshinikrishnamurthy18@gmail.com</span>
      </div>

      <div className="contact-item">
        <FaPhone />
        <span>+91 9019805957</span>
      </div>

      <div className="contact-item">
        <FaMapMarkerAlt />
        <span>Bengaluru, Karnataka</span>
      </div>

      <div className="social-links">
        <a href="https://github.com/Harshini-K18" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/harshini-k-b3985228b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="copyright-wrapper">
      <div className="gradient-line"></div>
      <p className="copyright">
       &copy; {new Date().getFullYear()} <span>Harshini K</span>. All rights reserved.
      </p>
      </div>
    </section>
  );
}
