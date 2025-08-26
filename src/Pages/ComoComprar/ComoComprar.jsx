// ComoComprar.jsx
import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import '../ComoComprar.css';

const ComoComprar = () => {
  const [showEnvio, setShowEnvio] = useState(true);

  return (
    <div className="comocomprar-container">
      <section className="comocomprar-hero">
        <h1>Cómo Comprar</h1>
        <p>Guía simple para realizar tu pedido en Florería Elegante</p>
      </section>

      <section className="pasos-section">
        <h2>Proceso de Compra</h2>
        <div className="pasos-container">
          <div className="paso-card">
            <div className="paso-numero">1</div>
            <h3>Elige tu arreglo</h3>
            <p>Explora nuestra galería y selecciona el diseño que más te guste.</p>
          </div>
          <div className="paso-card">
            <div className="paso-numero">2</div>
            <h3>Personaliza</h3>
            <p>
              Selecciona colores, añade un mensaje personalizado o modifica el
              diseño según tus preferencias.
            </p>
          </div>
          <div className="paso-card">
            <div className="paso-numero">3</div>
            <h3>Completa tus datos</h3>
            <p>
              Proporciona información de envío y contacto para procesar tu
              pedido.
            </p>
          </div>
          <div className="paso-card">
            <div className="paso-numero">4</div>
            <h3>Realiza el pago</h3>
            <p>Elige tu método de pago preferido y confirma tu compra.</p>
          </div>
          <div className="paso-card">
            <div className="paso-numero">5</div>
            <h3>Recibe tu pedido</h3>
            <p>
              Preparamos y entregamos tu arreglo floral en el lugar y fecha
              indicados.
            </p>
          </div>
        </div>
      </section>

      <section className="metodos-pago">
        <h2>Métodos de Pago</h2>
        <div className="pago-grid">
          <div className="metodo-pago">
            <div className="pago-icon">💳</div>
            <h3>Tarjeta de Crédito/Débito</h3>
          </div>
          <div className="metodo-pago">
            <div className="pago-icon">📱</div>
            <h3>Transferencia Bancaria</h3>
          </div>
          <div className="metodo-pago">
            <div className="pago-icon">💰</div>
            <h3>Efectivo</h3>
          </div>
        </div>
      </section>

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

      {/* Controles con íconos */}
      <div className="comocomprar-controls">
        <button onClick={() => setShowEnvio(!showEnvio)}>
          {showEnvio ? <FiMinimize /> : <FiMaximize />}
        </button>
        <button onClick={() => setShowEnvio(false)}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default ComoComprar;
