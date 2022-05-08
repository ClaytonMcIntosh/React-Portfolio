import React from 'react';
import './App.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/resume" exact element={<Resume />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
