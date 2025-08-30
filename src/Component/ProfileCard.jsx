import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../Assest/profile.jpeg'
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'center' : 'center',
      padding: isMobile ? '10px 15px' : '80px',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#64ffda',
      fontFamily: 'Segoe UI, sans-serif',
    },
    left: {
      flex: 1,
      maxWidth: isMobile ? '100%' : '50%',
      textAlign: isMobile ? 'center' : 'left',
      marginBottom: isMobile ? '40px' : '0',
    },
    h1: {
      fontSize: isMobile ? '2.2rem' : '3rem',
      margin: 0,
    },
    h2: {
      fontSize: isMobile ? '1.4rem' : '2rem',
      marginTop: '10px',
    },
    highlight: { color: '#00fff7' },
    description: {
      marginTop: '20px',
      color: '#ccc',
      fontSize: isMobile ? '1rem' : '1.1rem',
      lineHeight: 1.5,
    },
    socialIcons: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: '20px',
      fontSize: isMobile ? '1.5rem' : '1.8rem',
    },
    iconLink: { color: '#64ffda', transition: '0.3s' },
    buttonGroup: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: '20px',
      flexWrap: 'wrap',
    },
    button: {
      padding: isMobile ? '10px 20px' : '12px 30px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      borderRadius: '10px',
      border: '2px solid #64ffda',
      backgroundColor: 'transparent',
      color: '#64ffda',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: '100px',
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: isMobile ? '100%' : '50%',
    },
    profileGlow: {
      width: isMobile ? '200px' : '280px',
      height: isMobile ? '200px' : '280px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, #64ffda44, #000)',
      boxShadow: '0 0 60px #64ffda88',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImg: {
      width: isMobile ? '160px' : '220px',
      height: isMobile ? '160px' : '220px',
      borderRadius: '50%',
      border: '5px solid #64ffda',
      objectFit: 'cover',
    },
  };
const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(10, 10, 30, 0.9)',  // Darker and slightly bluish overlay for mood
  zIndex: 999,
  backdropFilter: 'blur(6px)',  // Adds glassmorphism effect
};

const modalStyle = {
  position: 'fixed',
  top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // Dark blue-green gradient
  color: '#e0f7fa', // Soft cyan for contrast
  padding: '40px 35px',
  borderRadius: '20px',
  boxShadow: '0 10px 40px rgba(0, 150, 136, 0.7)',  // Teal-ish shadow glow
  maxWidth: '700px',
  width: '95%',
  maxHeight: '85vh',
  overflowY: 'auto',
  fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  zIndex: 1000,
  border: '2px solid #00bcd4',  // Bright cyan border for emphasis
  animation: 'modalFadeIn 0.4s ease forwards',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '15px',
  right: '20px',
  background: 'transparent',
  border: 'none',
  fontSize: '2.4rem',
  color: '#00bcd4',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const containerStyle = {
  textAlign: 'justify',
  fontSize: '1.15rem',
  lineHeight: '1.8',
  letterSpacing: '0.03em',
};

const headingStyle = {
  fontSize: '2.6rem',
  textAlign: 'center',
  marginBottom: '25px',
  fontWeight: '900',
  background: 'linear-gradient(90deg, #00bcd4, #8e24aa)', // cyan to purple gradient
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  userSelect: 'none',
  textShadow: '0 2px 8px rgba(0, 188, 212, 0.6)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
};

const highlightStyle = {
  color: '#4db6ac', // pastel teal
  fontWeight: '600',
  textShadow: '0 0 4px #4db6ac88', // subtle glow with transparency
};


const textStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.85',
  marginBottom: '30px',
  color: '#b2dfdb', // softer teal/cyan for readability
  fontWeight: '500',
  fontStyle: 'italic',
  letterSpacing: '0.02em',
  borderLeft: '4px solid #00bcd4',
  paddingLeft: '12px',

  };

  const Modal = ({ show, onClose, children }) => {
    if (!show) return null;
    return (
      <>
        <div style={overlayStyle} onClick={onClose} />
        <div style={modalStyle} role="dialog" aria-modal="true">
          <button onClick={onClose} style={closeBtnStyle} aria-label="Close modal">&times;</button>
          <div>{children}</div>
        </div>
      </>
    );
  };

  const AboutContent = () => (
  <div style={{
    backgroundColor: '#000',
    padding: '30px 25px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
    color: '#fff',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    letterSpacing: '0.02em',
  }}>
    
    {/* Elegant Heading */}
    <h3 style={{
      fontSize: '2.2rem',
      textAlign: 'center',
      marginBottom: '25px',
      fontWeight: '700',
      color: '#fff',
      textShadow: '0px 0px 6px rgba(0, 229, 255, 0.6)',
      letterSpacing: '0.05em',
    }}>
      About Me
    </h3>

    {/* Paragraphs */}
    <p style={{
      marginBottom: '18px',
      borderLeft: '3px solid #00e5ff',
      paddingLeft: '12px',
    }}>
      Hi, I’m <strong style={{ color: '#00e5ff' }}>Mithuna Malini</strong>, a dedicated student of Computer Applications at 
      <strong style={{ color: '#00e5ff' }}> Stella Maris College for Women, Chennai</strong>.  
      My passion lies in <strong>full-stack development, data analysis, and intelligent applications</strong>, 
      where I thrive on transforming innovative ideas into impactful digital solutions.
    </p>

    <p style={{
      marginBottom: '18px',
      borderLeft: '3px solid #7c4dff',
      paddingLeft: '12px',
    }}>
      I have developed expertise in <strong>Python, Java, C, JavaFX, JavaScript, PostgreSQL, MongoDB, React, Node.js, and MERN stack</strong>.  
      I am also skilled in <strong>data analysis, machine learning, version control (GitHub), and UI/UX design</strong> using tools like 
      <strong> Canva, GIMP, and Microsoft Office Suite</strong>.
    </p>

    <p style={{
      marginBottom: '18px',
      borderLeft: '3px solid #00e5ff',
      paddingLeft: '12px',
    }}>
      Some of my projects include a <strong>College Event Management System</strong>, a 
      <strong> real-time MERN application</strong>, and a <strong>mobile app for campus use</strong>.  
      I have also presented research at international conferences, exploring the intersection of 
      <strong> AI, DevOps, and disaster management solutions</strong>.
    </p>

    <p style={{
      borderLeft: '3px solid #7c4dff',
      paddingLeft: '12px',
    }}>
      With a proven record of <strong>academic excellence and leadership</strong>, I bring creativity, 
      technical depth, and a collaborative spirit to every challenge.  
      I aspire to contribute to projects that combine <strong>technology, innovation, and real-world impact</strong>.
    </p>
  </div>
);


  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
         <h1 style={{ ...styles.h1, color: '#fff' }}>
  Hi, It's <span style={{ color: '#64ffda' }}>Mithuna</span>
