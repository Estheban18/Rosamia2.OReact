
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flower-navbar">
      <div className="nav-container">
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/inicio" className="nav-link" onClick={() => setIsOpen(false)}>
            INICIO
          </Link>
          <Link to="/nosotros" className="nav-link" onClick={() => setIsOpen(false)}>
            NOSOTROS
          </Link>
          <Link to="/clientes-satisfechos" className="nav-link" onClick={() => setIsOpen(false)}>
            CLIENTES SATISFECHOS
          </Link>
          <Link to="/como-comprar" className="nav-link" onClick={() => setIsOpen(false)}>
            CÓMO COMPRAR
          </Link>
          <Link to="/envios-y-entrega" className="nav-link" onClick={() => setIsOpen(false)}>
            ENVÍOS Y ENTREGA
          </Link>
          <Link to="/metodos-de-pago" className="nav-link" onClick={() => setIsOpen(false)}>
            MÉTODOS DE PAGO
          </Link>
          <Link to="/nuestro-equipo" className="nav-link" onClick={() => setIsOpen(false)}>
            NUESTRO EQUIPO
          </Link>
          <Link to="/nuestros-logros" className="nav-link" onClick={() => setIsOpen(false)}>
            NUESTROS LOGROS
          </Link>
          <Link to="/nuestros-trabajos" className="nav-link" onClick={() => setIsOpen(false)}>
            PRODUCTOS EN VIDEOS
          </Link>
          <Link to="/productos" className="nav-link" onClick={() => setIsOpen(false)}>
            PRODUCTOS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
