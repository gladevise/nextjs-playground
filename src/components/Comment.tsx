import React from 'react';
import { CommentType } from '@/types/jsonPlaceholder';

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
          }}
        >
          {comment.name}
        </div>
        <div>{comment.body}</div>
      </div>
    </>
  );
};

export default Comment;
