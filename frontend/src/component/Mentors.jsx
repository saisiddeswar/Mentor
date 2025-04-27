import React from 'react';
import '../Styles/mentor.css';
import { FaLinkedin, FaGithub, FaGraduationCap } from 'react-icons/fa';

const MentorCard = ({ name, bio, field, university, image, socialLinks, rating }) => {
  return (
    <div className="mentor-card">
      <div className="mentor-image-container">
        <img src={image} alt={`${name}`} className="mentor-image" />
        <div className="mentor-rating">{rating} ★</div>
      </div>
      <div className="mentor-content">
        <h3>{name}</h3>
        <div className="mentor-university">
          <FaGraduationCap className="icon" />
          <span>{university}</span>
        </div>
        <p className="mentor-bio">{bio}</p>
        <div className="mentor-field">
          <strong>Expertise:</strong> {field}
        </div>
        <div className="mentor-social">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon github" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Mentors = () => {
  const mentors = [
    {
      name: "Dr. Aditi Sharma",
      bio: "Associate Professor and Software Engineer, guiding students in building scalable full-stack applications.",
      field: "Web Development, Cloud Computing",
      university: "Indian Institute of Technology Bombay (IIT Bombay)",
      image: "/mentor1.jpg",
      rating: 4.9,
      socialLinks: {
        linkedin: "https://linkedin.com/in/aditisharma",
        github: "https://github.com/aditisharma"
      }
    },
    {
      name: "Dr. Rohan Mehta",
      bio: "AI Research Scientist focused on Deep Learning and its real-world applications in healthcare and finance.",
      field: "AI & Machine Learning",
      university: "Indian Institute of Science Bangalore (IISc Bangalore)",
      image: "/mentor2.jpg",
      rating: 4.8,
      socialLinks: {
        linkedin: "https://linkedin.com/in/rohanmehta",
        github: "https://github.com/rohanmehta"
      }
    },
    {
      name: "Sneha Verma",
      bio: "Product Manager at a leading tech startup, mentoring students in design thinking and product development.",
      field: "Product Management, Startup Growth",
      university: "Indian Institute of Management Ahmedabad (IIM Ahmedabad)",
      image: "/mentor3.jpg",
      rating: 4.7,
      socialLinks: {
        linkedin: "https://linkedin.com/in/snehaverma",
        github: "https://github.com/snehaverma"
      }
    },
    {
      name: "Arjun Nair",
      bio: "Senior Data Scientist helping students crack data science interviews with real-world project experience.",
      field: "Data Science, Analytics",
      university: "Indian Statistical Institute Kolkata (ISI Kolkata)",
      image: "/mentor4.jpg",
      rating: 4.9,
      socialLinks: {
        linkedin: "https://linkedin.com/in/arjunnair",
        github: "https://github.com/arjunnair"
      }
    },
  ];
  

  return (
    <section className="mentors-section">
      <div className="section-header">
        <h2>Our Esteemed Mentors</h2>
        <p className="subtitle">Learn from industry experts and academic leaders</p>
      </div>
      <div className="mentor-container">
        {mentors.map((mentor, index) => (
          <MentorCard 
            key={index} 
            name={mentor.name} 
            bio={mentor.bio} 
            field={mentor.field}
            university={mentor.university}
            image={mentor.image} 
            rating={mentor.rating}
            socialLinks={mentor.socialLinks}
          />
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all-btn">View All Mentors</button>
      </div>
    </section>
  );
};

export default Mentors;