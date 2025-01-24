import React from 'react';
import './About.css';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaUserTie } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: "B.Tech in Artificial Intelligence and Data Science at Eshwar Engineering College"
    },
    {
      icon: <FaLaptopCode />,
      title: "Tech Enthusiast",
      description: "Passionate about creating innovative solutions and learning cutting-edge technologies"
    },
    {
      icon: <FaRocket />,
      title: "Career Goal",
      description: "Aspiring to become a skilled software developer and contribute to impactful projects"
    },
    {
      icon: <FaUserTie />,
      title: "Professional Focus",
      description: "Dedicated to writing clean code and building user-centric applications"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <p className="about-tagline">Turning Ideas into Reality through Code</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                Hello! I'm <span className="highlight">Athikesavan</span>, a passionate engineering student 
                with a drive for innovation and technology. Currently pursuing my B.Tech in 
                Artificial Intelligence and Data Science, I combine my academic knowledge with 
                practical coding experience to create meaningful solutions.
              </p>
              <p>
                My journey in technology is driven by curiosity and a desire to make a difference. 
                I specialize in full-stack development, with a particular interest in AI and data science 
                applications. When I'm not coding, you'll find me exploring new technologies or 
                collaborating on exciting projects.
              </p>
            </div>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
