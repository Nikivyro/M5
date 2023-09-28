import React from 'react';
import SingleComment from '../SingleComment/SingleComment';
import { nanoid } from 'nanoid';
import { Card, Row } from 'react-bootstrap';

export default function CommentList({comments}) {
  return (
    <Card>
      <Card.Body>
      <Card.Title>Lista recensioni</Card.Title>
      <Row className='mt-3'>
        {comments.map((comment) => (
          <SingleComment
            key={nanoid()}
            _id={comment._id} 
            elementId={comment.elementId} 
            comment={comment.comment}
            author={comment.author}
            rate={comment.rate}
            // createdAt={comment.createdAt}
            // updatedAt={comment.updatedAt}
            />
        ))}
      </Row>
      </Card.Body>
    </Card>
  );
}
