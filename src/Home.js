import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div id="home" style={{ backgroundColor: "white", minHeight: "100vh", color: "white" }}>
      <Navbar />

      {/* Center content */}
      <div className="center">
        <h1>Hello,</h1>
        <h2>I'm Vignesh, a Computer Science student 🧑‍💻</h2>
        <h3>Welcome to my Personal Portfolio!</h3>
        <a 
          href="/Vignesh Pengat Resume May 2025.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="/resume.png" 
            alt="Resume" 
            className="resume-image"
          />
        </a>
      </div>

      {/* Profile Image + Socials */}
      <div className="image-wrapper">
        <img src="/vignesh .png" alt="Vignesh" className="profile-pic" />
        <div className="socials-under-pic">
          <a href="https://www.linkedin.com/in/vignesh-pengat/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/vpengat" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/vignesh_pengat/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="mailto:vpengat@gmail.com">
            <img src="/gmail.png" alt="Gmail" className="social-icon" />
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="about-section">
        <div className="about-container">
          {/* Left: Photo */}
          <div className="about-photo">
            <img src="/about-photo.jpeg" alt="About Vignesh" />
          </div>

          {/* Right: Text */}
          <div className="about-text">
            <h2>About Me</h2>
            <p>
            Hi, I’m Vignesh! A second-year Computer Science student at Wilfrid Laurier University, 
            passionate about learning, problem-solving and building meaningful projects. 
            Enthusiastic about almost every sport, with a personal goal to learn swimming soon. 
            Fluent in four languages and always open to conversations, even with strangers on the bus, believing everyone 
            has an interesting story to share. Fascinated by data, numbers and uncovering hidden patterns and insights. 
            Always eager to grow, learn and embrace new academic and personal challenges.

            </p>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="signature">© Vignesh Jayaram Pengat</div>
    </div>
  );
}

export default Home;
