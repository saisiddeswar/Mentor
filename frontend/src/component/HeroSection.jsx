import React from 'react';
import '../Styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Connect With <span className="highlight">Expert Mentors</span> To Elevate Your Career</h1>
          <p className="subheading">Get personalized guidance from professionals who've walked your path</p>
          <div className="cta-container">
            <button className="hero-button primary-btn">Find Your Mentor</button>
            <button className="hero-button secondary-btn">How It Works</button>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Mentors</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Students Helped</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Institutions</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/i3.png" alt="Mentorship Illustration" className="floating-image" />
          <div className="floating-shapes">
            <div className="shape circle"></div>
            <div className="shape triangle"></div>
            <div className="shape square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;