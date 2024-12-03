import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <Router>
    <div className="all">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
