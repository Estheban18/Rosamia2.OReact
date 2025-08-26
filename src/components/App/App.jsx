import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../../Navbar/Navbar';
import Inicio from '../../pages/Inicio/Inicio';
import Nosotros from '../pages/Nosotros/Nosotros';
import ClientesSatisfechos from '../pages/ClientesSatisfechos/ClientesSatisfechos';
import ComoComprar from '../pages/ComoComprar/ComoComprar';
import '../index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Ruta raíz que redirige a /inicio */}
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/clientes-satisfechos" element={<ClientesSatisfechos />} />
            <Route path="/como-comprar" element={<ComoComprar />} />
            {/* Opcional: Ruta para manejar páginas no encontradas */}
            <Route path="*" element={<div>Página no encontrada</div>} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2025 Rosamia Huanuco. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;