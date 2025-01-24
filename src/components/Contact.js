import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 9786441415</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-text">
                <h3>Email</h3>
                <p>athikesavanm71@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-buttons">
              <a 
                href="https://github.com/athikesavanm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button github"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/athikesavanm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button linkedin"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
