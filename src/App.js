import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from './Component/ProfileCard';
import Education from './Component/Education';
import Project from './Component/Project';

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          textAlign: 'center',
          background: '#0a0a0a',
          color: 'white',
          minHeight: '100vh',
          padding: '20px'
        }}
      >
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<ProfileCard />} /> {/* fallback */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
