import React from 'react';
import { GetServerSideProps } from 'next';
import { CommentType, PostType } from '@/types/jsonPlaceholder';
import { ParsedUrlQuery } from 'querystring';
import DynamicPageDetails from '@/components/DynamicPageDetails';

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
    <DynamicPageDetails
      post={post}
      comments={comments}
      buildAt={buildAt}
      parentSlug="dynamic-ssr"
    />
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
