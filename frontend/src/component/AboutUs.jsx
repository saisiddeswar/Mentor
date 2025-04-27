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
            Born from the rich Indian tradition of "Guru-Shishya" mentorship, Big Hero connects students with 
            experienced mentors across India's top institutions and companies. We believe every student deserves 
            personal guidance to navigate their career path.
          </p>
          
          <p>
            Our mentors are passionate professionals and alumni from IITs, NITs, AIIMS, IIMs and other premier 
            institutes who want to give back to the student community.
          </p>

          <div className="key-points">
            <div className="point">
              <span>✓</span> 500+ mentors from top Indian institutions
            </div>
            <div className="point">
              <span>✓</span> 10,000+ students guided since 2020
            </div>
            <div className="point">
              <span>✓</span> Special focus on Indian education system
            </div>
          </div>
        </div>

        <div className="about-image">
          <img 
            src="/indian-mentors.jpg" 
            alt="Indian mentors and students" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;