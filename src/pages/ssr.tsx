import React from 'react';
import { GetServerSideProps } from 'next';
import StaticPage from '@/components/StaticPage';

const SSR = ({ buildAt }: { buildAt: string }) => {
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
