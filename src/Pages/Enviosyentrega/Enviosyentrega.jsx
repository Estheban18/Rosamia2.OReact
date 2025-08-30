import React from 'react';
import './Enviosyentrega.css';

const Enviosyentrega = ({ showEnvio }) => {
  return (
    <>
      {showEnvio && (
        <section className="envio-section">
          <h2>Envíos y Entregas</h2>
          <div className="envio-content">
            <div className="envio-info">
              <h3>Zonas de entrega</h3>
              <p>
                Realizamos envíos a toda el área metropolitana. Consulta por
                envíos a otras ciudades.
              </p>

              <h3>Tiempos de entrega</h3>
              <p>
                Los pedidos se entregan en un plazo de 24-48 horas. Para fechas
                especiales te recomendamos hacer tu pedido con al menos 3 días
                de anticipación.
              </p>

              <h3>Costo de envío</h3>
              <p>
                El costo varía según la zona de entrega. Envío gratuito para
                pedidos superiores a $100.000 en el área central.
              </p>
            </div>
            <div className="envio-image"></div>
          </div>
        </section>
      )}
    </>
  );
};

export default Enviosyentrega; 