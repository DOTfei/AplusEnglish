import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-left">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="A+ English Logo" className="header-logo" />
          </Link>
        </div>

        <div className="header-center">
          <Link to="/" onClick={closeMenu} className="home-btn center-home-btn">Home</Link>
        </div>

        <div className="header-right">
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link to="/secondary-intensive" onClick={closeMenu}>Secondary Intensive Class</Link></li>
              <li><Link to="/cambridge" onClick={closeMenu}>Cambridge English</Link></li>
              <li><Link to="/muet" onClick={closeMenu}>MUET</Link></li>
              <li><Link to="/speaking" onClick={closeMenu}>Speaking Class</Link></li>
              <li><Link to="/review" onClick={closeMenu}>Review</Link></li>
            </ul>
          </nav>

          <Link to="/" onClick={closeMenu} className="home-btn mobile-home-btn">Home</Link>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

