import React from 'react';
import Head from 'next/head';
import Layout from './Layout';

const StaticPage = ({ buildAt, title }: { buildAt: string; title: string }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <h1>{title}</h1>
        <p>{`Build at: ${buildAt}`}</p>
      </Layout>
    </>
  );
};

export default StaticPage;
