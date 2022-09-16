import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/Header';

interface SsgProps {
  isStatic: boolean;
  now: string;
}

const SSG = ({ isStatic, now }: SsgProps) => {
  return (
    <>
      <Header />
      {isStatic ? <p>SSG working</p> : <p>SSG not works</p>}
      <p>{`Build at: ${now}`}</p>
    </>
  );
};

export default SSG;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isStatic: true,
      now: new Date().toISOString(),
    },
  };
};
