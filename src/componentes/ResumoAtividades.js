import React from 'react';

const ResumoAtividades = ({ atividades }) => {
  
  const proximasAtividades = atividades
    .filter((atividade) => new Date(atividade.data + 'T' + atividade.hora) >= new Date())
    .sort((a, b) => new Date(a.data + 'T' + a.hora) - new Date(b.data + 'T' + b.hora))
    .slice(0, 5); 

  return (
    <div>
      <h2>Próximas Atividades</h2>
      <ul>
        {proximasAtividades.map((atividade) => (
          <li key={atividade.id}>
            <strong>{atividade.nome}</strong> - {atividade.data} às {atividade.hora}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumoAtividades;
