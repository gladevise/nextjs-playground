import { useState } from 'react';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

export default function Home() {
  const [now, setNow] = useState('');
  return (
    <Layout>
      <main>
        <h1>Index Page</h1>
        <button
          onClick={() => {
            setNow(new Date().toISOString());
          }}
        >
          Update Time
        </button>
        <p>{now}</p>
      </main>
    </Layout>
  );
}
