import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';
import { PostType } from '@/types/jsonPlaceholder';

interface SsgIndexProps {
  posts: PostType[];
  buildAt: string;
}

const Index = ({ posts, buildAt }: SsgIndexProps) => {
  return (
    <>
      <Header />
      <p>{`Build at: ${buildAt}`}</p>
      <h1>Dynamic SSG</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/dynamic-ssg/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
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