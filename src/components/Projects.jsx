import React from 'react';

const projects = [
  {
    id: 1,
    title: "Personal Website",
    description: "A responsive personal website showcasing my skills, projects, and contact information.",
    imgSrc: "project1.jpg"
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "An application to manage tasks, built with React.js and Firebase for authentication and data storage.",
    imgSrc: "project2.jpg"
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "An online store selling various products, developed using Django and integrated with Stripe for payments.",
    imgSrc: "project3.jpg"
  },
  {
    id: 4,
    title: "Data Analytics Project",
    description: "An online banking transaction data analytics project. Used SQL for querying, Python for ETL (Extract, Transform, Load) processes, and Power BI for dashboard creation.",
    imgSrc: "project4.jpg"
  }
];

const Projects = () => {
  return (
    <div className="container mt-5">
      {projects.map((project, index) => (
        <div key={project.id} className="row mb-3">
          <div className="col-md-6">
            <img src={project.imgSrc} alt={project.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
