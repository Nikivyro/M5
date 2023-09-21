import React from 'react';
import SingleComment from '../SingleComment/SingleComment';
import { nanoid } from 'nanoid';

export default function CommentList({comments}) {
  return (
    <div>
      <h2>Lista recensioni</h2>
      <ul>
        {comments.map((comment) => (
          <SingleComment
            key={nanoid()}
            _id={comment._id} 
            elementId={comment.elementId} 
            comment={comment.comment}
            author={comment.author}
            rate={comment.rate}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
            />
        ))}
      </ul>
    </div>
  );
}
