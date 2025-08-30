import React, { useState } from 'react';

// Modal component
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        <button
          onClick={onClose}
          style={closeBtnStyle}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </>
  );
};

// About content inside the modal
const AboutContent = () => (
  <div style={containerStyle} className="about-container">
    <h3 style={headingStyle}>About Me</h3>

    <p style={textStyle}>
      Hi, I’m <strong style={highlightStyle}>Mithuna Malini</strong>, a dedicated student of Computer Applications at 
      <strong style={highlightStyle}> Stella Maris College for Women, Chennai</strong>.  
      My passion lies in <strong style={highlightStyle}>full-stack development, data analysis, and intelligent applications</strong>, 
      where I thrive on transforming innovative ideas into impactful digital solutions.
    </p>

    <p style={textStyle}>
      I have developed strong expertise in <strong style={highlightStyle}>Python, Java, C, JavaFX, JavaScript, 
      PostgreSQL, MongoDB, React, Node.js, MERN stack, and mobile application development</strong>.  
      Additionally, I am skilled in <strong style={highlightStyle}>data analysis, machine learning, version control (GitHub), and UI/UX design</strong> 
      using tools like <strong style={highlightStyle}>Canva, GIMP, and Microsoft Office Suite</strong>.
    </p>

    <p style={textStyle}>
      Some of my key projects include a <strong style={highlightStyle}>College Event Management System</strong>,  
      a <strong style={highlightStyle}>real-time MERN application</strong>, and a <strong style={highlightStyle}>mobile app for campus use</strong>.  
      I have also presented research at international conferences, showcasing my interest in bridging 
      <strong style={highlightStyle}> AI, DevOps, and disaster management solutions</strong>.
    </p>

    <p style={textStyle}>
      With a proven record of <strong style={highlightStyle}>academic excellence and leadership</strong>, I bring creativity, 
      technical depth, and collaborative spirit to every challenge I take on.  
      I aspire to contribute meaningfully to projects at the intersection of <strong style={highlightStyle}>
      technology, innovation, and real-world problem solving</strong>.
    </p>
  </div>
);

// Main component
const AboutPage = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAbout(true)} style={btnStyle}>
        About Me
      </button>

      <Modal show={showAbout} onClose={() => setShowAbout(false)}>
        <AboutContent />
      </Modal>
    </div>
  );  
};

/* --- Styles --- */
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(20, 20, 20, 0.85)',
  zIndex: 999,
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'linear-gradient(135deg, #1f2937, #374151)', // Dark gradient
  color: '#e5e7eb',
  padding: '30px 25px',
  borderRadius: '15px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
  maxWidth: '700px',
  width: '95%',
  maxHeight: '80vh',
  overflowY: 'auto',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  zIndex: 1000,
};

const closeBtnStyle = {
  position: 'absolute',
  top: '15px',
  right: '20px',
  background: 'transparent',
  border: 'none',
  fontSize: '2rem',
  color: '#9ca3af',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const containerStyle = {
  textAlign: 'left',
};

const headingStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '25px',
  fontWeight: '700',
  background: 'linear-gradient(90deg, #3b82f6, #9333ea)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozBackgroundClip: 'text',
  MozTextFillColor: 'transparent',
  userSelect: 'none',
};

const highlightStyle = {
  color: '#60a5fa',
  fontWeight: '600',
};

const textStyle = {
  fontSize: '1rem',
  lineHeight: '1.8',
  marginBottom: '20px',
  color: '#d1d5db',
};

const btnStyle = {
  padding: '12px 30px',
  fontSize: '1.1rem',
  borderRadius: '8px',
  border: '2px solid #3b82f6',
  backgroundColor: 'transparent',
  color: '#3b82f6',
  cursor: 'pointer',
  boxShadow: '0 0 8px #3b82f6',
  transition: 'all 0.3s ease',
};

btnStyle[':hover'] = {
  backgroundColor: '#3b82f6',
  color: '#fff',
  boxShadow: '0 0 12px #3b82f6',
};

export default AboutPage;
