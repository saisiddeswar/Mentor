import React from 'react';
import { FaLightbulb, FaGlobeAsia, FaUserGraduate, FaHandsHelping } from 'react-icons/fa';
import '../Styles/Vision.css';

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Vision</h2>
          <p className="subtitle">Bridging ancient wisdom with modern opportunities</p>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-icon">✨</div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="vision-content">
          <div className="vision-statement">
            <div className="vision-icon">
              <FaLightbulb />
            </div>
            <h3>Empowering India's Next Generation</h3>
            <p>
              We envision an India where every student, regardless of background, has access 
              to personalized guidance from those who've walked the path before them. By 
              democratizing mentorship, we aim to unlock the full potential of India's youth.
            </p>
          </div>

          <div className="pillars-container">
            <h4>Our Guiding Principles</h4>
            
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">
                  <FaGlobeAsia />
                </div>
                <h5>Global Mindset</h5>
                <p>
                  Prepare students for both Indian and global opportunities with 
                  world-class guidance
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <FaUserGraduate />
                </div>
                <h5>Academic Excellence</h5>
                <p>
                  Support students navigating India's competitive education landscape
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <FaHandsHelping />
                </div>
                <h5>Community Building</h5>
                <p>
                  Create networks that extend beyond mentorship into lifelong professional 
                  relationships
                </p>
              </div>
            </div>
          </div>

          <div className="indian-context">
            <h4>Rooted in Indian Values</h4>
            <div className="values-list">
              <div className="value-item">
                <span className="value-icon">🌱</span>
                <div>
                  <h6>Guru-Shishya Parampara</h6>
                  <p>Modernizing India's ancient mentorship tradition for today's students</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <div>
                  <h6>Vasudhaiva Kutumbakam</h6>
                  <p>Building a mentorship family that supports all members</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">💡</span>
                <div>
                  <h6>Atmanirbhar Bharat</h6>
                  <p>Developing self-reliant students who can compete globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;