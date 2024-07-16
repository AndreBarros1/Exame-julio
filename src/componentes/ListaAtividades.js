import React from 'react';
import '../styles/ListaAtividades.css';

const ListaAtividades = ({ atividades, editarAtividade, excluirAtividade }) => {
  return (
    <div className='lista_container'>
      <div className='atividades_list'>
      <h2>Atividades Cadastradas</h2>
        {atividades.map((atividade) => (
          <div key={atividade.id} className='card_atividade'>
            <div className='atividade_info'>
              <h3>{atividade.nome}</h3>
            </div>
            <div className='button_container'>
              <button className='botao_excluir' onClick={() => excluirAtividade(atividade.id)}>Excluir</button>
              <button className='botao_editar' onClick={() => editarAtividade(atividade)}>Editar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaAtividades;
