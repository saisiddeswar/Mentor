import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-header">
        <h2>About Big Hero Mentorship</h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Big Hero Mentorship was founded with a simple idea — to make mentorship accessible to every student. 
            Inspired by the Indian tradition of "Guru-Shishya", we are building a community where students can 
            connect with mentors for real guidance and career advice.
          </p>
          
          <p>
            Our growing network of mentors includes passionate individuals from top educational institutions and 
            industries, who believe in sharing their experience to uplift the next generation.
          </p>

          <p>
            We are just getting started — and are committed to creating meaningful mentor-mentee connections 
            that make a real difference.
          </p>
        </div>

        <div className="about-image">
          <img 
            src="/indian-mentors.jpg" 
            alt="Mentorship journey in India" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
