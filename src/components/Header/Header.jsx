import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <div className="header-top">
        {/* Eliminé la etiqueta <img> que usaba 'logo' */}
        <h1>Rosamia Huanuco</h1>
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <Navbar isOpen={isMenuOpen} />
    </header>
  );
};

export default Header; 