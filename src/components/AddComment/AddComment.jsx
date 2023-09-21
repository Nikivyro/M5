import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../reducers/commentReducer'

export default function AddComment({bookId}) {
  
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({})

  const handleInputChange = (e) => {
      const {name, value} = e.target

      setFormData({
          ...formData,
          [name]: value,
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    formData.elementId = bookId;

    try {
      await dispatch(addComment({newCommentData: formData }));
      setFormData({
        author: '',
        comment: '',
        rate: '',
        elementId: ''
      });
    } catch (error) {
      console.error('Errore durante l\'aggiunta del commento:', error);
    }
  }


  return (
      <div>
        <form
          onSubmit={handleSubmit}
        >
          <input 
            type="text"
            id="author"
            name="author"
            placeholder='Author'
            onChange={handleInputChange} 
          />
          <input
            type="textarea"
            id="comment"
            name="comment"
            placeholder='your comment...'
            onChange={handleInputChange} 
          />
          <input
            type="number"
            id="rate"
            name="rate"
            min={0}
            max={5}
            onChange={handleInputChange}
          />
          <button type="submit">scrivi</button>
        </form>
      </div>
  )
}