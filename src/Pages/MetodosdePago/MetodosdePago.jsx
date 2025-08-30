import React from 'react';
import './MetodosdePago.css';

const MetodosdePago = () => {
  return (
    <section className="metodos-pago">
      <h2>Métodos de Pago</h2>
      <div className="pago-grid">
        <div className="metodo-pago">
          <div className="pago-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path fill="#0066cc" d="M5,6H19V18H5V6M5,4A2,2 0 0,0 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4H5M6,9H18V11H6V9M6,12H16V14H6V12Z"/>
            </svg>
          </div>
          <h3>Tarjeta de Crédito/Débito</h3>
        </div>
        <div className="metodo-pago">
          <div className="pago-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path fill="#00a650" d="M11,8H13V16H11V8M15,8H17V16H15V8M7,8H9V16H7V8M17,3H7C5.9,3 5,3.9 5,5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V5C19,3.9 18.1,3 17,3M17,19H7V5H17V19Z"/>
            </svg>
          </div>
          <h3>Transferencia Bancaria</h3>
        </div>
        <div className="metodo-pago">
          <div className="pago-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path fill="#ff6600" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
            </svg>
          </div>
          <h3>Efectivo</h3>
        </div>
        <div className="metodo-pago">
          <div className="pago-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path fill="#cc0000" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
              <text x="12" y="16" text-anchor="middle" fill="white" font-size="10">BCP</text>
            </svg>
          </div>
          <h3>BCP</h3>
        </div>
        <div className="metodo-pago">
          <div className="pago-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <circle cx="12" cy="12" r="10" fill="#6fd256"/>
              <path fill="white" d="M16.5,7.5H15V15H7.5V13.5H6V15A1.5,1.5 0 0,0 7.5,16.5H16.5A1.5,1.5 0 0,0 18,15V9A1.5,1.5 0 0,0 16.5,7.5Z"/>
              <path fill="white" d="M12,9L8,13H11V17H13V13H16L12,9Z"/>
            </svg>
          </div>
          <h3>Yape</h3>
        </div>
        <div className="metodo-pago">
          <div className="pago-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <circle cx="12" cy="12" r="10" fill="#ff9900"/>
              <path fill="white" d="M12,7C9.2,7 7,9.2 7,12C7,14.8 9.2,17 12,17C14.8,17 17,14.8 17,12C17,9.2 14.8,7 12,7M12,15.5C10.1,15.5 8.5,13.9 8.5,12C8.5,10.1 10.1,8.5 12,8.5C13.9,8.5 15.5,10.1 15.5,12C15.5,13.9 13.9,15.5 12,15.5Z"/>
              <circle cx="12" cy="12" r="2.5" fill="white"/>
            </svg>
          </div>
          <h3>Plin</h3>
        </div>
      </div>
    </section>
  );
};

export default MetodosdePago; 