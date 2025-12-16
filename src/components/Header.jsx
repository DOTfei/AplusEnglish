import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <li><a href="/#home" onClick={() => setIsMenuOpen(false)}>Home | 首页</a></li>
            <li><a href="/#about" onClick={() => setIsMenuOpen(false)}>About Us | 关于我们</a></li>
            <li><a href="/#programmes" onClick={() => setIsMenuOpen(false)}>Programmes | 课程</a></li>
            <li><a href="/#classes" onClick={() => setIsMenuOpen(false)}>Classes | 配套</a></li>
            <li><a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact | 联系</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
