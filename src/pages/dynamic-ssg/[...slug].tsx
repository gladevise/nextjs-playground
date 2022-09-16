import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CommentType, PostType } from '@/types/jsonPlaceholder';
import { ParsedUrlQuery } from 'querystring';
import DynamicPageDetails from '@/components/DynamicPageDetails';

interface DynamicSsgProps {
  post?: PostType;
  comments?: CommentType[];
  buildAt: string;
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const DynamicSsg = ({ post, comments, buildAt }: DynamicSsgProps) => {
  return (
    <DynamicPageDetails
      post={post}
      comments={comments}
      buildAt={buildAt}
      parentSlug="dynamic-ssg"
    />
  );
};

export default DynamicSsg;

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

export const getStaticProps: GetStaticProps<DynamicSsgProps, Params> = async (
  context
) => {
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
