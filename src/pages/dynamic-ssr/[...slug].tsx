import React from 'react';
import Header from '@/components/Header';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Comment from '@/components/Comment';

import { CommentType, PostType } from '@/types/jsonPlaceholder';
import { ParsedUrlQuery } from 'querystring';

interface DynamicSsrProps {
  post?: PostType;
  comments?: CommentType[];
  buildAt: string;
}
interface Params extends ParsedUrlQuery {
  slug: string[];
}

const DynamicSSR = ({ post, comments, buildAt }: DynamicSsrProps) => {
  return (
    <>
      <Head>
        <title>{post ? post.title : 'Comments'}</title>
      </Head>
      <Header />
      <p>{`Build at: ${buildAt}`}</p>
      <main>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/dynamic-ssr/${post.id}/comments`}>More comments</Link>
          </>
        )}
        {comments && comments?.length > 0 && (
          <>
            <h2>Comments</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
            <Link href={`/dynamic-ssr/${comments[0].postId}/`}>
              Back to post
            </Link>
          </>
        )}
      </main>
    </>
  );
};

export default DynamicSSR;

export const getServerSideProps: GetServerSideProps<
  DynamicSsrProps,
  Params
> = async (context) => {
  if (!context?.params) {
    return {
      notFound: true,
    };
  }
  const { slug } = context.params;

  if (slug[1] === 'comments') {
    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug[0]}/comments`
    );
    const comments = await commentsRes.json();
    return {
      props: {
        comments,
        buildAt: new Date().toISOString(),
      },
    };
  }

  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug[0]}`
  );
  const post = await postRes.json();

  return {
    props: {
      post,
      buildAt: new Date().toISOString(),
    },
  };
};
