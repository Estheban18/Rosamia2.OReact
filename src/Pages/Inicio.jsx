// Inicio.jsx
import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import './Inicio.css';

const Inicio = () => {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <div className="inicio-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Flores que inspiran emociones</h1>
          <p>Descubre la belleza natural en cada arreglo floral</p>
          <button className="cta-button">Ver Colección</button>
        </div>
      </section>

      <section className="featured-products">
        <h2>Arreglos Destacados</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Ramo Rosas Clásico</h3>
            <p>$45.000</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Centro de Mesa Primaveral</h3>
            <p>$65.000</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Orquídeas Elegantes</h3>
            <p>$75.000</p>
          </div>
        </div>
      </section>

      {showAbout && (
        <section className="about-preview">
          <div className="about-content">
            <h2>Nuestra Pasión por las Flores</h2>
            <p>
              Desde 2010, hemos creado arreglos florales que alegran momentos
              especiales y decoran espacios con elegancia natural.
            </p>
            <button className="secondary-button">Conoce más</button>
          </div>
          <div className="about-image"></div>
        </section>
      )}

      {/* Controles con íconos */}
      <div className="inicio-controls">
        <button onClick={() => setShowAbout(!showAbout)}>
          {showAbout ? <FiMinimize /> : <FiMaximize />}
        </button>
        <button onClick={() => setShowAbout(false)}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default Inicio;
 