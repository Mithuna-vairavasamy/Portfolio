import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import { FaGithub, FaDatabase, FaCode, FaProjectDiagram } from 'react-icons/fa';

// Import your custom images
import stellaImg from '../Assest/logo1.png';
import frostyImg from '../Assest/frosty.png';
import eventopia from '../Assest/eventopia.png';
import pythonImg from '../Assest/python.png';
import growup from '../Assest/growup.png';
import todo from '../Assest/todo.png';
import paw from '../Assest/paw.png';

const Projects = () => {
    const navigate = useNavigate();
  const projectsData = [
    {
      category: 'Application Development',
      items: [
        {
          title: 'Event Management System – Full Stack Web App',
          duration: 'Jan 2025 – Mar 2025',
          description:
            'Developed a web platform for college event management with event creation, student registration, notifications, result publishing, e-certificates, and role-based access control.',
          tech: ['React.js', 'Node.js', 'PostgreSQL', 'Session Management', 'Authentication'],
          img: stellaImg, // Custom image
          github: 'https://github.com/Mithuna-vairavasamy',
        },
        {
          title: 'Event Planner – MERN Stack Web App',
          duration: 'Jan 2025 – Feb 2025',
          description:
            'Built a dynamic event planning app with to-do-style scheduling for both users and admins.',
          tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
           img: todo,
          github: 'https://github.com/Mithuna-vairavasamy',
        },
        {
  title: 'Eventopio – Mobile Application',
  duration: 'Dec 2024 – Feb 2025',
  description:
    'Developed a mobile application for college event management using Eclipse Bundle. The app allows students to register for events, view schedules, and receive updates in real-time with a simple and efficient interface.',
  tech: ['Eclipse Bundle', 'Java', 'Mobile App Development'],
  img: eventopia, // or use a custom image if you have one
  github: 'https://github.com/Mithuna-vairavasamy',
},

        {
          title: 'PawPicks – Pet Food & Accessories Website',
          duration: 'Aug 2024 – Sep 2024',
          description:
            'Designed an e-commerce site with cart, stock, and admin inventory management features.',
          tech: ['React.js', 'PostgreSQL'],
           img: paw,
          github: 'https://github.com/Mithuna-vairavasamy',
        },
        {
          title: 'Frosty Bliss – Ice Cream Parlour Website',
          duration: 'Dec 2023 – Jan 2024',
          description:
            'Developed a complete e-commerce app with JavaFX for product browsing, orders, and admin control.',
          tech: ['JavaFX', 'Servlets'],
          img: frostyImg, // Custom image
          github: 'https://github.com/Mithuna-vairavasamy',
        },
{
  title: 'GrowUp – E-Commerce & Crop Recommendation Website',
  duration: 'Sep 2023 – Oct 2023',
  description:
    'Developed a full-stack web application providing an e-commerce platform for agricultural products. Integrated a crop recommendation system that suggests suitable crops based on soil type and recommends natural fertilizers to enhance sustainability.',
  tech: ['HTML', 'CSS', 'JavaScript', 'Backend Integration', 'Recommendation System'],
  img: growup, // Replace with custom image if available
  github: 'https://github.com/Mithuna-vairavasamy',
},

      ],
    },
    {
      category: 'Analytics & Programming Projects',
      items: [
        {
          title: 'Nostalgia and Consumer Purchase Behavior – Data Analysis',
          duration: 'Feb 2025 – Mar 2025',
          description:
            'Conducted a study to analyze how nostalgia influences purchasing decisions using survey responses from 50–100 participants. Built predictive model to evaluate emotional impact on buying behavior.',
          tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
          img: pythonImg, // Custom image
          github: 'https://github.com/Mithuna-vairavasamy',
        },
        {
          title: 'Restaurant Billing System',
          duration: '2022',
          description:
            'Created a GUI-based billing system for restaurants capable of calculating costs, manipulating item numbers, and storing generated bills in files. Implemented in both C language and Java using NetBeans for the interface.',
          tech: ['C Language', 'Java', 'NetBeans'],
          icon: <FaCode />,
          github: 'https://github.com/Mithuna-vairavasamy',
        },
        {
          title: 'Tourism Management System',
          duration: '2024',
          description:
            'Developed a database-driven tourism management system with SQL queries to update, retrieve, and delete data efficiently, providing smooth interaction with stored records.',
          tech: ['SQL', 'Database Queries'],
          icon: <FaDatabase />,
          github: 'https://github.com/Mithuna-vairavasamy',
        },
      ],
    },
  ];

  return (
    <section className="projects-section" id="projects">
         <button
        className="back-button"
        onClick={() => navigate('/')}
        aria-label="Go back to home"
      >
        ← Back
      </button>
      <h1 className="projects-heading">My Projects</h1>

      {projectsData.map((section, index) => (
        <div key={index} className="project-category">
          <h2 className="category-title">{section.category}</h2>
          <div className="project-container">
            {section.items.map((project, i) => (
              <div key={i} className="project-card">
                {/* Show image if available, otherwise fallback to icon */}
                {project.img ? (
                  <img src={project.img} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-icon">{project.icon}</div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-duration">{project.duration}</p>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
