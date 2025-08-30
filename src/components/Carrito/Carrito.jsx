// components/Carrito/Carrito.jsx
import React, { createContext, useContext, useReducer } from 'react';

// Estado inicial del carrito
const initialState = {
  carrito: [],
  total: 0,
  cantidadTotal: 0
};

// Acciones del carrito
const carritoActions = {
  AGREGAR_PRODUCTO: 'AGREGAR_PRODUCTO',
  ELIMINAR_PRODUCTO: 'ELIMINAR_PRODUCTO',
  ACTUALIZAR_CANTIDAD: 'ACTUALIZAR_CANTIDAD',
  VACIAR_CARRITO: 'VACIAR_CARRITO'
};

// Reducer del carrito
const carritoReducer = (state, action) => {
  switch (action.type) {
    case carritoActions.AGREGAR_PRODUCTO: {
      const productoExistente = state.carrito.find(item => item.id === action.payload.id);
      
      if (productoExistente) {
        // Si el producto ya existe, aumenta la cantidad
        const carritoActualizado = state.carrito.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
        
        const nuevoTotal = carritoActualizado.reduce((total, item) => total + (item.price * item.cantidad), 0);
        const nuevaCantidad = carritoActualizado.reduce((cantidad, item) => cantidad + item.cantidad, 0);
        
        return {
          ...state,
          carrito: carritoActualizado,
          total: nuevoTotal,
          cantidadTotal: nuevaCantidad
        };
      } else {
        // Si el producto no existe, lo agrega con cantidad 1
        const nuevoProducto = { ...action.payload, cantidad: 1 };
        const carritoActualizado = [...state.carrito, nuevoProducto];
        
        const nuevoTotal = carritoActualizado.reduce((total, item) => total + (item.price * item.cantidad), 0);
        const nuevaCantidad = carritoActualizado.reduce((cantidad, item) => cantidad + item.cantidad, 0);
        
        return {
          ...state,
          carrito: carritoActualizado,
          total: nuevoTotal,
          cantidadTotal: nuevaCantidad
        };
      }
    }
    
    case carritoActions.ELIMINAR_PRODUCTO: {
      const carritoActualizado = state.carrito.filter(item => item.id !== action.payload);
      
      const nuevoTotal = carritoActualizado.reduce((total, item) => total + (item.price * item.cantidad), 0);
      const nuevaCantidad = carritoActualizado.reduce((cantidad, item) => cantidad + item.cantidad, 0);
      
      return {
        ...state,
        carrito: carritoActualizado,
        total: nuevoTotal,
        cantidadTotal: nuevaCantidad
      };
    }
    
    case carritoActions.ACTUALIZAR_CANTIDAD: {
      const { id, cantidad } = action.payload;
      
      if (cantidad <= 0) {
        // Si la cantidad es 0 o menor, elimina el producto
        return carritoReducer(state, { type: carritoActions.ELIMINAR_PRODUCTO, payload: id });
      }
      
      const carritoActualizado = state.carrito.map(item =>
        item.id === id ? { ...item, cantidad } : item
      );
      
      const nuevoTotal = carritoActualizado.reduce((total, item) => total + (item.price * item.cantidad), 0);
      const nuevaCantidad = carritoActualizado.reduce((cantidad, item) => cantidad + item.cantidad, 0);
      
      return {
        ...state,
        carrito: carritoActualizado,
        total: nuevoTotal,
        cantidadTotal: nuevaCantidad
      };
    }
    
    case carritoActions.VACIAR_CARRITO:
      return initialState;
    
    default:
      return state;
  }
};

// Context del carrito
const CarritoContext = createContext();

// Provider del carrito
export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);
  
  const agregarAlCarrito = (producto) => {
    dispatch({ type: carritoActions.AGREGAR_PRODUCTO, payload: producto });
  };
  
  const eliminarDelCarrito = (id) => {
    dispatch({ type: carritoActions.ELIMINAR_PRODUCTO, payload: id });
  };
  
  const actualizarCantidad = (id, cantidad) => {
    dispatch({ type: carritoActions.ACTUALIZAR_CANTIDAD, payload: { id, cantidad } });
  };
  
  const vaciarCarrito = () => {
    dispatch({ type: carritoActions.VACIAR_CARRITO });
  };
  
  const value = {
    carrito: state.carrito,
    total: state.total,
    cantidadTotal: state.cantidadTotal,
    agregarAlCarrito,
    eliminarDelCarrito,
    actualizarCantidad,
    vaciarCarrito,
    dispatch // Para compatibilidad con código existente
  };
  
  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCarrito = () => {
  const context = useContext(CarritoContext);
  
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  
  return context;
};

// Componente de Carrito flotante (opcional)
export const CarritoFloating = () => {
  const { carrito, cantidadTotal } = useCarrito();
  
  return (
    <div className="carrito-floating">
      <button className="carrito-btn">
        🛒 ({cantidadTotal})
      </button>
    </div>
  );
};

// Exportar las acciones para uso externo si es necesario
export { carritoActions };