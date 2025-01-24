import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Food Subscription System",
      technology: "Java",
      description: "Developed a food subscription management system that allows users to subscribe to meal plans, customize their preferences, and manage subscriptions efficiently. This project focused on implementing core Java concepts such as object-oriented programming (OOP) and file handling while providing a user-friendly interface for seamless interaction."
    },
    {
      title: "Mobile Navigation System",
      technology: "Python",
      description: "Created a Python-based navigation system for mobile devices to provide route optimization and turn-by-turn directions. The project integrated algorithms for shortest path calculation and emphasized usability, accuracy, and real-time performance to enhance user experience."
    },
    {
      title: "Cricket Score Prediction",
      technology: "Data Science",
      description: "Designed and implemented a machine learning model to predict cricket match scores based on match conditions, team performance, and other factors. The project leveraged Python libraries such as Pandas, NumPy, and Scikit-learn, incorporating data preprocessing, feature engineering, and predictive analytics to ensure high accuracy."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <span className="technology-tag">{project.technology}</span>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
