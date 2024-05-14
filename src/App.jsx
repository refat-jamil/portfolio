// App.js
import React, { useState } from 'react';
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="text-center">
            <img src={exampleImage} alt="Description of the image" style={{ width: '250px' }} />
            <h1 className='text-center my-4'>Refat Jamil</h1>
          </div>
          <div className="text-center mb-5 pb-3 mt-5">
            <button className={`rounded-pill btn btn-outline-dark px-3 mx-2 ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabClick('about')}>About</button>
            <button className={`rounded-pill btn btn-outline-dark px-3 mx-2 ${activeTab === 'skill' ? 'active' : ''}`} onClick={() => handleTabClick('skill')}>Skill</button>
            <button className={`rounded-pill btn btn-outline-dark px-3 mx-2 ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => handleTabClick('projects')}>Projects</button>
          </div>
          <div className="profile">
            {activeTab === 'about' && <About />}
            {activeTab === 'skill' && <Skills />}
            {activeTab === 'projects' && <Projects />}
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App;
