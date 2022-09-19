import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';

const NextImage = () => {
  return (
    <>
      <Layout>
        <h1>NextImage</h1>
        <Image
          src="/pexels-micaela-alejandro-10881471.jpg"
          alt="test image"
          layout="responsive"
          width={500}
          height={500}
        />
      </Layout>
    </>
  );
};

export default NextImage;
