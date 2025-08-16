import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailForm from './components/EmailForm';
import ResumeForm from './components/ResumeForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<EmailForm />} />
      <Route path="/resume-form" element={<ResumeForm />} />
    </Routes>
  </Router>
);

export default App;
