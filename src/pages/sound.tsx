import React from 'react';
import Header from '@/components/Header';

const play = () => {
  const audio = new Audio('/sounds/mixkit-achievement-bell-600.mp3');
  audio.play();
};

const Sound = () => {
  return (
    <>
      <Header />
      <div>Sound</div>
      <button onClick={play}>Play!</button>
    </>
  );
};

export default Sound;
