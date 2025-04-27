import React from 'react';
import '../Styles/InstitutesLogo.css';

const InstitutesLogo = () => {
  // Array of institute logos (replace with your actual image paths)
  const logos = [
    { src: "/i1.png", alt: "Indian Institute of Technology Bombay (IIT Bombay)" },
    { src: "/i2.png", alt: "Indian Institute of Technology Delhi (IIT Delhi)" },
    { src: "/i3.png", alt: "Indian Institute of Science Bangalore (IISc Bangalore)" },
    { src: "/i4.png", alt: "Indian Institute of Technology Madras (IIT Madras)" },
    { src: "/i4.png", alt: "Indian Institute of Technology Kanpur (IIT Kanpur)" },
    { src: "/i4.png", alt: "Indian Institute of Technology Kharagpur (IIT Kharagpur)" },
    { src: "/i4.png", alt: "Indian Institute of Management Ahmedabad (IIM Ahmedabad)" },
    { src: "/i4.png", alt: "Birla Institute of Technology and Science (BITS Pilani)" },
    { src: "/i4.png", alt: "University of Delhi" },
    { src: "/i4.png", alt: "Jawaharlal Nehru University (JNU)" },
  ];
  

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="institutes-section">
      <div className="section-header">
        <h2>Trusted by Students From Top Institutions</h2>
        <p className="subtitle">Our mentors come from prestigious universities worldwide</p>
      </div>
      
      <div className="logos-container">
        <div className="logos-track">
          {duplicatedLogos.map((logo, index) => (
            <div className="logo-item" key={`logo-${index}`}>
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="logo-image"
                loading="lazy"
              />
              <span className="logo-tooltip">{logo.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutesLogo;