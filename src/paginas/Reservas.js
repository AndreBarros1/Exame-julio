import React, { useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import FormularioReserva from '../componentes/FormularioReserva';
import ListaReservas from '../componentes/ListaReservas';

const Reservas = () => {
  const [reservas, setReservas] = useState([]);
  const [reservaAtual, setReservaAtual] = useState(null);

  const adicionarReserva = (reserva) => {
    setReservas([...reservas, reserva]);
  };

  const atualizarReserva = (reservaAtualizada) => {
    setReservas(
      reservas.map((reserva) =>
        reserva.id === reservaAtualizada.id ? reservaAtualizada : reserva
      )
    );
    setReservaAtual(null); 
  };

  const editarReserva = (reserva) => {
    setReservaAtual(reserva);
  };

  const excluirReserva = (id) => {
    setReservas(reservas.filter((reserva) => reserva.id !== id));
  };

  return (
    <div>
      <Cabecalho />
      <h1>Reservas</h1>
      <FormularioReserva
        reservaAtual={reservaAtual}
        adicionarReserva={adicionarReserva}
        atualizarReserva={atualizarReserva}
      />
      <ListaReservas
        reservas={reservas}
        editarReserva={editarReserva}
        excluirReserva={excluirReserva}
      />
    </div>
  );
};

export default Reservas;
