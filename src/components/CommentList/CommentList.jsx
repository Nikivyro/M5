import React from 'react';
import SingleComment from '../SingleComment/SingleComment';
import { nanoid } from 'nanoid';

export default function CommentList({comments}) {
  return (
    <div className="border p-2 shadow my-4">
      <h5>Lista recensioni</h5>
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
