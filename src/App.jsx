import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Resume from "./components/resume";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Internship from "./components/internship";
import Certifications from "./components/certifications";
import CertificateDetail from "./components/certificateDetail";

function ScrollToHash() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure section is mounted
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Resume />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Internship />
              <Certifications />
              <Contact />
            </>
          }
        />
        <Route path="/certificate-detail" element={<CertificateDetail />} />
      </Routes>
    </Router>
  );
}
