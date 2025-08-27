import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Inicio from './Pages/Inicio/Inicio';
import Nosotros from './Pages/Nosotros/Nosotros';
import ClientesSatisfechos from './Pages/ClientesSatisfechos/ClientesSatisfechos';
import ComoComprar from './Pages/ComoComprar/ComoComprar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
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
