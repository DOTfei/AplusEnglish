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

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home | 首页</a></li>
            <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About Us | 关于我们</a></li>
            <li><a href="#programmes" onClick={(e) => handleNavigation(e, 'programmes')}>Programmes | 课程</a></li>
            <li><a href="#classes" onClick={(e) => handleNavigation(e, 'classes')}>Classes | 配套</a></li>
            <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact | 联系</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
