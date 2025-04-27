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