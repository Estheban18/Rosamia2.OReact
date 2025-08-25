import React, { useState } from "react";
import Navbar from "./Navbar"; 
import "./Header.css";
import logo from "../../assets/images/RosamiaLogo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <div className="header-top">
        <img 
          src={logo} 
          alt="Rosamia Huanuco" 
          className="logo" 
          loading="lazy"
        />
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
}

export default Header; 