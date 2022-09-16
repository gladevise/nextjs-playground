import React from 'react';
import Header from '@/components/Header';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Comment from '@/components/Comment';
import { CommentType, PostType } from '@/types/jsonPlaceholder';
import { ParsedUrlQuery } from 'querystring';

interface DynamicIsrProps {
  post?: PostType;
  comments?: CommentType[];
  buildAt: string;
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const DynamicIsr = ({ post, comments, buildAt }: DynamicIsrProps) => {
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
            <Link href={`/dynamic-isr/${post.id}/comments`}>More comments</Link>
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
            <Link href={`/dynamic-isr/${comments[0].postId}/`}>
              Back to post
            </Link>
          </>
        )}
      </main>
    </>
  );
};

export default DynamicIsr;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = (await res.json()) as PostType[];

  const postPaths = posts.map((post) => ({
    params: {
      slug: [post.id.toString()],
    },
  }));

  const commentPaths = posts.map((post) => ({
    params: {
      slug: [post.id.toString(), 'comments'],
    },
  }));

  return {
    paths: [...postPaths, ...commentPaths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DynamicIsrProps, Params> = async (
  context
) => {
  // export const getStaticProps: GetStaticProps = async ({ params }) => {

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
      revalidate: 10,
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
    revalidate: 10,
  };
};
