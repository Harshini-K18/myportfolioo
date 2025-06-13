import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certifications from './certifications';
import CertificateDetail from './certificateDetail'; // Make sure the file exports correctly
import logo from './assets/bubble.svg'; // Not used here, but imported correctly

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Certifications />} />
        <Route path="/certificate-detail" element={<CertificateDetail />} />
        {/* Optional: Add more routes */}
      </Routes>
    </Router>
  );
}

export default App;
