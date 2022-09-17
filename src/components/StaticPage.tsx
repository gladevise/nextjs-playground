import React from 'react';
import Header from '@/components/Header';
import Head from 'next/head';

interface StaticPageProps {
  buildAt: string;
  title: string;
}

const StaticPage = ({ buildAt, title }: StaticPageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <h1>{title}</h1>
      <p>{`Build at: ${buildAt}`}</p>
    </>
  );
};

export default StaticPage;
