import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Athikesavan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
