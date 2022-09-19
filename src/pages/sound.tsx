import React from 'react';
import Layout from '@/components/Layout';

const play = () => {
  const audio = new Audio('/sounds/mixkit-achievement-bell-600.mp3');
  audio.play();
};

const Sound = () => {
  return (
    <>
      <Layout>
        <h1>Sound</h1>
        <button onClick={play}>Play!</button>
      </Layout>
    </>
  );
};

export default Sound;
