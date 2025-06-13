import React from 'react';
import Highlight from './highlight';

export default function Hero() {
  return ( 
    <section id="hero" className="section hero animate-reveal">
      <div className="hero-image">
        <img src="/Mypic.jpeg" alt="Profile Picture" />
      </div>
      <h1>Hello I'm <Highlight>Harshini K</Highlight></h1>
      <p>Engineer • Web Developer • Data Analytics </p>
      <div className="contact-links">
        <a href="https://linkedin.com/in/harshini-k-b3985228b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Harshini-K18" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}
