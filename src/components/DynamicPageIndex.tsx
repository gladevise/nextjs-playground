import React from 'react';
import Link from 'next/link';
import { PostType } from '@/types/jsonPlaceholder';
import Layout from './Layout';

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
      <Layout>
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
      </Layout>
    </>
  );
};

export default DynamicPageIndex;
