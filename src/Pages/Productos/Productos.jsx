import React, { useState } from 'react';
import { FiHeart, FiEye, FiX, FiShoppingCart, FiStar } from 'react-icons/fi';
import './Productos.css';

const Productos = () => {
  const [products] = useState([
    { 
      id: 1, 
      name: 'Combo AMOR', 
      price: 445.00, 
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.8 
    },
    { 
      id: 2, 
      name: 'Combo Cumpleaños', 
      price: 340.00, 
      image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.5 
    },
    { 
      id: 3, 
      name: 'Dulce Chocolate de Nutella', 
      price: 250.00, 
      image: 'https://images.unsplash.com/photo-1570913149827-b2b1d16b4f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.9 
    },
    { 
      id: 4, 
      name: 'Dulce Corazón', 
      price: 110.00, 
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.3 
    },
    { 
      id: 5, 
      name: 'Dulzura de Oreo', 
      price: 185.00, 
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.7 
    },
    { 
      id: 6, 
      name: 'Mi Chocolatito', 
      price: 150.00, 
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.2 
    },
    { 
      id: 7, 
      name: 'Ositos dulces', 
      price: 200.00, 
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.6 
    },
    { 
      id: 8, 
      name: 'Pastel - Enamorados', 
      price: 220.00, 
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      rating: 4.9 
    },
  ]);

  const [acceptedCart, setAcceptedCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleAddToCart = (product) => {
    setAcceptedCart([...acceptedCart, {...product, dateAdded: new Date()}]);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const removeFromAcceptedCart = (index) => {
    setAcceptedCart(acceptedCart.filter((_, i) => i !== index));
  };

  // Función para renderizar estrellas de calificación
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FiStar key={i} className="star filled" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FiStar key={fullStars} className="star half" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FiStar key={fullStars + i + 1} className="star" />);
    }
    
    return stars;
  };

  return (
    <div className="productos-container">
      <h1 className="productos-titulo">Nuestros Productos</h1>
      <p className="productos-subtitulo">Descubre nuestra exquisita selección de combos y dulces</p>
      
      <div className="productos-grid">
        {products.map((product) => (
          <div key={product.id} className="producto-card">
            <div className="producto-image">
              <img src={product.image} alt={product.name} />
              <button 
                className={`favorite-btn ${favorites.includes(product.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(product.id)}
                aria-label="Añadir a favoritos"
              >
                <FiHeart />
              </button>
              <div className="producto-overlay">
                <button 
                  className="quick-view-btn"
                  onClick={() => openProductDetail(product)}
                  aria-label="Ver detalles"
                >
                  <FiEye /> Ver Detalles
                </button>
              </div>
            </div>
            <div className="producto-info">
              <h3>{product.name}</h3>
              <div className="rating">
                {renderStars(product.rating)}
                <span>({product.rating})</span>
              </div>
              <p className="precio">S/ {product.price.toFixed(2)}</p>
              <button 
                className="comprar-btn" 
                onClick={() => handleAddToCart(product)}
              >
                <FiShoppingCart /> Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalles del Producto */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedProduct.name}</h2>
                <div className="rating">
                  {renderStars(selectedProduct.rating)}
                  <span>({selectedProduct.rating})</span>
                </div>
                <p className="modal-price">S/ {selectedProduct.price.toFixed(2)}</p>
                <p className="modal-description">
                  Producto de alta calidad, perfecto para ocasiones especiales. 
                  Hecho con los mejores ingredientes y mucho amor.
                </p>
                <button 
                  className="modal-comprar-btn"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    closeModal();
                  }}
                >
                  <FiShoppingCart /> Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección de Carritos Aceptados */}
      {acceptedCart.length > 0 && (
        <div className="accepted-cart-section">
          <h2>Productos en tu Carrito ({acceptedCart.length})</h2>
          <div className="productos-grid accepted-grid">
            {acceptedCart.map((item, index) => (
              <div key={index} className="producto-card accepted">
                <div className="producto-image">
                  <img src={item.image} alt={item.name} />
                  <span className="accepted-badge">En Carrito</span>
                </div>
                <div className="producto-info">
                  <h3>{item.name}</h3>
                  <div className="rating">
                    {renderStars(item.rating)}
                    <span>({item.rating})</span>
                  </div>
                  <p className="precio">S/ {item.price.toFixed(2)}</p>
                  <div className="accepted-actions">
                    <button className="accepted-btn">
                      <FiShoppingCart /> En Carrito
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromAcceptedCart(index)}
                      aria-label="Eliminar del carrito"
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos; 