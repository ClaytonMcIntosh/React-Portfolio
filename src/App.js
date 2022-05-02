import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Contact.js';
import Articles from './Portfolio.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <div>
      <Link to="/About">About</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Resume">Resume</Link>

    </div>
  );
}

export default App;