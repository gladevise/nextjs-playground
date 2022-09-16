import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/Header';

interface IsrProps {
  isStatic: boolean;
  now: string;
}

const ISR = ({ isStatic, now }: IsrProps) => {
  return (
    <>
      <Header />
      {isStatic ? <p>SSG working</p> : <p>SSG not works</p>}
      <p>{`Build at: ${now}`}</p>
    </>
  );
};

export default ISR;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isStatic: true,
      now: new Date().toISOString(),
    },
    revalidate: 10,
  };
};
