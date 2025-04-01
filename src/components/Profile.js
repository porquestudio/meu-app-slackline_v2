// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = supabase.auth.user();
    setUser(currentUser);
  }, []);

  if (!user) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Nome:</strong> {user.user_metadata.full_name}</p>
    </div>
  );
}

export default Profile;
