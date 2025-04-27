import React from 'react';
import { FaGraduationCap, FaUserTie, FaHandshake, FaChartLine } from 'react-icons/fa';
import '../Styles/WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Big Hero Mentorship?</h2>
          <p className="subtitle">We're different from typical mentorship platforms</p>
          <div className="divider"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaUserTie />
            </div>
            <h3>Industry-Insider Guidance</h3>
            <p>
              Our mentors are working professionals from top Indian and global companies who 
              understand exactly what skills and knowledge you need to succeed.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaGraduationCap />
            </div>
            <h3>Alumni Network</h3>
            <p>
              Get mentored by alumni from your dream colleges (IITs, IIMs, AIIMS, etc.) who 
              have successfully walked the path you're on.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaHandshake />
            </div>
            <h3>Personalized Matching</h3>
            <p>
              We carefully match you with mentors based on your goals, background, and 
              personality - not just random connections.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Proven Results</h3>
            <p>
              78% of our students report improved admission/test scores or career opportunities 
              after mentorship.
            </p>
          </div>
        </div>

        <div className="indian-edge">
          <h3>The Big Hero Advantage for Indian Students</h3>
          <ul>
            <li>✓ Understands the competitive Indian education landscape</li>
            <li>✓ Specialized guidance for JEE, NEET, CAT, UPSC and other exams</li>
            <li>✓ Affordable mentorship options for all budgets</li>
            <li>✓ Cultural understanding of Indian student needs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;