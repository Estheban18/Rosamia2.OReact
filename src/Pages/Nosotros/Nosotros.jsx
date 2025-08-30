import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import './Nosotros.css';

const Nosotros = () => {
  const [showHistory, setShowHistory] = useState(true);

  return (
    <div className="nosotros-container">
      <section className="nosotros-hero">
        <h1>Sobre Noootros</h1>
        <p>Conoce la historia detrás de nuestra pasión por la innovación</p>
      </section>

      {showHistory && (
        <section className="historia-section">
          <div className="historia-content">
            <h2>Nuestra Historia</h2>
            <p>
              Noootros comenzó como una visión de transformar la manera en que las personas 
              interactúan con la tecnología. Fundado en 2015, nuestro equipo ha crecido 
              desde un pequeño grupo de entusiastas hasta una organización diversa de 
              profesionales apasionados.
            </p>
            <p>
              Nuestro enfoque combina metodologías tradicionales con enfoques innovadores 
              para crear soluciones únicas que superan las expectativas de nuestros clientes.
            </p>
          </div>
          <div className="historia-image"></div>
        </section>
      )}

      <section className="valores-section">
        <h2>Nuestros Valores</h2>
        <div className="valores-grid">
          <div className="valor-card">
            <div className="valor-icon">🚀</div>
            <h3>Innovación</h3>
            <p>
              Buscamos constantemente nuevas formas de resolver problemas complejos 
              con soluciones creativas.
            </p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">🤝</div>
            <h3>Colaboración</h3>
            <p>
              Creemos en el poder del trabajo en equipo y la diversidad de perspectivas.
            </p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">🌱</div>
            <h3>Sostenibilidad</h3>
            <p>Nos comprometemos con prácticas responsables con el medio ambiente y la sociedad.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros; 