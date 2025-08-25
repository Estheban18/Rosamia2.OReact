// Nosotros.jsx
import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import './Nosotros.css';

const Nosotros = () => {
  // si luego quieres usar algún estado o íconos, ya los tienes listos
  const [showHistory, setShowHistory] = useState(true);

  return (
    <div className="nosotros-container">
      <section className="nosotros-hero">
        <h1>Sobre Nosotros</h1>
        <p>Conoce la historia detrás de nuestra pasión por las flores</p>
      </section>

      {showHistory && (
        <section className="historia-section">
          <div className="historia-content">
            <h2>Nuestra Historia</h2>
            <p>
              Florería Elegante nació en 2010 con el sueño de llevar belleza y
              alegría a través de las flores. Comenzamos como un pequeño
              emprendimiento familiar y hoy somos referentes en diseño floral en
              la ciudad.
            </p>
            <p>
              Nuestro equipo de floristas expertos combina técnicas
              tradicionales con tendencias modernas para crear arreglos únicos
              que superan expectativas.
            </p>
          </div>
          <div className="historia-image"></div>
        </section>
      )}

      <section className="valores-section">
        <h2>Nuestros Valores</h2>
        <div className="valores-grid">
          <div className="valor-card">
            <div className="valor-icon">🌿</div>
            <h3>Calidad</h3>
            <p>
              Trabajamos con las flores más frescas y proveedores locales
              certificados.
            </p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">✨</div>
            <h3>Creatividad</h3>
            <p>
              Diseños originales y personalizados para cada ocasión especial.
            </p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">❤️</div>
            <h3>Pasión</h3>
            <p>Amamos lo que hacemos y eso se refleja en cada creación.</p>
          </div>
        </div>
      </section>

      <section className="equipo-section">
        <h2>Nuestro Equipo</h2>
        <div className="equipo-grid">
          <div className="miembro-card">
            <div className="miembro-foto"></div>
            <h3>Ana Rodríguez</h3>
            <p>Florista Principal</p>
          </div>
          <div className="miembro-card">
            <div className="miembro-foto"></div>
            <h3>Carlos Méndez</h3>
            <p>Diseñador Floral</p>
          </div>
          <div className="miembro-card">
            <div className="miembro-foto"></div>
            <h3>María López</h3>
            <p>Atención al Cliente</p>
          </div>
        </div>
      </section>

      {/* Botones de control usando los íconos */}
      <div className="nosotros-controls">
        <button onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? <FiMinimize /> : <FiMaximize />}
        </button>
        <button onClick={() => setShowHistory(false)}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default Nosotros;
 