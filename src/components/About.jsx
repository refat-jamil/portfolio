import React from 'react';
import exampleImage from '../images/img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import cv from '../cv/Resume - Refat Jamil .pdf';

const About = () => {
  const downloadCV = () => {
    // Replace 'your-cv.pdf' with the actual path to your CV file
    const cvUrl = cv;
    window.open(cvUrl, '_blank');
  };

  return (
    <>
      <div className="pb-md-5 px-md-3 pt-md-4">
        <div className="d-flex justify-content-between align-items-center pb-2">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/refat-jamil/" className="mr-2 text-dark">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/refat-jamil" className="mr-2 text-dark">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          
          {/* Download CV Button */}
          <button className="btn btn-dark" onClick={downloadCV}>Download Resume</button>
        </div>

        <div className="text-center mb-5 pb-3">
          <img src={exampleImage} alt="Description of the image" style={{ maxWidth: '250px', height: 'auto' }} />
        </div>

        <p className="h3 mb-3">Hello! 👋😃 I'm Refat</p>
        <p className="mb-4">I have completed my Diploma in Computer Technology at Patuakhali Polytechnic Institute. I'm passionate about technology and constantly seek opportunities to learn and grow.</p>

        <div className="mb-4">
          <h4 className="mb-2">I worked on ...</h4>
          <p className="mb-0">Web development, where I specialize in building web applications using Django and creating RESTful APIs with Django Rest Framework. I enjoy working on personal projects to level up my skills and explore new technologies.</p>
        </div>

        <div className="mb-4">
          <h4 className="mb-2">I am currently learning ...</h4>
          <p className="mb-0">Myself in the field of data analytics, with a particular focus on SQL (Structured Query Language). Through self-study and online courses, I am acquiring proficiency in querying databases, manipulating data, and performing complex analyses.</p>
        </div>
      </div>
    </>
  );
}

export default About;
