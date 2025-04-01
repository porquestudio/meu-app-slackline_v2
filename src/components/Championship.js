// src/components/Championship.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function Championship() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [rules, setRules] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('championships')
      .insert([{ name, date, rules }]);
    if (error) {
      alert(error.message);
    } else {
      alert('Campeonato criado com sucesso!');
      // Redireciona para a tela de detalhe do campeonato para cadastrar atletas e definir o chaveamento
      navigate(`championship/${data[0].id}`);
    }
  };

  return (
    <div>
      <h2>Cadastrar Campeonato</h2>
      <form onSubmit={handleCreate}>
        <input 
          type="text" 
          placeholder="Nome do Campeonato" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <input 
          type="date" 
          placeholder="Data" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required
        />
        <textarea 
          placeholder="Regras" 
          value={rules} 
          onChange={(e) => setRules(e.target.value)} 
          required
        />
        <button type="submit">Criar Campeonato</button>
      </form>
    </div>
  );
}

export default Championship;
