import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <HashLink smooth to="/#hero">Home</HashLink>
        <HashLink smooth to="/#resume">Resume</HashLink>
        <HashLink smooth to="/#about">About</HashLink>
        <HashLink smooth to="/#projects">Projects</HashLink>
        <HashLink smooth to="/#skills">Skills</HashLink>
        <HashLink smooth to="/#education">Education</HashLink>
        <HashLink smooth to="/#internship">Internship</HashLink>
        <HashLink smooth to="/#certifications">Certifications</HashLink>
        <HashLink smooth to="/#contact">Contact</HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
