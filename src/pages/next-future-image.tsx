import React from 'react';
import Image from 'next/future/image';
import Layout from '@/components/Layout';

const NextFutureImage = () => {
  return (
    <>
      <Layout>
        <h1>Next Future Image</h1>
        <Image
          src="/pexels-micaela-alejandro-10881471.jpg"
          alt="test image"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={100}
          height={100}
        />
      </Layout>
    </>
  );
};

export default NextFutureImage;
