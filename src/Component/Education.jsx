import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css';
import { FaAward, FaLaptopCode, FaBriefcase } from 'react-icons/fa';

// Import images from src/Assest
import SchoolLogo from '../Assest/school.png';
import CollegeLogo from '../Assest/college.png';
import VitLogo from '../Assest/vit.png';
import InternshipLogo from '../Assest/ozzi.png';
import presentation from '../Assest/present.png';

// Certificates
import internshipCert from '../Assest/intership-cert.jpeg';
import workshopCert from '../Assest/workshop-cert.jpg';
import presentationCert from '../Assest/presentation-cert.png';
import gp from '../Assest/gp.jpg'
import pythonCert from '../Assest/course.png'
import centum from '../Assest/centum.jpg';

const Education = () => {
  const navigate = useNavigate();

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // Function to open modal
  const openModal = (img) => {
    setModalImage(img);
    setShowModal(true);
  };

  // Grouped Education Data
  const sections = [
    {
      category: 'EDUCATION',
      items: [
        {
          year: '2021',
          title: 'High School',
          institution: 'Sri Sankara Vidyalaya School',
          percentage: 'Percentage 96%',
          description:
            'Pursued higher secondary education in Commerce with Business Mathematics, building a strong foundation in quantitative reasoning, financial concepts, and problem-solving skills.',
          icon: <img src={SchoolLogo} alt="School Logo" className="edu-img" />,
        },
        {
          year: '2022 - 2025',
          title: 'Bachelor Of Computer Application',
          institution: 'Stella Maris College',
          percentage: 'CGPA 8.6 ',
          description:
            'Concentrated on programming, database systems, and applied computer science, with emphasis on developing strong technical and problem-solving skills.',
          icon: <img src={CollegeLogo} alt="College Logo" className="edu-img" />,
        },
        {
          year: '2025 - Present',
          title: 'Master’s Degree',
          institution: 'Vellore Institute of Technology (VIT)',
          description: 'Currently pursuing Master in Data Science.',
          icon: <img src={VitLogo} alt="VIT Logo" className="edu-img" />,
        },
      ],
    },
    {
      category: 'AWARDS',
      items: [
        {
          year: '2021',
          title: 'Centum Award',
          institution: 'Sri Sankara Vidyalaya School',
          description:
            'Recognized for exceptional academic excellence by securing centum (100/100) in Commerce and Accountancy, demonstrating strong analytical and problem-solving skills in business and financial domains.',
          icon: <FaAward className="edu-icon" />,
           certificate: centum,
        },
        {
          year: '2025',
          title: 'General Proficiency Award',
          institution: 'Stella Maris College',
          description:
            'Honored with an award for consistent academic excellence throughout all semesters, presented by IAS Officer Innocent Divya.',
          icon: <FaAward className="edu-icon" />,
           certificate: gp,
        },
      ],
    },
    {
      category: 'EXPERIENCE',
      items: [
        {
          year: '2023',
          title: 'Internship',
          institution: 'Ozzitech Company',
          description:
            'During my internship at Ozzitech, I gained practical experience in front-end development using React.js. I worked on building responsive user interfaces while applying key concepts such as component structure and state management.',
          icon: <img src={InternshipLogo} alt="Internship Logo" className="edu-img" />,
          certificate: internshipCert,
        },
        {
          year: '2024',
          title: 'Workshop',
          institution: 'Kloop Company',
          description:
            'Learned directly from industry experts through a one-month MERN stack program, deepening my knowledge of full-stack development and real-time applications.',
          icon: <FaLaptopCode className="edu-icon" />,
          certificate: workshopCert,
        },
        {
          year: '2025',
          title: 'International Conference Presentation',
          institution: 'Kristu Jayanti College, Bangalore',
          description:
            'Presented research paper “DaLert: Pioneering the Future of DevOps with Chatbots and Intelligence Monitoring for Disaster Prediction and Assistance” at the International Conference on Computational Intelligence Feb 27–28, 2025.',
          icon: <img src={presentation} alt="Presentation Logo" className="edu-img" />,
          certificate: presentationCert,
        },
        {
  year: '2024',
  title: 'Course Completion',
  institution: 'Udemy',
  description:
    'Successfully completed the "100 Days of Python" course on Udemy, covering everything from basic programming concepts to advanced techniques. The course included hands-on exercises and projects, including game development using Python, which enhanced my coding skills and problem-solving abilities.',
  icon: <FaLaptopCode className="edu-icon" />,
  certificate: pythonCert, // import your Udemy certificate image at the top
},

      ],
    },
  ];

  return (
    <section className="education-section" id="education">
      {/* Back button */}
      <button
        className="back-button"
        onClick={() => navigate('/')}
        aria-label="Go back to home"
      >
        ← Back
      </button>

 

      <h2 className="education-title">My Journey</h2>

      {/* Loop through sections */}
      {sections.map((section, index) => (
        <div key={index} className="edu-section">
          <h3 className="section-heading">{section.category}</h3>
          <div className="edu-container">
            {section.items.map((item, i) => (
              <div key={i} className="edu-card">
                <div className="edu-left">
                  {item.icon}
                  <div>
                    <h3>{item.title}</h3>
                    <p className="institution">{item.institution}</p>
                    <p className="year">{item.year}</p>
                  </div>
                </div>
                <div className="edu-right">
                  {item.percentage && (
                    <p className="percentage">{item.percentage}</p>
                  )}
                  <p>{item.description}</p>
                  {item.certificate && (
                    <button
                      className="cert-btn"
                      onClick={() => openModal(item.certificate)}
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate" className="modal-img" />
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
