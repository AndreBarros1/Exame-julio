import React, { useState, useEffect } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import '../styles/Home.css';

const Home = () => {
  const [reservas, setReservas] = useState([]);
  const [atividades, setAtividades] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const reservasSalvas = JSON.parse(localStorage.getItem('reservas')) || [];
    const atividadesSalvas = JSON.parse(localStorage.getItem('atividades')) || [];
    setReservas(reservasSalvas);
    setAtividades(atividadesSalvas);
  }, []);

  const reservasFiltradas = reservas.filter((reserva) =>
    atividades.find((atividade) => atividade.id === reserva.atividadeId && atividade.nome.includes(filtro))
  );

  return (
    <div>
      <Cabecalho />
      <h1>Página Inicial</h1>
      <input
        type="text"
        placeholder="Buscar reservas..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      
      <div className='card_container'>
        <div className='card'>
          <h2>Reservas</h2>
          {reservasFiltradas.length === 0 ? (
            <p>Nenhuma reserva encontrada.</p>
          ) : (
            reservasFiltradas.map((reserva) => (
              <div key={reserva.id} className='card_item'>
                {atividades.find((atividade) => atividade.id === reserva.atividadeId)?.nome || 'Atividade não encontrada'} - {reserva.data} - {reserva.hora}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
