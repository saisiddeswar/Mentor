import React from 'react';
import { FaLightbulb, FaGlobeAsia, FaUserGraduate, FaHandsHelping } from 'react-icons/fa';
import '../Styles/Vision.css';

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Vision</h2>
          <p className="subtitle">Bridging knowledge with opportunity</p>
          <div className="divider">
            <div className="divider-line"></div>
            {/* <div className="divider-icon">*</div> */}
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="vision-content">
          <div className="vision-statement">
            <div className="vision-icon">
              <FaLightbulb />
            </div>
            <h3>Empowering Students Across India</h3>
            <p>
              We believe every student deserves access to personalized mentorship 
              that prepares them for academic, professional, and personal success. 
              Our vision is to make quality guidance accessible and affordable for all.
            </p>
          </div>

          <div className="pillars-container">
            <h4>Our Core Principles</h4>
            
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">
                  <FaGlobeAsia />
                </div>
                <h5>Global Perspective</h5>
                <p>
                  Equip students to succeed both in India and internationally through 
                  relevant, practical mentorship.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <FaUserGraduate />
                </div>
                <h5>Academic Support</h5>
                <p>
                  Guide students through India's competitive educational and career systems 
                  with experienced mentorship.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <FaHandsHelping />
                </div>
                <h5>Community Building</h5>
                <p>
                  Build lasting networks where students and mentors grow together, 
                  beyond one-time sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="indian-context">
            <h4>Built for Indian Students</h4>
            <div className="values-list">
              <div className="value-item">
                <div>
                  <h6>Modern Mentorship</h6>
                  <p>Bringing the spirit of traditional mentorship into a modern, accessible format.</p>
                </div>
              </div>
              <div className="value-item">
                <div>
                  <h6>Inclusive Community</h6>
                  <p>Fostering a culture where students from all backgrounds are supported and uplifted.</p>
                </div>
              </div>
              <div className="value-item">
                <div>
                  <h6>Self-Reliance</h6>
                  <p>Helping students build confidence, independence, and global competitiveness.</p>
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
