import React from 'react';
import useSWR from 'swr';
import Layout from '@/components/Layout';

interface AnimechanQuoteType {
  anime: string;
  character: string;
  quote: string;
}

const fetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<AnimechanQuoteType> => {
  const res = await fetch(input, init);
  return res.json();
};

const SWR = () => {
  const { data, error } = useSWR('/api/animechan', fetcher, {
    refreshInterval: 10000,
  });

  return (
    <>
      <Layout>
        <h1>SWR</h1>
        <h2>{data?.anime}</h2>
        <p>{data?.character}</p>
        <p>{data?.quote}</p>
      </Layout>
    </>
  );
};

export default SWR;
