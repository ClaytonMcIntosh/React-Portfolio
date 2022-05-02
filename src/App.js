import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


  // <div>
    //   {/* <Link to="/About">About</Link>
    //   <Link to="/Portfolio">Portfolio</Link>
    //   <Link to="/Contact">Contact</Link>
    //   <Link to="/Resume">Resume</Link> */}

    // </div>




// import React from 'react';
// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import App from './App';
// import About from './About';
// import Portfolio from './Portfolio';
// import Contact from './Contact';
// import Resume from './Resume'


// const rootElement = document.getElementById("root");
// render(

//   rootElement
// );