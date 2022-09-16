import React from 'react';
import { GetServerSideProps } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';

import { PostType } from '@/types/jsonPlaceholder';

interface SsrIndexProps {
  posts: PostType[];
  buildAt: string;
}
const Index = ({ posts, buildAt }: SsrIndexProps) => {
  return (
    <>
      <Header />
      <p>{`Build at: ${buildAt}`}</p>
      <h1>Dynamic SSR</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/dynamic-ssr/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
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
