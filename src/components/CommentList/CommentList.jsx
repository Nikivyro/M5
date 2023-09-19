import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments, isCommentsLoading, allComments } from '../../reducers/commentReducer';
import SingleComment from '../SingleComment/SingleComment';
import { selectedBookId } from '../../reducers/booksReducer';

export default function CommentList({comments}) {
  
  return (
    <div>
      <h2>Lista recensioni</h2>
      <ul>
        {comments.map((comment) => (
          <SingleComment 
            key={comment._id} 
            comment={comment.comment}
            author={comment.author}
            rate={comment.rate}
            />
        ))}
      </ul>
    </div>
  );
}
