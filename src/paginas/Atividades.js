import React, { useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import FormularioAtividade from '../componentes/FormularioAtividade';
import ListaAtividades from '../componentes/ListaAtividades';

const Atividades = () => {
  const [atividades, setAtividades] = useState([]);
  const [atividadeAtual, setAtividadeAtual] = useState(null);

  const adicionarAtividade = (atividade) => {
    setAtividades([...atividades, atividade]);
  };

  const atualizarAtividade = (atividadeAtualizada) => {
    const atividadesAtualizadas = atividades.map((atividade) =>
      atividade.id === atividadeAtualizada.id ? atividadeAtualizada : atividade
    );
    setAtividades(atividadesAtualizadas);

    localStorage.setItem('atividades', JSON.stringify(atividadesAtualizadas));
    setAtividadeAtual(null);
  };

  const editarAtividade = (atividade) => {
    setAtividadeAtual(atividade);
  };

  const excluirAtividade = (id) => {
    const atividadesFiltradas = atividades.filter((atividade) => atividade.id !== id);
    setAtividades(atividadesFiltradas);

    
    localStorage.setItem('atividades', JSON.stringify(atividadesFiltradas));
  };

  return (
    <div>
      <Cabecalho />
      <h1>Atividades</h1>
      <FormularioAtividade 
        adicionarAtividade={adicionarAtividade} 
        atividadeAtual={atividadeAtual} 
        atualizarAtividade={atualizarAtividade} 
      />
      <ListaAtividades
        atividades={atividades}
        editarAtividade={editarAtividade}
        excluirAtividade={excluirAtividade}
      />
    </div>
  );
};

export default Atividades;
