import React from 'react';
import { FaGraduationCap, FaUserTie, FaHandshake, FaChartLine } from 'react-icons/fa';
import '../Styles/WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Big Hero Mentorship?</h2>
          <p className="subtitle">We bring real guidance to real students</p>
          <div className="divider"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaUserTie />
            </div>
            <h3>Industry-Insider Guidance</h3>
            <p>
              Learn directly from working professionals across top Indian and global companies, 
              who understand the skills and mindset needed to thrive in today’s world.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaGraduationCap />
            </div>
            <h3>Alumni Mentorship</h3>
            <p>
              Connect with mentors who have graduated from India’s premier institutions 
              and are eager to share their experiences and lessons with you.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaHandshake />
            </div>
            <h3>Personalized Matching</h3>
            <p>
              We focus on thoughtful mentor-mentee connections, considering your background, 
              goals, and interests — no random matching.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Focused Growth</h3>
            <p>
              Our mentorship is designed to guide you at every important career stage — whether 
              it’s choosing a college, preparing for exams, or entering the workforce.
            </p>
          </div>
        </div>

        <div className="indian-edge">
          <h3>The Big Hero Advantage for Indian Students</h3>
          <ul>
            <li> Deep understanding of India's competitive education system</li>
            <li> Specialized mentorship for exams like JEE, NEET, CAT, UPSC</li>
            <li> Affordable and accessible mentorship programs</li>
            <li> Culturally aware guidance tailored for Indian students</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
