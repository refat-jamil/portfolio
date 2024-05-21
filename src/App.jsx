import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import exampleImage from './images/img.png';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        {/* Social Media Icons */}
        <div className="social-icons pb-2">
            <a href="https://www.linkedin.com/in/refat-jamil/"><FontAwesomeIcon icon={faLinkedin} className="mr-2 text-dark" /></a>
            <a href="https://github.com/refat-jamil"><FontAwesomeIcon icon={faGithub} className="mr-2 text-dark" /></a>
          </div>

          <div className="text-center">
            <img src={exampleImage} alt="Description of the image" style={{ maxWidth: '250px', height: 'auto' }} />
            <h1 className='text-center my-2'>Refat Jamil</h1>
          </div>
          <div className="text-center mb-5 pb-3 mt-5">
            <button className={`rounded-pill btn btn-outline-dark px-3 mx-2 ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabClick('about')}>About</button>
            <button className={`rounded-pill btn btn-outline-dark px-3 mx-2 ${activeTab === 'skill' ? 'active' : ''}`} onClick={() => handleTabClick('skill')}>Skills</button>
            <button className={`rounded-pill btn btn-outline-dark px-3 mx-2 ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => handleTabClick('projects')}>Projects</button>
          </div>
          <div className="profile">
            {activeTab === 'about' && <About />}
            {activeTab === 'skill' && <Skills />}
            {activeTab === 'projects' && <Projects />}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
     
    </div>
  );
}

export default App;
