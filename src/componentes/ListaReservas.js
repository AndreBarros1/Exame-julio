import React from 'react';
import '../styles/ListaReserva.css';

const ListaReservas = ({ reservas, editarReserva, excluirReserva }) => {
  const getNomeAtividade = (atividadeId) => {
    const atividadesSalvas = JSON.parse(localStorage.getItem('atividades')) || [];
    const atividade = atividadesSalvas.find((atv) => atv.id === atividadeId);
    return atividade ? atividade.nome : '';
  };

  return (
    <div className='lista_container'>
      <div className='reservas_list'>
      <h2>Reservas Cadastradas</h2>
        {reservas.map((reserva) => (
          <div key={reserva.id} className='card_reserva'>
            <div className='reserva_info'>
              <h3>{getNomeAtividade(reserva.atividadeId)}</h3>
              <p>{reserva.data} - {reserva.hora}</p>
            </div>
            <div className='button_container'>
              <button className='botao_excluir' onClick={() => excluirReserva(reserva.id)}>Cancelar</button>
              <button className='botao_editar' onClick={() => editarReserva(reserva)}>Editar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaReservas;
