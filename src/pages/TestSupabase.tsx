import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function TestSupabase() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      const { data, error } = await supabase.from('proprietaires').select('*');
      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
    };

    fetchTest();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Supabase</h1>
      {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}
