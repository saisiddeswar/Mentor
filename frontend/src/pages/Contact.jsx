import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p className="subtitle">We'd love to hear from you</p>
          <div className="divider"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h4>Our Office</h4>
              <p>123 EduTech Park, Bangalore</p>
              <p>Karnataka, India - 560001</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
              <p>Mon-Fri, 9am-6pm</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h4>Email</h4>
              <p>connect@bigheromentor.com</p>
              <p>Response within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h4>Working Hours</h4>
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM IST</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <select>
                  <option value="">Select Inquiry Type</option>
                  <option value="mentorship">Mentorship Program</option>
                  <option value="become-mentor">Become a Mentor</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <FiSend className="send-icon" />
              </button>
            </form>
          </div>
        </div>

        <div className="indian-locations">
          <h4>We also have mentors available in these Indian cities:</h4>
          <div className="cities-list">
            <span>Mumbai</span>
            <span>Delhi</span>
            <span>Bangalore</span>
            <span>Hyderabad</span>
            <span>Chennai</span>
            <span>Pune</span>
            <span>Kolkata</span>
            <span>Ahmedabad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;