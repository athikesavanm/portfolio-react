import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <section id="home" className="home-section">
      <div className="profile-container">
        <div className="profile-image">
          <img src="/profile.jpg" alt="Athikesavan" />
        </div>
        <h1>Athikesavan</h1>
        <p className="quote">"Turning ideas into elegant solutions through code"</p>
        <div className="social-links">
          <a href="https://github.com/athikesavan" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/athikesavan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
