// src/components/LiveResults.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function LiveResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
    // Inscrever-se para atualizações em tempo real
    const subscription = supabase
      .from('results')
      .on('INSERT', payload => {
        setResults(prev => [...prev, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from('results')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error(error);
    else setResults(data);
  };

  return (
    <div>
      <h2>Acompanhamento ao Vivo</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            {result.match} - {result.status} - {result.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveResults;
