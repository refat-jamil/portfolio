import React from 'react';

const blogs = [
  {
    id: 1,
    title: "How I Beat My Laziness by Setting Tiny Goals",
    description: "I always wanted to improve my coding skills but felt lazy and overwhelmed. Opening LeetCode used to scare me because I thought I had to solve many problems at once. Then I realized even solving one problem a day counts. That small step helped me build momentum and feel motivated every day. This blog shares how tiny goals helped me win over procrastination."
  },
  {
    id: 2,
    title: "Learning Django Without Fancy Tools — My Journey",
    description: "I didn’t have a fast laptop or steady internet connection. Most of the time, I used offline resources or borrowed Wi-Fi. I thought these would block my progress, but I learned that persistence and creativity are more important. I made notes, practiced offline, and focused on consistency. This post is about how mindset beats gear and connection."
  },
  {
    id: 3,
    title: "Juggling Teaching 200 Students and Coding — My Daily Routine",
    description: "Managing a coaching center with 200 students is demanding. I work hard from morning until afternoon, then study coding after Fajr and late evenings. It’s not easy to stay balanced. I created a daily routine around prayers and small study sessions. This blog explains how I balance work, family, and learning without burning out."
  },
  {
    id: 4,
    title: "How Removing Social Media Helped Me Reclaim My Focus",
    description: "Scrolling Facebook and YouTube for hours left me tired and distracted. I felt guilty for wasting time but didn’t know how to stop. One day, I deleted most apps and made my phone boring. I focused on reading, coding, and praying instead. This blog is about my journey from distraction to discipline."
  },
  {
    id: 5,
    title: "Why My First Django Project Made Me Proud",
    description: "When I started learning Django, I struggled with basic concepts and doubted myself. But after completing my first full-stack app, I felt proud and confident. I realized progress isn’t about being perfect; it’s about finishing and learning along the way. This post talks about why your unique pace is your greatest strength."
  }
];

const BlogsCard = ({ blogs }) => (
  <div className="card mb-5">
    <div className="card-body">
      <h4 className="card-title" style={{ fontWeight: 'bold' }}>{blogs.title}</h4>
      <p className="card-text">{blogs.description}</p>
    </div>
  </div>
);

const Blogs = () => (
  <div className="container mt-5">
    {blogs.map(blog => (
      <BlogsCard key={blog.id} blogs={blog} />
    ))}
  </div>
);

export default Blogs;
