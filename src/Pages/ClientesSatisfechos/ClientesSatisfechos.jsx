import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import './ClientesSatisfechos.css';

const ClientesSatisfechos = () => {
  const [showGaleria, setShowGaleria] = useState(true);

  return (
    <div className="clientes-container">
      <section className="clientes-hero">
        <h1>Clientes Satisfechos</h1>
        <p>La opinión de quienes han confiado en nosotros</p>
      </section>

      <section className="testimonios-section">
        <h2>Testimonios</h2>
        <div className="testimonios-grid">
          <div className="testimonio-card">
            <div className="testimonio-text">
              <p>
                "Quedé encantada con el ramo que encargué para mi madre. Las
                flores llegaron frescas y hermosas, superaron mis expectativas.
                ¡Definitivamente volveré a comprar!"
              </p>
            </div>
            <div className="testimonio-cliente">
              <div className="cliente-foto"></div>
              <div className="cliente-info">
                <h3>María González</h3>
                <p>Compra: Ramo de Rosas Premium</p>
              </div>
            </div>
          </div>

          <div className="testimonio-card">
            <div className="testimonio-text">
              <p>
                "Contraté el servicio para decoración de mi boda y fue
                increíble. Captaron exactamente lo que quería y todos quedaron
                maravillados con los centros de mesa."
              </p>
            </div>
            <div className="testimonio-cliente">
              <div className="cliente-foto"></div>
              <div className="cliente-info">
                <h3>Carlos y Laura</h3>
                <p>Servicio: Decoración para boda</p>
              </div>
            </div>
          </div>

          <div className="testimonio-card">
            <div className="testimonio-text">
              <p>
                "Siempre envío flores a mi esposa y Florería Elegante nunca me
                falla. El servicio es puntual y las flores duran mucho más que
                las de otras floristerías."
              </p>
            </div>
            <div className="testimonio-cliente">
              <div className="cliente-foto"></div>
              <div className="cliente-info">
                <h3>Javier Rodríguez</h3>
                <p>Cliente frecuente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="estadisticas-section">
        <h2>Nuestros Logros</h2>
        <div className="estadisticas-grid">
          <div className="estadistica-item">
            <h3>+5.000</h3>
            <p>Clientes satisfechos</p>
          </div>
          <div className="estadistica-item">
            <h3>+12</h3>
            <p>Años de experiencia</p>
          </div>
          <div className="estadistica-item">
            <h3>98%</h3>
            <p>Clientes que recomiendan</p>
          </div>
          <div className="estadistica-item">
            <h3>+15.000</h3>
            <p>Arreglos entregados</p>
          </div>
        </div>
      </section>

      {showGaleria && (
        <section className="galeria-section">
          <h2>Nuestros Trabajos</h2>
          <div className="galeria-grid">
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ClientesSatisfechos;  