</h1>

<h2 style={{ ...styles.h2, color: '#fff' }}>
  I'm a{' '}
  <span style={{ color: '#64ffda' }}>
    <Typewriter
      words={[
        'Web Designer',
        'Frontend Developer',
        'Backend Developer',
        'MERN Stack Developer',
        'Python Developer'
      ]}
      loop={0} // infinite
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h2><p style={styles.description}>
  <span style={{ 
    fontWeight: 'bold', 
    color: '#00fff7', 
     fontFamily: '"Poppins", sans-serif', 
    fontSize: '1.2rem' 
  }}>
    Crafting flawless user journeys powered by inspired backend brilliance✨
  </span><br />
  I am a passionate tech enthusiast with a BCA background and specialization in full-stack web development, 
  currently pursuing an M.Sc. in Data Science at VIT Chennai to broaden my expertise in real-time data-driven applications.
   My commitment to continuous learning drives me to deliver innovation and excellence in every project. Skilled in C, Java, Python,
    the MERN stack, React, Servlets, MongoDB, and PostgreSQL, I have applied my knowledge through impactful projects such as a college Event Management
     System and a mobile application for campus use. With strong leadership qualities, a collaborative spirit, and a proactive mindset, 
  I am dedicated to contributing to team success and driving meaningful outcomes.
</p>

          <div style={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/mithuna-malini-vairavasamy-b75345362/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Mithuna-vairavasamy"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <FaGithub />
            </a>
           <a
  href="mailto:mithunamalini1409@gmail.com"
  style={styles.iconLink}
  aria-label="Send email"
>
  <FaEnvelope />
</a>
          </div>
        </div>
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => setShowAbout(true)}>
            About
          </button>
         <Link to="/education">
  <button style={styles.button}>Education</button>
</Link>
 <Link to="/Project">
  <button style={styles.button}>Project</button>
</Link>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.profileGlow}>
          <img src={profile } alt='profile' style={styles.profileImg} />
        </div>
      </div>

      {/* Modal for About */}
      <Modal show={showAbout} onClose={() => setShowAbout(false)}>
        <AboutContent />
      </Modal>
    </div>
  );
};

export default ProfileCard;
