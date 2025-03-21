// src/App.jsx (Router Version)
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import JustificationPage from './components/JustificationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/justification" element={<JustificationPage />} />
      </Routes>
    </Router>
  );
};

export default App;