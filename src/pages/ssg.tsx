import React from 'react';
import { GetStaticProps } from 'next';
import StaticPage from '@/components/StaticPage';

interface SsgProps {
  buildAt: string;
}

const SSG = ({ buildAt }: SsgProps) => {
  return <StaticPage buildAt={buildAt} title="SSG Page" />;
};

export default SSG;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildAt: new Date().toISOString(),
    },
  };
};
