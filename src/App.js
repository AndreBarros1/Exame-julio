import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Atividades from './paginas/Atividades';
import Reservas from './paginas/Reservas';
import './styles/App.css';

const App = () => (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividades" element={<Atividades />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
  </Router>
);

export default App;
