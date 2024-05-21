import React from 'react';

const projects = [
  {
    id: 1,
    title: "Data Analysis - Online Banking Transaction",
    description: "A responsive personal website showcasing my skills, projects, and contact information.",
    imgSrc: "https://raw.githubusercontent.com/refat-jamil/Data-Analysis-Online-Banking-Transaction/main/img/1.jpeg",
    link: "https://refat-jamil.github.io/Data-Analysis-Online-Banking-Transaction/"
  },
  {
    id: 2,
    title: "Django Online Shopping Platform",
    description: "This application is a  Online Shopping Platform, built with Django, HTML, CSS and Bootstrap.",
    imgSrc: "https://raw.githubusercontent.com/RefatJamil/Django-Online-Shopping-Platform/main/demo/Screenshot%20from%202023-04-27%2009-29-26.png",
    link: "https://github.com/refat-jamil/Django-Online-Shopping-Platform.git"

  }
];

const ProjectCard = ({ project }) => (
  <div className="card mb-5">
    <img src={project.imgSrc} className="card-img-top" alt={project.title} />
    <div className="card-body">
      <h4 className="card-title" style={{ fontWeight: 'bold' }}>{project.title}</h4>
      <p className="card-text">{project.description}</p>
      {/* Add target="_blank" to open link in a new tab */}
      <a href={project.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  </div>
);


const Projects = () => (
  <div className="container mt-5">
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default Projects;
