import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';


function App() {
  return (

    <div>
      <header>
        <p>
          Clayton McIntosh

        </p>

        <About />
        <Portfolio />
        <Contact />
        <Resume />

      </header>
    </div>
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
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="about" element={<About />} />
//       <Route path="portfolio" element={<Portfolio />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="resume" element={<Resume />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );