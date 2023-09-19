import React from 'react';

const SingleComment = ({ _id, author, comment, createdAt, rate, updatedAt }) => {
  return (
    <li>
      <h3>Commento: {comment}</h3>
      <p>Valutazione: {rate}</p>
      <p>Id: {_id}</p>
      <p>Author: {author}</p>
      <p>Creato il: {createdAt}</p>
      <p>Aggiornato il: {updatedAt}</p>
      <button>modifica</button>
      <button>elimina</button>
    </li>
  );
};

export default SingleComment;
