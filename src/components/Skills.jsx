// Skills.js
import React from 'react';

const Skills = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Data Analytics</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">SQL</li>
                <li className="list-group-item">Data Visualization (Tableau, Power BI, Matplotlib, Seaborn)</li>
                <li className="list-group-item">Python, R</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Django Backend</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Django</li>
                <li className="list-group-item">Django REST Framework</li>
                <li className="list-group-item">API Development</li>
                <li className="list-group-item">Database Management (MySQL, PostgreSQL)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">React Frontend</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">HTML, CSS, JavaScript</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">State Management (Redux)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
