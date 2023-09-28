import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../reducers/comment/commentReducer'
import { Accordion, Button, Form } from 'react-bootstrap'

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
    <Accordion defaultActiveKey='0' className='mb-4'>
      <Accordion.Item>
        <Accordion.Header><h5>Lascia un commento</h5></Accordion.Header>
        <Accordion.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className='fw-bold'>Nome</Form.Label>
            <Form.Control 
              type="text"
              id="author"
              name="author"
              placeholder="Il tuo nome"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='fw-bold'>Commento</Form.Label>
            <Form.Control 
              as="textarea"
              id="comment"
              name="comment"
              placeholder="scrivi il tuo commento..."
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='fw-bold'>Valutazione <small>(da 1 a 5)</small></Form.Label>
            <Form.Control 
            type="number"
            id="rate"
            name="rate"
            min={0}
            max={5}
            onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant='primary' type="submit"><i className="bi bi-pencil me-1"></i> scrivi</Button>
        </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}