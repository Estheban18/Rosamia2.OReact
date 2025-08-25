import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Inicio from '../pages/Inicio/Inicio';
import Nosotros from '../pages/Nosotros/Nosotros';
import ClientesSatisfechos from '../pages/ClientesSatisfechos/ClientesSatisfechos';
import ComoComprar from '../pages/ComoComprar/ComoComprar';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/clientes-satisfechos" element={<ClientesSatisfechos />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
      </Routes>
    </Router>
  );
}

export default App; 