import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment, updateComment } from '../../reducers/comment/commentReducer';
import { Button, Col, Form, Modal } from 'react-bootstrap';

const SingleComment = ({ _id, elementId, author, comment, createdAt, rate, updatedAt }) => {
  const dispatch = useDispatch();
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteComment = () => {
    setShowDeleteModal(true);
  }
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({    
    author: author,
    comment: comment,
    rate: rate,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleUpdateComment = async (_id, e) => {
    e.preventDefault();
    
    try {
      await dispatch(updateComment({ commentId: _id, updatedCommentData: formData }));
      setIsEditing(false);
      console.log(`Commento con ID ${_id} aggiornato con successo`);
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del commento:', error);
    }
  }

  const handleConfirmDelete = async () => {
    try {
      await dispatch(deleteComment({ commentId: _id }));
      setShowDeleteModal(false);
      console.log(`Commento con ID ${_id} eliminato con successo`);
    } catch (error) {
      console.error('Errore durante l\'eliminazione del commento:', error);
    }
  }

  return (
    <Col xs={12} className="mb-2">
      <div className="p-3 border rounded-2 bg-light">
        <p>
          <b>Commento:</b> {comment}
        </p>
        <p>
          <b>Valutazione:</b> {rate}
        </p>
        <p>
          <b>Autore:</b> {author}
        </p>
        {isEditing ? (
          <Form onSubmit={(e) => handleUpdateComment(_id, e)}>
            <Form.Group>
              <Form.Label className="fw-bold">Commento:</Form.Label>
              <Form.Control
                type="text"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">Valutazione:</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                min={1}
                max={5}
                value={formData.rate}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              <i className="bi bi-floppy me-1"></i>Salva
            </Button>
          </Form>
        ) : (
          <>
            <Button className="me-2" variant="info" onClick={handleEditClick}>
              <i className="bi bi-pencil-square"></i>Modifica
            </Button>
            <Button variant="danger" onClick={handleDeleteComment}>
              <i className="bi bi-trash-fill"></i>Elimina
            </Button>
          </>
        )}
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
          <Modal.Header closeButton>
            <Modal.Title>Vuoi eliminare questo commento?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeleteModal}>
              Annulla
            </Button>
            <Button variant="primary" onClick={handleConfirmDelete}>
              Si, elimina
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Col>
  );
};

export default SingleComment;
