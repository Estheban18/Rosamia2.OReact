import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Archivo CSS específico para este navbar

const Navbar = () => {
  return (
    <nav className="flower-navbar">
      <div className="flower-navbar-container">
        <Link to="/" className="flower-navbar-logo">
          <span className="flower-logo-text">Rosamia Huanuco</span>
          <span className="app-logo-text">Rosamia Huanuco</span>
          <span className="slogan-text">Rosamia Huanuco</span>
        </Link>

        <ul className="flower-navbar-links">
          <li className="flower-nav-item">
            <Link to="/inicio" className="flower-nav-link">Inicio</Link>
          </li>

          <li className="flower-nav-item">
            <Link to="/nosotros" className="flower-nav-link">Nosotros</Link>
          </li>

          <li className="flower-nav-item dropdown">
            <Link to="/como-comprar" className="flower-nav-link">Como Comprar</Link>
          </li>

          <li className="flower-nav-item">
            <Link to="/clientes-satisfechos" className="flower-nav-link">Clientes Satisfechos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 