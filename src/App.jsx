// src/App.jsx (Router Version)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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