import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cabecalho.css'

const Cabecalho = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/atividades">Atividades</Link></li>
          <li><Link to="/reservas">Reservas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecalho;
