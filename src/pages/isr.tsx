import React from 'react';
import { GetStaticProps } from 'next';
import StaticPage from '@/components/StaticPage';

interface IsrProps {
  buildAt: string;
}

const ISR = ({ buildAt }: IsrProps) => {
  return <StaticPage buildAt={buildAt} title="ISR Page" />;
};

export default ISR;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildAt: new Date().toISOString(),
    },
    revalidate: 10,
  };
};
