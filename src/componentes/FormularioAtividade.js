import React, { useState, useEffect } from 'react';

const FormularioAtividade = ({ adicionarAtividade, atividadeAtual, atualizarAtividade }) => {
  const [atividade, setAtividade] = useState({ nome: '', descricao: '', local: '', data: '', hora: '' });

  useEffect(() => {
    if (atividadeAtual) {
      setAtividade(atividadeAtual);
    } else {
      setAtividade({ nome: '', descricao: '', local: '', data: '', hora: '' });
    }
  }, [atividadeAtual]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAtividade({ ...atividade, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (atividadeAtual) {
      atualizarAtividade({ ...atividade, id: atividadeAtual.id });
    } else {
      const novaAtividade = { ...atividade, id: Date.now() };
      adicionarAtividade(novaAtividade);

      
      const atividadesSalvas = JSON.parse(localStorage.getItem('atividades')) || [];
      atividadesSalvas.push(novaAtividade);
      localStorage.setItem('atividades', JSON.stringify(atividadesSalvas));
    }
    setAtividade({ nome: '', descricao: '', local: '', data: '', hora: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={atividade.nome} onChange={handleChange} placeholder="Nome da Atividade" required />
      <input name="descricao" value={atividade.descricao} onChange={handleChange} placeholder="Descrição" required />
      <input name="local" value={atividade.local} onChange={handleChange} placeholder="Local" required />
      <input type="date" name="data" value={atividade.data} onChange={handleChange} required />
      <input type="time" name="hora" value={atividade.hora} onChange={handleChange} required />
      <button type="submit">{atividadeAtual ? 'Atualizar Atividade' : 'Adicionar Atividade'}</button>
    </form>
  );
};

export default FormularioAtividade;
