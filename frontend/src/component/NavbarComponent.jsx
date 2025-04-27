import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiMail, FiBookmark } from "react-icons/fi";
import { FaMandalorian } from "react-icons/fa";
import '../Styles/Navbar.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <FaMandalorian className="logo-icon" />
          <span className="brand-name">Mentor</span>
          <span className="brand-dot">.</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/" className="nav-item">
              <FiHome className="nav-icon" />
              <span className="nav-text">Home</span>
              <span className="nav-underline"></span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/about" className="nav-item">
              <FiUser className="nav-icon" />
              <span className="nav-text">About</span>
              <span className="nav-underline"></span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/mentors" className="nav-item">
              <FiBookmark className="nav-icon" />
              <span className="nav-text">Mentors</span>
              <span className="nav-underline"></span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/contact" className="nav-item">
              <FiMail className="nav-icon" />
              <span className="nav-text">Contact</span>
              <span className="nav-underline"></span>
            </Nav.Link>
            
            <div className="cta-container">
              <Link to="/become-mentor" className="cta-button">
                Become a Mentor
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;