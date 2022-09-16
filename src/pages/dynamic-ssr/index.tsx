import React from 'react';
import { GetServerSideProps } from 'next';
import { PostType } from '@/types/jsonPlaceholder';
import DynamicPageIndex from '@/components/DynamicPageIndex';

interface SsrIndexProps {
  posts: PostType[];
  buildAt: string;
}
const Index = ({ posts, buildAt }: SsrIndexProps) => {
  return (
    <DynamicPageIndex
      posts={posts}
      buildAt={buildAt}
      parentSlug="dynamic-ssr"
    />
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
      buildAt: new Date().toISOString(),
    },
  };
};
