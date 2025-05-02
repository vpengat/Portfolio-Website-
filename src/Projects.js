import React from 'react';
import Navbar from './Navbar';

function Projects() {
  
  return (
    <div className="projects-page">
      <Navbar /> 

      <h1>My Projects</h1>
    

      {/* Personal Website Project */}


      <div className="project-card">
  <h2>Grocery Price Checker (Ongoing)</h2>
  <p><strong>Tech Stack:</strong> Python, Pandas, Excel, SQL, Power BI, Web Scraping</p>

  <ul>
    <li>Developing a Python-based data analysis tool to compare grocery flyer prices across multiple stores, helping users identify the cheapest essential items and maximize savings</li>
    <li>Using Pandas to process price data and set up SQL for easier storage and search</li>
    <li>Building Power BI dashboards to visualize price comparisons and savings trends, providing clear, actionable insights</li>
    <li>Implementing web scraping methods to automate flyer data collection from online sources</li>
  </ul>
</div>
      <div className="project-card">
        <h2>Personal Portfolio  Website</h2>
        <p><strong>Tech Stack:</strong> React, JavaScript, HTML, CSS</p>
        
        <ul>
  <li>Designed and built a personal portfolio website using React, JavaScript, HTML and CSS</li>
  <li>Showcases my projects, technical skills and personal journey as a developer</li>
  <li>Features smooth navigation, responsive layout and easy access to my resume</li>
  <li>Includes a dedicated contact section for visitors to reach out</li>
  <li>Continuously updated with new projects, features and improvements reflecting my growth</li>
</ul>

          
        
        <a 
          href="https://github.com/vpengat/Portfolio-Website" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
        >
          View on GitHub →
        </a>
      </div>

      {/* Marketing Project */}
      <div className="project-card">
  <h2>Marketing</h2>
  <p><strong>Canada Education Technology College (Remote 60 Hour Paid Project)</strong></p>
  <p><strong>Used Tools & Platforms:</strong> Excel, Word, PowerPoint, Canva, YouTube</p>

  <ul>
    <li>Researched immigration trends to support CETC’s outreach strategy</li>
    <li>Created marketing content and materials to engage audiences</li>
    <li>Identified content gaps and recommended improvements</li>
    <li>Applied strong communication and problem-solving skills to enhance targeting</li>
    <li>Produced multiple YouTube videos to present findings and engage viewers effectively</li>
  </ul>
</div>
    </div>
  );
}

export default Projects;
