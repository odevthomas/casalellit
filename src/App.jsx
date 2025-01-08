import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from "./components/Ferramentas/PrivacyPolicy";
import AcasaLellit from './pages/AcasaLellit';
import LandingPage from './pages/LandingPage';
import Noivas from './pages/Noivas';
import './styles/index.css'; // Sua folha de estilos

const App = () => {
  return (
    <Router>  

        {/* Definindo as rotas para a aplicação */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/casalellit" element={<AcasaLellit />} />
          <Route path="/noivas" element={<Noivas />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
        </Routes>
    </Router>
  );
};

export default App;
