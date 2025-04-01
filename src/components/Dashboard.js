// src/components/Dashboard.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Championship from './Championship';
import Profile from './Profile';
import Maneuvers from './Maneuvers';
import ChampionshipDetail from './ChampionshipDetail';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', padding: '1rem', background: '#f4f4f4' }}>
        <ul>
          <li><Link to="championship">Cadastro de Campeonato</Link></li>
          <li><Link to="profile">Perfil do Usuário</Link></li>
          <li><Link to="maneuvers">Cadastro de Manobras</Link></li>
        </ul>
      </nav>
      <main style={{ flex: 1, padding: '1rem' }}>
        <Routes>
          <Route path="championship" element={<Championship />} />
          <Route path="championship/:id" element={<ChampionshipDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="maneuvers" element={<Maneuvers />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
