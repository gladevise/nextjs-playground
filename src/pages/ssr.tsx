import React from 'react';
import { GetServerSideProps } from 'next';
import StaticPage from '@/components/StaticPage';

interface SsgProps {
  buildAt: string;
}

const SSR = ({ buildAt }: SsgProps) => {
  return <StaticPage buildAt={buildAt} title="SSR Page" />;
};

export default SSR;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      buildAt: new Date().toISOString(),
    },
  };
};
