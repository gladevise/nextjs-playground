import React from 'react';
import { GetServerSideProps } from 'next';
import Header from '@/components/Header';

interface SsgProps {
  isSsr: boolean;
  now: string;
}

const SSR = ({ isSsr, now }: SsgProps) => {
  return (
    <>
      <Header />
      {isSsr ? <p>SSR working</p> : <p>SSR not works</p>}
      <p>{`Build at: ${now}`}</p>
    </>
  );
};

export default SSR;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      isSsr: true,
      now: new Date().toISOString(),
    },
  };
};
