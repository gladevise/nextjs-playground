import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Comment from '@/components/Comment';
import { PostType, CommentType } from '@/types/jsonPlaceholder';
import Layout from './Layout';

interface DynamicPageDetailsProps {
  post?: PostType;
  comments?: CommentType[];
  buildAt: string;
  parentSlug: string;
}

const DynamicPageDetails = ({
  post,
  comments,
  buildAt,
  parentSlug,
}: DynamicPageDetailsProps) => {
  return (
    <>
      <Head>
        <title>{post ? post.title : 'Comments'}</title>
      </Head>
      <Layout>
        <p>{`Build at: ${buildAt}`}</p>
        <main>
          {post && (
            <>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <Link href={`/${parentSlug}/${post.id}/comments`}>
                More comments
              </Link>
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
              <Link href={`/${parentSlug}/${comments[0].postId}/`}>
                Back to post
              </Link>
            </>
          )}
        </main>
      </Layout>
    </>
  );
};

export default DynamicPageDetails;
