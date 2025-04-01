// src/components/Maneuvers.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Maneuvers() {
  const [maneuverName, setManeuverName] = useState('');
  const [score, setScore] = useState('');

  const handleAddManeuver = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('maneuvers')
      .insert([{ name: maneuverName, score: Number(score) }]);
    if (error) {
      alert(error.message);
    } else {
      alert('Manobra cadastrada com sucesso!');
      setManeuverName('');
      setScore('');
    }
  };

  return (
    <div>
      <h2>Cadastrar Manobras</h2>
      <form onSubmit={handleAddManeuver}>
        <input 
          type="text" 
          placeholder="Nome da Manobra" 
          value={maneuverName} 
          onChange={(e) => setManeuverName(e.target.value)} 
          required
        />
        <input 
          type="number" 
          placeholder="Pontuação" 
          value={score} 
          onChange={(e) => setScore(e.target.value)} 
          required
        />
        <button type="submit">Cadastrar Manobra</button>
      </form>
    </div>
  );
}

export default Maneuvers;
