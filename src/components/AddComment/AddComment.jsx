import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, isCommentsLoading } from '../../reducers/comment/commentReducer';
import { Accordion, Button, Form, Spinner } from 'react-bootstrap';

export default function AddComment({ bookId }) {
  const dispatch = useDispatch();
  const commentsLoading = useSelector(isCommentsLoading)

  const [formData, setFormData] = useState({
    author: '',
    comment: '',
    rate: '',
    elementId: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.elementId = bookId;

    try {
      await dispatch(addComment({ newCommentData: formData }));
      setFormData({
        author: '',
        comment: '',
        rate: '',
        elementId: bookId,
      });
    } catch (error) {
      console.error('Errore durante l\'aggiunta del commento:', error);
    }
  };

  return (
    <Accordion defaultActiveKey="0" className="mb-4">
      <Accordion.Item>
        <Accordion.Header>
          <h5>Lascia un commento</h5>
        </Accordion.Header>
        <Accordion.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Nome</Form.Label>
              <Form.Control
                type="text"
                id="author"
                name="author"
                placeholder="Il tuo nome"
                value={formData.author}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Commento</Form.Label>
              <Form.Control
                as="textarea"
                id="comment"
                name="comment"
                placeholder="scrivi il tuo commento..."
                value={formData.comment}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                Valutazione <small>(da 1 a 5)</small>
              </Form.Label>
              <Form.Control
                type="number"
                id="rate"
                name="rate"
                min={0}
                max={5}
                value={formData.rate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {commentsLoading ? (
                <>
                  <Spinner animation="grow" /> Caricamento...
                </>
              ) : (
                <><i className="bi bi-pencil me-1"></i> scrivi</>
              )}
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
