import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";

// Pages
import Inicio from "./Pages/inicio/Inicio";
import Nosotros from "./Pages/Nosotros/Nosotros";
import ClientesSatisfechos from "./Pages/ClientesSatisfechos/ClientesSatisfechos";
import ComoComprar from "./Pages/ComoComprar/ComoComprar";
import EnviosyEntrega from "./Pages/EnviosyEntrega/EnviosyEntrega";
import MetodosdePago from "./Pages/MetodosdePago/MetodosdePago";
import NuestroEquipo from "./Pages/NuestroEquipo/NuestroEquipo";
import NuestrosLogros from "./Pages/NuestrosLogros/NuestrosLogros";
import NuestrosTrabajos from "./Pages/NuestrosTrabajos/NuestrosTrabajos";
import Productos from "./Pages/Productos/Productos";
import CarritoPage from "./Pages/CarritoPage/CarritoPage";

// Components
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import ChatbotRosamia from "./components/ChatbotRosamia/ChatbotRosamia";
import { CarritoProvider } from "./components/Carrito/Carrito";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <div className="App">
          {/* Header ya incluye el Navbar */}
          <Header />
          <Routes>
            {/* Redirección al inicio por defecto */}
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/clientes-satisfechos" element={<ClientesSatisfechos />} />
            <Route path="/como-comprar" element={<ComoComprar />} />
            <Route path="/envios-y-entrega" element={<EnviosyEntrega />} />
            <Route path="/metodos-de-pago" element={<MetodosdePago />} />
            <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
            <Route path="/nuestros-logros" element={<NuestrosLogros />} />
            <Route path="/nuestros-trabajos" element={<NuestrosTrabajos />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<CarritoPage />} />
          </Routes>
          
          {/* Botones flotantes */}
          <ChatbotRosamia />
          <WhatsAppChat />
        </div>
      </Router>
    </CarritoProvider>
  );
}

export default App; 