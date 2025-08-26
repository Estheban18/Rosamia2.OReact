import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flower-navbar">
      <div className="nav-container">
        <Link to="/inicio" className="nav-link">
          Inicio
        </Link>
        <Link to="/nosotros" className="nav-link">
          Nosotros
        </Link>
        <Link to="/clientes-satisfechos" className="nav-link">
          Clientes Satisfechos
        </Link>
        <Link to="/como-comprar" className="nav-link">
          Cómo Comprar
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 