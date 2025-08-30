// pages/CarritoPage/CarritoPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiPlus, FiMinus, FiTrash2, FiArrowLeft, FiHeart, FiPackage } from 'react-icons/fi';
import { useCarrito } from '../../components/Carrito/Carrito';
import './CarritoPage.css';

const CarritoPage = () => {
  const { 
    carrito, 
    total, 
    cantidadTotal, 
    eliminarDelCarrito, 
    actualizarCantidad, 
    vaciarCarrito 
  } = useCarrito();

  const handleCantidadChange = (id, nuevaCantidad) => {
    if (nuevaCantidad >= 1) {
      actualizarCantidad(id, nuevaCantidad);
    }
  };

  const handleEliminar = (id) => {
    eliminarDelCarrito(id);
  };

  const handleVaciarCarrito = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      vaciarCarrito();
    }
  };

  const calcularEnvio = () => {
    return total > 200 ? 0 : 15; // Envío gratis para compras mayores a S/200
  };

  const envio = calcularEnvio();
  const totalFinal = total + envio;

  if (carrito.length === 0) {
    return (
      <div className="carrito-page">
        <div className="carrito-page-container">
          <div className="carrito-vacio">
            <div className="carrito-vacio-icon">
              <FiShoppingCart />
            </div>
            <h2>Tu carrito está vacío</h2>
            <p>¡Descubre nuestros deliciosos productos y agrega algunos a tu carrito!</p>
            <Link to="/productos" className="btn-continuar-comprando">
              <FiPackage /> Explorar Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carrito-page">
      <div className="carrito-page-container">
        {/* Header de la página */}
        <div className="carrito-page-header">
          <div className="header-content">
            <h1>
              <FiShoppingCart /> Mi Carrito de Compras
            </h1>
            <span className="items-count">
              {cantidadTotal} {cantidadTotal === 1 ? 'producto' : 'productos'}
            </span>
          </div>
          <Link to="/productos" className="btn-seguir-comprando">
            <FiArrowLeft /> Seguir Comprando
          </Link>
        </div>

        <div className="carrito-page-content">
          {/* Lista de productos */}
          <div className="carrito-items-section">
            <h2>Productos en tu carrito</h2>
            <div className="carrito-items-grid">
              {carrito.map((item) => (
                <div key={item.id} className="carrito-item-detalle">
                  <div className="item-imagen-container">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-detalle-info">
                    <h3>{item.name}</h3>
                    <div className="item-rating">
                      <span>⭐ {item.rating}</span>
                    </div>
                    <p className="item-precio-unit">S/ {item.price.toFixed(2)} c/u</p>
                  </div>
                  
                  <div className="item-detalle-cantidad">
                    <span className="cantidad-label">Cantidad:</span>
                    <div className="cantidad-controls">
                      <button
                        className="cantidad-btn"
                        onClick={() => handleCantidadChange(item.id, item.cantidad - 1)}
                        disabled={item.cantidad <= 1}
                      >
                        <FiMinus />
                      </button>
                      <span className="cantidad-display">{item.cantidad}</span>
                      <button
                        className="cantidad-btn"
                        onClick={() => handleCantidadChange(item.id, item.cantidad + 1)}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-detalle-subtotal">
                    <span className="subtotal-label">Subtotal:</span>
                    <p className="subtotal-amount">S/ {(item.price * item.cantidad).toFixed(2)}</p>
                  </div>
                  
                  <button
                    className="btn-eliminar-item"
                    onClick={() => handleEliminar(item.id)}
                    title="Eliminar producto"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar con resumen */}
          <div className="carrito-sidebar-section">
            <div className="carrito-resumen">
              <h2>Resumen de Compra</h2>
              
              <div className="resumen-detalle">
                <div className="resumen-linea">
                  <span>Subtotal ({cantidadTotal} productos):</span>
                  <span>S/ {total.toFixed(2)}</span>
                </div>
                
                <div className="resumen-linea">
                  <span>Envío:</span>
                  <span className={envio === 0 ? 'envio-gratis' : 'envio-pago'}>
                    {envio === 0 ? 'Gratis' : `S/ ${envio.toFixed(2)}`}
                  </span>
                </div>
                
                {envio === 0 && (
                  <div className="envio-mensaje">
                    ¡Felicidades! Tu pedido califica para envío gratuito
                  </div>
                )}
                
                <div className="resumen-linea total">
                  <span>Total:</span>
                  <span>S/ {totalFinal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="carrito-acciones-principales">
                <button className="btn-proceder-pago">
                  <FiHeart /> Proceder al Pago
                </button>
                
                <button 
                  className="btn-vaciar-carrito"
                  onClick={handleVaciarCarrito}
                >
                  <FiTrash2 /> Vaciar Carrito
                </button>
              </div>
            </div>

            {/* Información adicional */}
            <div className="info-adicional">
              <div className="garantia-info">
                <h4>🛡️ Garantía de Calidad</h4>
                <p>Todos nuestros productos están frescos y elaborados con ingredientes premium.</p>
              </div>
              
              <div className="entrega-info">
                <h4>🚚 Información de Entrega</h4>
                <p>Entregas de 2-4 horas en la ciudad. Envío gratis en compras mayores a S/200.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoPage; 