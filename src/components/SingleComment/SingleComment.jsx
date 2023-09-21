import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment, updateComment } from '../../reducers/commentReducer';

const SingleComment = ({ _id, elementId, author, comment, createdAt, rate, updatedAt }) => {
  
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({    
    author : author,
    comment : comment,
    rate: rate,
  })
  
  const handleEditClick = () => {
    setIsEditing(true); // Set edit mode to true when "modifica" button is clicked
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleDeleteComment = async (_id) => {
    try {
      // Chiamare l'action deleteComment con l'ID del commento da eliminare
      await dispatch(deleteComment({ commentId: _id }));
      console.log(`Commento con ID ${_id} eliminato con successo`);
    } catch (error) {
      console.error('Errore durante l\'eliminazione del commento:', error);
    }
  }

  const handleUpdateComment = async (_id, e) => {
    e.preventDefault();
    
    try {
      await dispatch(updateComment({ commentId: _id, updatedCommentData: formData }));
      setIsEditing(false); // Exit edit mode after submitting changes
      console.log(`Commento con ID ${_id} aggiornato con successo`);
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del commento:', error);
    }
  }

  return (
<li>
      <h3>Commento: {comment}</h3>
      <p>Valutazione: {rate}</p>
      <p>asin: {elementId}</p>
      <p>Id: {_id}</p>
      <p>Author: {author}</p>
      <p>Creato il: {createdAt}</p>
      <p>Aggiornato il: {updatedAt}</p>

      {/* Display the edit form when isEditing is true */}
      {isEditing ? (
        <form onSubmit={(e) => handleUpdateComment(_id, e)}>
          <label>
            Commento:
            <input
              type="text"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </label>
          <label>
            Valutazione:
            <input
              type="number"
              name="rate"
              min={1}
              max={5}
              value={formData.rate}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Salva</button>
        </form>
      ) : (
        // Display the "modifica" button when not in edit mode
        <button onClick={handleEditClick}>modifica</button>
      )}

      <button onClick={() => handleDeleteComment(_id)}>elimina</button>
    </li>
  );
};

export default SingleComment;
