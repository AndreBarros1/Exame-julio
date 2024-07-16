import React, { useState, useEffect } from 'react';

const FormularioReserva = ({ adicionarReserva, reservaAtual, atualizarReserva }) => {
  const [reserva, setReserva] = useState({ atividadeId: '', data: '', hora: '' });
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    
    const atividadesSalvas = JSON.parse(localStorage.getItem('atividades')) || [];
    setAtividades(atividadesSalvas);
  }, []);

  useEffect(() => {
    if (reservaAtual) {
      setReserva(reservaAtual);
    } else {
      setReserva({ atividadeId: '', data: '', hora: '' });
    }
  }, [reservaAtual]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reservaAtual) {
      atualizarReserva(reserva);
    } else {
      adicionarReserva({ ...reserva, id: Date.now() });
    }
    setReserva({ atividadeId: '', data: '', hora: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="atividadeId" value={reserva.atividadeId} onChange={handleChange} required>
        <option value="">Selecione uma Atividade</option>
        {atividades.map((atividade) => (
          <option key={atividade.id} value={atividade.id}>
            {atividade.nome}
          </option>
        ))}
      </select>
      <input type="date" name="data" value={reserva.data} onChange={handleChange} required />
      <input type="time" name="hora" value={reserva.hora} onChange={handleChange} required />
      <button type="submit">{reservaAtual ? 'Atualizar Reserva' : 'Fazer Reserva'}</button>
    </form>
  );
};

export default FormularioReserva;
