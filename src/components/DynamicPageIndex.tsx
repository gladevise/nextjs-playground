import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { PostType } from '@/types/jsonPlaceholder';

interface DynamicPageIndexProps {
  posts: PostType[];
  buildAt: string;
  parentSlug: string;
}

const DynamicPageIndex = ({
  posts,
  buildAt,
  parentSlug,
}: DynamicPageIndexProps) => {
  return (
    <>
      <Header />
      <p>{`Build at: ${buildAt}`}</p>
      <h1>{parentSlug}</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${parentSlug}/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DynamicPageIndex;
