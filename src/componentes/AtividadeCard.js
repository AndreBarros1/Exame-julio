import React from 'react';

const AtividadeCard = ({ nome, descricao, local, data, hora }) => {
  return (
    <div className="atividade-card">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p>Local: {local}</p>
      <p>Data: {data}</p>
      <p>Hora: {hora}</p>
    </div>
  );
};

export default AtividadeCard;
