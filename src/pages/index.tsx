import { useState } from 'react';
import Header from '@/components/Header';

export default function Home() {
  const [now, setNow] = useState('');
  return (
    <main>
      <Header />
      <p>Index Page</p>
      <button
        onClick={() => {
          setNow(new Date().toISOString());
        }}
      >
        Update Time
      </button>
      <p>{now}</p>
    </main>
  );
}
