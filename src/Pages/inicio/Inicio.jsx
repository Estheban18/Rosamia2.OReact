import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import './Inicio.css';

const Inicio = () => {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <div className="inicio-container">
      

      {showAbout && (
        <section className="about-preview">
          <div className="about-content">
            <h2>Nuestra Pasión por las Flores</h2>
            <p>
           En Rosamia , hacemos que cada detalle cuente. 🎁✨
Te ayudamos a sorprender con los mejores ramos a un precio increíble , llenos de belleza y significado. 🌹💕
            </p>
          </div>
          <div className="about-image"></div>
        </section>
      )}
    </div>
  );
};

export default Inicio; 