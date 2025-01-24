import React from 'react';
import './Skills.css';
import { FaCode, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Web Development',
      icon: <FaCode />,
      skills: [
        {
          title: 'Frontend',
          items: ['React.js', 'JavaScript', 'HTML/CSS']
        },
        {
          title: 'Backend',
          items: ['Node.js', 'Express.js', 'MongoDB']
        }
      ]
    },
    {
      category: 'AI & Data Science',
      icon: <FaBrain />,
      skills: [
        {
          title: 'Machine Learning',
          items: ['TensorFlow', 'Scikit-learn', 'Neural Networks']
        },
        {
          title: 'Data Analysis',
          items: ['Pandas', 'NumPy', 'Data Visualization']
        }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>Full Stack Development & AI Technologies</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <div className="category-header">
                {category.icon}
                <h3>{category.category}</h3>
              </div>
              <div className="skill-groups">
                {category.skills.map((skillGroup) => (
                  <div key={skillGroup.title} className="skill-group">
                    <h4>{skillGroup.title}</h4>
                    <ul>
                      {skillGroup.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
