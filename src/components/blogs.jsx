import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Data Analysis - Online Banking Transaction",
    description: "This blogs looks at online banking transactions to find useful information for making decisions. The data is then processed, transformed, and loaded into a warehouse database using ETL (Extract, Transform, Load) techniques facilitated by Python. To visualize the analyzed data and insights, a dashboard is created using PowerBI",
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

const BlogsCard = ({ blogs }) => (
  <div className="card mb-5">
    <img src={blogs.imgSrc} className="card-img-top" alt={blogs.title} />
    <div className="card-body">
      <h4 className="card-title" style={{ fontWeight: 'bold' }}>{blogs.title}</h4>
      <p className="card-text">{blogs.description}</p>
      {/* Add target="_blank" to open link in a new tab */}
      <a href={blogs.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">View blogs</a>
    </div>
  </div>
);


const Blogs = () => (
  <div className="container mt-5">
    {blogs.map(blogs => (
      <BlogsCard key={blogs.id} blogs={blogs} />
    ))}
  </div>
);

export default Blogs;
