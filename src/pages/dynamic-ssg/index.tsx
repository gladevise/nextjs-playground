import React from 'react';
import { GetStaticProps } from 'next';
import { PostType } from '@/types/jsonPlaceholder';
import DynamicPageIndex from '@/components/DynamicPageIndex';

interface SsgIndexProps {
  posts: PostType[];
  buildAt: string;
}

const Index = ({ posts, buildAt }: SsgIndexProps) => {
  return (
    <DynamicPageIndex
      posts={posts}
      buildAt={buildAt}
      parentSlug="dynamic-ssg"
    />
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
      buildAt: new Date().toISOString(),
    },
  };
};
