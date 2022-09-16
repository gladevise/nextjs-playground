import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const NextImage = () => {
  return (
    <>
      <Header />
      <div>NextImage</div>
      <Image
        src="/pexels-micaela-alejandro-10881471.jpg"
        alt="test image"
        layout="responsive"
        width={500}
        height={500}
      />
    </>
  );
};

export default NextImage;
