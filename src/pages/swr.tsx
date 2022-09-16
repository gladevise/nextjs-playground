import React from 'react';
import useSWR from 'swr';
import Header from '@/components/Header';

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
      <Header />
      <div>SWR</div>
      <div>{data?.anime}</div>
      <div>{data?.character}</div>
      <div>{data?.quote}</div>
    </>
  );
};

export default SWR;
