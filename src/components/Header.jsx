import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { targetId } });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="A+ English Logo" />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About Us</a></li>
            <li><a href="#programmes" onClick={(e) => handleNavigation(e, 'programmes')}>Programmes</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavigation(e, 'testimonials')}>Success Stories</a></li>
            <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
          </ul>
          {/* Mobile only CTA inside menu if needed, or kept separate. 
              For desktop it is requested on the far right. 
              I will assume the 'nav' covers the center links, and I'll add the button outside nav for desktop, 
              but for mobile it might be better inside. 
              Let's keep it outside for desktop structure and handle mobile via CSS. 
          */}
        </nav>
        {/* Removed CTA as per request */}
      </div>
    </header>
  );
};

export default Header;
