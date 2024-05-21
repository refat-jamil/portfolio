import React, { useState } from 'react';


import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects';

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
        <div className="text-center pb-5">

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
