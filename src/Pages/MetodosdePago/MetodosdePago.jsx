import React from 'react';
import './MetodosdePago.css';

const MetodosdePago = () => {
  return (
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
  );
};

export default MetodosdePago; 