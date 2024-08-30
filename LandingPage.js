// src/LandingPage.js

import React from "react";
import "./LandingPage.css"; // For styling

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">MyWebsite</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MyWebsite</h1>
          <p>Your one-stop solution for web development</p>
          <a href="#services" className="cta-button">Get Started</a>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are a team of experienced developers...</p>
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <h3>Web Development</h3>
            <p>We create responsive and functional websites.</p>
          </div>
          <div className="service">
            <h3>Design</h3>
            <p>We provide beautiful and user-friendly designs.</p>
          </div>
          <div className="service">
            <h3>SEO</h3>
            <p>Optimize your site to rank higher on search engines.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>Contact us at contact@mywebsite.com</p>
        <ul className="social-links">
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default LandingPage;
